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
import serviceImg from "@/public/brands/lamburgani/service.webp"
import serviceImg5 from "@/public/brands/lamburgani/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/lamburgani/1.webp'
   import carBrand2 from '@/public/brands/lamburgani/2.webp'
    import carBrand3 from '@/public/brands/lamburgani/3.webp'
     import carBrand4 from '@/public/brands/lamburgani/4.webp'
      import carBrand5 from '@/public/brands/lamburgani/5.webp'
       import carBrand6 from '@/public/brands/lamburgani/6.webp'
        import carBrand7 from '@/public/brands/lamburgani/7.webp'
         import carBrand8 from '@/public/brands/lamburgani/8.webp'
          import carBrand9 from '@/public/brands/lamburgani/9.webp'
           import carBrand10 from '@/public/brands/lamburgani/10.webp' 
            import carBrand11 from '@/public/brands/lamburgani/11.webp'
            import carBrand12 from '@/public/brands/lamburgani/12.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/lamburgani/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const Lamborghini = () => {
  const locale = useLocale()
const heroEnglishContent = {
  desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
  title: {
    span1: " Lamborghini Car Battery &   ",
    span2: " Advanced Repair Experts"
  },
  desc1: "Call our Italian Car Specialist at 800BatteryPro For Lamborghini Battery Replacement in Dubai or Advance Repair Services.",
  btn: "Call Now",
  btn1: "Book Service Now"
}

const heroArabicContent = {
  desc: "أفضل ماركات السيارات – دعم طارئ 24/7 أينما كنت!",
  title: {
    span1: "بطارية لامبورجيني ",
    span2: "وخبراء الإصلاح المتقدم"
  },
  desc1: "اتصل بأخصائي السيارات الإيطالية لدينا في 800BatteryPro لاستبدال بطارية لامبورجيني في دبي أو خدمات الإصلاح المتقدم.",
  btn: "اتصل الآن",
  btn1: "احجز الخدمة الآن"
};

const serviceEnglishContent = {
  subtitle: "SERVICES",
  title: "Lamborghini Battery Replacement & Auto Repair",
  services: [
    {
      id: 1,
      description: "Lamborghini vehicles are a symbol of power, elegance, and innovation. Speed, style, and sophistication—Lamborghini is the ultimate trifecta. At 800BatteryPro UAE, our team of certified technicians delivers reliable Lamborghini battery replacement in Dubai to align with the craftsmanship and luxury of this iconic car brand. We have Lamborghini specialists for Urus, Huracán, Aventador, Temerario, and Revuelto, who only use premium batteries and OEM standard car parts for each car model."
    },
    {
      id: 2,
      description: "800BatteryPro has years of experience delivering every Lamborghini electrical system job with 100 percent customer satisfaction, because our technicians follow the original specifications while delivering the best battery replacement services in Dubai. If you spot any signs such as headlights dimming, slow ignition, non-functional AC, or any other unwanted noise from your car, call our 24/7 roadside assistance to ensure optimised performance. Contact 800BatteryPro at +971528475675 for Lamborghini Battery replacements, car scanning, engine repairs, electrical repairs or other advanced repair services."
    },
  ]
}

