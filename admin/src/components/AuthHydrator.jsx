'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hydrateAuth } from '@/store/slice/authSlice'

export function AuthHydrator({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    // This runs only on the client side
    const user = localStorage.getItem("user")
    const token = localStorage.getItem("token")
    
    if (token) {
      dispatch(hydrateAuth({
        user: user ? JSON.parse(user) : null,
        token: token
      }))
    }
  }, [dispatch])

  return children
}