import React from 'react'
import { NavLink } from 'react-router-dom'
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
  FiDatabase
} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/slice/authSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: FiHome },
    { path: '/appointment', name: 'Appointments', icon: FiCalendar },
    { path: '/products', name: 'Products', icon: FiUsers },
    { path: '/orders', name: 'Orders', icon: FiBarChart2 },
    { path: '/users', name: 'users', icon: FiMail },
  ]

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden z-20 ${isCollapsed ? 'hidden' : 'block'}`} 
        onClick={toggleSidebar}
      ></div>
      
      {/* Sidebar - Red Theme */}
      <aside className={`
        fixed lg:relative z-30
        bg-gradient-to-b from-red-700 to-red-900
        text-white transition-all duration-300 ease-in-out
        flex flex-col h-screen shadow-2xl
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${isCollapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
      `}>
        
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-red-600">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="bg-white text-red-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                <span className="font-bold text-lg">BP</span>
              </div>
              <div>
                <h1 className="font-bold text-lg">Battery Pro</h1>
                <p className="text-xs text-red-200">Admin Panel</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="bg-white text-red-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto shadow-lg">
              <span className="font-bold text-xl">BP</span>
            </div>
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
          <div className="flex items-center gap-3">
            <div className="bg-white text-red-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="font-bold text-lg">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
              </span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{user?.name || 'Admin User'}</p>
                <p className="text-xs text-red-200 truncate">{user?.email || 'admin@example.com'}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
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
                  </NavLink>
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