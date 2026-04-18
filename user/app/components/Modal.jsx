'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineX } from 'react-icons/hi';

const Modal = ({ isOpen, onClose, children, title }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  // Use portal to render modal at the root level
  return createPortal(
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 backdrop-blur-2xl bg-black/70 z-[9999] transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div 
          className="relative w-full max-w-md bg-transparent rounded-2xl shadow-2xl transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300 p-2"
            aria-label="Close modal"
          >
            <HiOutlineX size={28} />
          </button>
          
          {/* Modal content */}
          <div>
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body // This renders modal directly in body, bypassing all parent z-index contexts
  );
};

export default Modal;