import Image from 'next/image'
import React from 'react'
import serviceImg1 from '@/public/services/1.webp'
import serviceImg2 from '@/public/services/2.webp'
import serviceImg3 from '@/public/services/3.webp'
import serviceImg4 from '@/public/services/4.webp'
import { useLocale } from 'next-intl'
import Link from 'next/link'
const Service = () => {
const englishServices = [
  {
    img: serviceImg1,
    title: "Car Battery Replacement",
    desc: "Fast, reliable battery replacement delivered to your location in 30 minutes."
  },
  {
    img: serviceImg2,
    title: "Car Battery Boosting",
    desc: "Quick and stress-free jump-start services wherever you are."
  },
  {
    img: serviceImg3,
    title: "Roadside Assistance",
    desc: "Immediate roadside support across the UAE, anytime, anywhere."
  },
  {
    img: serviceImg4,
    title: "Car Scanning",
    desc: "Advanced diagnostics to identify and resolve car issues with precision."
  }
]

const arabicServices = [
  {
    img: serviceImg1,
    title: "استبدال بطارية السيارة",
    desc: "استبدال سريع وموثوق لبطارية السيارة يصل إلى موقعك خلال 30 دقيقة."
  },
  {
    img: serviceImg2,
    title: "تشغيل بطارية السيارة",
    desc: "خدمة تشغيل البطارية بسرعة وسهولة أينما كنت."
  },
  {
    img: serviceImg3,
    title: "المساعدة على الطريق",
    desc: "دعم فوري على الطريق في جميع أنحاء الإمارات في أي وقت."
  },
  {
    img: serviceImg4,
    title: "فحص السيارة",
    desc: "تشخيص متقدم لتحديد مشاكل السيارة وحلها بدقة."
  }
]

    const locale = useLocale()
    const services = locale === "en" ? englishServices : locale === "ar" ? arabicServices : null

  return (
    <div className=' w-[85%] mx-auto flex flex-col items-center justify-center gap-y-3 py-20'>
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
       <Link href="/services" className=' py-3 px-6 rounded-full bg-red-600 text-white mt-5'>View All Services</Link>
    </div>
  )
}

export default Service
