"use client"
import React from 'react'
import { FiX, FiMail, FiMapPin, FiClock, FiPackage } from 'react-icons/fi'

const AppointmentModal = ({ appointment, onClose }) => {
  if (!appointment) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b bg-neutral-800 rounded-t-xl">
          <h3 className="text-xl font-semibold text-white">Appointment Details</h3>
          <button onClick={onClose} className="text-white hover:text-neutral-300 transition-colors">
            <FiX size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          {/* Email Section */}
          <div className="flex items-start gap-3">
            <div className="bg-neutral-100 rounded-full p-2">
              <FiMail className="text-neutral-600" size={20} />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-neutral-500 uppercase">Email</label>
              <a href={`mailto:${appointment.email}`} className="text-blue-600 hover:underline block mt-1 break-all">
                {appointment.email}
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex items-start gap-3">
            <div className="bg-neutral-100 rounded-full p-2">
              <FiMapPin className="text-neutral-600" size={20} />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-neutral-500 uppercase">Location</label>
              <p className="text-neutral-700 mt-1">{appointment.location}</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex items-start gap-3">
            <div className="bg-neutral-100 rounded-full p-2">
              <FiPackage className="text-neutral-600" size={20} />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-neutral-500 uppercase">Services</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {Array.isArray(appointment.selectService) ? (
                  appointment.selectService.map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                      {service}
                    </span>
                  ))
                ) : (
                  <span className="text-neutral-700">{appointment.selectService}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Created Date */}
          <div className="flex items-start gap-3">
            <div className="bg-neutral-100 rounded-full p-2">
              <FiClock className="text-neutral-600" size={20} />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-neutral-500 uppercase">Created</label>
              <p className="text-neutral-700 mt-1">{new Date(appointment.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t bg-neutral-50 rounded-b-xl">
          <button onClick={onClose} className="w-full bg-neutral-700 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal