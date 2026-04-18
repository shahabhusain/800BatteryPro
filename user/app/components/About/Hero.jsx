import Image from 'next/image'
import React from 'react'
import herobg from '@/public/hero.jpg'
import { useLocale } from 'next-intl'

const heroEnglishContent = {
  title: "About Us",
  desc: "800BatteryPro - A-Z Car Battery Replacement & Advanced Car Repair Services in Dubai. Fast & Reliable RSA Services Under 30 Minutes!"
}

const heroArabicContent = {
  title: "من نحن",
  desc: "800BatteryPro - خدمات استبدال بطارية السيارة الشاملة وإصلاح السيارات المتقدم في دبي. خدمات مساعدة على الطريق سريعة وموثوقة خلال 30 دقيقة!"
}

const Hero = () => {
  const locale = useLocale()
  const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
  
  return (
    <div className='text-white'>
      <div className='relative'>
        <Image 
          className='w-full md:h-[450px] h-[350px] object-cover' 
          src={herobg} 
          alt='image'
        />
        <div className='bg-[#000000BD] absolute top-0 w-full md:h-screen h-screen'></div>
        
        {/* Centered content container */}
        <div className={`absolute  md:top-52 top-32 ${locale === "ar" ? "md:right-32" : "md:left-32"} `}>
          <div className={`flex flex-col  gap-y-2 px-4`}>
            <h1 className='lg:text-[45px] md:text-[43px] sm:text-[33px] text-[25px] font-bold text-white md:leading-[4rem]'>
              {hero.title}
            </h1>
          <p className=' md:max-w-2xl'>{hero.desc}</p>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Hero