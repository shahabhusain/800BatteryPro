import Image from 'next/image'
import React from 'react'
import herobg from '@/public/hero.jpg'
import { useLocale } from 'next-intl'

const heroEnglishContent = {
  title: "CONTACT",
  btn: "Home / Contact"
}

const heroArabicContent = {
  title: "خبير",
  btn: "تحدث مع خبير"
}

const Hero = () => {
  const locale = useLocale()
  const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
  
  return (
    <div className='text-white'>
      <div className='relative'>
        <Image 
          className='w-full md:h-[450px] h-screen object-cover' 
          src={herobg} 
          alt='image'
        />
        <div className='bg-[#000000BD] absolute top-0 w-full md:h-screen h-screen'></div>
        
        {/* Centered content container */}
        <div className='absolute inset-0 top-32 flex items-center justify-center'>
          <div className={`flex flex-col items-center justify-center text-center gap-y-6 px-4 max-w-3xl mx-auto`}>
            <h1 className='lg:text-[45px] md:text-[43px] sm:text-[33px] text-[25px] font-bold text-white md:leading-[4rem]'>
              {hero.title}
            </h1>
            {/* <button className='text-[12px] md:text-[13px] w-fit bg-[#ffffff12] backdrop-blur-lg md:py-3 md:px-5 py-2 px-4  rounded-full text-white'>
              {hero.btn}
            </button> */}
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Hero