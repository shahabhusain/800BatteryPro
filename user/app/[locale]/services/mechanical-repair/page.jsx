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
import herobg from '@/public/brands/serviceBanners/mecha.webp'
import CarBrands from '@/app/components/Hero/CarBrands'


const MechanicalRepair = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "Premium Mechanical Repair",
        span2: "Services in Dubai"
    },
    desc1: "With 800BatteryPro Get back on the road safely with precision repairs, advanced tools, and certified technicians.",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "إصلاحات ميكانيكية متميزة",
        span2: "في دبي"
    },
    desc1: "مع 800BatteryPro عد إلى الطريق بأمان من خلال إصلاحات دقيقة وأدوات متقدمة وفنيين معتمدين.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Service Section
const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "800BatteryPro A Trusted Car Repair Service Center",
    services: [
        {
            id: 1,
            description: "We have team of certified technicians who are experienced in working different european and American car brands. From minor repair to advance mechanical repairs any where in Dubai you can book an appointment by just giving us call at +971528475675. A sudden car breakdown disrupts your entire schedule. You need a trusted team to handle complex mechanical failures without delay. 800BatteryPro provides complete mechanical repair services to restore your vehicle to peak performance. We eliminate the guesswork and fix the actual problem the first time. Car Engine Repair: From minor oil leaks to major overhauls, we keep your engine performing at its best. Car Oil Change: Fast, thorough oil changes to protect your engine and boost longevity. Transmission and Gearbox Repair: Expert fixes for slipping gears, fluid leaks, and complete gearbox rebuilds. Car AC Repair: Restore cooling efficiency with precise AC diagnostics and repairs. Minor Car Service: Comprehensive routine checks and maintenance for trouble-free driving. Car Brake Repair: Pad replacement, rotor machining, and hydraulic repairs for reliable braking. Car Suspension Repair: Replace shocks, struts, and control arms to smooth out every ride. Major Car Service: In-depth inspections and repairs to maximize your vehicle's lifespan. Steering Repair: Expert solutions for steering issues, ensuring control and safety at every turn."
        },
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "800BatteryPro مركز خدمة سيارات موثوق",
    services: [
        {
            id: 1,
            description: "لدينا فريق من الفنيين المعتمدين ذوي الخبرة في العمل مع مختلف ماركات السيارات الأوروبية والأمريكية. من الإصلاحات البسيطة إلى الإصلاحات الميكانيكية المتقدمة في أي مكان في دبي، يمكنك حجز موعد بمجرد الاتصال بنا على +971528475675. عطل السيارة المفاجئ يعطل جدولك بالكامل. أنت بحاجة إلى فريق موثوق للتعامل مع الأعطال الميكانيكية المعقدة دون تأخير. يقدم 800BatteryPro خدمات إصلاح ميكانيكية كاملة لاستعادة سيارتك إلى أداء ذروتها. نقضي على التخمين ونصلح المشكلة الفعلية من المرة الأولى. إصلاح محرك السيارة: من تسرب الزيت البسيط إلى الإصلاحات الشاملة، نحافظ على أداء محركك بأفضل حال. تغيير زيت السيارة: تغيير زيت سريع وشامل لحماية محركك وزيادة عمره الافتراضي. إصلاح ناقل الحركة وعلبة التروس: إصلاحات متخصصة للتروس المنزلقة، تسرب السوائل، وإعادة بناء علبة التروس بالكامل. إصلاح مكيف السيارة: استعادة كفاءة التبريد من خلال تشخيص وإصلاح دقيق لمكيف الهواء. خدمة سيارة بسيطة: فحوصات روتينية شاملة وصيانة للقيادة الخالية من المتاعب. إصلاح فرامل السيارة: استبدال الوسادات، وتشغيل الدوارات، وإصلاحات النظام الهيدروليكي لفرامل موثوقة. إصلاح تعليق السيارة: استبدال الممتصات، والدعامات، وأذرع التحكم لتحسين كل رحلة. خدمة سيارة كبرى: فحوصات وإصلاحات متعمقة لتعظيم عمر سيارتك الافتراضي. إصلاح نظام التوجيه: حلول متخصصة لمشاكل التوجيه، مما يضمن السيطرة والسلامة في كل منعطف."
        },
    ]
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: "Advanced Diagnostic Technology",
        desc: "We use dealership-level scanning tools to read your car's internal data with absolute precision. Our advanced technology connects securely to your vehicle, preventing dangerous electrical spikes or data loss."
    },
    {
        icons: <FaSitemap />,
        title: "Precision Computer and Module Repairs",
        desc: "Our team handles complex ECU repair, Car ABS repair, and Car BCM repair services. We also specialize in TCM repair service and Car PCB repair to keep your transmission and main control boards functioning flawlessly."
    },
    {
        icons: <FaSitemap />,
        title: "Certified Diagnostic Technicians",
        desc: "Modern car repairs require advanced technical skill. Our certified experts train heavily on the latest automotive software and electrical systems."
    },
    {
        icons: <FaSitemap />,
        title: "Complete Specialized Calibration",
        desc: "You get complete Car 360 calibration and ADAS sensor repair and recalibration to keep your safety systems sharp. We even tackle severe flood car repair, car key programming, and custom automotive tuning to maximise your daily driving experience."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "تقنية تشخيص متقدمة",
        desc: "نستخدم أدوات فحص على مستوى الوكالات لقراءة البيانات الداخلية لسيارتك بدقة مطلقة. تتصل تقنيتنا المتقدمة بسيارتك بشكل آمن، مما يمنع الارتفاعات الكهربائية الخطيرة أو فقدان البيانات."
    },
    {
        icons: <FaSitemap />,
        title: "إصلاحات دقيقة للكمبيوتر والوحدات",
        desc: "يتعامل فريقنا مع إصلاح ECU المعقد، إصلاح ABS للسيارة، وخدمات إصلاح BCM للسيارة. كما نتخصص في خدمة إصلاح TCM وإصلاح PCB للسيارة للحفاظ على عمل ناقل الحركة ولوحات التحكم الرئيسية بشكل لا تشوبه شائبة."
    },
    {
        icons: <FaSitemap />,
        title: "فنيو تشخيص معتمدون",
        desc: "تتطلب إصلاحات السيارات الحديثة مهارات تقنية متقدمة. يتدرب خبراؤنا المعتمدون بشكل مكثف على أحدث برامج السيارات والأنظمة الكهربائية."
    },
    {
        icons: <FaSitemap />,
        title: "معايرة متخصصة كاملة",
        desc: "تحصل على معايرة كاملة 360 للسيارة وإصلاح وإعادة معايرة مستشعر ADAS للحفاظ على أنظمة الأمان لديك حادة. نحن نتعامل حتى مع إصلاح سيارات الفيضانات الشديدة، وبرمجة مفاتيح السيارة، وضبط السيارات المخصص لتعظيم تجربة القيادة اليومية."
    }
]

