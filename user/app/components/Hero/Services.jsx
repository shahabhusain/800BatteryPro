import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { useLocale } from 'next-intl'
import service1 from '@/public/Home/b1.webp'
import service2 from '@/public/Home/b2.webp'
import service3 from '@/public/Home/b3.webp'
import service4 from '@/public/Home/b4.webp'
import Link from 'next/link'

const Services = () => {
  
  // Service data array for cleaner code
  const englishServices = [
    {
      link:"/services/battery-replacement",
      title: "Battery Replacement",
      description: "Need a quick and reliable car battery replacement? Our certified technicians provide premium-quality batteries and expert service, delivered straight to your doorstep in as little as 30 minutes.",
      image: service1
    },
    {
      link:"/services/battery-boosting",
      title: "Battery Boosting",
      description: "Stop searching for 'battery boosting near me'! Our mobile team and fully equipped service vehicles are ready to handle your battery emergencies with ease. We make the process simple, stress-free, and fast.",
      image: service2
    },
    {
      link:"/services/roadside-assistance",
      title: "Roadside Assistance",
      description: "Stranded on the road? Our roadside assistance experts are just a call away. Equipped with the latest tools and technology, we ensure immediate support within 30 minutes, anywhere in the UAE.",
      image: service3
    },
    {
      link:"/services/car-scanning",
      title: "Other Services",
      description: "At 800BatteryPro we have a certified team of italian and German car experts in Dubai. As we offer advance car programming and car scanning services using the latest Technology.",
      image: service4
    }
  ];

const arabicServices = [
  {
    link:"/",
    title: "استبدال البطارية",
    description: "هل تحتاج إلى استبدال بطارية سيارة سريع وموثوق؟ يقدم فنيونا المعتمدون بطاريات عالية الجودة وخدمة احترافية، يتم توصيلها مباشرة إلى عتبة داركم في غضون 30 دقيقة فقط.",
    image: service1
  },
  {
    link:"/",
    title: "شحن البطارية",
    description: "توقف عن البحث عن 'شحن بطارية بالقرب مني'! فريقنا المتنقل وسيارات الخدمة المجهزة بالكامل على استعداد للتعامل مع طوارئ البطارية بسهولة. نجعل العملية بسيطة وخالية من التوتر وسريعة.",
    image: service2
  },
  {
    link:"/",
    title: "المساعدة على الطريق",
    description: "تعطلت سيارتك على الطريق؟ خبراء المساعدة على الطريق لدينا على بعد مكالمة واحدة. مزودون بأحدث الأدوات والتقنيات، نضمن لك الدعم الفوري خلال 30 دقيقة، في أي مكان في الإمارات.",
    image: service3
  },
  {
    link:"/",
    title: "خدمات أخرى",
    description: "في 800BatteryPro لدينا فريق معتمد من خبراء السيارات الإيطالية والألمانية في دبي. كما نقدم خدمات متقدمة لبرمجة وفحص السيارات باستخدام أحدث التقنيات.",
    image: service4
  }
];

  const locale = useLocale()
  const isRTL = locale === 'ar'
  const services = locale === "en" ? englishServices : locale === "ar" ? arabicServices : englishServices

  return (
    <div className='w-[95%] md:w-[85%] lg:w-[80%] mx-auto mt-12 md:mt-16 lg:mt-20 px-4 sm:px-0' dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <div className={isRTL ? 'text-right' : 'text-left'}>
        <h1 className='text-[14px] md:text-[16px] font-bold text-gray-600 uppercase tracking-wider'>
          {locale === 'en' ? 'SERVICES' : 'خدماتنا'}
        </h1>
        
        <div className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between mt-4 md:mt-6 gap-4 md:gap-0`}>
          <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight'>
            {locale === 'en' ? (
              <>
                <span className='font-normal'>Reliable</span>{' '}
                <span className='text-[#C1121F]'>Car Battery</span>{' '}
                <span className='block sm:inline'>Services</span>
              </>
            ) : (
              <>
                <span className='font-normal'>خدمات</span>{' '}
                <span className='text-[#C1121F]'>بطارية السيارة</span>{' '}
                <span className='block sm:inline'>الموثوقة</span>
              </>
            )}
          </h1>
          
          <Link href="/services" className='w-full sm:w-fit bg-red-600 py-2.5 sm:py-3 px-4 sm:px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-colors text-sm sm:text-base'>
            {locale === 'en' ? 'view all' : 'عرض الكل'}
            <span className={isRTL ? 'rotate-180' : 'rotate-320'}>
              <GoArrowRight size={24} className='sm:w-[30px] sm:h-[30px]' />
            </span>
          </Link>
        </div>
      </div>
      
      {/* Service Items */}
      <div className='flex flex-col gap-y-4 sm:gap-y-6 mt-8 sm:mt-10 lg:mt-12'>
        {services.map((serviceItem, index) => (
          <Link
            href={serviceItem.link}
            key={index}
            className='group transition-all duration-300 hover:px-6 ease-in-out flex flex-col lg:flex-row hover:bg-gradient-to-r from-red-500 to-red-400 px-3 items-start lg:items-center gap-4 lg:gap-8 xl:gap-12 relative cursor-pointer border border-gray-100 hover:border-transparent'
          >
            {/* Title */}
            <h2 className={`text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-semibold group-hover:text-red-50 transition-colors w-full lg:w-auto ${isRTL ? 'lg:text-right' : ''}`}>
              {serviceItem.title}
            </h2>
            
            {/* Image Container - Hidden on mobile, visible on larger screens */}
            {serviceItem.image && (
              <div className='hidden lg:block relative w-[100px] xl:w-[150px] h-[100px] xl:h-[150px] overflow-hidden flex-shrink-0'>
                <div className={`absolute inset-y-0 ${isRTL ? 'right-0' : 'left-0'} w-0 group-hover:w-full transition-all duration-500 ease-in-out overflow-hidden`}>
                  <div className='relative w-[100px] xl:w-[150px] h-[100px] xl:h-[150px]'>
                    <Image 
                      src={serviceItem.image}
                      alt={serviceItem.title}
                      fill
                      className='object-cover'
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Description */}
            <p className={`text-[13px] sm:text-[16px] font-normal text-[#00000099] group-hover:text-white transition-colors flex-1 ${isRTL ? 'text-right' : ''}`}>
              {serviceItem.description}
            </p>
            
            {/* Arrow Button */}
            <button className={`absolute ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} lg:relative text-xl sm:text-2xl  transition-colors ${isRTL ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} transform duration-500 group-hover:bg-[#fff] p-5 rounded-full group-hover:text-black`}>
              <GoArrowRight className={isRTL ? 'rotate-180' : 'rotate-320'} />
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services;