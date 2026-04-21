"use client"
import { useState, useEffect } from 'react'
import { appointmentAPI } from '../api/appointmentApi'
import toast from 'react-hot-toast'

export const useAppointment = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchAppointments = async () => {
    setLoading(true)
    try {
      const response = await appointmentAPI.getAll()
      console.log('API Response:', response.data) // Debug log
      
      // Handle different response structures
      let appointmentsData = []
      if (response.data && Array.isArray(response.data)) {
        // If response is array directly
        appointmentsData = response.data
      } else if (response.data && response.data.appointments && Array.isArray(response.data.appointments)) {
        // If response has appointments property
        appointmentsData = response.data.appointments
      } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
        // If response has data property
        appointmentsData = response.data.data
      } else {
        appointmentsData = []
      }
      
      setAppointments(appointmentsData)
      setError(null)
    } catch (err) {
      console.error('Fetch error:', err)
      setError(err.response?.data?.error || 'Failed to fetch appointments')
      toast.error('Failed to fetch appointments')
      setAppointments([])
    } finally {
      setLoading(false)
    }
  }

  const deleteAppointment = async (id) => {
    try {
      await appointmentAPI.delete(id)
      toast.success('Appointment deleted successfully')
      await fetchAppointments() // Refresh the list
      return true
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to delete appointment')
      return false
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return {
    appointments,
    loading,
    error,
    fetchAppointments,
    deleteAppointment,
  }
}