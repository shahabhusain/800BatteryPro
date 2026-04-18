import React from 'react'
import { useLocale } from 'next-intl'
import bg from '@/public/about.svg'
import founder from '@/public/founder.svg'
import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Founder = () => {
    const locale = useLocale()

    const text = locale === "ar"
        ? {
            name: "سامن جان",
            title: "المؤسس والرئيس التنفيذي",
            description1: "بصفته فناناً لحل مثل هذه القضايا، قمنا بنجاح برفع عدة قضايا أمر قضائي نيابة عن أكثر من 250 عمل فني وأفراد عائلاتهم وحصلنا على البطاقات الخضراء المعتمدة في غضون عدة أشهر بعد تقديم الشكوى.",
            description2: "بصفته فناناً لحل مثل هذه القضايا، قمنا بنجاح برفع عدة قضايا أمر قضائي نيابة عن أكثر من 250 عمل فني وأفراد عائلاتهم وحصلنا على البطاقات الخضراء المعتمدة في غضون عدة أشهر بعد تقديم الشكوى."
        }
        : {
            name: "Samin Jan",
            title: "Founder & CEO",
            description1: "Our journey at 800BatteryPro started from a vision of delivering 100 percent customer satisfactory and premium car battery services. When it started, we only had 3 technicians and 1 mobile van for roadside assistance; now we are aiming to become one of the leading 24/7 roadside assistance providers in the UAE. With 100+ certified technicians and 20+ Mobile Vans, we provide onsite car battery replacement and boosting services within 30 minutes anywhere in Dubai and Abu Dhabi. We want to offer a complete and international standard of car repair workshop. Our certified technicians are well-experienced in working on all major car brands, including the top American & European car makes. Our technicians are trained to use only OEM-approved spare parts and only install genuine car batteries for your car. There is no hidden cost while we offer Free Battery Testing along with Free Car Inspection to ensure your safety on the road.",
            description2: "Don’t Panic If you Ever Have a Dead Battery! Just give 800BatteryPro a Call and we will ensure you get back on the road asap."
        }

    return (
        <div className='relative md:w-[85%] w-[90%] md:mb-20 mb-[900px] mx-auto max-w-[1500px]' dir={locale === "ar" ? "rtl" : "ltr"}>
            <Image className='md:block hidden' src={bg} alt='bg' />
            <div className='absolute md:top-36 top-12 w-full flex flex-col md:flex-row items-center justify-around'>
                <div className='md:w-1/2'>
                    <Image className='' src={founder} alt='founder' />
                </div>
                <div className='md:w-1/2 flex flex-col gap-2'>
                    <h1 className='text-red-800 text-[40px] font-semibold'>{text.name}</h1>
                    <h2 className='text-[20px] font-semibold'>{text.title}</h2>
                    <div className='flex items-center gap-3'>
                        <a href='https://www.linkedin.com/in/samin-jan-51a280342/' target='_blank' className='bg-[#f8f8f8] p-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white transition-colors'>
                            <FaLinkedin />
                        </a>
                    </div>
                    <p className='text-[#00000099] mt-6'>{text.description1}</p>
                    <p className='text-[#00000099] mt-4'>{text.description2}</p>
                </div>
            </div>
        </div>
    )
}

export default Founder