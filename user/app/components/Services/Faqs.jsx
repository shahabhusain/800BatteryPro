'use client'
import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const locale = useLocale()

    const faqs = locale === "en" 
        ? [
            {
                question: "What services do you offer?",
                answer: "We offer comprehensive car battery services including battery testing, jump-starting, replacement, and roadside assistance. We also provide premium car repair services and 24/7 emergency support across Dubai and Abu Dhabi."
            },
            {
                question: "How long does battery replacement take?",
                answer: "Our professional technicians can typically replace your car battery within 15-30 minutes at your location. We understand your time is valuable, so we ensure quick and efficient service."
            },
            {
                question: "Do you provide 24/7 roadside assistance?",
                answer: "Yes, we offer 24/7 roadside assistance across Dubai and Abu Dhabi. Whether it's day or night, weekend or holiday, our team is always ready to help you with any battery emergency."
            },
            {
                question: "What areas do you cover?",
                answer: "We cover all major areas in Dubai and Abu Dhabi, including but not limited to Downtown Dubai, Dubai Marina, JLT, Business Bay, Al Reem Island, and Yas Island."
            },
            {
                question: "Do you offer warranty on batteries?",
                answer: "Yes, all our batteries come with a comprehensive warranty. The warranty period varies depending on the battery brand and type. Contact us for specific warranty details on different battery models."
            }
        ]
        : [
            {
                question: "ما هي الخدمات التي تقدمونها؟",
                answer: "نقدم خدمات شاملة لبطاريات السيارات بما في ذلك فحص البطارية، تشغيل البطارية، الاستبدال، والمساعدة على الطريق. كما نقدم خدمات إصلاح سيارات متميزة ودعم طوارئ على مدار 24/7 في جميع أنحاء دبي وأبو ظبي."
            },
            {
                question: "كم من الوقت يستغرق استبدال البطارية؟",
                answer: "يمكن لفنيينا المحترفين عادةً استبدال بطارية سيارتك في غضون 15-30 دقيقة في موقعك. نحن ندرك أن وقتك ثمين، لذلك نضمن خدمة سريعة وفعالة."
            },
            {
                question: "هل تقدمون مساعدة على الطريق 24/7؟",
                answer: "نعم، نقدم المساعدة على الطريق 24/7 في جميع أنحاء دبي وأبو ظبي. سواء كان نهاراً أو ليلاً، عطلة نهاية الأسبوع أو عطلة رسمية، فريقنا مستعد دائماً لمساعدتك في أي طارئ للبطارية."
            },
            {
                question: "ما المناطق التي تغطيها؟",
                answer: "نغطي جميع المناطق الرئيسية في دبي وأبو ظبي، بما في ذلك على سبيل المثال لا الحصر وسط مدينة دبي، مرسى دبي، JLT، الخليج التجاري، جزيرة الريم، وجزيرة ياس."
            },
            {
                question: "هل تقدمون ضماناً على البطاريات؟",
                answer: "نعم، جميع بطارياتنا تأتي مع ضمان شامل. تختلف فترة الضمان حسب ماركة البطارية ونوعها. اتصل بنا للحصول على تفاصيل الضمان المحددة لموديلات البطاريات المختلفة."
            }
        ]

    const text = locale === "ar"
        ? {
            badge: "لديك أسئلة؟",
            title1: "لدينا",
            title2: "إجابات",
            title3: "سريعة"
        }
        : {
            badge: "Got Questions?",
            title1: "We've got",
            title2: "quick",
            title3: "answers"
        }

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className='w-[85%] mx-auto py-20' dir={locale === "ar" ? "rtl" : "ltr"}>
            <p className='uppercase text-center text-[16px] font-semibold text-gray-600'>
                {text.badge}
            </p>
            <h1 className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-center mb-12'>
                {locale === "ar" ? (
                    <>
                        <span className='text-red-700'>{text.title1}</span>
                        <span className='font-normal'> {text.title2} </span>
                        <span className='text-red-700'>{text.title3}</span>
                    </>
                ) : (
                    <>
                        <span className='font-normal'>{text.title1}</span>
                        <span className='text-red-700'> {text.title2} </span>
                        <span className='text-red-700'>{text.title3}</span>
                    </>
                )}
            </h1>

            <div className=''>
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className='mb-4 border border-gray-200 rounded-lg overflow-hidden'
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className='w-full flex items-center justify-between p-5 text-left bg-[#F8F8F8] hover:bg-gray-50 transition-colors duration-200'
                        >
                            <span className='font-medium md:text-lg text-[12px]'>{faq.question}</span>
                            <span className='text-red-700'>
                                {openIndex === index ? (
                                    <IoIosArrowUp size={24} />
                                ) : (
                                    <IoIosArrowDown size={24} />
                                )}
                            </span>
                        </button>
                        
                        <div 
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                        >
                            <div className='p-5 bg-gray-50 border-t border-gray-200'>
                                <p className='text-gray-700'>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs