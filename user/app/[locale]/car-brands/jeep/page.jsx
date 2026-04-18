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
  import carBrand1 from '@/public/brands/jeep/1.webp'
   import carBrand2 from '@/public/brands/jeep/2.webp'
    import carBrand3 from '@/public/brands/jeep/3.webp'
     import carBrand4 from '@/public/brands/jeep/4.webp'
      import carBrand5 from '@/public/brands/jeep/5.webp'
       import carBrand6 from '@/public/brands/jeep/6.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/jeep/service.webp"
import serviceImg5 from "@/public/brands/jeep/service1.webp"
import bg from '@/public/brands/jeep/bg.webp'
import Services from '@/app/components/locations/Services'
import Cards from '@/app/components/Hero/Cards'
import HowItWorks from '@/app/components/Hero/HowItWorks'

const Jeep = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "Jeep Car Battery Replacement & ",
    span2: "Advanced Repairs"
  },
  desc1: "Don't stress if you are stranded with your dead Jeep battery! 800BatteryPro provides premium Car Battery Replacement Under 30 Minutes, With Free Battery Boosting & Advance Repairs in Dubai.",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "استبدال بطارية جيب ",
    span2: "وإصلاحات متقدمة"
  },
  desc1: "لا تقلق إذا كنت عالقًا مع بطارية جيب الفارغة! يقدم 800BatteryPro خدمة استبدال بطارية سيارة فاخرة خلال أقل من 30 دقيقة، مع تعزيز بطارية مجاني وإصلاحات متقدمة في دبي.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Jeep Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "Jeep is one of the major American car brands, with a variety of premium and off-road models. 800BatteryPro has a team of certified Jeep specialist, who only uses OEM-approved batteries and the latest technology to complete every job with 100 percent customer satisfaction. Our Jeep specialists will do an on-site free battery checkup, followed by a car battery replacement using the latest technology and equipment. If you are stuck somewhere with a dead car battery or a malfunctioning electronic system, contact us for immediate roadside assistance at +971528475675."
    },
    {
      id: 2,
      description: "To make sure you don't face any car battery-related issues, you should do a routine battery checkup after each 10,000 Km's or once a year. Our technicians only use OEM-approved spare parts and genuine car batteries for every car job. If you are stranded somewhere on the road, you should get our 24/7 roadside assistance instantly with free Car battery boosting services. We are just a call away at +971528475675."
    },
    {
      id: 3,
      description: "800BatteryPro offers the following types of Jeep batteries: Our American car Specialists recommend an AGM (Absorbent Glass Mat) battery for Jeep, because it's much more durable and provides support for the vehicle's peak performance."
    },
    {
      id: 4,
      description: "Types of Jeep Car Batteries We Provide: Jeep AGM BATTERY: AGM car batteries are trusted by many for their stable power output, even in harsh environments and longevity. However, like any other car battery, AGM also needs a routine checkup after 10,000 KM or once a year."
    },
    {
      id: 5,
      description: "800BatteryPro provides 24/7 roadside assistance with under 15 minutes of on-site Jeep car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months. For premium Jeep Battery replacement and advanced repairs, contact us now at +971528475675 or book a free car inspection appointment right now!"
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية جيب وخدمات الإصلاح المتقدمة",
  services: [
    {
      id: 1,
      description: "جيب هي واحدة من أكبر ماركات السيارات الأمريكية، مع مجموعة متنوعة من الموديلات الفاخرة والمخصصة للطرق الوعرة. لدى 800BatteryPro فريق من فنيي جيب المعتمدين، الذين يستخدمون فقط البطاريات المعتمدة من OEM وأحدث التقنيات لإكمال كل مهمة بنسبة رضا عملاء 100%. سيقوم فنيو جيب لدينا بفحص بطارية مجاني في الموقع، يليه استبدال بطارية السيارة باستخدام أحدث التقنيات والمعدات. إذا كنت عالقًا في مكان ما مع بطارية سيارة فارغة أو نظام إلكتروني معطل، فاتصل بنا للحصول على مساعدة فورية على الطريق على +971528475675."
    },
    {
      id: 2,
      description: "للتأكد من أنك لا تواجه أي مشاكل متعلقة ببطارية السيارة، يجب عليك إجراء فحص دوري للبطارية بعد كل 10000 كيلومتر أو مرة واحدة في السنة. يستخدم فنيونا فقط قطع الغيار المعتمدة من OEM وبطاريات السيارات الأصلية لكل مهمة سيارة. إذا كنت عالقًا في مكان ما على الطريق، فيجب عليك الحصول على مساعدتنا على الطريق 24/7 فورًا مع خدمات تعزيز بطارية السيارة المجانية. نحن على بعد مكالمة هاتفية على +971528475675."
    },
    {
      id: 3,
      description: "يقدم 800BatteryPro الأنواع التالية من بطاريات جيب: يوصي خبراء السيارات الأمريكية لدينا ببطارية AGM (مات الزجاج الماص) لجيب، لأنها أكثر متانة وتوفر الدعم للأداء الأمثل للسيارة."
    },
    {
      id: 4,
      description: "أنواع بطاريات جيب التي نقدمها: بطارية جيب AGM: بطاريات AGM موثوقة من قبل الكثيرين لإخراج الطاقة المستقر، حتى في البيئات القاسية وطول العمر. ومع ذلك، مثل أي بطارية سيارة أخرى، تحتاج AGM أيضًا إلى فحص روتيني بعد 10000 كيلومتر أو مرة واحدة في السنة."
    },
    {
      id: 5,
      description: "يوفر 800BatteryPro مساعدة على الطريق 24/7 مع توصيل بطارية جيب في الموقع خلال أقل من 15 دقيقة في أي مكان في دبي. اختبار البطارية والتوصيل مجاني، بينما يصل ضمان البطارية إلى 18 شهرًا. للحصول على استبدال بطارية جيب فاخر وإصلاحات متقدمة، اتصل بنا الآن على +971528475675 أو احجز موعدًا لفحص سيارتك المجاني الآن!"
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Jeep Service Center in Dubai – Premium American Car Battery Replacement",
  services: [
    {
      id: 1,
      description: "We have well-equipped Jeep car service centers in Dubai and Abu Dhabi, delivering excellence in battery replacement, car programming, electrical, and mechanical repair works. With a team of over 50+ certified Jeep technicians available 24/7 for any emergency roadside assistance and free inspection of your car battery. 800BatteryPro has years of experience serving residents of the Emirates with premium Jeep car batteries and advance repair services. We only use OEM-approved spare parts and genuine Jeep batteries for all our customers. You can reserve your slot for your next Battery Check-up with the best Jeep experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة جيب في دبي – استبدال بطارية سيارة أمريكية فاخرة",
  services: [
    {
      id: 1,
      description: "لدينا مراكز خدمة سيارات جيب مجهزة تجهيزًا جيدًا في دبي وأبوظبي، تقدم التميز في استبدال البطاريات وبرمجة السيارات وأعمال الإصلاح الكهربائي والميكانيكي. مع فريق يضم أكثر من 50 فني جيب معتمد متاح 24/7 لأي مساعدة طارئة على الطريق وفحص مجاني لبطارية سيارتك. لدى 800BatteryPro سنوات من الخبرة في خدمة سكان الإمارات ببطاريات جيب الفاخرة وخدمات الإصلاح المتقدمة. نستخدم فقط قطع الغيار المعتمدة من OEM وبطاريات جيب الأصلية لجميع عملائنا. يمكنك حجز موعدك لفحص البطارية القادم مع أفضل خبراء جيب في دبي. اتصل بنا على +971528475675 للحصول على مساعدة طارئة على الطريق 24/7."
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
    desc: "لدى 800BatteryPro فريق دعم عملاء مخصص يعمل 24/7 لجميع خدمات استبدال بطارية جيب والإصلاح المتقدم في دبي وأبوظبي."
  },
  {
    img: serviceImg2,
    title: "فنيو جيب معتمدون",
    desc: "يتمتع فنيونا بخبرة تزيد عن 5 سنوات في العمل على جميع ماركات السيارات الأمريكية بما في ذلك جيب."
  },
  {
    img: serviceImg3,
    title: "قطع غيار جيب أصلية",
    desc: "يستخدم فنيو جيب المعتمدون لدينا فقط البطاريات الأصلية وقطع الغيار المعتمدة من OEM لكل مهمة سيارة."
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
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides 24/7 customer support to all its customers for premium car battery and advance repair services."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Jeep Specialists",
    desc: "We have a team of certified technicians who are experienced in working on all American car brands including the Jeep."
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Jeep Parts & OEM-Approved Battery",
    desc: "Our team of technicians only use the OEM-approved spare parts and genuine battery for all its models."
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "If you are stuck somewhere due to a dead car battery anywhere in Dubai and Abu Dhabi, then you can call us at +971 528475675."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز 24/7",
    desc: "يقدم 800BatteryPro دعم عملاء 24/7 لجميع عملائه لخدمات بطارية السيارة الفاخرة والإصلاح المتقدم."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو جيب معتمدون",
    desc: "لدينا فريق من الفنيين المعتمدين الذين لديهم خبرة في العمل على جميع ماركات السيارات الأمريكية بما في ذلك جيب."
  },
  {
    icons: <FaSitemap />,
    title: "قطع غيار جيب أصلية وبطارية معتمدة من OEM",
    desc: "يستخدم فريق فنيينا فقط قطع الغيار المعتمدة من OEM والبطارية الأصلية لجميع موديلاتها."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "إذا كنت عالقًا في مكان ما بسبب بطارية سيارة فارغة في أي مكان في دبي وأبوظبي، فيمكنك الاتصال بنا على +971528475675."
  }
]

const englishFaqs = [
  {
    question: "What type of Battery does my Jeep need?",
    answer: "At 800BatteryPro, we have certified Jeep technicians who only recommends the AGM (Absorbent Glass Mat) car batteries. Because of its durability, high-density, and peak performance support features. You can book your next battery replacement by contacting us at 800BatteryPro right now!"
  },
  {
    question: "How long does a Jeep battery last?",
    answer: "A genuine Jeep Battery may last from 2-5 years, which directly depends upon the mileage of your car, the climate conditions in which you drive the car, and how you drive. Which needs a routine check-up after a specific time, most commonly yearly or after 10,000 KM. You can book a free battery check-up at 800BatteryPro right now!"
  },
  {
    question: "How much does it cost to replace a Jeep battery?",
    answer: "Jeep battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes free installations and system check-ups."
  },
  {
    question: "Do I need to reset my Jeep system after battery replacement?",
    answer: "Yes, our Jeep specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
  },
  {
    question: "Do you offer on-site Jeep battery replacement in Dubai?",
    answer: "Yes, 800BatteryPro offers on-site Jeep battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
  },
  {
    question: "Any American Car Experts in Dubai?",
    answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of American car experts in Dubai. We have a well-equipped service center with the latest technology used for every German car repair job. We treat every car brand, including Jeep, GMC, Chevrolet, and Tesla, etc. Call us now for any American car battery replacement services at +971528475675."
  },
  {
    question: "Do we provide American Car Battery Replacement in Abu Dhabi?",
    answer: "Yes, 800BatteryPro has well-equipped service centers in Dubai and Abu Dhabi. We treat every American car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services."
  },
]

const arabicFaqs = [
  {
    question: "ما نوع البطارية التي تحتاجها سيارة جيب الخاصة بي؟",
    answer: "في 800BatteryPro، لدينا فنيو جيب معتمدون يوصون فقط ببطاريات AGM (مات الزجاج الماص) للسيارات. بسبب متانتها وكثافتها العالية وميزات دعم الأداء الأمثل. يمكنك حجز استبدال البطارية القادم عن طريق الاتصال بنا في 800BatteryPro الآن!"
  },
  {
    question: "كم تدوم بطارية جيب؟",
    answer: "قد تدوم بطارية جيب الأصلية من 2-5 سنوات، والتي تعتمد بشكل مباشر على عدد الكيلومترات التي تقطعها سيارتك، وظروف المناخ التي تقود فيها السيارة، وكيفية قيادتك. مما يحتاج إلى فحص روتيني بعد وقت محدد، الأكثر شيوعًا سنويًا أو بعد 10000 كيلومتر. يمكنك حجز فحص بطارية مجاني في 800BatteryPro الآن!"
  },
  {
    question: "كم تكلفة استبدال بطارية جيب؟",
    answer: "تعتمد تكلفة استبدال بطارية جيب على نوع وموديل سيارتك، كما تعتمد أيضًا على نوع البطارية. عندما يتعلق الأمر بـ 800BatteryPro، يتراوح متوسط أسعار بطارية السيارة من 500 إلى 1500 درهم إماراتي في دبي وأبوظبي، والذي يشمل أيضًا التركيب المجاني وفحوصات النظام."
  },
  {
    question: "هل أحتاج إلى إعادة ضبط نظام جيب بعد استبدال البطارية؟",
    answer: "نعم، يضمن فنيو جيب لدينا أنه أثناء استبدال البطارية، يتم إعادة ضبط جميع الأنظمة وإعادة معايرتها من أجل الأداء السليم للنظام الإلكتروني. يتم الاهتمام بنظام إدارة البطارية (BMS) لتجنب المزيد من المشكلات الفنية في سيارتك، مثل إعادة معايرة أنظمة التشغيل والإيقاف ونظام المعلومات والترفيه وميزات النظام المتقدمة الأخرى."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية جيب في الموقع في دبي؟",
    answer: "نعم، يقدم 800BatteryPro خدمة استبدال بطارية جيب في الموقع في دبي. يمكنك الاتصال بنا للحصول على مساعدة على الطريق 24/7 أو أي حلول أخرى لبطارية السيارة في أي مكان في دبي وأبوظبي."
  },
  {
    question: "هل يوجد خبراء سيارات أمريكية في دبي؟",
    answer: "نعم، 800BatteryPro هو واحد من المراكز الموثوقة ولديه فريق معتمد من خبراء السيارات الأمريكية في دبي. لدينا مركز خدمة مجهز جيدًا بأحدث التقنيات المستخدمة في كل مهمة إصلاح للسيارات الأمريكية. نتعامل مع كل ماركات السيارات بما في ذلك جيب وجي إم سي وشيفروليه وتسلا وغيرها. اتصل بنا الآن لأي خدمة استبدال بطارية سيارة أمريكية على +971528475675."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية السيارات الأمريكية في أبوظبي؟",
    answer: "نعم، لدى 800BatteryPro مراكز خدمة مجهزة تجهيزًا جيدًا في دبي وأبوظبي. نتعامل مع كل استبدال بطارية سيارة أمريكية باستبدال بطارية أصلية وفاخرة. قاعدة عملائنا راضية بنسبة 100٪ عن خدمات إصلاح السيارات والبطاريات لدينا. إذا كانت بطارية سيارتك فارغة، اتصل بنا الآن على +971528475675 للحصول على خدمات المساعدة الطارئة."
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
      desc: "Jeep Car Models We Serve",
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
            desc: "Wagoneer S ",
            car: carBrand1,
        },
        {
            desc: "Jeep® Recon",
            car: carBrand2,
        },
        {
            desc: "Gladiator",
            car: carBrand3,
        },
        {
            desc: "Grand Cherokee",
            car: carBrand4,
        },
        {
            desc: "Wrangler Models",
            car: carBrand5,
        },
        {
            desc: "Compass",
            car: carBrand6,
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

export default Jeep