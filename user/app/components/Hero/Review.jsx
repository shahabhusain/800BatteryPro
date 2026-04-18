"use client"
import React, { useEffect, useState } from 'react'
import reviewW from '@/public/Home/reviewW.svg'
import reviewB from '@/public/Home/reviewB.svg'
import Image from 'next/image'
const Review = () => {
        const [scrolled, setScrolled] = useState(false)
      useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div>
               {/* Floating Review Button */}
      <div className='fixed top-52 right-0 z-[9999] transition-all duration-500'>
        {scrolled ? (
          <Image className=' md:w-[70px] w-[30px]' src={reviewB} alt='review white' />
        ) : (
          <Image className=' md:w-[70px] w-[30px]' src={reviewW} alt='review black' />
        )}
      </div>
    </div>
  )
}

export default Review
