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
import serviceImg from "@/public/brands/roll/service.webp"
import serviceImg5 from "@/public/brands/roll/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/roll/1.webp'
   import carBrand2 from '@/public/brands/roll/2.webp'
    import carBrand3 from '@/public/brands/roll/3.webp'
     import carBrand4 from '@/public/brands/roll/4.webp'
      import carBrand5 from '@/public/brands/roll/5.webp'
       import carBrand6 from '@/public/brands/roll/6.webp'
        import carBrand7 from '@/public/brands/roll/7.webp'
         import carBrand8 from '@/public/brands/roll/8.webp'
          import carBrand9 from '@/public/brands/roll/9.webp'
           import carBrand10 from '@/public/brands/roll/10.webp' 
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/roll/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'

import service from '@/public/brands/roll/ser1.webp'
import service1 from '@/public/brands/roll/ser2.webp'
import service2 from '@/public/brands/roll/ser3.webp'
import service3 from '@/public/brands/roll/ser4.webp'
const RollsRoyce = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: "Rolls Royce Car Battery Replacement ",
    span2: "Under 25 Minutes In Dubai & Abu Dhabi"
  },
  desc1: "Get premium Rolls Royce car battery replacement under 25 minutes anywhere in Dubai. 800BatteryPro offers Free Car Battery Testing With 24/7 Roadside Assistance all night and day. Call at +971528475675",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "استبدال بطارية رولز رويس ",
    span2: "وإصلاحات متقدمة"
  },
  desc1: "احصل على استبدال بطارية سيارة فاخر وإصلاحات متقدمة موثوقة لسيارتك رولز رويس من 800BatteryPro.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Rolls Royce Car Battery Replacement & Advanced Repair Services",
  services: [
    {
      id: 1,
      description: "800BatteryPro will fix your dead battery in under 25 minutes anywhere in Dubai or Abu Dhabi. Rolls Rouce is a British prestige and one of the top-tier luxury cars in the World. With 500+ horsepower your Rolls Royce needs trusted car battery replacement and Experienced technician services, that too on market competitive pricing. We have 20+ rapid response mobile vans with 6+ years of experiance working on all types of Rolls Royce car battery replacements, as 800BatteryPro has partnered with one of the best Rolls Royce car service Centers in Dubai and Abu Dhabi. With 30+ Experienced Rolls Royce specialist we take pride in delivering every car job with 100% customer satisfaction. If you are stuck somewhere on the road with a non-functional electronic system, a dead car battery, or any other car repair issue, call us at +971528475675 for immediate 24/7 roadside assistance. Our technicians only use OEM-approved spare parts and genuine batteries for Rolls Royce. We offer free battery testing and free of cost battery delivery anywhere in Dubai and Abu Dhabi."
    },
    {
      id: 2,
      description: "800BatteryPro offers the different types of Rolls Royce Car Batteries. As we recommend and provide different types of branded Car Batteries only depending upon your car model and variant. Primarily we offer the Enhanced Flooded Battery (EFB) and also Absorbent Glass Mat (AGM) for all Rolls Royce Models such as Phantom, Ghost, Wraith, Dawn, and Cullinan."
    },
    {
      id: 3,
      description: "While we also recommend EFB BATTERY For Rolls Royce for models with a start-stop technology system for which the Enhanced Flooded Battery (EFB) is the best solution used for their next-gen technology and capabilities of providing extended battery life. Now, there are AGM batteries for premium Rolls Royce Models which our technicians use and recommend better known as Absorbent Glass Mat (AGM) batteries, these AGM car batteries are featured with highly capable, highly durable, and excellent performance."
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية رولز رويس وخدمات الإصلاح المتقدمة",
  services: [
    {
      id: 1,
      description: "رولز رويس، فخامة بريطانية وواحدة من أفضل السيارات الفاخرة في العالم. مع أكثر من 500 حصان، تحتاج سيارتك رولز رويس إلى استبدال بطارية موثوق وخدمات فنيين معتمدين، وبأسعار تنافسية في السوق. يعتبر 800BatteryPro واحدًا من أفضل مراكز رولز رويس في دبي وأبوظبي. مع أكثر من 50 فني رولز رويس معتمد، نفخر بتقديم كل مهمة سيارة بنسبة رضا عملاء 100٪. إذا كنت عالقًا في مكان ما على الطريق مع نظام إلكتروني لا يعمل، أو بطارية سيارة فارغة، أو أي مشكلة إصلاح أخرى في السيارة، فاتصل بنا على +971528475675 للحصول على مساعدة فورية على الطريق 24/7. يستخدم فنيونا فقط قطع الغيار المعتمدة من OEM والبطاريات الأصلية لرولز رويس. نقدم فحص بطارية مجاني وتوصيل بطارية مجاني في أي مكان في دبي وأبوظبي."
    },
    {
      id: 2,
      description: "يقدم 800BatteryPro الأنواع التالية من بطاريات رولز رويس: بالنسبة لرولز رويس في 800BatteryPro، نوصي ونقدم أنواعًا مختلفة من بطاريات السيارات اعتمادًا على موديل سيارتك. نقدم بشكل أساسي البطارية المحسنة المغمورة (EFB) وأيضًا بطارية AGM (مات الزجاج الماص) لجميع موديلات رولز رويس مثل Phantom و Ghost و Wraith و Dawn و Cullinan."
    },
    {
      id: 3,
      description: "أنواع بطاريات رولز رويس التي نقدمها: بطارية EFB لرولز رويس: هناك العديد من موديلات رولز رويس المزودة بنظام تقنية التشغيل والإيقاف والتي تعتبر البطارية المحسنة المغمورة (EFB) الحل الأفضل لها بسبب تقنياتها من الجيل التالي وقدراتها على توفير عمر بطارية ممتد. بطارية AGM لرولز رويس: للموديلات الفاخرة من رولز رويس، يستخدم فنيونا ويوصون ببطاريات AGM (مات الزجاج الماص)، والتي تتميز بقدرات عالية ومتانة عالية وأداء ممتاز."
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Partnered With Trusted Rolls Royce Service Center in Dubai – British Car Experts",
  services: [
    {
      id: 1,
      description: "800BatteryPro has 6+ years of experience delivering 100% customer satisfactory services related to Rolls Royce Car Battery Replacement under 25 minutes along with advance repair services in Dubai and Abu Dhabi. We have a team of 30+ Experienced Rolls Royce experts and are in partnership with some of the well-equipped service center in Dubai for serving every car job with complete customer satisfaction. Our 24/7 roadside assistance and free car inspections are available for all Rolls Royce Standard, hybrid, all-electric, or Premium Models, this routine generally happen after every 10,000 KMs or once a year. Don't hesitate to book your next car appointment with us, as our technicians only use OEM-approved spare parts and genuine car batteries, ensuring peak performance for your Rolls Royce."
    },
    {
      id: 2,
      description: "You can reserve your slot for your next Battery Check-up with the best Rolls Royce car experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة رولز رويس في دبي – خبراء السيارات الفاخرة",
  services: [
    {
      id: 1,
      description: "يمتلك 800BatteryPro سنوات من الخبرة في تقديم خدمات استبدال بطارية رولز رويس بنسبة رضا 100٪ وخدمات الإصلاح المتقدمة في الإمارات. لدينا فريق من خبراء رولز رويس المعتمدين ومركز خدمة مجهز تجهيزًا جيدًا في دبي لخدمة كل مهمة سيارة برضا عملاء كامل. مساعدتنا على الطريق 24/7 وفحوصات السيارات المجانية متاحة لجميع موديلات رولز رويس القياسية والهجينة والكهربائية بالكامل أو الفاخرة، والتي تتم عادة بعد كل 10000 كيلومتر أو مرة واحدة في السنة. لا تتردد في حجز موعد سيارتك القادم معنا، لأن فنيونا يستخدمون فقط قطع الغيار المعتمدة من OEM وبطاريات السيارات الأصلية، مما يضمن الأداء الأمثل لسيارتك رولز رويس."
    },
    {
      id: 2,
      description: "يمكنك حجز موعدك لفحص البطارية القادم مع أفضل خبراء سيارات رولز رويس في دبي. اتصل بنا على +971528475675 للحصول على مساعدة طارئة على الطريق 24/7."
    },
  ]
}

const englishServices = [
  {
    img: serviceImg1,
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro provides you with on-time Rolls Royce battery services with excellent customer support around the clock."
  },
  {
    img: serviceImg2,
    title: "Experienced Rolls Royce Specialists",
    desc: "We have a team of 30+ Experienced Rolls Rouce specialists using genuine spare parts and branded car batteries for every car service we deliver."
  },
  {
    img: serviceImg3,
    title: "Car Battery Under 25 Minutes",
    desc: "Once we receive your emergency call for car battery services, our team delivers every car battery replacement under 25 minutes."
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
    desc: "يوفر لك 800BatteryPro خدمات بطارية رولز رويس في الوقت المحدد مع دعم عملاء ممتاز على مدار الساعة."
  },
  {
    img: serviceImg2,
    title: "فنيو رولز رويس معتمدون",
    desc: "لدينا فريق من فنيي رولز رويس المعتمدين يستخدمون قطع غيار رولز رويس الأصلية وبطاريات السيارات ذات العلامات التجارية لكل خدمة سيارة نقدمها."
  },
  {
    img: serviceImg3,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "بمجرد استلام مكالمة الطوارئ الخاصة بخدمات بطارية السيارة، يقدم فريقنا كل استبدال لبطارية السيارة خلال أقل من 15 دقيقة."
  },
  {
    img: serviceImg4,
    title: "أسعار تنافسية في السوق ولا رسوم خفية",
    desc: "إلى جانب فحص البطارية المجاني وتوصيل البطارية المجاني، تتوفر خدمات بطارية رولز رويس لدينا بأسعار تنافسية في السوق."
  }
]

const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Premium 24/7 Customer",
    desc: "We offer compassionate and 24/7 customer support to all our Rolls Royce customers in the UAE. Don't hesitate to contact in regards to your car."
  },
  {
    icons: <FaSitemap />,
    title: "Experienced Rolls Royce Specialists",
    desc: "800BatteryPro has a team of 30+ Rolls Royce experts in Dubai and Abu Dhabi."
  },
  {
    icons: <FaSitemap />,
    title: "Genuine Battery & OEM-Approved Parts",
    desc: "Our technicians here at 800BatteryPro only use genuine Rolls Royce Battery and OEM-approved spare parts for all car jobs."
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 25 Minutes",
    desc: "If you are stranded somewhere with a dead Rolls Royce battery then you can contact us at +971 528475675. For instant roadside assistance Under 25 Minutes."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز 24/7",
    desc: "نقدم دعم عملاء متعاطف وعلى مدار الساعة لجميع عملاء رولز رويس في الإمارات. لا تتردد في الاتصال بنا بخصوص سيارتك."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو رولز رويس معتمدون",
    desc: "لدى 800BatteryPro فريق من أكثر من 50 خبير رولز رويس في دبي وأبوظبي."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية أصلية وقطع غيار معتمدة من OEM",
    desc: "يستخدم فنيونا في 800BatteryPro فقط بطارية رولز رويس الأصلية وقطع الغيار المعتمدة من OEM لجميع مهام السيارات."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "إذا كنت عالقًا في مكان ما مع بطارية رولز رويس فارغة، فيمكنك الاتصال بنا على +971528475675 للحصول على مساعدة فورية على الطريق خلال أقل من 30 دقيقة."
  }
]

const englishFaqs = [
  {
    question: "How do I know if my Rolls Royce battery needs to be replaced?",
    answer: "If you spot the following common signs, it means your Rolls Royce battery needs to be replaced asap, if the start-stop system is not working properly, if the dashboard Lights Flickering or Dim Lights, if you are getting warning messages like 'Battery Malfunction', or if any electrical and Infotainment system is not working well."
  },
  {
    question: "What type of Battery does my Rolls Royce need?",
    answer: "At 800BatteryPro, we have Experienced Rolls Royce technicians who are great at working on all British car brands using only OEM-approved and genuine Car batteries. We recommend using AGM (Absorbent Glass Mat) or EFB (Enhanced Flooded Batteries) for cars with start-stop systems. While for the hybrid or all-electric models, the lithium-ion batteries. For more details related to Experienced Rolls Royce technicians, call us at +971 528475675."
  },
  {
    question: "How long does a Rolls Royce battery last?",
    answer: "A genuine Rolls Royce Battery may last from 2-3 years, which directly depends upon the mileage of your car, the climate conditions in which you drive the car, and how you drive. Which needs a routine check-up after a specific time, most commonly yearly or after 10,000 KM. You can book a free battery check-up at 800BatteryPro right now!"
  },
  {
    question: "How much does it cost to replace a Rolls Royce battery?",
    answer: "Rolls Royce battery replacement cost depends on the type and model of your car, while it also depends on the type of Battery too. When it comes to 800BatteryPro, the average prices for a car battery range from AED 500 to AED 1,500 in Dubai and Abu Dhabi, which also includes free installations and system check-ups."
  },
  {
    question: "What happens if I delay replacing my Rolls Royce battery?",
    answer: "If you don't replace your Rolls Royce battery on time, it may lead to the following issues, a complete car battery failure, signs of strain on the alternator, electronic Systems malfunctioning, and high Road risk and getting stranded on the roadside in the extreme heat of the UAE."
  },
  {
    question: "Do I need to reset my Rolls Royce system after battery replacement?",
    answer: "Yes, our Rolls Royce specialists ensure that during battery replacement, all systems are reset and recalibrated for proper functionality of the electronic system. The Battery Management System (BMS) is taken care of to avoid further technical issues in your car. As the recalibration of the start-stop systems, infotainment, and other advance system features."
  },
  {
    question: "Can I upgrade to a lithium battery for my Rolls Royce?",
    answer: "Yes, it's possible to upgrade to a premium lithium battery for Rolls Royce, with advance features, lighter weight, longevity, and faster charging capabilities. At the same time, our Rolls Royce Car Battery specialist ensures the use of OEM-Approved Battery for all car jobs."
  },
  {
    question: "Do you offer on-site Rolls Royce battery replacement in Dubai?",
    answer: "Yes, 800BatteryPro offers on-site Rolls Royce battery replacement in Dubai. You can call us for 24/7 roadside assistance or any other car battery solutions anywhere in Dubai and Abu Dhabi."
  },
  {
    question: "Any British Car Experts in Dubai?",
    answer: "Yes, 800BatteryPro is one of the trusted and has a Experienced team of British car experts in Dubai. We are partnered with some of the well-equipped service center with the latest technology used for every British car repair job. We treat every car brand, including Aston Martin, Rolls Royce, and Bentley, etc. Call us now for any British car battery replacement services at +971528475675."
  },
]

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

const arabicFaqs = [
  {
    question: "كيف أعرف أن بطارية رولز رويس الخاصة بي بحاجة إلى الاستبدال؟",
    answer: "إذا لاحظت العلامات الشائعة التالية، فهذا يعني أن بطارية رولز رويس الخاصة بك بحاجة إلى الاستبدال في أسرع وقت: إذا كان نظام التشغيل والإيقاف لا يعمل بشكل صحيح، إذا كانت أضواء لوحة العدادات خافتة أو متذبذبة، إذا كنت تتلقى رسائل تحذيرية مثل 'عطل في البطارية'، أو إذا كان أي نظام كهربائي أو نظام معلومات وترفيه لا يعمل بشكل جيد."
  },
  {
    question: "ما نوع البطارية التي تحتاجها سيارة رولز رويس الخاصة بي؟",
    answer: "في 800BatteryPro، لدينا فنيو رولز رويس معتمدون وهم ماهرون في العمل على جميع ماركات السيارات البريطانية باستخدام فقط بطاريات السيارات الأصلية والمعتمدة من OEM. نوصي باستخدام AGM (مات الزجاج الماص) أو EFB (البطاريات المحسنة المغمورة) للسيارات المزودة بأنظمة التشغيل والإيقاف. بينما بالنسبة للموديلات الهجينة أو الكهربائية بالكامل، نوصي ببطاريات الليثيوم أيون. لمزيد من التفاصيل المتعلقة بفنيي رولز رويس المعتمدين، اتصل بنا على +971528475675."
  },
  {
    question: "كم تدوم بطارية رولز رويس؟",
    answer: "قد تدوم بطارية رولز رويس الأصلية من 2-3 سنوات، والتي تعتمد بشكل مباشر على عدد الكيلومترات التي تقطعها سيارتك، وظروف المناخ التي تقود فيها السيارة، وكيفية قيادتك. مما يحتاج إلى فحص روتيني بعد وقت محدد، الأكثر شيوعًا سنويًا أو بعد 10000 كيلومتر. يمكنك حجز فحص بطارية مجاني في 800BatteryPro الآن!"
  },
  {
    question: "كم تكلفة استبدال بطارية رولز رويس؟",
    answer: "تعتمد تكلفة استبدال بطارية رولز رويس على نوع وموديل سيارتك، كما تعتمد أيضًا على نوع البطارية. عندما يتعلق الأمر بـ 800BatteryPro، يتراوح متوسط أسعار بطارية السيارة من 500 إلى 1500 درهم إماراتي في دبي وأبوظبي، والذي يشمل أيضًا التركيب المجاني وفحوصات النظام."
  },
  {
    question: "ماذا يحدث إذا تأخرت في استبدال بطارية رولز رويس الخاصة بي؟",
    answer: "إذا لم تستبدل بطارية رولز رويس الخاصة بك في الوقت المحدد، فقد يؤدي ذلك إلى المشكلات التالية: فشل كامل لبطارية السيارة، علامات إجهاد على المولد، خلل في الأنظمة الإلكترونية، وارتفاع مخاطر الطريق والتعرض للتوقف على جانب الطريق في حرارة الإمارات الشديدة."
  },
  {
    question: "هل أحتاج إلى إعادة ضبط نظام رولز رويس بعد استبدال البطارية؟",
    answer: "نعم، يضمن فنيو رولز رويس لدينا أنه أثناء استبدال البطارية، يتم إعادة ضبط جميع الأنظمة وإعادة معايرتها من أجل الأداء السليم للنظام الإلكتروني. يتم الاهتمام بنظام إدارة البطارية (BMS) لتجنب المزيد من المشكلات الفنية في سيارتك، مثل إعادة معايرة أنظمة التشغيل والإيقاف ونظام المعلومات والترفيه وميزات النظام المتقدمة الأخرى."
  },
  {
    question: "هل يمكنني الترقية إلى بطارية ليثيوم لسيارة رولز رويس الخاصة بي؟",
    answer: "نعم، من الممكن الترقية إلى بطارية ليثيوم فاخرة لسيارة رولز رويس، بميزات متقدمة ووزن أخف وطول عمر وقدرات شحن أسرع. وفي الوقت نفسه، يضمن أخصائي بطارية رولز رويس لدينا استخدام بطارية معتمدة من OEM لجميع مهام السيارات."
  },
  {
    question: "هل تقدمون خدمة استبدال بطارية رولز رويس في الموقع في دبي؟",
    answer: "نعم، يقدم 800BatteryPro خدمة استبدال بطارية رولز رويس في الموقع في دبي. يمكنك الاتصال بنا للحصول على مساعدة على الطريق 24/7 أو أي حلول أخرى لبطارية السيارة في أي مكان في دبي وأبوظبي."
  },
  {
    question: "هل يوجد خبراء سيارات بريطانية في دبي؟",
    answer: "نعم، 800BatteryPro هو واحد من المراكز الموثوقة ولديه فريق معتمد من خبراء السيارات البريطانية في دبي. لدينا مركز خدمة مجهز جيدًا بأحدث التقنيات المستخدمة في كل مهمة إصلاح للسيارات البريطانية. نتعامل مع كل ماركات السيارات بما في ذلك أستون مارتن ورولز رويس وبنتلي وغيرها. اتصل بنا الآن لأي خدمة استبدال بطارية سيارة بريطانية على +971528475675."
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
      desc: "Rolls Royce Car Models We Serve",
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
            desc: "ROLLS ROYCE PHANTOM",
            car: carBrand1,
        },
        {
            desc: "ROLLS ROYCE PHANTOM EXTENDED",
            car: carBrand2,
        },
        {
            desc: "ROLLS ROYCE SPECTRE",
            car: carBrand3,
        },
        {
            desc: "ROLLS ROYCE GHOST",
            car: carBrand4,
        },
        {
            desc: "ROLLS ROYCE GHOST EXTENDED",
            car: carBrand5,
        },
        {
            desc: "ROLLS ROYCE CULLINAN",
            car: carBrand6,
        },
        {
            desc: "ROLLS ROYCE BLACK BADGE",
            car: carBrand7,
        },
        {
            desc: "ROLLS ROYCE BOAT TAIL",
            car: carBrand8,
        },
          {
            desc: "ROLLS ROYCE WRAITH ",
            car: carBrand9,
        },
          {
            desc: "ROLLS ROYCE SWEPTAIL",
            car: carBrand10,
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
          <Services englishService={englishService} arabicService={arabicService} />
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

export default RollsRoyce