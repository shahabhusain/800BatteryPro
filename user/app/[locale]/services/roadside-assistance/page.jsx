import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import { useLocale } from 'next-intl'
import serviceImg from "@/public/services/service.jpg"
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
import herobg from '@/public/brands/serviceBanners/rsa.webp'
import CarBrands from '@/app/components/Hero/CarBrands'
import Car from '@/app/components/Services/Car'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const RoadSide = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "24/7 Roadside Assistance in Dubai:",
        span2: " Under 30 Minutes "
    },
    desc1: "Stranded? We dispatch expert technicians immediately. Get premium towing, battery boosting, and emergency rescue for all vehicles, including exotic cars.",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "المساعدة على الطريق 24/7 في دبي:",
        span2: "خلال 30 دقيقة"
    },
    desc1: "عالق؟ نرسل فنيين خبراء فوراً. احصل على خدمات السحب المتميزة، تشغيل البطارية، والإنقاذ الطارئ لجميع المركبات، بما في ذلك السيارات الفاخرة.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Service Section
const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "Premium Roadside Assistance Anywhere in Dubai",
    services: [
        {
            id: 1,
            description: "A sudden breakdown halts your day. You need a fast, safe, and reliable team to get you moving again. 800BatteryPro delivers rapid, 24/7 roadside assistance directly to your exact location. We treat every job with absolute precision, ensuring you and your vehicle stay safe. Our Premium Roadside Services includes car towing, battery boosting, and others. We operate a versatile 24/7 fleet for accidents or breakdowns. We provide Sedan/4×4 towing, fully-covered transport, and specialized sports/stance car towing. We deliver fast, safe jump-starts. If your battery cannot hold a charge, we provide an instant replacement to get you back on the road without delay. Stuck in the sand? Our specialized rescue team will extract your vehicle from difficult terrain and tow you to safety. We arrive quickly to swap your flat with your spare tire, ensuring minimal disruption to your journey. Empty tank? We deliver exactly 10 liters of special 95 fuel right to your location. Our fleet includes specialized low-clearance trucks to safely extract your car from tight, low-ceiling parking garages."
        },
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "خدمات مساعدة متميزة على الطريق في أي مكان في دبي",
    services: [
        {
            id: 1,
            description: "العطل المفاجئ يعطل يومك. أنت بحاجة إلى فريق سريع وآمن وموثوق لإعادة تشغيل سيارتك مرة أخرى. يقدم 800BatteryPro مساعدة سريعة على الطريق 24/7 مباشرة إلى موقعك بالضبط. نتعامل مع كل مهمة بدقة مطلقة، مما يضمن سلامتك وسلامة سيارتك. تشمل خدمات المساعدة على الطريق المتميزة لدينا سحب السيارات، تشغيل البطارية، وغيرها. نحن ندير أسطولاً متنوعاً على مدار 24/7 للحوادث أو الأعطال. نقدم سحب السيارات الصالون والدفع الرباعي، النقل المغطى بالكامل، وسحب السيارات الرياضية المعدلة. نقدم تشغيل بطارية سريع وآمن. إذا كانت بطاريتك لا تحتفظ بالشحن، فإننا نوفر استبدالاً فورياً لإعادتك إلى الطريق دون تأخير. عالق في الرمال؟ فريق الإنقاذ المتخصص لدينا سيخرج سيارتك من التضاريس الصعبة ويقوم بسحبها إلى بر الأمان. نصل بسرعة لاستبدال إطارك المفرغ بالإطار الاحتياطي، مما يضمن أقل قدر من التعطيل لرحلتك. خزان الوقود فارغ؟ نوفر بالضبط 10 لترات من وقود 95 الخاص إلى موقعك. يشمل أسطولنا شاحنات متخصصة منخفضة الخلوص لاستخراج سيارتك بأمان من مواقف السيارات الضيقة منخفضة السقف."
        },
    ]
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: "Arrival in Under 30 Minutes",
        desc: "Your time matters. We strategically position our well-equipped service vehicles across Dubai and Abu Dhabi. This guarantees a response time of under 30 minutes so you can get on with your day."
    },
    {
        icons: <FaSitemap />,
        title: "Free Battery Testing and Delivery",
        desc: "We never guess what is wrong with your car. Our experts use advanced tools to perform a free battery test on the spot. If the battery is completely dead, we offer free delivery right to your location."
    },
    {
        icons: <FaSitemap />,
        title: "Premium Branded Batteries and Genuine Parts",
        desc: "We strictly use OEM-approved spare parts and premium batteries recommended by your vehicle manufacturer. These top-tier brands withstand the intense UAE climate and provide reliable power."
    },
    {
        icons: <FaSitemap />,
        title: "Advanced Installation Technology",
        desc: "Swapping a modern car battery requires skill. We use advanced diagnostic tools to ensure your new battery syncs perfectly with your internal computers. This prevents data loss and keeps your radio, seat memory, and engine management systems functioning flawlessly."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "الوصول خلال 30 دقيقة",
        desc: "وقتك مهم. نضع سيارات الخدمة المجهزة بالكامل بشكل استراتيجي في جميع أنحاء دبي وأبو ظبي. هذا يضمن وقت استجابة أقل من 30 دقيقة حتى تتمكن من مواصلة يومك."
    },
    {
        icons: <FaSitemap />,
        title: "فحص وتوصيل البطارية مجاناً",
        desc: "نحن لا نخمن أبداً ما هو الخطأ في سيارتك. يستخدم خبراؤنا أدوات متقدمة لإجراء فحص مجاني للبطارية في المكان. إذا كانت البطارية فارغة تماماً، فإننا نقدم توصيل مجاني إلى موقعك."
    },
    {
        icons: <FaSitemap />,
        title: "بطاريات ذات علامات تجارية متميزة وقطع أصلية",
        desc: "نستخدم بدقة قطع الغيار المعتمدة من المصنع والبطاريات المتميزة الموصى بها من قبل الشركة المصنعة لسيارتك. هذه العلامات التجارية الراقية تتحمل مناخ الإمارات القاسي وتوفر طاقة موثوقة."
    },
    {
        icons: <FaSitemap />,
        title: "تقنية تركيب متقدمة",
        desc: "استبدال بطارية سيارة حديثة يتطلب مهارة. نستخدم أدوات تشخيص متقدمة لضمان تزامن بطاريتك الجديدة بشكل مثالي مع أجهزة الكمبيوتر الداخلية. هذا يمنع فقدان البيانات ويحافظ على عمل الراديو وذاكرة المقاعد وأنظمة إدارة المحرك بشكل لا تشوبه شائبة."
    }
]

