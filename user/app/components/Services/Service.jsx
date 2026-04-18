import Image from 'next/image'
import React from 'react'
import service from '@/public/services/service.jpg'
const ServiceR = () => {
  return (
    <div className=' w-[85%] mx-auto flex items-start py-20 gap-12 justify-between'>
       <div className=' w-1/2 flex flex-col gap-y-3'>
            <p className=' uppercase text-[16px] font-semibold'>sERVICES</p>
           <h1 className=' text-[40px] font-semibold '>Reliable <span className=' text-red-600'> Car Battery </span> Services</h1>
           <Image className=' rounded-2xl' src={service}  alt='service'/>
       </div>
       <div className=' flex flex-col gap-y-8 w-1/2'>
        <p className=' text-[#00000099] text-[16px] font-normal'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
          <p className=' text-[#00000099] text-[16px] font-normal'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
            <p className=' text-[#00000099] text-[16px] font-normal'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
              <p className=' text-[#00000099] text-[16px] font-normal'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
                <p className=' text-[#00000099] text-[16px] font-normal'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
                  <p className=' text-[#00000099] text-[16px] font-normal'>As an artist here to solve such issues, we successfully filed several mandamus cases on behalf of more than 250 artwork and their family members and had approved green cards within several months after filing a complaint.</p>
       </div>
    </div>
  )
}

export default ServiceR
