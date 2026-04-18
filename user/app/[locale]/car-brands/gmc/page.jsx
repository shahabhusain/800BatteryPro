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
  import carBrand1 from '@/public/brands/gmc/1.webp'
   import carBrand2 from '@/public/brands/gmc/2.webp'
    import carBrand3 from '@/public/brands/gmc/3.webp'
     import carBrand4 from '@/public/brands/gmc/4.webp'
      import carBrand5 from '@/public/brands/gmc/5.webp'
       import carBrand6 from '@/public/brands/gmc/6.webp'
        import carBrand7 from '@/public/brands/gmc/7.webp'
         import carBrand8 from '@/public/brands/gmc/8.webp'
          import carBrand9 from '@/public/brands/gmc/9.webp'
           import carBrand10 from '@/public/brands/gmc/10.webp' 
            import carBrand11 from '@/public/brands/gmc/11.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import serviceImg from "@/public/brands/gmc/service.webp"
import serviceImg5 from "@/public/brands/gmc/service1.webp"
import bg from '@/public/brands/gmc/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'

const Gmc = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "GMC Car Battery Replacement ",
    span2: "& Advanced Repairs"
  },
  desc1: "Don't panic if your GMC Car Battery Needs Quick Replacement or any other advance repairs. 800BatteryPro provides 24/7 roadside assistance under 30 minutes.",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "استبدال بطارية جي إم سي ",
    span2: "وإصلاحات متقدمة"
  },
  desc1: "لا داعي للذعر إذا كانت بطارية سيارتك جي إم سي بحاجة إلى استبدال سريع أو أي إصلاحات متقدمة أخرى. يقدم 800BatteryPro مساعدة على الطريق 24/7 خلال أقل من 30 دقيقة.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "GMC Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "Suppose you got a non-active battery that causes dim lights, electronic system fluctuations, and other issues. Our certified GMC technicians provide on-site services for all GMC car battery replacements, along with battery boosting and advance repairs. 800BatteryPro only recommends and uses car batteries that use Sila Nanotechnologies, sodium-ion batteries, solid-state batteries, and more. Our team of GMC specialists is experienced in providing 100 percent satisfactory jobs related to every GMC Battery replacement in Dubai and Abu Dhabi, ensuring you drive safely and stress-free. We are one of the trusted GMC service centres in Dubai, as we only use manufacturer-recommended car batteries, which ensures long-term peak performance. If you see any battery-failure issues, no need to stress, call us at +971528475675. 800BatteryPro provides Auxiliary and lithium batteries for GMC Cars in Dubai."
    },
    {
      id: 2,
      description: "800BatteryPro offers the following are the different types of GMC Battery: Our car battery specialist recommends both AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for premium models while, for newer hybrid GMC car's we only use OEM-approved Lithium Battery for ensuring peak performance and longevity. Here are two different scale of GMC Battery that we offer to our customers:"
    },
    {
      id: 3,
      description: "Auxiliary Battery GMC: Like for any other American car brand, GMC Auxiliary Battery replacement ensures your seamless functionality for your car's electronic system. The auxiliary battery supports car infotainment, start-stop system, and also the smart driver-assistance systems. There is a high chance that auxiliary battery functionality may degrade due to extreme heat, leading to malfunctions or warning messages showing up on the dashboard. GMC Battery replacement needs great expertise as removing an old unit needs close attention to detail, and also for installing a genuine, OEM-approved battery. Recalibration of your car system is involved for optimizing performance and better compatibility. A routine battery check-up is compulsory to avoid any stressful times on the road."
    },
    {
      id: 4,
      description: "GMC Lithium Battery: Some of the new models now need a different solution, as GMC Lithium Battery Replacement is high in demand due to its superior features, offering long-term peak performance, are lighter in weight and quick in charging. While doing the replacement for the GMC Lithium battery, our technicians ensure to use only OEM-approved batteries and equipment, and also recalibrate the Battery Management System (BMS). If you face any issue with a new model GMC car with advance features, call us at +971528475675."
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية جي إم سي وخدمات الإصلاح المتقدمة",
  services: [
    {
      id: 1,
      description: "إذا كانت لديك بطارية غير نشطة تسبب خفوت الأضواء وتقلبات النظام الإلكتروني ومشاكل أخرى. يقدم فنيو جي إم سي المعتمدون لدينا خدمات في الموقع لجميع عمليات استبدال بطارية جي إم سي، إلى جانب تعزيز البطارية والإصلاحات المتقدمة. يوصي ويستخدم 800BatteryPro فقط بطاريات السيارات التي تستخدم تقنيات Sila Nanotechnologies وبطاريات الصوديوم أيون والبطاريات ذات الحالة الصلبة وغيرها. فريق خبراء جي إم سي لدينا لديه خبرة في تقديم مهام مرضية بنسبة 100٪ تتعلق بكل استبدال بطارية جي إم سي في دبي وأبوظبي، مما يضمن لك القيادة بأمان وبدون إجهاد. نحن واحد من مراكز خدمة جي إم سي الموثوقة في دبي، لأننا نستخدم فقط بطاريات السيارات الموصى بها من قبل الشركة المصنعة، مما يضمن أداءً ذروة طويل الأمد. إذا واجهت أي مشاكل في فشل البطارية، فلا داعي للتوتر، اتصل بنا على +971528475675. يوفر 800BatteryPro بطاريات مساعدة وليثيوم لسيارات جي إم سي في دبي."
    },
    {
      id: 2,
      description: "يقدم 800BatteryPro الأنواع التالية من بطاريات جي إم سي: يوصي أخصائي بطارية السيارة لدينا ببطاريات AGM (مات الزجاج الماص) أو EFB (البطاريات المحسنة المغمورة) للموديلات الفاخرة، بينما بالنسبة لسيارات جي إم سي الهجينة الأحدث، نستخدم فقط بطارية الليثيوم المعتمدة من OEM لضمان الأداء الأمثل وطول العمر. فيما يلي نوعان مختلفان من بطاريات جي إم سي التي نقدمها لعملائنا:"
    },
    {
      id: 3,
      description: "بطارية جي إم سي المساعدة: مثل أي علامة تجارية أخرى للسيارات الأمريكية، يضمن استبدال بطارية جي إم سي المساعدة أداءً سلسًا لنظام سيارتك الإلكتروني. تدعم البطارية المساعدة نظام المعلومات والترفيه في السيارة، ونظام التشغيل والإيقاف، وأنظمة مساعدة السائق الذكية. هناك احتمال كبير أن تتدهور وظيفة البطارية المساعدة بسبب الحرارة الشديدة، مما يؤدي إلى أعطال أو ظهور رسائل تحذيرية على لوحة العدادات. يحتاج استبدال بطارية جي إم سي إلى خبرة كبيرة لأن إزالة الوحدة القديمة تتطلب اهتمامًا شديدًا بالتفاصيل، وكذلك لتركيب بطارية أصلية معتمدة من OEM. تتضمن إعادة معايرة نظام سيارتك لتحسين الأداء والتوافق بشكل أفضل. الفحص الروتيني للبطارية إلزامي لتجنب أي أوقات مرهقة على الطريق."
    },
    {
      id: 4,
      description: "بطارية جي إم سي الليثيوم: تحتاج بعض الموديلات الجديدة الآن إلى حل مختلف، حيث أن استبدال بطارية جي إم سي الليثيوم مطلوب بشدة بسبب ميزاتها المتفوقة، حيث توفر أداءً ذروة طويل الأمد، وهي أخف وزنًا وسريعة الشحن. أثناء استبدال بطارية جي إم سي الليثيوم، يضمن فنيونا استخدام البطاريات والمعدات المعتمدة من OEM فقط، وكذلك إعادة معايرة نظام إدارة البطارية (BMS). إذا واجهت أي مشكلة مع سيارة جي إم سي موديل جديد بميزات متقدمة، فاتصل بنا على +971528475675."
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "GMC Service Centre in Dubai",
  services: [
    {
      id: 1,
      description: "Premium German Car Battery Replacement & Car Repairs - We offer expert GMC battery service to ensure your vehicle performs at its best. Whether you drive a standard model or a GMC hybrid, maintaining a healthy battery is crucial for smooth and reliable operation. Our skilled technicians are equipped to handle everything from standard battery maintenance to GMC hybrid battery replacement, ensuring optimal performance for your eco-friendly vehicle. 800BatteryPro is one of the trusted GMC service centers in Dubai and Abu Dhabi. If you are driving a GMC premium, standard model or a hybrid version, our American Car experts know how to deliver a 100 percent quality job while using OEM-approved Battery. It's not just about delivering the premium GMC Battery replacement to standard battery maintenance, as we ensure your safety on the road. We recommend routine car battery checkups using a GMC-approved battery for durability and reliability. We have a well-equipped car workshop in Dubai, providing market-competitive pricing for all our GMC Battery services. You can reserve your slot for your next Battery Checkup with the best GMC car experts in Dubai. Contact us at +971 528475675 or for 24/7 emergency roadside assistance."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة جي إم سي في دبي",
  services: [
    {
      id: 1,
      description: "استبدال بطارية سيارة فاخرة وإصلاحات سيارات - نقدم خدمة بطارية جي إم سي expert لضمان أن سيارتك تؤدي بأفضل حالاتها. سواء كنت تقود موديلًا قياسيًا أو جي إم سي هجين، فإن الحفاظ على بطارية سليمة أمر بالغ الأهمية للتشغيل السلس والموثوق. فنيونا المهرة مجهزون للتعامل مع كل شيء بدءًا من صيانة البطارية القياسية إلى استبدال بطارية جي إم سي الهجينة، مما يضمن الأداء الأمثل لسيارتك الصديقة للبيئة. 800BatteryPro هو واحد من مراكز خدمة جي إم سي الموثوقة في دبي وأبوظبي. إذا كنت تقود سيارة جي إم سي فاخرة أو موديلًا قياسيًا أو نسخة هجينة، فإن خبراء السيارات الأمريكية لدينا يعرفون كيفية تقديم مهمة عالية الجودة بنسبة 100٪ باستخدام بطارية معتمدة من OEM. لا يتعلق الأمر فقط بتقديم استبدال بطارية جي إم سي الفاخر إلى الصيانة القياسية للبطارية، بل نضمن سلامتك على الطريق. نوصي بفحص بطارية السيارة الروتيني باستخدام بطارية معتمدة من جي إم سي للمتانة والموثوقية. لدينا ورشة سيارات مجهزة تجهيزًا جيدًا في دبي، تقدم أسعارًا تنافسية في السوق لجميع خدمات بطارية جي إم سي لدينا. يمكنك حجز موعدك لفحص البطارية القادم مع أفضل خبراء سيارات جي إم سي في دبي. اتصل بنا على +971528475675 أو للحصول على مساعدة طارئة على الطريق 24/7."
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
    desc: "لدى 800BatteryPro فريق دعم عملاء مخصص يعمل 24/7 لجميع خدمات استبدال بطارية جي إم سي والإصلاح المتقدم في دبي وأبوظبي."
  },
  {
    img: serviceImg2,
    title: "فنيو جي إم سي معتمدون",
    desc: "يتمتع فنيونا بخبرة تزيد عن 5 سنوات في العمل على جميع ماركات السيارات الأمريكية بما في ذلك جي إم سي (شركة شاحنات جنرال موتورز)."
  },
  {
    img: serviceImg3,
    title: "قطع غيار جي إم سي أصلية",
    desc: "يستخدم فنيو جي إم سي المعتمدون لدينا فقط البطاريات الأصلية وقطع الغيار المعتمدة من OEM لكل مهمة سيارة."
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
    desc: "يقدم 800BatteryPro دعم عملاء مميز على مدار الساعة لسيارات جي إم سي في دبي. نقدم لك حلاً كاملاً للعناية بالسيارة بأسعار تنافسية."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو جي إم سي معتمدون",
    desc: "لدينا فريق من فنيي جي إم سي المعتمدين، الذين لديهم أكثر من 5 سنوات من الخبرة في العمل على موديلات جي إم سي المختلفة وبطاريات السيارات."
  },
  {
    icons: <FaSitemap />,
    title: "استخدام قطع غيار جي إم سي الأصلية",
    desc: "يستخدم فنيو جي إم سي المعتمدون لدينا فقط قطع الغيار المعتمدة من OEM وبطاريات جي إم سي ذات العلامات التجارية لجميع مهام السيارات."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "يقدم 800BatteryPro مساعدة على الطريق 24/7 مع توصيل بطارية مجاني، ويستخدم فنيونا أحدث المعدات للعمل على استبدالك."
  }
]

const englishFaqs = [
  {
    question: "What type of Battery does my GMC need?",
    answer: "Like all American Brands, GMC models specify the type of Battery required, which also includes AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for cars with start-stop systems. While for the hybrid or all-electric models, 800BatteryPro recommends the lithium-ion batteries. For more details related to certified GMC technicians, call us at +971528475675"
  },
  {
    question: "How long does a GMC battery last?",
    answer: "A GMC battery typically lasts 3 to 5 years, but this can vary based on driving habits, climate conditions, and regular maintenance. The lifetime of a GMC battery depends on your car mileage, maintenance routine, and the climate conditions you drive in. In the UAE, a GMC Battery typically may last from 3 to 5 years in total, but yearly checkups are still essential for keeping peak performance."
  },
  {
    question: "How much does it cost to replace a GMC battery?",
    answer: "GMC battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes installations and system checkups."
  },
  {
    question: "Do I need to reset my GMC system after battery replacement?",
    answer: "Yes, our GMC specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
  },
  {
    question: "Can I upgrade to a lithium battery for my GMC?",
    answer: "Yes, it's possible to upgrade to a premium lithium battery for GMC, with advance features, lighter weight, longevity, and faster charging capabilities. At the same time, our GMC Car Battery specialist ensures the use of OEM-Approved Battery for all car jobs."
  },
  {
    question: "Do you offer on-site GMC battery replacement in Dubai?",
    answer: "Yes, 800BatteryPro offers on-site GMC battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
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
    question: "ما نوع البطارية التي تحتاجها سيارة جي إم سي الخاصة بي؟",
    answer: "مثل جميع العلامات التجارية الأمريكية، تحدد موديلات جي إم سي نوع البطارية المطلوب، والذي يشمل أيضًا AGM (مات الزجاج الماص) أو EFB (البطاريات المحسنة المغمورة) للسيارات المزودة بأنظمة التشغيل والإيقاف. بينما بالنسبة للموديلات الهجينة أو الكهربائية بالكامل، يوصي 800BatteryPro ببطاريات الليثيوم أيون. لمزيد من التفاصيل المتعلقة بفنيي جي إم سي المعتمدين، اتصل بنا على +971528475675"
  },
  {
    question: "كم تدوم بطارية جي إم سي؟",
    answer: "تدوم بطارية جي إم سي عادة من 3 إلى 5 سنوات، ولكن يمكن أن يختلف ذلك بناءً على عادات القيادة وظروف المناخ والصيانة الدورية. يعتمد عمر بطارية جي إم سي على عدد الكيلومترات التي تقطعها سيارتك، وروتين الصيانة، وظروف المناخ التي تقود فيها. في الإمارات، قد تدوم بطارية جي إم سي عادة من 3 إلى 5 سنوات إجمالاً، ولكن الفحوصات السنوية لا تزال ضرورية للحفاظ على الأداء الأمثل."
  },
  {
    question: "كم تكلفة استبدال بطارية جي إم سي؟",
    answer: "تعتمد تكلفة استبدال بطارية جي إم سي على نوع وموديل سيارتك، كما تعتمد أيضًا على نوع البطارية. عندما يتعلق الأمر بـ 800BatteryPro، يتراوح متوسط أسعار بطارية السيارة من 500 إلى 1500 درهم إماراتي في دبي وأبوظبي، والذي يشمل أيضًا التركيب وفحوصات النظام."
  },
  {
    question: "هل أحتاج إلى إعادة ضبط نظام جي إم سي بعد استبدال البطارية؟",
    answer: "نعم، يضمن فنيو جي إم سي لدينا أنه أثناء استبدال البطارية، يتم إعادة ضبط جميع الأنظمة وإعادة معايرتها من أجل الأداء السليم للنظام الإلكتروني. يتم الاهتمام بنظام إدارة البطارية (BMS) لتجنب المزيد من المشكلات الفنية في سيارتك، مثل إعادة معايرة أنظمة التشغيل والإيقاف ونظام المعلومات والترفيه وميزات النظام المتقدمة الأخرى."
  },
  {
    question: "هل يمكنني الترقية إلى بطارية ليثيوم لسيارة جي إم سي الخاصة بي؟",
    answer: "نعم، من الممكن الترقية إلى بطارية ليثيوم فاخرة لسيارة جي إم سي، بميزات متقدمة ووزن أخف وطول عمر وقدرات شحن أسرع. وفي الوقت نفسه، يضمن أخصائي بطارية جي إم سي لدينا استخدام بطارية معتمدة من OEM لجميع مهام السيارات."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية جي إم سي في الموقع في دبي؟",
    answer: "نعم، يقدم 800BatteryPro خدمة استبدال بطارية جي إم سي في الموقع في دبي. يمكنك الاتصال بنا للحصول على مساعدة على الطريق 24/7 أو أي حلول أخرى لبطارية السيارة في أي مكان في دبي وأبوظبي."
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
      desc: "GMC Car Models We Serve",
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
            desc: "TERRAIN DENALI",
            car: carBrand1,
        },
        {
            desc: "YUKON DENALI",
            car: carBrand2,
        },
        {
            desc: "YUKON & YUKON XL",
            car: carBrand3,
        },
        {
            desc: "SIERRA 1500 DENALI",
            car: carBrand4,
        },
        {
            desc: "GMC HUMMER EV PICKUP",
            car: carBrand5,
        },
        {
            desc: "GMC HUMMER EV SUV",
            car: carBrand6,
        },
        {
            desc: "SIERRA HD DENALI",
            car: carBrand7,
        },
        {
            desc: "CANYON DENALI",
            car: carBrand8,
        },
          {
            desc: "SIERRA EV",
            car: carBrand9,
        },
          {
            desc: "SIERRA 3500 HD CHASSIS CAB",
            car: carBrand10,
        },
         {
            desc: "GMC SAVANA CARGO",
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

export default Gmc