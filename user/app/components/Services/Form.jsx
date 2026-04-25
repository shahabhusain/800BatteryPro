import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAppointment, updateFormField, selectFormData, selectLoading, selectShowSuccessPopup, hideSuccessPopup } from '@/app/store/slices/appointmentSlice';

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  const isLoading = useSelector(selectLoading);
  const showSuccessPopup = useSelector(selectShowSuccessPopup);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField({ field: name, value }));
  };

  const handleServiceToggle = (serviceValue) => {
    // Ensure selectService is always an array
    const currentServices = Array.isArray(formData.selectService) ? formData.selectService : [];
    let updatedServices;
    
    if (currentServices.includes(serviceValue)) {
      updatedServices = currentServices.filter(s => s !== serviceValue);
    } else {
      updatedServices = [...currentServices, serviceValue];
    }
    
    dispatch(updateFormField({ 
      field: 'selectService', 
      value: updatedServices 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const appointmentData = {
      email: formData.email,
      location: formData.location,
      selectService: Array.isArray(formData.selectService) ? formData.selectService : []
    };
    
    await dispatch(submitAppointment(appointmentData));
    setIsSubmitting(false);
  };

  const handleClosePopup = () => {
    dispatch(hideSuccessPopup());
  };

  // Helper function to safely display services
  const getServicesList = () => {
    if (Array.isArray(formData.selectService)) {
      return formData.selectService.join(', ');
    } else if (typeof formData.selectService === 'string') {
      return formData.selectService;
    }
    return 'No services selected';
  };

  return (
    <>
      <div className='w-full max-w-md mx-auto bg-[#FFFFFF1A] backdrop-blur-lg rounded-2xl shadow-2xl p-6'>
        <form onSubmit={handleSubmit} className='md:space-y-5 space-y-3'>
          <div className='space-y-2'>
            <h1 className='text-white md:text-2xl text-xl font-bold'>Book an Appointment</h1>
            <p className='text-gray-300 text-sm'>Our sales team will contact you soon!</p>
          </div>
          
          {/* Email Field - Required */}
          <input
            type='email'
            name='email'
            value={formData.email || ''}
            onChange={handleChange}
            placeholder='Email Address *'
            required
            className='w-full md:px-4 px-3 md:py-3 py-2 bg-[#FFFFFF0D] border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all'
          />
          
          {/* Location Field - Required */}
          <select
            name='location'
            value={formData.location || ''}
            onChange={handleChange}
            required
            className='w-full md:px-4 px-3 md:py-3 py-2 bg-[#FFFFFF0D] border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all appearance-none cursor-pointer'
          >
            <option value='' className='bg-gray-800'>Select Location *</option>
            <option value='dubai' className='bg-gray-800'>Dubai</option>
            <option value='abu-dhabi' className='bg-gray-800'>Abu Dhabi</option>
          </select>

          {/* Services Selection - Multiple Select */}
          <div className='space-y-3'>
            <label className='text-white text-sm font-medium block'>Select Services (multiple) *</label>
            <div className='grid grid-cols-2 gap-4'>
              {[
                { value: 'Battery Replacement', label: 'Battery Replacement' },
                { value: 'Jump Start / Boost', label: 'Jump Start / Boost' },
                { value: '24/7 Roadside Assistance', label: '24/7 Roadside Assistance' },
                { value: 'Any Other', label: 'Any Other' },
              ].map(service => (
                <label
                  key={service.value}
                  className={`flex items-center justify-between md:p-3 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    Array.isArray(formData.selectService) && formData.selectService.includes(service.value)
                      ? 'bg-red-600/20 border-2 border-red-500'
                      : 'bg-gray-700/50 border-2 border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className='flex items-center gap-3 w-full'>
                    <input
                      type='checkbox'
                      value={service.value}
                      checked={Array.isArray(formData.selectService) && formData.selectService.includes(service.value)}
                      onChange={() => handleServiceToggle(service.value)}
                      className='w-4 h-4 text-red-600 focus:ring-red-500 rounded'
                    />
                    <span className='text-white text-sm font-normal flex-1'>{service.label}</span>
                  </div>
                </label>
              ))}
            </div>
            {Array.isArray(formData.selectService) && formData.selectService.length > 0 && (
              <p className='text-green-400 text-xs mt-2'>
                Selected: {formData.selectService.length} service(s)
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSubmitting || isLoading || !(Array.isArray(formData.selectService) && formData.selectService.length)}
            className='w-full bg-gradient-to-r text-sm font-normal from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-red-600/30'
          >
            {isSubmitting || isLoading ? (
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
              ⏱️ Avg. 25 min arrival
            </div>
          </div>
        </form>
      </div>

      {/* Success Modal/Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0  bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={handleClosePopup}
            ></div>

            {/* Center modal */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* Success Icon */}
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Appointment Confirmed! 🎉
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Thank you for booking an appointment with us!
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Our sales team will contact you in 5 Minutes
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;