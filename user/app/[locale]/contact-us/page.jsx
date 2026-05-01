import Hero from '@/app/components/contact/Hero'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import Faqs from '@/app/components/Services/Faqs'
import Form from '@/app/components/contact/Forms'
import React from 'react'

const Contact = () => {
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
         <Form />
         <Faqs />
         <Trusted arabicContent={arabicContents} englishContent={englishContents} />
         <Footer />
      </div>
    </div>
  )
}

export default Contact