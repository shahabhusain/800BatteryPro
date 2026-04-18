import React from 'react'
import { useLocale } from 'next-intl'
import { LuCircleDotDashed } from "react-icons/lu";

const WhyChooseUs = () => {
    const locale = useLocale()

    const data = locale === "en" 
        ? [
            {
                icons: <LuCircleDotDashed />,
                title: "Fast Response",
                desc: "Quick service to get your vehicle powered and back on the road without long waiting times."
            },
            {
                icons: <LuCircleDotDashed />,
                title: "Quality Batteries",
                desc: "We provide high-performance, long-lasting batteries suitable for a wide range of vehicles."
            },
            {
                icons: <LuCircleDotDashed />,
                title: "Expert Technicians",
                desc: "Our trained professionals ensure safe, efficient, and hassle-free battery installation."
            },
            {
                icons: <LuCircleDotDashed />,
                title: "Customer Satisfaction",
                desc: "We focus on reliable service and a smooth experience for every customer."
            },
        ]
        : [
            {
                icons: <LuCircleDotDashed />,
                title: "استجابة سريعة",
                desc: "خدمة سريعة لتشغيل سيارتك وإعادتها إلى الطريق دون أوقات انتظار طويلة."
            },
            {
                icons: <LuCircleDotDashed />,
                title: "بطاريات عالية الجودة",
                desc: "نوفر بطاريات عالية الأداء وطويلة العمر تناسب مجموعة واسعة من السيارات."
            },
            {
                icons: <LuCircleDotDashed />,
                title: "فنيون خبراء",
                desc: "يضمن محترفونا المدربون تركيب بطارية آمن وفعال وخالي من المتاعب."
            },
            {
                icons: <LuCircleDotDashed />,
                title: "رضا العملاء",
                desc: "نركز على تقديم خدمة موثوقة وتجربة سلسة لكل عميل."
            },
        ]

    const text = locale === "ar"
        ? {
            badge: "لماذا تختارنا",
            title1: "خدمة بطارية موثوقة",
            title2: "يمكنك الوثوق بها"
        }
        : {
            badge: "Why Choose Us",
            title1: "Reliable Car",
            title2: "Battery Service You Can Trust"
        }

    return (
        <div className='bg-[#FDF8F8] md:py-20 pt-10 md:mt-20' dir={locale === "ar" ? "rtl" : "ltr"}>
            <div className='w-[85%] mx-auto flex flex-col gap-y-4 items-center justify-center'>
                <p className='text-[16px] font-bold text-center'>
                    {text.badge}
                </p>
                <h1 className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[26px] font-semibold text-center max-w-[855px]'>
                    {locale === "ar" ? (
                        <>
                            <span className='text-red-800'>{text.title1}</span>
                            <span> {text.title2}</span>
                        </>
                    ) : (
                        <>
                            <span>{text.title1}</span>
                            <span className='text-red-800'> {text.title2}</span>
                        </>
                    )}
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-2 justify-between mt-8'>
                    {data.map((item, index) => (
                        <div className='flex flex-col gap-y-5 items-start bg-white md:p-12 p-4 h-[50ppx] w-[350px]' key={index}>
                            <span className='md:text-[25px] text-[20px]'>{item.icons}</span>
                            <h2 className='md:text-[24px] text-[18px] font-semibold'>{item.title}</h2>
                            <p className='md:text-[16px] text-[14px] font-normal text-[#4E4E4E]'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs