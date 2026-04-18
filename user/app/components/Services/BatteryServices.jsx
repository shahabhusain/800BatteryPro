import Image from 'next/image'
import React from 'react'
import { useLocale } from 'next-intl'
import serviceImg1 from '@/public/services/1.webp'
import serviceImg2 from '@/public/services/2.webp'
import serviceImg3 from '@/public/services/3.webp'
import serviceImg4 from '@/public/services/4.webp'
import serviceImg5 from '@/public/services/5.webp'
import serviceImg6 from '@/public/services/6.webp'
import serviceImg7 from '@/public/services/7.webp'
import serviceImg8 from '@/public/services/8.webp'
import serviceImg9 from '@/public/services/9.webp'
import serviceImg10 from '@/public/services/10.webp'
import serviceImg11 from '@/public/services/11.webp'
import serviceImg12 from '@/public/services/12.webp'

const BatteryServices = () => {
    const locale = useLocale()
    
    const services = locale === "en" 
        ? [
            {
                img: serviceImg1,
                title: "Car Battery Replacement",
                desc: "Fast, reliable battery replacement delivered to your location in under 30 minutes."
            },
            {
                img: serviceImg2,
                title: "Car Battery Boosting",
                desc: "Quick and stress-free jump-start services wherever you are."
            },
            {
                img: serviceImg3,
                title: "24/7 Roadside Assistance",
                desc: "Immediate roadside support across the UAE, anytime, anywhere."
            },
            {
                img: serviceImg4,
                title: "Car Scanning & Diagnostics",
                desc: "Advanced diagnostics to identify and resolve car issues with precision."
            },
            {
                img: serviceImg5,
                title: "Mechanical Services",
                desc: "Comprehensive mechanical repairs to keep your car running smoothly."
            },
            {
                img: serviceImg6,
                title: "Electrical Services",
                desc: "Expert solutions for all your car's electrical system needs."
            },
            {
                img: serviceImg7,
                title: "ECU Repair",
                desc: "Professional ECU repairs to restore your car's optimal performance."
            },
            {
                img: serviceImg8,
                title: "Flood Car Repair",
                desc: "Specialized flood damage repair to bring your car back to life."
            },
            {
                img: serviceImg9,
                title: "Car Key Programming",
                desc: "Hassle-free car key programming and replacement services."
            },
            {
                img: serviceImg10,
                title: "BCM Repair",
                desc: "Reliable body control module repairs to restore essential car functions."
            },
            {
                img: serviceImg11,
                title: "ADAS Sensor Repair",
                desc: "Precision repair and calibration for advanced driver assistance systems."
            },
            {
                img: serviceImg12,
                title: "Radiator Fan Repair",
                desc: "Quick and efficient radiator fan replacements to prevent overheating."
            },
        ]
        : [
            {
                img: serviceImg1,
                title: "استبدال بطارية السيارة",
                desc: "استبدال بطارية سريع وموثوق يتم توصيله إلى موقعك في أقل من 30 دقيقة."
            },
            {
                img: serviceImg2,
                title: "شحن بطارية السيارة",
                desc: "خدمات تشغيل بطارية سريعة وخالية من التوتر أينما كنت."
            },
            {
                img: serviceImg3,
                title: "مساعدة على الطريق 24/7",
                desc: "دعم فوري على الطريق في جميع أنحاء الإمارات، في أي وقت وفي أي مكان."
            },
            {
                img: serviceImg4,
                title: "فحص وتشخيص السيارة",
                desc: "تشخيص متقدم لتحديد وحل مشاكل السيارة بدقة."
            },
            {
                img: serviceImg5,
                title: "خدمات ميكانيكية",
                desc: "إصلاحات ميكانيكية شاملة للحفاظ على سيارتك تعمل بسلاسة."
            },
            {
                img: serviceImg6,
                title: "خدمات كهربائية",
                desc: "حلول متخصصة لجميع احتياجات النظام الكهربائي لسيارتك."
            },
            {
                img: serviceImg7,
                title: "إصلاح وحدة التحكم الإلكترونية",
                desc: "إصلاحات احترافية لوحدة التحكم الإلكترونية لاستعادة الأداء الأمثل لسيارتك."
            },
            {
                img: serviceImg8,
                title: "إصلاح السيارات المتضررة من الفيضانات",
                desc: "إصلاح متخصص لأضرار الفيضانات لإعادة سيارتك إلى الحياة."
            },
            {
                img: serviceImg9,
                title: "برمجة مفاتيح السيارة",
                desc: "خدمات برمجة واستبدال مفاتيح السيارة بدون متاعب."
            },
            {
                img: serviceImg10,
                title: "إصلاح وحدة التحكم بالجسم",
                desc: "إصلاحات موثوقة لوحدة التحكم بالجسم لاستعادة وظائف السيارة الأساسية."
            },
            {
                img: serviceImg11,
                title: "إصلاح مستشعر ADAS",
                desc: "إصلاح ومعايرة دقيقة لأنظمة مساعدة السائق المتقدمة."
            },
            {
                img: serviceImg12,
                title: "إصلاح مروحة الرادياتير",
                desc: "استبدال سريع وفعال لمروحة الرادياتير لمنع ارتفاع درجة الحرارة."
            },
        ]
    
    const text = locale === "ar"
        ? {
            badge: "الخدمات",
            title1: "خدمات",
            title2: "بطارية السيارة",
            title3: "موثوقة"
        }
        : {
            badge: "SERVICES",
            title1: "Reliable",
            title2: "Car Battery",
            title3: "Services"
        }

    return (
        <div className='w-[90%] max-w-7xl mx-auto flex flex-col gap-y-12 py-24' dir={locale === "ar" ? "rtl" : "ltr"}>
            {/* Header Section */}
            <div className='text-center space-y-4'>
               <p className=' uppercase text-center text-[16px] font-semibold'>sERVICES</p>
      <h1 className=' ld:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-center'><span className=' font-normal'>Reliable</span> <span className=' text-red-700'>Car Battery</span> Services</h1>
            </div>
            
            {/* Services Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7'>
                {services.map((item, index) => (
                    <div 
                        key={index} 
                        className='group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer'
                    >
                        {/* Image Container */}
                        <div className='relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
                            <Image 
                                width={380} 
                                height={260} 
                                src={item.img} 
                                alt='service'
                                className='w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                            />
                            
                            {/* Overlay Gradient */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            
                            {/* Icon Badge */}
                            <div className='absolute top-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75'>
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className='p-6 space-y-3'>
                            {/* Title with hover effect */}
                            <h2 className='text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-2'>
                                {item.title}
                            </h2>
                            
                            {/* Decorative line */}
                            <div className='w-12 h-0.5 bg-red-600 group-hover:w-16 transition-all duration-300'></div>
                            
                            {/* Description */}
                            <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                                {item.desc}
                            </p>
                            
                            {/* Learn more link */}
                            <div className='pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2'>
                                <span className='text-red-600 text-sm font-semibold inline-flex items-center gap-1 cursor-pointer'>
                                    {locale === "en" ? "Learn More" : "اعرف أكثر"}
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        
                        {/* Bottom border gradient */}
                        <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default BatteryServices