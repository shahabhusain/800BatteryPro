import Hero from '@/app/components/Brands/Hero'
import Service from '@/app/components/Brands/Service'
import Footer from '@/app/components/Footer'
import BatteryBrands from '@/app/components/Hero/BatteryBrands'
import CarBrands from '@/app/components/Hero/CarBrands'
import Trusted from '@/app/components/Hero/Trusted'
import Faqs from '@/app/components/Services/Faqs'
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

const Brands = () => {
  return (
    <div>
      <div className='sticky top-0 '>  {/* Added z-index */}
        <Hero />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
           <CarBrands />
           <Service />
           <BatteryBrands />
           <Faqs />
           <Trusted />
           <Footer />
        </div>
    </div>
  )
}

export default Brands