import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useLocale } from 'next-intl';

const Trusted = () => {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // English content
  const englishContent = {
    sectionTitle: "What Our Customers Say",
    headingPrefix: "Trusted by",
    headingHighlight: "Drivers Everywhere",
  };

  // Arabic content (translated reviews)
  const arabicContent = {
    sectionTitle: "ماذا يقول عملاؤنا",
    headingPrefix: "موثوق من قبل",
    headingHighlight: "السائقين في كل مكان",
  };

  const content = locale === 'en' ? englishContent : arabicContent;

  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Ahmed Al Mansoori',
      title: locale === 'en' ? 'Real Estate Consultant (Dubai)' : 'مستشار عقاري (دبي)',
      rating: 5,
      testimonial: locale === 'en' 
        ? 'Fast response and very professional. Battery replaced in minutes. Highly reliable service.'
        : 'استجابة سريعة واحترافية للغاية. تم استبدال البطارية في دقائق. خدمة موثوقة للغاية.'
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Fatima Al Nuaimi',
      title: locale === 'en' ? 'HR Manager (Abu Dhabi)' : 'مديرة موارد بشرية (أبوظبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Called late night and they arrived quickly. Smooth and hassle-free experience.'
        : 'اتصلت في وقت متأخر من الليل وقد وصلوا بسرعة. تجربة سلسة وخالية من المتاعب.'
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'James Carter',
      title: locale === 'en' ? 'Project Engineer (Dubai)' : 'مهندس مشاريع (دبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Quick jump-start plus full diagnostics. Clear explanation and great service.'
        : 'تشغيل سريع للبطارية بالإضافة إلى تشخيص كامل. شرح واضح وخدمة رائعة.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Aisha Al Mazrouei',
      title: locale === 'en' ? 'Entrepreneur (Abu Dhabi)' : 'رائدة أعمال (أبوظبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Used them twice—always on time and efficient. Very consistent service.'
        : 'استخدمتهم مرتين - دائمًا في الوقت المحدد وفعالين. خدمة متسقة للغاية.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
      name: 'Daniel Schmidt',
      title: locale === 'en' ? 'Automotive Consultant (Dubai)' : 'مستشار سيارات (دبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Impressed with their advanced diagnostics. Found the issue instantly.'
        : 'مبهر بتشخيصهم المتقدم. وجدوا المشكلة فورًا.'
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60',
      name: 'Khalid Al Falasi',
      title: locale === 'en' ? 'Logistics Manager (Dubai)' : 'مدير لوجستيات (دبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Got stranded, they reached fast and handled everything professionally.'
        : 'تعطلت بي السيارة، وصلوا بسرعة وتعاملوا مع كل شيء باحترافية.'
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60',
      name: 'Sarah Williams',
      title: locale === 'en' ? 'Marketing Director (Abu Dhabi)' : 'مديرة تسويق (أبوظبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Honest advice—saved me from unnecessary battery replacement.'
        : 'نصيحة صادقة - أنقذتني من استبدال البطارية غير الضروري.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
      name: 'Omar Al Suwaidi',
      title: locale === 'en' ? 'IT Specialist (Dubai)' : 'أخصائي تقنية معلومات (دبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Called at 3 AM, quick response. Truly reliable 24/7 service.'
        : 'اتصلت الساعة 3 صباحًا، استجابة سريعة. خدمة موثوقة حقًا على مدار الساعة.'
    },
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=60',
      name: 'Michael Chen',
      title: locale === 'en' ? 'Business Analyst (Dubai)' : 'محلل أعمال (دبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Premium service and knowledgeable technician. Smooth experience.'
        : 'خدمة متميزة وفني خبير. تجربة سلسة.'
    },
    {
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60',
      name: 'Noor Al Dhaheri',
      title: locale === 'en' ? 'Interior Designer (Abu Dhabi)' : 'مصممة داخلية (أبوظبي)',
      rating: 5,
      testimonial: locale === 'en'
        ? 'Best roadside service I\'ve used. Always professional and dependable.'
        : 'أفضل خدمة طرق استخدمتها. دائمًا محترفون ويمكن الاعتماد عليهم.'
    },
  ];

  // Component for star rating
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Component for an individual testimonial card
  const CreateCard = ({ card }) => (
    <div className="p-5 rounded-lg mx-4 transition-all duration-200 w-80 shrink-0 bg-white border border-gray-100" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Star Rating - Always 5 stars as per image */}
      <div className="mb-3">
        <StarRating rating={card.rating} />
      </div>
      
      {/* Testimonial text */}
      <p className={`text-sm text-gray-700 leading-relaxed mb-4 ${isRTL ? 'text-right' : ''}`}>
        "{card.testimonial}"
      </p>
      
      {/* Author info - Name and Title only */}
      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
   
        <div className={isRTL ? 'text-right' : ''}>
          <p className="font-semibold text-sm text-gray-900">{card.name}</p>
          <p className="text-xs text-gray-500">{card.title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12 bg-[#FDF8F8]" dir={isRTL ? 'ltr' : 'ltr'}>
      <div className='flex items-center justify-center flex-col gap-y-3 mt-6'>
        <p className={isRTL ? 'text-right' : ''}>{content.sectionTitle}</p>
        <h1 className={`lg:text-[40px] md:text-[35px] text-[30px] text-center md:text-left font-bold ${isRTL ? 'md:text-right' : ''}`}>
          {isRTL ? (
            <>
              <span>{content.headingPrefix}</span>{' '}
              <span className='text-[#C1121F]'>{content.headingHighlight}</span>{' '}
            </>
          ) : (
            <>
              <span>{content.headingPrefix}</span>{' '}
              <span className='text-[#C1121F]'>{content.headingHighlight}</span>{' '}
            </>
          )}
        </h1>
      </div>

      {/* Inline keyframes for the marquee animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* First marquee row - Adjust direction for RTL */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>

        <div className={`marquee-inner flex transform-gpu min-w-[200%] pt-6 pb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={`row1-${index}`} card={card} />
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>

      {/* Second marquee row - Adjust direction for RTL */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>

        <div className={`marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-4 pb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={`row2-${index}`} card={card} />
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Trusted;