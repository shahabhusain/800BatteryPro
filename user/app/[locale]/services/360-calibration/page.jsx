import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaHome, FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import { useLocale } from 'next-intl'
import serviceImg from "@/public/services/service.png"
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
import herobg from '@/public/brands/serviceBanners/Breplacement.webp'
import CarBrands from '@/app/components/Hero/CarBrands'
import HowItWorks from '@/app/components/Hero/HowItWorks'
import Serve from '@/app/components/Services/Serve'
import Faild from '@/app/components/Services/Faild'
import ECU from '@/app/components/Services/ECU'


const Calibration = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "360 Surround View – ADAS Calibration – Parking Sensors – Blind Spot Monitoring – All Car Brands",
    title: {
        span1: "Car 360 Camera Calibration in Dubai & Abu Dhabi -  ",
        span2: "At Your Location Under 25 Minutes"
    },
    desc1: "Static & Dynamic Calibration - OEM-Grade Equipment - All ADAS Systems - Dubai & Abu Dhabi - Warranty on Every Calibration",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "خدمات استبدال بطارية",
        span2: "السيارة في دبي"
    },
    desc1: "اتصل بـ 800BatteryPro على +971528475675 لخدمات استبدال بطارية السيارة خلال 30 دقيقة في دبي وأبو ظبي.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Service Section
