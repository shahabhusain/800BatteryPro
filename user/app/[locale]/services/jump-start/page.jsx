import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaHome, FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import { useLocale } from 'next-intl'
import serviceImg from "@/public/services/service.webp"
import React from 'react'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/serviceBanners/boost.webp'
import CarBrands from '@/app/components/Hero/CarBrands'
import HowItWorks from '@/app/components/Hero/HowItWorks'
import Serve from '@/app/components/Services/Serve'
import Faild from '@/app/components/Services/Faild'

export const metadata = {
  title: "Jump Start & Car Battery Boost Dubai & Abu Dhabi | 800BatteryPro",
  description:
    "Dead battery in Dubai or Abu Dhabi? 800BatteryPro jump starts your car at your location in under 25 minutes. ECU-safe. Free battery test. From AED 99. Call 24/7.",
keywords: "jump start dubai, jump start abu dhabi, dead battery dubai, dead battery abu dhabi, car battery boost dubai, car won't start dubai, emergency jump start dubai, emergency jump start abu dhabi, battery boost service dubai, ECU safe jump start dubai, jump start service near me, flat battery dubai, flat battery abu dhabi, car not starting dubai, mobile battery boost uae, jump start luxury car dubai, battery boost 24 7 dubai, battery boost 24 7 abu dhabi",
  alternates: {
    canonical: "https://800batterypro.com/services/jump-start",
  },
};


const BatteryBoosting = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Dubai & Abu Dhabi · 10,000+ Happy Customers  · ECU-Safe Jump Start Technology",
    title: {
        span1: "Car Battery Jump Start in ",
        span2: "Dubai or Abu Dhabi Under 25 Minutes"
    },
    desc1: "Car won't start in Dubai, Abu Dhabi, or anywhere across the UAE? 800BatteryPro dispatches a experienced technician to your exact location in under 25 minutes - home, office, mall car park, highway, or roadside. No towing. No waiting. Jump start from AED 99. Free battery test included. No hidden fees.",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "خدمات تشغيل بطارية السيارة",
        span2: "على مدار 24/7 في دبي"
    },
    desc1: "احصل على مساعدة خبراء على الطريق مع فحص مجاني في الموقع وتشغيل آمن للبطارية خلال 30 دقيقة.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Service Section
