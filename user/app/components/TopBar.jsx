import React from 'react'
import {FaDribbble, FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'
import LaguageSwitcher from './LaguageSwitcher'
const TopBar = () => {
  return (
         <div className=' md:flex hidden items-center justify-center w-full'>
             <div className=' absolute z-[1000] w-[70%] top-8 flex items-center justify-between '>
   <div className=' bg-[#FFFFFF1A] py-2.5 px-4 rounded-full flex items-center gap-12'>
          <button className=' text-[10px] font-medium flex items-center gap-2 text-white'><FaMailBulk size={15} /> <span>info@800batterypro.com</span></button>
       <button className=' text-[10px] font-medium flex items-center gap-2 text-white'><FaLocationArrow size={15} /> <span>Dubai and Abu Dhabi, UAE</span></button>
   </div>
       <div className=' flex items-center gap-3'>
        {/* language selection */}
          {/* <LaguageSwitcher /> */}
         {/* language selection */}
         <div className=' text-white flex items-center gap-x-3'>
                        <a href=" https://www.youtube.com/@800batteryPro" target='_blank'> <FaYoutube size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' /></a>
                         <a href="https://www.pinterest.com/800batterypro/" target='_blank'> <FaPinterest size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' /></a>
                          <a href="https://www.facebook.com/profile.php?id=61582172574167" target='_blank'> <FaFacebook size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' /></a>
         </div>
       </div>
    </div>
         </div>
  )
}

export default TopBar
