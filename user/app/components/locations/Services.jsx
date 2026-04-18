import { useLocale } from 'next-intl';
import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import service from '@/public/locations/service.png'
import service1 from '@/public/locations/service1.webp'
import service2 from '@/public/locations/service2.webp'
import service3 from '@/public/locations/service3.webp'
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  const englishService = [
    {
        title: "Car Battery Replacement",
        hoverDec: "Call 800BatteryPro at +971528475675 For Premium Car Battery Replacement Services Under 30 Minutes In Dubai",
        img: service
    },
    {
        title: "Car Battery Boosting",
        hoverDec: "Get 24/7 Car Battery Boosting/jump start services under 30 minutes anywhere in Dubai by 800BatteryPro",
        img: service2
    },
    {
        title: "24/7 Roadside Assistance",
        hoverDec: "800BatteryPro has well-equipped vans and 50+ certified technicians offering 24/7 roadside assistance anywhere in the UAE. Fast & Reliable RSA!",
        img: service1
    },
    {
        title: "Car Scanning & Diagnostics",
        hoverDec: "Get complete Advanced Car Scanning & Diagnostics at 800BatteryPro. Fast Service & Best Pricing. Contact Us Now!",
        img: service3
    },
]

const arabicService = [
    {
        title: "استبدال بطارية السيارة",
        hoverDec: "اتصل بـ 800BatteryPro على +971528475675 للحصول على خدمات استبدال بطارية السيارة المتميزة خلال 30 دقيقة في دبي",
        img: service
    },
    {
        title: "تشغيل بطارية السيارة",
        hoverDec: "احصل على خدمات تشغيل/بدء تشغيل بطارية السيارة على مدار الساعة خلال 30 دقيقة في أي مكان في دبي من خلال 800BatteryPro",
        img: service
    },
    {
        title: "المساعدة على الطريق 24/7",
        hoverDec: "يمتلك 800BatteryPro شاحنات مجهزة تجهيزًا جيدًا وأكثر من 50 فنيًا معتمدًا يقدمون خدمات المساعدة على الطريق على مدار الساعة في أي مكان في الإمارات. خدمة طرق سريعة وموثوقة!",
        img: service
    },
    {
        title: "فحص وتشخيص السيارة",
        hoverDec: "احصل على فحص وتشخيص متقدم كامل للسيارة في 800BatteryPro. خدمة سريعة وأفضل الأسعار. اتصل بنا الآن!",
        img: service
    },
]

     const locale = useLocale()
     const serviceContent = locale === "en" ? englishService : arabicService
    
     const text = locale === "ar"
      ? {
          desc: "خدمات البطاريات التي نقدمها",
          title1: "جميع خدمات", 
          title2: "البطاريات الاحترافية",
          viewAll: "عرض الكل",
        }
      : {
          desc: "Battery Services We Offer",
          title1: "Complete",
          title2: "Battery Solutions UAE",
          viewAll: "View All",
        };

  return (
    <div className=' bg-gradient-to-br from-black via-red-900 to-black  p-8 shadow-2xl'>
           <div className=' w-[90%] mx-auto md:pb-20 pb-10'>
              {/* Header Section */}
         <div className='text-left animate-fade-in-up'>
            <div className='inline-block'>
                <div className='relative'>
                    <h1 className='text-[12px] md:text-[16px] font-bold text-red-300 uppercase tracking-wider px-2'>
                        {text.desc}
                    </h1>
                </div>
            </div>
            
            <div className='flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 gap-6 md:gap-0'>
                <h1 className='text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold max-w-full md:max-w-[600px] leading-tight text-left text-white'>
                    {text.title1}{' '}
                    <span className='text-red-500'>{text.title2}</span>
                </h1>
                
                <Link href="/services" className='group relative w-full sm:w-fit bg-gradient-to-r from-red-600 to-red-800 py-3 sm:py-3.5 px-6 sm:px-8 uppercase rounded-full text-white flex items-center justify-center gap-x-2 transition-all duration-300 text-sm sm:text-base overflow-hidden shadow-lg hover:shadow-red-500/50'>
                    <span className='relative z-10'>{text.viewAll}</span>
                    <span className='relative z-10 rotate-320 group-hover:translate-x-1 transition-transform duration-300'>
                        <GoArrowRight size={24} className='sm:w-[30px] sm:h-[30px]' />
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </Link>
            </div>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
            {serviceContent.map((item, index) => (
                <div key={index} className='relative group overflow-hidden rounded-2xl'>
                    <Image className='w-full h-[503px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110' src={item.img} alt='battery-service'/>
                    <span className='absolute top-4 left-[40%] bg-red-600 p-2 rounded-full animate-bounce'>
                        <FaArrowDown className='text-white' />
                    </span>
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 rounded-b-2xl'>
                        <h2 className='text-white font-bold text-xl'>{item.title}</h2>
                    </div>
                    <div className='absolute inset-0 bg-black/90 backdrop-blur-md rounded-2xl p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
                        <p className='text-white text-center text-sm leading-relaxed'>{item.hoverDec}</p>
                    </div>
                </div>
            ))}
         </div>
           </div>
    </div>
  )
}

export default Services