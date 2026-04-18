"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import ban1 from '@/public/Home/ban1.webp'
import ban2 from '@/public/Home/ban2.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banners = ({ autoplayDelay = 3000 }) => {
  // Generate array for slides
  const bannerSlides = [
    ban1, ban2
  ]

  return (
    <div className='bg-[#FDF8F8] pt-20'>
           <section className="w-[90%] mx-auto relative group">
      <Swiper
        cssMode={true}
        navigation={{
          clickable: true,
          hideOnClick: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper rounded-2xl overflow-hidden shadow-xl"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide}>
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src={slide}
                alt="banners"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0000002a]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
    </div>
  );
};

export default Banners;