import AboutContent from '@/app/components/About/AboutContent'
import Founder from '@/app/components/About/Founder'
import Hero from '@/app/components/About/Hero'
import Team from '@/app/components/About/Team'
import WhyChooseUs from '@/app/components/About/WhyChooseUs'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import Faqs from '@/app/components/Services/Faqs'
import React from 'react'

export const metadata = {
  title: "About Us – 800BatteryPro",
  description:
    "800BatteryPro provides a complete car battery and repair solutions from over 10+ years and 50+ certified technicians. Call Us Now!",
      keywords: "Trusted car service center in Dubai, trusted car service center in Abu Dhabi, car repair specialits in Dubai, car scanning & diagnostics",
      alternates: {
    canonical: "https://800batterypro.com/about-us",
  },
};

const About = () => {
  return (
    <div>
      <div className='sticky top-0'>  {/* Removed z-[-1] */}
        <Hero />
      </div>
      <div className='bg-white  rounded-t-4xl relative z-10'>
        <AboutContent />
        <WhyChooseUs />
        <Founder />
        <Team />
        <Faqs />
        <Trusted />
         <Footer />
      </div>
    </div>
  )
}

export default About