const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "Professional Mobile 360 Camera & ADAS Calibration in Dubai & Abu Dhabi - Surround View, Parking Sensors & Driver Assistance Systems at Your Location",
    services: [
        {
            id: 1,
            description: "Modern vehicles in the UAE are equipped with increasingly sophisticated camera and sensor systems - from 360-degree surround view (bird's eye view) systems stitching four cameras into a seamless overhead display, to Advanced Driver Assistance Systems (ADAS) including lane departure warning, adaptive cruise control, blind spot monitoring, forward collision warning, and automatic emergency braking. These systems rely on precise optical and radar calibration to function safely and accurately - and in Dubai and Abu Dhabi's driving environment, calibration is required far more frequently than most drivers realize."
        },
         {
            id: 2,
            description: "Windshield replacement - one of the most common repairs performed in the UAE due to stone chips from desert road surfaces - immediately invalidates your front camera calibration. Any bodywork repair affecting bumpers, grilles, or wing mirrors displaces the radar sensors and cameras mounted within them. UAE vehicle inspection standards now include mandatory ADAS calibration checks  - meaning an uncalibrated system is not only dangerous but can affect your vehicle's roadworthiness in Dubai and Abu Dhabi. And Dubai and Abu Dhabi's extreme summer heat - with dashboard temperatures regularly exceeding 80°C - can cause thermal expansion that shifts camera mounting brackets over time, causing gradual calibration drift even without any physical repair work."
        },

          {
            id: 3,
            description: "800BatteryPro brings professional 360 camera and ADAS calibration directly to your location anywhere in Dubai and Abu Dhabi - under 25 minutes, 24/7. Using OEM-grade static and dynamic calibration equipment compatible with all car brands, our trained calibration technicians restore your 360 surround view, parking cameras, lane departure system, blind spot monitors, and all ADAS sensors to factory specification - at your location, without a garage visit, with a warranty on every calibration performed."
        },
                
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "توصيل مجاني لبطارية السيارة مع استبدال خلال 30 دقيقة في دبي",
    services: [
        {
            id: 1,
            description: "لا تدع بطارية فارغة تعطل يومك. يوفر 800BatteryPro مساعدة على الطريق سريعة الاستجابة على مدار 24/7 في جميع أنحاء دبي وأبو ظبي، ليقدم لك رعاية متخصصة مباشرة في موقعك. يصل فنيونا المعتمدون بسرعة لتقديم فحص مجاني للسيارة في الموقع، وتوصيل مجاني، وتركيب آمن باستخدام بطاريات أصلية معتمدة من المصنع. عد إلى الطريق بأمان مع الخبراء الأكثر ثقة في الإمارات، مع ضمان رضا العملاء بنسبة 100٪. مع أكثر من 5 سنوات من الخبرة، نقوم بتشخيص وحل مشاكل البطارية بسرعة وبدقة. آلاف العملاء الراضين يثقون في التزامنا بالصدق والشفافية. اعتمد على 800BatteryPro للحصول على خدمة سريعة وموثوقة - في كل مرة تحتاجها."
        },
    ]
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: " 24/7 Mobile Service for All Car Brands",
        desc: "OEM-grade 360 calibration at your location in Dubai & Abu Dhabi under 25 minutes. BMW, Mercedes, Toyota, Nissan, Land Rover, Audi, Lexus, Chevrolet and every UAE brand covered. No extra charge for nights, weekends or UAE public holidays"
    },
    {
        icons: <FaSitemap />,
        title: " Static & Dynamic Calibration All 360 Systems Covered",
        desc: "Both methods available for all ADAS system requirements. Surround view, front camera, rear camera, blind spot radar, ACC radar, parking sensors - all in one visit. Full warranty on all 360 camera and ADAS calibration work."
    },
    {
        icons: <FaSitemap />,
        title: "Battery + OEM-Grade Calibration Combination ",
        desc: "The only mobile service combining ECU, battery, and 360 calibrations in a single Dubai & Abu Dhabi visit. Manufacturer-specific targets and software - never generic aftermarket tools"
    },
    {
        icons: <FaSitemap />,
        title: " UAE RTA & ADNOC Compliant",
        desc: "Calibration performed to UAE vehicle inspection standards. 10,000+ UAE Customers Served as Dubai & Abu Dhabi's most trusted mobile auto service provider"
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "طوارئ خلال 30 دقيقة",
        desc: "عد إلى الطريق بسرعة عندما تعطل بطارية فارغة جدولك. يرسل 800BatteryPro وحدة استجابة سريعة فوراً إلى موقعك في الإمارات، وتصل خلال 30 دقيقة مجهزة بالكامل لفحص واستبدال بطاريتك في المكان."
    },
    {
        icons: <FaSitemap />,
        title: "استبدال بطارية عند الطلب 24/7",
        desc: "تخطى شاحنة السحب ودعنا نأتي بورشة السيارات إليك مباشرة. يقدم فنيونا المخلصون خدمات استبدال بطارية السيارة المتميزة إلى منزلك أو مكتبك أو موقعك على الطريق في جميع أنحاء دبي وأبو ظبي، وفقاً لجدولك الزمني."
    },
    {
        icons: <FaSitemap />,
        title: "متخصصون معتمدون لماركات السيارات الفاخرة",
        desc: "ثق بسيارتك لدى خبراء معتمدين يفهمون المواصفات الدقيقة للسيارات الأمريكية والأوروبية والآسيوية. نقوم بتركيب بطاريات سيارات أصلية معتمدة من المصنع فقط بأسعار تنافسية للغاية، مما يضمن أقصى قدر من الموثوقية مع حماية ضمان سيارتك."
    },
    {
        icons: <FaSitemap />,
        title: "حلول متقدمة لإصلاح وتشخيص السيارات",
        desc: "احصل على رعاية شاملة لسيارتك تتجاوز مجرد استبدال البطارية. تتعامل مراكز الخدمة الحديثة لدينا في دبي وأبو ظبي مع التشخيص الكهربائي المعقد، وبرمجة السيارات الدقيقة، ووحدة التحكم الإلكترونية، ونظام إدارة البطارية، والإصلاحات الميكانيكية الكاملة تحت سقف واحد."
    }
]

