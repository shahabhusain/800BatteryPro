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
import serviceImg from "@/public/brands/mercedes/service.webp"
import serviceImg5 from "@/public/brands/mercedes/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/mercedes/1.webp'
   import carBrand2 from '@/public/brands/mercedes/2.webp'
    import carBrand3 from '@/public/brands/mercedes/3.webp'
     import carBrand4 from '@/public/brands/mercedes/4.webp'
      import carBrand5 from '@/public/brands/mercedes/5.webp'
       import carBrand6 from '@/public/brands/mercedes/6.webp'
        import carBrand7 from '@/public/brands/mercedes/7.webp'
         import carBrand8 from '@/public/brands/mercedes/8.webp'
          import carBrand9 from '@/public/brands/mercedes/9.webp'
           import carBrand10 from '@/public/brands/mercedes/10.webp' 
            import carBrand11 from '@/public/brands/mercedes/11.webp'
            import carBrand12 from '@/public/brands/mercedes/12.webp'
            import carBrand13 from '@/public/brands/mercedes/13.webp'
            import carBrand14 from '@/public/brands/mercedes/14.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/mercedes/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const Mercedes = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: " Mercedes Car Battery Replacement  ",
    span2: " & Car Programming"
  },
  desc1: "Don't stress if your Car Battery Is Dead! 800BatteryPro provides instant Battery Replacement for your Mercedes-Benz in Dubai. We only provide genuine Battery Brands & Top Customer Support.",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "استبدال بطارية مرسيدس ",
    span2: "وبرمجة السيارات"
  },
  desc1: "لا تقلق إذا كانت بطارية سيارتك فارغة! يقدم 800BatteryPro استبدال فوري للبطارية لسيارتك مرسيدس-بنز في دبي. نحن نقدم فقط ماركات البطاريات الأصلية وأفضل دعم للعملاء.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Mercedes-Benz Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "Don't panic if your Mercedes battery is dead! The best car battery replacement services in Dubai are just a click away. 800BatteryPro is trusted by thousands for its quick response and onsite battery services. We have a team of certified Mercedes specialists in Dubai who knows everything about how to get your car back on the road. With the latest battery boosting equipment and a well-equipped service centre in Dubai and Abu Dhabi, you have us as a trusted partner in all car battery-related services. Whether it's the legendary Mercedes SLR, a luxury vehicle like the S-Class, a premium SUV like the G-Wagon, or any other custom-built model, our technicians only use AGM and Lithium batteries."
    },
    {
      id: 2,
      description: "800BatteryPro provides 24/7 roadside assistance with under 15 minutes of onsite car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months. For premium Mercedes Battery replacement and car programming, contact us now at +971528475675 or book a free car inspection right now!"
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية مرسيدس-بنز وخدمات الإصلاح المتقدمة",
  services: [
    {
      id: 1,
      description: "لا داعي للذعر إذا كانت بطارية مرسيدس الخاصة بك فارغة! أفضل خدمات استبدال بطارية السيارة في دبي هي على بعد نقرة واحدة. يثق الآلاف في 800BatteryPro لاستجابته السريعة وخدمات البطارية في الموقع. لدينا فريق من فنيي مرسيدس المعتمدين في دبي الذين يعرفون كل شيء عن كيفية إعادة سيارتك إلى الطريق. باستخدام أحدث معدات تعزيز البطارية ومركز خدمة مجهز تجهيزًا جيدًا في دبي وأبوظبي، يمكنك الاعتماد علينا كشريك موثوق في جميع الخدمات المتعلقة ببطارية السيارة. سواء كانت مرسيدس SLR الأسطورية، أو سيارة فاخرة مثل S-Class، أو سيارة دفع رباعي فاخرة مثل G-Wagon، أو أي موديل آخر مصمم خصيصًا، يستخدم فنيونا فقط بطاريات AGM والليثيوم."
    },
    {
      id: 2,
      description: "يوفر 800BatteryPro مساعدة على الطريق 24/7 مع توصيل بطارية السيارة في الموقع خلال أقل من 15 دقيقة في أي مكان في دبي. اختبار البطارية والتوصيل مجاني، بينما يصل ضمان البطارية إلى 18 شهرًا. للحصول على استبدال بطارية مرسيدس فاخر وبرمجة السيارات، اتصل بنا الآن على +971528475675 أو احجز فحص سيارة مجاني الآن!"
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Mercedes Service Centre in Dubai",
  services: [
    {
      id: 1,
      description: "It's important to get the right Mercedes-Benz battery, and at 800BatteryPro, we're here to help you choose the right one for your model. We have a wide range of batteries in stock, giving you numerous choices."
    },
    {
      id: 2,
      description: "Mercedes-Benz vehicles feature two batteries: the main battery powers the car's electrical systems, while the auxiliary battery supports functions like lights, radio, and Stop-Start mechanisms. The main AGM battery is located under the hood, while the auxiliary battery is typically in the trunk or rear seat. Understanding their roles is crucial for timely replacement. 800BatteryPro, serving Dubai and Abu Dhabi, specializes in replacing both main and auxiliary Mercedes-Benz batteries. Trust their expertise for seamless battery solutions."
    },
    {
      id: 3,
      description: "For Mercedes-Benz, our services catalogue includes 24/7 roadside assistance, Free Battery Boosting, advance car repairs (i.e ECU, TCM, etc.), and all electrical and mechanical repair services delivered with 100 percent customer satisfaction and market competitive pricing. Our technicians only use OEM standard spare parts for Mercedes-Benz, which ensures peak engine performance and luxury."
    },
    {
      id: 4,
      description: "You can reserve your slot for your next Battery Checkup with the best Mercedes-Benz car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة مرسيدس في دبي",
  services: [
    {
      id: 1,
      description: "من المهم الحصول على بطارية مرسيدس-بنز الصحيحة، وفي 800BatteryPro، نحن هنا لمساعدتك في اختيار البطارية المناسبة لموديل سيارتك. لدينا مجموعة واسعة من البطاريات في المخزون، مما يمنحك خيارات عديدة."
    },
    {
      id: 2,
      description: "تتميز سيارات مرسيدس-بنز ببطاريتين: البطارية الرئيسية تشغل الأنظمة الكهربائية للسيارة، بينما تدعم البطارية المساعدة وظائف مثل الأضواء والراديو وأنظمة التشغيل والإيقاف. توجد بطارية AGM الرئيسية تحت غطاء المحرك، بينما توجد البطارية المساعدة عادة في صندوق السيارة الخلفي أو المقعد الخلفي. فهم أدوارهما أمر بالغ الأهمية للاستبدال في الوقت المناسب. 800BatteryPro، الذي يخدم دبي وأبوظبي، متخصص في استبدال بطاريات مرسيدس-بنز الرئيسية والمساعدة. ثق بخبرتهم للحصول على حلول بطارية سلسة."
    },
    {
      id: 3,
      description: "بالنسبة لمرسيدس-بنز، تشمل قائمة خدماتنا المساعدة على الطريق 24/7، وتعزيز البطارية المجاني، وإصلاحات السيارات المتقدمة (مثل ECU، TCM، وغيرها)، وجميع خدمات الإصلاح الكهربائي والميكانيكي المقدمة بنسبة رضا عملاء 100٪ وأسعار تنافسية في السوق. يستخدم فنيونا فقط قطع الغيار الأصلية بمعايير OEM لمرسيدس-بنز، مما يضمن أداء المحرك الأمثل والفخامة."
    },
    {
      id: 4,
      description: "يمكنك حجز موعدك لفحص البطارية القادم مع أفضل خبراء سيارات مرسيدس-بنز في دبي. اتصل بنا على +971528475675 للحصول على مساعدة طارئة على الطريق 24/7."
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
    desc: "يوفر لك 800BatteryPro خدمات بطارية مرسيدس-بنز في الوقت المحدد مع دعم عملاء ممتاز على مدار الساعة."
  },
  {
    img: serviceImg2,
    title: "فنيو مرسيدس-بنز معتمدون",
    desc: "لدينا فريق من فنيي مرسيدس-بنز المعتمدين يستخدمون قطع غيار مرسيدس الأصلية وبطاريات السيارات ذات العلامات التجارية لكل خدمة سيارة نقدمها."
  },
  {
    img: serviceImg3,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "بمجرد استلام مكالمة الطوارئ الخاصة بخدمات بطارية السيارة، يقدم فريقنا كل استبدال لبطارية السيارة خلال أقل من 15 دقيقة."
  },
  {
    img: serviceImg4,
    title: "أسعار تنافسية في السوق ولا رسوم خفية",
    desc: "إلى جانب فحص البطارية المجاني وتوصيل البطارية المجاني، تتوفر خدمات بطارية مرسيدس لدينا بأسعار تنافسية في السوق."
  }
]

const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Premium 24/7 Customer",
    desc: "800BatteryPro provides Compassionate 24/7 Customer Support For BMW In Dubai. We offer you with a complete car care solution on pricing."
  },
  {
    icons: <FaSitemap />,
    title: "Certified BMW specialists",
    desc: "We have a team of certified BMW specialists, who have 5+ years of experience working on different BMW models and Car Batteries."
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine BMW Parts",
    desc: "Our certified BMW specialists only use OEM approved spare parts and Branded BMW batteries for all car jobs."
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "800BatteryPro offers 24/7 roadside assistance with our free battery delivery, our technicians use the latest equipment to work on your replacement."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز 24/7",
    desc: "يوفر 800BatteryPro دعم عملاء مميز على مدار الساعة لسيارات مرسيدس-بنز في دبي. نقدم لك حلاً كاملاً للعناية بالسيارة بأسعار تنافسية."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو مرسيدس-بنز معتمدون",
    desc: "لدينا فريق من فنيي مرسيدس-بنز المعتمدين، الذين لديهم أكثر من 5 سنوات من الخبرة في العمل على موديلات مرسيدس المختلفة وبطاريات السيارات."
  },
  {
    icons: <FaSitemap />,
    title: "استخدام قطع غيار مرسيدس الأصلية",
    desc: "يستخدم فنيو مرسيدس-بنز المعتمدون لدينا فقط قطع الغيار المعتمدة من OEM وبطاريات مرسيدس ذات العلامات التجارية لجميع مهام السيارات."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "يقدم 800BatteryPro مساعدة على الطريق 24/7 مع توصيل بطارية مجاني، ويستخدم فنيونا أحدث المعدات للعمل على استبدالك."
  }
]

const englishFaqs = [
  {
    question: "When should I change the brake pads on my Mercedes?",
    answer: "We inspect the brake pads at every service to see how much life they have left and suggest changing them when they have 20–15% of their life left. Also, most new automobiles feature sensors that let you know when the brake pad is about to wear out. If your automobile contains brake pad sensors, you should change the pads right away (within 1000Km) when you see the alert on your dashboard. If you wait too long to change your brake pads, you could damage your disk brakes and calipers, which are expensive to fix or replace."
  },
  {
    question: "How much does a Mercedes Service cost?",
    answer: "Not all Mercedes models are the same. The cost of service will depend on the model, engine, and drivetrain specifications. To find out how much it will cost to service your automobile, please fill out an inquiry form or call us. Our knowledgeable Service Advisors will be happy to help you and give you an estimate."
  },
  {
    question: "Why is it important to service my Mercedes with manufacturer-recommended oil and Filter, when there are cheaper alternatives available?",
    answer: "Your Mercedes engine is very well designed and has very small tolerances. The makers picked a certain brand and grade of oil that works best with each engine during testing and design. Changing the kind and occasionally even the brand of oil can make the engine run worse and wear it out faster. We use the kind and grade of oil that the manufacturer recommends, even if it costs a little more, because it makes the engine last longer and work better."
  },
  {
    question: "When I brake, my Mercedes vibrates, why?",
    answer: "If your car shakes when you brake, it could be because the brake pads or brake disks are broken. Your suspension, misaligned tires, or uneven tire wear could also be causing the vibration. A specialist should look at your car to find the problem and fix it in the best way."
  },
  {
    question: "My Mercedes's check engine light is on. What should I do?",
    answer: "If you are driving, you should not drive the automobile or pull over safely. When there is an electronic or mechanical problem with your car's engine, the check engine light comes on. It could be anything small, like dirty injectors, or something big that could hurt your engine. We won't know until a technician connects a diagnostic instrument to your Mercedes and looks at the trouble codes. Please call us right away so we can help you avoid any major issues."
  },
  {
    question: "Any German Car Experts in Dubai?",
    answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of German car experts in Dubai. We have a well-equipped service centre with the latest technology used for every German car repair job. We treat every car brand, including Mercedes, BMW, Porsche, and Audi, etc. Call us now for any German car battery replacement services at +971528475675."
  },
  {
    question: "Do we provide German Car Battery Replacement in Abu Dhabi?",
    answer: "Yes, 800BatteryPro has well-equipped service centres in Dubai and Abu Dhabi. We treat every German car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services."
  },
  {
    question: "Which car battery do we use for replacement services?",
    answer: "Our German car specialist only uses premium AGM and Lithium-ion batteries for Mercedes Battery replacements. We only recommend high-quality and long-lasting car batteries, which ensure peak performance and safety for our customers."
  },
  {
    question: "What's the best way to get your dead battery active?",
    answer: "Don't get stressed if your car battery is dead. Our German car experts in Dubai and Abu Dhabi use the latest equipment and technology to get your vehicle back on the road. Call us now for instant battery boosting services under 15 minutes."
  },
]

const arabicFaqs = [
  {
    question: "متى يجب علي تغيير تيل الفرامل في سيارتي مرسيدس؟",
    answer: "نقوم بفحص تيل الفرامل في كل خدمة لمعرفة المدة المتبقية لها ونقترح تغييرها عندما يتبقى 15-20٪ من عمرها. أيضًا، معظم السيارات الجديدة مزودة بأجهزة استشعار تخبرك عندما يكون تيل الفرامل على وشك التآكل. إذا كانت سيارتك تحتوي على أجهزة استشعار لتيل الفرامل، فيجب عليك تغيير التيل فورًا (في غضون 1000 كيلومتر) عندما ترى التنبيه على لوحة العدادات. إذا انتظرت فترة طويلة جدًا لتغيير تيل الفرامل، فقد تتلف فرامل القرص والملاقط، والتي يكون إصلاحها أو استبدالها مكلفًا."
  },
  {
    question: "كم تكلفة خدمة مرسيدس؟",
    answer: "ليست كل موديلات مرسيدس متشابهة. ستعتمد تكلفة الخدمة على الموديل والمحرك ومواصفات مجموعة الحركة. لمعرفة تكلفة خدمة سيارتك، يرجى ملء نموذج استفسار أو الاتصال بنا. سيسعد مستشارو الخدمة ذوو المعرفة لدينا بمساعدتك وتقديم تقدير لك."
  },
  {
    question: "لماذا من المهم صيانة سيارتي مرسيدس بالزيت والفلتر الموصى بهما من قبل الشركة المصنعة، عندما توجد بدائل أرخص؟",
    answer: "محرك مرسيدس الخاص بك مصمم بشكل جيد للغاية وله تفاوتات صغيرة جدًا. اختار المصنعون علامة تجارية ودرجة معينة من الزيت تعمل بشكل أفضل مع كل محرك أثناء الاختبار والتصميم. تغيير نوع الزيت وأحيانًا حتى العلامة التجارية يمكن أن يجعل المحرك يعمل بشكل أسئ ويسبب تآكلًا أسرع. نستخدم نوع ودرجة الزيت التي توصي بها الشركة المصنعة، حتى لو كان ذلك يكلف أكثر قليلاً، لأنه يجعل المحرك يدوم لفترة أطول ويعمل بشكل أفضل."
  },
  {
    question: "عندما أضغط على الفرامل، تهتز سيارتي مرسيدس، لماذا؟",
    answer: "إذا كانت سيارتك تهتز عند الضغط على الفرامل، فقد يكون ذلك بسبب تلف تيل الفرامل أو أقراص الفرامل. قد يتسبب نظام التعليق أو الإطارات غير المحاذاة أو تآكل الإطارات غير المتساوي أيضًا في الاهتزاز. يجب أن ينظر أخصائي في سيارتك للعثور على المشكلة وإصلاحها بأفضل طريقة."
  },
  {
    question: "ضوء فحص المحرك في سيارتي مرسيدس مضاء. ماذا علي أن أفعل؟",
    answer: "إذا كنت تقود، فلا يجب أن تستمر في قيادة السيارة أو تتوقف بأمان. عند وجود مشكلة إلكترونية أو ميكانيكية في محرك سيارتك، يضيء ضوء فحص المحرك. قد يكون شيئًا صغيرًا، مثل الحقن المتسخة، أو شيئًا كبيرًا يمكن أن يضر محركك. لن نعرف حتى يقوم فني بتوصيل أداة تشخيص بسيارتك مرسيدس والنظر إلى رموز الأعطال. يرجى الاتصال بنا على الفور حتى نتمكن من مساعدتك في تجنب أي مشاكل كبيرة."
  },
  {
    question: "هل يوجد خبراء سيارات ألمانية في دبي؟",
    answer: "نعم، 800BatteryPro هو واحد من المراكز الموثوقة ولديه فريق معتمد من خبراء السيارات الألمانية في دبي. لدينا مركز خدمة مجهز جيدًا بأحدث التقنيات المستخدمة في كل مهمة إصلاح للسيارات الألمانية. نتعامل مع كل ماركات السيارات بما في ذلك مرسيدس وبي إم دبليو وبورش وأودي وغيرها. اتصل بنا الآن لأي خدمة استبدال بطارية سيارة ألمانية على +971528475675."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية السيارات الألمانية في أبوظبي؟",
    answer: "نعم، لدى 800BatteryPro مراكز خدمة مجهزة تجهيزًا جيدًا في دبي وأبوظبي. نتعامل مع كل استبدال بطارية سيارة ألمانية باستبدال بطارية أصلية وفاخرة. قاعدة عملائنا راضية بنسبة 100٪ عن خدمات إصلاح السيارات والبطاريات لدينا. إذا كانت بطارية سيارتك فارغة، اتصل بنا الآن على +971528475675 للحصول على خدمات المساعدة الطارئة."
  },
  {
    question: "ما هي بطارية السيارة التي تستخدمونها لخدمات الاستبدال؟",
    answer: "يستخدم أخصائي السيارات الألمانية لدينا فقط بطاريات AGM والليثيوم أيون الفاخرة لاستبدال بطاريات مرسيدس. نوصي فقط ببطاريات السيارات عالية الجودة وطويلة الأمد، والتي تضمن الأداء الأمثل والسلامة لعملائنا."
  },
  {
    question: "ما هي أفضل طريقة لتنشيط البطارية الفارغة؟",
    answer: "لا تشدد إذا كانت بطارية سيارتك فارغة. يستخدم خبراء السيارات الألمانية لدينا في دبي وأبوظبي أحدث المعدات والتقنيات لإعادة سيارتك إلى الطريق. اتصل بنا الآن للحصول على خدمات تعزيز البطارية الفورية خلال أقل من 15 دقيقة."
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
      desc: "Mercedes Car Models We Serve",
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
            desc: "Mercedes-Maybach EQS SUV",
            car: carBrand1,
        },
        {
            desc: "CLA Sedan",
            car: carBrand2,
        },
        {
            desc: "C-Class Sedan",
            car: carBrand3,
        },
        {
            desc: "E-Class Sedan",
            car: carBrand4,
        },
        {
            desc: "E-Class SedanEQE Sedan",
            car: carBrand5,
        },
        {
            desc: "S-Class Sedan",
            car: carBrand6,
        },
        {
            desc: "E-Class Wagon",
            car: carBrand7,
        },
        {
            desc: "AMG S 63 E PERFORMANCE Sedan",
            car: carBrand8,
        },
          {
            desc: "CLE Coupe",
            car: carBrand9,
        },
          {
            desc: "CLE Coupe",
            car: carBrand10,
        },
         {
            desc: "AMG SL Roadster",
            car: carBrand11,
        },
         {
            desc: "Mercedes-Maybach GLS SUV",
            car: carBrand12,
        },
         {
            desc: "G-Class SUV",
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

export default Mercedes