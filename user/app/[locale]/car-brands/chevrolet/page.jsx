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
  import carBrand1 from '@/public/brands/che/1.webp'
   import carBrand2 from '@/public/brands/che/2.webp'
    import carBrand3 from '@/public/brands/che/3.webp'
     import carBrand4 from '@/public/brands/che/4.webp'
      import carBrand5 from '@/public/brands/che/5.webp'
       import carBrand6 from '@/public/brands/che/6.webp'
        import carBrand7 from '@/public/brands/che/7.webp'
         import carBrand8 from '@/public/brands/che/8.webp'
         import carBrand9 from '@/public/brands/che/9.webp'
         import carBrand10 from '@/public/brands/che/10.webp'
         import carBrand11 from '@/public/brands/che/11.webp'
         import carBrand12 from '@/public/brands/che/12.webp'
         import carBrand13 from '@/public/brands/che/13.webp'
         import carBrand14 from '@/public/brands/che/14.webp'
         
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/che/service.webp"
import serviceImg5 from "@/public/brands/che/service1.webp"
import bg from '@/public/brands/che/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'

const Chevrolet = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "Chevrolet Car Battery ",
    span2: "Replacement"
  },
  desc1: "No Need to Panic if your Chevrolet Car Battery is Not Working! At 800BatteryPro, we provide quick on-site battery replacement, battery boosting, 24/7 roadside assistance and advance repair services anywhere in Dubai.",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "استبدال بطارية ",
    span2: "شيفروليه"
  },
  desc1: "لا داعي للذعر إذا كانت بطارية سيارتك شيفروليه لا تعمل! في 800BatteryPro، نقدم استبدال بطارية سريع في الموقع، وتعزيز البطارية، ومساعدة على الطريق 24/7، وخدمات إصلاح متقدمة في أي مكان في دبي.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Chevrolet Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "Chevrolet is one of the best American Car brands with its wide bodies and peak performance powertrains, considered as highly maintenance-demanding vehicles. In the harsh climate of the UAE, Chevrolet faces stressful situations with their car batteries. At 800BatteryPro, we have certified Chevrolet specialists who can do a quick Car Battery Replacement for you under 15 minutes, that too at no cost! Our team of technicians has the best equipment and battery testing technology to work on every car job, delivering 100 percent satisfaction. If you are facing trouble starting your car, flickering lights in the dashboard, or dim headlights, then you should immediately contact our expert at +971528475675. A non-functional battery is the main reason behind a malfunctioning electrical system, which needs to be replaced as soon as possible. Our customer support will assign a Chevrolet specialist to you, helping you get back on the road instantly."
    },
    {
      id: 2,
      description: "To make sure you don't face any car battery-related issues, you should do a routine battery check-up after each 10,000 Km's or once a year. Our technicians only use OEM-approved spare parts and genuine car batteries for every car job. If you are stranded somewhere on the road, you should get our 24/7 roadside assistance instantly with free Car battery boosting services. We are just a call away at +971528475675."
    },
    {
      id: 3,
      description: "800BatteryPro offers the following are the different types of Chevrolet Battery: For Chevrolet at 800BatteryPro, we recommend and provide different types of Car Batteries depending upon your car model. Starting with the Maintenance-free MF, Enhanced Flooded Battery EFB, traditional Lead Acid Battery, and also Absorbent Glass Mat AGM Chevrolet Batteries."
    },
    {
      id: 4,
      description: "Types of Chevrolet Car Batteries We Provide: MF BATTERY CHEVROLET: For standard Chevrolet Models we recommend Maintenance-Free Batteries for high power output and low maintenance. EFB BATTERY CHEVROLET: There are several Chevrolet Models with a start-stop technology system for which the Enhanced Flooded Battery (EFB) is the best solution used for their next-gen technology and capabilities of providing extended battery life. LEAD ACID BATTERY CHEVROLET: For customers who prefer a traditional lead acid battery for Chevrolet. For some of our customers who need a quick car battery solution within a tight budget, we recommend a Lead Acid Battery for Chevrolet. Our certified technicians recommend using the traditional lead-acid batteries, which are both trustworthy and inexpensive. CHEVROLET AGM BATTERY: For premium Chevrolet Models our technicians use and recommend the Absorbent Glass Mat (AGM) batteries, which are featured with highly capable, highly durable, and excellent performance. 800BatteryPro provides 24/7 roadside assistance with under 15 minutes of on-site Chevrolet car battery delivery anywhere in Dubai. Our battery testing and delivery are free of cost, while our battery warranty lasts up to 18 months. For premium Chevrolet Battery replacement and advanced repairs, contact us now at +971528475675 or book a free car inspection appointment right now!"
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية شيفروليه وخدمات الإصلاح المتقدمة",
  services: [
    {
      id: 1,
      description: "شيفروليه هي واحدة من أفضل ماركات السيارات الأمريكية بهياكلها العريضة ومجموعات نقل الحركة عالية الأداء، وتعتبر من المركبات التي تتطلب صيانة عالية. في مناخ الإمارات القاسي، تواجه شيفروليه مواقف مرهقة مع بطاريات سياراتها. في 800BatteryPro، لدينا فنيو شيفروليه معتمدون يمكنهم القيام باستبدال سريع لبطارية السيارة لك خلال أقل من 15 دقيقة، وبدون تكلفة! لدى فريق فنيينا أفضل المعدات وتقنيات اختبار البطارية للعمل على كل مهمة سيارة، وتقديم رضا بنسبة 100٪. إذا كنت تواجه مشكلة في تشغيل سيارتك، أو أضواء خافتة على لوحة العدادات، أو أضواء أمامية خافتة، فيجب عليك الاتصال فورًا بخبيرنا على +971528475675. البطارية غير العاملة هي السبب الرئيسي وراء خلل النظام الكهربائي، والذي يحتاج إلى الاستبدال في أسرع وقت ممكن. سيقوم دعم العملاء لدينا بتعيين أخصائي شيفروليه لك، لمساعدتك على العودة إلى الطريق فورًا."
    },
    {
      id: 2,
      description: "للتأكد من أنك لا تواجه أي مشاكل متعلقة ببطارية السيارة، يجب عليك إجراء فحص دوري للبطارية بعد كل 10000 كيلومتر أو مرة واحدة في السنة. يستخدم فنيونا فقط قطع الغيار المعتمدة من OEM وبطاريات السيارات الأصلية لكل مهمة سيارة. إذا كنت عالقًا في مكان ما على الطريق، فيجب عليك الحصول على مساعدتنا على الطريق 24/7 فورًا مع خدمات تعزيز بطارية السيارة المجانية. نحن على بعد مكالمة هاتفية على +971528475675."
    },
    {
      id: 3,
      description: "يقدم 800BatteryPro الأنواع التالية من بطاريات شيفروليه: بالنسبة لشيفروليه في 800BatteryPro، نوصي ونقدم أنواعًا مختلفة من بطاريات السيارات اعتمادًا على موديل سيارتك. بدءًا من البطاريات الخالية من الصيانة MF، والبطارية المحسنة المغمورة EFB، وبطارية الرصاص الحمضية التقليدية، وأيضًا بطاريات شيفروليه AGM (مات الزجاج الماص)."
    },
    {
      id: 4,
      description: "أنواع بطاريات شيفروليه التي نقدمها: بطارية MF شيفروليه: للموديلات القياسية من شيفروليه، نوصي ببطاريات خالية من الصيانة لإخراج طاقة عالية وصيانة منخفضة. بطارية EFB شيفروليه: هناك العديد من موديلات شيفروليه المزودة بنظام تقنية التشغيل والإيقاف والتي تعتبر البطارية المحسنة المغمورة (EFB) الحل الأفضل لها بسبب تقنياتها من الجيل التالي وقدراتها على توفير عمر بطارية ممتد. بطارية الرصاص الحمضية شيفروليه: للعملاء الذين يفضلون بطارية الرصاص الحمضية التقليدية لشيفروليه. بالنسبة لبعض عملائنا الذين يحتاجون إلى حل سريع لبطارية السيارة بميزانية محدودة، نوصي ببطارية الرصاص الحمضية لشيفروليه. يوصي فنيونا المعتمدون باستخدام بطاريات الرصاص الحمضية التقليدية، والتي تتميز بأنها موثوقة وغير مكلفة. بطارية شيفروليه AGM: للموديلات الفاخرة من شيفروليه، يستخدم فنيونا ويوصون ببطاريات AGM (مات الزجاج الماص)، والتي تتميز بقدرات عالية ومتانة عالية وأداء ممتاز. يوفر 800BatteryPro مساعدة على الطريق 24/7 مع توصيل بطارية شيفروليه في الموقع خلال أقل من 15 دقيقة في أي مكان في دبي. اختبار البطارية والتوصيل مجاني، بينما يصل ضمان البطارية إلى 18 شهرًا. للحصول على استبدال بطارية شيفروليه فاخر وإصلاحات متقدمة، اتصل بنا الآن على +971528475675 أو احجز موعدًا لفحص سيارتك المجاني الآن!"
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Chevrolet Service Center in Dubai – Premium American Car Battery Replacement",
  services: [
    {
      id: 1,
      description: "800BatteryPro has years of experience delivering 100 percent satisfactory Chevrolet Car Battery Replacement services and advance repair services in the UAE. We have a team of certified Chevrolet experts and a well-equipped service center in Dubai for serving every car job with complete customer satisfaction. Our 24/7 roadside assistance and free car inspections are available for all Chevrolet Standard, hybrid, all-electric, or Premium Models, which generally happen after every 10,000 KMs or once a year. Don't hesitate to book your next car appointment with us, as our technicians only use OEM-approved spare parts and genuine car batteries, ensuring peak performance for your Chevrolet. You can reserve your slot for your next Battery Check-up with the best Chevrolet car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة شيفروليه في دبي – استبدال بطارية سيارة أمريكية فاخرة",
  services: [
    {
      id: 1,
      description: "يمتلك 800BatteryPro سنوات من الخبرة في تقديم خدمات استبدال بطارية شيفروليه بنسبة رضا 100٪ وخدمات الإصلاح المتقدمة في الإمارات. لدينا فريق من خبراء شيفروليه المعتمدين ومركز خدمة مجهز تجهيزًا جيدًا في دبي لخدمة كل مهمة سيارة برضا عملاء كامل. مساعدتنا على الطريق 24/7 وفحوصات السيارات المجانية متاحة لجميع موديلات شيفروليه القياسية والهجينة والكهربائية بالكامل أو الفاخرة، والتي تتم عادة بعد كل 10000 كيلومتر أو مرة واحدة في السنة. لا تتردد في حجز موعد سيارتك القادم معنا، لأن فنيونا يستخدمون فقط قطع الغيار المعتمدة من OEM وبطاريات السيارات الأصلية، مما يضمن الأداء الأمثل لسيارتك شيفروليه. يمكنك حجز موعدك لفحص البطارية القادم مع أفضل خبراء سيارات شيفروليه في دبي. اتصل بنا على +971528475675 للحصول على مساعدة طارئة على الطريق 24/7."
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
    desc: "لدى 800BatteryPro فريق دعم عملاء مخصص يعمل 24/7 لجميع خدمات استبدال بطارية شيفروليه والإصلاح المتقدم في دبي وأبوظبي."
  },
  {
    img: serviceImg2,
    title: "فنيو شيفروليه معتمدون",
    desc: "يتمتع فنيونا بخبرة تزيد عن 5 سنوات في العمل على جميع ماركات السيارات الأمريكية بما في ذلك شيفروليه."
  },
  {
    img: serviceImg3,
    title: "قطع غيار شيفروليه أصلية",
    desc: "يستخدم فنيو شيفروليه المعتمدون لدينا فقط البطاريات الأصلية وقطع الغيار المعتمدة من OEM لكل مهمة سيارة."
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
    title: "Certified Maserati specialists",
    desc: "We have 30+ certified Maserati specialists, who are capable of handling every car programming, car battery replacement, and advance repair jobs delivering every car job with 100 percent customer satisfaction."
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
    desc: "يوفر لك 800BatteryPro دعم عملاء 24/7 لبطارية سيارتك شيفروليه وخدمات الإصلاح المتقدمة في دبي وأبوظبي."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو شيفروليه معتمدون",
    desc: "لدينا أكثر من 30 فني شيفروليه معتمد، قادرين على التعامل مع كل برمجة السيارات واستبدال بطارية السيارة ومهام الإصلاح المتقدمة، وتقديم كل مهمة سيارة بنسبة رضا عملاء 100%."
  },
  {
    icons: <FaSitemap />,
    title: "استخدام قطع غيار شيفروليه الأصلية",
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
    question: "What type of Battery does my Chevrolet need?",
    answer: "At 800BatteryPro, we have certified Chevrolet technicians who are great at working on all American car brands using only OEM-approved and genuine Car batteries. We recommend using AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for cars with start-stop systems. While for the hybrid or all-electric models, the lithium-ion batteries. For more details related to certified Chevrolet technicians, call us at +971 528475675."
  },
  {
    question: "How long does a Chevrolet battery last?",
    answer: "A genuine Chevrolet Battery may last from 2-5 years, which directly depends upon the mileage of your car, the climate conditions in which you drive the car, and how you drive. Which needs a routine check-up after a specific time, most commonly yearly or after 10,000 KM. You can book a free battery check-up at 800BatteryPro right now!"
  },
  {
    question: "How much does it cost to replace a Chevrolet battery?",
    answer: "Chevrolet battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes free installations and system check-ups."
  },
  {
    question: "Do I need to reset my Chevrolet system after battery replacement?",
    answer: "Yes, our Chevrolet specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
  },
  {
    question: "Can I upgrade to a lithium battery for my Chevrolet?",
    answer: "Yes, it's possible to upgrade to a premium lithium battery for Chevrolet, with advance features, lighter weight, longevity, and faster charging capabilities. At the same time, our Chevrolet Car Battery specialist ensures the use of OEM-Approved Battery for all car jobs."
  },
  {
    question: "Do you offer on-site Chevrolet battery replacement in Dubai?",
    answer: "Yes, 800BatteryPro offers on-site Chevrolet battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
  },
  {
    question: "Any American Car Experts in Dubai?",
    answer: "Yes, 800BatteryPro is one of the trusted and has a certified team of American car experts in Dubai. We have a well-equipped service center with the latest technology used for every American car repair job. We treat every car brand, including Jeep, GMC, Chevrolet, and Tesla, etc. Call us now for any American car battery replacement services at +971528475675."
  },
  {
    question: "Do we provide American Car Battery Replacement in Abu Dhabi?",
    answer: "Yes, 800BatteryPro has well-equipped service centers in Dubai and Abu Dhabi. We treat every American car battery replacement with genuine and premium car battery replacements. Our customer base is 100 percent satisfied with our auto repair and battery services. If your car battery is dead, call us now at +971528475675 for emergency assistance services."
  },
]

const arabicFaqs = [
  {
    question: "ما نوع البطارية التي تحتاجها سيارة شيفروليه الخاصة بي؟",
    answer: "في 800BatteryPro، لدينا فنيو شيفروليه معتمدون وهم ماهرون في العمل على جميع ماركات السيارات الأمريكية باستخدام فقط بطاريات السيارات الأصلية والمعتمدة من OEM. نوصي باستخدام AGM (مات الزجاج الماص) أو EFB (البطاريات المحسنة المغمورة) للسيارات المزودة بأنظمة التشغيل والإيقاف. بينما بالنسبة للموديلات الهجينة أو الكهربائية بالكامل، نوصي ببطاريات الليثيوم أيون. لمزيد من التفاصيل المتعلقة بفنيي شيفروليه المعتمدين، اتصل بنا على +971528475675."
  },
  {
    question: "كم تدوم بطارية شيفروليه؟",
    answer: "قد تدوم بطارية شيفروليه الأصلية من 2-5 سنوات، والتي تعتمد بشكل مباشر على عدد الكيلومترات التي تقطعها سيارتك، وظروف المناخ التي تقود فيها السيارة، وكيفية قيادتك. مما يحتاج إلى فحص روتيني بعد وقت محدد، الأكثر شيوعًا سنويًا أو بعد 10000 كيلومتر. يمكنك حجز فحص بطارية مجاني في 800BatteryPro الآن!"
  },
  {
    question: "كم تكلفة استبدال بطارية شيفروليه؟",
    answer: "تعتمد تكلفة استبدال بطارية شيفروليه على نوع وموديل سيارتك، كما تعتمد أيضًا على نوع البطارية. عندما يتعلق الأمر بـ 800BatteryPro، يتراوح متوسط أسعار بطارية السيارة من 500 إلى 1500 درهم إماراتي في دبي وأبوظبي، والذي يشمل أيضًا التركيب المجاني وفحوصات النظام."
  },
  {
    question: "هل أحتاج إلى إعادة ضبط نظام شيفروليه بعد استبدال البطارية؟",
    answer: "نعم، يضمن فنيو شيفروليه لدينا أنه أثناء استبدال البطارية، يتم إعادة ضبط جميع الأنظمة وإعادة معايرتها من أجل الأداء السليم للنظام الإلكتروني. يتم الاهتمام بنظام إدارة البطارية (BMS) لتجنب المزيد من المشكلات الفنية في سيارتك، مثل إعادة معايرة أنظمة التشغيل والإيقاف ونظام المعلومات والترفيه وميزات النظام المتقدمة الأخرى."
  },
  {
    question: "هل يمكنني الترقية إلى بطارية ليثيوم لسيارة شيفروليه الخاصة بي؟",
    answer: "نعم، من الممكن الترقية إلى بطارية ليثيوم فاخرة لسيارة شيفروليه، بميزات متقدمة ووزن أخف وطول عمر وقدرات شحن أسرع. وفي الوقت نفسه، يضمن أخصائي بطارية شيفروليه لدينا استخدام بطارية معتمدة من OEM لجميع مهام السيارات."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية شيفروليه في الموقع في دبي؟",
    answer: "نعم، يقدم 800BatteryPro خدمة استبدال بطارية شيفروليه في الموقع في دبي. يمكنك الاتصال بنا للحصول على مساعدة على الطريق 24/7 أو أي حلول أخرى لبطارية السيارة في أي مكان في دبي وأبوظبي."
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
      desc: "Chevrolet Car Models We Serve",
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
            desc: "Silverado EV",
            car: carBrand1,
        },
        {
            desc: "BrightDrop",
            car: carBrand2,
        },
        {
            desc: "ZR1X",
            car: carBrand3,
        },
        {
            desc: "ZR1",
            car: carBrand4,
        },
        {
            desc: "E-Ray",
            car: carBrand5,
        },
        {
            desc: "Stingray",
            car: carBrand6,
        },
        {
            desc: "Suburban",
            car: carBrand7,
        },
        {
            desc: "Tahoe",
            car: carBrand8,
        },
                {
            desc: "Traverse",
            car: carBrand9,
        },
                {
            desc: "Blazer EV",
            car: carBrand10,
        },
                {
            desc: "Equinox",
            car: carBrand11,
        },
                {
            desc: "Trax",
            car: carBrand12,
        },
                {
            desc: "Silverado HD",
            car: carBrand13,
        },
                {
            desc: "Colarado",
            car: carBrand14,
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

export default Chevrolet