// FAQs Section
const englishFaqs = [
    {
        question: "What is 360 camera calibration and why does my car need it in the UAE?",
        answer: "360 camera calibration is the process of precisely aligning all cameras in your car's surround view system - front, rear, left, and right - so they stitch together into a seamless bird's eye overhead display. When any camera is even slightly misaligned, the image stitching fails, creating visible distortion, misaligned lines, or a skewed overhead view. In the UAE, 360 calibration is required after any windshield replacement, bumper repair, camera replacement, minor collision, or following exposure to extreme heat that causes thermal drift in camera mounting positions. Mandatory ADAS calibration checks are now included in UAE vehicle inspections - making correct calibration a legal requirement for roadworthy vehicles in Dubai and Abu Dhabi."
    },
    {
        question: "How much does 360 camera calibration cost in Dubai and Abu Dhabi?",
        answer: "360 camera calibration at 800BatteryPro is significantly more cost-effective than dealer calibration in Dubai and Abu Dhabi. The exact cost depends on your car's make, model, the specific camera system fitted, and the number of ADAS systems requiring calibration. A transparent quote is provided at your location before any work begins - with zero hidden costs. Since 800BatteryPro is a mobile service with lower operating costs than a fixed workshop - we pass these savings directly to you. Call +971 52 847 5675 or fill in the booking form for a same-day quote and calibration anywhere in Dubai or Abu Dhabi."
    },
    {
        question: "Does 360 camera calibration need to be done after a windshield replacement in the UAE?",
        answer: "Yes - windshield replacement is the single most common trigger for 360 camera and ADAS recalibration in the UAE. The front camera mounted to or behind your windshield is removed during glass replacement and remounted - making recalibration mandatory before the lane departure warning, forward collision warning, and traffic sign recognition systems can function correctly. UAE vehicle inspection standards now verify ADAS calibration status - meaning an uncalibrated windshield camera after glass replacement can cause your vehicle to fail its roadworthiness test in Dubai or Abu Dhabi. 800BatteryPro coordinates windshield calibration services with glass replacement technicians across both emirates."
    },
    {
        question: "What is the difference between static and dynamic 360 camera calibration?",
        answer: "Static calibration is performed with your vehicle stationary - using precisely positioned calibration target boards placed at exact distances around the vehicle, which the calibration software reads to mathematically correct camera alignment. Dynamic calibration is performed while driving - the software analyses real road markings and adjusts calibration parameters automatically. Many modern UAE vehicles - particularly BMW, Mercedes-Benz, Audi, and Land Rover models - require both static and dynamic calibration in sequence for a complete ADAS recalibration. 800BatteryPro's technicians identify your vehicle's specific requirements from the manufacturer database and perform whichever method - or combination of methods - your car needs, at your location in Dubai or Abu Dhabi."
    },
    {
        question: "Does 800BatteryPro perform 360 calibration at my location in Dubai and Abu Dhabi?",
        answer: "Yes - 800BatteryPro performs complete 360 camera and ADAS calibration at your exact location anywhere in Dubai and Abu Dhabi - under 25 minutes, 24 hours a day, 7 days a week. Our fully equipped calibration vans carry OEM-grade static calibration targets, manufacturer-specific diagnostic software, and all tools needed for both static and dynamic calibration. Whether you are at home, at work, at a hotel, in a mall car park, or at a dealership in Dubai or Abu Dhabi - there is no need to book a garage appointment or arrange a tow truck. 800BatteryPro is the only mobile service in Dubai and Abu Dhabi combining 360 camera calibration, ADAS sensor recalibration, battery replacement, and ECU repair in a single on-location visit."
    },
    {
        question: "Which car brands does 800BatteryPro calibrate 360 cameras for in the UAE?",
        answer: "800BatteryPro calibrates 360 surround view and ADAS systems for all major car brands in Dubai and Abu Dhabi including BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Range Rover, Jaguar, Rolls Royce, Bentley, Toyota, Lexus, Nissan, Infiniti, Mitsubishi, Honda, Hyundai, Kia, Chevrolet, GMC, Ford, Jeep, Dodge, and all other car brands available in the UAE. Our technicians use both universal OBD-II diagnostic interfaces and brand-specific manufacturer calibration software to precisely calibrate every system to factory specification."
    },
    {
        question: "What are the signs that my car's 360 camera needs calibration?",
        answer: "The most common signs that your 360 camera system needs calibration in Dubai or Abu Dhabi are: visible distortion or mismatched stitching lines in the bird's eye overhead display; parking guideline overlays that no longer align with your vehicle's actual position; ADAS or camera warning lights on your dashboard; lane departure warning activating without actually crossing lane markings or failing to activate when you do; blind spot monitor not detecting vehicles in your blind zone or triggering constant false alerts; adaptive cruise control maintaining incorrect following distances; and forward collision warning activating too early or too late. If you experience any of these in Dubai or Abu Dhabi, call 800BatteryPro on +971 52 847 5675 for an immediate on-location diagnosis."
    },
    {
        question: "Does UAE heat and sandstorms affect 360 camera calibration?",
        answer: "Yes - Dubai and Abu Dhabi's extreme climate is a unique calibration challenge that most drivers underestimate. Dashboard temperatures regularly exceeding 80°C in parked vehicles cause thermal expansion of camera mounting brackets - gradually shifting camera angles over time without any physical repair work. Frequent sandstorms coat lens assemblies in fine abrasive dust, degrading image quality and affecting the system's ability to detect lane markings accurately. The UAE's intense UV radiation also degrades camera lens coatings faster than in temperate climates. 800BatteryPro recommends an annual 360 camera and ADAS calibration check for all Dubai and Abu Dhabi vehicles - particularly SUVs and luxury vehicles driven on desert and highway routes."
    },
    {
        question: "How long does 360 camera calibration take at 800BatteryPro?",
        answer: "Static 360 surround view calibration at your location in Dubai or Abu Dhabi typically takes 25 to 60 minutes depending on the number of cameras and systems requiring calibration. Dynamic calibration drives add approximately 15 to 25 minutes for vehicles requiring road driving as part of the calibration sequence. A full ADAS recalibration package - covering 360 surround view, front camera, radar sensors, and parking sensors - typically takes 60 to 90 minutes at your location. 800BatteryPro always provides a clear timeline before beginning any calibration work."
    },
    {
        question: "Does 800BatteryPro provide a warranty on 360 camera calibration in Dubai and Abu Dhabi?",
        answer: "Yes - every 360 camera and ADAS calibration performed by 800BatteryPro in Dubai and Abu Dhabi comes with a warranty covering all calibration work performed. If your 360 system or ADAS function returns to an out-of-specification state within the warranty period following our calibration - without any new physical damage or repairs having been performed - we return to your location and recalibrate at no additional charge. 800BatteryPro stands fully behind every calibration service we perform across Dubai and Abu Dhabi."
    },
]