const serviceArabicContent = {
  subtitle: "الخدمات",
  title: "استبدال بطارية لامبورجيني وإصلاح السيارات",
  services: [
    {
      id: 1,
      description: "سيارات لامبورجيني هي رمز للقوة والأناقة والابتكار. السرعة والأناقة والتطور - لامبورجيني هي الثلاثية المثالية. في 800BatteryPro الإمارات، يقدم فريق فنيينا المعتمدين خدمة موثوقة لاستبدال بطارية لامبورجيني في دبي تتماشى مع حرفية وفخامة هذه العلامة التجارية الأيقونية. لدينا متخصصون في لامبورجيني لطرازات Urus و Huracán و Aventador و Temerario و Revuelto، يستخدمون فقط البطاريات الفاخرة وقطع غيار السيارات الأصلية وفقًا لمعايير OEM لكل موديل سيارة."
    },
    {
      id: 2,
      description: "يمتلك 800BatteryPro سنوات من الخبرة في تنفيذ كل مهمة متعلقة بالنظام الكهربائي لسيارات لامبورجيني بنسبة رضا عملاء 100%، لأن فنيينا يتبعون المواصفات الأصلية أثناء تقديم أفضل خدمات استبدال البطاريات في دبي. إذا لاحظت أي علامات مثل خفوت أضواء المصابيح الأمامية، أو بطء في الإشعال، أو مكيف هواء لا يعمل، أو أي ضوضاء غير مرغوب فيها من سيارتك، فاتصل بمساعدتنا على الطريق 24/7 لضمان الأداء الأمثل. اتصل بـ 800BatteryPro على +971528475675 لاستبدال بطارية لامبورجيني، أو فحص السيارة، أو إصلاح المحرك، أو الإصلاحات الكهربائية، أو غيرها من خدمات الإصلاح المتقدمة."
    },
  ]
}

const serviceEnglishContent1 = {
  subtitle: "SERVICES",
  title: "Lamborghini Service Centre in Dubai – Genuine Car Battery",
  services: [
    {
      id: 1,
      description: "Lamborghini's advanced powertrains need batteries that can handle quick acceleration, electronics that use a lot of power, and clever power distribution. 800BatteryPro sells AGM and lithium batteries that are made to be as reliable as possible. Our certified Lamborghini experts in Dubai recommend using premium AGM Batteries to ensure high performance and reliability in the harsh summer of the UAE."
    },
    {
      id: 2,
      description: "Our services expand beyond just Lamborghini Car Battery replacement, as we have a well-equipped service centre in Dubai and Abu Dhabi. From 24/7 roadside assistance, advance car repair, and mechanical and electrical repair services, we deliver every car job with 100 percent customer satisfaction. Fill out the form to book an appointment with one of our Lamborghini battery experts in Dubai."
    },
  ]
}

