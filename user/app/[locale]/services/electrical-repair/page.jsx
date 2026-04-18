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


const ElectricalRepair = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "A-Z Car Electrical Repair",
        span2: "Services in Dubai"
    },
    desc1: "800BatteryPro has a team of certified technicians who offer premium car electrical repair services in Dubai. Get your free car inspection by calling us at +971528475675.",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "خدمات إصلاح الكهرباء الشاملة للسيارات",
        span2: "في دبي"
    },
    desc1: "يضم 800BatteryPro فريقاً من الفنيين المعتمدين الذين يقدمون خدمات متميزة لإصلاح كهرباء السيارات في دبي. احصل على فحص مجاني لسيارتك بالاتصال بنا على +971528475675.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Service Section
const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "800BatteryPro Reliable Electrical Car & Battery Services",
    services: [
        {
            id: 1,
            description: "We have 5+ years of experience serving our loyal customer with premium electrical car repairs in Dubai and other Emirates. With a team of 50+ trained car electricians, who are expert in all major American and European Car brands, we deliver every minor and major car job with 100 percent customer satisfaction. 800BatteryPro has a well equipped service center with the latest technology and all the essential equipments to get your car back on road with safety and luxury. If you feel any malfunctioning hardware or electrical part of your car, book a free inspection with us. Never take risk upon your safety, do a routine car checkup each 10,000 KM or per year. No matter if you have a latest or old car, electrical system plays a significant role in keeping your performance at peak. Never compromise on your comfort, call one of our technician to fix your car efficiently. We work on different parts of your car electrical system including the radiator fan replacement, xenon headlight adjustment, wiper motor replacement, and door window regulator replacement etc."
        },
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "800BatteryPro خدمات موثوقة للسيارات الكهربائية والبطاريات",
    services: [
        {
            id: 1,
            description: "لدينا أكثر من 5 سنوات من الخبرة في خدمة عملائنا المخلصين من خلال إصلاحات السيارات الكهربائية المتميزة في دبي والإمارات الأخرى. مع فريق من أكثر من 50 فني كهرباء سيارات مدربين، وهم خبراء في جميع ماركات السيارات الأمريكية والأوروبية الكبرى، نقدم كل مهمة سيارة صغيرة وكبيرة بنسبة رضا عملاء 100٪. يضم 800BatteryPro مركز خدمة مجهز تجهيزاً جيداً بأحدث التقنيات وجميع المعدات الأساسية لإعادة سيارتك إلى الطريق بأمان وراحة. إذا شعرت بوجود أي خلل في أي جزء ميكانيكي أو كهربائي في سيارتك، فاحجز فحصاً مجانياً معنا. لا تخاطر أبداً على سلامتك، قم بفحص روتيني للسيارة كل 10,000 كم أو كل عام. بغض النظر عما إذا كانت سيارتك حديثة أو قديمة، فإن النظام الكهربائي يلعب دوراً مهماً في الحفاظ على أدائك في ذروته. لا تتنازل أبداً عن راحتك، اتصل بأحد فنيينا لإصلاح سيارتك بكفاءة. نحن نعمل على أجزاء مختلفة من النظام الكهربائي لسيارتك بما في ذلك استبدال مروحة الرادياتير، ضبط المصابيح الأمامية الزينون، استبدال محرك المساحات، واستبدال منظم نافذة الباب، وغيرها."
        },
    ]
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: "Certified Car Technicians",
        desc: "Our team of technicians are all qualified and certified by major car brands. With years of experience in delivering every car job with 100% customer satisfaction and efficiency. You can trust 800BatteryPro for your next car job."
    },
    {
        icons: <FaSitemap />,
        title: "Advanced Diagnostic Tools",
        desc: "800BatteryPro has a well equipped car service center in Dubai and Abu Dhabi. With the availability of latest equipment and technology our team of experts is capable of using next-gen tools to solve every electrical system issue. We do complete car scanning and diagnostics for every American and European car brand."
    },
    {
        icons: <FaSitemap />,
        title: "Fast Turnaround Times",
        desc: "800BatteryPro only delivers excellence with efficiency. Our team of technicians ensures your car problem is solved before it leaves our workshop. With strict quality control and check on every car job you can trust us for every minor and major car job."
    },
    {
        icons: <FaSitemap />,
        title: "Premium Vehicle Expertise",
        desc: "No matter if it's exotic, sports track, ultra luxury or any other premium car brand. 800BatteryPro has the right team of technicians who knows how to deliver every car job with 100 percent customer satisfaction and precision. Not only this, every car repair job is market competitive in pricing."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "فنيو سيارات معتمدون",
        desc: "فريق الفنيين لدينا جميعهم مؤهلون ومعتمدون من قبل ماركات السيارات الكبرى. مع سنوات من الخبرة في تقديم كل مهمة سيارة بنسبة رضا عملاء 100٪ وكفاءة. يمكنك الوثوق بـ 800BatteryPro لمهمة سيارتك القادمة."
    },
    {
        icons: <FaSitemap />,
        title: "أدوات تشخيص متقدمة",
        desc: "يضم 800BatteryPro مركز خدمة سيارات مجهز تجهيزاً جيداً في دبي وأبو ظبي. مع توفر أحدث المعدات والتقنيات، فإن فريق خبرائنا قادر على استخدام أدوات الجيل القادم لحل أي مشكلة في النظام الكهربائي. نقوم بفحص وتشخيص كامل للسيارة لكل ماركة سيارات أمريكية وأوروبية."
    },
    {
        icons: <FaSitemap />,
        title: "أوقات تسليم سريعة",
        desc: "يقدم 800BatteryPro التميز فقط مع الكفاءة. يضمن فريق الفنيين لدينا حل مشكلة سيارتك قبل أن تغادر ورشة العمل. مع مراقبة الجودة الصارمة والفحص لكل مهمة سيارة، يمكنك الوثوق بنا لكل مهمة سيارة صغيرة وكبيرة."
    },
    {
        icons: <FaSitemap />,
        title: "خبرة في المركبات الفاخرة",
        desc: "سواء كانت سيارة فاخرة أو رياضية أو فائقة الفخامة أو أي ماركة سيارات فاخرة أخرى. يمتلك 800BatteryPro الفريق المناسب من الفنيين الذين يعرفون كيفية تقديم كل مهمة سيارة بدقة ورضا عملاء بنسبة 100٪. ليس هذا فحسب، بل كل مهمة إصلاح سيارة تكون بأسعار تنافسية في السوق."
    }
]

