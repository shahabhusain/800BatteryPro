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
import herobg from '@/public/brands/serviceBanners/scan.webp'
import CarBrands from '@/app/components/Hero/CarBrands'


const CarScanning = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "Advanced Car Scanning &",
        span2: " Diagnostics"
    },
    desc1: "800BatteryPro - Expert in resolving complex vehicle issues instantly with absolute precision and expert care",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "فحص السيارات المتقدم",
        span2: "والتشخيص"
    },
    desc1: "800BatteryPro - خبراء في حل مشاكل المركبات المعقدة فوراً بدقة مطلقة ورعاية متخصصة",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Service Section
const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "Trusted Service Center for all Car Scanning & Diagnostics in Dubai",
    services: [
        {
            id: 1,
            description: "Modern cars rely on highly advanced computer systems. When a warning light flashes or performance drops, you need exact answers. 800BatteryPro uses the latest diagnostic technology to read your vehicle's internal data safely and accurately. We find the exact root cause of the problem so you never pay for unnecessary repairs. Our certified technicians specialize in complex electrical fixes and computer system restorations. We provide a complete range of precision diagnostic and repair services to keep your vehicle running flawlessly: Computer & Module Repairs: ECU Repair, Car BCM Repair Services, TCM Repair Service, and Car PCB Repair Service. Safety & Calibration: Car 360 Calibration, Car ABS Repair, and ADAS Sensor Repair and Recalibration. Specialized Care: Automotive Tuning, Flood Car Repair, and Car Key Programming. Stop guessing what is wrong with your vehicle. Trust our experts to protect your engine and restore your advanced systems quickly."
        },
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "مركز خدمة موثوق لفحص وتشخيص السيارات في دبي",
    services: [
        {
            id: 1,
            description: "تعتمد السيارات الحديثة على أنظمة كمبيوتر متطورة للغاية. عندما يضيء ضوء التحذير أو ينخفض الأداء، فأنت بحاجة إلى إجابات دقيقة. يستخدم 800BatteryPro أحدث تقنيات التشخيص لقراءة البيانات الداخلية لسيارتك بأمان ودقة. نجد السبب الجذري الدقيق للمشكلة حتى لا تدفع أبداً مقابل إصلاحات غير ضرورية. يتخصص فنيونا المعتمدون في الإصلاحات الكهربائية المعقدة واستعادة أنظمة الكمبيوتر. نقدم مجموعة كاملة من خدمات التشخيص والإصلاح الدقيقة للحفاظ على تشغيل سيارتك بشكل لا تشوبه شائبة: إصلاحات الكمبيوتر والوحدات: إصلاح ECU، خدمات إصلاح BCM للسيارات، خدمة إصلاح TCM، وخدمة إصلاح PCB للسيارات. السلامة والمعايرة: معايرة 360 للسيارة، إصلاح ABS للسيارة، وإصلاح وإعادة معايرة مستشعر ADAS. الرعاية المتخصصة: ضبط السيارة، إصلاح سيارات الفيضانات، وبرمجة مفاتيح السيارة. توقف عن التخمين بشأن ما هو الخطأ في سيارتك. ثق بخبرائنا لحماية محركك واستعادة أنظمتك المتقدمة بسرعة."
        },
    ]
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: "Advanced Diagnostic Technology",
        desc: "We use dealership-level scanning tools to read your car's internal data with absolute precision. Our advanced technology connects securely to your vehicle, preventing dangerous electrical spikes or data loss. We map out every fault code instantly, ensuring we fix the actual problem the first time."
    },
    {
        icons: <FaSitemap />,
        title: "Precision Computer and Module Repairs",
        desc: "Swapping parts blindly drains your wallet. Instead, we offer deep-level system restorations. Our team handles complex ECU repair, Car ABS repair, and Car BCM repair services. We also specialize in TCM repair service and Car PCB repair to keep your transmission and main control boards functioning flawlessly."
    },
    {
        icons: <FaSitemap />,
        title: "Certified Diagnostic Technicians",
        desc: "Modern car repairs require advanced technical skill. Our certified experts train heavily on the latest automotive software and electrical systems. Whether you drive a standard daily commuter or a complex exotic vehicle, we apply the exact manufacturer protocols to protect your engine and wiring."
    },
    {
        icons: <FaSitemap />,
        title: "Complete Specialized Calibration",
        desc: "A physical repair is only half the job. We recalibrate your vehicle so it drives perfectly. You get complete Car 360 calibration and ADAS sensor repair and recalibration to keep your safety systems sharp. We even tackle severe flood car repair, car key programming, and custom automotive tuning to maximise your daily driving experience."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "تقنية تشخيص متقدمة",
        desc: "نستخدم أدوات فحص على مستوى الوكالات لقراءة البيانات الداخلية لسيارتك بدقة مطلقة. تتصل تقنيتنا المتقدمة بسيارتك بشكل آمن، مما يمنع الارتفاعات الكهربائية الخطيرة أو فقدان البيانات. نحدد كل رمز خطأ فوراً، مما يضمن إصلاح المشكلة الفعلية في المرة الأولى."
    },
    {
        icons: <FaSitemap />,
        title: "إصلاحات دقيقة للكمبيوتر والوحدات",
        desc: "استبدال الأجزاء بشكل عشوائي يستنزف مالك. بدلاً من ذلك، نقدم استعادة عميقة للنظام. يتعامل فريقنا مع إصلاح ECU المعقد، إصلاح ABS للسيارة، وخدمات إصلاح BCM للسيارة. كما نتخصص في خدمة إصلاح TCM وإصلاح PCB للسيارة للحفاظ على عمل ناقل الحركة ولوحات التحكم الرئيسية بشكل لا تشوبه شائبة."
    },
    {
        icons: <FaSitemap />,
        title: "فنيو تشخيص معتمدون",
        desc: "تتطلب إصلاحات السيارات الحديثة مهارات تقنية متقدمة. يتدرب خبراؤنا المعتمدون بشكل مكثف على أحدث برامج السيارات والأنظمة الكهربائية. سواء كنت تقود سيارة يومية عادية أو مركبة فاخرة معقدة، فإننا نطبق بروتوكولات الشركة المصنعة الدقيقة لحماية محركك وأسلاكك."
    },
    {
        icons: <FaSitemap />,
        title: "معايرة متخصصة كاملة",
        desc: "الإصلاح الفيزيائي هو نصف المهمة فقط. نقوم بإعادة معايرة سيارتك لتقود بشكل مثالي. تحصل على معايرة كاملة 360 للسيارة وإصلاح وإعادة معايرة مستشعر ADAS للحفاظ على أنظمة الأمان لديك حادة. نحن نتعامل حتى مع إصلاح سيارات الفيضانات الشديدة، وبرمجة مفاتيح السيارة، وضبط السيارات المخصص لتعظيم تجربة القيادة اليومية."
    }
]

