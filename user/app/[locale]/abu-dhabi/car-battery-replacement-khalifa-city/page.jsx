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

const Khalifa = () => {
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
      title2: " for All Car Brands in Khalifa City ",
      viewAll: "View All",
    };

     const howItWorksContent = locale === "en" 
        ? {
            desc: "How it Works?",
            title: {
                part1: "How Our Car ",
                highlighted: "Battery Service ",
                part2: " Works in Khalifa City  "
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
        span1: "Car Battery Replacement in Khalifa City",
        span2: " Abu Dhabi Under 25 Minutes"
    },
    desc1: "Starting From AED 299 - Up to 18 Months Warranty - 24/7 RSA - Reaching Every Villa & Compound in Khalifa City Under 25 Minutes",
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
        title: " Battery Replacements in Khalifa City Under 25 Minutes ",
        desc: "Abu Dhabi's most experienced mobile battery service for Khalifa City's villa community. Reaching every villa street, gated compound, and sector in Khalifa City faster than any competitor. Our technicians know every street and compound in Khalifa City from Street 31 to Al Forsan Village and Golf Gardens."
    },
    {
        icons: <TiStarburst />,
        title: " AED 299 Starting Price Up to 18 Months Warranty ",
        desc: "Transparent pricing, zero hidden costs, told upfront before work begins. The strongest battery replacement warranty from any mobile service in Abu Dhabi's suburbs."
    },
    {
        icons: <TiStarburst />,
        title: "Genuine Batteries Only Free Battery Testing",
        desc: "Bosch, Varta, ACDelco and other OEM-approved brands — never counterfeit. Advanced OBD-II diagnostic included with every service call at no extra charge."
    },
    {
        icons: <TiStarburst />,
        title: "24/7 Airport Proximity",
        desc: "No extra charge for nights, weekends or UAE public holidays in Khalifa City. Just 10-15 minutes from Abu Dhabi International Airport for fastest response times. All Luxury & Family Car Brands Covered - BMW, Mercedes, Land Rover, Porsche, Toyota, Nissan and every brand driven in Khalifa City."
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
        question: "How quickly can 800BatteryPro reach my villa in Khalifa City, Abu Dhabi?",
        answer: "800BatteryPro reaches any villa, compound, or location in Khalifa City, Abu Dhabi in under 25 minutes — guaranteed. Our fleet of 20+ mobile vans are strategically positioned across Abu Dhabi's mainland and near key Khalifa City entry points, enabling rapid response to every street and compound from the original residential streets near Street 31 to Al Forsan Village, Al Raha Gardens, Golf Gardens, Al Rayyana, Liwa Oasis, and all sectors across this 600+ villa community. Service operates 24 hours a day, 7 days a week with no additional charges for nighttime, weekend, or public holidays."
    },
    {
        question: "How much does car battery replacement cost in Khalifa City, Abu Dhabi?",
        answer: "Car battery replacement in Khalifa City starts from AED 299 at 800BatteryPro. The exact price depends on your car make, model, and the specific battery brand required for your vehicle. Every price is communicated clearly and upfront before any work begins — with absolutely zero hidden costs. Included at no extra charge with every Khalifa City service call: free battery health testing using advanced OBD-II diagnostic equipment, professional on-site installation at your villa or compound, and up to 18 months manufacturer warranty. With 242 completed services in Khalifa City, our technicians are fully prepared for every villa and compound in the area."
    },
    {
        question: "Can 800BatteryPro come directly to my villa in Khalifa City?",
        answer: "Yes — 800BatteryPro comes directly to your villa door or compound entrance anywhere in Khalifa City, Abu Dhabi. Whether you are in a private villa on any of Khalifa City's wide residential streets, inside a gated compound at Al Forsan Village, Al Raha Gardens, Golf Gardens, Al Rayyana, or Liwa Oasis, parked near Al Forsan International Sports Resort or Abu Dhabi Golf Club, or anywhere else across Khalifa City's sprawling community - our mobile technician brings all tools and the replacement battery directly to your vehicle. No need to push your car out, arrange a tow truck, or drive 25 minutes to the city. The full job is completed on the spot in under 25 minutes."
    },
    {
        question: "Which car battery brands does 800BatteryPro install in Khalifa City?",
        answer: "800BatteryPro installs only genuine OEM-approved branded car batteries in Khalifa City including Bosch, Varta, ACDelco, and other leading manufacturers. Khalifa City's villa community drives a wide range of vehicles — from European luxury cars like BMW, Mercedes-Benz, Land Rover, Porsche, and Audi to Japanese family favourites like Toyota Land Cruiser, Nissan Patrol, and Lexus, as well as American SUVs like Chevrolet Suburban and Jeep Grand Cherokee. Our technicians carry the correct OEM-approved battery for every make and model, backed by up to 18 months manufacturer warranty on every installation in Khalifa City."
    },
    {
        question: "Is 800BatteryPro available 24/7 in Khalifa City including early mornings for Etihad Airways employees?",
        answer: "Yes - 800BatteryPro operates 24 hours a day, 7 days a week across all of Khalifa City with no exceptions. Khalifa City is home to many Etihad Airways employees whose headquarters is located in the district - and Etihad's shift schedules mean battery emergencies can happen at 3 AM, 5 AM, or any other unusual hour. Whether your battery dies before an early morning shift at Etihad Airways HQ, during a late night return from a long-haul flight, on a Friday morning before family plans, or at any other time - our nearest technician reaches you in under 25 minutes with no additional charges for off-peak callouts anywhere in Khalifa City."
    },
    {
        question: "Which car brands does 800BatteryPro service in Khalifa City?",
        answer: "800BatteryPro services every car brand driven by Khalifa City villa residents including BMW, Mercedes-Benz, Land Rover, Range Rover, Porsche, Audi, Volkswagen, Toyota Land Cruiser, Toyota Prado, Nissan Patrol, Nissan Pathfinder, Lexus LX, Lexus GX, Chevrolet Suburban, Chevrolet Tahoe, Jeep Grand Cherokee, Ford Expedition, GMC Yukon, Mitsubishi Pajero, Hyundai Santa Fe, Kia Sorento, and all other car brands available in the UAE. Khalifa City's family-oriented villa community predominantly drives large SUVs and luxury vehicles — our technicians carry the right batteries for every make and model."
    },
    {
        question: "My car battery died on the Abu Dhabi-Dubai highway near Khalifa City — can you help?",
        answer: "Yes — 800BatteryPro provides emergency roadside assistance on Abu Dhabi-Dubai highway (E11), Sheikh Mohammed Bin Zayed Road (E311), Hadaiq Al Raha Street, and all major roads in and around Khalifa City. If your battery dies on the highway near Khalifa City, call +971 52 847 5675 immediately, share your location or nearest landmark (such as Etihad Airways HQ or Al Forsan International Sports Resort), and our mobile technician will reach you in under 25 minutes for safe highway emergency response — any hour, any day, with no extra charge for highway callouts near Khalifa City."
    },
    {
        question: "Does 800BatteryPro offer free battery testing in Khalifa City?",
        answer: "Yes - every service call in Khalifa City includes a free comprehensive battery health test using advanced OBD-II diagnostic equipment. Khalifa City's unique battery challenge — vehicles sitting in private villa garages and compound parking for extended periods in Abu Dhabi's extreme summer heat, combined with long daily commutes on E11 and E311 - means batteries in Khalifa City typically degrade faster than in central Abu Dhabi. Our technicians test your battery's voltage, cold cranking amps, state of health, and alternator output at your villa location before any work begins. If your battery can be safely boosted rather than replaced, we will always tell you honestly."
    },
    {
        question: "How do I book a car battery replacement in Khalifa City, Abu Dhabi?",
        answer: "Booking car battery replacement in Khalifa City with 800BatteryPro takes under one minute. Call or WhatsApp +971 52 847 5675 with your villa street name, compound name, or nearest landmark in Khalifa City and your car details - or fill in the booking form on this page selecting Khalifa City, Abu Dhabi as your location. A team member confirms your booking within minutes and dispatches the nearest available technician to your exact Khalifa City villa or compound location immediately — any hour, any day. With 242 completed services across Khalifa City, our technicians know every compound entrance and residential street in the community."
    },
    {
        question: "Does 800BatteryPro cover all of Khalifa City including Al Forsan Village, Golf Gardens, and sectors near Yas Island?",
        answer: "Yes - 800BatteryPro covers every part of Khalifa City, Abu Dhabi including Al Forsan Village and Al Forsan International Sports Resort, Al Raha Gardens, Golf Gardens near Abu Dhabi Golf Club, Al Rayyana and BOUTIK Mall, Liwa Oasis, Etihad Plaza in Sector 45, Forsan Central Mall, Gardens Plaza on Hadaiq Al Raha Street, the original residential villa streets including Street 31, all gated compounds and single-standing villas across the community, and all sectors bordering Yas Island and Abu Dhabi International Airport. No villa, compound, or sector in Khalifa City is beyond our 25-minute response guarantee - 24 hours a day, 7 days a week, 365 days a year."
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
      title: " Car Battery Replacement in Khalifa City",
      hoverDec: "Dead car battery at your Khalifa City villa or compound? 800BatteryPro dispatches a technician directly to your exact location in under 25 minutes, 24/7 - whether you are in a private villa on Street 31, inside Al Forsan Village compound, at Al Raha Gardens, Golf Gardens, Al Rayyana, near Etihad Plaza in Sector 45, outside Forsan Central Mall, near Abu Dhabi Golf Club, or anywhere across Khalifa City's wide residential streets. We replace your battery on the spot using genuine OEM-approved branded batteries from Bosch, Varta, and ACDelco - with up to 18 months manufacturer warranty and zero hidden costs. All major car brands serviced including BMW, Mercedes, Toyota, Audi, Land Rover, Nissan, Lexus, Porsche and more.",
      img: service
    },
    {
      title: "Car Battery Boosting & Jump Start in Khalifa City",
      hoverDec: "Car won't start at your Khalifa City villa? Whether you are parked in your private villa garage on any of Khalifa City's residential streets, inside a gated compound at Al Forsan Village or Al Raha Gardens, near Al Forsan International Sports Resort, outside Forsan Central Mall or Gardens Plaza on Hadaiq Al Raha Street, or anywhere across Khalifa City's sprawling community - our mobile technicians provide 24/7 emergency jump start and battery boosting in under 25 minutes. Every jump start includes a free advanced battery health diagnostic - we tell you honestly if your battery needs a boost or a full replacement. No guesswork, no hidden charges. Call +971 52 847 5675 now.",
      img: service2
    },
    {
      title: " 24/7 Roadside Assistance in Khalifa City",
      hoverDec: "Stranded anywhere in Khalifa City, Abu Dhabi? 800BatteryPro's 24/7 roadside assistance covers every street, compound, and sector in Khalifa City including Street 31, Hadaiq Al Raha Street, the Abu Dhabi-Dubai highway (E11), Sheikh Mohammed Bin Zayed Road (E311), and all internal roads across Al Forsan Village, Golf Gardens, Al Raha Gardens, Al Rayyana, and Liwa Oasis. Whether your car battery is dead outside your villa, in a compound parking area, near Abu Dhabi Golf Club, or on the highway approaching Khalifa City - our nearest mobile technician reaches you in under 25 minutes, day or night. No towing needed, no garage visit required. We come to your exact location and fix it on the spot.",
      img: service1
    },
    {
      title: "  Car Scanning & Diagnostics in Khalifa City",
      hoverDec: "Dashboard warning light on at your Khalifa City villa? 800BatteryPro's mobile technicians perform advanced OBD-II car scanning and full diagnostics at your exact location anywhere in Khalifa City - no garage visit, no driving to a service centre needed. Whether you are at your villa on any residential street, inside Al Forsan Village, near BOUTIK Mall in Al Rayyana, or anywhere across Khalifa City's 600+ villas and compounds - we accurately identify fault codes, electrical faults, battery health issues, and ECU errors on the spot using professional diagnostic equipment. Accurate results in under 30 minutes, transparent pricing, zero hidden costs.",
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
    heading: "  Reliable Car Battery Services in Khalifa City, Abu Dhabi — Free Battery Testing & Zero Hidden Costs",
    description: "Khalifa City is Abu Dhabi's most established and beloved family suburb - a vast, peaceful residential community of 600 to 700 spacious villas, gated compounds, and apartment buildings stretching along the Abu Dhabi-Dubai highway, just 25 kilometres from Abu Dhabi city centre and only 10 to 15 minutes from Abu Dhabi International Airport. Home to thousands of families in 3 to 6-bedroom private villas with walled gardens, professionals commuting daily to Abu Dhabi city and Yas Island, Etihad Airways employees whose headquarters is a landmark visible from both sides of the highway, and residents of premier communities including Al Forsan Village, Al Raha Gardens, Golf Gardens, Al Rayyana, and Liwa Oasis - Khalifa City is defined by wide, tree-lined streets, complete privacy, and a strong community spirit.However, Khalifa City's suburban spread creates a unique and serious battery challenge: long daily commutes on Abu Dhabi-Dubai highway (E11) and Sheikh Mohammed Bin Zayed Road (E311) combined with Abu Dhabi's extreme summer heat regularly exceeding 45°C - and vehicles sitting in private villa garages and compound parking for extended periods - accelerate battery drain dramatically. A dead car battery in Khalifa City, far from the city centre, is a genuine emergency that demands the fastest possible on-location response.800BatteryPro covers every villa street, compound, and sector in Khalifa City - from Street 31 and the main residential arteries of Khalifa City A to Al Forsan Village and Al Forsan International Sports Resort, Abu Dhabi Golf Club, Golf Gardens, Al Raha Gardens, BOUTIK Mall in Al Rayyana, Etihad Plaza in Sector 45, Forsan Central Mall, and all roads connecting to Yas Island and Abu Dhabi International Airport. With 242 successful car battery replacements in Khalifa City - our fleet of 20+ fully equipped mobile vans reaches any Khalifa City villa or compound in under 25 minutes, 24 hours a day, 7 days a week. With 30+ experienced technicians, advanced battery diagnostic technology, genuine branded batteries from Bosch and Varta, and up to 18 months manufacturer warranty - one call to +971 52 847 5675 and our nearest technician is at your Khalifa City villa door in under 25 minutes - no towing, no garage visit, zero hidden costs.",
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
    headingPrefix: "About Our Khalifa City ",
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
title2: " Service in Khalifa City ",
    viewAll: "View All",
  }

        const whyChooseUsContent = locale === "en" 
        ? {
            desc: "Why Choose Us",
            titlePart1: "Why Khalifa  Drivers ",
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
            titlePart3: "in Khalifa City "
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

export default Khalifa