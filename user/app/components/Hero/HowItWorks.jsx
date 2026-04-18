import { useLocale } from 'next-intl'
import React from 'react'
import { FaCamera, FaPhone, FaCar, FaChevronRight } from 'react-icons/fa'

const HowItWorks = () => {
    // English cards
    const englishCards = [
        {
            icon: <FaCamera />,
            title: "01",
            desc: "Stuck with dead car battery?",
            bg: "bg-gradient-to-br from-red-600 to-red-800 text-white"
        },
        {
            icon: <FaPhone />,
            title: "02",
            desc: "Call our toll free at 971528475675",
            bg: "bg-white border-2 border-gray-100 shadow-lg text-gray-800"
        },
        {
            icon: <FaCar />,
            title: "03",
            desc: "Get professional help at your location",
            bg: "bg-gradient-to-br from-red-600 to-red-800 text-white"
        },
    ]

    // Arabic cards
    const arabicCards = [
        {
            icon: <FaCamera />,
            title: "٠١",
            desc: "عالق ببطارية سيارة ميتة؟",
            bg: "bg-gradient-to-br from-red-600 to-red-800 text-white"
        },
        {
            icon: <FaPhone />,
            title: "٠٢",
            desc: "اتصل على رقمنا المجاني 971528475675",
            bg: "bg-white border-2 border-gray-100 shadow-lg text-gray-800"
        },
        {
            icon: <FaCar />,
            title: "٠٣",
            desc: "احصل على مساعدة احترافية في موقعك",
            bg: "bg-gradient-to-br from-red-600 to-red-800 text-white"
        },
    ]

    const locale = useLocale()

    // Choose cards based on locale
    const cards = locale === "en" ? englishCards : locale === "ar" ? arabicCards : englishCards
    
    return (
        <div className='w-full md:py-28 pb-12 pt-24 px-4 flex flex-col items-center justify-center gap-y-6 bg-gray-50' dir={locale === "ar" ? "rtl" : "ltr"}>
            <span className='py-2 px-6 rounded-full bg-red-100 text-red-700 font-semibold text-sm tracking-wide shadow-sm'>
                {locale === "en" ? "How it Works?" : locale === "ar" ? "كيف يعمل؟" : "How it Works?"}
            </span>
            <h1 className='text-4xl md:text-5xl font-extrabold text-center'>
                {locale === "en" ? "OUR " : ""}
                <span className='text-red-600'>
                    {locale === "en" ? "WORKING" : locale === "ar" ? "العمل" : "WORKING"}
                </span>
                {locale === "en" ? " PROCESS" : locale === "ar" ? " عملية" : " PROCESS"}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-1 max-w-6xl w-full mt-8 relative'>
                {cards.map((item, index) => (
                    <div key={index} className="relative flex items-center">
                        {/* Card */}
                        <div 
                            className={`flex flex-col items-start gap-y-4 ${item.bg} p-8 rounded-2xl transition-all duration-300 cursor-pointer w-full`}
                        >
                            <div className='text-4xl bg-white/20 p-3 rounded-full'>
                                {item.icon}
                            </div>
                            <h1 className='text-5xl font-black opacity-80'>{item.title}</h1>
                            <p className='text-lg font-medium leading-relaxed'>{item.desc}</p>
                        </div>

                        {/* Arrow - hide on last card AND hide for Arabic locale */}
                        {locale !== "ar" && index !== cards.length - 1 && (
                            <div className="hidden md:flex absolute -right-5 z-10">
                                <div className="bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center">
                                    <FaChevronRight className="text-gray-600" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowItWorks