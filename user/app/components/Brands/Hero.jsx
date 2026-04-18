"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import herobg from '@/public/brands/bg.webp'
import { GoArrowRight } from 'react-icons/go'
import { useLocale } from 'next-intl'
import Form from '../Services/Form'
import AppointmentModal from '../AppointmentModal'
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "24/7 Emergency & Battery",
    span2: " Services For Premium Cars"
  },
  desc1: "Car Battery Boosting - Battery Replacement - Roadside Assistance - Premium Car Repairs",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
  title: {
    span1: "خدمات الطوارئ والبطارية 24/7",
    span2: "للسيارات الفاخرة"
  },
  desc1: "تشغيل بطارية السيارة - استبدال البطارية - مساعدة على الطريق - إصلاحات سيارات متميزة",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
}

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const locale = useLocale()
  const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
  return (
    <div className=' text-white'>
        <div className='relative'>
               <Image className=' w-full md:h-[800px] h-[600px] object-cover' src={herobg} alt='image'/>
      <div className=' bg-[#000000BD] absolute top-0 w-full md:h-screen h-[600px]'></div>
       <div className={`absolute md:top-60 top-32  ${locale === "en" ? "md:left-36 md:right-36 left-6 right-6" : locale === "ar" ? "md:right-36 md:left-0 left-6 right-6" : null} flex items-center flex-col md:flex-row justify-between `}>
       <div className='flex flex-col gap-y-6 md:w-1/2'>
            <p className=' w-fit md:text-[14px] text-[10px] font-medium text-center bg-[#ffffff16] px-3 py-2 rounded-full'>{hero.desc}</p>
        <h1 className=' lg:text-[45px] md:text-[43px] sm:text-[33px] text-[25px] font-bold text-white md:leading-[4rem]'>{hero.title.span1}<span className=' text-red-500'>{hero.title.span2}</span></h1>
        <p className=' md:text-[16px] text-[12px] font-normal'>{hero.desc1}</p>
              <button className=' text-[12px] md:text-[16px] w-fit bg-red-600 md:py-3 md:px-5 py-2 px-4 uppercase rounded-full text-white md:flex hidden items-center gap-x-2'>{hero.btn}<span className=' rotate-320'><GoArrowRight size={30} /></span></button>
                    <button   onClick={handleOpenModal} className=' text-[12px] md:text-[16px] w-fit bg-red-600 md:py-3 md:px-5 py-2 px-4 uppercase rounded-full text-white flex md:hidden items-center gap-x-2'>{hero.btn1}<span className=' rotate-320'><GoArrowRight size={30} /></span></button>
       </div>
         <div className={` w-[45%] md:block hidden ${locale === "ar" ? "ml-10" : ""} `}>
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
