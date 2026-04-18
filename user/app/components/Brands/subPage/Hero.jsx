"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import { GoArrowRight } from 'react-icons/go'
import Form from '../../Services/Form'
import { useLocale } from 'next-intl'
import AppointmentModal from '../../AppointmentModal'


const Hero = ({hero, herobg}) => {
    const locale = useLocale()
     const [isModalOpen, setIsModalOpen] = useState(false);
       // Handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=' text-white'>
        <div className='relative'>
               <Image className=' w-full md:h-[800px] h-[550px] object-cover' src={herobg} alt='image'/>
      <div className=' bg-[#000000BD] absolute top-0 w-full md:h-screen h-screen'></div>
       <div className={`absolute md:top-60 top-32  ${locale === "en" ? "md:left-36 md:right-36 left-6 right-6" : locale === "ar" ? "md:right-36 md:left-0 left-6 right-6" : null} flex items-center flex-col md:flex-row justify-between `}>
       <div className='flex flex-col gap-y-6 md:w-1/2'>
            <p className=' w-fit md:text-[14px] text-[10px] font-medium text-center bg-[#ffffff16] px-3 py-2 rounded-full'>{hero.desc}</p>
        <h1 className=' lg:text-[45px] md:text-[43px] sm:text-[33px] text-[23px] font-bold text-white md:leading-[4rem]'>{hero.title.span1}<span className=' text-red-500'>{hero.title.span2}</span></h1>
        <p className=' md:text-[16px] text-[12px] font-normal'>{hero.desc1}</p>
              <a href='tel:9234878979' className=' text-[12px] md:text-[16px] w-fit bg-red-600 md:py-3 md:px-5 py-2 px-4 uppercase rounded-full text-white md:flex hidden items-center gap-x-2'>{hero.btn}<span className=' rotate-320'><GoArrowRight size={30} /></span></a>
                    <button  onClick={handleOpenModal} className=' text-[12px] md:text-[16px] w-fit bg-red-600 md:py-3 md:px-5 py-2 px-4 uppercase rounded-full text-white flex md:hidden items-center gap-x-2'>{hero.btn1}<span className=' rotate-320'><GoArrowRight size={30} /></span></button>
       </div>
         <div className={`w-[45%] md:block hidden ${locale === "ar" ? " ml-10" : ""} `}>
          <Form />
         </div>
       </div>
        </div>
         {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  )
}

export default Hero