// FAQs Section
const englishFaqs = [
    {
        question: "How accurate are your electrical repair services?",
        answer: "800BatteryPro has 5+ years of experience with two fully equipped service centres in Dubai and Abu Dhabi. We have served more than 10000+ customers in the UAE. You can trust our expertise and certified car technicians for fixing any of your complex electrical issues."
    },
    {
        question: "What types of computer and module repairs do you handle?",
        answer: "Our exotic car experts manage a wide range of complex electronic fixes to keep your car running smoothly. 800BatteryPro provides specialized ECU repair, Car ABS repair, and Car BCM repair services. We also perform TCM repair service and Car PCB repair to ensure your transmission and main control boards work flawlessly."
    },
    {
        question: "Can you help if my car is stuck in the sand?",
        answer: "It really depends upon your car brand and model, along with the severity of the electronic system issue you are facing. If it's a minor issue it may range on the lower range but if it's something related to the core electrical system then you might need to set your budget a bit higher for fixing the issue. Fortunately you have 800BatteryPro who provides you with market competitive pricing with OEM-approved spare parts used for fixing every issue in your car. Contact us for more details we will share a custom quote."
    },
    {
        question: "What are the signs of electrical problems in a car?",
        answer: "If you face any of the below signs in your car you should contact 800BatteryPro as soon as possible: If you smell any burning odour in your car or surrounding the bonnet then it needs to be checked. You face issue starting your engine at first try. If you see any corrosion on any of the battery terminals. Malfunction of the Power Windows or locking system. You hear any click sound when turning on the key."
    },
]

const arabicFaqs = [
    {
        question: "ما مدى دقة خدمات إصلاح الكهرباء لديكم؟",
        answer: "يمتلك 800BatteryPro أكثر من 5 سنوات من الخبرة مع مركزين خدمة مجهزين بالكامل في دبي وأبو ظبي. لقد خدمنا أكثر من 10000+ عميل في الإمارات. يمكنك الوثوق بخبرتنا وفنيي السيارات المعتمدين لدينا لإصلاح أي من مشاكلك الكهربائية المعقدة."
    },
    {
        question: "ما أنواع إصلاحات الكمبيوتر والوحدات التي تتعاملون معها؟",
        answer: "يدير خبراء السيارات الفاخرة لدينا مجموعة واسعة من الإصلاحات الإلكترونية المعقدة للحفاظ على سيارتك تعمل بسلاسة. يوفر 800BatteryPro خدمات إصلاح ECU متخصصة، إصلاح ABS للسيارة، وخدمات إصلاح BCM للسيارة. نقوم أيضاً بخدمة إصلاح TCM وإصلاح PCB للسيارة لضمان عمل ناقل الحركة ولوحات التحكم الرئيسية بشكل لا تشوبه شائبة."
    },
    {
        question: "هل يمكنكم المساعدة إذا كانت سيارتي عالقة في الرمال؟",
        answer: "يعتمد ذلك حقاً على ماركة سيارتك وطرازها، بالإضافة إلى شدة مشكلة النظام الكهربائي التي تواجهها. إذا كانت مشكلة بسيطة، فقد يكون النطاق السعري منخفضاً، ولكن إذا كانت شيئاً متعلقاً بالنظام الكهربائي الأساسي، فقد تحتاج إلى تحديد ميزانيتك أعلى قليلاً لإصلاح المشكلة. لحسن الحظ، لديك 800BatteryPro الذي يوفر لك أسعاراً تنافسية في السوق مع استخدام قطع غيار معتمدة من المصنع لإصلاح كل مشكلة في سيارتك. اتصل بنا للحصول على مزيد من التفاصيل وسنشاركك عرض سعر مخصص."
    },
    {
        question: "ما هي علامات المشاكل الكهربائية في السيارة؟",
        answer: "إذا واجهت أي من العلامات التالية في سيارتك، فيجب عليك الاتصال بـ 800BatteryPro في أقرب وقت ممكن: إذا شممت أي رائحة احتراق في سيارتك أو حول غطاء المحرك، فهذا يحتاج إلى فحص. إذا واجهت مشكلة في تشغيل محركك من المحاولة الأولى. إذا رأيت أي تآكل على أي من أطراف البطارية. خلل في نظام النوافذ الكهربائية أو نظام القفل. إذا سمعت أي صوت نقر عند إدارة المفتاح."
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

export default ElectricalRepair