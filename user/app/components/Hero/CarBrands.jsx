"use client"
import React from 'react'
import bmw from '@/public/brands/bmw.png'
import bmwcar from '@/public/brands/bmwcar.png'
import bu from '@/public/brands/bu.webp'
import bucar from '@/public/brands/bucar.webp'
import la from '@/public/brands/la.png'
import lacar from '@/public/brands/lacar.png'
import bra from '@/public/brands/bra.webp'
import bracar from '@/public/brands/bracar.webp'

import fr from '@/public/brands/fr.png'
import frcar from '@/public/brands/frcar.png'
import be from '@/public/brands/be.webp'
import becar from '@/public/brands/becar.webp'
import ma from '@/public/brands/ma.png'
import macar from '@/public/brands/macar.png'
import gmclogo from '@/public/brands/gmclogo.webp'
import gmc from '@/public/brands/gmc.webp'
import me from '@/public/brands/me.png'
import mecar from '@/public/brands/mecar.png'
import po from '@/public/brands/po.png'
import pocar from '@/public/brands/pocar.png'
import ch from '@/public/brands/ch.png'
import chcar from '@/public/brands/chcar.png'
import ro from '@/public/brands/ro.png'
import rocar from '@/public/brands/rocar.png'
import Image from 'next/image'
import { GoArrowRight } from 'react-icons/go'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const CarBrands = () => {
    const brands = [
        {
            logo: bmw,
            desc: "BMW",
            car: bmwcar,
            slug: "bmw"
        },
        {
            logo: bu,
            desc: "Alfa Romeo",
            car: bucar,
            slug: "alfa-romeo"
        },
        {
            logo: bra,
            desc: "Audi",
            car: bracar,
            slug: "audi"
        },
        {
            logo: la,
            desc: "Lamborghini",
            car: lacar,
            slug: "lamborghini"
        },
        {
            logo: fr,
            desc: "Ferrari",
            car: frcar,
            slug: "ferrari"
        },
        {
            logo: be,
            desc: "Jeep",
            car: becar,
            slug: "jeep"
        },
        {
            logo: ma,
            desc: "Maserati",
            car: macar,
            slug: "maserati"
        },
        {
            logo: gmclogo,
            desc: "GMC",
            car: gmc,
            slug: "gmc"
        },
        {
            logo: me,
            desc: "Mercedes",
            car: mecar,
            slug: "mercedes"
        },
        {
            logo: po,
            desc: "Porsche",
            car: pocar,
            slug: "porsche"
        },
        {
            logo: ch,
            desc: "Chevrolet",
            car: chcar,
            slug: "chevrolet"
        },
        {
            logo: ro,
            desc: "Rolls Royce",
            car: rocar,
            slug: "rolls-royce"
        },
    ]

    const locale = useLocale()

   const text = locale === "ar"
  ? {
      desc: "ماركات السيارات التي نخدمها",
      title1: "يشمل جميع", 
      title2: "ماركات السيارات الرئيسية",
      viewAll: "عرض الكل",
    }
  : {
      desc: "Car Brands We Serve",
      title1: "Includes All",
      title2: "Major Vehicle Brands",
      viewAll: "View All",
    };

    // Function to handle view all click
    const handleViewAll = () => {
        window.location.href = `/${locale}/car-brands`
    }

    return (
        <div className='relative pb-12 pt-5 md:pb-20 md:pt-20 md:py-16 lg:py-20 bg-gradient-to-br from-[#FDF8F8] to-[#FFF5F5] overflow-hidden'>

            
            <div className='w-[95%] md:w-[85%] lg:w-[80%] mx-auto px-4 sm:px-0 relative z-10'>
                {/* Header Section */}
                <div className='text-left animate-fade-in-up'>
                    <div className='inline-block'>
                        <div className='relative'>
                            <h1 className='text-[12px] md:text-[16px] font-bold text-gray-600 uppercase tracking-wider px-2'>
                                {text.desc}
                            </h1>
                        </div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 gap-6 md:gap-0'>
                        <h1 className='text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold max-w-full md:max-w-[600px] leading-tight text-left bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                            {text.title1}{' '}
                            <span className='text-[#C1121F] bg-gradient-to-r from-[#C1121F] to-[#E3342F] bg-clip-text text-transparent'>{text.title2}</span>
                        </h1>
                        
                        <button 
                            onClick={handleViewAll}
                            className='group relative w-full sm:w-fit bg-gradient-to-r from-[#C1121F] to-[#E3342F] py-3 sm:py-3.5 px-6 sm:px-8 uppercase rounded-full text-white flex items-center justify-center gap-x-2  transition-all duration-300 text-sm sm:text-base overflow-hidden'
                        >
                            <span className='relative z-10'>{text.viewAll}</span>
                            <span className='relative z-10 rotate-320 group-hover:translate-x-1 transition-transform duration-300'>
                                <GoArrowRight size={24} className='sm:w-[30px] sm:h-[30px]' />
                            </span>
                            <div className='absolute inset-0 bg-gradient-to-r from-[#A00E1A] to-[#C1121F] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </button>
                    </div>
                </div>

                {/* Brands Grid */}
                <div className='bg-white rounded-2xl  mt-8 md:mt-10 lg:mt-12 overflow-hidden   duration-500'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
                        {brands.map((item, index) => {
                            const isLastInRow = (index + 1) % 2 === 0
                            const isLastInRowSm = (index + 1) % 3 === 0
                            const isLastInRowLg = (index + 1) % 4 === 0
                            
                            return (
                                <Link 
                                    href={`/${locale}/car-brands/${item.slug}`}
                                    key={index} 
                                    className={`
                                        group relative border-r border-b border-gray-100 p-4 sm:p-5 md:p-6
                                        ${!isLastInRow ? 'sm:border-r' : ''}
                                        ${!isLastInRowSm ? 'lg:border-r' : ''}
                                        ${isLastInRowLg ? 'lg:border-r-0' : ''}
                                        hover:bg-gradient-to-br hover:from-gray-50 hover:to-red-50 transition-all duration-500 cursor-pointer
                                    `}
                                >
                                    {/* Hover effect overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500'></div>
                                    
                                    <div className='flex flex-col items-center justify-center relative z-10'>
                                        {/* Logo with animation */}
                                        <div className='relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3 group-hover:scale-110 transform transition-all duration-500 ease-out'>
                                            <div className='absolute inset-0 bg-red-100 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500'></div>
                                            <Image 
                                                src={item.logo} 
                                                alt={`${item.desc} logo`}
                                                fill
                                                className='object-contain relative z-10'
                                                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                                            />
                                        </div>
                                        
                                        {/* Brand Name with gradient on hover */}
                                        <p className='text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold text-center text-gray-800 group-hover:text-[#C1121F] transition-colors duration-300'>
                                            {item.desc}
                                        </p>
                                        
                                        {/* Car Image with slide-up animation */}
                                        <div className='relative w-full h-16 sm:h-20 md:h-24 lg:h-28 mt-4 sm:mt-5 md:mt-6 group-hover:translate-y-[-8px] transition-transform duration-500 ease-out'>
                                            <Image 
                                                src={item.car} 
                                                alt={`${item.desc} car`}
                                                fill
                                                className='object-contain'
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 25vw"
                                            />
                                        </div>
                                        

                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Mobile view all button - Enhanced */}
                <div className='flex justify-center mt-8 md:hidden'>
                    <button 
                        onClick={handleViewAll}
                        className='text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group'
                    >
                        View More Brands
                        <GoArrowRight size={20} className='group-hover:translate-x-1 transition-transform duration-300' />
                    </button>
                </div>
            </div>

            {/* Add keyframe animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out;
                }
            `}</style>
        </div>
    )
}

export default CarBrands