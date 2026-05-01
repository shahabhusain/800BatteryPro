import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import Banners from '@/app/components/offer/Banners'
import Hero from '@/app/components/offer/Hero'
import Faqs from '@/app/components/Services/Faqs'
import React from 'react'

export const metadata = {
  title: "Offer – 800BatteryPro",
  description:
    "Premium Car Repair Offers in Abu Dhabi & Dubai By 800BatteryPro. Transparent Pricing - Seasonal Offers - Year Round Offer - Best Customer Support",
      keywords: "Promotions in Dubai, car battery offers, seasonal offers in dubai, summer sale in dubai, auto repair offers, discounts in Dubai",
      alternates: {
    canonical: "https://800batterypro.com/offers",
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

const Offer = () => {
  return (
    <div>
      <div className='sticky top-0'>  {/* Removed z-[-1] */}
        <Hero />
      </div>
      <div className='bg-white  rounded-t-4xl relative z-10'>
         <Banners />
         <Faqs />
         <Trusted englishContent={englishContents} arabicContent={arabicContents} />
         <Footer />
      </div>
    </div>
  )
}

export default Offer