const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "Professional Jump Start & Battery Boost Service in Dubai & Abu Dhabi - Mobile, ECU-Safe & Fast",
    services: [
        {
            id: 1,
            description: "800BatteryPro is Dubai and Abu Dhabi's most trusted mobile jump start and battery boost service - available 24 hours a day, 7 days a week, 365 days a year. Whether your car has a dead battery after sitting in Dubai's summer heat, your lights were accidentally left on overnight in a mall car park, or your alternator has stopped charging - we come to your exact location across Dubai and Abu Dhabi in under 25 minutes. Unlike roadside services that simply clip jump leads and drive away, 800BatteryPro performs a complete battery health assessment at every callout. Our technicians use professional battery load-testing equipment to measure your battery's actual capacity, cold cranking amps (CCA), and internal resistance - giving you an accurate, honest picture of your battery's condition, not just a temporary fix that leaves you stranded again tomorrow."
        },
          {
            id: 2,
            description: "What makes our jump start service different in Dubai:Our advanced ECU-safe jump start equipment uses precision voltage regulation to deliver the exact power surge your battery needs - without exposing your car's sensitive electronic systems to dangerous voltage spikes. Modern vehicles contain 80–100 electronic control units, and an unregulated jump start from incorrect equipment can cause damage worth thousands of dirhams. Every jump start we perform is ECU-safe, spike-protected, and approved for luxury, exotic, and hybrid vehicles across Dubai and Abu Dhabi.If your battery cannot be recovered by a boost, our technician replaces it on-site from our fully stocked mobile van - carrying premium AGM, EFB, and standard batteries for all car brands. Brands include Varta, Bosch, Amaron, AC Delco, and Solite. Every replacement includes an 18-month warranty. No towing, no garage visit, no waiting. Jump start from AED 99. Free professional battery load test. Battery replacement from AED 250 with 18-month warranty. No hidden fees. No garage visit needed."
        },

        

        
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "تعطلت في دبي أو أبو ظبي؟",
    services: [
        {
            id: 1,
            description: "مع بطارية سيارة فارغة؟ لا تنتظر أو تخاطر - اتصل بالخبراء الذين يضمنون المساعدة على الطريق 24/7 والوصول خلال 30 دقيقة! بطارية السيارة الفارغة تعطل جدولك بالكامل. أنت بحاجة إلى فريق سريع وموثوق لإعادة سيارتك إلى الحركة بأمان. يقدم 800BatteryPro خدمة تشغيل بطارية الطوارئ المتميزة 24/7 مباشرة إلى موقعك بالضبط. نرسل فنيين معتمدين فوراً حتى لا تنتظر طويلاً في الحرارة. يستخدم خبراؤنا تقنية تشخيص متقدمة لتوفير شحن آمن. تحمي هذه الطريقة الدقيقة أجهزة الكمبيوتر الداخلية الحساسة لسيارتك من الارتفاعات الكهربائية الخطرة. إذا كنت بحاجة إلى استبدال، فإننا نقدم فقط بطاريات ذات علامات تجارية متميزة، يتم توصيلها وتركيبها بتكلفة إضافية. باستخدام تقنية التركيب المتقدمة، نضمن بقاء الأنظمة الإلكترونية لسيارتك محمية وتعمل بشكل طبيعي، حتى تتمكن من القيادة براحة بال. نحن نفتخر بالموثوقية والسرعة والخدمة الخالية من المتاعب - بدون رسوم خفية أو تنازلات. سواء كنت عالقاً في المنزل أو العمل أو على الطريق، فإن فريقنا جاهز لإعادتك إلى الحركة بسرعة وأمان. ثق بالخبراء الرائدين في الإمارات في مجال تشغيل بطارية السيارة المتنقلة واستمتع بالراحة مع كل مكالمة. اتصل بنا الآن للحصول على مساعدة فورية وموثوقة."
        },
    ]
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: "ECU-Safe Jump Start - Protects Your Car's Electronics",
        desc: "We use professional voltage-regulated jump start equipment that delivers a precisely controlled power surge - protecting your ECU, airbag modules, MBUX display, and all electronic control units from dangerous spikes. Safe for all vehicles including Mercedes, BMW, Ferrari, Lamborghini, and hybrid cars. We never use basic clamp-to-clamp methods on modern vehicles."
    },
    {
        icons: <FaSitemap />,
        title: "Free Battery Load Test - Not Just a Voltage Check",
        desc: "Every callout includes a professional battery load test - not just a basic voltage reading. We measure your battery's actual cold cranking amps (CCA) and remaining capacity using advanced diagnostic equipment. Honest diagnosis every time. We never recommend a replacement unless your battery genuinely needs it - and we show you the test result before advising anything."
    },
    {
        icons: <FaSitemap />,
        title: "Under 25 Minutes - 20+ Vans Across Dubai & Abu Dhabi",
        desc: "Our fleet of 20+ rapid-response vans is strategically positioned across Dubai and Abu Dhabi - Marina, DIFC, Business Bay, Deira, Al Barsha, JLT, Khalifa City, Yas Island, and beyond. Average arrival time under 25 minutes anywhere in both emirates, 24 hours a day, 7 days a week. We track our response times and we stand by this promise."
    },
    {
        icons: <FaSitemap />,
        title: "Boost Fails? Battery Replaced On-Site - 18-Month Warranty",
        desc: "If your battery is beyond boosting, we don't leave you stranded or ask you to book a second visit. Our technician replaces your battery on-site immediately from a fully stocked van carrying premium batteries for all car brands. Every replacement comes with an 18-month warranty backed by 800BatteryPro. If it fails within warranty, we replace it free. No questions asked."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "الوصول خلال 30 دقيقة",
        desc: "وقتك ثمين. نضع سيارات الخدمة المجهزة بالكامل بشكل استراتيجي في جميع أنحاء دبي وأبو ظبي لضمان وقت استجابة أقل من 30 دقيقة. نصل إليك بسرعة حتى تتمكن من مواصلة يومك."
    },
    {
        icons: <FaSitemap />,
        title: "فحص وتوصيل البطارية مجاناً",
        desc: "نحن لا نخمن أبداً ما هو الخطأ في سيارتك. يستخدم فنيونا أحدث التقنيات لإجراء فحص مجاني للبطارية في المكان. إذا كانت بطاريتك تحتاج فقط إلى شحن، فسنقوم بتشغيلها بأمان. إذا كانت البطارية فارغة تماماً، فإننا نقدم توصيل مجاني للبطارية إلى موقعك."
    },
    {
        icons: <FaSitemap />,
        title: "بطاريات ذات علامات تجارية متميزة وقطع أصلية",
        desc: "نستخدم بدقة قطع الغيار المعتمدة من المصنع والبطاريات الأصلية المتميزة الموصى بها من قبل الشركة المصنعة لسيارتك. استخدام العلامات التجارية الراقية يضمن أن بطاريتك الجديدة تتحمل مناخ الإمارات القاسي وتوفر طاقة موثوقة لسنوات قادمة."
    },
    {
        icons: <FaSitemap />,
        title: "تقنية تركيب متقدمة",
        desc: "استبدال البطارية في سيارة حديثة ليس مجرد استخدام مفتاح ربط. نستخدم أدوات تشخيص متقدمة لضمان تزامن بطاريتك الجديدة بشكل مثالي مع أجهزة الكمبيوتر الداخلية لسيارتك. تمنع عملية التركيب الخبيرة لدينا فقدان البيانات وتضمن عمل الراديو وذاكرة المقاعد وأنظمة إدارة المحرك بشكل لا تشوبه شائبة."
    }
]

