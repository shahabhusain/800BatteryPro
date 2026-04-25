"use client"
import React, { useState } from 'react'
import { useAppointment } from '../hooks/useAppointment'
import LoadingSpinner from '../components/LoadingSpinner'
import AppointmentModal from '../components/AppointmentModal'
import { 
  FiEye, 
  FiTrash2, 
  FiMail, 
  FiMapPin,
  FiCalendar, 
  FiSearch,
  FiFilter,
  FiDownload,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
  FiPackage,
  FiBriefcase
} from 'react-icons/fi'
import toast from 'react-hot-toast'

const AppointmentsPage = () => {
  const { appointments, loading, deleteAppointment, fetchAppointments } = useAppointment()
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [sortBy, setSortBy] = useState('newest')
  const [filterLocation, setFilterLocation] = useState('all')

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setDeletingId(id)
      await deleteAppointment(id)
      setDeletingId(null)
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Get unique locations for filter
  const getUniqueLocations = () => {
    const locations = appointments?.map(app => app.location).filter(Boolean)
    return ['all', ...new Set(locations)]
  }

  // Get all unique services
  const getAllServices = () => {
    const services = appointments?.flatMap(app => app.selectService).filter(Boolean)
    return [...new Set(services)]
  }

  // Filter appointments based on search and location
  const filteredAppointments = appointments?.filter(appointment => {
    // Search filter
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch = (
      appointment.email?.toLowerCase().includes(searchLower) ||
      appointment.location?.toLowerCase().includes(searchLower) ||
      (Array.isArray(appointment.selectService) && 
       appointment.selectService.some(service => service.toLowerCase().includes(searchLower))) ||
      (typeof appointment.selectService === 'string' && 
       appointment.selectService.toLowerCase().includes(searchLower))
    )
    
    // Location filter
    const matchesLocation = filterLocation === 'all' || appointment.location === filterLocation
    
    return matchesSearch && matchesLocation
  })

  // Sort appointments
  const sortedAppointments = [...filteredAppointments].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt)
    } else if (sortBy === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt)
    } else if (sortBy === 'email') {
      return a.email.localeCompare(b.email)
    } else if (sortBy === 'location') {
      return a.location.localeCompare(b.location)
    } else if (sortBy === 'services') {
      const aServices = Array.isArray(a.selectService) ? a.selectService.length : 1
      const bServices = Array.isArray(b.selectService) ? b.selectService.length : 1
      return bServices - aServices
    }
    return 0
  })

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedAppointments.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(sortedAppointments.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Email', 'Location', 'Services', 'Date']
    const csvData = sortedAppointments.map(app => [
      app.email,
      app.location,
      Array.isArray(app.selectService) ? app.selectService.join(', ') : app.selectService,
      new Date(app.createdAt).toLocaleString()
    ])
    
    const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `second_appointments_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
    toast.success('Exported to CSV successfully!')
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Second Appointments</h1>
        <p className="text-gray-500 mt-1">Manage and view all customer second appointments</p>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by email, location, services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {getUniqueLocations().map(location => (
                <option key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="email">Sort by Email</option>
              <option value="location">Sort by Location</option>
              <option value="services">Sort by Services Count</option>
            </select>
            
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FiDownload size={18} />
              Export CSV
            </button>
            
            <button
              onClick={fetchAppointments}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiRefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats Cards
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-md p-4 text-white">
          <p className="text-sm opacity-90">Total Appointments</p>
          <p className="text-2xl font-bold">{appointments?.length || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-4 text-white">
          <p className="text-sm opacity-90">Unique Locations</p>
          <p className="text-2xl font-bold">{getUniqueLocations().length - 1 || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-4 text-white">
          <p className="text-sm opacity-90">Total Services</p>
          <p className="text-2xl font-bold">{getAllServices().length || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-md p-4 text-white">
          <p className="text-sm opacity-90">This Month</p>
          <p className="text-2xl font-bold">
            {appointments?.filter(app => new Date(app.createdAt).getMonth() === new Date().getMonth()).length || 0}
          </p>
        </div>
      </div> */}
      
      {/* Appointments Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Location</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Services</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12">
                    <div className="flex flex-col items-center">
                      <FiCalendar className="text-gray-400 text-5xl mb-3" />
                      <p className="text-gray-500 text-lg">No appointments found</p>
                      <p className="text-gray-400 text-sm">Try adjusting your search</p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentItems.map((appointment) => (
                  <tr key={appointment.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center">
                          <FiMail className="text-red-600" size={16} />
                        </div>
                        <div>
                          <a href={`mailto:${appointment.email}`} className="text-blue-600 hover:underline font-medium break-all">
                            {appointment.email}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-gray-400" size={14} />
                        <span className="text-gray-900">{appointment.location}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {Array.isArray(appointment.selectService) ? (
                          appointment.selectService.slice(0, 2).map((service, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                              {service}
                            </span>
                          ))
                        ) : (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                            {appointment.selectService}
                          </span>
                        )}
                        {Array.isArray(appointment.selectService) && appointment.selectService.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                            +{appointment.selectService.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FiCalendar size={14} />
                        {formatDate(appointment.createdAt)}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedAppointment(appointment)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <FiEye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(appointment.id)}
                          disabled={deletingId === appointment.id}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {deletingId === appointment.id ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                          ) : (
                            <FiTrash2 size={18} />
                          )}
                        </button>
                      </div>
                    </td>
                </tr>
              ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center px-4 py-3 border-t">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedAppointments.length)} of {sortedAppointments.length} entries
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronLeft size={18} />
              </button>
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={`w-8 h-8 rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? 'bg-red-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Appointment Modal */}
      {selectedAppointment && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  )
}

export default AppointmentsPage