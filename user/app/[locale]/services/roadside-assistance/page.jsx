import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaCalendarAlt, FaCar, FaCarBattery, FaHome, FaSitemap, FaTruck } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import { useLocale } from 'next-intl'
import serviceImg from "@/public/services/ser1.jpeg"
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
import Serve from '@/app/components/Services/Serve'
import Faild from '@/app/components/Services/Faild'
import { MdAlarm, MdCarRental } from 'react-icons/md'
import SubLocation from '@/app/components/locations/SubLocation'

const RoadSide = () => {
  const locale = useLocale()

// Hero Section
const heroEnglishContent = {
    desc: "Dubai & Abu Dhabi · Rated 4.9★ on Google · 10,000+ Drivers Served",
    title: {
        span1: "24/7 Roadside Assistance in Dubai - ",
        span2: " Under 25 Minutes "
    },
    desc1: "Stuck on Sheikh Zayed Road, JBR, Business Bay, or anywhere across Dubai and Abu Dhabi? 800BatteryPro reaches your exact location in under 25 minutes — any time of day or night. Roadside assistance starts from AED 150. No hidden fees. Free battery test included.",
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
    title: "24/7 Roadside Assistance Services in Dubai & Abu Dhabi - We Come to You",
    services: [
        {
            id: 1,
            description: "When you're stranded in Dubai's heat or broken down on a busy Abu Dhabi highway, every minute matters. 800BatteryPro operates a 24/7 rapid-response fleet covering every area of Dubai and Abu Dhabi — from Sheikh Zayed Road and Business Bay to JBR, Deira, Al Barsha, JLT, DIFC, and beyond. Our certified technicians arrive fully equipped to resolve your situation on-site without towing in most cases. Whether you need a jump start, a tyre change, sand extraction, fuel delivery, or an emergency battery replacement — we handle it all at your exact location, for any vehicle including luxury, exotic, and 4×4 models."
        },
          {
            id: 2,
            description: "All roadside services starts from AED 80. Free battery test with every callout. 18-month warranty on all batteries installed."
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
        title: "Arrival in Under 25 Minutes",
        desc: "Your time matters. We strategically position our well-equipped service vehicles across Dubai and Abu Dhabi. This guarantees a response time of under 25 minutes so you can get on with your day."
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
        question: "How much does roadside assistance cost in Dubai?",
        answer: "Our roadside assistance services start from AED 80 for basic services like tyre changes and jump starts. Towing starts from AED 200, sand recovery from AED 250, and fuel delivery from AED 50 plus fuel cost. Battery replacement starts from AED 250 with an 18-month warranty. All prices are transparent — no hidden fees added after the job."
    },
    {
        question: "How fast can you reach me anywhere in Dubai?",
        answer: "Our average response time is under 25 minutes anywhere in Dubai and Abu Dhabi. We position our fleet of 20+ vans across strategic locations including Marina, DIFC, Business Bay, Deira, Bur Dubai, Al Barsha, JLT, and the major highways — so there's always a technician nearby. Peak traffic hours may extend arrival by 5–10 minutes, and we'll always inform you with live updates."
    },
    {
        question: "Do you cover Sheikh Zayed Road, E311, and all Dubai highways?",
        answer: "Yes. We provide roadside assistance across all major Dubai highways including Sheikh Zayed Road (E11), Emirates Road (E311), Al Khail Road (E44), Sheikh Mohammed Bin Zayed Road (E311), and Hessa Street. If you're stranded on any highway or service road in Dubai, call us and we'll reach you safely."
    },
    {
        question: "Can you tow luxury, exotic, and sports cars in Dubai?",
        answer: "Yes. We have specialised flatbed and covered transport vehicles for low-clearance sports cars, exotic vehicles, and high-value luxury cars including Ferrari, Lamborghini, Rolls-Royce, Bentley, and Bugatti. We never use wheel-lift towing for exotic or sports cars — only flatbed or covered enclosed transport that protects your vehicle's body and undercarriage."
    },

      {
        question: "What if I'm stuck in an underground parking garage in Dubai?",
        answer: "Standard tow trucks cannot enter most underground or multi-storey parking garages in Dubai due to height restrictions. We operate specialised low-profile extraction vehicles — built specifically for low-clearance environments in mall car parks, hotel basements, and residential building garages. We can safely extract your vehicle from any underground parking structure in Dubai and Abu Dhabi."
    },
      {
        question: "Do you help with sand recovery in Dubai's desert areas?",
        answer: "Yes. Dubai and Abu Dhabi's desert outskirts — including Al Qudra, Hatta, and areas near the E66 and E77 highways — are popular driving areas where vehicles get stuck in soft sand regularly. Our specialist off-road recovery team is equipped with kinetic recovery ropes, traction boards, and 4×4 support vehicles to extract any vehicle stuck in sand or mud."
    },
      {
        question: "How do I pay for roadside assistance in Dubai?",
        answer: "We accept cash, credit and debit card, and bank transfer — all processed on-site by our technician. You do not need to pay anything upfront when booking. Payment is only collected after the service is completed to your satisfaction. We provide a full receipt for all services."
    },
      {
        question: "Is roadside assistance available in Abu Dhabi as well?",
        answer: "Yes. 800BatteryPro provides the same 24/7 roadside assistance service across Abu Dhabi — including the city centre, Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Mussafah, and all major Abu Dhabi highways. Response time in Abu Dhabi is under 30 minutes for most locations."
    },
      {
        question: "What is the best roadside assistance service in Dubai?",
        answer: "800BatteryPro is rated 4.9 stars on Google by over 10,000 customers across Dubai and Abu Dhabi. We are one of the fastest-responding roadside assistance services in the UAE, with a guaranteed 25-minute arrival time, transparent pricing, and no hidden fees. Our fleet of 20+ rapid-response vans covers all Dubai and Abu Dhabi areas 24 hours a day, 7 days a week."
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

    const carIssuesFaqs = [
         {
            question:"Extreme Heat Kills Batteries and Tyres",
            answer:"Dubai's summer temperatures regularly exceed 45°C — and road surface temperatures can reach 70°C or higher. This heat accelerates battery fluid evaporation, weakens tyre sidewalls, and stresses engine cooling systems beyond their design limits. More than 40% of all vehicle breakdowns in the UAE during summer months are heat-related. A battery that would last 5 years in Europe lasts 2–3 years in Dubai. A tyre that would survive months elsewhere can blow out on a single afternoon drive in July."
         },
          {
            question:"Highways with No Safe Stopping Zones",
            answer:"Breaking down on Sheikh Zayed Road (E11), Emirates Road (E311), or Al Khail Road in heavy traffic is not just inconvenient — it's dangerous. Dubai's major highways have limited hard shoulders and high-speed traffic that doesn't slow down for stationary vehicles. Getting a technician to you quickly is not a luxury — it's a safety requirement. Our 25-minute response time is specifically designed for Dubai's highway breakdown risk."
         },
          {
            question:" Desert Off-Road Areas with Zero Mobile Coverage",
            answer:"Thousands of Dubai and Abu Dhabi residents drive into the desert regularly — Al Qudra, Hatta, Liwa, and the dunes near the E66 and E77 highways. Getting stuck in soft sand with no recovery equipment and limited mobile signal is a genuine survival risk in UAE summer conditions. Having a roadside service with specialist off-road recovery capability is critical for any driver who ventures beyond the city limits."
         },

                  {
            question:"Luxury and Exotic Cars Require Specialist Handling",
            answer:"Dubai has one of the highest concentrations of luxury and exotic vehicles per capita in the world. Ferraris, Lamborghinis, Rolls-Royces, Bentleys, and McLarens are everyday cars here - and they cannot be handled by a standard tow truck or generic mechanic. 800BatteryPro's specialist flatbed and covered transport ensures your high-value vehicle is moved without damage, with technicians who understand exotic car systems."
         },
        
        ]

            const failContent = [
         {
                     icon:<FaCar />,
                     title:"Car Towing Dubai - Sedan, 4×4 & Exotic",
                     desc:"We operate flatbed and wheel-lift tow trucks for all vehicle types including sports cars, stance builds, and luxury SUVs like the G-Wagon and Range Rover. Fully enclosed covered transport available for exotic and supercar towing in Dubai and Abu Dhabi. Towing starts from  AED 200"
                 },
                   {
                     icon:<FaCarBattery />,
                     title:"Jump Start / Battery Boost - Safe ECU-Protected",
                     desc:"Dead battery anywhere in Dubai? Our technicians use advanced ECU-safe jump-start equipment that protects your car's sensitive electronics during the boost. If the boost fails, we replace the battery on-site immediately. Free battery test included with every callout. Jump start, starts from AED 99 · Battery test free"
                 },
                   {
                     icon:<FaTruck />,
                     title:"Sand Recovery & Off-Road Rescue Dubai",
                     desc:"Stuck in the sand on Dubai's outskirts, Al Qudra, or Hatta roads? Our specialist off-road recovery team extracts vehicles from soft sand, mud, and difficult terrain using kinetic recovery equipment. We tow you to safety if extraction isn't possible on-site. Sand recovery starts from AED 250"
                 },
                   {
                     icon:<MdCarRental />,
                     title:"Flat Tyre Change - On-Site in Dubai",
                     desc:"Got a flat tyre on the highway or in a parking lot? We come to your exact location and swap your flat tyre with your spare in under 20 minutes. If you don't have a spare, we can arrange towing to the nearest tyre shop. Available 24/7 across all Dubai and Abu Dhabi areas.Tyre change starts from AED 80"
                 },
                   {
                     icon:<FaCalendarAlt />,
                     title:"Emergency Fuel Delivery - All UAE Locations",
                     desc:"Ran out of petrol on the E311, Sheikh Mohammed Bin Zayed Road, or anywhere in the UAE? We deliver the right fuel — petrol or diesel — directly to your stranded vehicle in under 25 minutes. No towing needed. Back on the road in minutes. Fuel delivery starts from AED 50 + fuel cost"
                 },
                   {
                     icon:<FaCar />,
                     title:"Parking Garage Rescue - Low-Clearance Specialists",
                     desc:"Stuck in a low-clearance underground parking garage where standard tow trucks can't enter? Our fleet includes specialised low-profile extraction vehicles built for tight, low-ceiling environments in Dubai malls, hotels, and residential buildings. We get your car out safely without damage. Garage extraction starts from AED 200"
                 },

                  {
                     icon:<FaCar />,
                     title:"On-Site Car Battery Replacement - All Brands",
                     desc:"If your battery is beyond boosting, we carry premium AGM, EFB, and standard batteries for all car brands in our mobile vans. We replace your battery on-site — no garage visit, no towing, no waiting. 18-month warranty on every battery we install. Brands include Varta, Bosch, Amaron, and AC Delco. Battery replacement starts from AED 299 · 18-month warranty"
                 },
                   {
                     icon:<FaCar />,
                     title:"Accident Recovery & Vehicle Transport Dubai",
                     desc:"Been in an accident and need your vehicle moved safely? Our accident recovery team handles all vehicle types including damaged and non-drivable cars. We provide fully covered, professional transport to your chosen garage or home. Available 24/7 across Dubai, Abu Dhabi, and Sharjah. Accident recovery starts from AED 300"
                 },
        ]

// FIXED: Remove null fallbacks - default to English
const hero = locale === "ar" ? heroArabicContent : heroEnglishContent
const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
const data = locale === "ar" ? arabicContent : englishContent
const faqs = locale === "ar" ? arabicFaqs : englishFaqs

const batteryText = locale === "ar"
    ? {
        title1: "بطاريات",
        title2: "موثوقة",
        title3: "العلامات التجارية",
      }
    : {
        title1: "Reliable",
        title2: "Battery",
        title3: "Brand",
      }

const batteryBrands = [
    { image: varta, name: "Varta" },
    { image: acdelco, name: "AC Delco" },
    { image: bosh, name: "Bosch" },
    { image: amron, name: "Amaron" },
    { image: solite, name: "Solite" },
    { image: volcan, name: "Volcan" },
]


                     const text = locale === "ar"
  ? {
      desc: "ماركات السيارات التي نخدمها",
      title1: "يشمل جميع", 
      title2: "ماركات السيارات الرئيسية",
      viewAll: "عرض الكل",
    }
  : {
      desc: "Car Brands We Serve",
      title1: "24/7 Roadside Assistance ",
      title2: " for All Car Brands in Dubai & Abu Dhabi",
      viewAll: "View All",
    };

return (
    <div>
        <div className='sticky top-0'>
            <Hero hero={hero} herobg={herobg} />
        </div>
        
        <div className='bg-white rounded-t-4xl relative z-10'>
            <Car />
            <HowItWorks title={{
                part1:"How Our 24/7  ",
                highlighted:"Roadside Assistance",
                part2:" Works in Dubai & Abu Dhabi",
            }} />
              <Faild title='Our 24/7 Roadside Assistance Services in Dubai & Abu Dhabi' desc='For Emergency Call Now'  content={failContent} />
            <Service serviceContent={serviceContent} serviceImg={serviceImg} />
            <CarBrands text={text} />
            <Battery brands={batteryBrands} batteryText={batteryText} />
             <Serve desc="For Emergency RSA Call Us" span1='Why Every Driver in Dubai & Abu  ' span2='Dhabi Needs 24/7 Roadside Assistance' carIssuesFaqs={carIssuesFaqs}  />
            <WhyChooseUs title={{
                part1:"Why Every Driver in Dubai & Abu Dhabi ",
                highlighted:"Choose us for 24/7 Roadside Assistance"
            }}  data={data} />
            <Trusted />
            <SubLocation />
            <Faq title={{
                part1:"Frequently Asked  ",
                part2:"Question About 24/7",
                part3:" Roadside Assistance"
            }} faqs={faqs} />
            <Footer />
        </div>
    </div>
)
}

export default RoadSide