// FAQs Section
  // FAQs Section
  const englishFaqs = [
      {
          question: "How much does a jump start cost in Dubai?",
          answer: "A jump start in Dubai starts from AED 99 with 800BatteryPro. This includes the callout to your location, the ECU-safe boost, and a free professional battery load test. If your battery needs replacing after the boost, batteries start from AED 299 with an 18-month warranty - no extra callout fee for the replacement."
      },
      {
          question: "How fast can you reach me for a jump start in Dubai?",
          answer: "Our average arrival time for a jump start anywhere in Dubai is under 25 minutes. We position our fleet of 20+ vans across strategic locations in both Dubai and Abu Dhabi. During peak traffic hours on Sheikh Zayed Road or Al Khail Road, we'll give you a live ETA when you call - we never promise 25 minutes and then show up in 45."
      },
      {
          question: "Will a jump start damage my car's ECU or electronics?",
          answer: "A jump start performed with unregulated equipment can damage your car's ECU, airbag control modules, and other electronic systems - potentially causing thousands of dirhams in damage. 800BatteryPro uses professional voltage-regulated ECU-safe equipment at every callout. Your car's electronics are fully protected during the entire boost process."
      },
      {
          question: "My car started after the jump but died again - why?",
          answer: "This almost always means either (1) your battery is beyond recovery and can no longer hold a charge, (2) your alternator isn't recharging the battery while driving, or (3) a parasitic electrical drain is continuously drawing power. Our technicians perform a full battery load test and alternator output test at every callout to identify the real cause - not just start your car temporarily."
      },

            {
          question: "What if the jump start doesn't work?",
          answer: "If your battery is beyond recovery by a boost, our technician replaces it on-site immediately from our fully stocked van - no second visit, no towing to a garage. We carry premium AGM, EFB, and standard batteries for all car brands. Every replacement comes with an 18-month warranty. You don't pay anything extra for the replacement callout."
      },
            {
          question: "Can you jump start luxury and exotic cars in Dubai?",
          answer: "Yes. Our ECU-safe jump start equipment is specifically designed for luxury and high-performance vehicles including Mercedes-Benz AMG, BMW M-Series, Ferrari, Lamborghini, Porsche, Rolls-Royce, Bentley, and Bugatti. These vehicles have complex electronic architectures that require precision voltage regulation during a boost — which our professional equipment provides at every callout."
      },
            {
          question: "Do you jump start cars in Abu Dhabi?",
          answer: "Yes. 800BatteryPro provides the same 24/7 jump start and battery boost service across all Abu Dhabi areas - Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Mussafah, MBZ City, the city centre, Corniche, and all Abu Dhabi highways. Response time under 25 minutes for most Abu Dhabi locations. Same AED 99 pricing, same ECU-safe equipment, same warranty."
      },
            {
          question: "Do you jump start hybrid and electric cars?",
          answer: "We jump start hybrid vehicles - including Toyota Camry Hybrid, Lexus ES Hybrid, Kia Niro Hybrid, and similar models - that have a 12V auxiliary battery, which most hybrids do. Full battery electric vehicles (EVs) don't have a traditional 12V starter battery but most have a separate 12V auxiliary system we can assist with. Call us and describe your vehicle - we'll confirm before dispatching."
      },
            {
          question: "How long does a jump start take on-site?",
          answer: "From the moment our technician arrives, a complete jump start service - including battery load test, ECU-safe boost, and post-boost verification - takes between 15 and 25 minutes on-site. If your battery needs replacing, add another 15–20 minutes for the swap and coding. Total time at your location is typically under 25 minutes for the worst-case scenario."
      },
            {
          question: "What information do I need when I call for a jump start?",
          answer: "When you call +971 52 847 5675 just tell us: (1) your exact location in Dubai or Abu Dhabi - or share your Google Maps pin via WhatsApp, (2) your car make and model, and (3) what's happening - won't start, battery warning light, clicking sound, etc. That's all we need to dispatch the right technician with the right equipment immediately."
      },
  ]


