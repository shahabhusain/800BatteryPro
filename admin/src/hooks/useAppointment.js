import { useState, useEffect, useCallback } from 'react'
import { appointmentAPI } from '../api/appointmentApi'
import toast from 'react-hot-toast'

export const useAppointment = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAppointments = useCallback(async () => {
    try {
      setLoading(true)
      const response = await appointmentAPI.getAll()
      // Handle both array response and paginated response
      const appointmentsData = response.data.data || response.data
      setAppointments(Array.isArray(appointmentsData) ? appointmentsData : [])
      setError(null)
    } catch (err) {
      console.error('Error fetching appointments:', err)
      setError(err.response?.data?.message || 'Failed to fetch appointments')
      toast.error('Failed to fetch appointments')
    } finally {
      setLoading(false)
    }
  }, [])

  const createAppointment = async (appointmentData) => {
    try {
      const response = await appointmentAPI.create(appointmentData)
      toast.success(response.data.message || 'Appointment created successfully!')
      await fetchAppointments() // Refresh the list
      return response.data
    } catch (err) {
      console.error('Error creating appointment:', err)
      toast.error(err.response?.data?.message || 'Failed to create appointment')
      throw err
    }
  }

  const deleteAppointment = async (id) => {
    try {
      const response = await appointmentAPI.delete(id)
      toast.success(response.data.message || 'Appointment deleted successfully!')
      await fetchAppointments() // Refresh the list
      return response.data
    } catch (err) {
      console.error('Error deleting appointment:', err)
      toast.error(err.response?.data?.message || 'Failed to delete appointment')
      throw err
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [fetchAppointments])

  return {
    appointments,
    loading,
    error,
    fetchAppointments,
    createAppointment,
    deleteAppointment
  }
}