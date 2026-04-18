import Image from 'next/image'
import React from 'react'
import footer from '@/public/footer.jpg'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from '@/public/logo.svg'
import { GoArrowRight } from 'react-icons/go'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const Footer = () => {
  const locale = useLocale()
  const isRTL = locale === 'ar'

  // English content
  const englishContent = {
    locations: [{name:"Dubai", link:"best-car-battery-replacement-dubai"}, {name:"Abu Dhabi", link:"best-car-battery-replacement-abu-dhabi"}],
    headline: 'Your Roadside Lifeline - Faster Than You Expect!',
    quickLinks: {
      title: 'Quick Links',
      links: [{name:"Car Brand", link:"car-brands"}, {name:"Services", link:"/services"}, {name:"About Us", link:"/about-us"}, {name:"Contact Us", link:"/contact-us" },]
    },
    reachUs: {
      title: 'Reach Us',
      email: 'service@800batterypro.com',
      phone: '+971528475675',
      address: 'Dubai and Abu Dhabi, UAE'
    },
    newsletter: {
      title: 'Stay Ahead of Change',
      description: 'Stay connected with us for updates, offers, and service support.',
      placeholder: 'Enter your email',
      privacy: "We'll never share your email. Unsubscribe anytime."
    },
    copyright: '© Copyright by 800BATTERYPRO – All right reserved.'
  }

  // Arabic content
const arabicContent = {
    locations: [{name:"دبي", link:"best-car-battery-replacement-dubai"}, {name:"أبو ظبي", link:"best-car-battery-replacement-abu-dhabi/"}],
    headline: 'شريان حياتك على الطريق - أسرع مما تتوقع!',
    quickLinks: {
        title: 'روابط سريعة',
        links: [
  { name: "ماركات السيارات", link: "car-brands" },
  { name: "الخدمات", link: "/services" },
  { name: "من نحن", link: "/about-us" },
  { name: "اتصل بنا", link: "/contact-us" },
]
    },
    reachUs: {
        title: 'تواصل معنا',
        email: 'info@800batterypro.com',
        phone: '+971528475675',
        address: 'دبي وأبو ظبي، الإمارات العربية المتحدة'
    },
    newsletter: {
        title: 'ابقَ في المقدمة',
        description: 'ابقَ على تواصل معنا للحصول على التحديثات والعروض والدعم الفني.',
        placeholder: 'أدخل بريدك الإلكتروني',
        privacy: 'لن نشارك بريدك الإلكتروني أبداً. يمكنك إلغاء الاشتراك في أي وقت.'
    },
    copyright: '© جميع الحقوق محفوظة لـ 800BATTERYPRO'
};

  const content = locale === 'en' ? englishContent : arabicContent

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Location Tabs */}
      <div className={`flex flex-col sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
        {content.locations.map((location, index) => (
          <Link
            href={location.link} 
            key={index}
            className='border-[1px] border-[#0000001b] py-3 text-center w-full sm:w-1/2 text-sm sm:text-base cursor-pointer hover:bg-red-600 hover:text-white transition-colors'
          >
            {location.name}
          </Link>
        ))}
      </div>

      {/* Footer Main Section */}
      <div className='w-full relative text-white'>
        {/* Background Image */}
        <Image 
          className='w-full h-[1100px] sm:h-[700px] md:h-[900px] object-cover' 
          src={footer} 
          alt='footer'
          priority
        />
        
        {/* Overlay Gradient */}
        <div className='bg-gradient-to-b from-red-600/90 via-[#00000075] to-[#000000] absolute top-0 w-full h-[600px] sm:h-[700px] md:h-[900px]'></div>
        
        {/* Content Container */}
        <div className='absolute top-16 sm:top-20 md:top-24 lg:top-32 left-0 right-0 px-4 sm:px-6'>
          {/* Top Section */}
          <div className={`flex flex-col lg:flex-row items-center justify-between w-full lg:w-[90%] xl:w-[80%] mx-auto gap-6 lg:gap-0 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <h1 className={`text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold max-w-full lg:max-w-[655px] ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              {content.headline}
            </h1>
            
            {/* Vertical Divider - Hidden on mobile/tablet */}
            <div className='hidden lg:block w-[1px] h-[100px] md:h-[120px] lg:h-[150px] bg-white'></div>
            
            {/* Social Icons */}
            <div className={`flex items-center gap-4 md:gap-5 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              <a href=" https://www.youtube.com/@800batteryPro" target='_blank'> <FaYoutube size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' /></a>
               <a href="https://www.pinterest.com/800batterypro/" target='_blank'> <FaPinterest size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' /></a>
                <a href="https://www.facebook.com/profile.php?id=61582172574167" target='_blank'> <FaFacebook size={20} className='md:w-6 md:h-6 hover:text-red-400 transition-colors cursor-pointer' /></a>
            </div>
          </div>

          {/* Main Footer Content Grid */}
          <div className={`flex flex-col lg:flex-row gap-6 md:gap-8 w-full lg:w-[90%] xl:w-[80%] mx-auto mt-12 md:mt-16 lg:mt-24 xl:mt-32 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Column 1 - Quick Links */}
            <div className='w-full lg:w-[25%]'>
              <Image 
                className='border-b-[1px] border-b-[#ffffff51] pb-4 w-[120px] md:w-auto' 
                src={logo} 
                alt='logo' 
              />
              <ul className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'} gap-y-2 md:gap-y-3 mt-4`}>
                <h1 className='text-[18px] md:text-[20px] font-medium'>{content.quickLinks.title}</h1>
                {content.quickLinks.links.map((link, index) => (
                  <Link
                    href={link.link} 
                    key={index}
                    className='text-[14px] md:text-[16px] font-normal hover:text-red-400 transition-colors cursor-pointer'
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Column 2 - Reach Us */}
            <div className={`w-full lg:w-[35%] flex flex-col gap-y-3 md:gap-y-4 ${isRTL ? 'items-end' : ''}`}>
              <h2 className='text-[18px] md:text-[20px] font-medium'>{content.reachUs.title}</h2>
              
              <div className={`mt-2 md:mt-5 flex items-center gap-3 bg-[#ffffff1a] py-2 md:py-3 px-3 md:px-5 rounded-md border-[1px] border-[#ffffff45] hover:bg-[#ffffff30] transition-colors w-full ${isRTL ? 'flex-row-reverse' : ''}`}>
                <FaMailBulk className='flex-shrink-0' size={16} />
                <p className='text-[13px] md:text-[14px] truncate'>{content.reachUs.email}</p>
              </div>
              
              <div className={`flex items-center gap-3 bg-[#ffffff1a] py-2 md:py-3 px-3 md:px-5 rounded-md border-[1px] border-[#ffffff45] hover:bg-[#ffffff30] transition-colors w-full ${isRTL ? 'flex-row-reverse' : ''}`}>
                <FaPhone className='flex-shrink-0' size={16} />
                <p className='text-[13px] md:text-[14px]'>{content.reachUs.phone}</p>
              </div>
              
              <div className={`flex items-center gap-3 bg-[#ffffff1a] py-2 md:py-3 px-3 md:px-5 rounded-md border-[1px] border-[#ffffff45] hover:bg-[#ffffff30] transition-colors w-full ${isRTL ? 'flex-row-reverse' : ''}`}>
                <FaLocationArrow className='flex-shrink-0' size={16} />
                <p className='text-[13px] md:text-[14px]'>{content.reachUs.address}</p>
              </div>
            </div>

            {/* Column 3 - Newsletter */}
            <div className={`w-full lg:w-[40%] bg-[#ffffff1a] flex flex-col gap-y-3 md:gap-y-4 p-4 md:p-5 lg:p-6 rounded-xl lg:rounded-2xl border-[1px] border-[#ffffff45] ${isRTL ? 'text-right' : ''}`}>
              <h1 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold'>
                {content.newsletter.title}
              </h1>
              <p className='text-[13px] md:text-[14px] text-gray-200'>
                {content.newsletter.description}
              </p>
              
              <div className={`bg-[#ffffff1a] flex items-center justify-between px-3 md:px-5 py-2 md:py-3 rounded-md border-[1px] border-[#ffffff45] mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <input 
                  type="email" 
                  placeholder={content.newsletter.placeholder} 
                  className='w-full focus:outline-none border-none bg-transparent text-[13px] md:text-[14px] placeholder:text-gray-300'
                />
                <button className={`${isRTL ? 'rotate-180' : 'rotate-320'} bg-[#000] hidden p-2 md:p-3 rounded-full hover:bg-red-600 transition-colors flex-shrink-0`}>
                  <GoArrowRight size={20} className='md:w-[30px] md:h-[30px]' />
                </button>
              </div>
              
              <p className='text-[11px] md:text-[12px] text-gray-300 mt-2'>
                {content.newsletter.privacy}
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <p className='text-center pt-3 bg-[#000000] py-2 text-[12px] md:text-[14px] w-full absolute bottom-0'>
          {content.copyright}
        </p>
      </div>
    </div>
  )
}

export default Footer