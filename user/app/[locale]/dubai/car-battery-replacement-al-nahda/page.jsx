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
import service from '@/public/locations/service4.webp'
import service1 from '@/public/locations/service5.webp'
import service2 from '@/public/locations/service6.webp'
import service3 from '@/public/locations/service7.webp'
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

const AlNahda = () => {
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
      title2: " for All Car Brands in Al Nahda",
      viewAll: "View All",
    };

     const howItWorksContent = locale === "en" 
        ? {
            desc: "How it Works?",
            title: {
                part1: "How Our Car ",
                highlighted: "Battery Service ",
                part2: " Works in Al Nahda "
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
        span1: "Car Battery Replacement ",
        span2: "in Al Nahda, Dubai Under 25 Minutes"
    },
    desc1: "Dead battery in Al Nahda, Dubai? 800BatteryPro reaches any building in Al Nahda 1 or Al Nahda 2 in under 25 minutes, 24/7. Genuine batteries, 18 month warranty, zero hidden costs. Call +971 52 847 5675",
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
        title: "Under 25 Minutes Both Sub-Communities Covered",
        desc: "Reaching every building in Al Nahda 1 and Al Nahda 2 faster than any competitor in Dubai's eastern district. Full coverage across Al Nahda 1 (Al Mulla Plaza, Rashid Stadium) and Al Nahda 2 (Pond Park, Dubai Women's College)"
    },
    {
        icons: <TiStarburst />,
        title: "AED 299 Starting Price Up to 18 Months Warranty",
        desc: "Transparent pricing, zero hidden costs, told upfront before work begins. Dubai's strongest mobile battery replacement warranty. We serve in Dubai Airport Proximity - Just minutes from Dubai International Airport for fastest Al Nahda response times. "
    },
    {
        icons: <TiStarburst />,
        title: "24/7 Free Battery Testing",
        desc: "Advanced OBD-II diagnostic included with every service call at no extra charge. No extra charge for nights, weekends or UAE public holidays anywhere in Al Nahda"
    },
    {
        icons: <TiStarburst />,
        title: "10,000+ UAE Customers Served Genuine Batteries Only",
        desc: "Dubai's most trusted mobile battery service. Bosch, Varta, ACDelco and other OEM-approved brands - never counterfeit. BMW, Mercedes, Toyota, Nissan, Audi, Land Rover and every brand driven by Al Nahda's multicultural community"
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
        question: "How quickly can 800BatteryPro reach me in Al Nahda, Dubai?",
        answer: "800BatteryPro reaches any building in Al Nahda 1 or Al Nahda 2, Dubai in under 25 minutes - guaranteed. Our fleet of 20+ mobile vans cover every part of Al Nahda from the towers on Al Ittihad Road (E11) and Baghdad Street in Al Nahda 1 to the residential blocks near Al Nahda Pond Park, Dubai Women's College, and Amman Street in Al Nahda 2. Service operates 24 hours a day, 7 days a week with no additional charges for nighttime, weekend, or UAE public holidays."
    },
    {
        question: "How much does car battery replacement cost in Al Nahda, Dubai?",
        answer: "Car battery replacement in Al Nahda starts from AED 299 at 800BatteryPro. The exact price depends on your car make, model, and the specific battery brand required. Every price is communicated clearly and upfront before any work begins - with absolutely zero hidden costs. Included at no extra charge with every Al Nahda service call: free battery health testing using advanced OBD-II diagnostic equipment, professional on-site installation at your exact building location, and up to 18 months manufacturer warranty on every battery replaced."
    },
    {
        question: "Does 800BatteryPro cover both Al Nahda 1 and Al Nahda 2 in Dubai?",
        answer: "Yes - 800BatteryPro covers both Al Nahda 1 and Al Nahda 2 in Dubai completely. In Al Nahda 1 we cover all towers near Al Mulla Plaza, Al Ittihad Road, Baghdad Street, Rashid Stadium, Shabab Al Ahli Football Club, and all surrounding residential buildings. In Al Nahda 2 we cover all towers near Dubai Women's College, NMC Speciality Hospital on Amman Street, Al Nahda Pond Park, and all residential and commercial buildings throughout both sub-communities - 24/7 with a guaranteed under 25-minute response time."
    },
    {
        question: "Which car battery brands does 800BatteryPro install in Al Nahda?",
        answer: "800BatteryPro installs only genuine OEM-approved branded car batteries in Al Nahda including Bosch, Varta, ACDelco, and other leading manufacturers. Al Nahda's diverse community drives a wide mix of vehicles - from Japanese everyday cars like Toyota, Nissan, and Honda to Korean brands like Hyundai and Kia, and European makes like BMW and Mercedes. Our technicians carry the correct batteries for every make and model, all backed by up to 18 months manufacturer warranty — the strongest available from any mobile service in Dubai's eastern district."
    },
    {
        question: "Is 800BatteryPro available 24/7 in Al Nahda including early morning before Sharjah commutes?",
        answer: "Yes - 800BatteryPro operates 24 hours a day, 7 days a week across all of Al Nahda with no exceptions. Al Nahda's residents frequently commute to Sharjah and central Dubai early in the morning  and a dead battery before a morning commute on Al Ittihad Road is one of the most common emergencies we respond to in the area. Whether your battery dies at 5 AM before your morning commute, at midnight after returning from Sharjah, during a UAE public holiday, or at any other time — our nearest technician reaches you in under 25 minutes with no additional charges."
    },
    {
        question: "Which car brands does 800BatteryPro service in Al Nahda?",
        answer: "800BatteryPro services every car brand driven by Al Nahda residents including Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Suzuki, BMW, Mercedes-Benz, Audi, Land Rover, Chevrolet, Jeep, Ford, Volkswagen, Mini Cooper, Lexus, Infiniti, and all other car brands available in the UAE. Al Nahda's multicultural community of South Asian, Middle Eastern, and international families drives one of Dubai's most diverse vehicle mixes - our technicians are fully equipped to handle every make and model across both Al Nahda 1 and Al Nahda 2."
    },
    {
        question: "My car battery died on Al Ittihad Road near Al Nahda — can you help?",
        answer: "Yes - 800BatteryPro provides emergency roadside assistance on Al Ittihad Road (E11), Baghdad Street (D95), Al Nahda Street (D93), Amman Street (D97), and Sheikh Mohammed Bin Zayed Road (E311) near Al Nahda, Dubai. If your battery dies on any of these roads call +971 52 847 5675 immediately, share your location or nearest landmark, and our mobile technician will reach you in under 25 minutes for safe roadside emergency response - any hour, any day, with no extra charge for highway or roadside callouts near the Dubai-Sharjah border."
    },
    {
        question: "Does 800BatteryPro offer free battery testing in Al Nahda?",
        answer: "Yes - every service call in Al Nahda includes a free comprehensive battery health test using advanced OBD-II diagnostic equipment. Al Nahda's long daily commutes to and from Sharjah along Al Ittihad Road, combined with Dubai's extreme summer heat, accelerate battery wear significantly faster than shorter urban routes. Our technicians test your battery's voltage, cold cranking amps, state of health, and alternator output at your exact Al Nahda building location — giving you a complete picture before any work begins. If your battery can be safely boosted rather than replaced, we will always tell you honestly."
    },
    {
        question: "How do I book a car battery replacement in Al Nahda, Dubai?",
        answer: "Booking car battery replacement in Al Nahda with 800BatteryPro takes under one minute. Call or WhatsApp +971 52 847 5675 with your building name or street in Al Nahda 1 or Al Nahda 2 and your car details — or fill in the booking form on this page selecting Al Nahda, Dubai as your location. A team member confirms your booking within minutes and dispatches the nearest available technician to your exact Al Nahda location immediately - any hour, any day, no hassle, zero hidden costs."
    },
    {
        question: "Does 800BatteryPro cover all of Al Nahda including buildings near NMC Hospital and Dubai Women's College?",
        answer: "Yes — 800BatteryPro covers every part of Al Nahda including buildings near NMC Speciality Hospital on Amman Street in Al Nahda 2, Dubai Women's College, Al Nahda Pond Park, all towers on Al Ittihad Road, Baghdad Street and Al Nahda Street in Al Nahda 1, Al Mulla Plaza area, towers near Rashid Stadium and Shabab Al Ahli Football Club, Nawras Hotel Apartments, Lavender Hotel beside Al Ittihad Street, Mai Tower, Dubai Star Building, and every other residential and commercial building across both Al Nahda 1 and Al Nahda 2 — 24/7 with a guaranteed under 25-minute response to any location."
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
      title: "Car Battery Replacement in Al Nahda",
      hoverDec: "Dead car battery anywhere in Al Nahda, Dubai? 800BatteryPro dispatches a technician directly to your exact building location in under 25 minutes, 24/7 - whether you are in Al Nahda 1 near Al Mulla Plaza and Al Ittihad Road, in Al Nahda 2 near Dubai Women's College and Al Nahda Pond Park, parked on Baghdad Street, Amman Street, or Al Nahda Street - we reach you fast. We replace your battery on the spot using genuine OEM-approved branded batteries from Bosch, Varta, and ACDelco — with up to 18 months manufacturer warranty and zero hidden costs. All major car brands serviced including BMW, Mercedes, Toyota, Audi, Land Rover, Nissan, Lexus and more.",
      img: service
    },
    {
      title: "Car Battery Boosting & Jump Start in Al Nahda",
      hoverDec: "Car won't start in Al Nahda, Dubai? Whether you are parked outside your building on Al Ittihad Road, near Al Nahda Pond Park in Al Nahda 2, outside NMC Speciality Hospital on Amman Street, near Nawras Hotel Apartments, outside Lavender Hotel beside Al Ittihad Street, or anywhere across Al Nahda 1 and Al Nahda 2 - our mobile technicians provide 24/7 emergency jump start and battery boosting in under 25 minutes. Every jump start includes a free advanced battery health diagnostic — we tell you honestly if your battery needs a boost or a full replacement. No guesswork, no hidden charges. Call +971 52 847 5675 now.",
      img: service2
    },
    {
      title: "24/7 Roadside Assistance in Al Nahda",
      hoverDec: "Stranded anywhere in Al Nahda, Dubai? 800BatteryPro's 24/7 roadside assistance covers every street in Al Nahda 1 and Al Nahda 2 including Al Ittihad Road (E11), Baghdad Street (D95), Al Nahda Street (D93), Amman Street (D97), and all roads connecting to Sheikh Mohammed Bin Zayed Road (E311) and Dubai International Airport. Whether your battery is dead outside your building, near Rashid Stadium, Al Mulla Plaza, or Al Nahda Pond Park — our nearest mobile technician reaches you in under 25 minutes, day or night. No towing needed, no garage visit required. We fix it on the spot and get you back on the road fast.",
      img: service1
    },
    {
      title: "Car Scanning & Diagnostics in Al Nahda",
      hoverDec: "Dashboard warning light on in Al Nahda, Dubai? 800BatteryPro's mobile technicians perform advanced OBD-II car scanning and full diagnostics at your exact building location anywhere in Al Nahda 1 or Al Nahda 2 - no garage visit needed. Whether you are parked near NMC Speciality Hospital on Amman Street, outside Dubai Women's College, near Al Nahda Medical Fitness Centre, or anywhere across Al Nahda's residential towers — we accurately identify fault codes, electrical faults, battery health issues, and ECU errors on the spot. Accurate results in under 30 minutes, transparent pricing, zero hidden costs.",
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
    heading: "Reliable Car Battery Services in Al Nahda, Dubai — Free Battery Testing & Zero Hidden Costs",
    description: "Al Nahda is one of Dubai's most densely populated and vibrant residential communities — a bustling mixed-use district divided into two sub-communities: Al Nahda 1 and Al Nahda 2, situated in eastern Dubai within the Deira region along the Dubai-Sharjah border. Home to thousands of families, working professionals, and expats commuting daily between Dubai and Sharjah along Al Ittihad Road (E11) and Al Dhaid Road (E88) — Al Nahda's combination of high-rise residential towers, ground-floor retail, and heavy daily commuter traffic makes it one of Dubai's most active neighbourhoods around the clock. Al Nahda 1 is home to Al Mulla Plaza, Shabab Al Ahli Football Club, and Rashid Stadium, while Al Nahda 2 features Dubai Women's College, NMC Speciality Hospital, Al Nahda Pond Park, and a dense cluster of residential and commercial towers. With Dubai's extreme summer heat regularly exceeding 45°C accelerating battery drain on vehicles parked in building basements and street parking — and long daily commutes to and from Sharjah draining batteries faster - a dead car battery in Al Nahda is a genuine emergency that demands immediate, professional response. 800BatteryPro covers every building in Al Nahda 1 and Al Nahda 2 — from towers on Al Ittihad Road and Baghdad Street to the residential blocks near Al Nahda Pond Park, NMC Speciality Hospital on Amman Street, Dubai Women's College, and all streets connecting to Sheikh Mohammed Bin Zayed Road (E311) and Dubai International Airport. Our fleet of 20+ fully equipped mobile vans reaches any Al Nahda location in under 25 minutes, 24 hours a day, 7 days a week. With 30+ experienced technicians, advanced battery diagnostic technology, genuine branded batteries from Bosch and Varta, and up to 18 months manufacturer warranty -one call to +971 52 847 5675 and our nearest technician is on his way to your exact Al Nahda building in under 25 minutes - no towing, no garage visit, zero hidden costs.",
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
    headingPrefix: "About Our Al Nahda",
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
  title1: "Mobile Car Battery Service Al Nahda",
title2: " Arrival in Under 25 Minutes",
    viewAll: "View All",
  }

        const whyChooseUsContent = locale === "en" 
        ? {
            desc: "Why Choose Us",
            titlePart1: "Why Al Nahda Drivers ",
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
            titlePart3: "in Al Nahda "
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

export default AlNahda