// FAQs Section
const englishFaqs = [
    {
        question: "How accurate are your car scanning and diagnostic services?",
        answer: "We use dealership-level diagnostic tools to read your vehicle's computer systems with absolute precision. This advanced technology allows our certified technicians to pinpoint the exact root cause of any warning light or performance issue. By finding the precise fault, we prevent unnecessary parts replacement and save you money."
    },
    {
        question: "What types of computer and module repairs do you handle?",
        answer: "Our experts manage a wide range of complex electronic fixes to keep your car running smoothly. We provide specialised ECU repair, Car ABS repair, and Car BCM repair services. We also perform TCM repair service and Car PCB repair to ensure your transmission and main control boards work flawlessly."
    },
    {
        question: "Can you fix and recalibrate advanced safety sensors?",
        answer: "Yes, we fully restore and align your vehicle's modern safety features. Our team performs complete Car 360 calibration and ADAS sensor repair and recalibration. This expert alignment ensures your cameras, radar, and lane-assist systems function perfectly to keep you safe on the road."
    },
    {
        question: "Do you offer specialised services for flooded cars or key programming?",
        answer: "We certainly do. Our technicians specialise in severe flood car repair, working carefully to salvage and restore water-damaged electrical systems. We also offer fast car key programming and custom automotive tuning to optimise your daily driving experience."
    },
    {
        question: "Why is advanced diagnostic technology so important for my car?",
        answer: "Modern vehicles rely on highly sensitive computer networks to operate. Using outdated scanners can cause data loss or dangerous electrical spikes. Our advanced diagnostic technology connects securely to your car, allowing us to read error codes safely while protecting your engine management and internal memory systems."
    },
]

