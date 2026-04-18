"use client"

import React from "react";
import { GoArrowRight } from "react-icons/go";
import bat1 from "@/public/b1.png";
import bat2 from "@/public/b2.png";
import bat3 from "@/public/b3.png";
import Image from "next/image";
import { useLocale } from "next-intl";

const TrendingProducts = () => {

  const englishProduct = [
    {
      img: bat1,
      desc: "Dakota Lithium Batteries",
      price: "$89",
    },
    {
      img: bat2,
      desc: "TR TR-B1700 Performance Lightweight Battery",
      price: "$89",
    },
    {
      img: bat3,
      desc: "TR TR-B1700 Performance Lightweight Battery",
      price: "$89",
    },
  ];

  const arabicProduct = [
    {
      img: bat1,
      desc: "بطاريات داكوتا ليثيوم",
      price: "$89",
    },
    {
      img: bat2,
      desc: "بطارية TR TR-B1700 خفيفة الوزن عالية الأداء",
      price: "$89",
    },
    {
      img: bat3,
      desc: "بطارية TR TR-B1700 خفيفة الوزن عالية الأداء",
      price: "$89",
    },
  ];

  const locale = useLocale();

  const product =
    locale === "ar" ? arabicProduct : englishProduct;

  const text =
    locale === "ar"
      ? {
          shop: "تسوّق",
          title1: "منتجاتنا",
          title2: "الرائجة",
          viewAll: "عرض الكل",
        }
      : {
          shop: "Shop",
          title1: "Our Trending",
          title2: "Products",
          viewAll: "View All",
        };

  return (
    <div
      className={`w-[90%] sm:w-[85%] md:w-[80%] mx-auto mt-10 md:mt-20 ${
        locale === "ar" ? "text-right" : "text-left"
      }`}
    >
      {/* Header */}
      <div>
        <h1 className="text-[12px] sm:text-[14px] md:text-[16px] font-bold text-gray-600 uppercase tracking-wider">
          {text.shop}
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 md:mt-6 gap-4 sm:gap-6">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold w-full sm:max-w-[544px] leading-tight">
            <span className="text-gray-900">{text.title1}</span>{" "}
            <span className="text-[#C1121F]">{text.title2}</span>
          </h1>

          <button className="w-full sm:w-fit bg-[#C1121F] py-2.5 sm:py-3 px-4 sm:px-5 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-all duration-300 text-sm sm:text-base group">
            <span>{text.viewAll}</span>

            <span
              className={`${
                locale === "ar" ? "rotate-180" : ""
              } group-hover:translate-x-1 transition-transform duration-300`}
            >
              <GoArrowRight
                size={20}
                className="sm:w-[24px] sm:h-[24px]"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Products - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10">
        {product.map((item, index) => (
          <div
            key={index}
            className="w-full aspect-square flex flex-col items-center justify-center border border-gray-200 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group"
          >
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] mb-2 sm:mb-4">
              <Image
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                src={item.img}
                alt="product"
                fill
                sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 250px"
                priority={index < 2}
              />
            </div>

            <p className="text-center text-sm sm:text-base text-gray-700 line-clamp-2 px-2">
              {item.desc}
            </p>

            <h2 className="font-semibold text-lg sm:text-xl text-gray-900 mt-2">
              {item.price}
            </h2>
          </div>
        ))}
      </div>

      {/* Mobile View All Button - Only visible on mobile */}
      <div className="flex sm:hidden mt-6">
        <button className="w-full bg-[#C1121F] py-3 px-4 uppercase rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-all duration-300 text-sm">
          <span>{text.viewAll}</span>
          <span className={locale === "ar" ? "rotate-180" : ""}>
            <GoArrowRight size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TrendingProducts;