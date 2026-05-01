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
  import carBrand1 from '@/public/brands/masa/1.webp'
   import carBrand2 from '@/public/brands/masa/2.webp'
    import carBrand3 from '@/public/brands/masa/3.webp'
     import carBrand4 from '@/public/brands/masa/4.webp'
      import carBrand5 from '@/public/brands/masa/5.webp'
       import carBrand6 from '@/public/brands/masa/6.webp'
        import carBrand7 from '@/public/brands/masa/7.webp'
         import carBrand8 from '@/public/brands/masa/8.webp'
          import carBrand9 from '@/public/brands/masa/9.webp'
           import carBrand10 from '@/public/brands/masa/10.webp'
            import carBrand11 from '@/public/brands/masa/11.webp'
             import carBrand12 from '@/public/brands/masa/12.webp'
              import carBrand13 from '@/public/brands/masa/13.webp' 
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/masa/service.webp"
import serviceImg5 from "@/public/brands/masa/service1.webp"
import bg from '@/public/brands/masa/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'
import service from '@/public/brands/masa/ser1.webp'
import service1 from '@/public/brands/masa/ser2.webp'
import service2 from '@/public/brands/masa/ser3.webp'
import service3 from '@/public/brands/masa/ser4.webp'
const Maserati = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "Maserati Car Battery Replacement",
    span2: "Under 25 Minutes In Dubai & Abu Dhabi"
  },
  desc1: "Don't Stress if your Maserati Car Battery is Dead! 800BatteryPro provides 24/7 Battery Replacement Services Under 25 Minutes anywhere in Dubai, Branded Car Battery With Free Battery Testing.",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "بطارية مازيراتي ",
    span2: "وخبراء الإصلاح"
  },
  desc1: "لا تقلق إذا كانت بطارية سيارتك مازيراتي فارغة! يقدم 800BatteryPro خدمات استبدال البطارية 24/7 خلال أقل من 25 دقيقة في أي مكان في دبي.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "24/7 Maserati Car Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "800BatteryPro has over 6+ Years of experience in delivering 100% customer satisfactory Maserati Car Battery replacement in Dubai & Abu Dhabi. With 20+ rapid response mobile vans and 30+ Experienced technicians. We are partnered with top car service centers which are trusted for there market competitive pricing and usage of OEM-approved spare parts. Maserati's are designed to perform, endure high temperatures, and operate reliably to ensure top performance and luxury that one can expect from any other Italian car. Famous car models like Grecale, MC20, Ghibli, Levante, and Quattroporte are powered by advanced EFB or AGM type of Car Batteries to support the car's complex electrical system featured with start-stop technology. To ensure a smooth ride and top-tier performance for Maserati's top Sports and luxury Models, lightweight and high-capacity Car Batteries are recommended and offered by 800BatteryPro. Choosing the right Car Battery For Maserati means choosing reliability, guaranteed starting power and improving the operations of complex On-board systems, which is essential for every Maserati. If you are facing any quirks or electrical issues in your Maserati, contact our experts for a quick Battery Check-up & car battery Replacement across the UAE. Call us at our whatsapp +971528475675"
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية مازيراتي وإصلاح متقدم",
  services: [
    {
      id: 1,
      description: "بطارية سيارة مازيراتي مصممة للأداء، وتحمل درجات الحرارة المرتفعة، والتشغيل الموثوق لضمان الأداء العلوي والفخامة التي يمكن للمرء أن يتوقعها من مازيراتي. موديلات السيارات مثل Grecale و MC20 و Ghibli و Levante و Quattroporte تعمل ببطاريات سيارات متقدمة من نوع EFB أو AGM لدعم النظام الكهربائي المعقد للسيارة المزود بتقنية التشغيل والإيقاف. لضمان قيادة سلسة وأداء من الدرجة الأولى لأفضل موديلات مازيراتي الرياضية والفاخرة، يوصي ويقدم 800BatteryPro بطاريات سيارات خفيفة الوزن وعالية السعة. اختيار بطارية السيارة المناسبة لمازيراتي يعني اختيار الموثوقية، وضمان طاقة التشغيل، وتحسين عمليات الأنظمة المعقدة على متن السيارة، وهو أمر ضروري لكل مازيراتي. إذا كنت تواجه أي أعطال أو مشاكل كهربائية في سيارتك مازيراتي، فاتصل بخبرائنا لإجراء فحص سريع للبطارية واستبدالها في جميع أنحاء الإمارات."
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Partnered With Trusted Maserati Service Center in Dubai & Abu Dhabi",
  services: [
    {
      id: 1,
      description: "800BatteryPro covers a wide spectrum of Maserati repair and maintenance services, including. We have partnered with one of the trusted Maserati Service Centers in Dubai and Abu Dhabi, 800BatteryPro has a well-equipped 20+ rapid response mobile vans and 30+ Experienced Maserati specialists, completing every car maintenance, diagnostics and repair job with 100% customer satisfaction. Our technicians only use genuine Maserati parts, and with years of experience working with European car brands, you can trust us with routine servicing or complex repairs. We have a record number of jobs completed related to car Battery Check-up & Replacement, Full Inspection and Diagnosis, Minor & Major Issues, and other advance car programming services."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة مازيراتي الموثوق في دبي وأبوظبي",
  services: [
    {
      id: 1,
      description: "يغطي 800BatteryPro طيفًا واسعًا من خدمات إصلاح وصيانة مازيراتي. كونه أحد مراكز خدمة مازيراتي الموثوقة في دبي وأبوظبي، يمتلك 800BatteryPro ورشة عمل مجهزة تجهيزًا جيدًا وفنيي مازيراتي معتمدين، يكملون كل مهمة صيانة وتشخيص وإصلاح للسيارة بنسبة رضا عملاء 100%. يستخدم فنيونا فقط قطع غيار مازيراتي الأصلية، ومع سنوات من الخبرة في العمل مع ماركات السيارات الأوروبية، يمكنك الوثوق بنا في الخدمات الروتينية أو الإصلاحات المعقدة. لدينا عدد قياسي من المهام المكتملة المتعلقة بفحص البطارية واستبدالها، والفحص الكامل والتشخيص، والمشاكل البسيطة والكبيرة، وخدمات برمجة السيارات المتقدمة الأخرى."
    },
  ]
}

    const  englishService = [
                      {
                        title: "Car Battery Replacement",
                        hoverDec: "Call 800BatteryPro at +971528475675 For Premium Car Battery Replacement Services Under 25 Minutes in Abu Dhabi",
                        img: service
                      },
                      {
                        title: "Car Battery Boosting",
                        hoverDec: "Get 24/7 Car Battery Boosting/jump start services under 25 minutes anywhere in Abu Dhabi with no hidden cost.",
                        img: service2
                      },
                      {
                        title: "24/7 Roadside Assistance",
                        hoverDec: "800BatteryPro has well-equipped mobile vans and 30+ Experienced car battery replacement technicians providing 24/7 roadside assistance anywhere in the UAE. Fast & Reliable RSA!",
                        img: service1
                      },
                      {
                        title: "Car Scanning & Diagnostics",
                        hoverDec: " Get complete Advanced Car Scanning & Diagnostics at 800BatteryPro as we have partnered with trusted car service centers in Abu Dhabi. Fast Service & Best Pricing in Abu Dhabi. Contact Us Now!",
                        img: service3
                      },
                    ]
                  const  arabicService = [
                      {
                        title: "استبدال بطارية السيارة",
                        hoverDec: "اتصل بـ 800BatteryPro على +971528475675 للحصول على خدمات استبدال بطارية السيارة المتميزة خلال 30 دقيقة في دبي",
                        img: service
                      },
                      {
                        title: "تشغيل بطارية السيارة",
                        hoverDec: "احصل على خدمات تشغيل/بدء تشغيل بطارية السيارة على مدار الساعة خلال 30 دقيقة في أي مكان في دبي من خلال 800BatteryPro",
                        img: service2
                      },
                      {
                        title: "المساعدة على الطريق 24/7",
                        hoverDec: "يمتلك 800BatteryPro شاحنات مجهزة تجهيزًا جيدًا وأكثر من 50 فنيًا معتمدًا يقدمون خدمات المساعدة على الطريق على مدار الساعة في أي مكان في الإمارات. خدمة طرق سريعة وموثوقة!",
                        img: service1
                      },
                      {
                        title: "فحص وتشخيص السيارة",
                        hoverDec: "احصل على فحص وتشخيص متقدم كامل للسيارة في 800BatteryPro. خدمة سريعة وأفضل الأسعار. اتصل بنا الآن!",
                        img: service3
                      },
                    ]

const englishServices = [
  {
    img: serviceImg1,
    title: "Premium 24/7 Customer",
    desc: "800BatteryPro has a dedicated customer support team active 24/7 for all GMC car battery replacement and advanced repair services in Dubai and Abu Dhabi."
  },
  {
    img: serviceImg2,
    title: "Experienced GMC Specialists",
    desc: "Our technicians have 6+ years of experience working on all American Car brands including the GMC (General Motors Truck Company)."
  },
  {
    img: serviceImg3,
    title: "Genuine GMC Parts",
    desc: "Our Experienced GMC specialists only use genuine battery and OEM-approved spare parts for every car job."
  },
  {
    img: serviceImg4,
    title: "Car Battery Under 25 Minutes",
    desc: "Our 24/7 road side assistance for ensuring you stay safe on the road. We offer free battery testing and free car battery delivery with no hidden charges."
  }
]

const arabicServices = [
  {
    img: serviceImg1,
    title: "دعم عملاء مميز 24/7",
    desc: "لدى 800BatteryPro فريق دعم عملاء مخصص يعمل 24/7 لجميع خدمات استبدال بطارية مازيراتي والإصلاح المتقدم في دبي وأبوظبي."
  },
  {
    img: serviceImg2,
    title: "فنيو مازيراتي معتمدون",
    desc: "يتمتع فنيونا بخبرة تزيد عن 5 سنوات في العمل على جميع ماركات السيارات الأوروبية بما في ذلك مازيراتي."
  },
  {
    img: serviceImg3,
    title: "قطع غيار مازيراتي أصلية",
    desc: "يستخدم فنيو مازيراتي المعتمدون لدينا فقط البطاريات الأصلية وقطع الغيار المعتمدة من OEM لكل مهمة سيارة."
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
    desc: "800BatteryPro provides you with 24/7 customer support for your Maserati car battery and advanced repair services in Dubai and Abu Dhabi."
  },
  {
    icons: <FaSitemap />,
    title: "Experienced Maserati specialists",
    desc: "We have 30+ Experienced Maserati specialists, who are capable of handling every car programming, car battery replacement, and advance repair jobs delivering every car job with 100 percent customer satisfaction."
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine Maserati Parts",
    desc: "Our technicians only use OEM-approved spare parts and genuine car batteries, making sure you stay safe on the road."
  },
  {
    icons: <FaSitemap />,
    title: "Free Car Battery Delivery & Under 30 Minutes Service",
    desc: "Upon receiving your emergency call our team of technicians provides you with onsite battery replacement and free battery testing services around the clock."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز",
    desc: "يوفر لك 800BatteryPro دعم عملاء 24/7 لبطارية سيارتك مازيراتي وخدمات الإصلاح المتقدمة في دبي وأبوظبي."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو مازيراتي معتمدون",
    desc: "لدينا أكثر من 30 فني مازيراتي معتمد، قادرين على التعامل مع كل برمجة السيارات واستبدال بطارية السيارة ومهام الإصلاح المتقدمة، وتقديم كل مهمة سيارة بنسبة رضا عملاء 100%."
  },
  {
    icons: <FaSitemap />,
    title: "استخدام قطع غيار مازيراتي الأصلية",
    desc: "يستخدم فنيونا فقط قطع الغيار المعتمدة من OEM وبطاريات السيارات الأصلية، مما يضمن لك السلامة على الطريق."
  },
  {
    icons: <FaSitemap />,
    title: "توصيل بطارية سيارة مجاني وخدمة خلال أقل من 30 دقيقة",
    desc: "عند استلام مكالمة الطوارئ الخاصة بك، يقدم لك فريق فنيينا خدمة استبدال البطارية في الموقع وخدمات فحص البطارية المجانية على مدار الساعة."
  }
]

const englishFaqs = [
  {
    question: "Best Maserati experts in Dubai?",
    answer: "800BatteryPro is one of the trusted Maserati Experts in Dubai with partership with the well-equipped service centers in Dubai. Completing every car repair and diagnostic job with precision and minimum delivery time across UAE. You can contact our Expert at +971528475675 for reliable Maserati diagnostics and car battery replacement services."
  },
  {
    question: "How often should I service my Maserati?",
    answer: "Our Experienced Maserati technicians recommends a service after 10,000 Kilometers or may one once an year for all Maserati car models. You should also check on the manufacturer's service schedule as it will help in getting maximum engine performance, luxury ride, and longevity. Schedule your next car service with 800BatteryPro at +971528475675."
  },
  {
    question: "What are the signs that my Maserati needs immediate service?",
    answer: "Immediately contact our Maserati experts, if you see any of the following signs such as warning lights showing up on dashboard, unusual mechanical sounds, any fluid leaks from the car, or a dip in your car performance. You should never ignore any of these signs as they may lead to far greater issues and risks down the line. For Emergency Assistance contact on our whatsapp."
  },
  {
    question: "Promotions and Discounts on Car Battery Replacement in Abu Dhabi?",
    answer: "Depending upon what your car really needs, Maserati service includes both Standard and Major services. When it comes to standard services for Maserati models our Experienced technicians offers you car battery replacement, car battery boosting, roadside assistance, oil change, AC filter replacements, brake inspection, tire rotations, hoses, belts, and car fluid checks for optimising vehicle performance. While, major services for Maserati includes more in-depth inspections of the vehicle engine, transmission system, and suspension systems. Call +971528475675 to learn more about their offers."
  },
]

const arabicFaqs = [
  {
    question: "من هم أفضل خبراء مازيراتي في دبي؟",
    answer: "يعتبر 800BatteryPro واحدًا من خبراء مازيراتي الموثوقين في دبي مع مراكز خدمة مجهزة تجهيزًا جيدًا وفنيي سيارات أوروبية معتمدين. يكملون كل مهمة إصلاح وتشخيص للسيارة بدقة وأقل وقت تسليم في جميع أنحاء الإمارات. يمكنك الاتصال بخبيرنا على +971528475675 للحصول على خدمات تشخيص مازيراتي الموثوقة واستبدال بطارية السيارة."
  },
  {
    question: "كم مرة يجب أن أقوم بصيانة سيارتي مازيراتي؟",
    answer: "يوصي فنيو مازيراتي المعتمدون لدينا بإجراء صيانة بعد 10000 كيلومتر أو مرة واحدة في السنة لجميع موديلات سيارات مازيراتي. يجب عليك أيضًا التحقق من جدول الصيانة الخاص بالشركة المصنعة لأنه سيساعد في الحصول على أقصى أداء للمحرك، ورحلة فاخرة، وطول العمر. قم بجدولة خدمة سيارتك القادمة مع 800BatteryPro على +971528475675."
  },
  {
    question: "ما هي العلامات التي تشير إلى أن سيارتي مازيراتي بحاجة إلى صيانة فورية؟",
    answer: "اتصل بخبراء مازيراتي لدينا فورًا إذا رأيت أيًا من العلامات التالية مثل ظهور أضواء تحذيرية على لوحة العدادات، أو أصوات ميكانيكية غير عادية، أو أي تسرب للسوائل من السيارة، أو انخفاض في أداء سيارتك. يجب ألا تتجاهل أبدًا أيًا من هذه العلامات لأنها قد تؤدي إلى مشاكل ومخاطر أكبر في المستقبل. للحصول على مساعدة طارئة، اتصل على الواتساب الخاص بنا."
  },
  {
    question: "العروض والخصومات على استبدال بطارية السيارة في أبوظبي؟",
    answer: "اعتمادًا على ما تحتاجه سيارتك حقًا، تتضمن خدمة مازيراتي كلاً من الخدمات القياسية والرئيسية. عندما يتعلق الأمر بالخدمات القياسية لموديلات مازيراتي، يقدم فنيونا المعتمدون لك استبدال بطارية السيارة، وتعزيز بطارية السيارة، والمساعدة على الطريق، وتغيير الزيت، واستبدال فلتر المكيف، وفحص الفرامل، وتدوير الإطارات، والخراطيم، والأحزمة، وفحوصات سوائل السيارة لتحسين أداء المركبة. بينما تشمل الخدمات الرئيسية لمازيراتي فحوصات أكثر تعمقًا لمحرك السيارة ونظام النقل وأنظمة التعليق. اتصل على +971528475675 لمعرفة المزيد عن عروضهم."
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
      desc: "Maserati Car Models We Serve",
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
            desc: "GRECALE Mild Hybrid",
            car: carBrand1,
        },
        {
            desc: "GRECALE Modena",
            car: carBrand2,
        },
        {
            desc: "GRECALE Trofeo",
            car: carBrand3,
        },
        {
            desc: "GRECALE Folgore",
            car: carBrand4,
        },
        {
            desc: "GRANTURISMO - Petrol",
            car: carBrand5,
        },
        {
            desc: "GRANTURISMO Trofeo",
            car: carBrand6,
        },
        {
            desc: "GRANTURISMO Folgore",
            car: carBrand7,
        },
        {
            desc: "GRANCABRIO - Petrol",
            car: carBrand8,
        },
          {
            desc: "GRANCABRIO - Trofeo",
            car: carBrand9,
        },
          {
            desc: "GRANCABRIO - Folgore",
            car: carBrand10,
        },
                  {
            desc: "MCPURA Petrol",
            car: carBrand11,
        },
                  {
            desc: "MCPURA CIELO",
            car: carBrand12,
        },
                  {
            desc: "GT2 Stradale",
            car: carBrand13,
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
      <div className='sticky top-0 '>  {/* Added z-index */}
        <Hero hero={hero} herobg={bg} />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
             <Cards />
            <Services englishService={englishService} arabicService={arabicService} />
            <HowItWorks />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands text={text} brands={brands} />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <Service serviceContent={serviceContent1} serviceImg={serviceImg5} />
            <WhyChooseUs data={data} />
            <Faq faqs={faqs} />
           <Trusted englishContent={englishContents} arabicContent={arabicContents} />
           <Footer />
        </div>
    </div>
  )
}

export default Maserati