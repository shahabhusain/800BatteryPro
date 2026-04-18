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
import serviceImg from "@/public/brands/porsche/service.webp"
import serviceImg5 from "@/public/brands/porsche/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/porsche/1.webp'
   import carBrand2 from '@/public/brands/porsche/2.webp'
    import carBrand3 from '@/public/brands/porsche/3.webp'
     import carBrand4 from '@/public/brands/porsche/4.webp'
      import carBrand5 from '@/public/brands/porsche/5.webp'
       import carBrand6 from '@/public/brands/porsche/6.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/porsche/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const Porsche = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "Porsche Car Battery Replacement",
    span2: "  & Advanced Repairs"
  },
  desc1: "No need to panic if your porsche battery is dead! 800BatteryPro provide 24/7 Porsche Car Battery Replacement & next-gen repair services in Dubai.",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "استبدال بطارية بورش ",
    span2: "وإصلاحات متقدمة"
  },
  desc1: "لا داعي للذعر إذا كانت بطارية بورش الخاصة بك فارغة! يقدم 800BatteryPro استبدال بطارية بورش 24/7 وخدمات إصلاح من الجيل التالي في دبي.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Porsche Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "There is no need to stress if your Porsche Battery is not working, you can call the Best Car Battery Replacement services in Dubai. 800BatteryPro provides Under 15 minutes onsite battery boosting and replacement services. We have a team of certified porsche specialists who only works on genuine battery brands with 18+ warranty and use only OEM standard parts. We have a years of experience in all areas of Porsche battery services. We employ high-performance batteries that can handle the heat of Dubai. 800BatteryPro offers the following are the different types of Porsche Battery:"
    },
    {
      id: 2,
      description: "Porsche 911 Series: Our certified Porsche technicians use high-performance batteries that can handle the heat of Dubai."
    },
    {
      id: 3,
      description: "Porsche Cayenne: Heavy-duty batteries for the Porsche Cayenne give us long-lasting power for extended travels."
    },
    {
      id: 4,
      description: "Porsche Panamera: We employ long-lasting batteries for the Panamera's complex electronics, which are powered by batteries that are made just for them."
    },
    {
      id: 5,
      description: "Porsche Taycan: The only batteries our Porsche expert uses in the all-electric Taycan are high-voltage ones."
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية بورش وخدمات الإصلاح المتقدمة",
  services: [
    {
      id: 1,
      description: "لا داعي للتوتر إذا كانت بطارية بورش الخاصة بك لا تعمل، يمكنك الاتصال بأفضل خدمات استبدال بطارية السيارة في دبي. يقدم 800BatteryPro خدمات تعزيز واستبدال البطارية في الموقع خلال أقل من 15 دقيقة. لدينا فريق من فنيي بورش المعتمدين الذين يعملون فقط على ماركات البطاريات الأصلية مع ضمان يزيد عن 18 شهرًا ويستخدمون فقط قطع الغيار الأصلية بمعايير OEM. لدينا سنوات من الخبرة في جميع مجالات خدمات بطارية بورش. نوظف بطاريات عالية الأداء يمكنها تحمل حرارة دبي. يقدم 800BatteryPro الأنواع التالية من بطاريات بورش:"
    },
    {
      id: 2,
      description: "سلسلة بورش 911: يستخدم فنيو بورش المعتمدون لدينا بطاريات عالية الأداء يمكنها تحمل حرارة دبي."
    },
    {
      id: 3,
      description: "بورش كايين: توفر لنا البطاريات الثقيلة لسيارة بورش كايين طاقة طويلة الأمد للرحلات الممتدة."
    },
    {
      id: 4,
      description: "بورش باناميرا: نوظف بطاريات طويلة الأمد للإلكترونيات المعقدة في باناميرا، والتي تعمل ببطاريات مصنوعة خصيصًا لها."
    },
    {
      id: 5,
      description: "بورش تايكان: البطاريات الوحيدة التي يستخدمها خبير بورش لدينا في تايكان الكهربائية بالكامل هي بطاريات عالية الجهد."
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Porsche Service Centre in Dubai – Premium German Car Battery Replacement",
  services: [
    {
      id: 1,
      description: "800BatteryPro offers the most advanced Porsche battery replacement services that are tailored to the needs of electric systems in fully electric models like the Porsche Taycan. To make sure that batteries work as well as possible and last as long as possible, our German car experts follow tight rules. We provide the following Porsche battery replacement services for electric cars:"
    },
    {
      id: 2,
      description: "Our professional technicians safely replace Porsche batteries while following Porsche's rules for handling the high-voltage electric battery pack. After each Porsche battery replacement, we recalibrate the BMS. This is necessary to keep track of how well the battery is working and how it is doing. As part of our Porsche battery replacement service, we adjust the new battery to make it more efficient and provide it a longer range for driving in Dubai. We check that the charging system works with the new Porsche battery to make sure that the battery lasts longer and charges more efficiently. These professional Porsche battery replacement services make sure that both electric and hybrid Porsche models work safely and well, getting your car ready for the tough driving conditions and environment in Dubai."
    },
    {
      id: 3,
      description: "You can reserve your slot for your next Battery Checkup with the best Porsche car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة بورش في دبي – استبدال بطارية سيارة ألمانية فاخرة",
  services: [
    {
      id: 1,
      description: "يقدم 800BatteryPro أحدث خدمات استبدال بطارية بورش المصممة خصيصًا لاحتياجات الأنظمة الكهربائية في الموديلات الكهربائية بالكامل مثل بورش تايكان. لضمان أن تعمل البطاريات بأفضل شكل ممكن وتدوم لأطول فترة ممكنة، يتبع خبراء السيارات الألمانية لدينا قواعد صارمة. نقدم خدمات استبدال بطارية بورش التالية للسيارات الكهربائية:"
    },
    {
      id: 2,
      description: "يستبدل فنيونا المحترفون بطاريات بورش بأمان مع اتباع قواعد بورش للتعامل مع حزمة البطارية الكهربائية عالية الجهد. بعد كل استبدال لبطارية بورش، نقوم بإعادة معايرة نظام إدارة البطارية (BMS). هذا ضروري لتتبع مدى جودة عمل البطارية وأدائها. كجزء من خدمة استبدال بطارية بورش، نقوم بضبط البطارية الجديدة لجعلها أكثر كفاءة وتوفير مدى أطول للقيادة في دبي. نتحقق من أن نظام الشحن يعمل مع بطارية بورش الجديدة لضمان أن البطارية تدوم لفترة أطول وتشحن بكفاءة أكبر. تضمن خدمات استبدال بطارية بورش الاحترافية هذه أن تعمل موديلات بورش الكهربائية والهجينة بأمان وجيد، وإعداد سيارتك لظروف القيادة والبيئة القاسية في دبي."
    },
    {
      id: 3,
      description: "يمكنك حجز موعدك لفحص البطارية القادم مع أفضل خبراء سيارات بورش في دبي. اتصل بنا على +971528475675 للحصول على مساعدة طارئة على الطريق 24/7."
    },
  ]
}

const englishServices = [
  {
    img: serviceImg1,
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides you with on-time Mercedes-Benz battery services with excellent customer support around the clock."
  },
  {
    img: serviceImg2,
    title: "Certified Mercedes Benz Specialists",
    desc: "We have a team of certified mercedes benz specialists using Genuine Mercedes Parts and branded car batteries for every car service we deliver."
  },
  {
    img: serviceImg3,
    title: "Car Battery Under 15 Minutes",
    desc: "Once we receive your emergency call for car battery services, our team delivers every car battery replacement under 15 minutes."
  },
  {
    img: serviceImg4,
    title: "Market Competitive Pricing & No Hidden Charges",
    desc: "Along with our free battery testing and free battery delivery, our Mercedes car battery services are available on market competitive pricings."
  }
]

const arabicServices = [
  {
    img: serviceImg1,
    title: "دعم عملاء مميز 24/7",
    desc: "يوفر لك 800BatteryPro خدمات بطارية بورش في الوقت المحدد مع دعم عملاء ممتاز على مدار الساعة."
  },
  {
    img: serviceImg2,
    title: "فنيو بورش معتمدون",
    desc: "لدينا فريق من فنيي بورش المعتمدين يستخدمون قطع غيار بورش الأصلية وبطاريات السيارات ذات العلامات التجارية لكل خدمة سيارة نقدمها."
  },
  {
    img: serviceImg3,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "بمجرد استلام مكالمة الطوارئ الخاصة بخدمات بطارية السيارة، يقدم فريقنا كل استبدال لبطارية السيارة خلال أقل من 15 دقيقة."
  },
  {
    img: serviceImg4,
    title: "أسعار تنافسية في السوق ولا رسوم خفية",
    desc: "إلى جانب فحص البطارية المجاني وتوصيل البطارية المجاني، تتوفر خدمات بطارية بورش لدينا بأسعار تنافسية في السوق."
  }
]

const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro is your partner in driving safely on the road, with a dedicated Porsche team available for you 24/7."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Porsche Specialists",
    desc: "We have a team of 50+ certified Porsche specialists who know how to deliver 100% customer satisfaction for every car battery job."
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine Porsche Parts",
    desc: "Our technicians use only OEM-approved repair parts and genuine car batteries for every car service we deliver."
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "If you are stuck somewhere on the road anywhere in the UAE, then you can call us at +971528475675. With free battery testing and free car battery delivery services."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز 24/7",
    desc: "800BatteryPro هو شريكك في القيادة الآمنة على الطريق، مع فريق بورش مخصص متاح لك 24/7."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو بورش معتمدون",
    desc: "لدينا فريق من أكثر من 50 فني بورش معتمد يعرفون كيفية تقديم رضا العملاء بنسبة 100٪ لكل مهمة بطارية سيارة."
  },
  {
    icons: <FaSitemap />,
    title: "استخدام قطع غيار بورش الأصلية",
    desc: "يستخدم فنيونا فقط قطع الغيار المعتمدة من OEM وبطاريات السيارات الأصلية لكل خدمة سيارة نقدمها."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "إذا كنت عالقًا في مكان ما على الطريق في أي مكان في الإمارات، فيمكنك الاتصال بنا على +971528475675. مع خدمات فحص بطارية مجانية وتوصيل بطارية سيارة مجاني."
  }
]

const englishFaqs = [
  {
    question: "When should I change the brake pads on my Porsche?",
    answer: "We inspect the brake pads at every service to see how much life they have left and suggest changing them when they have 20–15% of their life left. Also, most new automobiles feature sensors that let you know when the brake pad is about to wear out. If your automobile contains brake pad sensors, you should change the pads right away (within 1000Km) when you see the alert on your dashboard. If you wait too long to change your brake pads, you could damage your disk brakes and calipers, which are expensive to fix or replace."
  },
  {
    question: "How long should a Porsche's battery last?",
    answer: "The battery's life relies on how it is used, how it is installed, and how it is charged. Shorter battery life can happen if you charge it too little or too much. Generally the Porsche battery needs to be replaced after a 10,000 KM or may be once a year."
  },
  {
    question: "When I need to replace my Porsche's Battery?",
    answer: "If you can't start your Porsche, if the battery warning light is on, or if electrical parts within your Porsche aren't working. To drive safe book a free vehicle inspection today at 800BatteryPro."
  },
  {
    question: "How Quickly 800BatteryPro does Porsche Battery Replacement?",
    answer: "800BatteryPro provides Porsche Battery replacement under 15 minutes anywhere in Dubai and Abu Dhabi. Our services include Free Car battery testing, inspection and diagnostic, if your battery needs to be changed, we only use genuine Porsche battery for replacement."
  },
  {
    question: "Any German Car Experts in Dubai?",
    answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of German car experts in Dubai. We have a well-equipped service centre with the latest technology used for every German car repair job. We treat every car brand, including Mercedes, BMW, Porsche, and Audi, etc. Call us now for any German car battery replacement services at +971528475675."
  },
  {
    question: "Do we provide German Car Battery Replacement in Abu Dhabi?",
    answer: "Yes, 800BatteryPro has well-equipped service centres in Dubai and Abu Dhabi. We treat every German car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services."
  },
]

const arabicFaqs = [
  {
    question: "متى يجب علي تغيير تيل الفرامل في سيارتي بورش؟",
    answer: "نقوم بفحص تيل الفرامل في كل خدمة لمعرفة المدة المتبقية لها ونقترح تغييرها عندما يتبقى 15-20٪ من عمرها. أيضًا، معظم السيارات الجديدة مزودة بأجهزة استشعار تخبرك عندما يكون تيل الفرامل على وشك التآكل. إذا كانت سيارتك تحتوي على أجهزة استشعار لتيل الفرامل، فيجب عليك تغيير التيل فورًا (في غضون 1000 كيلومتر) عندما ترى التنبيه على لوحة العدادات. إذا انتظرت فترة طويلة جدًا لتغيير تيل الفرامل، فقد تتلف فرامل القرص والملاقط، والتي يكون إصلاحها أو استبدالها مكلفًا."
  },
  {
    question: "كم من الوقت يجب أن تدوم بطارية بورش؟",
    answer: "يعتمد عمر البطارية على كيفية استخدامها وكيفية تركيبها وكيفية شحنها. يمكن أن يحدث عمر بطارية أقصر إذا قمت بشحنها قليلاً جدًا أو كثيرًا جدًا. بشكل عام، تحتاج بطارية بورش إلى الاستبدال بعد 10000 كيلومتر أو مرة واحدة في السنة."
  },
  {
    question: "متى أحتاج إلى استبدال بطارية بورش الخاصة بي؟",
    answer: "إذا لم تتمكن من تشغيل سيارتك بورش، أو إذا كان ضوء تحذير البطارية مضاءً، أو إذا كانت الأجزاء الكهربائية في سيارتك بورش لا تعمل. للقيادة بأمان، احجز فحص سيارة مجاني اليوم في 800BatteryPro."
  },
  {
    question: "ما مدى سرعة 800BatteryPro في استبدال بطارية بورش؟",
    answer: "يوفر 800BatteryPro استبدال بطارية بورش خلال أقل من 15 دقيقة في أي مكان في دبي وأبوظبي. تشمل خدماتنا فحص بطارية السيارة مجانًا، والفحص والتشخيص، إذا كانت البطارية بحاجة إلى التغيير، فإننا نستخدم فقط بطارية بورش الأصلية للاستبدال."
  },
  {
    question: "هل يوجد خبراء سيارات ألمانية في دبي؟",
    answer: "نعم، 800BatteryPro هو واحد من المراكز الموثوقة ولديه فريق معتمد من خبراء السيارات الألمانية في دبي. لدينا مركز خدمة مجهز جيدًا بأحدث التقنيات المستخدمة في كل مهمة إصلاح للسيارات الألمانية. نتعامل مع كل ماركات السيارات بما في ذلك مرسيدس وبي إم دبليو وبورش وأودي وغيرها. اتصل بنا الآن لأي خدمة استبدال بطارية سيارة ألمانية على +971528475675."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية السيارات الألمانية في أبوظبي؟",
    answer: "نعم، لدى 800BatteryPro مراكز خدمة مجهزة تجهيزًا جيدًا في دبي وأبوظبي. نتعامل مع كل استبدال بطارية سيارة ألمانية باستبدال بطارية أصلية وفاخرة. قاعدة عملائنا راضية بنسبة 100٪ عن خدمات إصلاح السيارات والبطاريات لدينا. إذا كانت بطارية سيارتك فارغة، اتصل بنا الآن على +971528475675 للحصول على خدمات المساعدة الطارئة."
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
      desc: "Porsche Car Models We Serve",
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
            desc: "PORRSCHE 718",
            car: carBrand1,
        },
        {
            desc: "PORRSCHE 911",
            car: carBrand2,
        },
        {
            desc: "PORRSCHE TAYCAN",
            car: carBrand3,
        },
        {
            desc: "PORRSCHE PANAMERA",
            car: carBrand4,
        },
        {
            desc: "PORRSCHE MAYCAN",
            car: carBrand5,
        },
        {
            desc: "PORRSCHE CAYENNE",
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
      <div className='sticky top-0 '>
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className='bg-white rounded-t-4xl relative z-10'>
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

export default Porsche