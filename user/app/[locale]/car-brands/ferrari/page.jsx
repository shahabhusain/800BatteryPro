import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import serviceImg1 from '@/public/services/1.webp'
import serviceImg2 from '@/public/services/2.webp'
import serviceImg3 from '@/public/services/3.webp'
import serviceImg4 from '@/public/services/4.webp'
import { useLocale } from 'next-intl'
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/ferrari/1.webp'
   import carBrand2 from '@/public/brands/ferrari/2.webp'
    import carBrand3 from '@/public/brands/ferrari/3.webp'
     import carBrand4 from '@/public/brands/ferrari/4.webp'
      import carBrand5 from '@/public/brands/ferrari/5.webp'
       import carBrand6 from '@/public/brands/ferrari/6.webp'
        import carBrand7 from '@/public/brands/ferrari/7.webp'
         import carBrand8 from '@/public/brands/ferrari/8.webp'
          import carBrand9 from '@/public/brands/ferrari/9.webp'
           import carBrand10 from '@/public/brands/ferrari/10.webp' 
            import carBrand11 from '@/public/brands/ferrari/11.webp'
               import carBrand12 from '@/public/brands/ferrari/12.webp'
                  import carBrand13 from '@/public/brands/ferrari/13.webp'
                     import carBrand14 from '@/public/brands/ferrari/14.webp'
                        import carBrand15 from '@/public/brands/ferrari/15.webp'
                           import carBrand16 from '@/public/brands/ferrari/16.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/ferrari/service.webp"
import serviceImg5 from "@/public/brands/ferrari/service1.webp"
import bg from '@/public/brands/ferrari/bg.webp'
import Services from '@/app/components/locations/Services'
import Cards from '@/app/components/Hero/Cards'
import HowItWorks from '@/app/components/Hero/HowItWorks'

