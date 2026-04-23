'use client';

import React, { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  updateFormField,
  submitAppointment,
  clearError,
  clearSuccess,
  hideSuccessPopup,
  selectFormData,
  selectLoading,
  selectError,
  selectSuccess,
  selectShowSuccessPopup,
} from '@/app/store/slices/appointmentSlice';
import SuccessPopup from '../SuccessPopup';

const Form = ({ onSuccess }) => {
  const locale = useLocale();
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const success = useSelector(selectSuccess);
  const showSuccessPopup = useSelector(selectShowSuccessPopup);

  const text = locale === "ar" 
    ? {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        selectService: "اختر الخدمة",
        message: "الرسالة",
        button: "احجز موعداً",
        booking: "جاري الحجز...",
        success: "تم حجز الموعد بنجاح! سنتواصل معك قريباً",
        error: "خطأ: فشل في حجز الموعد",
        successPopupMessage: "سيتواصل معك فريق المبيعات قريباً",
        batteryReplacement: "استبدال البطارية",
        tyreReplacement: "استبدال الإطارات",
        engineService: "خدمة المحرك",
      }
    : {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        selectService: "Select Service",
        message: "Message",
        button: "Book an Appointment",
        booking: "Booking...",
        success: "Appointment booked successfully! We will contact you soon.",
        error: "Error: Failed to book appointment",
        successPopupMessage: "Our sales team will contact you soon",
        batteryReplacement: "Battery Replacement",
        tyreReplacement: "Tyre Replacement",
        engineService: "Engine Service",
      };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField({ field: name, value }));
    
    if (error) {
      dispatch(clearError());
    }
    if (success) {
      dispatch(clearSuccess());
    }
  };

  // Handle form submission - no validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit directly without any validation
    const result = await dispatch(submitAppointment(formData));
    if (submitAppointment.fulfilled.match(result)) {
      // Close modal after successful submission
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 3000);
      }
    }
  };

  // Handle closing the success popup
  const handleCloseSuccessPopup = () => {
    dispatch(hideSuccessPopup());
  };

  // Auto clear success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(clearSuccess());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      
      {/* Success Popup */}
      <SuccessPopup 
        isOpen={showSuccessPopup}
        onClose={handleCloseSuccessPopup}
        message={text.successPopupMessage}
      />
      
      <div className='bg-[#FFFFFF1A] backdrop-blur-lg p-8 rounded-2xl text-white' dir={locale === "ar" ? "rtl" : "ltr"}>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-3 mt-5'>
          {/* Name Field */}
          <div>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={text.name} 
              disabled={loading}
              className='bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md w-full'
            />
          </div>
          
          {/* Email Field */}
          <div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={text.email} 
              disabled={loading}
              className='bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md w-full'
            />
          </div>
          
       <div className=' flex items-center gap-x-3 justify-between'>
             {/* Phone Field */}
          <div className=' w-full'>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={text.phone} 
              disabled={loading}
              className='bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md w-full'
            />
          </div>

          {/* Select Service Field - Properly Integrated */}
          <div className=' w-full'>
            <select
              name="selectService"
              value={formData.selectService}
              onChange={handleChange}
              disabled={loading}
              className='bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md w-full appearance-none cursor-pointer'
            >
              <option value="" disabled className='text-gray-400 '>
                {text.selectService}
              </option>
              <option className=' bg-black' value="Battery Replacement">{text.batteryReplacement}</option>
              <option className=' bg-black' value="Tyre Replacement">{text.tyreReplacement}</option>
              <option className=' bg-black' value="Engine Service">{text.engineService}</option>
            </select>
          </div>
       </div>
          
          {/* Message Field */}
          <div>
            <textarea 
              name="message"
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              placeholder={text.message} 
              disabled={loading}
              className='bg-[#FFFFFF0D] focus:outline-none border-none py-2 px-5 rounded-md w-full resize-none'
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className='py-2 px-5 rounded-full mt-4 md:text-[16px] text-[12px] bg-red-500 text-white uppercase hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? text.booking : text.button}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;