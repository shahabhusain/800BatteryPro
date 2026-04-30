"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, requiredRole = null }) => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth)
  
  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle authentication check
  useEffect(() => {
    if (!isClient) return
    
    // Check localStorage/sessionStorage as fallback
    const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token')
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user')
    
    const hasValidToken = isAuthenticated || storedToken
    let hasValidRole = true
    
    if (requiredRole) {
      const userRole = user?.role || (storedUser && JSON.parse(storedUser)?.role)
      hasValidRole = userRole === requiredRole
    }
    
    // Only redirect if not loading and no valid auth
    if (!loading && !hasValidToken) {
      router.replace('/login')
    } else if (!loading && requiredRole && !hasValidRole) {
      router.replace('/unauthorized') // or '/login'
    }
  }, [isAuthenticated, loading, user, requiredRole, router, isClient])

  // Show loading while checking
  if (loading || !isClient) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying access...</p>
        </div>
      </div>
    )
  }

  // Check auth from storage as fallback
  const hasStoredToken = localStorage.getItem('token') || sessionStorage.getItem('token')
  const hasStoredUser = localStorage.getItem('user') || sessionStorage.getItem('user')
  
  if (!isAuthenticated && !hasStoredToken) {
    return null // Will redirect via useEffect
  }
  
  if (requiredRole) {
    const userRole = user?.role || (hasStoredUser && JSON.parse(hasStoredUser)?.role)
    if (userRole !== requiredRole) {
      return null // Will redirect via useEffect
    }
  }

  return <>{children}</>
}

export default PrivateRoute