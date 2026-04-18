"use client"
import React from 'react'
import Image from 'next/image'

const CarBrands = ({text, brands}) => {
    return (
        <div className='relative pb-12 pt-5 md:pb-20 md:pt-20 md:py-16 lg:py-20 bg-gradient-to-br from-[#FDF8F8] to-[#FFF5F5] overflow-hidden mt-10 md:mt-0'>

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
                            <span className='text-[#C1121F] bg-gradient-to-r from-[#C1121F] to-[#E3342F] bg-clip-text text-transparent'>
                                {text.title2}
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Brands Grid */}
                <div className='bg-white rounded-2xl mt-8 md:mt-10 lg:mt-12 overflow-hidden'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
                        {brands.map((item, index) => {
                            const isLastInRow = (index + 1) % 2 === 0
                            const isLastInRowSm = (index + 1) % 3 === 0
                            const isLastInRowLg = (index + 1) % 4 === 0
                            
                            return (
                                <div
                                    key={index} 
                                    className={`
                                        relative border-r border-b border-gray-100 p-4 sm:p-5 md:p-6
                                        ${!isLastInRow ? 'sm:border-r' : ''}
                                        ${!isLastInRowSm ? 'lg:border-r' : ''}
                                        ${isLastInRowLg ? 'lg:border-r-0' : ''}
                                    `}
                                >
                                    <div className='flex flex-col group items-center justify-center relative z-10'>
                                        
                                        {/* Brand Name */}
                                        <p className='text-sm uppercase sm:text-base md:text-lg lg:text-[20px] font-semibold text-center text-gray-800'>
                                            {item.desc}
                                        </p>
                                        
                                        {/* Car Image */}
                                        <div className='relative group-hover:scale-[1.3] transition-all duration-500 ease-in-out w-full h-16 sm:h-20 md:h-24 lg:h-28 mt-4 sm:mt-5 md:mt-6'>
                                            <Image 
                                                src={item.car} 
                                                alt={`${item.desc} car`}
                                                fill
                                                className='object-contain'
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 25vw"
                                            />
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

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