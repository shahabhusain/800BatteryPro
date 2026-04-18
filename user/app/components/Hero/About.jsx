import Image from 'next/image'
import React from 'react'
import about from '@/public/Home/about.png'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { GoArrowRight } from 'react-icons/go';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const englishContent = {
  title: "About Us",
  heading: "battery pro",
  description: "Welcome to 800BatteryPro—your go-to choice for rapid, reliable car battery services in Dubai and Abu Dhabi. Need the best car battery prices or 24/7 roadside assistance in Dubai? Don’t waste time searching for a battery shop near me—our mobile team and fully stocked store make battery emergencies simple and stress-free. Choose 800BatteryPro for superior speed and customer-first solutions.",
  features: [
    "Premium Car Brand Battery Services",
    "Get Serviced With 24/7 Roadside Assistance",
    "Trusted By Car Owners in Dubai & Abu Dhabi"
  ],
  cta: "Learn More"
};

const arabicContent = {
  title: "من نحن",
  heading: "بطارية برو",
  description: "مرحباً بكم في 800BatteryPro—اختياركم الأمثل لخدمات بطاريات السيارات السريعة والموثوقة في دبي وأبو ظبي. هل تحتاج إلى أفضل أسعار بطاريات السيارات أو مساعدة على الطريق تعمل 24/7 في دبي؟ لا تضيع وقتك في البحث عن 'محل بطاريات قريب مني'—فريقنا المتنقل ومتجرنا المتكامل يجعلان طوارئ البطارية بسيطة وخالية من التوتر. اختر 800BatteryPro للتمتع بالسرعة الفائقة والحلول التي تضع العميل في المقام الأول.",
  features: [
    "خدمات بطاريات سيارات من علامات تجارية ممتازة",
    "احصل على الخدمة مع مساعدة على الطريق تعمل 24/7",
    "موثوق من قبل مالكي السيارات في دبي وأبو ظبي"
  ],
  cta: "اعرف المزيد"
};





const About = () => {
  const locale = useLocale()
  const content = locale === "en" ? englishContent : locale === "ar" ? arabicContent : englishContent
  const isRTL = locale === 'ar'

  return (
    <div className='bg-gradient-to-r from-black to-red-900 pb-10 ' dir={isRTL ? 'rtl' : 'ltr'}>
       <div className='w-[90%] mx-auto'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12  '>
        <Image className='md:w-1/2' src={about} alt='about' />
        <div className='md:w-1/2 flex flex-col md:gap-y-6 gap-y-3'>
          <p className='uppercase md:text-[16px] text-white text-[12px] font-bold'>
            {content.title}
          </p>
          <h1 className='uppercase text-white lg:text-[40px] md:text-[36px] text-[25px] font-semibold'>
            <span className='text-red-500'>800</span> {content.heading}
          </h1>
          <p className='md:text-[16px] text-[12px] font-normal text-gray-200'>
            {content.description}
          </p>
          <div className='flex flex-col gap-y-3'>
            {content.features.map((feature, index) => (
              <button 
                key={index} 
                className='bg-[#FFFFFF1A] text-white backdrop-blur-lg p-4 md:text-[16px] text-[12px] rounded-br-full text-[#4E4E4E] rounded-tr-full flex items-center gap-3'
              >
                <span className='bg-[#FFFFFF1A] p-3 rounded-tr-full rounded-br-full'>
                  <RiArrowRightDoubleLine className={isRTL ? 'rotate-180' : ''} />
                </span>
                {feature}
              </button>
            ))}
          </div>
          <Link href="about-us" className='w-fit bg-red-600 py-3 px-5 uppercase rounded-full text-white flex items-center gap-x-2'>
            {content.cta}
            <span className={isRTL ? 'rotate-180' : ''}>
              <GoArrowRight size={30} />
            </span>
          </Link>
        </div>
      </div>
       </div>
    </div>
  )
}

export default About