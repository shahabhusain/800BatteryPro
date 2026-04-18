"use client"

import Image from "next/image"
import React, { useState, useEffect } from "react"

const Service = ({ serviceContent, serviceImg }) => {
  const [location, setLocation] = useState(false)

  useEffect(() => {
    // This ensures the condition is applied after page refresh
    setLocation(window.location.pathname === "/en/services/roadside-assistance")
  }, [])

  return (
    <div className={`md:w-[85%] w-[90%] mx-auto flex flex-col md:flex-row items-center py-20 gap-12 justify-between transition-all duration-300`}>

      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col gap-y-4">
        <p className="uppercase md:text-[16px] text-[12px] font-semibold text-red-600 tracking-wide">
          {serviceContent.subtitle}
        </p>

        <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] text-[26px] font-bold leading-tight">
          {serviceContent.title}
        </h1>

       
          <Image
            className="object-contain rounded-2xl transition-transform duration-500"
            src={serviceImg}
            alt="service"

          />
       
      </div>

      {/* Right Section */}
      <div className="flex flex-col h-[450px] overflow-y-auto gap-y-6 md:w-1/2 pr-4 custom-scrollbar">
        {serviceContent.services.map((item, index) => (
          <div
            key={item.id}
            className="group hover:translate-x-2 transition-transform duration-300"
          >
            <p className="text-[#00000099] md:text-[16px] text-[12px] font-normal leading-relaxed">
              <span className="inline-block w-6 h-0.5 bg-red-500 mr-3 align-middle"></span>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b91c1c;
        }
      `}</style>
    </div>
  )
}

export default Service