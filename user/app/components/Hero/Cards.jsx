import { useLocale } from 'next-intl'
import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const Cards = () => {

    const englishCards = [
      {
        icon:<HiOutlineDotsHorizontal />,
        title:"10+ ",
        desc:"years of experience"
      },
      {
        icon:<HiOutlineDotsHorizontal />,
        title:"10000+",
        desc:"Loyal Customer Serve"
      },
      {
        icon:<HiOutlineDotsHorizontal />,
        title:"12+",
        desc:"Services Offered"
      },
      {
        icon:<HiOutlineDotsHorizontal />,
        title:"50+",
        desc:"Certified Technicians"
      },
    ]
    
    const arabicCards = [
      {
        icon: <HiOutlineDotsHorizontal />,
        title: "10+ ",
        desc: "سنوات من الخبرة"
      },
      {
        icon: <HiOutlineDotsHorizontal />,
        title: "10000+",
        desc: "عميل مخلص تمت خدمته"
      },
      {
        icon: <HiOutlineDotsHorizontal />,
        title: "12+",
        desc: "خدمة مقدمة"
      },
      {
        icon: <HiOutlineDotsHorizontal />,
        title: "50+",
        desc: "فني معتمد"
      },
    ]

        const locale = useLocale()
      const cards = locale === "en" ? englishCards : locale === "ar" ? arabicCards : englishCards
        const isRTL = locale === 'ar'
  return (
    <div  className='bg-gradient-to-r from-black to-red-900 md:pt-20 pb-20 pt-8' dir={isRTL ? 'rtl' : 'ltr'}>
                 <div className=' grid md:grid-cols-4 gap-3 grid-cols-2 md:w-[90%] w-[95%] mx-auto'>
                    {
                      cards.map((item,index) => (
                         <div key={index} className=' flex flex-col items-start gap-y-3 bg-[#FFFFFF0D] backdrop-blur-lg md:p-6 p-2 rounded-md text-white'>
                      <span className=' md:text-xl text-lg'>{item.icon}</span>
                      <h2 className=' lg:text-4xl md:text-3xl text-2xl text font-bold'>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                      ))
                    }
               </div>
    </div>
  )
}

export default Cards
