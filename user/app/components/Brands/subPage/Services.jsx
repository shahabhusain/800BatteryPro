import Image from 'next/image'
import React from 'react'
const Services = ({services}) => {


  return (
    <div className=' w-[85%] mx-auto flex flex-col gap-y-3 py-20'>
      <p className=' uppercase text-center text-[16px] font-semibold'>sERVICES</p>
      <h1 className=' ld:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-center'><span className=' font-normal'>Reliable</span> <span className=' text-red-700'>Car Battery</span> Services</h1>
      <div className=' grid md:grid-cols-4 grid-cols-1 gap-3 mt-5'>
           {
            services.map((item, index) => (
              <div key={index}>
                <Image width={380} height={190} src={item.img} alt='service'/>
                 <div className=' flex flex-col gap-y-3 p-4 bg-[#f8f8f8]'>
                    <h2 className=' text-[24px] font-bold'>{item.title}</h2>
                <p className=' text-[#4E4E4E] text-[16px] font-normal'>{item.desc}</p>
                 </div>
              </div>
            ))
           }
      </div>
    </div>
  )
}

export default Services
