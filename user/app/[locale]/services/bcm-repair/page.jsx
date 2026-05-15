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


const BCMRepair = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "All Car Brands – Dubai & Abu Dhabi – BCM Diagnostics, Repair, Programming",
    title: {
        span1: "BCM Repair in Dubai & Abu Dhabi — Body Control ",
        span2: "Module Repair at Your Location Under 25 Minutes "
    },
    desc1: "Advanced BCM Diagnostics & Repair - All Car Brands - OEM-Approved Parts - Warranty on Every Repair - Dubai & Abu Dhabi",
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
    title: "Professional Mobile BCM Repair in Dubai & Abu Dhabi - Body Control Module Diagnostics, Repair & Programming at Your Location",
    services: [
        {
            id: 1,
            description: "Your car's Body Control Module — universally known as the BCM — is the master controller of every non-engine electrical system in your vehicle. Unlike the ECU which manages your engine, the BCM is the central electronic brain responsible for your car's comfort, convenience, and security functions — from power windows, central locking, and interior lighting to your immobilizer system, car alarm, windshield wipers, air conditioning controls, and keyless entry. A faulty BCM does not just cause minor inconveniences — it can leave you locked out of your own car, trigger your alarm continuously in your building's basement car park, drain your battery overnight, or prevent your engine from starting entirely. "
        },
         {
            id: 2,
            description: "In Dubai and Abu Dhabi, BCM failure is far more common than most drivers realise - and the UAE's unique driving environment makes it significantly more prevalent than in cooler climates. Extreme summer temperatures regularly exceeding 45°C accelerate the degradation of BCM circuit board components, while the combination of high humidity during winter months and dust from desert roads causes corrosion on BCM connector pins and wiring harnesses. Dead batteries - one of the most frequent vehicle emergencies in the UAE - send damaging voltage fluctuations through the BCM's sensitive electronics, and incorrect jump starts cause immediate and permanent BCM circuit damage."
        },

          {
            id: 3,
            description: "800BatteryPro brings professional mobile BCM diagnostics, repair, programming, and replacement directly to your location anywhere in Dubai and Abu Dhabi - under 25 minutes, 24/7. Using manufacturer-specific diagnostic software and OEM-grade equipment compatible with all car brands, our trained BCM specialists accurately identify every BCM fault - from software corruption and connector corrosion to component-level circuit board failure and complete BCM programming - at your location, without a garage visit, with a warranty on every repair performed. One call to +971 52 847 5675 and our nearest BCM specialist is on his way to your exact location."
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
        title: " Mobile Service With Battery + BCM Combination",
        desc: "Professional BCM repair at your location in Dubai & Abu Dhabi under 25 minutes. The only mobile service combining battery replacement and BCM repair in a single UAE visit. Diagnostics, component repair, programming, cloning, and replacement - all in one visit"
    },
    {
        icons: <FaSitemap />,
        title: " OEM-Grade Equipment With Warranty on Every Repair",
        desc: "Manufacturer-specific diagnostic and programming tools — never generic aftermarket alternatives. Full warranty on all BCM repair, programming, and replacement work. BMW, Mercedes, Toyota, Nissan, Land Rover, Audi, Lexus, Chevrolet and every UAE brand covered"
    },
    {
        icons: <FaSitemap />,
        title: "24/7 Genuine OEM Parts ",
        desc: "Only OEM-approved components used for all BCM work. No extra charge for nights, weekends or UAE public holidays"
    },
    {
        icons: <FaSitemap />,
        title: " Immobilizer Specialists With 6+ Years Experience",
        desc: "BCM immobilizer lock resolved at your location - no tow truck needed. 10,000+ UAE customers served across Dubai and Abu Dhabi"
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
        question: "What is a BCM and what does it control in my car?",
        answer: "A BCM (Body Control Module) is the central electronic computer that manages all non-engine electrical systems in your vehicle. Unlike the ECU which controls your engine, the BCM controls your car's comfort, convenience, and security functions including power windows, power mirrors, central locking, keyless entry, interior and exterior lighting, windshield wipers, horn, car alarm and immobiliser system, air conditioning control panel, and heated seats. The BCM communicates with all other modules in your car via the CAN bus network - acting as the central hub that coordinates every electrical system outside the engine bay. In modern UAE vehicles a faulty BCM can simultaneously affect dozens of functions across the entire car."
    },
    {
        question: "How much does BCM repair cost in Dubai and Abu Dhabi?",
        answer: "BCM repair in Dubai and Abu Dhabi at 800BatteryPro costs significantly less than dealer BCM replacement - typically 40 to 70% less than a new OEM BCM from a UAE main dealer. A new BCM from a Dubai or Abu Dhabi dealer typically costs between AED 2,000 and AED 12,000 depending on the car brand and model - before programming costs. 800BatteryPro provides a transparent quote before any work begins with zero hidden costs. BCM diagnostics are performed at your location first to accurately identify the fault and confirm whether repair, programming, or replacement is required before any cost is confirmed. Call +971 52 847 5675 for a same-day assessment anywhere in Dubai or Abu Dhabi."
    },
    {
        question: "Can a dead car battery damage the BCM?",
        answer: "Yes - a dead or weak car battery is the most common cause of BCM failure in the UAE. The BCM requires stable voltage above 9–10 volts to maintain its programming and circuit integrity. When battery voltage drops below this threshold – which happens rapidly in UAE summer heat in parked vehicles - the BCM's processor can corrupt its own software, damage internal components, or trigger the immobiliser to lock the vehicle. Dubai and Abu Dhabi's extreme summer temperatures, which cause batteries to discharge faster than in any other climate, make this the leading cause of BCM failure in the UAE. If your battery recently died and your car now has multiple electrical faults - an immediate BCM diagnostic by 800BatteryPro is essential."
    },
    {
        question: "What is the difference between BCM repair and BCM replacement?",
        answer: "BCM repair involves fixing the existing module at component level - replacing failed capacitors, restoring corroded connectors, repairing damaged circuit traces, or reprogramming corrupted software - while keeping your original VIN-matched module in place. BCM replacement involves sourcing a new or remanufactured unit and programming it to your vehicle's exact specifications. BCM repair is recommended when the fault is repairable at component level - typically costing 40 to 70% less than replacement. BCM replacement is recommended when physical damage is beyond repair. 800BatteryPro always provides an honest assessment of which option is right for your specific vehicle before any work begins."
    },
    {
        question: "Does 800BatteryPro perform BCM repair at my location in Dubai and Abu Dhabi?",
        answer: "Yes - 800BatteryPro performs professional BCM diagnostics, repair, programming, cloning, and replacement at your exact location anywhere in Dubai and Abu Dhabi - under 25 minutes, 24 hours a day, 7 days a week. Whether you are at home, at work, at a hotel, in a mall car park, or stranded with a BCM immobiliser fault anywhere across both emirates - there is no need to arrange a tow truck or visit a garage. 800BatteryPro is the only mobile service in Dubai and Abu Dhabi combining car battery replacement and BCM repair in a single on-location visit - addressing both the root cause and the resulting BCM damage in one call."
    },
    {
        question: "My car won't start and I think the BCM immobiliser has locked - can 800BatteryPro help?",
        answer: "Yes - BCM immobiliser lock is one of the most common BCM-related emergencies in Dubai and Abu Dhabi, and 800BatteryPro specialises in resolving it at your location. When the BCM loses its immobiliser programming - typically caused by a dead battery, incorrect jump start, or BCM software corruption - the engine cranks normally but refuses to start because the BCM cannot authorise fuel injection or ignition. Our mobile BCM specialists bring manufacturer-specific programming tools to your location and restore the BCM's immobiliser authorisation data - getting you back on the road without a tow truck or dealer visit. Call +971 52 847 5675 immediately for emergency BCM immobiliser recovery in Dubai or Abu Dhabi."
    },
    {
        question: "What are the most common symptoms of BCM failure in UAE cars?",
        answer: "The most common BCM failure symptoms in Dubai and Abu Dhabi vehicles are: power windows failing to open or close; central locking malfunctioning or doors locking randomly; car alarm triggering without reason; interior lights stuck on or flickering; excessive overnight battery drain despite a healthy battery; car refusing to start due to immobiliser lock; multiple unrelated warning lights illuminating simultaneously; windshield wipers activating randomly; and keyless entry system failing. If you experience any of these symptoms in Dubai or Abu Dhabi - call 800BatteryPro on +971 52 847 5675 for an immediate on-location BCM diagnostic."
    },
    {
        question: "Is BCM repair cheaper than BCM replacement in the UAE?",
        answer: "In most cases yes - BCM repair is significantly cheaper than BCM replacement in the UAE. A new OEM BCM from a main dealer in Dubai or Abu Dhabi typically costs between AED 2,000 and AED 12,000 depending on car brand and model - before programming costs which can add a further AED 500 to AED 2,000. Professional component-level BCM repair at 800BatteryPro typically costs 40 to 70% less than full replacement - and in most cases the repaired BCM performs identically to a new unit with no additional programming required since your original module's VIN data is preserved. Our specialists always recommend the most cost-effective solution for your specific vehicle."
    },
    {
        question: "How long does BCM repair take at 800BatteryPro?",
        answer: "BCM diagnostics at your location in Dubai or Abu Dhabi typically take 20 to 40 minutes to accurately identify all fault codes, test all BCM-controlled systems, and determine the root cause. BCM software reprogramming and simple connector cleaning and restoration can be completed at your location in 15 to 25 minutes. Component-level BCM circuit board repair requiring specialist component replacement may require the BCM to be taken for bench repair and returned within 24 to 48 hours - during which time 800BatteryPro can arrange a temporary BCM solution where possible. BCM cloning and replacement installation including programming typically takes 60 to 90 minutes at your location. 800BatteryPro always provides a clear timeline and transparent pricing before any work begins."
    },
    {
        question: "Does 800BatteryPro provide a warranty on BCM repairs in Dubai and Abu Dhabi?",
        answer: "Yes - every BCM repair, programming, cloning, and replacement performed by 800BatteryPro in Dubai and Abu Dhabi comes with a full warranty on parts and labour. This warranty covers all component-level repairs, BCM software reprogramming, connector restoration, and BCM replacement installations carried out by our technicians. If the same BCM fault recurs within the warranty period following our repair - without any new physical damage, battery failure, or electrical event having occurred - we return to your location and resolve it at no additional charge. 800BatteryPro stands fully behind every BCM repair we perform across Dubai and Abu Dhabi - your satisfaction and your vehicle's correct operation are our complete responsibility."
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
            question:"Dead or Weak Car Battery",
            answer:"The most common cause of BCM failure in the UAE. The BCM requires a stable minimum voltage of approximately 9-10 volts to maintain its programming and circuit integrity. When a battery discharges below this threshold - which happens rapidly in UAE summer heat when a vehicle is left parked for extended periods - the BCM's processor can corrupt its own software or suffer permanent component damage. Dubai and Abu Dhabi's basement car parks, where temperatures regularly exceed 60°C in summer, create the perfect conditions for accelerated battery discharge and BCM vulnerability."
         },
          {
            question:" Incorrect Jump Start",
            answer:"The second most common cause of BCM damage in the UAE. Connecting jump cables in the wrong polarity order or using an underpowered portable jump pack sends a voltage spike or reverse current directly through the vehicle's electrical system - permanently damaging BCM circuits, corrupting BCM software, and in severe cases triggering the immobilizer to permanently lock the vehicle. 800BatteryPro's professional battery boosting service eliminates all risk of BCM damage from jump starts - using calibrated equipment and correct procedures across Dubai and Abu Dhabi, 24/7."
         },
          {
            question:"UAE Heat and Thermal Stress",
            answer:"Abu Dhabi and Dubai's extreme summer heat creates unique thermal stress on BCM circuit boards that accelerates component degradation. Capacitors within the BCM - which regulate voltage and filter electrical interference - are particularly sensitive to heat cycling, expanding and contracting daily as the vehicle heats and cools. Over time this thermal cycling causes capacitor failure, solder joint cracking, and relay malfunction that manifests as intermittent BCM faults which worsen progressively."
         },

                  {
            question:"Corrosion on BCM Connectors",
            answer:"The UAE's combination of high summer heat, occasional winter humidity, and salt air in coastal areas of Dubai and Abu Dhabi causes oxidation and corrosion on BCM connector pins and wiring harness terminals. Corroded connections cause intermittent BCM communication failures - creating electrical faults that appear and disappear unpredictably, making diagnosis difficult without professional equipment."
         },
          {
            question:"Water Ingress and Flood Damage",
            answer:"While infrequent, UAE rain events - particularly in Dubai where drainage infrastructure can be overwhelmed - can cause water to enter BCM housings through damaged seals or flooded underbody areas, causing immediate short circuits and severe BCM damage."
         },
          {
            question:"Software Corruption and Glitches",
            answer:"BCM software can become corrupted through incomplete programming attempts, battery disconnection during software updates, or accumulated data errors from prolonged voltage instability - causing widespread electrical system faults without any "
         },

          

        ]

        const failContent = [
         {
                     icon:<FaHome />,
                     title:" BCM Diagnostics & Fault Code Reading",
                     desc:"Multiple electrical systems behaving erratically simultaneously is the classic sign of a BCM fault - but accurately identifying whether the problem is the BCM itself, its wiring harness, a fuse, or a related module requires professional manufacturer-specific diagnostics. 800BatteryPro's mobile technicians perform advanced BCM diagnostics at your location across Dubai and Abu Dhabi - reading all stored fault codes, performing live data stream analysis of every BCM-controlled system, testing connector integrity and ground connections, and accurately identifying whether your BCM requires repair, reprogramming, or replacement. Fast, accurate, transparent - no garage visit needed."
                 },
                   {
                     icon:<FaHome />,
                     title:" BCM Component-Level Circuit Board Repair",
                     desc:"When your BCM has suffered internal component failure — due to a dead battery voltage drop, incorrect jump start, moisture ingress, or capacitor degradation from UAE heat - 800BatteryPro's specialists perform component-level BCM circuit board repair including capacitor replacement, relay repair, corroded connector restoration, transistor testing, and solder joint repair. Component-level BCM repair is significantly cheaper than BCM replacement - preserving your original module's VIN-matched programming and avoiding the cost and complexity of coding a new unit. All BCM circuit board repairs come with a full warranty."
                 },
                   {
                     icon:<FaHome />,
                     title:"BCM Programming & Software Repair",
                     desc:"BCM software corruption - caused by a dead battery during a software update, an incorrect programming attempt, or gradual data corruption from voltage instability - can cause widespread electrical failures without any physical hardware damage. 800BatteryPro's technicians perform BCM software repair, complete reprogramming, and software updates at your location using manufacturer-approved programming tools - restoring your BCM's software to factory specification for your vehicle's exact VIN, make, model, and market configuration. Available for all major car brands in Dubai and Abu Dhabi, 24/7."
                 },
                   {
                     icon:<FaHome />,
                     title:"BCM Cloning & Data Transfer",
                     desc:"When a BCM requires replacement, the new unit must be programmed with your vehicle's exact configuration data - including immobilizer codes, central locking programming, comfort settings, and market-specific configurations - to function correctly without dealer-level coding. 800BatteryPro performs BCM cloning - transferring all data from your original BCM to a replacement unit - at your location in Dubai and Abu Dhabi. This plug-and-play approach eliminates the need for dealer programming visits and is significantly more cost-effective than purchasing a pre-coded replacement from a main dealer."
                 },
                   {
                     icon:<FaHome />,
                     title:"Battery-Related BCM Failure Repair",
                     desc:"A dead or weak car battery is the single most common trigger of BCM failure in Dubai and Abu Dhabi. When battery voltage drops below the BCM's minimum operating threshold - or when a jump start is performed incorrectly - the resulting voltage spike permanently damages BCM circuits, corrupts BCM software, or causes the immobilizer to lock the vehicle. 800BatteryPro uniquely combines car battery replacement and BCM repair in a single mobile visit - diagnosing and repairing both the root cause (dead battery) and the resulting BCM damage at your exact location in Dubai or Abu Dhabi, under 25 minutes, 24/7. No other mobile service in the UAE offers this combined battery and BCM solution."
                 },
                   {
                     icon:<FaHome />,
                     title:"BCM Replacement & Installation",
                     desc:"When BCM damage is beyond repair - due to severe physical damage, extensive circuit board failure, or unavailability of specific components - 800BatteryPro sources, installs, and programs replacement BCM units for all car brands across Dubai and Abu Dhabi. We supply OEM-approved replacement BCMs, perform full VIN-specific programming and coding at your location, verify all BCM-controlled systems are functioning correctly after installation, and provide a full warranty on parts and labour. No garage appointment, no tow truck - your BCM replacement is completed at your exact location under 25 minutes from our arrival."
                 },
        ]

        const ECUcontent = [
        {
            title:"BCM Repair is recommended when:",
            list:["The BCM has suffered component-level failure (capacitors, relays, connectors) repairable at circuit board level", "The BCM software has corrupted and requires reprogramming rather than hardware replacement", "The BCM fault was triggered by an external event (dead battery, bad jump start, voltage spike) rather than progressive internal failure", "The BCM is VIN-locked to your vehicle and a replacement would require expensive dealer coding", 
              "The BCM model is discontinued or unavailable new from the manufacturer Cost saving is a priority - BCM repair typically costs 40 to 70% less than a new BCM from a UAE dealer"
            ]
        },
        {
            title:"BCM Replacement is recommended when:",
            list:["The BCM's circuit board has suffered irreparable physical damage or complete component failure", "Water ingress has caused extensive corrosion damage beyond component replacement", "The BCM processor itself has failed at chip level", "The repair cost approaches or exceeds the cost of a quality replacement unit", "800BatteryPro's BCM specialists provide an honest, transparent assessment of whether repair or replacement is the right choice for your specific vehicle - and always recommend the option that gives you the best outcome at the lowest cost."]
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
        highlighted: "BCM Repair Service ",
        part2: " Works in Dubai & Abu Dhabi" }} />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands text={text} />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs title={{
        part1: "Why UAE Drivers Trust 800BatteryPro",
        highlighted: " for BCM Repair Services ",
    }} 
    data={data} />
            <Serve span1='What Causes BCM Failure ?' span2='in Dubai & Abu Dhabi' carIssuesFaqs={carIssuesFaqs}  />
            <Faild title='Our BCM Repair & Programming Services in Dubai & Abu Dhabi' content={failContent} />
            <ECU title='BCM Repair vs BCM Replacement - Which Is Right for Your Car in the UAE?' content={ECUcontent} />
           <Trusted englishContent={englishContents} arabicContent={arabicContents} />
           <Faq faqs={faqs}  />
           <Footer />
        </div>
    </div>
  )
}

export default BCMRepair