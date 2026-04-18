import Image from 'next/image'
import React from 'react'
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa'
import map from '@/public/Home/map.png'
const Forms = () => {
    const cards = [
        {
            title:"Contact",
            icon:<FaPhone />,
            desc:"+971528475675"
        },
        {
            title:"Email Address",
            icon:<FaMailBulk />,
            desc:"service@800batterypro.com"
        },
        {
            title:"Location",
            icon:<FaLocationArrow />,
            desc:"Dubai and Abu Dhabi, UAE"
        },
    ]
  return (
     <div className=' w-[85%] mx-auto pt-20'>
         <div className=' flex items-center gap-12 justify-between'>
       {
        cards.map((item, index) => (
            <div key={index} className=' bg-[#F8F8F8] w-full p-6 rounded-xl flex flex-col gap-y-4 '>
        <h2 className='text-[20px] flex items-center justify-between font-semibold text-black'>{item.title} <span className=' bg-white p-4 rounded-full'>{item.icon}</span></h2>
        <p className=' text-[18px] font-medium'>{item.desc} </p>
      </div>
        ))
       }
    </div>
    <div className=' flex items-center justify-between gap-12 mt-20'>
        <div className=' w-1/2'>
          <form className=' border-[1px] flex flex-col gap-y-4 border-[#00000047] p-6 rounded-2xl'>
           <h2 className='24px font-bold'>Send A Message</h2>
             <div className=' flex items-center gap-2'>
                 <input className=' focus:outline-none w-full border-none bg-[#F8F8F8] py-2 px-4 rounded-md' type="text" placeholder='First Name' />
                 <input className='focus:outline-none w-full border-none bg-[#F8F8F8] py-2 px-4 rounded-md' type="text" placeholder='Last Name' />
             </div>
              <input className='focus:outline-none border-none bg-[#F8F8F8] py-2 px-4 rounded-md' type="email" placeholder='Email' />
           <input className='focus:outline-none border-none bg-[#F8F8F8] py-2 px-4 rounded-md' type="phone" placeholder='Phone Number' />
           <textarea className='focus:outline-none border-none bg-[#F8F8F8] py-2 px-4 rounded-md' placeholder='message' rows={7}></textarea>
           <button className=' bg-red-500 py-2 px-6 rounded-full text-white'>Submit</button>
          </form>
        </div>
         <div className=' w-1/2 border-[1px] border-[#00000047] p-6 rounded-2xl'>
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1776336745190!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="800MotorGuru Location"
                            className="w-full h-[450px] dark:opacity-90"
                        ></iframe>
               
    
         </div>
    </div>
     </div>
  )
}

export default Forms