// FAQs Section
const englishFaqs = [
    {
        question: "Do you offer mechanical services in Dubai?",
        answer: "800BatteryPro offers premium mechanical services in Dubai to all major American and European car brands. We have a team of 50+ certified mechanics who are experienced in working on all minor and major car jobs. No matter if it's an engine repair, transmission repair, or any other hardware job in your car we take care of it with 100 percent customer satisfaction."
    },
    {
        question: "Do we use OEM-Approved Spare parts?",
        answer: "Our team of experts only uses OEM-approved spare parts for every car job. Along with that our car specialists are trained to use the best practices for completing every mechanical car job with standard safety procedures."
    },
    {
        question: "Do we fix the Bentley Transmission system?",
        answer: "Yes, 800BatteryPro has a team of Bentley experts in Dubai who are trained to fix any model of Bentley transmission system. We use the latest technology to fix your car with market competitive service pricing."
    },
    {
        question: "Which one is the best service center for mechanical repair in Dubai?",
        answer: "800BatteryPro has a well-equipped car service center for mechanical repair in Dubai. We have a team of certified technicians who use the latest technology for fixing your car and making sure you drive safe on the road. Call us now!"
    },
]

const arabicFaqs = [
    {
        question: "هل تقدمون خدمات ميكانيكية في دبي؟",
        answer: "يقدم 800BatteryPro خدمات ميكانيكية متميزة في دبي لجميع ماركات السيارات الأمريكية والأوروبية الكبرى. لدينا فريق من أكثر من 50 ميكانيكياً معتمداً من ذوي الخبرة في العمل على جميع مهام السيارات الصغيرة والكبيرة. سواء كان إصلاح محرك، أو إصلاح ناقل حركة، أو أي مهمة أخرى في سيارتك، فإننا نعتني بها بنسبة رضا عملاء 100٪."
    },
    {
        question: "هل نستخدم قطع غيار معتمدة من المصنع؟",
        answer: "يستخدم فريق خبرائنا فقط قطع الغيار المعتمدة من المصنع لكل مهمة سيارة. بالإضافة إلى ذلك، تم تدريب متخصصي السيارات لدينا على استخدام أفضل الممارسات لإكمال كل مهمة سيارة ميكانيكية وفقاً لإجراءات السلامة القياسية."
    },
    {
        question: "هل تقومون بإصلاح نظام ناقل الحركة في بنتلي؟",
        answer: "نعم، لدى 800BatteryPro فريق من خبراء بنتلي في دبي مدربين على إصلاح أي موديل من نظام ناقل الحركة في بنتلي. نستخدم أحدث التقنيات لإصلاح سيارتك بأسعار خدمة تنافسية في السوق."
    },
    {
        question: "ما هو أفضل مركز خدمة لإصلاح السيارات الميكانيكي في دبي؟",
        answer: "يضم 800BatteryPro مركز خدمة سيارات مجهز تجهيزاً جيداً للإصلاح الميكانيكي في دبي. لدينا فريق من الفنيين المعتمدين الذين يستخدمون أحدث التقنيات لإصلاح سيارتك والتأكد من قيادتك بأمان على الطريق. اتصل بنا الآن!"
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


  return (
    <div>
      <div className='sticky top-0 '>
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className='bg-white rounded-t-4xl relative z-10'>
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

export default MechanicalRepair