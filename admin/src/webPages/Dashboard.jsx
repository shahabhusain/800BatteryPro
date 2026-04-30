"use client"
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Dashboard = () => {
  const router = useRouter()
  const { user, token, loading } = useSelector((state) => state.auth)
  const isAdmin = user?.role === 'ADMIN'

  useEffect(() => {
    if (!loading && (!token || !isAdmin)) {
      router.replace('/login')
    }
  }, [token, isAdmin, router, loading])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
      </div>
    )
  }

  if (!token || !isAdmin) return null

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome back, {user?.name}!</p>
        <p className="mt-4 text-purple-800">You have admin privileges.</p>
      </div>
    </div>
  )
}

export default Dashboard