const arabicFaqs = [
    {
        question: "كم تدوم بطارية السيارة في دبي؟",
        answer: "عمر بطارية سيارتك يعتمد على مناخ المنطقة، وعدد الكيلومترات التي تقطعها سيارتك، وطريقة قيادتك. عندما يتعلق الأمر بالقيادة في صيف الإمارات الحار، فقد تدوم بطارية سيارتك بين 2 و 3 سنوات، بينما يلزم فحص سريع للبطارية كل عام أو بعد 10,000 كم."
    },
    {
        question: "هل يمكنكم القدوم إلى موقعي لاستبدال بطارية سيارتي؟",
        answer: "نعم، يوفر 800BatteryPro خدمة استبدال البطارية في الموقع على مدار 24/7 في دبي وأبو ظبي. نقدم خدمات توصيل وفحص مجاني لبطارية السيارة، مع رضا العملاء بنسبة 100٪ لكل مهمة بطارية. يمكنك الاتصال بأحد فنيينا على +971528475675."
    },
    {
        question: "كم تكلفة استبدال بطارية السيارة في دبي؟",
        answer: "يعتمد ذلك على ماركة سيارتك وطرازها؛ ومع ذلك، قد تكلفك بطارية السيارة النموذجية حوالي 250 إلى 600 درهم إماراتي. يوفر 800BatteryPro خدمات توصيل وفحص مجاني لبطارية السيارة. بالإضافة إلى ذلك، نستخدم فقط بطاريات السيارات ذات العلامات التجارية مثل Amaron و ACDelco و Varta و Bosch و Exide. اتصل بنا لإجراء فحص سريع للبطارية الآن!"
    },
    {
        question: "كيف أعرف أن بطارية سيارتي بحاجة إلى الاستبدال؟",
        answer: "إذا لاحظت أيًا من العلامات التالية لضعف البطارية، مثل الأضواء الخافتة، أو تحذير أو وميض أضواء لوحة القيادة، أو عدم تشغيل السيارة، أو خلل في النظام الإلكتروني. تجنب هذه المشاكل عن طريق حجز فحص مجاني لبطارية السيارة مع 800BatteryPro!"
    },
    {
        question: "ما هي ماركات بطاريات السيارات التي تبيعونها؟",
        answer: "يخزن 800BatteryPro فقط بطاريات العلامات التجارية Amaron و ACDelco و Varta و Bosch و Exide و Hankook. بالنسبة للسيارات الفاخرة، نستخدم أيضاً بطاريات AGM وليثيوم أيون لموديلات مختلفة من BMW و Mercedes-Benz و Land Rover و Porsche و Bugatti وغيرها. تأتي بطاريات السيارات التي نقدمها مع ضمان ممتد لمدة 18 شهراً."
    },
    {
        question: "كم تكلفة بطارية السيارة في الإمارات؟",
        answer: "سعر بطارية السيارة يعتمد فعلياً على ماركة سيارتك وطرازها، لكن نطاق سعر البطارية يبدأ من 250 درهم إماراتي، والذي يعتمد أيضاً على نوع البطارية، سواء كانت بطارية AGM أو بطارية حمض الرصاص أو بطارية ليثيوم أيون."
    },
    {
        question: "هل تقدمون خدمة تشغيل البطارية إذا كانت فارغة؟",
        answer: "نعم، يوفر 800BatteryPro خدمات تشغيل بطارية مجانية في الموقع خلال 30 دقيقة في أي مكان في دبي وأبو ظبي. إذا لم تبدأ سيارتك على الفور أو واجهت مشكلة في استخدام خيارات لوحة القيادة، فيجب عليك الاتصال بنا على +971528475675 للحصول على مساعدة فورية على الطريق 24/7. تبدأ خدمات استبدال البطارية لدينا من 150 درهم إماراتي."
    },
    {
        question: "ما هي بطارية AGM وهل سيارتي بحاجة إليها؟",
        answer: "AGM تعني الحصيرة الزجاجية الماصة - إنها نوع بطارية موثوق ومتميز موصى به لأحدث جيل من موديلات السيارات التي تتميز بتقنية التشغيل والإيقاف. بعض أحدث السيارات الأوروبية (BMW 3/5 Series، Mercedes C/E Class، Audi A4/A6) تستخدم بطاريات AGM. إذا قمت بتركيب بطارية عادية في سيارة AGM، فقد يؤدي ذلك إلى إتلاف النظام الكهربائي للسيارة. يستخدم فنيونا دائماً بطاريات سيارات أصلية موصى بها من قبل مصنعي السيارات."
    },
    {
        question: "هل يمكن للمولد التالف أن يستنزف بطاريتي الجديدة؟",
        answer: "نعم، أحد الأسباب الأكثر شيوعاً لنفاد البطارية الجديدة بسرعة هو المولد التالف. أثناء القيادة، يقوم المولد بشحن البطارية. إذا لم يعمل بشكل صحيح، فحتى البطارية الجديدة تماماً ستنفد. مع كل استبدال للبطارية، نتحقق من المولد ونظام الشحن لديك للتأكد من أنها تعمل جميعاً معاً."
    },
    {
        question: "هل تستبدلون البطاريات للسيارات الهجينة أو الكهربائية؟",
        answer: "نقوم بتغيير البطاريات المساعدة 12V في السيارات الهجينة، بما في ذلك Toyota Camry Hybrid و Lexus hybrid models وغيرها. هذا يتطلب أدوات وتدريباً خاصاً لبطاريات الجهد العالي في السيارات الكهربائية. يرجى التواصل معنا لمعرفة ما إذا كان بإمكاننا المساعدة في طرازك الهجين الفريد."
    },
    {
        question: "كيف أعرف حجم البطارية الذي تحتاجه سيارتي؟",
        answer: "يختلف حجم مجموعة البطارية التي تحتاجها كل سيارة حسب النوع والطراز والمحرك. يمكنك العثور على هذه المعلومات في دليل المالك أو على ملصق البطارية الحالية. أو اتصل بنا مع مواصفات سيارتك، وسنخبرك بالضبط بالبطارية المناسبة وتكلفتها."
    },
    {
        question: "هل تتخلصون من البطارية القديمة؟",
        answer: "نعم، سنأخذ بطارية سيارتك القديمة ونعيد تدويرها بالطريقة الصحيحة مجاناً. يجب ألا تتخلص أبداً من بطاريات السيارات لأنها تحتوي على الرصاص والحمض. نتخلص منها بطريقة تتبع قواعد البيئة في الإمارات."
    }
]