// FAQs Section
const englishFaqs = [
    {
        question: "How fast can you reach me in Dubai or Abu Dhabi?",
        answer: "Our strategically placed fleet guarantees arrival at your exact location in under 30 minutes, any time of day or night."
    },
    {
        question: "Is roadside assistance available in both Dubai and Abu Dhabi?",
        answer: "Yes! We serve customers 24/7 in both Dubai and Abu Dhabi, offering premium support for all types of vehicles—including luxury and exotic cars."
    },
    {
        question: "Can you help if my car is stuck in the sand?",
        answer: "Absolutely. Both cities see plenty of off-road adventures, and our off-road rescue team specializes in sand extractions, ensuring you're never stranded in the dunes."
    },
    {
        question: "What makes 800BatteryPro different?",
        answer: "With free battery testing, branded battery replacements, and advanced diagnostic technology, our certified experts offer peace of mind throughout Dubai and Abu Dhabi."
    },
]

const arabicFaqs = [
    {
        question: "كم من الوقت يستغرق وصولكم إلي في دبي أو أبو ظبي؟",
        answer: "أسطولنا المنتشر بشكل استراتيجي يضمن الوصول إلى موقعك بالضبط في أقل من 30 دقيقة، في أي وقت من النهار أو الليل."
    },
    {
        question: "هل المساعدة على الطريق متوفرة في كل من دبي وأبو ظبي؟",
        answer: "نعم! نخدم العملاء على مدار 24/7 في كل من دبي وأبو ظبي، ونقدم دعماً متميزاً لجميع أنواع المركبات - بما في ذلك السيارات الفاخرة والرياضية."
    },
    {
        question: "هل يمكنكم المساعدة إذا كانت سيارتي عالقة في الرمال؟",
        answer: "بالتأكيد. تشهد كلتا المدينتين الكثير من المغامرات على الطرق الوعرة، وفريق الإنقاذ المتخصص لدينا يتخصص في استخراج السيارات من الرمال، مما يضمن عدم بقائك عالقاً في الكثبان الرملية."
    },
    {
        question: "ما الذي يميز 800BatteryPro عن غيره؟",
        answer: "مع فحص البطارية المجاني، واستبدال البطاريات ذات العلامات التجارية، وتقنية التشخيص المتقدمة، يقدم خبراؤنا المعتمدون راحة البال في جميع أنحاء دبي وأبو ظبي."
    }
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


  return (
    <div>
      <div className='sticky top-0 '>
        <Hero hero={hero} herobg={herobg} />
      </div>
      
        <div className='bg-white rounded-t-4xl relative z-10'>
          <Car />
           <HowItWorks />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs data={data} />
           <Trusted />
           <Faq faqs={faqs} />
           <Footer />
        </div>
    </div>
  )
}

export default RoadSide