const arabicFaqs = [
    {
        question: "كم من الوقت يستغرق وصولكم إلي في دبي أو أبو ظبي؟",
        answer: "نضع سيارات الخدمة المجهزة بالكامل بشكل استراتيجي في جميع أنحاء المدينتين. وهذا يسمح لفنيينا بالوصول إلى موقعك بالضبط في أقل من 30 دقيقة، 24 ساعة في اليوم، 7 أيام في الأسبوع."
    },
    {
        question: "هل تشغيل البطارية قد يتلف سيارتي الحديثة؟",
        answer: "لا. السيارات الحديثة لديها أنظمة كهربائية معقدة تتطلب معالجة دقيقة. نستخدم أدوات تشخيص متقدمة ومعدات محمية من زيادة التيار لشحن سيارتك بأمان، مما يمنع أي ضرر لأنظمة إدارة المحرك أو ذاكرة المقاعد أو أنظمة الراديو."
    },
    {
        question: "هل تتقاضون رسماً لفحص البطارية؟",
        answer: "نقدم فحصاً مجانياً تماماً للبطارية. عندما يصل فنيونا، يتحققون من صحة بطاريتك بالضبط للعثور على المشكلة الجذرية قبل اتخاذ أي إجراء."
    },
    {
        question: "ماذا يحدث إذا كانت بطارية سيارتي فارغة تماماً؟",
        answer: "إذا كانت بطاريتك لا تقبل الشحن، فإننا نقدم توصيل مجاني لبطارية بديلة. نحن نتوفر على بطاريات ذات علامات تجارية متميزة موصى بها من قبل الشركة المصنعة لسيارتك ونقوم بتركيبها باستخدام تقنية متقدمة للحفاظ على تشغيل سيارتك بسلاسة لسنوات قادمة."
    },
]