const arabicFaqs = [
    {
        question: "ما مدى دقة خدمات فحص وتشخيص السيارات لديكم؟",
        answer: "نستخدم أدوات تشخيص على مستوى الوكالات لقراءة أنظمة كمبيوتر سيارتك بدقة مطلقة. تسمح هذه التقنية المتقدمة لفنيينا المعتمدين بتحديد السبب الجذري الدقيق لأي ضوء تحذيري أو مشكلة في الأداء. من خلال العثور على الخلل الدقيق، نمنع استبدال الأجزاء غير الضروري ونوفر لك المال."
    },
    {
        question: "ما أنواع إصلاحات الكمبيوتر والوحدات التي تتعاملون معها؟",
        answer: "يدير خبراؤنا مجموعة واسعة من الإصلاحات الإلكترونية المعقدة للحفاظ على سيارتك تعمل بسلاسة. نقدم خدمات إصلاح ECU متخصصة، إصلاح ABS للسيارة، وخدمات إصلاح BCM للسيارة. نقوم أيضاً بخدمة إصلاح TCM وإصلاح PCB للسيارة لضمان عمل ناقل الحركة ولوحات التحكم الرئيسية بشكل لا تشوبه شائبة."
    },
    {
        question: "هل يمكنكم إصلاح وإعادة معايرة مستشعرات الأمان المتقدمة؟",
        answer: "نعم، نقوم باستعادة ومحاذاة ميزات الأمان الحديثة في سيارتك بالكامل. يقوم فريقنا بإجراء معايرة كاملة 360 للسيارة وإصلاح وإعادة معايرة مستشعر ADAS. تضمن هذه المحاذاة الخبيرة عمل الكاميرات والرادار وأنظمة المساعدة في الحفاظ على المسار بشكل مثالي للحفاظ على سلامتك على الطريق."
    },
    {
        question: "هل تقدمون خدمات متخصصة للسيارات المتضررة من الفيضانات أو برمجة المفاتيح؟",
        answer: "نحن بالتأكيد نفعل ذلك. يتخصص فنيونا في إصلاح سيارات الفيضانات الشديدة، ويعملون بعناية لإنقاذ واستعادة الأنظمة الكهربائية المتضررة من المياه. نقدم أيضاً برمجة سريعة لمفاتيح السيارة وضبط سيارات مخصص لتحسين تجربة القيادة اليومية."
    },
    {
        question: "لماذا تعتبر تقنية التشخيص المتقدمة مهمة جداً لسيارتي؟",
        answer: "تعتمد المركبات الحديثة على شبكات كمبيوتر حساسة للغاية للعمل. استخدام الماسحات الضوئية القديمة يمكن أن يسبب فقدان البيانات أو ارتفاعات كهربائية خطيرة. تتصل تقنية التشخيص المتقدمة لدينا بسيارتك بشكل آمن، مما يسمح لنا بقراءة رموز الخطأ بأمان مع حماية نظام إدارة المحرك وأنظمة الذاكرة الداخلية."
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

export default CarScanning