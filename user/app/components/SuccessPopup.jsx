// components/SuccessPopup.jsx
'use client';

import React, { useEffect } from 'react';
import { HiOutlineCheckCircle, HiOutlineX } from 'react-icons/hi';

const SuccessPopup = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[300] transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-[301] flex items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 animate-in fade-in zoom-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            aria-label="Close"
          >
            <HiOutlineX size={24} />
          </button>
          
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce-in">
              <HiOutlineCheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          
          {/* Success Message */}
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Successfully Booked!
          </h3>
          <p className="text-center text-gray-600 mb-6">
            {message || "Our sales team will contact you soon"}
          </p>
          
          {/* Button */}
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Got it, Thanks!
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessPopup;