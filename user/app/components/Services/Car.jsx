import Image from 'next/image'
import React from 'react'
import car from '@/public/brands/serviceBanners/car.png'
const Car = () => {
  return (
      <div className=' flex items-center justify-center md:mt-72'>
         <div className=' absolute md:-top-[26rem] '>
      <Image className='w-[860px] h-[560px] object-contain' src={car} alt='car'/>
    </div>
      </div>
  )
}

export default Car