const serviceArabicContent1 = {
  subtitle: "الخدمات",
  title: "مركز خدمة لامبورجيني في دبي – بطارية سيارة أصلية",
  services: [
    {
      id: 1,
      description: "أنظمة القوة المتقدمة في لامبورجيني تحتاج إلى بطاريات قادرة على التعامل مع التسارع السريع والإلكترونيات التي تستهلك طاقة عالية وتوزيع الطاقة الذكي. يبيع 800BatteryPro بطاريات AGM والليثيوم المصممة لتكون موثوقة قدر الإمكان. يوصي خبراء لامبورجيني المعتمدون لدينا في دبي باستخدام بطاريات AGM الفاخرة لضمان أداء عالٍ وموثوقية في صيف الإمارات القاسي."
    },
    {
      id: 2,
      description: "تمتد خدماتنا إلى ما هو أبعد من مجرد استبدال بطارية سيارة لامبورجيني، حيث لدينا مركز خدمة مجهز تجهيزًا جيدًا في دبي وأبوظبي. بدءًا من المساعدة على الطريق 24/7، وإصلاح السيارات المتقدم، وخدمات الإصلاح الميكانيكي والكهربائي، نقدم كل مهمة سيارة بنسبة رضا عملاء 100%. املأ النموذج لحجز موعد مع أحد خبراء بطاريات لامبورجيني في دبي."
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
    desc: "يوفر لك 800BatteryPro خدمات بطارية لامبورجيني في الوقت المحدد مع دعم عملاء مميز على مدار الساعة."
  },
  {
    img: serviceImg2,
    title: "فنيو لامبورجيني معتمدون",
    desc: "لدينا فريق من فنيي لامبورجيني المعتمدين يستخدمون قطع غيار لامبورجيني الأصلية وبطاريات السيارات ذات العلامات التجارية لكل خدمة سيارة نقدمها."
  },
  {
    img: serviceImg3,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "بمجرد استلام مكالمة الطوارئ الخاصة بخدمات بطارية السيارة، يقدم فريقنا كل استبدال لبطارية السيارة خلال أقل من 15 دقيقة."
  },
  {
    img: serviceImg4,
    title: "أسعار تنافسية في السوق ولا رسوم خفية",
    desc: "إلى جانب فحص البطارية المجاني وتوصيل البطارية المجاني، تتوفر خدمات بطارية لامبورجيني لدينا بأسعار تنافسية في السوق."
  }
]

const englishContent = [
  {
    icons: <FaSitemap />,
    title: "Premium 24/7 Customer Support",
    desc: "800BatteryPro is your one stop shop for all your Lamborghini Car Battery and advance repair services, with 24/7 customer support."
  },
  {
    icons: <FaSitemap />,
    title: "Certified Lamborghini specialists",
    desc: "We have certified Lamborghini specialists, who are experienced in delivering precision with complete car care in Dubai and Abu Dhabi."
  },
  {
    icons: <FaSitemap />,
    title: "Using Genuine Lamborghini Parts",
    desc: "Our technicians only use OEM-approved and genuine Lamborghini parts which are recommended by the manufacturer."
  },
  {
    icons: <FaSitemap />,
    title: "Car Battery Under 15 Minutes",
    desc: "Our Onsite car battery replacement for the Lamborghini comes with rapid response under 30 minutes of delivery time that too with market competitive pricing."
  }
]

const arabicContent = [
  {
    icons: <FaSitemap />,
    title: "دعم عملاء مميز 24/7",
    desc: "800BatteryPro هو وجهتك الشاملة لجميع خدمات بطارية لامبورجيني والإصلاح المتقدم، مع دعم عملاء على مدار الساعة."
  },
  {
    icons: <FaSitemap />,
    title: "فنيو لامبورجيني معتمدون",
    desc: "لدينا فنيو لامبورجيني معتمدون، لديهم الخبرة في تقديم الدقة مع العناية الكاملة بالسيارة في دبي وأبوظبي."
  },
  {
    icons: <FaSitemap />,
    title: "استخدام قطع غيار لامبورجيني الأصلية",
    desc: "يستخدم فنيونا فقط قطع غيار لامبورجيني الأصلية والمعتمدة من OEM والتي يوصي بها المصنع."
  },
  {
    icons: <FaSitemap />,
    title: "بطارية السيارة خلال 15 دقيقة",
    desc: "يأتي استبدال بطارية السيارة في الموقع لسيارة لامبورجيني مع استجابة سريعة في غضون 30 دقيقة من وقت التوصيل وبأسعار تنافسية في السوق."
  }
]

const englishFaqs = [
  {
    question: "Do you provide car battery replacement for Lamborghini?",
    answer: "Yes, 800BatteryPro can replace the batteries in Lamborghini cars and is certified to do so. We utilize real OEM-standard parts and batteries from well-known brands for all Italian automobile models, such as Ferrari, Alfa Romeo, Pagani, Fiat, and Maserati. Call us at +971 528475675 for help on the road 24 hours a day, seven days a week."
  },
  {
    question: "Do you use OEM parts for repairing Italian car brands?",
    answer: "Yes, of course. We only utilize OEM-standard parts for repairs on Italian automobile brands, including Alfa Romeo, Lamborghini, Fiat, Ferrari, Pagani, and Maserati at 800BatteryPro."
  },
  {
    question: "Who are the best Lamborghini experts in Dubai?",
    answer: "800BatteryPro is known as one of the best companies in Dubai and Abu Dhabi for Lamborghini service. We work on practically all exotic and luxury automobile brands in the UAE. We have more than 50 qualified Italian car specialists and state-of-the-art service centers."
  },
  {
    question: "What are the warning Signs of a Weak Lamborghini Battery?",
    answer: "Finding out that your battery is failing early is the best way to avoid unexpected malfunctions. Be careful if the engine starts slowly or not at all, inactive start-stop feature, dashboard lights that flicker, check the light on the battery, infotainment screen rebooting or freezing, delays with keyless entry, sound of clicking upon starting, the battery is older than three years, the battery has a strange burning scent, or needs to be jump-started often. If you see any of these signs, contact 800batterypro for a quick lamborghini battery check."
  },
  {
    question: "Why Choose 800BatteryPro for Lamborghini Battery Service in Dubai?",
    answer: "The following are a few reasons why you should always choose 800BatteryPro as your go-to choice for Lamborghini Battery Service in Dubai. As we have Knowledge About Lamborghinis We have years of experience working on high-end Lamborghini vehicles and know how their unique design and power needs work. We only recommend battery brands that meet OEM standards, batteries we use are from well-known brands and meet or exceed Lamborghini's original specifications. We use diagnostic tools that are specific to each car to examine every important electrical parameter before and after installation. Flexibility at Work and on the Job. You can choose between a mobile service that comes to you or a professional installation in our state-of-the-art Dubai facility. Individualised Help for Customers We give you personalised help and advice after installation to make sure you know how to keep your battery working well."
  },
  {
    question: "How Much Is To Rent A Lamborghini In Dubai?",
    answer: "The daily cost of renting a Lamborghini in Dubai is usually between AED 1,900 and AED 4,000 for popular models like the Huracan and Urus. For high-performance variants like the Aventador SVJ, the cost can go up to AED 9,000. The daily pricing depends on the model year, how long you need it, and the rental company. Discounts are often available for weekly or monthly rentals. Typical Daily Rental Prices (in AED): For Lamborghini Urus (SUV): Prices start at AED 1,599 and go up to AED 3,000. For The Lamborghini Huracan (Evo/Spyder) costs between AED 2,195 and AED 3,300. For The Lamborghini Huracan STO costs between AED 3,000 and AED 4,000. For The Lamborghini Aventador SVJ costs about AED 9,000.For Lamborghini Revuelto: Prices start at around AED 12,000."
  },
  {
    question: "What factors affect the fuel consumption of my Lamborghini?",
    answer: "There are several things that can affect how fuel-efficient your Lamborghini is, such as, the weight and aerodynamics of the vehicle, the kind, size, pressure, and condition of the tires, the kind of transmission and the gear ratios, how you drive (for example, speeding or accelerating too quickly), the age and condition of the car, the quality of the fuel, the weather and the state of the roads. you may save money on gas and get better gas mileage by taking care of these things."
  },
  {
    question: "How do I fix an overheating Lamborghini?",
    answer: "If your Lamborghini is getting too hot, you need to fix it right away to keep the engine from being damaged. Some common reasons for overheating are, coolant levels that are too low, a radiator or thermostat that isn't working right, broken water pump, and radiator pipes that are blocked. To fix the problem, you can refill the coolant, replace broken parts, or flush the cooling system. you can get experienced help at 800batterypro service centres in dubai or abu dhabi."
  },
  {
    question: "How do I know if I need new brakes for my Lamborghini?",
    answer: "Here are some signs that your Lamborghini might require new brakes, Noises like squeaking or grinding when you hit the brakes, A brake pedal that feels mushy or spongy, A light on the dashboard that warns you to brake It's very important to check your brakes on a regular basis to keep yourself safe and avoid bigger problems. Our professional technicians at 800BatteryPro offer full brake services for Lamborghini cars."
  },
]

const arabicFaqs = [
  {
    question: "هل تقدمون خدمة استبدال بطارية لسيارة لامبورجيني؟",
    answer: "نعم، يمكن لـ 800BatteryPro استبدال بطاريات سيارات لامبورجيني وهو معتمد للقيام بذلك. نستخدم قطع غيار أصلية بمعايير OEM وبطاريات من علامات تجارية معروفة لجميع موديلات السيارات الإيطالية، مثل فيراري وألفا روميو وباجاني وفيات ومازيراتي. اتصل بنا على +971528475675 للحصول على المساعدة على الطريق 24 ساعة طوال أيام الأسبوع."
  },
  {
    question: "هل تستخدمون قطع غيار OEM لإصلاح ماركات السيارات الإيطالية؟",
    answer: "نعم بالتأكيد. نستخدم فقط قطع الغيار الأصلية بمعايير OEM لإصلاح ماركات السيارات الإيطالية، بما في ذلك ألفا روميو ولامبورجيني وفيات وفيراري وباجاني ومازيراتي في 800BatteryPro."
  },
  {
    question: "من هم أفضل خبراء لامبورجيني في دبي؟",
    answer: "يعرف 800BatteryPro كواحدة من أفضل الشركات في دبي وأبوظبي لخدمة لامبورجيني. نحن نعمل على جميع ماركات السيارات الفاخرة والحصرية تقريبًا في الإمارات. لدينا أكثر من 50 فني سيارات إيطالية مؤهل ومراكز خدمة حديثة."
  },
  {
    question: "ما هي علامات التحذير لضعف بطارية لامبورجيني؟",
    answer: "اكتشاف فشل البطارية مبكرًا هو أفضل طريقة لتجنب الأعطال غير المتوقعة. كن حذرًا إذا كان المحرك يعمل ببطء أو لا يعمل على الإطلاق، أو ميزة التشغيل والإيقاف غير نشطة، أو أضواء لوحة العدادات الخافتة، أو ضوء فحص البطارية، أو إعادة تشغيل أو تجميد شاشة المعلومات والترفيه، أو تأخير في الدخول بدون مفتاح، أو صوت نقر عند التشغيل، أو كان عمر البطارية أكثر من ثلاث سنوات، أو كانت للبطارية رائحة حرق غريبة، أو تحتاج إلى تشغيل متكرر بالقفز. إذا رأيت أيًا من هذه العلامات، فاتصل بـ 800batterypro لإجراء فحص سريع لبطارية لامبورجيني."
  },
  {
    question: "لماذا تختار 800BatteryPro لخدمة بطارية لامبورجيني في دبي؟",
    answer: "إليك بعض الأسباب التي تجعلك تختار دائمًا 800BatteryPro كخيارك الأول لخدمة بطارية لامبورجيني في دبي. لدينا معرفة بسيارات لامبورجيني ولدينا سنوات من الخبرة في العمل على سيارات لامبورجيني الفاخرة ونعرف كيف يعمل تصميمها الفريد واحتياجاتها من الطاقة. نوصي فقط بماركات البطاريات التي تلبي معايير OEM، والبطاريات التي نستخدمها من علامات تجارية معروفة وتلبي أو تتجاوز المواصفات الأصلية لامبورجيني. نستخدم أدوات تشخيص خاصة بكل سيارة لفحص كل معلمة كهربائية مهمة قبل وبعد التركيب. مرونة في العمل وفي الموقع. يمكنك الاختيار بين خدمة متنقلة تأتي إليك أو تركيب احترافي في منشأتنا الحديثة في دبي. مساعدة مخصصة للعملاء نقدم لك مساعدة ونصائح مخصصة بعد التركيب للتأكد من أنك تعرف كيفية الحفاظ على بطاريتك تعمل بشكل جيد."
  },
  {
    question: "كم تكلفة استئجار لامبورجيني في دبي؟",
    answer: "تبلغ التكلفة اليومية لاستئجار لامبورجيني في دبي عادة بين 1,900 و 4,000 درهم إماراتي للموديلات الشهيرة مثل هوراكان وأوروس. بالنسبة للإصدارات عالية الأداء مثل أفنتادور SVJ، يمكن أن تصل التكلفة إلى 9,000 درهم. يعتمد السعر اليومي على سنة الموديل ومدة الاستئجار وشركة التأجير. تتوفر خصومات غالبًا للتأجير الأسبوعي أو الشهري. أسعار التأجير اليومية النموذجية (بالدرهم الإماراتي): لامبورجيني أوروس (SUV): تبدأ الأسعار من 1,599 درهم وتصل إلى 3,000 درهم. لامبورجيني هوراكان (Evo/Spyder): تكلف بين 2,195 و 3,300 درهم. لامبورجيني هوراكان STO: تكلف بين 3,000 و 4,000 درهم. لامبورجيني أفنتادور SVJ: تكلف حوالي 9,000 درهم. لامبورجيني ريفويلتو: تبدأ الأسعار من حوالي 12,000 درهم."
  },
  {
    question: "ما هي العوامل التي تؤثر على استهلاك الوقود في لامبورجيني؟",
    answer: "هناك عدة أشياء يمكن أن تؤثر على كفاءة استهلاك الوقود في سيارتك لامبورجيني، مثل وزن السيارة وديناميكيتها الهوائية، ونوع وحجم وضغط وحالة الإطارات، ونوع ناقل الحركة ونسب التروس، وطريقة قيادتك (مثال: السرعة الزائدة أو التسارع السريع جدًا)، وعمر السيارة وحالتها، وجودة الوقود، والطقس وحالة الطرق. يمكنك توفير المال على البنزين والحصول على مسافة أفضل للكيلومترات من خلال الاهتمام بهذه العوامل."
  },
  {
    question: "كيف يمكنني إصلاح ارتفاع حرارة لامبورجيني؟",
    answer: "إذا كانت سيارتك لامبورجيني ترتفع حرارتها، فأنت بحاجة إلى إصلاحها فورًا لحماية المحرك من التلف. بعض الأسباب الشائعة لارتفاع الحرارة هي انخفاض مستويات سائل التبريد، أو خلل في الرادياتير أو منظم الحرارة، أو تلف مضخة المياه، أو انسداد أنابيب الرادياتير. لإصلاح المشكلة، يمكنك إعادة تعبئة سائل التبريد، أو استبدال الأجزاء التالفة، أو تنظيف نظام التبريد. يمكنك الحصول على مساعدة من ذوي الخبرة في مراكز خدمة 800batterypro في دبي أو أبوظبي."
  },
  {
    question: "كيف أعرف أنني بحاجة إلى فرامل جديدة لسيارتي لامبورجيني؟",
    answer: "إليك بعض العلامات التي تشير إلى أن سيارتك لامبورجيني قد تحتاج إلى فرامل جديدة: أصوات صرير أو طحن عند الضغط على الفرامل، دواسة فرامل تبدو طرية أو إسفنجية، ضوء تحذيري على لوحة العدادات يخص الفرامل. من المهم جدًا فحص الفرامل بانتظام للحفاظ على سلامتك وتجنب المشاكل الأكبر. يقدم فنيونا المحترفون في 800BatteryPro خدمات فرامل كاملة لسيارات لامبورجيني."
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
      desc: "Lamborghini Car Models We Serve",
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
            desc: "Lamborghini Temerario",
            car: carBrand1,
        },
        {
            desc: "Lamborghini Revuelto",
            car: carBrand2,
        },
        {
            desc: "Lamborghini Urus",
            car: carBrand3,
        },
        {
            desc: "Lamborghini Huracán",
            car: carBrand4,
        },
        {
            desc: "Lamborghini Huracán Sterrato",
            car: carBrand5,
        },
        {
            desc: "Lamborghini Veneno",
            car: carBrand6,
        },
        {
            desc: "Lamborghini Reventón",
            car: carBrand7,
        },
        {
            desc: "Lamborghini  Centenario",
            car: carBrand8,
        },
          {
            desc: "Lamborghini Sesto Elemento",
            car: carBrand9,
        },
          {
            desc: "Lamborghini Sián FKP 37",
            car: carBrand10,
        },
         {
            desc: "Lamborghini Countach LPI 800-4",
            car: carBrand11,
        },
         {
            desc: "Lamborghini Fenomeno",
            car: carBrand12,
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

export default Lamborghini