const Ferrari = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "Ferrari Car Battery & Advanced ",
    span2: "Repair Experts"
  },
  desc1: "Contact 800BatteryPro for Ferrari Battery Replacement in Dubai or anywhere in the UAE. ",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "بطارية فيراري ",
    span2: "وخبراء الإصلاح المتقدم"
  },
  desc1: "اتصل بـ 800BatteryPro لاستبدال بطارية فيراري في دبي أو في أي مكان في الإمارات العربية المتحدة.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Ferrari Experts in Dubai - From Car Battery Replacement To Car Scanning",
  services: [
    {
      id: 1,
      description: "Ferrari isn't just a car—it's a statement of performance and excellence. Ferrari - A car representing prestige and peak performance. Like any other Italian car brand, 800BatteryPro has certified Ferrari technicians for Ferrari battery replacement services in Dubai. Ferrari car batteries are engineered to sustain under high temperatures and provide support during peak performance. For car models like Ferrari SF90 XX Spider, F80, 849 Testarossa, Amalfi, 488 GTB, to the Portofino, Roma, or its SUV Purosangue, we provide both AGM Batteries and Advanced Lithium-Ion Batteries."
    },
    {
      id: 2,
      description: "AGM Batteries support both electrical systems for models featuring start-stop technology. AGM Batteries for Ferrari provide high performance, longevity, and resistance to vibrations in dynamic climates. For the hybrid or electric Ferrari Models, we recommend Lithium-Ion Batteries, which have greater energy density and exceptionally long lifetime cycles. To ensure peak performance and a smooth ride in a Ferrari, there is a requirement for regular maintenance and car diagnostics, which is essential for all Italian Car Brands. Our Certified Ferrari Technicians provide under 15-minute onsite battery replacements with full diagnostics and BMS resets. For Emergency Support call at +971528475675."
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "خبراء فيراري في دبي - من استبدال بطارية السيارة إلى فحص السيارة",
  services: [
    {
      id: 1,
      description: "فيراري ليست مجرد سيارة - إنها بيان للأداء والتميز. فيراري - سيارة تمثل المكانة والأداء العالي. مثل أي علامة تجارية أخرى للسيارات الإيطالية، لدى 800BatteryPro فنيو فيراري معتمدون لخدمات استبدال بطارية فيراري في دبي. بطاريات سيارات فيراري مصممة لتحمل درجات الحرارة العالية وتوفير الدعم أثناء الأداء العالي. لموديلات السيارات مثل فيراري SF90 XX Spider و F80 و 849 Testarossa و Amalfi و 488 GTB وصولاً إلى بورتو فينو وروما أو سيارات الدفع الرباعي Purosangue، نوفر كلاً من بطاريات AGM وبطاريات الليثيوم أيون المتقدمة."
    },
    {
      id: 2,
      description: "تدعم بطاريات AGM كلا النظامين الكهربائيين للموديلات المزودة بتقنية التشغيل والإيقاف. توفر بطاريات AGM لفيراري أداءً عاليًا وطول عمر ومقاومة للاهتزازات في المناخات الديناميكية. بالنسبة لموديلات فيراري الهجينة أو الكهربائية، نوصي ببطاريات الليثيوم أيون، التي تتمتع بكثافة طاقة أكبر ودورات عمرية طويلة بشكل استثنائي. لضمان الأداء الأمثل والقيادة السلسة في فيراري، هناك حاجة للصيانة الدورية وفحص السيارة، وهو أمر ضروري لجميع ماركات السيارات الإيطالية. يقدم فنيو فيراري المعتمدون لدينا استبدال بطارية في الموقع خلال أقل من 15 دقيقة مع فحص كامل وإعادة ضبط BMS. للحصول على دعم طارئ، اتصل على +971528475675."
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Trusted Maserati Service Center in Dubai & Abu Dhabi",
  services: [
    {
      id: 1,
      description: "800BatteryPro has years of experience in Ferrari repair and maintenance services. Trusted by thousands of Emirates and expats as one of the best Ferrari Service Centers in the UAE. Our certified Ferrari experts use genuine Ferrari parts and check with every car owner before installation, with a 100 percent success rate in almost every car job. Our team is available 24/7 for roadside assistance and onsite car battery replacement across the UAE. You can trust us with any routine servicing or complex repairs in any Ferrari model, from full car scanning and diagnostics, car battery check-ups & replacement, to advanced car programming services. Contact one of our experts to book your next appointment at 800BatteryPro."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة فيراري موثوق في دبي وأبوظبي",
  services: [
    {
      id: 1,
      description: "يمتلك 800BatteryPro سنوات من الخبرة في خدمات إصلاح وصيانة فيراري. موثوق به من قبل الآلاف من المواطنين والمقيمين كأحد أفضل مراكز خدمة فيراري في الإمارات. يستخدم خبراء فيراري المعتمدون لدينا قطع غيار فيراري الأصلية ويتحققون مع كل مالك سيارة قبل التركيب، مع معدل نجاح 100% في كل مهمة سيارة تقريبًا. فريقنا متاح 24/7 للمساعدة على الطريق واستبدال بطارية السيارة في الموقع في جميع أنحاء الإمارات. يمكنك الوثوق بنا في أي خدمة روتينية أو إصلاحات معقدة لأي موديل فيراري، بدءًا من الفحص الكامل للسيارة والتشخيص، وفحص البطارية واستبدالها، وصولاً إلى خدمات برمجة السيارات المتقدمة. اتصل بأحد خبرائنا لحجز موعدك القادم في 800BatteryPro."
    },
  ]
}

const englishServices = [
  {
    img: serviceImg1,
    title: "Premium 24/7 Customer",
    desc: "800BatteryPro has a dedicated customer support team active 24/7 for all GMC car battery replacement and advanced repair services in Dubai and Abu Dhabi."
  },
  {
    img: serviceImg2,
    title: "Certified GMC Specialists",
    desc: "Our technicians have 5+ years of experience working on all American Car brands including the GMC (General Motors Truck Company)."
  },
  {
    img: serviceImg3,
    title: "Genuine GMC Parts",
    desc: "Our certified GMC specialists only use genuine battery and OEM-approved spare parts for every car job."
  },
  {
    img: serviceImg4,
    title: "Car Battery Under 15 Minutes",
    desc: "Our 24/7 road side assistance for ensuring you stay safe on the road. We offer free battery testing and free car battery delivery with no hidden charges."
  }
]

const arabicServices = [
  {
    img: serviceImg1,
    title: "دعم عملاء مميز 24/7",
    desc: "لدى 800BatteryPro فريق دعم عملاء مخصص يعمل 24/7 لجميع خدمات استبدال بطارية فيراري والإصلاح المتقدم في دبي وأبوظبي."
  },
  {
    img: serviceImg2,
    title: "فنيو فيراري معتمدون",
    desc: "يتمتع فنيونا بخبرة تزيد عن 5 سنوات في العمل على جميع ماركات السيارات الإيطالية بما في ذلك فيراري."
  },
  {
    img: serviceImg3,
    title: "قطع غيار فيراري أصلية",
    desc: "يستخدم فنيو فيراري المعتمدون لدينا فقط البطاريات الأصلية وقطع الغيار المعتمدة من OEM لكل مهمة سيارة."
  },
  {
    img: serviceImg4,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "مساعدتنا على الطريق 24/7 لضمان سلامتك على الطريق. نقدم فحص بطارية مجاني وتوصيل بطارية سيارة مجاني بدون رسوم خفية."
  }
]

const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Premium Customer Support",
    desc: "For every car repair and battery replacement services for Ferrari we provide compassionate customer support around the clock 24/7."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Ferrari specialists",
    desc: "800BatteryPro has a team of certified Ferrari specialists who have years of experience working on premium models of Ferrari. You can trust us with different issues related to exotic brands."
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Ferrari Parts",
    desc: "Our technicians at 800BatteryPro only use the genuine Ferrari parts which are OEM-approved and recommended by the manufacturer."
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "If you are stranded somewhere on the road anywhere in Dubai and Abu Dhabi, call us at +971528475675 for quick roadside assistance services. We offer free car battery and battery testing services to all our customers."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز",
    desc: "لكل خدمات إصلاح السيارات واستبدال البطاريات لفيراري، نقدم دعم عملاء متعاطف على مدار الساعة 24/7."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو فيراري معتمدون",
    desc: "لدى 800BatteryPro فريق من فنيي فيراري المعتمدين الذين لديهم سنوات من الخبرة في العمل على الموديلات الفاخرة من فيراري. يمكنك الوثوق بنا في مختلف المشكلات المتعلقة بالعلامات التجارية الفاخرة."
  },
  {
    icons: <FaSitemap />,
    title: "قطع غيار فيراري أصلية",
    desc: "يستخدم فنيونا في 800BatteryPro فقط قطع غيار فيراري الأصلية المعتمدة من OEM والتي يوصي بها المصنع."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "إذا كنت عالقًا في مكان ما على الطريق في أي مكان في دبي وأبوظبي، فاتصل بنا على +971528475675 للحصول على خدمات مساعدة سريعة على الطريق. نقدم فحص بطارية مجاني وتوصيل بطارية سيارة مجاني لجميع عملائنا."
  }
]

const englishFaqs = [
  {
    question: "How often should a Ferrari battery be replaced in Dubai?",
    answer: "To maintain peak performance and smooth ride for any of the Ferrari Models, you should do a routine battery check-up, which can be done after 10,000 KM or once a year. In the UAE, due to extreme heat, the car battery suffers, which needs attention. To keep your car optimized, reach out to certified Ferrari experts such as 800BatteryPro at +971528475675."
  },
  {
    question: "Do you replace both auxiliary and main batteries?",
    answer: "Yes, 800BatteryPro's technicians are specialized in replacing both auxiliary and main batteries, such as in Ferrari hybrid models like SF90 and LaFerrari, as we are experts in handling 12V auxiliary battery swaps."
  },
  {
    question: "Will you reset the battery management system?",
    answer: "Yes, our Ferrari technicians can reset both the BMS (Battery Management System) and reprogramming of car battery data into the ECU (Electronic Control Unit)."
  },
  {
    question: "Do you support Ferrari models not sold in the UAE?",
    answer: "Yes, 800BatteryPro ensures all imports and legacy models of Ferrari get genuine car batteries, as we serve every model and variant of the brand."
  },
  {
    question: "Do you use OEM-equivalent batteries?",
    answer: "Yes, 800BatteryPro uses OEM-equivalent batteries, which even exceed the Ferrari Standards, as we only source car batteries from Premium Brands."
  },
  {
    question: "Can I get my Ferrari battery replaced at home?",
    answer: "Yes, through onsite car Ferrari Battery replacement services, you can get it done, even get battery boosting, car programming and other services right at your doorstep across the UAE."
  },
  {
    question: "Will I lose my car's settings?",
    answer: "No, our Ferrari experts only use reliable voltage-holding devices for retaining car settings and avoiding memory losses in your car database."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, 800BatteryPro offers 18 months of car battery warranty depending upon the battery brand and type. It may vary from model to model and the type of battery being replaced."
  },
]

const arabicFaqs = [
  {
    question: "كم مرة يجب استبدال بطارية فيراري في دبي؟",
    answer: "للحفاظ على الأداء الأمثل والقيادة السلسة لأي من موديلات فيراري، يجب إجراء فحص دوري للبطارية، والذي يمكن إجراؤه بعد 10000 كيلومتر أو مرة واحدة في السنة. في الإمارات، بسبب الحرارة الشديدة، تعاني بطارية السيارة مما يحتاج إلى عناية. للحفاظ على سيارتك محسنة، تواصل مع خبراء فيراري المعتمدين مثل 800BatteryPro على +971528475675."
  },
  {
    question: "هل تستبدلون البطاريات المساعدة والرئيسية؟",
    answer: "نعم، فنيو 800BatteryPro متخصصون في استبدال كل من البطاريات المساعدة والرئيسية، كما هو الحال في موديلات فيراري الهجينة مثل SF90 و LaFerrari، حيث نحن خبراء في التعامل مع تبديل البطارية المساعدة 12 فولت."
  },
  {
    question: "هل ستعيدون ضبط نظام إدارة البطارية؟",
    answer: "نعم، يمكن لفنيي فيراري لدينا إعادة ضبط كل من BMS (نظام إدارة البطارية) وإعادة برمجة بيانات بطارية السيارة في ECU (وحدة التحكم الإلكترونية)."
  },
  {
    question: "هل تدعمون موديلات فيراري غير المباعة في الإمارات؟",
    answer: "نعم، يضمن 800BatteryPro حصول جميع موديلات فيراري المستوردة والقديمة على بطاريات سيارات أصلية، حيث نخدم كل موديل ونسخة من العلامة التجارية."
  },
  {
    question: "هل تستخدمون بطاريات مكافئة لمعايير OEM؟",
    answer: "نعم، يستخدم 800BatteryPro بطاريات مكافئة لمعايير OEM، والتي تتجاوز حتى معايير فيراري، لأننا نستورد بطاريات السيارات فقط من علامات تجارية فاخرة."
  },
  {
    question: "هل يمكنني استبدال بطارية فيراري في المنزل؟",
    answer: "نعم، من خلال خدمات استبدال بطارية فيراري في الموقع، يمكنك إنجاز ذلك، بل والحصول على تعزيز البطارية وبرمجة السيارة وخدمات أخرى مباشرة على عتبة دارك في جميع أنحاء الإمارات."
  },
  {
    question: "هل سأفقد إعدادات سيارتي؟",
    answer: "لا، يستخدم خبراء فيراري لدينا فقط أجهزة موثوقة لحفظ الجهد للاحتفاظ بإعدادات السيارة وتجنب فقدان الذاكرة في قاعدة بيانات سيارتك."
  },
  {
    question: "هل تقدمون ضمانًا؟",
    answer: "نعم، يقدم 800BatteryPro 18 شهرًا من ضمان بطارية السيارة اعتمادًا على علامة البطارية ونوعها. قد يختلف من موديل إلى آخر ونوع البطارية التي يتم استبدالها."
  },
]

const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
const services = locale === "en" ? englishServices : locale === "ar" ? arabicServices : null
const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
const serviceContent1 = locale === "ar" ? serviceArabicContent1 : serviceEnglishContent1
const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
const faqs = locale === "ar" ? arabicFaqs : englishFaqs

const text = locale === "ar"
  ? {
      desc: "ماركات السيارات التي نخدمها",
      title1: "متوافق مع جميع",
      title2: "ماركات السيارات الرئيسية",
    }
  : {
      desc: "Ferrari Car Models We Serve",
      title1: "Includes All",
      title2: "Major Models & Variants",
    }

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

                     const brands = [
        {
            desc: "849 Testarossa",
            car: carBrand1,
        },
        {
            desc: "Ferrari Amalfi",
            car: carBrand2,
        },
        {
            desc: "Ferrari Purosangue",
            car: carBrand3,
        },
        {
            desc: "Ferrari 12Cilindri Spider",
            car: carBrand4,
        },
        {
            desc: "Ferrari 12Cilindri",
            car: carBrand5,
        },
        {
            desc: "296 GTS",
            car: carBrand6,
        },
        {
            desc: "296 GTB",
            car: carBrand7,
        },
        {
            desc: "849 Testarossa Spider",
            car: carBrand8,
        },
          {
            desc: "849 Testarossa",
            car: carBrand9,
        },
          {
            desc: "296 Speciale",
            car: carBrand10,
        },
         {
            desc: " 296 Speciale A",
            car: carBrand11,
        },
         {
            desc: "SF90 XX Stradale",
            car: carBrand12,
        },
         {
            desc: " 812 Competizione A ",
            car: carBrand13,
        },
         {
            desc: "812 Competizione",
            car: carBrand14,
        },
         {
            desc: "Daytona SP3",
            car: carBrand15,
        },

         {
            desc: "La Ferrari",
            car: carBrand16,
        },
        
                  ]
              
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
      <div className='sticky top-0 '>  {/* Added z-index */}
        <Hero hero={hero} herobg={bg} />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
             <Cards />
            <Services />
            <HowItWorks />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands text={text} brands={brands} />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <Service serviceContent={serviceContent1} serviceImg={serviceImg5} />
            <WhyChooseUs data={data} />
            <Faq faqs={faqs} />
           <Trusted />
           <Footer />
        </div>
    </div>
  )
}

export default Ferrari