const carIssuesFaqs = [
         {
            question:"After Windshield Replacement",
            answer:"Any windshield glass change requires front camera and rain sensor recalibration. This is mandatory, not optional. Calibration is essential after windshield or bumper replacements to ensure all safety systems function as designed."
         },
          {
            question:"After Any Front or Rear Bumper Repair",
            answer:"Radar sensors for adaptive cruise control, forward collision warning, rear cross-traffic alert, and parking assistance are mounted within bumpers. Any bodywork affecting bumpers requires full sensor recalibration."
         },
          {
            question:" After Wing Mirror Replacement or Repair",
            answer:"Side mirror cameras for blind spot monitoring and the 360-surround view system's side cameras are calibration-dependent. Any mirror removal invalidates their calibration."
         },

                  {
            question:"After Wheel Alignment or Suspension Work",
            answer:"Steering angle sensors linked to lane keep assist and adaptive cruise control must be recalibrated after any alignment or suspension geometry change."
         },
          {
            question:"After a Minor Collision",
            answer:"Even a low-speed parking bump can shift sensor mounting positions by millimetres - enough to cause significant calibration error across the entire ADAS system."
         },
          {
            question:"After Camera or Sensor Replacement",
            answer:"Any individual camera or sensor replaced as a component always requires recalibration before it functions correctly within the system."
         },

            {
            question:"UAE Climate-Related Drift",
            answer:"Dubai and Abu Dhabi's extreme temperatures and frequent sandstorms create unique challenges for camera systems - with thermal expansion of mounting brackets and dust accumulation on lens assemblies causing gradual calibration drift over time, even without any physical repair work."
         },
          {
            question:"After Vehicle Inspection Failure",
            answer:"UAE vehicle inspection standards now include mandatory ADAS calibration checks - if your vehicle fails inspection due to an ADAS fault, 800BatteryPro provides same-day calibration at your location to resolve the failure before your re-inspection."
         },

        ]

        const failContent = [
         {
                     icon:<FaHome />,
                     title:" 360 Surround View Camera Calibration",
                     desc:"Your car's 360-degree surround view system uses four wide-angle cameras - front, rear, and both sides - stitched together by an image processing unit to create a seamless bird's eye overhead display. If any one camera is even slightly misaligned, the stitching fails - creating visible distortion lines, mismatched image joins, or a completely skewed overhead view. 800BatteryPro calibrates all four cameras using OEM-grade calibration targets and manufacturer-specific software - restoring your 360 system to perfect factory alignment at your location across Dubai and Abu Dhabi."
                 },
                   {
                     icon:<FaHome />,
                     title:"Front Camera & Lane Departure Warning Calibration",
                     desc:"Your front windshield camera - which powers lane departure warning, lane keep assist, forward collision warning, and traffic sign recognition - requires precise calibration after every windshield replacement, bumper repair, or camera removal. Even a fraction of a degree of misalignment causes the system to misread lane markings - failing to warn you of departures or producing constant false alerts. 800BatteryPro performs both static and dynamic front camera calibration to manufacturer specification across all car brands in Dubai and Abu Dhabi - at your location, without a garage visit."
                 },
                   {
                     icon:<FaHome />,
                     title:"Parking Sensor & Reverse Camera Calibration",
                     desc:"The most universal ECU fault signal. While not always indicating ECU failure specifically, a persistent check engine light that returns immediately after clearing is often a sign of an underlying ECU fault."
                 },
                   {
                     icon:<FaHome />,
                     title:"Check Engine Light (MIL)",
                     desc:"The most universal ECU fault signal. While not always indicating ECU failure specifically, a persistent check engine light that returns immediately after clearing is often a sign of an underlying ECU fault."
                 },
                   {
                     icon:<FaHome />,
                     title:"Check Engine Light (MIL)",
                     desc:"The most universal ECU fault signal. While not always indicating ECU failure specifically, a persistent check engine light that returns immediately after clearing is often a sign of an underlying ECU fault."
                 },
                   {
                     icon:<FaHome />,
                     title:"Check Engine Light (MIL)",
                     desc:"The most universal ECU fault signal. While not always indicating ECU failure specifically, a persistent check engine light that returns immediately after clearing is often a sign of an underlying ECU fault."
                 },
        ]

        const ECUcontent = [
        {
            title:"Static Calibration is performed with the vehicle stationary",
            list:["using precisely positioned calibration targets (boards with specific patterns) placed at exact distances and angles in front of, behind, and to the sides of the vehicle. The calibration software reads the camera's view of these targets and mathematically corrects the camera's alignment parameters. Static calibration requires a flat, level surface and adequate space - something 800BatteryPro's mobile team prepares at your location before beginning. Most 360 surround view systems, front cameras, and rear cameras use static calibration."]
        },
        {
            title:"Dynamic Calibration is performed while the vehicle is driven",
            list:["at specific speeds, on roads with clear lane markings, while the calibration software analyses the camera's real-world view and automatically adjusts calibration parameters. Dynamic calibration is required for certain ADAS systems including adaptive cruise control radar and some lane departure systems. 800BatteryPro's technicians perform dynamic calibration drives near your location in Dubai and Abu Dhabi as part of the complete calibration service.", "Many modern vehicles require both static AND dynamic calibration in sequence - 800BatteryPro's technicians identify your specific vehicle's calibration requirements from the manufacturer database before beginning any work."]
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
      title1: "Car Battery Replacement ",
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
        part1: "How Our  ",
        highlighted: "Car 360 Camera Calibration Service ",
        part2: " Works in Dubai & Abu Dhabi" }} />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands text={text} />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs title={{
        part1: "Why UAE Drivers Trust 800BatteryPro",
        highlighted: " for 360 Camera Calibration  ",
    }} 
    data={data} />
            <Serve span1='When Does Your Cars 360 Camera & ' span2='ADAS System Need Calibration in the UAE?' carIssuesFaqs={carIssuesFaqs}  />
            <Faild title='Our 360 Camera & ADAS Calibration Services in Dubai & Abu Dhabi' content={failContent} />
            <ECU title='Static vs Dynamic 360 Camera Calibration - Whats the Difference and Which Does Your Car Need?' content={ECUcontent} />
           <Trusted englishContent={englishContents} arabicContent={arabicContents} />
           <Faq faqs={faqs}  />
           <Footer />
        </div>
    </div>
  )
}

export default Calibration