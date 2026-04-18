"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import herobg from '@/public/Home/ban3.webp'
import { GoArrowRight } from 'react-icons/go'
import { useLocale } from 'next-intl'
import AppointmentModal from '../AppointmentModal'

const heroEnglishContent = {
  desc:"24/7 Roadside Assistance & Car Battery Service in Dubai",
  title:{
    span1:"800BatteryPro - Car Battery Services in Dubai ",
    span2:"& Abu Dhabi!"
  },
  desc1:"Car Battery Boosting & Replacement - Roadside Assistance - Premium Car Programming",
  btn:"Call Now",
  btn1:"Book Service Now"
}

const heroArabicContent = {
   desc:"خدمات المساعدة على الطريق واستبدال بطارية السيارة في دبي على مدار 24/7",
  title:{
    span1:"800BatteryPro - خدمات بطاريات السيارات في دبي ",
    span2:"وأبو ظبي!"
  },
  desc1:"شحن واستبدال بطارية السيارة - مساعدة على الطريق - برمجة متطورة للسيارات",
  btn:"اتصل الآن",
  btn1:"احجز الخدمة الآن"
};

const Hero = () => {

  const locale = useLocale()
  const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const hero =
    locale === "en"
      ? heroEnglishContent
      : locale === "ar"
      ? heroArabicContent
      : heroEnglishContent



  return (
<div className='z-50'>
    <div className='text-white '>
      
      <div className='relative'>

        <Image
          className='w-full md:h-[800px] h-[500px] object-cover'
          src={herobg}
          alt='image'
        />

        <div className='bg-[#000000BD] absolute top-0 w-full md:h-screen h-[500px]' />

        <div
          className={`absolute md:top-60 top-32 ${
            locale === "en"
              ? "md:left-36 md:right-0 left-6 right-6"
              : "md:right-36 md:left-0 left-6 right-6"
          } md:max-w-[645px] flex flex-col gap-y-6`}
        >
          <p className='w-fit md:text-[14px] text-[10px] font-medium text-center bg-[#ffffff16] px-3 py-2 rounded-full'>
            {hero.desc}
          </p>

          <h1 className='lg:text-[45px] md:text-[43px] sm:text-[33px] text-[25px] font-bold text-white md:leading-[4rem]'>
            {hero.title.span1}
            <span className='text-red-500'>{hero.title.span2}</span>
          </h1>

          <p className='md:text-[16px] text-[12px] font-normal'>
            {hero.desc1}
          </p>

          <button className='text-[12px] md:text-[16px] w-fit bg-red-600 md:py-3 md:px-5 py-2 px-4 uppercase rounded-full text-white md:flex hidden items-center gap-x-2 hover:bg-red-700 transition'>
            {hero.btn}
            <span className='rotate-[320deg]'>
              <GoArrowRight size={30} />
            </span>
          </button>

          <button   onClick={handleOpenModal} className='text-[12px] md:text-[16px] w-fit bg-red-600 md:py-3 md:px-5 py-2 px-4 uppercase rounded-full text-white flex md:hidden items-center gap-x-2 hover:bg-red-700 transition'>
            {hero.btn1}
            <span className='rotate-[320deg]'>
              <GoArrowRight size={30} />
            </span>
          </button>
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