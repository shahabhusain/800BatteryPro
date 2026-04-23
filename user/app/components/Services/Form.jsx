import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    urgency: 'standard',
    phone: '',
    location: 'dubai',
    services: ['battery-replacement']
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceToggle = (serviceValue) => {
    setFormData(prev => {
      const currentServices = [...prev.services]
      if (currentServices.includes(serviceValue)) {
        return {
          ...prev,
          services: currentServices.filter(s => s !== serviceValue)
        }
      } else {
        return {
          ...prev,
          services: [...currentServices, serviceValue]
        }
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitted(true)
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className='w-full max-w-md mx-auto bg-[#FFFFFF1A] backdrop-blur-lg rounded-2xl shadow-2xl p-6'>
      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='space-y-2'>
          <div className='flex gap-3 bg-[#FFFFFF0D] p-3 rounded-full'>
            <button
              type='button'
              onClick={() => setFormData(prev => ({ ...prev, urgency: 'standard' }))}
              className={`flex-1 py-2 text-sm font-normal px-4 rounded-full transition-all duration-200 ${
                formData.urgency === 'standard'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : ''
              }`}
            >
              Standard Now
            </button>
            <button
              type='button'
              onClick={() => setFormData(prev => ({ ...prev, urgency: 'now' }))}
              className={`flex-1 py-2 px-4 text-sm font-normal rounded-full transition-all duration-200 ${
                formData.urgency === 'now'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : ''
              }`}
            >
              Planning ahead
            </button>
          </div>
        </div>
        
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='+971'
          required
          className='w-full px-4 py-3 bg-[#FFFFFF0D] border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all'
        />
        
        <select
          name='location'
          value={formData.location}
          onChange={handleChange}
          required
          className='w-full px-4 py-3 bg-[#FFFFFF0D] border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all appearance-none cursor-pointer'
        >
          <option value='dubai' className='bg-gray-800'>Dubai</option>
          <option value='abu-dhabi' className='bg-gray-800'>Abu Dhabi</option>
        </select>

        <div className='space-y-3'>
          <label className='text-white text-sm font-medium block'>Services Needed (select multiple)</label>
          <div className='grid grid-cols-2 gap-4'>
            {[
              { value: 'battery-replacement', label: 'Battery Replacement' },
              { value: 'jump-start', label: 'Jump start / boost' },
              { value: 'battery-test', label: 'Any Others' },
              { value: 'roadside-assistance', label: 'Roadside assistance' }
            ].map(service => (
              <label
                key={service.value}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  formData.services.includes(service.value)
                    ? 'bg-red-600/20 border-2 border-red-500'
                    : 'bg-gray-700/50 border-2 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className='flex items-center gap-3'>
                  <input
                    type='checkbox'
                    value={service.value}
                    checked={formData.services.includes(service.value)}
                    onChange={() => handleServiceToggle(service.value)}
                    className='w-4 h-4 text-red-600 focus:ring-red-500 rounded'
                  />
                  <span className='text-white text-sm font-normal'>{service.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-gradient-to-r text-sm font-normal from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-red-600/30'
        >
          {isSubmitting ? (
            <div className='flex items-center justify-center gap-2'>
              <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
              <span>Processing...</span>
            </div>
          ) : (
            'CONFIRM BOOKING'
          )}
        </button>

        <div className='flex items-center justify-center gap-4 pt-1 border-t border-gray-700'>
          <div className='flex items-center gap-1'>
            <span className='text-yellow-400 text-lg'>⭐</span>
            <span className='text-white font-bold'>4.9</span>
            <span className='text-gray-400 text-sm'>(10,000+ customers)</span>
          </div>
          <div className='w-px h-4 bg-gray-600'></div>
          <div className='text-gray-400 text-sm'>
            ⏱️ Avg. 30 min arrival
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form