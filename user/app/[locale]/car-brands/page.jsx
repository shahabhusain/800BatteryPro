import Hero from '@/app/components/Brands/Hero'
import Service from '@/app/components/Brands/Service'
import Footer from '@/app/components/Footer'
import BatteryBrands from '@/app/components/Hero/BatteryBrands'
import CarBrands from '@/app/components/Hero/CarBrands'
import Trusted from '@/app/components/Hero/Trusted'
import Faqs from '@/app/components/Services/Faqs'
import { useLocale } from 'next-intl'
import React from 'react'


export const metadata = {
  title: "Car Brands We Serve | 800BatteryPro",
  description:
    "800BatteryPro a Trusted Car Repair Service for Luxury American & European Car Brands. Fast, Trusted & Affordable with 100% Satisfaction Guarantee. Call Us Now",
      keywords: "car brands in Dubai, American Car Specialist in Dubai, German Car Experts in Dubai, Italian Car Experts, British Car Experts, 24/7 RSA in Dubai, Premium Car repair",
      alternates: {
    canonical: "https://800batterypro.com/car-brands",
  },
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

const Brands = () => {
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
  return (
    <div>
      <div className='sticky top-0 '>  {/* Added z-index */}
        <Hero />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
           <CarBrands text={text} />
           <Service />
           <BatteryBrands />
           <Faqs />
           <Trusted arabicContent={arabicContents} englishContent={englishContents} />
           <Footer />
        </div>
    </div>
  )
}

export default Brands