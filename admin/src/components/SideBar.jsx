'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  FiHome, 
  FiCalendar, 
  FiUsers, 
  FiSettings, 
  FiBarChart2,
  FiMail,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiDatabase,
  FiMenu
} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slice/authSlice'
import toast from 'react-hot-toast'

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const pathname = usePathname()
  const { user } = useSelector((state) => state.auth)

  const menuItems = [
    { path: '/', name: 'Appointments', icon: FiCalendar },
    { path: '/dashboard', name: 'Dashboard', icon: FiHome },
    { path: '/users', name: 'Users', icon: FiUsers },
    { path: '/analytics', name: 'Analytics', icon: FiBarChart2 },
    { path: '/messages', name: 'Messages', icon: FiMail },
    { path: '/database', name: 'Database', icon: FiDatabase },
    { path: '/settings', name: 'Settings', icon: FiSettings },
  ]

  // Close mobile sidebar when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out successfully')
    router.push('/login')
  }

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsMobileOpen(!isMobileOpen)
    } else {
      setIsCollapsed(!isCollapsed)
    }
  }

  const closeMobileSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsMobileOpen(false)
    }
  }

  const getInitials = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase()
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase()
    }
    return 'A'
  }

  const getDisplayName = () => {
    if (user?.name) return user.name
    if (user?.email) return user.email.split('@')[0]
    return 'Admin User'
  }

  const getDisplayEmail = () => {
    if (user?.email) return user.email
    return 'admin@example.com'
  }

  const sidebarWidth = isCollapsed ? 'w-20' : 'w-64'
  const isActiveLink = (path) => {
    return pathname === path
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-red-600 text-white p-2 rounded-lg shadow-lg"
      >
        <FiMenu size={24} />
      </button>

      {/* Mobile sidebar backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden z-40 ${
          isMobileOpen ? 'block' : 'hidden'
        }`} 
        onClick={closeMobileSidebar}
      ></div>
      
      {/* Sidebar - Red Theme */}
      <aside className={`
        fixed lg:relative z-50
        bg-gradient-to-b from-red-700 to-red-900
        text-white transition-all duration-300 ease-in-out
        flex flex-col h-screen shadow-2xl
        ${sidebarWidth}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed && 'lg:translate-x-0'}
      `}>
        
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-red-600">
          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2 flex-1">
              <div className="bg-white text-red-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                <span className="font-bold text-lg">BP</span>
              </div>
              <div>
                <h1 className="font-bold text-lg">Battery Pro</h1>
                <p className="text-xs text-red-200">Admin Panel</p>
              </div>
            </Link>
          )}
          {isCollapsed && (
            <Link href="/" className="block mx-auto">
              <div className="bg-white text-red-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                <span className="font-bold text-xl">BP</span>
              </div>
            </Link>
          )}
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-red-600 transition-colors"
          >
            {isCollapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}
          </button>
        </div>

        {/* User Profile Section */}
        <div className={`p-4 border-b border-red-600 ${isCollapsed ? 'text-center' : ''}`}>
          <Link href="/profile" className="flex items-center gap-3">
            <div className="bg-white text-red-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="font-bold text-lg">{getInitials()}</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{getDisplayName()}</p>
                <p className="text-xs text-red-200 truncate">{getDisplayEmail()}</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = isActiveLink(item.path)
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={closeMobileSidebar}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-white text-red-600 shadow-lg' 
                        : 'text-red-100 hover:bg-red-600 hover:text-white'
                      }
                      ${isCollapsed ? 'justify-center' : ''}
                    `}
                    title={isCollapsed ? item.name : ''}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-red-600">
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
              text-red-100 hover:bg-red-600 hover:text-white transition-all duration-200
              ${isCollapsed ? 'justify-center' : ''}
            `}
            title={isCollapsed ? 'Logout' : ''}
          >
            <FiLogOut size={20} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  )
}

export default SideBar