import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image'
import bg from '@/public/locations/bg.jpeg'
const SubLocation = () => {
    const location = [
        { title: "Downtown Dubai", link: "/" },
        { title: "Dubai Marina", link: "/" },
        { title: "Jumeirah", link: "/" },
        { title: "Al Barsha", link: "/" },
        { title: "Deira", link: "/" },
        { title: "Bur Dubai", link: "/" },
        { title: "Dubai Silicon Oasis", link: "/" },
        { title: "Al Quoz", link: "/" },
        { title: "Dubai Investment", link: "/" },
        { title: "Downtown Dubai", link: "/" },
        { title: "Dubai Marina", link: "/" },
        { title: "Jumeirah", link: "/" },
        { title: "Al Barsha", link: "/" },
        { title: "Deira", link: "/" },
        { title: "Bur Dubai", link: "/" },
        { title: "Dubai Silicon Oasis", link: "/" },
        { title: "Al Quoz", link: "/" },
        { title: "Dubai Investment", link: "/" },
    ];

    return (
        <div className=' relative  text-white w-full mb-[32rem]'>
            <Image className=' absolute top-0 h-[500px]  w-full' src={bg} alt='bg-image' />
             <div className=' bg-[#000000c0] h-[500px]  absolute top-0 w-full'></div>
          <div className=' w-[80%] absolute top-12 left-0 right-0 mx-auto flex flex-col md:items-center items-start justify-center'>
              <button className='md:py-3 md:px-5 py-1.5 px-4 rounded-md md:text-[16px] text-[10px] bg-[#0000000D] border border-white/30'>
                Where we provide services
            </button>
            <h1 className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-semibold mt-4'>
                Auto Repairs Across All Major UAE Areas
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 md:h-[250px] h-[220px] overflow-y-auto custom-scroll lg:grid-cols-4 gap-4 mt-8'>
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