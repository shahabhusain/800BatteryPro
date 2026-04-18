import { hasLocale, NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import { routing } from "@/i18n/routing";
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Providers } from "./providers";

export default async function RootLayout({ children, params }) {
    const { locale } = await params;

  // Use notFound() instead of redirect for 404 pages
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Set direction based on locale
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <html lang={locale} dir={direction}>
      <body className={direction === 'rtl' ? 'rtl' : 'ltr'}>
        <Providers>
        <NextIntlClientProvider locale={locale}>
          <Header />
              
          {children}
          
          {/* Desktop View - Floating WhatsApp & Call Buttons */}
          <div className='fixed top-[37rem] md:flex hidden flex-col gap-y-3 right-6 z-[9999]'>
            <a 
              href="https://wa.me/971528475675" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <div className='text-2xl animate-bounce bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors cursor-pointer'>
                <FaWhatsapp />
              </div>
            </a>
            <a 
              href="tel:971528475675" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <div className='text-2xl animate-bounce bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors cursor-pointer'>
                <MdCall />
              </div>
            </a>
          </div>

          {/* Mobile View - Floating WhatsApp & Call Buttons */}
          <div className='fixed bottom-0 left-0 right-0 w-full flex md:hidden items-center z-[9999] shadow-2xl'>
            <a 
              href="https://971528475675" 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-1/2'
            >
              <button className='bg-green-500 text-white py-4 w-full flex justify-center items-center gap-2 hover:bg-green-600 active:bg-green-700 transition-all duration-300'>
                <FaWhatsapp className='text-xl' />
                <span className='font-medium'>Whatsapp</span>
              </button>
            </a>
            <a 
              href="tel:971528475675" 
              className='w-1/2'
            >
              <button className='bg-red-500 text-white py-4 w-full flex justify-center items-center gap-2 hover:bg-red-600 active:bg-red-700 transition-all duration-300'>
                <MdCall className='text-xl' />
                <span className='font-medium'>Call Us</span>
              </button>
            </a>
          </div>
        </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}