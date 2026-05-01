import Footer from '@/app/components/Footer'
import About from '@/app/components/Hero/About'
import BatteryBrands from '@/app/components/Hero/BatteryBrands'
import CarBrands from '@/app/components/Hero/CarBrands'
import Trusted from '@/app/components/Hero/Trusted'
import BatteryServices from '@/app/components/Services/BatteryServices'
import Faqs from '@/app/components/Services/Faqs'
import Hero from '@/app/components/Services/Hero'
import { useLocale } from 'next-intl'
import React from 'react'

export const metadata = {
  title: "24/7 Car Battery & Premium Auto Repair in UAE |800BatteryPro",
  description:
    "Looking for 24/7 car battery replacement & premium auto repair in UAE? 800BatteryPro is trusted by thousands for fast, reliable car battery and roadside assistance in Dubai & Abu Dhabi. Experienced technicians—Call Now!",
      keywords: "car battery replacement in Dubai, mobile car repair dubai, emergency roadside assistance, car scanning, jump start service in Dubai, 24/7 roadside assistance in abu dhabi",
      alternates: {
    canonical: "https://800batterypro.com/services",
  },
};




const Services = () => {
  const locale = useLocale()
       const text = locale === "ar"
  ? {
      desc: "ماركات السيارات التي نخدمها",
      title1: "يشمل جميع", 
      title2: "ماركات السيارات الرئيسية",
      viewAll: "عرض الكل",
    }
  : {
      desc: "Car Brands We Serve",
      title1: "Car Battery Replacement ",
      title2: " for All Car Brands in Dubai & Abu Dhabi",
      viewAll: "View All",
    };

                  // English content
  const englishContents = {
    sectionTitle: "What Our Customers Say",
    headingPrefix: "About Our Dubai & Abu Dhabi ",
    headingHighlight: "Battery Service",
  };

  // Arabic content (translated reviews)
  const arabicContents = {
    sectionTitle: "ماذا يقول عملاؤنا",
    headingPrefix: "موثوق من قبل",
    headingHighlight: "السائقين في كل مكان",
  };
  return (
    <div>
      <div className='sticky top-0'>  {/* Removed z-[-1] */}
        <Hero />
      </div>
      <div className='bg-white  rounded-t-4xl relative z-10'>
        <BatteryServices />
        <CarBrands text={text} />
        <BatteryBrands />
        <Faqs />
        <Trusted englishContent={englishContents} arabicContent={arabicContents} />
         <Footer />
      </div>
    </div>
  )
}

export default Services