import React from 'react'

const ECU = ({content = [
        {
            title:"ECU Repair is recommended when:",
            list:["The ECU has suffered component-level failure (capacitors, relays, transistors) that can be replaced at circuit board level", "The ECU software has corrupted and requires reprogramming rather than hardware replacement", "The ECU fault was caused by an external event (dead battery, bad jump start, voltage spike) rather than internal failure", "The ECU is no longer available new from the manufacturer (older or discontinued models) Cost saving is a priority - ECU repair typically costs 40 to 70% less than a new ECU from the dealer"]
        },
        {
            title:"ECU Replacement is recommended when:",
            list:["The ECU's processor or main circuit board has suffered irreparable physical damageThe repair cost approaches the price of a quality used or remanufactured ECU The vehicle requires the latest software version that cannot be flashed onto the existing unit", "800BatteryPro's ECU specialists will always give you an honest assessment of whether repair or replacement is the right choice for your specific vehicle — and carry out whichever option gives you the best value and reliability outcome."]
        },
    ], desc="Car Brands We Serve", title="ECU Repair vs ECU Replacement — Which Is Right for Your Car in the UAE?"}) => {
    
  return (
    <div className='bg-[#C1121F] p-12 flex flex-col items-center justify-center gap-y-4 text-white rounded-2xl w-[90%] mx-auto my-20'>
         <p className=' font-bold title text-[#FFFFFF99]'>{desc}</p>
           <h2 className=' max-w-5xl text-center title lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-bold'>{title}</h2>
            <div className=' grid grid-cols-2 gap-4 mt-12'>
                {
                  content.map((item, index) => (
                     <div key={index} className='border-[2px] flex flex-col gap-y-3 backdrop-blur-xl bg-[#ffffff1f] border-[#ffffff42] p-6 rounded-md'>
                           <h3 className=' text-[24px] font-bold'>{item.title}</h3>
                           {
                            item.list.map((item, index) => (
                                <p key={index}>- {item}</p>
                            ))
                           }
                      </div>
                  ))
                }
            </div>
    </div>
  )
}

export default ECU
