"use client"
import React, { useEffect, useState, useRef, useCallback } from "react";
import logo from "@/public/logo.svg";
import logo1 from "@/public/logo1.svg";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useLocale } from "next-intl";
import TopBar from "./TopBar";
import LanguageSwitcher from "./LaguageSwitcher";
import AppointmentModal from "./AppointmentModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollTimeout = useRef(null);
  const headerRef = useRef(null);

  // Smooth scroll handler with RAF
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) {
      cancelAnimationFrame(scrollTimeout.current);
    }

    scrollTimeout.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold for background change
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine header visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 600) {
        // Scrolling down - hide header
        setVisible(false);
      } else {
        // Scrolling up - show header
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    });
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Smooth body scroll lock for mobile menu
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }
      document.body.style.overflow = 'unset';
    };
  }, [handleScroll, mobileMenuOpen]);

  const englishLinks = [
    { path: "/car-brands", name: "Brands" },
    { 
      path: "/services", 
      name: "Services",
      subpages: [
        { path: "/services/battery-replacement/", name: "Battery Replacement" },
        { path: "/services/battery-boosting/", name: "Battery Boosting" },
        { path: "/services/roadside-assistance/", name: "Roadside Assistance" },
        { 
          path: "/services/car-scanning/", 
          name: "Car Scanning and Diagnostics",
          subPages: [
            { name: "ECU Repair", path: "/services/ecu-repair/" },
            { name: "Car 360 Calibration", path: "/services/360-calibration/" },
            { name: "Car ABS Repair", path: "/services/abs-calibration/" },
            { name: "Car BCM Repair Services", path: "/services/bcm-repair/" },
            { name: "TCM Repair Service", path: "/services/tcm-repair/" },
            { name: "Car PCB Repair Service", path: "/services/pcb-repair/" },
            { name: "ADAS Sensor Repair and Recalibration", path: "/services/adas-sensor-calibration/" },
            { name: "Flood Car Repair", path: "/services/flooded-car-repair/" },
            { name: "Car Key Programming", path: "/services/car-key-programming/" },
            { name: "Automotive Tuning", path: "/services/automotive-tuning/" },
          ]
        },
        { 
          path: "/services/mechanical-repair/", 
          name: "Mechanical Repair Services",
          subPages: [
            { name: "Car Engine Repair", path: "/services/car-engine-repair/" },
            { name: "Car Oil Change", path: "/services/oil-change/" },
            { name: "Transmission and Gearbox Repair", path: "/services/transmission-repair/" },
            { name: "Car AC Repair", path: "/services/car-ac-repair/" },
            { name: "Minor Car Service", path: "/services/minor-car-service/" },
            { name: "Car Brake Repair", path: "/services/car-brake-repair/" },
            { name: "Car Suspension Repair", path: "/services/car-suspension-repair/" },
            { name: "Major Car Service", path: "/services/car-major-service/" },
            { name: "Steering Repair", path: "/services/steering-repair/" },
          ]
        },
        { 
          path: "/services/electrical-repair/", 
          name: "Car Electrical Repair",
          subPages: [
            { name: "Radiator Fan Replacement", path: "/services/radiator-fan-replacement/" },
            { name: "Xenon Headlight Adjustment", path: "/services/xenon-headlight-adjustment/" },
            { name: "Wiper Motor Replacement", path: "/services/wiper-motor-replacement/" },
            { name: "Door Window Regulator Replacement", path: "/services/door-window-regulator-replacement/" },
          ]
        },
      ] 
    },
    { path: "/about-us", name: "About Us" },
    { path: "/offers", name: "Offers" },
    // { path: "/shop", name: "Shop" },
  ];

  const arabicLinks = [
    { path: "/brands", name: "العلامات التجارية" },
    { 
      path: "/services", 
      name: "الخدمات",
      subpages: [
        { path: "/services/battery-replacement/", name: "استبدال البطارية" },
        { path: "/services/battery-boosting/", name: "تشغيل البطارية" },
        { path: "/services/roadside-assistance/", name: "المساعدة على الطريق" },
        { 
          path: "/services/car-scanning/", 
          name: "فحص وتشخيص السيارة",
          subPages: [
            { name: "إصلاح وحدة التحكم ECU", path: "/services/ecu-repair/" },
            { name: "معايرة كاميرات 360 للسيارة", path: "/services/360-calibration/" },
            { name: "إصلاح نظام ABS", path: "/services/abs-calibration/" },
            { name: "إصلاح وحدة BCM للسيارة", path: "/services/bcm-repair/" },
            { name: "إصلاح وحدة TCM", path: "/services/tcm-repair/" },
            { name: "إصلاح لوحة PCB للسيارة", path: "/services/pcb-repair/" },
            { name: "إصلاح ومعايرة حساسات ADAS", path: "/services/adas-sensor-calibration/" },
            { name: "إصلاح السيارات المتضررة من الفيضانات", path: "/services/flooded-car-repair/" },
            { name: "برمجة مفاتيح السيارة", path: "/services/car-key-programming/" },
            { name: "تعديل وبرمجة السيارات", path: "/services/automotive-tuning/" },
          ]
        },
        { 
          path: "/services/mechanical-repair/", 
          name: "خدمات الإصلاح الميكانيكي",
          subPages: [
            { name: "إصلاح محرك السيارة", path: "/services/car-engine-repair/" },
            { name: "تغيير زيت السيارة", path: "/services/oil-change/" },
            { name: "إصلاح ناقل الحركة وعلبة التروس", path: "/services/transmission-repair/" },
            { name: "إصلاح مكيف السيارة", path: "/services/car-ac-repair/" },
            { name: "خدمة سيارة بسيطة", path: "/services/minor-car-service/" },
            { name: "إصلاح فرامل السيارة", path: "/services/car-brake-repair/" },
            { name: "إصلاح نظام التعليق", path: "/services/car-suspension-repair/" },
            { name: "خدمة سيارة شاملة", path: "/services/car-major-service/" },
            { name: "إصلاح نظام التوجيه", path: "/services/steering-repair/" },
          ]
        },
        { 
          path: "/services/electrical-repair/", 
          name: "إصلاح كهرباء السيارة",
          subPages: [
            { name: "استبدال مروحة الرديتر", path: "/services/radiator-fan-replacement/" },
            { name: "تعديل مصابيح الزينون", path: "/services/xenon-headlight-adjustment/" },
            { name: "استبدال محرك المساحات", path: "/services/wiper-motor-replacement/" },
            { name: "استبدال منظم زجاج الباب", path: "/services/door-window-regulator-replacement/" },
          ]
        },
      ] 
    },
    { path: "/about", name: "عن الشركة" },
    { path: "/offer", name: "العروض" },
    { path: "/shop", name: "المتجر" },
  ];

  const locale = useLocale();
  const links = locale === "en" ? englishLinks : locale === "ar" ? arabicLinks : null;

  // Handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Smooth dropdown handlers for desktop only
  let hoverTimeout;
  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  // Desktop menu with enhanced animations
  const renderDesktopMenu = () => (
    <ul className="hidden lg:flex items-center gap-x-6 xl:gap-x-10">
      {links.map((item, index) => (
        <li 
          key={index} 
          className="relative"
          onMouseEnter={() => item.subpages && handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-1 text-[14px] font-[400] cursor-pointer group">
            <Link 
              href={item.path || "#"} 
              className={`relative transition-all duration-300 ease-out ${
                scrolled 
                  ? 'text-black hover:text-red-600' 
                  : 'text-white hover:text-red-600'
              }`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
            {item.subpages && (
              <FaChevronDown 
                size={10} 
                className={`transition-all duration-300 ease-out ${
                  scrolled ? 'text-black' : 'text-white'
                } ${
                  openDropdown === index ? 'rotate-180 text-red-600' : 'group-hover:text-red-600'
                }`} 
              />
            )}
          </div>
          
          {/* Main dropdown with smooth animation */}
          {item.subpages && (
            <div 
              className={`absolute top-[10px] left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 transition-all duration-300 ease-out ${
                openDropdown === index 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.subpages.map((subItem, subIndex) => (
                <div key={subIndex} className="relative group/sub">
                  {subItem.subPages ? (
                    <>
                      <div className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between transition-all duration-300">
                        <Link 
                          href={subItem.path} 
                          className="text-[16px] text-gray-800 hover:text-red-600 transition-colors duration-300"
                        >
                          {subItem.name}
                        </Link>
                        <FaChevronDown 
                          size={10} 
                          className="rotate-[-90deg] text-gray-400 transition-all duration-300 group-hover/sub:text-red-600 group-hover/sub:translate-x-0.5" 
                        />
                      </div>
                      
                      {/* Nested dropdown with smooth slide animation */}
                      <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 ease-out translate-x-1 group-hover/sub:translate-x-0 pointer-events-none group-hover/sub:pointer-events-auto">
                        {subItem.subPages.map((nestedItem, nestedIndex) => (
                          <Link
                            key={nestedIndex}
                            href={nestedItem.path}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-all duration-300 hover:pl-6"
                          >
                            {nestedItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-all duration-300 hover:pl-6"
                    >
                      {subItem.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  // Mobile menu with main pages only (no dropdowns)
  const renderMobileMenu = () => (
    <>
      {/* Backdrop with smooth fade */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-all duration-300 ease-out backdrop-blur-sm ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Menu panel with smooth slide */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-100">
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-gray-800 hover:text-red-600 transition-all duration-300 p-2 hover:bg-gray-100 rounded-full hover:rotate-90"
            aria-label="Close menu"
          >
            <HiOutlineX size={24} />
          </button>
        </div>
        
        <div className="px-6 py-4 overflow-y-auto h-[calc(100vh-80px)]">
          <ul className="space-y-1">
            {/* Only render main pages - no dropdowns or subpages */}
            {links.map((item, index) => (
              <li key={index} className="border-b border-gray-100 last:border-0">
                <Link
                  href={item.path}
                  className="block text-gray-800 font-medium py-4 hover:text-red-600 transition-all duration-300 hover:translate-x-1 relative group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile book button - now opens modal */}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              handleOpenModal();
            }}
            className="w-full mt-8 bg-red-600 text-[14px] font-[400] py-3 px-5 rounded-full text-white flex items-center justify-center gap-x-2 hover:bg-red-700 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            {locale === "en" ? "Book An Appointment" : locale === "ar" ? "حجز موعد" : null}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <GoArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="fixed z-[100] w-full transition-all duration-300 ease-out">
        {scrolled ? null : <TopBar />}
        <header
          ref={headerRef}
          className={`absolute w-full transition-all duration-300 ease-out
            ${visible ? 'top-0' : '-top-24'} 
            ${scrolled ? '-top-24' : ' md:top-20'}`}
        >
          <div
            className={`py-3 px-4 mx-auto w-full transition-all duration-300 ease-out
              ${scrolled 
                ? 'bg-white/95 backdrop-blur-md text-black w-full shadow-lg' 
                : 'bg-[#ffffff15] backdrop-blur-md text-white lg:w-[90%] xl:w-[80%] rounded-none lg:rounded-full border border-white/20'
              }`}
            style={{
              transform: 'translateZ(0)',
              willChange: 'transform, background-color, box-shadow',
            }}
          >
            <div className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'lg:w-[90%] mx-auto' : ''
            }`}>
              {/* Logo with smooth transition */}
              <Link href="/" className="relative block group">
                <div className="relative w-[120px] md:w-auto h-[40px] md:h-[50px] transition-all duration-300">
                  <Image 
                    src={scrolled ? logo1 : logo}
                    alt="logo"
                    width={140}
                    height={140}
                    className="object-contain transition-all duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Menu */}
              {renderDesktopMenu()}

              {/* Desktop Book Button */}
              <div className="flex items-center gap-4">
                {scrolled ? <div className="md:block hidden"><LanguageSwitcher scrolled={scrolled} /></div> : null}
                <button 
                  onClick={handleOpenModal}
                  className={`hidden lg:flex text-[12px] xl:text-[14px] font-[400] py-2 xl:py-3 px-3 xl:px-5 rounded-full items-center gap-x-2 whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95 group ${
                    scrolled 
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl' 
                      : 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {locale === "en" ? "Book An Appointment" : locale === "ar" ? "حجز موعد" : null}
                  <span className="group-hover:translate-x-2 transition-transform duration-300 hidden xl:inline">
                    <GoArrowRight size={20} />
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button with smooth animation */}
              <div className="md:hidden">
                <LanguageSwitcher scrolled={scrolled} />
              </div>
              <button 
                className="lg:hidden p-2 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <HiOutlineMenu 
                  size={24} 
                  className={`transition-colors duration-300 ${
                    scrolled ? 'text-black' : 'text-white'
                  }`} 
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {renderMobileMenu()}
        </header>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default Header;