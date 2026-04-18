"use client"
import React, { useState } from 'react'
import team1 from '@/public/about/1.webp'
import team2 from '@/public/about/2.webp'
import team3 from '@/public/about/3.webp'
import team4 from '@/public/about/4.webp'
import team5 from '@/public/about/5.webp'
import team6 from '@/public/about/6.webp'
import team7 from '@/public/about/7.webp'
import team8 from '@/public/about/8.webp'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Team = () => {
  const locale = useLocale()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const team = [
    {
      img: team1,
      name: locale === "en" ? "John Smith" : "جون سميث",
      role: locale === "en" ? "Senior Mechanic" : "ميكانيكي أول"
    },
    {
      img: team2,
      name: locale === "en" ? " Johnson" : "سارة جونسون",
      role: locale === "en" ? "Diagnostic Specialist" : "أخصائية تشخيص"
    },
    {
      img: team3,
      name: locale === "en" ? "Michael Brown" : "مايكل براون",
      role: locale === "en" ? "Electrical Engineer" : "مهندس كهرباء"
    },
    {
      img: team4,
      name: locale === "en" ? "David Wilson" : "ديفيد ويلسون",
      role: locale === "en" ? "Service Manager" : "مدير الخدمة"
    },
    {
      img: team5,
      name: locale === "en" ? "Emily Davis" : "إيميلي ديفيس",
      role: locale === "en" ? "Customer Relations" : "علاقات العملاء"
    },
    {
      img: team6,
      name: locale === "en" ? "Robert Martinez" : "روبرت مارتينيز",
      role: locale === "en" ? "Brake Specialist" : "أخصائي فرامل"
    },
    {
      img: team7,
      name: locale === "en" ? " Anderson" : "ليزا أندرسون",
      role: locale === "en" ? "Quality Control" : "مراقبة الجودة"
    },
    {
      img: team8,
      name: locale === "en" ? "James Taylor" : "جيمس تايلور",
      role: locale === "en" ? "Transmission Expert" : "خبير ناقل حركة"
    },
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

                {/* Social Icons */}
                <div
                  className={`absolute top-16 right-8 flex flex-col gap-y-2
                  transition-all duration-500
                  ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  <span className="flex items-center justify-center text-[20px] bg-white text-black h-[50px] w-[50px] rounded-full hover:bg-red-600 hover:text-white transition">
                    <FaLinkedin />
                  </span>

                  <span className="flex items-center justify-center text-[20px] bg-white text-black h-[50px] w-[50px] rounded-full hover:bg-red-600 hover:text-white transition">
                    <FaFacebook />
                  </span>

                  <span className="flex items-center justify-center text-[20px] bg-white text-black h-[50px] w-[50px] rounded-full hover:bg-red-600 hover:text-white transition">
                    <FaInstagram />
                  </span>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Team