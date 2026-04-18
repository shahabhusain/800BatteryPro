'use client'
import { useLocale } from 'next-intl'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Faq = ({faqs}) => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    const locale = useLocale()

    return (
        <div className='w-[85%] mx-auto py-20'>
       <p className='uppercase text-center text-[16px] font-semibold text-gray-600'>
    {locale === "ar" ? "لديك أسئلة؟" : "Got Questions?"}
</p>
<h1 className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold text-center mb-12'>
    {locale === "ar" ? (
        <>
            <span className='text-red-700'>لدينا</span>
            <span className='font-normal'> إجابات </span>
            <span className='text-red-700'>سريعة</span>
        </>
    ) : (
        <>
            <span className='font-normal'>We've got</span>
            <span className='text-red-700'> quick </span>
            <span className='text-red-700'>answers</span>
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

export default Faq