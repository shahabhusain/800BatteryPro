import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaSitemap } from 'react-icons/fa'
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

export const metadata = {
  title: "ECU Repair in Dubai & Abu Dhabi | ECU Diagnostics & Programming",
  description:
    "Expert ECU repair in Dubai & Abu Dhabi. Advanced diagnostics, ECU programming & reprogramming for all car brands with fast on-site service.",
  keywords:
    "ECU repair Dubai, ECU programming Abu Dhabi, car ECU diagnostics UAE, ECU reprogramming Dubai, engine control unit repair UAE, car ECU service",
  alternates: {
    canonical: "https://800batterypro.com/services/ecu-repair",
  },
};

const ECURepair = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "ECU Diagnostics, Repair & Reprogramming – Genuine OEM Parts – 6+ Years Experience",
    title: {
        span1: "ECU Repair in Dubai & Abu Dhabi — ",
        span2: "At Your Location Under 30 Minutes"
    },
    desc1: "Advanced ECU Diagnostics & Repair — All Car Brands — OEM-Approved Parts — Warranty on Every Repair — Dubai & Abu Dhabi",
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
    title: "Professional Mobile ECU Repair in Dubai & Abu Dhabi - Diagnostics, Repair & Reprogramming at Your Location",
    services: [
        {
            id: 1,
            description: "Your car's Engine Control Unit - commonly known as the ECU, ECM (Engine Control Module), or PCM (Powertrain Control Module) - is the central computer that manages every critical function of your vehicle. From fuel injection timing and ignition control to emission management, idle speed, and turbocharger boost pressure - a faulty ECU affects every aspect of your car's performance and safety. When your ECU fails in Dubai or Abu Dhabi, most drivers face a difficult choice: an expensive dealer quote for ECU replacement, or a long wait at a traditional garage. 800BatteryPro offers a third, better option — professional mobile ECU diagnostics and repair brought directly to your location anywhere in Dubai or Abu Dhabi, in under 30 minutes, 24/7."
        },
         {
            id: 2,
            description: "Our ECU repair technicians use the latest OBD-II and manufacturer-specific diagnostic equipment to accurately identify ECU faults across all car brands - reading and clearing fault codes, performing live data analysis, testing sensor inputs and actuator outputs, and carrying out ECU reprogramming where required. With 6+ years of experience repairing ECUs across Dubai and Abu Dhabi — and a track record serving over 10,000 UAE vehicle owners - 800BatteryPro's mobile ECU repair service saves you the cost of a tow truck, the inconvenience of a garage visit, and in most cases a significant portion of the dealer's replacement price. One call to +971 52 847 5675 and our nearest ECU specialist is on his way to your exact location."
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
        title: " 24/7 Mobile Service",
        desc: "No towing, no garage visit, no waiting. Our fully equipped ECU repair van reaches your location in under 30 minutes."
    },
    {
        icons: <FaSitemap />,
        title: "Battery + ECU Combination",
        desc: " We are the only mobile service in Dubai and Abu Dhabi that combines car battery replacement and ECU repair in a single visit — addressing the root cause (dead battery) and the resulting damage (ECU failure) together."
    },
    {
        icons: <FaSitemap />,
        title: "6+ Years Experience & All Car Brands",
        desc: "Over 6 years serving Dubai and Abu Dhabi's vehicle owners with 10,000+ successful services completed. Our ECU technicians are trained and equipped for every major car brand including BMW, Mercedes-Benz, Audi, Land Rover, Toyota, Nissan, Chevrolet, Jeep, Volkswagen, and all other brands driven in the UAE."
    },
    {
        icons: <FaSitemap />,
        title: " Genuine Parts & Warranty on Every Repair",
        desc: "We use only OEM-approved components for all ECU repairs - never counterfeit or substandard parts. Every ECU repair carried out by 800BatteryPro comes with a warranty - giving you complete peace of mind after every service in Dubai and Abu Dhabi."
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
        question: "What is an ECU and what does it do in a car?",
        answer: "An ECU (Engine Control Unit) - also called ECM (Engine Control Module) or PCM (Powertrain Control Module) - is the central computer that manages your car's engine functions. It processes data from dozens of sensors measuring temperature, airflow, throttle position, oxygen levels, and crankshaft speed - and uses this data to precisely control fuel injection timing, ignition timing, idle speed, turbocharger boost, and emission management. Modern cars have multiple ECUs controlling different systems including the Body Control Module (BCM) for electrical functions, the Transmission Control Module (TCM) for gearbox management, and the main Engine Control Unit for powertrain functions."
    },
    {
        question: "How much does ECU repair cost in Dubai and Abu Dhabi?",
        answer: "ECU repair in Dubai and Abu Dhabi at 800BatteryPro costs significantly less than dealer ECU replacement - typically 40 to 70% less. The exact cost depends on your car's make, model, the specific ECU type (main ECU, BCM, TCM), and the nature of the fault. 800BatteryPro provides a transparent quote before any work begins - with zero hidden costs. ECU diagnostics at your location are performed first to accurately identify the fault before any repair cost is confirmed. Call +971 52 847 5675 or fill in the booking form to get a same-day assessment anywhere in Dubai or Abu Dhabi."
    },
    {
        question: "Can a dead car battery damage the ECU?",
        answer: "Yes - a dead or weak car battery is the single most common cause of ECU failure in the UAE. When battery voltage drops below the ECU's minimum operating threshold - typically below 9 to 10 volts - the ECU's processor can corrupt its own programming or damage internal components. Dubai and Abu Dhabi's extreme summer heat, which can raise battery temperatures in parked vehicles to critical levels, significantly accelerates this risk. If your car has recently had a dead battery and is now showing warning lights, rough running, or starting problems - an ECU diagnostic should be performed immediately alongside the battery replacement."
    },
    {
        question: "Can a bad jump start damage my car's ECU?",
        answer: "Yes - an incorrect jump start is the second most common cause of ECU damage in the UAE. Connecting jump cables in the wrong polarity order (positive to negative or negative to positive on the wrong terminals) sends a reverse voltage spike directly through the vehicle's electrical system, which can permanently damage ECU circuits, BCM components, and other sensitive electronics. Even a correctly performed jump start using an underpowered jump pack can cause harmful voltage fluctuations. 800BatteryPro's technicians perform safe, professional battery boosting that eliminates the risk of ECU damage from jump starts - using calibrated equipment across Dubai and Abu Dhabi, 24/7."
    },
    {
        question: "Does 800BatteryPro perform ECU repair at my location in Dubai and Abu Dhabi?",
        answer: "Yes - 800BatteryPro performs professional ECU diagnostics and repair at your exact location anywhere in Dubai and Abu Dhabi. Whether you are at home, at work, in a hotel, a mall car park, or stranded on the road — our fully equipped mobile ECU repair technician reaches you in under 30 minutes, 24 hours a day, 7 days a week. There is no need to arrange a tow truck, visit a garage, or wait days for a diagnostic appointment. 800BatteryPro is the only mobile service in Dubai and Abu Dhabi combining battery replacement and ECU repair in a single on-location visit."
    },
    {
        question: "What car brands does 800BatteryPro repair ECUs for in the UAE?",
        answer: "800BatteryPro repairs ECUs for all major car brands driven in Dubai and Abu Dhabi including BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Land Rover, Range Rover, Jaguar, Rolls Royce, Bentley, Toyota, Lexus, Nissan, Infiniti, Mitsubishi, Honda, Hyundai, Kia, Chevrolet, GMC, Ford, Jeep, Dodge, Chrysler, and all other car brands available in the UAE. Our ECU technicians use both universal OBD-II diagnostic tools and brand-specific manufacturer diagnostic software to accurately identify and repair faults across every make and model."
    },
    {
        question: "What are the most common symptoms of ECU failure in UAE cars?",
        answer: "The most common ECU failure symptoms reported by Dubai and Abu Dhabi drivers are: a persistent check engine light that returns after clearing; car not starting or hard starting despite a good battery; sudden significant drop in fuel economy; engine misfires and rough idle; erratic automatic transmission behaviour including harsh gear changes and hunting between gears; multiple unrelated warning lights illuminating simultaneously (ABS, airbag, traction control, and engine light together); and complete loss of power or unexpected engine shutdown. If you are experiencing any of these symptoms in Dubai or Abu Dhabi, call 800BatteryPro on +971 52 847 5675 for an immediate on-location ECU diagnostic."
    },
    {
        question: "Is ECU repair cheaper than ECU replacement in the UAE?",
        answer: "In most cases yes — ECU repair is significantly cheaper than ECU replacement in the UAE. A new OEM ECU from a main dealer in Dubai or Abu Dhabi typically costs between AED 3,000 and AED 15,000 depending on the car brand and model. Professional ECU repair at component level typically costs 40 to 70% less than full replacement — and in many cases the repaired ECU performs identically to a new unit. 800BatteryPro's ECU specialists will always give you an honest assessment of whether repair or replacement is the right choice for your specific vehicle before any work begins."
    },
    {
        question: "How long does ECU repair take at 800BatteryPro?",
        answer: "ECU diagnostics at your location in Dubai or Abu Dhabi typically take 20 to 40 minutes to accurately identify all fault codes and root causes. Component-level ECU repairs vary depending on the fault — minor software reprogramming and simple component repairs can be completed on-location in 30 to 60 minutes. More complex circuit board repairs requiring specialist component replacement may require the ECU to be taken for bench repair and returned within 24 to 48 hours. 800BatteryPro always provides a clear timeline and transparent pricing before any work begins."
    },
    {
        question: "Does 800BatteryPro provide a warranty on ECU repairs in Dubai and Abu Dhabi?",
        answer: "Yes - every ECU repair performed by 800BatteryPro in Dubai and Abu Dhabi comes with a warranty on parts and labour. This warranty covers all component-level repairs, ECU reprogramming, and BCM and TCM repairs carried out by our technicians. If the same fault recurs within the warranty period after our repair — we return to your location and fix it at no additional charge. 800BatteryPro believes in complete transparency and stands fully behind every ECU repair we perform across Dubai and Abu Dhabi."
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
        highlighted: "ECU Repair Service ",
        part2: " Works in Dubai & Abu Dhabi" }} />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands text={text} />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs title={{
        part1: "Why Dubai & Abu Dhabi ",
        highlighted: "Drivers Choose 800BatteryPro for ECU Repair ",
    }} 
    data={data} />
            <Serve  />
            <Faild />
            <ECU />
           <Trusted englishContent={englishContents} arabicContent={arabicContents} />
           <Faq faqs={faqs} />
           <Footer />
        </div>
    </div>
  )
}

export default ECURepair