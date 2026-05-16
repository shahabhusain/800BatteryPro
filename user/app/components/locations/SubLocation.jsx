import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image'
import bg from '@/public/locations/bg.jpeg'
const SubLocation = () => {
    const location = [
        { title: "Al Danah, AD", link: "/abu-dhabi/car-battery-replacement-al-danah" },
        { title: "Al Barsha 3, DXB", link: "/dubai/car-battery-replacement-al-barsha-3" },
        { title: "MBZ City, AD", link: "/abu-dhabi/car-battery-replacement-al-zahiyah" },
        { title: "Al Nahda, DXB", link: "/dubai/car-battery-replacement-al-nahda" },
        { title: "Al Zahiyah, AD", link: "/abu-dhabi/car-battery-replacement-khalifa-city" },
        { title: "Khalifa City, AD", link: "/abu-dhabi/car-battery-replacement-mohamed-bin-zayed-city" },
    ];

    return (
        <div className=' relative  text-white w-full md:mb-[35rem] mb-[32rem]'>
            <Image className=' absolute top-0 md:h-[600px] h-[500px]  w-full' src={bg} alt='bg-image' />
             <div className=' bg-[#000000c0] md:h-[600px] h-[500px]  absolute top-0 w-full'></div>
          <div className=' w-[80%] absolute top-12 left-0 right-0 mx-auto flex flex-col md:items-center items-start justify-center'>
              <button className='md:py-3 md:px-5 py-1.5 px-4 rounded-md md:text-[16px] text-[10px] bg-[#0000000D] border border-white/30'>
                Where we provide services
            </button>
            <h1 className='lg:text-[40px] md:text-[35px] text-center sm:text-[30px] text-[25px] font-semibold mt-4'>
                24/7 RSA Across All Major Dubai & Abu Dhabi Areas
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3  overflow-y-auto custom-scroll lg:grid-cols-4 gap-4 mt-8'>
                {location.map((item, index) => (
                    <Link key={index} href={item.link}>
                        <div className='md:py-3 md:px-5 py-1.5 px-3 backdrop-blur-lg text-[10px] md:text-[16px] rounded-md bg-[#FFFFFF33] hover:bg-[#FFFFFF50] transition-all duration-300 flex items-center gap-3 cursor-pointer'>
                            <FaMapMarkerAlt className='text-red-400' />
                            <span>{item.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
          </div>
        </div>
    );
};

export default SubLocation;