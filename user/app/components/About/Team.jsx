"use client"
import React, { useState } from 'react'
import team1 from '@/public/about/se1.webp'
import team2 from '@/public/about/se2.webp'
import team3 from '@/public/about/se3.webp'
import team4 from '@/public/about/se4.webp'
import team5 from '@/public/about/se5.webp'
import team6 from '@/public/about/se6.webp'
import team7 from '@/public/about/se7.webp'
import team8 from '@/public/about/se8.webp'
import team9 from '@/public/about/se9.webp'
import Image from 'next/image'
import { useLocale } from 'next-intl'

const Team = () => {
  const locale = useLocale()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const team = [
    {
      img: team1,
      name: locale === "en" ? "Mohammed Ali" : "محمد علي",
      role: locale === "en" ? "Senior Battery Technician" : "فني بطاريات أول"
    },
    {
      img: team2,
      name: locale === "en" ? "Ahmed Khan" : "أحمد خان",
      role: locale === "en" ? "Diagnostic Specialist" : "أخصائي تشخيص"
    },
    {
      img: team3,
      name: locale === "en" ? "Rahul Sharma" : "راهول شارما",
      role: locale === "en" ? "Electrical Engineer" : "مهندس كهرباء"
    },
    {
      img: team4,
      name: locale === "en" ? "Abdullah Siddiqui" : "عبد الله صديقي",
      role: locale === "en" ? "Service Manager" : "مدير الخدمة"
    },
    {
      img: team5,
      name: locale === "en" ? "Rajesh Kumar" : "راجيش كومار",
      role: locale === "en" ? "Customer Relations" : "علاقات العملاء"
    },
    {
      img: team6,
      name: locale === "en" ? "Vikram Singh" : "فيكرام سينغ",
      role: locale === "en" ? "Brake Specialist" : "أخصائي فرامل"
    },
    {
      img: team7,
      name: locale === "en" ? "Hassan Ahmed" : "حسن أحمد",
      role: locale === "en" ? "Quality Control" : "مراقبة الجودة"
    },
    {
      img: team8,
      name: locale === "en" ? "Arjun Patel" : "أرجون باتيل",
      role: locale === "en" ? "Transmission Expert" : "خبير ناقل حركة"
    },
    {
      img: team9,
      name: locale === "en" ? "Yusuf Rahman" : "يوسف رحمن",
      role: locale === "en" ? "Roadside Assistance" : "المساعدة على الطريق"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FDF8F8]">
      <div className="max-w-7xl mx-auto mt-72 md:mt-0">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-red-600 font-semibold tracking-wider mb-2">
            {locale === "en" ? "Our Team" : "فريقنا"}
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {locale === "en" ? "Meet Our" : "تعرف على"}{" "}
            <span className="text-red-600">
              {locale === "en" ? "Team Members" : "أعضاء الفريق"}
            </span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {team.map((item, index) => {
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white py-3 px-6 relative rounded-xl overflow-hidden group transition-all duration-500"
              >

                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.name}
                  className={`w-full h-64 object-cover rounded-2xl transition-transform duration-500 ease-out 
                  ${isHovered ? "scale-110" : "scale-100"}`}
                />

                {/* Info */}
                <div className="p-6 text-start">
                  <h2 className="text-[24px] font-bold text-gray-900 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-[#4E4E4E] font-normal">
                    {item.role}
                  </p>
                </div>

                {/* Toggle Button */}
                <button
                  className={`text-[20px] flex items-center justify-center 
                  h-[50px] w-[50px] text-white rounded-full absolute bottom-28 right-2
                  transition-all duration-500
                  ${isHovered ? "bg-black rotate-180" : "bg-red-800"}`}
                >
                  {isHovered ? "-" : "+"}
                </button>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Team