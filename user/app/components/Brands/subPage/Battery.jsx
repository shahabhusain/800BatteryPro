"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Battery = ({ autoplayDelay = 3000, brands, batteryText }) => {


  return (
    <div className="bg-[#FDF8F8] md:py-20 py-10">
           <div className='flex flex-col gap-y-3 md:flex-row items-center md:w-[80%] w-[95%] mx-auto justify-between'>
                <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold max-w-full md:max-w-[544px] leading-tight text-left'>
                  <span className='font-normal'>{batteryText.title1}</span>{' '}
                  <span className='text-[#C1121F]'>{batteryText.title2} </span>{' '}
                  <span>{batteryText.title3}</span>
                </h1>
              </div>
      <section className="md:w-[80%] mt-12 bg-white p-6 rounded-md mx-auto">

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper pt-6"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center md:h-[120px] h-[70px]">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  className="object-contain md:h-[70px] h-[30px] w-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>
  );
};

export default Battery;