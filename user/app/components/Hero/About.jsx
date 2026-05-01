import Image from 'next/image'
import React from 'react'
import about from '@/public/Home/about.png'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { useLocale } from 'next-intl';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const About = ({ 
  englishContent, 
  arabicContent 
}) => {
  const defaultEnglishContent = {
    title: "About Us",
    heading: "battery pro",
    description: "Welcome to 800BatteryPro—your go-to choice for rapid, reliable car battery services in Dubai and Abu Dhabi. Need the best car battery prices or 24/7 roadside assistance in Dubai? Don't waste time searching for a battery shop near me—our mobile team and fully stocked store make battery emergencies simple and stress-free. Choose 800BatteryPro for superior speed and customer-first solutions.",
    features: [
      "Premium Car Brand Battery Services",
      "Get Serviced With 24/7 Roadside Assistance",
      "Trusted By Car Owners in Dubai & Abu Dhabi"
    ],
    cta: "Learn More"
  };

  const defaultArabicContent = {
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

  const englishCards = [
    {
      icon:<HiOutlineDotsHorizontal />,
      title:"6+ ",
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
      title:"30+",
      desc:"Experienced Technicians"
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
      title: "15+",
      desc: "خدمة مقدمة"
    },
    {
      icon: <HiOutlineDotsHorizontal />,
      title: "50+",
      desc: "فني معتمد"
    },
  ]
  
  const locale = useLocale();
  const content = locale === "en" 
    ? (englishContent || defaultEnglishContent) 
    : locale === "ar" 
      ? (arabicContent || defaultArabicContent) 
      : defaultEnglishContent;
  const isRTL = locale === 'ar';
  
  // Use the appropriate cards based on locale
  const cards = locale === "en" ? englishCards : arabicCards;

  return (
    <div className='bg-gradient-to-r from-black to-red-900 md:py-20 pb-20 pt-8' dir={isRTL ? 'rtl' : 'ltr'}>
      <div className='w-[90%] mx-auto'>
        <div className='grid md:grid-cols-4 gap-3 grid-cols-2'>
          {
            cards.map((item, index) => (
              <div key={index} className='flex flex-col items-start gap-y-3 bg-[#FFFFFF0D] backdrop-blur-lg md:p-6 p-2 rounded-md text-white'>
                <span className='md:text-xl text-lg'>{item.icon}</span>
                <p className='lg:text-4xl md:text-3xl text-2xl font-bold'>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-20'>
          <Image className='md:w-1/2' src={about} alt='about' />
          <div className='md:w-1/2 flex flex-col md:gap-y-6 gap-y-3'>
            <p className='uppercase md:text-[16px] text-white text-[12px] font-bold'>
              {content.title}
            </p>
            <h2 className='title uppercase text-white lg:text-[40px] md:text-[36px] text-[25px] font-semibold'>
              {content.heading}
            </h2>
            <p className='md:text-[16px] text-[12px] custom-scroll md:h-[100px] h-[70px] overflow-y-auto font-normal text-gray-200'>
              {content.description}
            </p>
            <div className='flex flex-col gap-y-3'>
              {content.features.map((feature, index) => (
                <button 
                  key={index} 
                  className='bg-[#FFFFFF1A] text-white backdrop-blur-lg p-4 md:text-[16px] text-[12px] rounded-br-full rounded-tr-full flex items-center gap-3'
                >
                  <span className='bg-[#FFFFFF1A] p-3 rounded-tr-full rounded-br-full'>
                    <RiArrowRightDoubleLine className={isRTL ? 'rotate-180' : ''} />
                  </span>
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About