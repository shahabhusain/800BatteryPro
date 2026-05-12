import React from 'react'
import About from '../../../components/Hero/About'
// import Services from '../../components/Hero/Services'
import Banners from '../../../components/Hero/Banners'
import CarBrands from '../../../components/Hero/CarBrands'
import BatteryBrands from '../../../components/Hero/BatteryBrands'
import RealExperience from '../../../components/Hero/RealExperience'
import Trusted from '../../../components/Hero/Trusted'
import Footer from '../../../components/Footer'
import Review from '../../../components/Hero/Review'
import HowItWorks from '../../../components/Hero/HowItWorks'
import { useLocale } from 'next-intl'
import Hero from '@/app/components/Brands/subPage/Hero'
import herobg from '@/public/locations/location.webp'
import Services from '@/app/components/locations/Services'
import { FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import service from '@/public/locations/mbz/1.webp'
import service1 from '@/public/locations/mbz/2.webp'
import service2 from '@/public/locations/mbz/3.webp'
import service3 from '@/public/locations/mbz/4.webp'
import { TiStarburst } from 'react-icons/ti'
export const metadata = {
  title: "Car Battery Replacement in Dubai Under 25 Minutes | 800BatteryPro",
  description:
    "Expert mobile car battery replacement, 24/7 roadside assistance & car repair across all areas of Dubai. We come to you — book 800BatteryPro now.",
      keywords: "car battery replacement near me Dubai, car battery change Dubai, dead car battery Dubai, Free Car Battery, Expert Car Battery, car battery price Dubai, mobile battery replacement UAE, replace car battery Dubai, best car battery replacement UAE, battery change at home service Dubai",
      alternates: {
    canonical: "https://800batterypro.com/best-car-battery-replacement-dubai",
  },
};

const Zayed = () => {
    const locale = useLocale()
   const text = locale === "ar"
  ? {
      desc: "ماركات السيارات التي نخدمها",
      title1: "يشمل جميع", 
      title2: "ماركات السيارات الرئيسية",
      viewAll: "عرض الكل",
    }
  : {
      desc: "Car Brands We Serve",
      title1: "Car Battery Replacement ",
      title2: " for All Car Brands in Al Barsha",
      viewAll: "View All",
    };

     const howItWorksContent = locale === "en" 
        ? {
            desc: "How it Works?",
            title: {
                part1: "How Our Car ",
                highlighted: "Battery Service ",
                part2: " Works in Al Barsha "
            }
          }
        : {
            desc: "كيف يعمل؟",
            title: {
                part1: "",
                highlighted: "العمل",
                part2: " عملية"
            }
          }
  // Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere in Dubai & Abu Dhabi",
    title: {
        span1: " Car Battery Replacement in Mohamed ",
        span2: "Bin Zayed City Under 25 Minutes"
    },
    desc1: "Starting From AED 299 — Up to 18 Months Warranty — 24/7 RSA — Reaching Any Zone in MBZ City Under 25 Minutes",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ على مدار الساعة أينما كنت!",
    title: {
        span1: "800BatteryPro – مركز خدمة سيارات موثوق",
        span2: "في دبي"
    },
    desc1: "استبدال بطارية سيارة أصلية – خدمة طرق على مدار الساعة – قطع غيار معتمدة من الشركة المصنعة",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Cards Content
const englishContent = [
    {
        icons: <TiStarburst />,
        title: "Under 25 Minutes & AED 299 Starting Price",
        desc: " Reaching all 34 zones of MBZ City faster than any competitor. Transparent pricing, zero hidden costs, told upfront before work begins"
    },
    {
        icons: <TiStarburst />,
        title: "310 Successful Battery Replacements in MBZ City ",
        desc: "More experience in your community than anyone else. 24/7 — No extra charge for nights, weekends, or public holidays in MBZ City"
    },
    {
        icons: <TiStarburst />,
        title: "Up to 18 Months Warranty & Genuine Batteries Only",
        desc: "Industry's strongest battery replacement warranty in Abu Dhabi. Bosch, Varta, ACDelco and other OEM-approved brands — never counterfeit. All Car Brands Covered — BMW, Mercedes, Toyota, Audi, Land Rover, Nissan and every other brand driven in MBZ City"
    },
    {
        icons: <TiStarburst />,
        title: "10,000+ Customers & 20+ Mobile Vans Served Across UAE ",
        desc: "Abu Dhabi's most trusted mobile battery service, strategically positioned across Abu Dhabi's mainland for fastest MBZ City response"
    }
]

const arabicContent = [
    {
        icons: <TiStarburst />,
        title: "الوصول خلال 30 دقيقة",
        desc: "وقتك ثمين. نضع سيارات الخدمة المجهزة بالكامل بشكل استراتيجي في جميع أنحاء دبي وأبو ظبي لضمان وقت استجابة أقل من 30 دقيقة. نصل إليك بسرعة حتى تتمكن من مواصلة يومك."
    },
    {
        icons: <TiStarburst />,
        title: "فحص وتوصيل البطارية مجاناً",
        desc: "نحن لا نخمن أبداً ما هو الخطأ في سيارتك. يستخدم فنيونا أحدث التقنيات لإجراء فحص مجاني للبطارية في المكان. إذا كانت بطاريتك تحتاج فقط إلى شحن، فسنقوم بتشغيلها بأمان. إذا كانت البطارية فارغة تماماً، فإننا نقدم توصيل مجاني للبطارية إلى موقعك."
    },
    {
        icons: <TiStarburst />,
        title: "بطاريات ذات علامات تجارية متميزة وقطع أصلية",
        desc: "نستخدم بدقة قطع الغيار المعتمدة من المصنع والبطاريات الأصلية المتميزة الموصى بها من قبل الشركة المصنعة لسيارتك. استخدام العلامات التجارية الراقية يضمن أن بطاريتك الجديدة تتحمل مناخ الإمارات القاسي وتوفر طاقة موثوقة لسنوات قادمة."
    },
    {
        icons: <TiStarburst />,
        title: "تقنية تركيب متقدمة",
        desc: "استبدال البطارية في سيارة حديثة ليس مجرد استخدام مفتاح ربط. نستخدم أدوات تشخيص متقدمة لضمان تزامن بطاريتك الجديدة بشكل مثالي مع أجهزة الكمبيوتر الداخلية لسيارتك. تمنع عملية التركيب الخبيرة لدينا فقدان البيانات وتضمن عمل الراديو وذاكرة المقاعد وأنظمة إدارة المحرك بشكل لا تشوبه شائبة."
    }
]

const englishFaqs = [
    {
        question: "How quickly can 800BatteryPro reach me anywhere in Mohamed Bin Zayed City?",
        answer: "800BatteryPro reaches any of the 34 zones in Mohamed Bin Zayed City in under 25 minutes — guaranteed. Our fleet of 20+ mobile vans are strategically positioned across Abu Dhabi's mainland including areas close to MBZ City, ensuring fast response to every zone from Zone 1 near Al Ain Road to the outer zones bordering Al Shamkhah and Khalifa City B. Our service operates 24 hours a day, 7 days a week with no extra charge for nights, weekends, or UAE public holidays."
    },
    {
        question: "How much does car battery replacement cost in Mohamed Bin Zayed City?",
        answer: "Car battery replacement in Mohamed Bin Zayed City starts from AED 299 at 800BatteryPro. The final price depends on your car's make, model, and the specific battery brand required. Every price is communicated clearly and upfront before any work begins — with absolutely zero hidden costs. Included at no extra charge: free battery health testing, professional on-site installation, and up to 18 months manufacturer warranty on every battery replaced in MBZ City."
    },
    {
        question: "Does 800BatteryPro come to my villa or apartment in MBZ City?",
        answer: "Yes — 800BatteryPro comes directly to your exact location in Mohamed Bin Zayed City whether you are at your villa in any of the 34 zones, parked at Mazyad Mall, near Al Forsan Village, on Sheikh Mohammed Bin Zayed Road, or anywhere else across MBZ City. There is no need to arrange a tow truck or drive to a garage. Our mobile technician brings the replacement battery, all tools, and diagnostic equipment to you and completes the full job on the spot in under 25 minutes."
    },
    {
        question: "Which car battery brands does 800BatteryPro install in MBZ City?",
        answer: "800BatteryPro installs only genuine OEM-approved branded car batteries in Mohamed Bin Zayed City including Bosch, Varta, ACDelco, and other leading manufacturers trusted by UAE car owners. We never install counterfeit, substandard, or grey market batteries. Every battery installed across MBZ City's 34 zones comes with up to 18 months manufacturer warranty — the strongest battery warranty available from any mobile service in Abu Dhabi."
    },
    {
        question: "Is 800BatteryPro available at night and on weekends in MBZ City?",
        answer: "Yes — 800BatteryPro operates 24 hours a day, 7 days a week across all of Mohamed Bin Zayed City with no exceptions. Whether your car battery dies at midnight in Zone 10, at 3 AM near Mazyad Mall, on a Friday morning before prayers, or during a UAE public holiday — our nearest technician reaches you in under 25 minutes. There are absolutely no additional charges for nighttime, weekend, or public holiday callouts anywhere in MBZ City."
    },
    {
        question: "Which car brands does 800BatteryPro service in Mohamed Bin Zayed City?",
        answer: "800BatteryPro services every car brand driven by MBZ City residents including BMW, Mercedes-Benz, Toyota, Audi, Land Rover, Range Rover, Nissan, Lexus, Chevrolet, Jeep, Volkswagen, Mini Cooper, Jaguar, Rolls Royce, Bentley, Mitsubishi, Hyundai, Kia, Honda, Ford, and all other car brands available in the UAE. MBZ City's multicultural community drives a wide mix of vehicles — our experienced technicians are equipped to handle every make and model across all 34 zones."
    },
    {
        question: "My car battery died on Sheikh Mohammed Bin Zayed Road near MBZ City — can you help?",
        answer: "Yes — 800BatteryPro provides emergency roadside assistance on Sheikh Mohammed Bin Zayed Road (E311), Al Ain Road (E22), and the E30 highway surrounding Mohamed Bin Zayed City. If your battery dies on any of these major roads near MBZ City, call +971 52 847 5675 immediately, share your location, and our nearest mobile technician will reach you in under 25 minutes. Wehandle highway breakdowns safely — our technicians are fully equipped for roadside emergency response at any hour."
    },
    {
        question: "Does 800BatteryPro provide free battery testing in Mohamed Bin Zayed City?",
        answer: "Yes — every service call in Mohamed Bin Zayed City includes a free comprehensive battery health test using advanced OBD-II diagnostic equipment. Our technicians test your battery's voltage, cold cranking amps, state of health, and alternator output — giving you a complete picture of your car's electrical system. If your battery can be safely boosted rather than replaced, we will always tell you honestly. 800BatteryPro never recommends an unnecessary replacement to any MBZ City customer."
    },
    {
        question: "How do I book a car battery replacement in Mohamed Bin Zayed City?",
        answer: "Booking car battery replacement in Mohamed Bin Zayed City with 800BatteryPro takes under one minute. Simply call or WhatsApp +971 52 847 5675 with your zone number or nearest landmark in MBZ City and your car details. Alternatively, fill in the booking form on this page by selecting Mohamed Bin Zayed City as your location and your required service. A team member confirms your booking within minutes and dispatches the nearest available technician to your exact location in MBZ City — day or night, no waiting, no hassle."
    },
    {
        question: "Does 800BatteryPro cover all 34 zones of MBZ City including outer zones near Al Shamkhah?",
        answer: "Yes — 800BatteryPro covers every single zone in Mohamed Bin Zayed City including all 34 zones from Zone 1 at the community entrance near Al Ain Road all the way to the outer zones bordering Al Shamkhah, Khalifa City B (Shakhbout City), and Mussafah. We also cover Al Forsan Village, Mazyad Mall surroundings, Mohammed Bin Zayed City Public Park area in Zone 19, and all residential clusters throughout this 45 square kilometre community. No zone in MBZ City is beyond our 25-minute response guarantee — 24 hours a day, 7 days a week."
    },
    
]

const arabicFaqs = [
    {
        question: "ما هو أفضل مركز لخدمة السيارات في دبي؟",
        answer: "إذا كنت تبحث عن أحد أفضل وأكثر مراكز خدمة السيارات ثقة في دبي، فعليك دائمًا اختيار 800BatteryPro. لدينا فريق يضم أكثر من 50 فنيًا معتمدًا لديهم الخبرة للعمل على كل صانع سيارات رئيسي بما في ذلك ماركات السيارات الأمريكية والأوروبية."
    },
    {
        question: "أين تقدمون خدماتكم؟",
        answer: "يقدم 800BatteryPro خدمة المساعدة على الطريق على مدار الساعة واستبدال بطارية السيارة وخدمات برمجة السيارات المتقدمة في جميع أنحاء دبي وأبو ظبي. إذا كنت بحاجة إلى خدمات فورية، اتصل بنا على +971528475675."
    },
    {
        question: "كم تكلفة استبدال بطارية السيارة؟",
        answer: "يعتمد نطاق تكلفة استبدال بطارية السيارة حقًا على ماركة سيارتك وطرازها، بينما يتراوح المتوسط بين 250 إلى 600 درهم. يمكنك الاتصال بـ 800BatteryPro للحصول على أسعار تنافسية في السوق لاستبدال بطارية السيارة والخدمات الأخرى. يستخدم فنيونا فقط بطاريات السيارات الأصلية وقطع الغيار المعتمدة من OEM لجميع عملائنا."
    },
    {
        question: "أين يقع مركز الخدمة الخاص بكم في دبي؟",
        answer: "يمتلك 800BatteryPro مركزًا لخدمة السيارات مجهزًا تجهيزًا جيدًا وموقعًا مثاليًا في دبي. بفضل أكثر من 20 شاحنة متنقلة وأكثر من 50 فنيًا معتمدًا، نقدم كل بطارية سيارة وخدمة إصلاح متقدمة مع رضا العملاء بنسبة 100 بالمائة."
    },
    {
        question: "كم تكلفة استبدال بطارية السيارة في دبي؟",
        answer: "تكلفة استبدال بطارية السيارة في دبي عادة ما بين 250-600 درهم إماراتي حسب العلامة التجارية والطراز. يقدم 800BatteryPro أسعارًا تنافسية مع خدمة متنقلة في نفس اليوم – لا حاجة لزيارة مركز صيانة."
    },
    {
        question: "كم من الوقت يستغرق استبدال بطارية السيارة؟",
        answer: "تستغرق معظم عمليات استبدال بطارية السيارة من 20 إلى 45 دقيقة. يصل فنيونا المتنقل، ويقوم بتركيب البطارية الجديدة واختبار النظام في الموقع – بدون توقف عن العمل."
    },
    {
        question: "هل يأتي 800BatteryPro إلى موقعي في دبي؟",
        answer: "نعم – 800BatteryPro خدمة متنقلة. نأتي إلى منزلك أو مكتبك أو على جانب الطريق في أي مكان في دبي وأبو ظبي. لا حاجة لزيارة مركز صيانة."
    },
    {
        question: "هل يمكن تشغيل بطارية السيارة النافذة بدلاً من استبدالها؟",
        answer: "نعم، إذا كانت البطارية غير تالفة. يوفر تشغيل البطارية (البدء باستخدام كابلات التوصيل) شحنة كافية لتشغيل المحرك. إذا تعطلت البطارية مرة أخرى بسرعة، فمن الضروري استبدالها."
    },
    {
        question: "ماذا تشمل خدمة المساعدة على الطريق في دبي؟",
        answer: "تشمل خدمة المساعدة على الطريق من 800BatteryPro تشغيل البطارية، ونفخ الإطارات، والإسعافات الأولية الميكانيكية البسيطة، واستبدال البطارية في الموقع – وهي متاحة على مدار الساعة طوال أيام الأسبوع في جميع أنحاء دبي وأبو ظبي."
    },
    {
        question: "ما مدى سرعة وصول المساعدة على الطريق في دبي؟",
        answer: "يصل فنيونا عادة خلال 30-90 دقيقة في جميع أنحاء دبي وأبو ظبي، حسب حركة المرور وموقعك المحدد."
    },
    {
        question: "كم تكلفة فحص تشخيص السيارة في دبي؟",
        answer: "تكلفة الفحص التشخيصي الأساسي OBD-II في دبي عادة ما بين 100-300 درهم إماراتي. يوفر 800BatteryPro فحصًا متنقلًا كاملاً في موقعك مع تقرير مفصل بالأعطال."
    },
    {
        question: "كيف أعرف أن وحدة التحكم الإلكترونية (ECU) في سيارتي معطلة؟",
        answer: "تشمل علامات تعطل وحدة التحكم الإلكترونية (ECU): ضوء تحذير المحرك، وضعف الاقتصاد في استهلاك الوقود، واختلال المحرك، وعدم تشغيل السيارة، وقراءات المستشعرات غير المنتظمة. يؤكد الفحص التشخيصي أعطال ECU."
    },
    {
        question: "متى تحتاج أنظمة مساعدة السائق المتقدمة (ADAS) إلى إعادة المعايرة؟",
        answer: "تتطلب أنظمة ADAS إعادة المعايرة بعد استبدال الزجاج الأمامي، أو محاذاة العجلات، أو استبدال الكاميرا/المستشعر، أو إصلاح الحوادث، أو إذا ظهرت تحذيرات مساعدة السائق على لوحة القيادة."
    },
    {
        question: "لماذا يخرج مكيف سيارتي هواءً ساخنًا في دبي؟",
        answer: "الأسباب الشائعة: انخفاض مادة التبريد، أو ضعف الضاغط، أو انسداد المكثف، أو تلف محرك النافثة. في حرارة دبي، يعتبر انخفاض غاز التبريد هو الأكثر شيوعًا. احجز فحصًا متنقلًا للمكيف لتشخيص المشكلة."
    },
    {
        question: "كم تكلفة استبدال تيل الفرامل في دبي؟",
        answer: "يتراوح سعر استبدال تيل الفرامل في دبي بين 200-600 درهم لكل محور، حسب ماركة السيارة وجودة التيل. الخدمة المتنقلة تعني عدم الحاجة إلى سحب السيارة أو زيارة مركز صيانة."
    },
    {
        question: "ما نوع البطارية التي تحتاجها سيارة أودي؟",
        answer: "تتطلب معظم سيارات أودي الحديثة بطاريات AGM (الصوف الزجاجي الماص). قد تستخدم الطرازات القديمة بطاريات EFB. يجب دائمًا مطابقة تصنيف CCA و Ah المحدد في دليل مالك سيارة أودي."
    },
    {
        question: "هل 800BatteryPro متاح على مدار 24 ساعة في دبي؟",
        answer: "نعم – يعمل 800BatteryPro على مدار الساعة طوال أيام الأسبوع في جميع مناطق دبي لاستبدال البطاريات وتشغيلها والمساعدة على الطريق. اتصل أو احجز عبر الإنترنت في أي وقت."
    },
    {
        question: "هل يخدم 800BatteryPro منطقة أبو ظبي؟",
        answer: "نعم – نخدم جميع مناطق أبو ظبي بما في ذلك مدينة خليفة، جزيرة الريم، مصفح، العين ومركز المدينة. خدمة متنقلة – نأتي إليك."
    },
    {
        question: "كيف يعمل 800BatteryPro؟",
        answer: "اتصل أو احجز عبر الإنترنت، وأخبرنا بموقعك ومشكلة سيارتك. سيأتي إليك فني متنقل – في منزلك أو مكتبك أو على جانب الطريق – في أي مكان في دبي أو أبو ظبي. لا حاجة لمركز صيانة."
    },
    {
        question: "ما المناطق التي يغطيها 800BatteryPro في الإمارات؟",
        answer: "يغطي 800BatteryPro حاليًا جميع المناطق الرئيسية في دبي وأبو ظبي (بما في ذلك العين). راجع صفحة المواقع لدينا للحصول على تفصيل كامل لكل منطقة على حدة."
    },
    {
        question: "هل يمكنني تغيير الزيت في المنزل في دبي؟",
        answer: "نعم – يقدم 800BatteryPro خدمة تغيير الزيت والفلتر المتنقلة في منزلك أو مكتبك في جميع أنحاء دبي وأبو ظبي. تتوفر زيوت أصلية ومعتمدة من OEM. احجز عبر الإنترنت."
    },
    {
        question: "هل يمكن برمجة مفتاح سيارة مفقود في دبي دون الذهاب إلى الوكيل؟",
        answer: "نعم – يقدم 800BatteryPro خدمة ترميز وبرمجة مفاتيح السيارات المتنقلة لمعظم العلامات التجارية، مما يوفر عليك أسعار الوكيل وتكاليف السحب. نأتي إلى موقعك في دبي أو أبو ظبي."
    },
    {
        question: "هل يمكن إصلاح السيارة المتضررة من الفيضانات في دبي؟",
        answer: "نعم، إذا تم اكتشافها مبكرًا. يتضمن إصلاح أضرار الفيضانات تجفيف المكونات الكهربائية، واستعادة وحدة التحكم الإلكترونية (ECU)، وفحص الأسلاك. التأخير يسبب تآكلًا لا رجعة فيه – تصرف فورًا."
    },
    {
        question: "هل يتطلب استبدال بطارية BMW ترميزًا في دبي؟",
        answer: "نعم – تتطلب معظم موديلات BMW (من الفئة F و G فصاعدًا) تسجيل/ترميز البطارية بعد الاستبدال حتى تتم إعادة ضبط نظام إدارة البطارية (BMS) في السيارة بشكل صحيح."
    },
]

  const englishService = [
    {
      title: " Car Battery Replacement in MBZ City",
      hoverDec: "Dead car battery anywhere in Mohamed Bin Zayed City? 800BatteryPro dispatches a technician directly to your zone in MBZ City in under 25 minutes, 24/7 — whether you are in Zone 1, Zone 17, Zone 20, or any of the 34 zones across the community. We replace your battery on the spot using genuine OEM-approved branded batteries from Bosch, Varta, and ACDelco — with up to 18 months manufacturer warranty and zero hidden costs. All major car brands serviced including BMW, Mercedes, Toyota, Audi, Land Rover, Nissan, Lexus and more.",
      img: service
    },
    {
      title: " Car Battery Boosting & Jump Start in MBZ City",
      hoverDec: "Car won't start in Mohamed Bin Zayed City? Whether you are parked outside your villa in any MBZ zone, in the Mazyad Mall parking, or on Sheikh Mohammed Bin Zayed Road — our mobile technicians provide 24/7 emergency jump start and battery boosting across all of MBZ City in under 25 minutes. Every jump start includes a free advanced battery health diagnostic — we tell you honestly if your battery needs a boost or a full replacement. No guesswork, no hidden charges. Call +971 52 847 5675.",
      img: service2
    },
    {
      title: " 24/7 Roadside Assistance in MBZ City",
      hoverDec: "Stranded anywhere in Mohamed Bin Zayed City? 800BatteryPro's 24/7 roadside assistance covers all 34 zones of MBZ City and the surrounding highways including E30, E11, and Al Ain Road E22. Whether your car battery is dead, your car won't start, or you need emergency help near Mazyad Mall, Al Forsan Village, or any residential zone in MBZ City — our nearest mobile technician reaches you in under 25 minutes, day or night. No towing needed, no garage visit required. We come to your exact location and fix it on the spot.",
      img: service1
    },
    {
      title: " Car Scanning & Diagnostics in MBZ City",
      hoverDec: "Dashboard warning light on in Mohamed Bin Zayed City? 800BatteryPro's mobile technicians perform advanced OBD-II car scanning and full diagnostics at your location across all MBZ City zones — no garage visit needed. We accurately identify fault codes, electrical faults, battery health issues, and ECU errors on the spot using professional diagnostic equipment. Trusted by MBZ City residents across all 34 zones — accurate results in under 30 minutes, transparent pricing, zero hidden costs.",
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

    const defaultEnglishContent = {
    title: "About Us",
    heading: " Reliable Car Battery Services in Mohamed Bin Zayed City — Free Battery Testing & Zero Hidden Costs",
    description: "Mohamed Bin Zayed City is Abu Dhabi's largest residential suburb — a sprawling master-planned community of 34 zones spanning 45 square kilometres between Mussafah and Zayed City along the E30 and E11 highways. With tens of thousands of families and expat residents commuting daily across MBZ City's wide grid streets — and UAE summer temperatures regularly exceeding 45°C accelerating battery drain — a dead car battery in Mohamed Bin Zayed City is one of the most common roadside emergencies in Abu Dhabi's suburbs. 800BatteryPro covers every single zone in Mohamed Bin Zayed City — from Zone 1 near Al Ain Road to the outer zones bordering Al Shamkhah and Khalifa City B. Our fleet of 20+ fully equipped mobile vans are strategically positioned across Abu Dhabi's mainland to reach any MBZ City resident in under 25 minutes, 24 hours a day, 7 days a week. With 30+ experienced technicians, advanced battery diagnostic technology, genuine branded batteries from Bosch and Varta, and up to 18 months manufacturer warranty — 800BatteryPro is Mohamed Bin Zayed City's most trusted mobile car battery replacement service. One call to +971 52 847 5675 and our nearest technician is on his way to your exact zone immediately — no towing, no garage visit, zero hidden costs. Whether you live in Zone 1 near the community entrance, Zone 19 near Mohammed Bin Zayed City Public Park, Zone 24 in the quiet residential heart of MBZ, or any of the 34 zones across this 45 square kilometre community — 800BatteryPro reaches you faster than any other service in Abu Dhabi.",
    features: [
      "Under 25 Minutes & Fast 24/7 Roadside Assistance",
      "6+ Years of Experience Delivery 100% Satisfactory Work",
      "10,000+ Customers Served & 30+ Technicians In the UAE"
    ],
    cta: "Learn More"
  };

  const defaultArabicContent = {
    title: "من نحن",
    heading: "بطارية برو",
    description: "مرحباً بكم في 800BatteryPro—اختياركم الأمثل لخدمات بطاريات السيارات السريعة والموثوقة في دبي وأبو ظبي. هل تحتاج إلى أفضل أسعار بطاريات السيارات أو مساعدة على الطريق تعمل 24/7 في دبي؟ لا تضيع وقتك في البحث عن 'محل بطاريات قريب مني'—فريقنا المتنقل ومتجرنا المتكامل يجعلان طوارئ البطارية بسيطة وخالية من التوتر. اختر 800BatteryPro للتمتع بالسرعة الفائقة والحلول التي تضع العميل في المقام الأول.",
    features: [
      "خدمات بطاريات سيارات من علامات تجارية ممتازة",
      "احصل على الخدمة مع مساعدة على الطريق تعمل 24/7",
      "موثوق من قبل مالكي السيارات في دبي وأبو ظبي"
    ],
    cta: "اعرف المزيد"
  };

              // English content
  const englishContents = {
    sectionTitle: "What Our Customers Say",
    headingPrefix: "About Our Mohamed Bin Zayed City",
    headingHighlight: "Battery Service",
  };

  // Arabic content (translated reviews)
  const arabicContents = {
    sectionTitle: "ماذا يقول عملاؤنا",
    headingPrefix: "موثوق من قبل",
    headingHighlight: "السائقين في كل مكان",
  };

  const Contenttext = {
    desc: "Battery Services We Offer",
  title1: "Mobile Car Battery  ",
title2: " Service in Mohamed Bin Zayed City",
    viewAll: "View All",
  }

        const whyChooseUsContent = locale === "en" 
        ? {
            desc: "Why Choose Us",
            titlePart1: "Why Mohamed Bin Zayed City Drivers ",
            titleHighlighted: "Choose 800BatteryPro"
          }
        : {
            desc: "لماذا تختارنا",
            titlePart1: "خدمة موثوقة لبطارية السيارة",
            titleHighlighted: "بطارية السيارة"
          }

             const faqContent = locale === "en" 
        ? {
            desc: "Got Questions?",
            titlePart1: "Frequently Asked Questions  ",
            titlePart2: " About Car Battery Replacement ",
            titlePart3: "in Mohamed Bin Zayed City "
          }
        : {
            desc: "لديك أسئلة؟",
            titlePart1: "لدينا",
            titlePart2: " إجابات ",
            titlePart3: "سريعة"
          }

  const hero = locale === "en" ? heroEnglishContent : heroArabicContent
        const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
       const faqs = locale === "ar" ? arabicFaqs : englishFaqs
  return (
    <div>

      <div className='sticky top-0'>
        <Hero hero={hero} herobg={herobg} />
      </div>

      {/* <Review /> move it here */}

      <div className='bg-white pb-12 rounded-t-4xl relative z-10'>
          <About englishContent={defaultEnglishContent} arabicContent={defaultArabicContent} />
        <Services text={Contenttext} englishService={englishService} arabicService={arabicService} /> 
         <Banners />
        <HowItWorks title={howItWorksContent.title} desc={howItWorksContent.desc} />
      </div>

      <RealExperience />

      <div className='bg-white  rounded-t-4xl relative z-10'>
        <CarBrands text={text} />
        <BatteryBrands />
  
        <WhyChooseUs data={data} title={{part1:whyChooseUsContent.titlePart1, highlighted:whyChooseUsContent.titleHighlighted}} desc={whyChooseUsContent.desc} />
           <Trusted englishContent={englishContents} arabicContent={arabicContents} />
           <Faq faqs={faqs}  desc={faqContent.desc}
                title={{
        part1: faqContent.titlePart1,
        part2: faqContent.titlePart2,
        part3: faqContent.titlePart3
    }} />
        <Footer />
      </div>

    </div>
  )
}

export default Zayed