const carIssuesFaqs = [
         {
            question:"Extreme Heat Degradation - #1 Cause in UAE",
            answer:"Temperatures above 45°C accelerate battery fluid evaporation and plate corrosion inside the battery. A battery rated for 5 years in Europe typically lasts only 2–3 years in Dubai and Abu Dhabi. If your battery is over 3 years old and the UAE summer has arrived - get it tested before it fails."
         },
          {
            question:" Long Parking Periods - Mall, Airport, Residential",
            answer:"A car parked in direct sun for 5+ days self-discharges significantly faster than one kept in a garage. Airport parking, extended travel, or simply not driving for a week in Dubai's heat is enough to fully drain many batteries - especially older ones."
         },
          {
            question:"Lights or AC Left On",
            answer:"Leaving headlights, interior lights, or the air conditioning running with the engine off is the most common reason for a flat battery in Dubai mall and building car parks. Modern cars sometimes keep modules active even when off - draining the battery over several hours."
         },

                  {
            question:"Faulty Alternator Not Charging",
            answer:"A failing alternator doesn't recharge your battery while driving. The car starts fine then struggles the next morning - repeat until completely flat. Our technicians test alternator output voltage at every callout so this is diagnosed on-site, not after a second visit."
         },
          {
            question:"Parasitic Electrical Drain",
            answer:"A faulty door sensor, module stuck awake, or aftermarket accessory drawing power overnight can drain a healthy battery completely. This is harder to diagnose - our on-site diagnostic equipment identifies the source immediately so the real problem is fixed, not just the symptom."
         },
          {
            question:"Battery Over 3 Years Old in UAE Conditions",
            answer:"A battery over 3 years old in UAE conditions is statistically at high risk of sudden failure - even if it still starts the car daily. Heat degrades battery chemistry regardless of usage patterns. Call us for a free battery health test at your location before summer hits."
         },

          

        ]

         const failContent = [
         {
                     icon:<FaHome />,
                     title:"Battery Is Beyond Recovery",
                     desc:"If your battery's internal cells are sulfated or permanently degraded from Dubai's heat, no amount of boosting will restore its capacity. It starts - then dies again within hours. Our fix: Free battery load test before the boost. If degraded beyond recovery, we replace on-site immediately with an 18-month warranty battery."
                 },
                   {
                     icon:<FaHome />,
                     title:" Alternator Isn't Charging",
                     desc:"If your alternator is faulty, it won't recharge your battery while driving - meaning your car starts after a boost then dies again when you switch off. Our fix: We test alternator output voltage on-site at every callout. If it's not charging properly, we diagnose the fault and advise before you drive away."
                 },
                   {
                     icon:<FaHome />,
                     title:"Parasitic Drain Killing the Battery",
                     desc:"A hidden electrical fault drawing power continuously can drain a healthy battery overnight - even after a successful jump start. Our fix: We perform a parasitic drain test using diagnostic equipment to identify whether an electrical fault is draining your battery so the underlying problem is fixed, not just boosted around."
                 },
                   {
                     icon:<FaHome />,
                     title:"Corroded or Loose Battery Terminals",
                     desc:"Corroded terminals prevent proper electrical contact - the jump start appears to work but voltage doesn't transfer correctly to the starter motor. In Dubai's humid summers, terminal corrosion accelerates significantly. Our fix: We clean and treat battery terminals at every callout as standard - at no extra charge."
                 },
                   
        ]


      const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
      const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
      const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
       const faqs = locale === "ar" ? arabicFaqs : englishFaqs


        const batteryText =
  locale === "ar"
    ? {
        title1: "بطاريات",
        title2: "موثوقة",
        title3: "العلامات التجارية",
      }
    : {
        title1: "Reliable",
        title2: "Battery",
        title3: "Brand",
      };

              
                    const batteryBrands = [
                      { image: varta, name: "Varta" },
                      { image: acdelco, name: "AC Delco" },
                      { image: bosh, name: "Bosch" },
                      { image: amron, name: "Amaron" },
                      { image: solite, name: "Solite" },
                      { image: volcan, name: "Volcan" },
                  ];

                     const text = locale === "ar"
  ? {
      desc: "ماركات السيارات التي نخدمها",
      title1: "يشمل جميع", 
      title2: "ماركات السيارات الرئيسية",
      viewAll: "عرض الكل",
    }
  : {
      desc: "Car Brands We Serve",
      title1: "Car jump start Services ",
      title2: " for All Car Brands in Dubai & Abu Dhabi",
      viewAll: "View All",
    };

                  // English content
  const englishContents = {
    sectionTitle: "What Our Customers Say",
    headingPrefix: "About Our Dubai & Abu Dhabi ",
    headingHighlight: "Battery Service",
  };

  // Arabic content (translated reviews)
  const arabicContents = {
    sectionTitle: "ماذا يقول عملاؤنا",
    headingPrefix: "موثوق من قبل",
    headingHighlight: "السائقين في كل مكان",
  };


  return (
    <div>
      <div className='sticky top-0 '>
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className='bg-white rounded-t-4xl relative z-10'>
          <HowItWorks title={{
            part1:"How Our Car Jump  ",
            highlighted:" Start Service Works in",
            part2:" Dubai & Abu Dhabi"
          }} />
                 <Faild desc='Quick & Fast 24/7' title='Why Your Jump Start Might Not Work - And What We Do Differently in Dubai' content={failContent} />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands  text={text}/>
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs title={{
                part1:"Why Dubai & Abu Dhabi Drivers Choose ",
                highlighted:"800BatteryPro for Jump Start & Battery Boost"
            }} data={data} />
              <Serve span1='Most Common Reasons Your ' span2='Car Battery Dies in Dubai & Abu Dhabi' carIssuesFaqs={carIssuesFaqs}  />
       
           <Trusted englishContent={englishContents} arabicContent={arabicContents} />
           <Faq faqs={faqs} />
           <Footer />
        </div>
    </div>
  )
}

export default BatteryBoosting