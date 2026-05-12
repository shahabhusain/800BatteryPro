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

const AlBarSha = () => {
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
        span1: "Car Battery Replacement in ",
        span2: "Al Barsha 3, Dubai Under 25 Minutes"
    },
    desc1: "Starting From AED 299 — Up to 18 Months Warranty — 24/7 RSA — Reaching Every Villa in Al Barsha 3 Under 25 Minutes",
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
        title: "Under 25 Minutes With Proven Track Record in Al Barsha ",
        desc: "Reaching every villa street in Al Barsha 3 faster than any competitor in Dubai. Hundreds of successful battery replacements across Al Barsha 3's villa community"
    },
    {
        icons: <TiStarburst />,
        title: "AED 299 Starting Price & Up to 18 Months Warranty",
        desc: "Transparent pricing, zero hidden costs, told upfront before work begins. Dubai's strongest mobile battery replacement warranty. No extra charge for nights, weekends or UAE public holidays anywhere in Al Barsha 3"
    },
    {
        icons: <TiStarburst />,
        title: "Genuine Batteries Only With Free Battery Testing",
        desc: "Bosch, Varta, ACDelco and other OEM-approved brands — never counterfeit. Advanced diagnostic included with every service call at no extra charge. All Luxury & Everyday Car Brands Covered 24/7 — BMW, Mercedes, Land Rover, Rolls Royce, Toyota, Nissan and every brand driven in Al Barsha 3. "
    },
    {
        icons: <TiStarburst />,
        title: "10,000+ UAE Customers Served & 20+ Mobile Vans",
        desc: "Dubai's most trusted mobile battery service covering Sheikh Zayed Road corridor for fastest Al Barsha 3 response"
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
        question: "How quickly can 800BatteryPro reach my villa in Al Barsha 3, Dubai?",
        answer: "800BatteryPro reaches any villa or location in Al Barsha 3, Dubai in under 25 minutes — guaranteed. Our fleet of 20+ mobile vans are strategically positioned across Dubai including areas serving the Sheikh Zayed Road corridor, ensuring fast response to every street in Al Barsha 3 — from the villa roads near Jebel Ali Racecourse to the communities adjacent to Al Barsha Pond Park. Our service operates 24 hours a day, 7 days a week with no additional charge for nights, weekends, or UAE public holidays."
    },
    {
        question: "How much does car battery replacement cost in Al Barsha 3?",
        answer: "Car battery replacement in Al Barsha 3, Dubai starts from AED 299 at 800BatteryPro. The exact price depends on your car's make, model, and the specific battery brand required for your vehicle. Every price is communicated clearly and upfront before any work begins — with absolutely zero hidden costs. Included at no extra charge with every Al Barsha 3 service call: free battery health testing, professional on-site installation, and up to 18 months manufacturer warranty."
    },
    {
        question: "Can 800BatteryPro come directly to my Al Barsha 3 villa?",
        answer: "Yes — 800BatteryPro comes directly to your villa anywhere in Al Barsha 3, Dubai. Whether you are at home on a residential street, parked near Al Barsha Mall, outside Jebel Ali Racecourse, near Al Barsha Pond Park, or anywhere else across the community — there is no need to arrange a tow truck or drive to a garage. Our mobile technician brings the replacement battery, all tools, and diagnostic equipment to your exact location and completes the full job on the spot in under 25 minutes."
    },
    {
        question: "Which battery brands does 800BatteryPro install in Al Barsha 3?",
        answer: "800BatteryPro installs only genuine OEM-approved branded car batteries in Al Barsha 3 including Bosch, Varta, ACDelco, and other leading manufacturers trusted by Dubai car owners. We never install counterfeit, substandard, or grey market batteries. Al Barsha 3's luxury and premium vehicle owners can trust that every battery we install meets manufacturer specifications — backed by up to 18 months manufacturer warranty, the strongest available from any mobile service in Dubai."
    },
    {
        question: "Is 800BatteryPro available 24/7 in Al Barsha 3 including weekends?",
        answer: "Yes — 800BatteryPro operates 24 hours a day, 7 days a week across all of Al Barsha 3 with no exceptions. Whether your car battery dies at midnight outside your villa, early Friday morning before prayers, during a UAE public holiday, or at 3 AM on Sheikh Zayed Road near Al Barsha — our nearest technician reaches you in under 25 minutes. There are absolutely no additional charges for nighttime, weekend, or public holiday callouts anywhere in Al Barsha 3."
    },
    {
        question: "Which car brands does 800BatteryPro service in Al Barsha 3?",
        answer: "800BatteryPro services every car brand driven by Al Barsha 3 villa residents including BMW, Mercedes-Benz, Land Rover, Range Rover, Rolls Royce, Bentley, Audi, Porsche, Toyota, Lexus, Nissan, Chevrolet, Jeep, Volkswagen, Mini Cooper, Jaguar, Mitsubishi, Hyundai, Kia, Honda, Ford, and all other car brands available in the UAE. Al Barsha 3's affluent and multicultural community drives a wide range of both luxury and everyday vehicles — our experienced technicians carry the right batteries for every make and model."
    },
    {
        question: "My car battery died on Sheikh Zayed Road near Al Barsha 3 — can you help?",
        answer: "Yes — 800BatteryPro provides emergency roadside assistance on Sheikh Zayed Road (E11), Emirates Road (E611), and Al Khail Road (E44) near Al Barsha 3. If your battery dies on any of these major Dubai roads near Al Barsha, call +971 52 847 5675 immediately, share your location or nearest landmark, and our mobile technician will reach you in under 25 minutes. We handle Sheikh Zayed Road highway breakdowns safely with fully equipped emergency roadside response — any hour, any day."
    },
    {
        question: "Does 800BatteryPro offer free battery testing in Al Barsha 3?",
        answer: "Yes — every service call in Al Barsha 3 includes a free comprehensive battery health test using advanced OBD-II diagnostic equipment. Our technicians test your battery's voltage, cold cranking amps, state of health, and alternator charging output — giving Al Barsha 3 residents a complete picture of their car's electrical health. If your battery can be safely boosted rather than replaced, we will always tell you honestly. 800BatteryPro never recommends an unnecessary replacement to any Al Barsha 3 customer."
    },
    {
        question: "How do I book a car battery replacement in Al Barsha 3, Dubai?",
        answer: "Booking car battery replacement in Al Barsha 3 with 800BatteryPro takes under one minute. Simply call or WhatsApp +971 52 847 5675 with your villa street or nearest landmark in Al Barsha 3 and your car details. Alternatively, fill in the booking form on this page by selecting Al Barsha 3, Dubai as your location and your required service. A team member confirms your booking within minutes and dispatches the nearest available technician to your exact Al Barsha 3 location — day or night, no waiting, no hassle."
    },
    {
        question: "Does 800BatteryPro cover all of Al Barsha 3 including roads near Jebel Ali Racecourse and Al Barsha Pond Park?",
        answer: "Yes — 800BatteryPro covers every street and villa road across Al Barsha 3, Dubai including the villa communities near Jebel Ali Racecourse, streets adjacent to Al Barsha Pond Park, roads connecting to Al Barsha Mall, and all residential streets between Al Barsha 1 and Al Barsha 2. We also cover the Sheikh Zayed Road (E11) frontage roads and Emirates Road (E611) surrounding Al Barsha 3. No location in Al Barsha 3 is beyond our 25-minute response guarantee — 24 hours a day, 7 days a week, 365 days a year."
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
      title: " Car Battery Replacement in Al Barsha 3",
      hoverDec: "Dead car battery at your Al Barsha 3 villa? 800BatteryPro dispatches a technician directly to your location anywhere in Al Barsha 3 in under 25 minutes, 24/7 — whether you are parked outside your villa, in Al Barsha Mall parking, near Jebel Ali Racecourse, or anywhere across the community. We replace your battery on the spot using genuine OEM-approved branded batteries from Bosch, Varta, and ACDelco — with up to 18 months manufacturer warranty and zero hidden costs. All major car brands serviced including BMW, Mercedes, Toyota, Audi, Land Rover, Nissan, Lexus, Rolls Royce and more.",
      img: service
    },
    {
      title: "Car Battery Boosting & Jump Start in Al Barsha 3",
      hoverDec: "Car won't start at your Al Barsha 3 villa? Whether you are parked on one of Al Barsha 3's residential streets, outside Al Barsha Mall, near Al Barsha Pond Park, or stuck on Sheikh Zayed Road — our mobile technicians provide 24/7 emergency jump start and battery boosting across all of Al Barsha 3 in under 25 minutes. Every jump start includes a free advanced battery health diagnostic — we tell you honestly if your battery needs a boost or a full replacement. No guesswork, no hidden charges. Call +971 52 847 5675 now.",
      img: service2
    },
    {
      title: " 24/7 Roadside Assistance in Al Barsha 3",
      hoverDec: "Stranded anywhere in Al Barsha 3, Dubai? 800BatteryPro's 24/7 roadside assistance covers every street in Al Barsha 3 and the surrounding roads including Sheikh Zayed Road (E11), Emirates Road (E611), and Al Khail Road (E44). Whether your car battery is dead outside your villa, near Mall of the Emirates, Jebel Ali Racecourse, or anywhere across Al Barsha 3 — our nearest mobile technician reaches you in under 25 minutes, day or night. No towing needed, no garage visit required. We come to your exact location and fix it on the spot.",
      img: service1
    },
    {
      title: "Car Scanning & Diagnostics in Al Barsha 3",
      hoverDec: "Dashboard warning light on at your Al Barsha 3 villa? 800BatteryPro's mobile technicians perform advanced OBD-II car scanning and full diagnostics at your location anywhere in Al Barsha 3 — no garage visit needed. We accurately identify fault codes, electrical faults, battery health issues, and ECU errors on the spot using professional diagnostic equipment. Trusted by Al Barsha 3 villa residents for fast, accurate results in under 30 minutes — transparent pricing and zero hidden costs guaranteed.",
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
    heading: " Reliable Car Battery Services in Al Barsha 3, Dubai — Free Battery Testing & Zero Hidden Costs",
    description: "Al Barsha 3 is one of Dubai's most prestigious and family-oriented villa communities — a peaceful suburb spanning nearly 1 million square metres between Al Barsha 1 and Al Barsha 2, with direct access to Sheikh Zayed Road (E11) and Emirates Road (E611). Home to thousands of families and professionals commuting daily to Dubai Internet City, Media City, and Mall of the Emirates — Al Barsha 3's wide tree-lined streets and spacious 3 to 6-bedroom villas house some of Dubai's most discerning residents. With UAE summer temperatures regularly exceeding 45°C and long daily commutes on Sheikh Zayed Road draining batteries faster — a dead car battery in Al Barsha 3 is a genuine emergency that demands immediate, professional response. 800BatteryPro covers every street and villa in Al Barsha 3 — from the villas near Jebel Ali Racecourse to the communities adjacent to Al Barsha Pond Park and all roads connecting to Mall of the Emirates. Our fleet of 20+ fully equipped mobile vans reaches any Al Barsha 3 location in under 25 minutes, 24 hours a day, 7 days a week. With 30+ experienced technicians, advanced battery diagnostic technology, genuine branded batteries from Bosch and Varta, and up to 18 months manufacturer warranty — 800BatteryPro is Al Barsha 3's most trusted mobile car battery replacement service. Whether you drive a BMW, Mercedes, Land Rover, or Toyota - One call to +971 52 847 5675 and our nearest technician is at your villa door in under 25 minutes — no towing, no garage visit, zero hidden costs.",
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
    headingPrefix: "About Our Al Barsha",
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
  title1: "Mobile Car Battery Service in Al Barsha 3",
title2: " Arrival in Under 25 Minutes",
    viewAll: "View All",
  }

        const whyChooseUsContent = locale === "en" 
        ? {
            desc: "Why Choose Us",
            titlePart1: "Why Al Barsha Drivers ",
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
            titlePart3: "in Al Barsha "
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

export default AlBarSha