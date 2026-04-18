"use client"

import React, { useState } from 'react'
import { useLocale } from 'next-intl'

const RealExperience = () => {
    const locale = useLocale()
    const [activeVideo, setActiveVideo] = useState(null)
    
    const englishExperience = [
        { 
           id: 1,
           videoId: "twztYM_nYrE",
           title: "800 battery pro"
        },
        {
           id: 2,
           videoId: "DvnzM3hu8fA",
           title: "800 battery pro"
        },
        {
           id: 3,
           videoId: "cgdli2a_Dt0",
           title: "800 battery pro"
        },
    ]
    
    const arabicExperience = [
        { 
           id: 1,
           videoId: "twztYM_nYrE",
           title: "800 بطارية برو"
        },
        {
           id: 2,
           videoId: "DvnzM3hu8fA",
           title: "800 بطارية برو"
        },
        {
           id: 3,
           videoId: "cgdli2a_Dt0",
           title: "800 بطارية برو"
        },
    ]
    
    const experience = locale === "en" ? englishExperience : arabicExperience

    // Get YouTube thumbnail URL
    const getThumbnail = (videoId) => {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    }

    return (
        <div className='py-20 w-full  backdrop-blur-sm '>
            <div className='md:w-[85%] w-[95%] mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-12' dir={locale === "ar" ? "rtl" : "ltr"}>
                    <h1 className='text-4xl md:text-5xl font-bold text-white'>
                        {locale === "ar" ? "قصصنا" : "Our Stories"}
                    </h1>
                    <div className='w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full'></div>
                </div>

                {/* Reel Grid */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center'>
                    {experience.map((item) => (
                        <div 
                            key={item.id} 
                            className='group relative rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-500'
                            style={{ maxWidth: '360px', width: '100%' }}
                        >
                            {activeVideo === item.id ? (
                                // Video Playing State
                                <div className='relative' style={{ aspectRatio: '9/16' }}>
                                    <button 
                                        onClick={() => setActiveVideo(null)}
                                        className='absolute top-2 right-2 z-10 bg-black/70 hover:bg-red-600 rounded-full p-1.5 transition-all'
                                    >
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                                        title={item.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className='w-full h-full'
                                        style={{ aspectRatio: '9/16' }}
                                    ></iframe>
                                </div>
                            ) : (
                                // Thumbnail State
                                <div 
                                    className='relative cursor-pointer overflow-hidden'
                                    style={{ aspectRatio: '9/16' }}
                                    onClick={() => setActiveVideo(item.id)}
                                >
                                    {/* YouTube Thumbnail */}
                                    <img 
                                        className='w-full h-full object-cover' 
                                        src={getThumbnail(item.videoId)}
                                        alt={item.title}
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>
                                    
                                    {/* Title - Bottom */}
                                    <div className='absolute bottom-4 left-4 right-4 z-10'>
                                        <p className='text-white font-semibold text-sm truncate'>{item.title}</p>
                                    </div>
                                    
                                    {/* Play Button - Always Visible */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <div className='bg-red-600 rounded-full p-4 shadow-2xl'>
                                            {/* Play Icon */}
                                            <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RealExperience