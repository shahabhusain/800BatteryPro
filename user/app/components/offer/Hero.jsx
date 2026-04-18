import Image from 'next/image'
import React from 'react'
import herobg from '@/public/hero.jpg'
import { useLocale } from 'next-intl'

const heroEnglishContent = {
  title: "OFFERS",
  desc: "800BatteryPro provides premium car battery replacement and 24/7 roadside assistance across Dubai & Abu Dhabi. Our certified technicians arrive in under 30 minutes with genuine OEM-approved batteries. Free battery testing, fast jump-starts, and professional installation with 100% customer satisfaction guaranteed."
}

const heroArabicContent = {
  title: "العروض",
  desc: "يقدم 800BatteryPro خدمات متميزة لاستبدال بطارية السيارات والمساعدة على الطريق 24/7 في دبي وأبو ظبي. يصل فنيونا المعتمدون خلال 30 دقيقة مع بطاريات أصلية معتمدة من المصنع. فحص مجاني للبطارية، تشغيل سريع، وتركيب احترافي مع ضمان رضا العملاء بنسبة 100٪."
}

const Hero = () => {
  const locale = useLocale()
  const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
  
  return (
    <div className='text-white'>
      <div className='relative'>
        <Image 
          className='w-full md:h-[450px] h-[400px] object-cover' 
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