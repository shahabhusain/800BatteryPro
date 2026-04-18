import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './SideBar'

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />
      
      {/* Main Content */}
      <main className={`
        flex-1 transition-all duration-300
        ${isMobile ? 'ml-0' : 'ml-0'}
      `}>
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout