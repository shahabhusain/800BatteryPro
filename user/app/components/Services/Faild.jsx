import React from 'react'
import { FaHome } from 'react-icons/fa'

const Faild = ({content = [
       {
            icon:<FaHome />,
            title:"Check Engine Light (MIL)",
            desc:"The most universal ECU fault signal. While not always indicating ECU failure specifically, a persistent check engine light that returns immediately after clearing is often a sign of an underlying ECU fault."
        },
         {
            icon:<FaHome />,
            title:" Car Won't Start or Hard Starting",
            desc:"If the ECU cannot communicate with the engine's sensors and actuators, the engine management system fails to initiate fuel injection or ignition - leaving you stranded. This is frequently misdiagnosed as a battery issue when the root cause is ECU failure triggered by a previous battery drain."
        },
         {
            icon:<FaHome />,
            title:"Sudden Drop in Fuel Economy",
            desc:"The ECU manages fuel injection timing and duration. A faulty ECU sends incorrect fuel commands - resulting in rich or lean running that significantly increases fuel consumption."
        },
         {
            icon:<FaHome />,
            title:"Engine Misfires and Rough Running",
            desc:"ECU faults affecting ignition timing cause cylinders to misfire irregularly, producing rough idle, vibration, and loss of power - particularly noticeable in Dubai's stop-start traffic."
        },
         {
            icon:<FaHome />,
            title:"Erratic Automatic Transmission Behavior",
            desc:"Harsh or delayed gear changes, transmission hunting between gears, and loss of Sport or manual mode are classic TCM fault symptoms often caused by ECU communication errors."
        },
         {
            icon:<FaHome />,
            title:"Multiple Warning Lights Simultaneously",
            desc:"When the BCM or main ECU fails, multiple unrelated warning lights appear at the same time — ABS, traction control, airbag, and engine lights all illuminating together is a strong indicator of a central ECU or BCM fault."
        },
        
    ], desc="Car Brands We Serve", title="Signs Your ECU Has Failed — Warning Symptoms to Watch For" }) => {
    
  return (
    <div className='bg-[#FDF8F8] md:py-20 md:my-20 py-10 my-10'>
       <div className=' w-[90%] mx-auto flex flex-col gap-y-3 items-center justify-center'>
           <p className=' font-bold title'>{desc}</p>
           <h2 className=' max-w-5xl text-center title lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-bold'>{title}</h2>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-4'>
                {
                   content.map((item,index) => (
                    <div className=' border-[4px] bg-gradient-to-r from-white to-transparent  flex flex-col items-start gap-y-3 border-white rounded-md md:p-8 p-3'>
                        <span className=' bg-red-100 p-3 rounded-md text-red-700'>{item.icon}</span>
                         <h3 className=' md:text-[24px] text-[20px] font-bold'>{item.title}</h3>
                         <p className=' font-normal text-[#4E4E4E]'>{item.desc}</p>
                    </div>
                   ))
                }
            </div>
           <div>
           </div>
       </div>
    </div>
  )
}

export default Faild
