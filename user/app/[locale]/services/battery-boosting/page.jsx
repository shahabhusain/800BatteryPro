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
import herobg from '@/public/brands/serviceBanners/boost.webp'
import CarBrands from '@/app/components/Hero/CarBrands'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const BatteryBoosting = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "24/7 Car Battery Boosting",
        span2: " Services in Dubai"
    },
    desc1: "Get expert roadside assistance with free on-site testing and safe jump-starts in under 30 minutes.",
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
    title: "Stranded in Dubai or Abu Dhabi",
    services: [
        {
            id: 1,
            description: "with a dead car battery? Don't wait or take risks—call the experts who guarantee 24/7 roadside assistance and arrival in under 30 minutes! A dead vehicle battery disrupts your entire schedule. You need a fast, reliable team to get your car moving again safely. 800BatteryPro delivers premium 24/7 emergency battery boosting directly to your exact location. We dispatch certified technicians immediately so you never wait long in the heat. Our experts use advanced diagnostic technology to deliver a secure power surge. This precise method protects your car's sensitive internal computers from dangerous electrical spikes. If you need a replacement, we provide only premium branded batteries, delivered and installed at no extra cost. Using advanced installation technology, we ensure your vehicle's electronic systems remain protected and operational, so you can drive away with peace of mind. We pride ourselves on reliability, speed, and hassle-free service—no hidden fees, no compromises. Whether you're stuck at home, work, or on the road, our team is ready to get you moving again quickly and safely. Trust the UAE's leading experts in mobile car battery boosting and enjoy convenience with every call. Contact us now for immediate, reliable help."
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
        title: "Genuine Car Battery Replacement ",
        desc: "If you are stuck with a dead car battery or issues in your car electronic system. Don’t Panic !800BatteryPro provides you with 24/7 car battery replacement and free battery testing, which comes along with expert car electronic system repairs in Dubai. "
    },
    {
        icons: <FaSitemap />,
        title: "Certified Technicians & 5+ Years Of Experience",
        desc: "800BatteryPro has one of the best and trusted car service centers in Dubai. We have 50+ technicians with over 5+ years of experience working on premium car repairs delivering car jobs with 100 percent precision and customer satisfaction. Our team of technicians are all well-trained and certified by vendors to work on all major car brands."
    },
    {
        icons: <FaSitemap />,
        title: "OEM-Approved Spare Parts & Genuine Car Battery",
        desc: "Don’t worry 800BatteryPro only uses OEM-approved spare parts for your car. Our technicians only recommend genuine car batteries for installation if needed after a free battery testing. "
    },
    {
        icons: <FaSitemap />,
        title: "No Hidden Cost & Free Battery Testing",
        desc: "Unlike other service providers, 800BatteryPro provides every customer with free battery testing services with no hidden costs. If you need a replacement, our technicians will use a branded car battery for replacement services anywhere in Dubai and Abu Dhabi."
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
          question: "How quickly can you reach me in Dubai or Abu Dhabi?",
          answer: "We strategically place our fully-equipped service vehicles across both cities. This allows our technicians to reach your exact location in under 30 minutes, 24 hours a day, 7 days a week."
      },
      {
          question: "Will a jump-start damage my modern car?",
          answer: "No. Modern vehicles have complex electrical systems that require careful handling. We use advanced diagnostic tools and surge-protected equipment to boost your car safely, preventing any damage to your engine management, seat memory, or radio systems."
      },
      {
          question: "Do you charge for testing the battery?",
          answer: "We provide completely free battery testing. When our technicians arrive, they check the exact health of your battery to find the root issue before taking any action."
      },
      {
          question: "What happens if my car battery is completely dead?",
          answer: "If your battery cannot take a boost, we offer free delivery of a replacement. We stock premium branded batteries recommended by your manufacturer and install them using advanced technology to keep your vehicle running smoothly for years to come."
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

export default BatteryBoosting