
import { useLocale } from 'next-intl'
import React from 'react'
const WhyChooseUs = ({data}) => {
   const locale = useLocale()
  return (
    <div className=' bg-[#FDF8F8] py-20 md:mt-20 '>
            <div className=' w-[85%] mx-auto flex flex-col gap-y-4 items-center justify-center'>
 <p className='text-[16px] font-bold text-center'>
  {locale === "en"
    ? "Why Choose Us"
    : locale === "ar"
    ? "لماذا تختارنا"
    : "Why Choose Us"}
</p>

<h1 className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[26px] font-semibold text-center max-w-[855px]'>
  {locale === "en"
    ? "Reliable Car"
    : locale === "ar"
    ? "خدمة موثوقة لبطارية السيارة"
    : "Reliable Car"}{" "}
  <span className='text-red-800'>
    {locale === "en"
      ? "Battery Service"
      : locale === "ar"
      ? "بطارية السيارة"
      : "Battery Service"}
  </span>
</h1>

         <div className=' flex flex-col md:flex-row items-center gap-2 justify-between mt-8'>
           {
            data.map((item, index) => (
                <div className=' flex flex-col gap-y-5 items-start bg-white md:p-12 p-3 h-[50ppx] w-[350px]' key={index}>
                    <span className=' md:text-[25px] text-[20px]'>{item.icons}</span>
                    <h2 className=' md:text-[24px] text-[18px] font-semibold '>{item.title}</h2>
                    <p className=' md:text-[16px] text-[14px] font-normal text-[#4E4E4E]'>{item.desc}</p>
                </div>
            ))
           }
         </div>
    </div>
    </div>
  )
}

export default WhyChooseUs
