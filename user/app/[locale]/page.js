import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/Hero/About'
import Services from '../components/Hero/Services'
import Banners from '../components/Hero/Banners'
import CarBrands from '../components/Hero/CarBrands'
import BatteryBrands from '../components/Hero/BatteryBrands'
import RealExperience from '../components/Hero/RealExperience'
import Trusted from '../components/Hero/Trusted'
import Footer from '../components/Footer'
import HowItWorks from '../components/Hero/HowItWorks'
import { useLocale } from 'next-intl'

export const metadata = {
  title: "800 Battery Pro | Car Battery & 24/7 RSA in Dubai",
  description:
    "800BatteryPro—Fast, Reliable Car Battery and 24/7 Roadside Assistance Services Delivered Anywhere in Dubai and Abu Dhabi. Get help in minutes!",
      keywords: "car Battery replacement in Dubai, Car battery replacement in Abu Dhabi, Audi car repair Dubai, mobile car repair Dubai, 24/7 roadside assistance Dubai, 24/7 roadside assistance in Abu Dhabi,best mobile mechanic UAE",
      alternates: {
    canonical: "https://800batterypro.com",
  },
};



const Page = () => {
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
    
    // Define the content based on locale
    const howItWorksContent = locale === "en" 
        ? {
            desc: "How it Works?",
            title: {
                part1: "How Our Car ",
                highlighted: "Battery Service ",
                part2: " Works in Dubai & Abu Dhabi"
            }
          }
        : {
            desc: "كيف يعمل؟",
            title: {
                part1: "",
                highlighted: "العمل",
                part2: " عملية"
            }
          }

            // English content
  const englishContent = {
    sectionTitle: "What Our Customers Say",
    headingPrefix: "About Our Dubai & Abu Dhabi ",
    headingHighlight: "Battery Service",
  };

  // Arabic content (translated reviews)
  const arabicContent = {
    sectionTitle: "ماذا يقول عملاؤنا",
    headingPrefix: "موثوق من قبل",
    headingHighlight: "السائقين في كل مكان",
  };
  return (
    <div>

      <div className='sticky top-0'>
        <Hero />
      </div>

      {/* <Review /> move it here */}

      <div className='bg-white pb-12 rounded-t-4xl relative z-10'>
        <About />
        <Services />
        <Banners />
        <CarBrands text={text} />
        <BatteryBrands />
        {/* <TrendingProducts /> */}
      </div>

      <RealExperience />

      <div className='bg-white relative'>
        <HowItWorks title={howItWorksContent.title} desc={howItWorksContent.desc} />
        <Trusted englishContent={englishContent} arabicContent={arabicContent} />
        <Footer />
      </div>

    </div>
  )
}

export default Page