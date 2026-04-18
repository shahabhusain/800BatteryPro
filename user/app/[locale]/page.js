import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/Hero/About'
import Services from '../components/Hero/Services'
import Banners from '../components/Hero/Banners'
import CarBrands from '../components/Hero/CarBrands'
import BatteryBrands from '../components/Hero/BatteryBrands'
import TrendingProducts from '../components/Hero/TrendingProducts'
import RealExperience from '../components/Hero/RealExperience'
import Trusted from '../components/Hero/Trusted'
import Footer from '../components/Footer'
import Review from '../components/Hero/Review'
import HowItWorks from '../components/Hero/HowItWorks'
import Cards from '../components/Hero/Cards'

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
  return (
    <div>

      <div className='sticky top-0'>
        <Hero />
      </div>

      <Review /> {/* move it here */}

      <div className='bg-white pb-12 rounded-t-4xl relative z-10'>
        <Cards />
        <About />
        <Services />
        <Banners />
        <CarBrands />
        <BatteryBrands />
        {/* <TrendingProducts /> */}
      </div>

      <RealExperience />

      <div className='bg-white relative'>
        <HowItWorks />
        <Trusted />
        <Footer />
      </div>

    </div>
  )
}

export default Page