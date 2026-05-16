"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import serve from '@/public/locations/serve.png'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'
const Serve = ({carIssuesFaqs = [
         {
            question:" Dead or Weak Car Battery",
            answer:"The most common cause of ECU failure in the UAE. When a battery's voltage drops below the ECU's minimum operating threshold, the processor can corrupt its own programming or damage its internal components. Long periods of vehicle inactivity in Abu Dhabi and Dubai's extreme heat - where temperatures in basement car parks regularly exceed 60°C - accelerate battery discharge and ECU vulnerability dramatically."
         },
          {
            question:"Incorrect Jump Start",
            answer:"Connecting jump start cables in the wrong order, or using a faulty power bank, sends a reverse polarity voltage spike directly through the ECU. This is the second most common cause of ECU damage in the UAE - and is entirely preventable with a professional battery boost from 800BatteryPro.Voltage Spikes from Alternator Failure - A failing alternator produces irregular voltage that damages ECU circuits over time, often without any immediate warning lights until the ECU has already been compromised."
         },
          {
            question:" Moisture and Corrosion ",
            answer:"In the UAE's occasional high-humidity periods and dusty conditions, moisture can enter ECU housings through damaged seals - causing corrosion on circuit board connections, capacitor failure, and intermittent ECU faults. Physical Damage - Accidents, heavy vibration on poor road surfaces, and improper handling during previous repair work can damage ECU mounting brackets and internal solder joints."
         },
    ], desc="Car Brands We Serve", span1="What Causes ECU Failure in", span2="Dubai & Abu Dhabi?" }) => {
    const [openFaq, setOpenFaq] = useState(null)
    const handleOpen = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }
  return (
    <div className=' flex flex-col md:flex-row md:my-20 my-10 justify-between items-center gap-x-12 w-[90%] mx-auto'>
      <div className=' md:w-[60%] flex flex-col md:gap-y-6 gap-3'>
         <p className=' font-bold title'>{desc}</p>
         <h2 className=' title lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-black'>{span1} <span className=' text-red-600'> {span2}</span></h2>
         <div className=' flex flex-col gap-y-6 md:mt-12 h-[300px] overflow-y-auto custom-scroll mt-6'>
               {
                carIssuesFaqs.map((item, index) =>(
                  <div className=' flex bg-[#F8F8F8] p-4 rounded-md transform transition-all duration-300 ease-in-out cursor-pointer flex-col md:gap-y-6 gap-y-3 ' onClick={() =>handleOpen(index)}>
                     <h3 className=' md:text-xl text-md font-bold  flex items-center justify-between '>{item.question} <span>{openFaq === index ? <MdArrowDownward /> : <MdArrowUpward />}</span></h3>
                      {
                        openFaq === index && <p>{item.answer}</p>
                      }
                   </div>
            ))
          }
         </div>
      </div>

      <Image className=' md:w-[30%]' src={serve} alt='serve-image'/>
    </div>
  )
}

export default Serve
