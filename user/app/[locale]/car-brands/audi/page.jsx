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
import serviceImg from "@/public/brands/audi/service.webp"
import serviceImg5 from "@/public/brands/audi/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/audi/1.webp'
   import carBrand2 from '@/public/brands/audi/2.webp'
    import carBrand3 from '@/public/brands/audi/3.webp'
     import carBrand4 from '@/public/brands/audi/4.webp'
      import carBrand5 from '@/public/brands/audi/5.webp'
       import carBrand6 from '@/public/brands/audi/6.webp'
       import carBrand7 from '@/public/brands/audi/7.webp'
   import carBrand8 from '@/public/brands/audi/8.webp'
    import carBrand9 from '@/public/brands/audi/9.webp'
     import carBrand10 from '@/public/brands/audi/10.webp'
      import carBrand11 from '@/public/brands/audi/11.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/audi/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import HowItWorks from '@/app/components/Hero/HowItWorks'
import Services from '@/app/components/locations/Services'


const Audi = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "Audi Car Battery Replacement ",
    span2: " & Advanced Repairs"
  },
  desc1: "You don’t need to panic if your Audi car battery is dead! 800BatteryPro provides you with 24/7 roadside assistance, under 30 minutes and certified battery replacement. ",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "استبدال بطارية أودي ",
    span2: "وإصلاحات متقدمة"
  },
  desc1: "لا داعي للذعر إذا كانت بطارية سيارتك أودي فارغة! يقدم لك 800BatteryPro مساعدة على الطريق 24/7 خلال أقل من 30 دقيقة مع استبدال بطارية معتمد.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Audi Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "Audi batteries require routine maintenance and under 15 minutes of on-site battery replacement services. We have a team of certified Audi specialist who only works on genuine battery brands with 18+ month warranty. Not only do we ensure the use of OEM standard spare parts through certified procedures and next-gen equipment. Our technicians only recommend branded car batteries, which ensure peak performance and are capable of handling the heat of Dubai."
    },
    {
      id: 2,
      description: "800BatteryPro only recommends genuine AGM for Audi vehicles, usually, which require AGM (Absorbent Glass Mat) batteries, which are capable of handling the complex electrical system of Audi even in the extreme heat of the UAE."
    },
    {
      id: 3,
      description: "800BatteryPro offers the following are the different types of Audi Battery: AGM Battery Audi: Audi owners who care about performance should get AGM (Absorbent Glass Mat) batteries. These batteries have high CCA and deep cycle features because of the new battery design. EFB (Enhanced Flooded Battery): The EFB (Enhanced Flooded Battery) is also a great choice for Audis with start-stop technology. Many Audi models can use EFB batteries because they are both cost-effective and high-performance. 800BatteryPro provides 24/7 roadside assistance with under 15 minutes of on-site Audi car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months. For premium Audi Battery replacement and advanced repairs, contact us now at +971528475675 or book a free car inspection appointment right now!"
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية أودي وخدمات إصلاح متقدمة",
  services: [
    {
      id: 1,
      description: "تتطلب بطاريات أودي صيانة دورية وخدمة استبدال بطارية في الموقع خلال أقل من 15 دقيقة. لدينا فريق من فنيي أودي المعتمدين الذين يعملون فقط على ماركات البطاريات الأصلية مع ضمان يزيد عن 18 شهرًا. لا نضمن فقط استخدام قطع الغيار الأصلية وفقًا للمعايير المعتمدة والمعدات الحديثة، بل يوصي فنيونا فقط ببطاريات السيارات ذات العلامات التجارية التي تضمن أداءً ممتازًا وقادرة على تحمل حرارة دبي."
    },
    {
      id: 2,
      description: "يوصي 800BatteryPro فقط ببطاريات AGM الأصلية لسيارات أودي، والتي عادة ما تحتاج إلى بطاريات AGM (مات الزجاج الماص)، القادرة على التعامل مع النظام الكهربائي المعقد لسيارة أودي حتى في حرارة الإمارات الشديدة."
    },
    {
      id: 3,
      description: "يقدم 800BatteryPro أنواعًا مختلفة من بطاريات أودي: بطارية AGM أودي: يجب على مالكي أودي المهتمين بالأداء الحصول على بطاريات AGM (مات الزجاج الماص). تتمتع هذه البطاريات بتيار تدوير بارد عالٍ (CCA) وميزات الدورة العميقة بسبب تصميم البطارية الجديد. بطارية EFB (البطارية المحسنة المغمورة): تعتبر بطارية EFB أيضًا خيارًا رائعًا لسيارات أودي المزودة بتقنية التشغيل والإيقاف. يمكن للعديد من موديلات أودي استخدام بطاريات EFB لأنها فعالة من حيث التكلفة وعالية الأداء. يوفر 800BatteryPro مساعدة على الطريق 24/7 مع توصيل بطارية أودي إلى موقعك في أي مكان في دبي خلال أقل من 15 دقيقة. اختبار البطارية والتوصيل مجاني، بينما يصل ضمان البطارية إلى 18 شهرًا. للحصول على استبدال بطارية أودي premium وإصلاحات متقدمة، اتصل بنا الآن على +971528475675 أو احجز موعدًا لفحص سيارتك المجاني الآن!"
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Audi Service Centre in Dubai – Premium German Car Battery",
  services: [
    {
      id: 1,
      description: "800BatteryPro is one of the trusted and reliable Audi Service centres in Dubai and Abu Dhabi. With 50+ certified Audi Specialists, our technicians are committed to excellence in providing genuine battery replacement services as well as advance repair solutions. Rest assured that you are getting a high-quality product that will keep your Audi running at its best, whether you choose an AGM or an EFB battery. We have 5+ years of experience in delivering every Audi car job with 100 percent customer satisfaction. Rest assured that you will get the premium services. We provide high-quality AGM and EFB batteries that are made to work best in Audi cars. Our technicians only use branded batteries that last long and work well, so our customers may feel safe when they drive."
    },
    {
      id: 2,
      description: "You can reserve your slot for your next Battery Checkup with the best Audi car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة أودي في دبي – بطارية سيارات ألمانية فاخرة",
  services: [
    {
      id: 1,
      description: "يعتبر 800BatteryPro أحد مراكز خدمة أودي الموثوقة في دبي وأبوظبي. مع أكثر من 50 فني أودي معتمد، يلتزم فنيونا بالتميز في تقديم خدمات استبدال البطاريات الأصلية بالإضافة إلى حلول الإصلاح المتقدمة. كن مطمئنًا أنك تحصل على منتج عالي الجودة سيحافظ على تشغيل سيارتك أودي بأفضل أداء، سواء اخترت بطارية AGM أو EFB. لدينا أكثر من 5 سنوات من الخبرة في تنفيذ كل مهمة لسيارات أودي بنسبة رضا عملاء 100%. نوفر بطاريات AGM و EFB عالية الجودة والمصممة للعمل بأفضل شكل في سيارات أودي. يستخدم فنيونا فقط البطاريات ذات العلامات التجارية التي تدوم طويلاً وتعمل بشكل جيد، ليشعر عملاؤنا بالأمان أثناء القيادة."
    },
    {
      id: 2,
      description: "يمكنك حجز موعدك لفحص البطارية القادم مع أفضل خبراء سيارات أودي في دبي. اتصل بنا على +971528475675 للحصول على مساعدة طارئة على الطريق 24/7."
    },
  ]
}

const englishServices = [
  {
    img: serviceImg1,
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides you with 24/7 Audi Customer Support services, not just this we ensure you get all the right details which can resolve your issue asap."
  },
  {
    img: serviceImg2,
    title: "Certified Audi Specialists",
    desc: "We have certified Audi Specialists who are all experienced dealing with every Audi Car battery job with precision and excellence."
  },
  {
    img: serviceImg3,
    title: "Genuine Audi Parts & Genuine Battery",
    desc: "Our Audi Technicians only recommend and use genuine Audi parts and genuine car battery for every job with 100 percent customer satisfaction."
  },
  {
    img: serviceImg4,
    title: "Battery Under 15 Minutes & No Hidden Charges",
    desc: "We have one of the best 24/7 onsite battery replacement services in Dubai and Abu Dhabi."
  }
]

const arabicServices = [
  {
    img: serviceImg1,
    title: "دعم عملاء مميز 24/7",
    desc: "يقدم لك 800BatteryPro خدمات دعم عملاء أودي على مدار الساعة، وليس هذا فقط بل نضمن لك الحصول على جميع التفاصيل الصحيحة لحل مشكلتك في أسرع وقت."
  },
  {
    img: serviceImg2,
    title: "فنيو أودي معتمدون",
    desc: "لدينا فنيو أودي معتمدون وذوو خبرة في التعامل مع كل مهمة بطارية أودي بدقة وتميز."
  },
  {
    img: serviceImg3,
    title: "قطع أودي أصلية وبطارية أصلية",
    desc: "يوصي فنيو أودي لدينا ويستخدمون فقط قطع غيار أودي الأصلية والبطارية الأصلية لكل مهمة مع ضمان رضا العملاء بنسبة 100%."
  },
  {
    img: serviceImg4,
    title: "بطارية خلال 15 دقيقة ولا رسوم خفية",
    desc: "لدينا واحدة من أفضل خدمات استبدال البطاريات في الموقع على مدار الساعة في دبي وأبوظبي."
  }
]

const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides you with 24/7 Audi Customer Support services, not just this we ensure you get all the right details which can resolve your issue asap."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Audi Specialists",
    desc: "We have certified Audi Specialists who are all experienced dealing with every Audi Car battery job with precision and excellence."
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Audi Parts & Genuine Battery",
    desc: "Our Audi Technicians only recommend and use genuine Audi parts and genuine car battery for every job with 100 percent customer satisfaction."
  },
  {
    icons: <FaSitemap />,
    title: "Battery Under 15 Minutes & No Hidden Charges",
    desc: "We have one of the best 24/7 onsite battery replacement services in Dubai and Abu Dhabi."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز 24/7",
    desc: "يقدم لك 800BatteryPro خدمات دعم عملاء أودي على مدار الساعة، وليس هذا فقط بل نضمن لك الحصول على جميع التفاصيل الصحيحة لحل مشكلتك في أسرع وقت."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو أودي معتمدون",
    desc: "لدينا فنيو أودي معتمدون وذوو خبرة في التعامل مع كل مهمة بطارية أودي بدقة وتميز."
  },
  {
    icons: <FaSitemap />,
    title: "قطع أودي أصلية وبطارية أصلية",
    desc: "يوصي فنيو أودي لدينا ويستخدمون فقط قطع غيار أودي الأصلية والبطارية الأصلية لكل مهمة مع ضمان رضا العملاء بنسبة 100%."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية خلال 15 دقيقة ولا رسوم خفية",
    desc: "لدينا واحدة من أفضل خدمات استبدال البطاريات في الموقع على مدار الساعة في دبي وأبوظبي."
  }
]

const englishFaqs = [
  {
    question: "Which one is the best Car Battery For Audi?",
    answer: "It depends on the year and type of your Audi, and what the optimum battery is. For newer Audis, AGM batteries from companies like Varta and Bosch are highly recommended because they work well with Audi's sophisticated features and are quite reliable."
  },
  {
    question: "What is the cost of an Audi Car Battery in Dubai?",
    answer: "The price of an Audi car battery in Dubai varies on the model and kind of battery. However, if you want to get a battery at a price that is comparable with the market and has no hidden fees, you may call 800BatteryPro at +971528475675. We have the greatest prices on Audi batteries. The AGM/EFB type, which is suitable for newer Audis, usually costs between AED 600 and 1,500."
  },
  {
    question: "How Long does an Audi Car Battery Last in Dubai?",
    answer: "Audi batteries usually last between three and five years, although the exact amount of time they last can depend on the weather and how you drive. AGM batteries usually live longer than regular batteries. You should always have a routine checkup once a year or every 10,000 km to drive safely. When it's really hot, clean the battery terminals often and look for rust. Check your battery often to make sure it's still holding a charge, especially in the scorching summers in the UAE. People really like AGM batteries because they can handle adverse weather."
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
    question: "ما هي أفضل بطارية سيارة لسيارة أودي؟",
    answer: "يعتمد ذلك على سنة ونوع سيارتك أودي والبطارية المثلى لها. بالنسبة لسيارات أودي الأحدث، يُوصى بشدة ببطاريات AGM من شركات مثل فارتا وبوش لأنها تعمل بشكل جيد مع ميزات أودي المتطورة وهي موثوقة للغاية."
  },
  {
    question: "كم تبلغ تكلفة بطارية أودي في دبي؟",
    answer: "يختلف سعر بطارية أودي في دبي حسب الموديل ونوع البطارية. ومع ذلك، إذا كنت ترغب في الحصول على بطارية بسعر منافس للسوق وبدون رسوم خفية، يمكنك الاتصال بـ 800BatteryPro على +971528475675. لدينا أفضل الأسعار على بطاريات أودي. عادة ما يكلف نوع AGM/EFB، المناسب لسيارات أودي الأحدث، ما بين 600 و 1500 درهم إماراتي."
  },
  {
    question: "كم تدوم بطارية أودي في دبي؟",
    answer: "تدوم بطاريات أودي عادة ما بين ثلاث وخمس سنوات، على الرغم من أن المدة الدقيقة تعتمد على الطقس وكيفية قيادتك. تدوم بطاريات AGM عادة أطول من البطاريات العادية. يجب عليك دائمًا إجراء فحص روتيني مرة سنويًا أو كل 10000 كيلومتر للقيادة بأمان. عندما يكون الجو حارًا جدًا، نظف أطراف البطارية كثيرًا وابحث عن الصدأ. افحص بطاريتك كثيرًا للتأكد من أنها لا تزال تحتفظ بالشحن، خاصة في صيف الإمارات الحارق. يحب الناس بطاريات AGM حقًا لأنها قادرة على تحمل الطقس القاسي."
  },
  {
    question: "هل يوجد خبراء سيارات ألمانية في دبي؟",
    answer: "نعم، 800BatteryPro هو واحد من المراكز الموثوقة ولديه فريق معتمد من خبراء السيارات الألمانية في دبي. لدينا مركز خدمة مجهز جيدًا بأحدث التقنيات المستخدمة في كل مهمة إصلاح لسيارة ألمانية. نتعامل مع كل ماركات السيارات بما في ذلك مرسيدس وبي إم دبليو وبورش وأودي وغيرها. اتصل بنا الآن لأي خدمة استبدال بطارية سيارة ألمانية على +971528475675."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية السيارات الألمانية في أبوظبي؟",
    answer: "نعم، لدى 800BatteryPro مراكز خدمة مجهزة تجهيزًا جيدًا في دبي وأبوظبي. نتعامل مع كل استبدال بطارية سيارة ألمانية باستبدال بطارية أصلية وفاخرة. قاعدة عملائنا راضية بنسبة 100٪ عن خدمات إصلاح السيارات والبطاريات لدينا. إذا كانت بطارية سيارتك فارغة، اتصل بنا الآن على +971528475675 للحصول على خدمات المساعدة الطارئة."
  }
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
      desc: "Audi Car Models We Serve",
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
            desc: "AUDI R8",
            car: carBrand1,
        },
        {
            desc: "AUDI TT",
            car: carBrand2,
        },
        {
            desc: "AUDI Q3",
            car: carBrand3,
        },
        {
            desc: "AUDI SQ5",
            car: carBrand4,
        },
        {
            desc: "AUDI SQ7",
            car: carBrand5,
        },
        {
            desc: "AUDI SQ8",
            car: carBrand6,
        },


         {
            desc: "AUDI S8",
            car: carBrand7,
        },

         {
            desc: "AUDI A6",
            car: carBrand8,
        },
         {
            desc: "AUDI S5",
            car: carBrand9,
        },
         {
            desc: "AUDI RS e-TRON GT",
            car: carBrand10,
        },
         {
            desc: "AUDI S3",
            car: carBrand11,
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

export default Audi