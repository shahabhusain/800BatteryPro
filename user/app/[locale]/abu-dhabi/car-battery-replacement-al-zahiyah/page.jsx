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

const AlZayah = () => {
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
      title2: " for All Car Brands in Al Zahiyah",
      viewAll: "View All",
    };

     const howItWorksContent = locale === "en" 
        ? {
            desc: "How it Works?",
            title: {
                part1: "How Our Car ",
                highlighted: "Battery Service ",
                part2: " Works in Al Zahiyah "
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
        span1: "Car Battery Replacement in Al Zahiyah,",
        span2: " Abu Dhabi Under 25 Minutes"
    },
    desc1: "Starting From AED 299 — Up to 18 Months Warranty — 24/7 RSA — Reaching Every Tower in Al Zahiyah Under 25 Minutes",
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
        title: "Battery Replacements in Al Zahiyah Under 25 Minutes",
        desc: "Abu Dhabi's most experienced mobile battery service in the Tourist Club Area district. Reaching every tower and hotel in Al Zahiyah from Corniche Road East to Al Falah Street faster than any competitor Under 25 Minutes."
    },
    {
        icons: <TiStarburst />,
        title: " AED 299 Starting Price Up to 18 Months Warranty",
        desc: "Transparent pricing, zero hidden costs, told upfront before work begins. The strongest battery replacement warranty from any mobile service in Abu Dhabi's downtown"
    },
    {
        icons: <TiStarburst />,
        title: "Genuine Batteries Only Free Battery Testing",
        desc: "Bosch, Varta, ACDelco and other OEM-approved brands — never counterfeit. Advanced OBD-II diagnostic included with every service call at no extra charge. All Car Brands Covered - BMW, Mercedes, Toyota, Audi, Land Rover, Nissan and every brand driven in Al Zahiyah"
    },
    {
        icons: <TiStarburst />,
        title: " 10,000+ UAE Customers Served 24/7",
        desc: "Abu Dhabi's most trusted mobile battery service. No extra charge for nights, weekends or UAE public holidays anywhere in Al Zahiyah. Downtown Abu Dhabi Location - 10 minutes from Abu Dhabi Corniche, 30 minutes from Abu Dhabi International Airport"
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
        question: "How quickly can 800BatteryPro reach me in Al Zahiyah, Abu Dhabi?",
        answer: "800BatteryPro reaches any tower, hotel, or location in Al Zahiyah (Tourist Club Area), Abu Dhabi in under 25 minutes — guaranteed. Our fleet of 20+ mobile vans are strategically positioned across Abu Dhabi Island, enabling rapid response to every part of Al Zahiyah from the towers on Corniche Road East and Al Falah Street to the hotels near Beach Rotana, Abu Dhabi Mall, Al Zahiyah Shopping Centre, and all surrounding streets. Service operates 24 hours a day, 7 days a week with no additional charges for nighttime, weekend, or UAE public holiday callouts."
    },
    {
        question: "How much does car battery replacement cost in Al Zahiyah, Abu Dhabi?",
        answer: "Car battery replacement in Al Zahiyah starts from AED 299 at 800BatteryPro. The exact price depends on your car make, model, and the specific battery brand required. Every price is communicated clearly and upfront before any work begins - with absolutely zero hidden costs. Included at no extra charge with every Al Zahiyah service call: free battery health testing using advanced OBD-II diagnostic equipment, professional on-site installation at your exact location, and up to 18 months manufacturer warranty. With 281 completed services in Al Zahiyah, our technicians know this district thoroughly and arrive fully prepared for every job."
    },
    {
        question: "Does 800BatteryPro come to my tower or hotel in Al Zahiyah?",
        answer: "Yes - 800BatteryPro comes directly to your exact location anywhere in Al Zahiyah, Abu Dhabi - whether you are in a residential tower on Al Falah Street or Corniche Road East, at Beach Rotana Abu Dhabi on Al Zahiyah Street, at Traders Hotel, at Novotel Abu Dhabi Gate, in the parking structure of Abu Dhabi Mall, at Al Zahiyah Shopping Centre, or anywhere else across this downtown district. There is no need to arrange a tow truck or drive to a garage. Our technician brings all tools and the replacement battery directly to your vehicle and completes the full job on the spot in under 25 minutes."
    },
    {
        question: "What is Al Zahiyah also known as and does 800BatteryPro serve the whole area?",
        answer: "Al Zahiyah is the official name given in 2014 to the area previously known as Tourist Club Area (TCA) - one of Abu Dhabi's most central and established downtown districts. 800BatteryPro serves the entire Al Zahiyah district including all residential towers, commercial buildings, hotels, and parking structures across the area bounded by Corniche Road East to the north, Al Falah Street to the south, Al Mina Street to the east, and all roads connecting to Al Bateen, Al Reem Island, and Al Maryah Island - 24/7 with a guaranteed under 25-minute response to any location."
    },
    {
        question: "Is 800BatteryPro available 24/7 in Al Zahiyah including nights and weekends?",
        answer: "Yes - 800BatteryPro operates 24 hours a day, 7 days a week across all of Al Zahiyah with no exceptions. Al Zahiyah's round-the-clock activity - from early morning commuters to late-night hotel guests and Abu Dhabi Mall visitors — means battery emergencies happen at all hours. Whether your car battery dies at midnight outside Beach Rotana, early Friday morning near Abu Dhabi Mall, during a UAE public holiday on Corniche Road East, or at any other time - our nearest technician reaches you in under 25 minutes with absolutely no additional charges for off-peak callouts."
    },
    {
        question: "Which car brands does 800BatteryPro service in Al Zahiyah?",
        answer: "800BatteryPro services every car brand driven by Al Zahiyah residents, professionals, and hotel guests including BMW, Mercedes-Benz, Toyota, Audi, Land Rover, Range Rover, Nissan, Lexus, Chevrolet, Jeep, Volkswagen, Mini Cooper, Jaguar, Rolls Royce, Bentley, Mitsubishi, Hyundai, Kia, Honda, Ford, and all other car brands available in the UAE. Al Zahiyah's cosmopolitan community of Abu Dhabi locals, Arab expats, and international professionals drives a wide range of vehicles - from everyday Japanese and Korean cars to European luxury vehicles. Our technicians carry the right batteries for every make and model."
    },
    {
        question: "My car battery died near Abu Dhabi Mall or Corniche Road East in Al Zahiyah — can you help?",
        answer: "Yes - 800BatteryPro provides emergency car battery replacement and roadside assistance across all of Al Zahiyah's main streets and landmarks including Abu Dhabi Mall, Corniche Road East, Al Falah Street, Tourist Club Road, Al Zahiyah Street near Beach Rotana, Al Reem Street, and all connecting roads to Al Mina, Al Bateen, and Al Reem Island. If your battery dies anywhere in Al Zahiyah call +971 52 847 5675 immediately, share your location or nearest landmark, and our mobile technician will reach you in under 25 minutes — day or night, any day of the week, with no extra charge for emergency callouts anywhere in the district."
    },
    {
        question: "Does 800BatteryPro offer free battery testing in Al Zahiyah?",
        answer: "Yes - every service call in Al Zahiyah includes a free comprehensive battery health test using advanced OBD-II diagnostic equipment. Al Zahiyah's basement car parks across its high-rise towers and hotel parking structures - where vehicles sit stationary in Abu Dhabi's intense heat for extended periods - accelerate battery degradation significantly. Our technicians test your battery's voltage, cold cranking amps, state of health, and alternator charging output at your exact Al Zahiyah location.Having completed 281 battery services in Al Zahiyah, we know this district's parking conditions and battery challenges better than any other service in Abu Dhabi."
    },
    {
        question: "How do I book a car battery replacement in Al Zahiyah, Abu Dhabi?",
        answer: "Booking car battery replacement in Al Zahiyah with 800BatteryPro takes under one minute. Call or WhatsApp +971 52 847 5675 with your tower name, hotel name, or nearest landmark in Al Zahiyah and your car details - or fill in the booking form on this page by selecting Al Zahiyah, Abu Dhabi as your location. A team member confirms your booking within minutes and dispatches the nearest available technician to your exact Al Zahiyah location immediately - any hour, any day. With 281 completed services in Al Zahiyah, our technicians know every parking structure and street in this district."
    },
    {
        question: "Does 800BatteryPro cover all of Al Zahiyah including hotels near Beach Rotana and towers near Al Reem Island?",
        answer: "Yes — 800BatteryPro covers every part of Al Zahiyah, Abu Dhabi including the hotel strip near Beach Rotana Abu Dhabi on Al Zahiyah Street, Traders Hotel, Novotel Abu Dhabi Gate, all residential towers on Corniche Road East and Al Falah Street, Abu Dhabi Mall and its surrounding parking structures, Al Zahiyah Shopping Centre with its 16 stores, towers near the border with Al Reem Island to the north, buildings adjacent to Al Maryah Island and Al Mina, and every other residential and commercial tower across this 2014-renamed downtown district — 24/7 with a guaranteed under 25-minute response to any location in Al Zahiyah."
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
      title: " Car Battery Replacement in Al Zahiyah",
      hoverDec: "Dead car battery anywhere in Al Zahiyah, Abu Dhabi? 800BatteryPro dispatches a technician directly to your exact location in under 25 minutes, 24/7 — whether you are in a tower basement near Abu Dhabi Mall, outside Beach Rotana Abu Dhabi on Al Zahiyah Street, in the hotel parking of Traders Hotel, parked on Corniche Road East or Al Falah Street, near Al Zahiyah Shopping Centre, or anywhere across this vibrant downtown district. We replace your battery on the spot using genuine OEM-approved branded batteries from Bosch, Varta, and ACDelco - with up to 18 months manufacturer warranty and zero hidden costs. All major car brands serviced including BMW, Mercedes, Toyota, Audi, Land Rover, Nissan, Lexus and more.",
      img: service
    },
    {
      title: "Car Battery Boosting & Jump Start in Al Zahiyah",
      hoverDec: "Car won't start in Al Zahiyah, Abu Dhabi? Whether you are in the basement parking of a tower on Al Falah Street, outside Abu Dhabi Mall, in the valet parking area of Beach Rotana, near Al Ittihad Square on the way to the Corniche, or anywhere across Al Zahiyah's busy downtown streets - our mobile technicians provide 24/7 emergency jump start and battery boosting in under 25 minutes. Every jump start includes a free advanced battery health diagnostic - we tell you honestly if your battery needs a boost or a full replacement. No guesswork, no hidden charges. Call +971 52 847 5675 now.",
      img: service2
    },
    {
      title: " 24/7 Roadside Assistance in Al Zahiyah",
      hoverDec: "Stranded anywhere in Al Zahiyah, Abu Dhabi? 800BatteryPro's 24/7 roadside assistance covers every street in Al Zahiyah including Corniche Road East, Al Falah Street, Tourist Club Road, Al Reem Street, Al Zahiyah Street, and all connecting roads to Al Mina, Al Reem Island, and Al Maryah Island. Whether your car battery is dead outside your tower, in a hotel parking structure, near Abu Dhabi Mall, or on any of Al Zahiyah's main arteries - our nearest mobile technician reaches you in under 25 minutes, day or night. No towing needed, no garage visit required. We fix it on the spot and get you back on the road fast.",
      img: service1
    },
    {
      title: " Car Scanning & Diagnostics in Al Zahiyah",
      hoverDec: "Dashboard warning light on in Al Zahiyah, Abu Dhabi? 800BatteryPro's mobile technicians perform advanced OBD-II car scanning and full diagnostics at your exact location anywhere in Al Zahiyah - no garage visit needed. Whether you are parked near Abu Dhabi Mall, outside Beach Rotana, near Al Zahiyah Shopping Centre on Corniche Road East, or anywhere across this downtown district - we accurately identify fault codes, electrical faults, battery health issues, and ECU errors on the spot. Accurate results in under 30 minutes, transparent pricing, zero hidden costs.",
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
    heading: " Reliable Car Battery Services in Al Zahiyah, Abu Dhabi — Free Battery Testing & Zero Hidden Costs",
    description: "Al Zahiyah - meaning the colorful and bright in Arabic - is one of Abu Dhabi's most established and vibrant downtown districts, formerly known as Tourist Club Area (TCA) and officially renamed by Abu Dhabi Municipality in 2014 as part of the capital's modernization initiative. Strategically located at the junction of Corniche Road East and Al Falah Street on the eastern side of Abu Dhabi Island - Al Zahiyah sits at the absolute heart of the capital's downtown, just 10 minutes from Abu Dhabi Corniche and 30 minutes from Abu Dhabi International Airport. Home to thousands of residents in high-rise towers, professionals working in the district's commercial buildings, and guests at landmark hotels including Beach Rotana Abu Dhabi, Traders Hotel, Centro Yas Island, and Novotel Abu Dhabi Gate - and with Abu Dhabi Mall, one of the capital's premier shopping destinations with over 200 shops, located in the heart of the district - Al Zahiyah never stops moving. With heavy traffic on Corniche Road East, Al Falah Street, and Tourist Club Road, and Abu Dhabi's extreme summer heat regularly exceeding 45°C accelerating battery drain on vehicles parked in tower basements and hotel parking structures - a dead car battery in Al Zahiyah is one of the most urgent roadside emergencies in Abu Dhabi's downtown. 800BatteryPro covers every tower, hotel, and street in Al Zahiyah - from the high-rise residential blocks on Corniche Road East and Al Falah Street to the towers surrounding Abu Dhabi Mall, Al Zahiyah Shopping Centre, and all streets connecting to Al Mina, Al Bateen, Al Reem Island, and Al Maryah Island. With 281 successful car battery replacements in Al Zahiyah alone - our fleet of 20+ fully equipped mobile vans reaches any Al Zahiyah location in under 25 minutes, 24 hours a day, 7 days a week. With 30+ experienced technicians, advanced battery diagnostic technology, genuine branded batteries from Bosch and Varta, and up to 18 months manufacturer warranty - one call to +971 52 847 5675 and our nearest technician is on his way to your exact Al Zahiyah location in under 25 minutes - no towing, no garage visit, zero hidden costs.",
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
    headingPrefix: "About Our Al Zahiyah",
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
title2: " Service in Al Zahiyah",
    viewAll: "View All",
  }

        const whyChooseUsContent = locale === "en" 
        ? {
            desc: "Why Choose Us",
            titlePart1: "Why Al Zahiyah Drivers ",
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
            titlePart3: "in Al Zahiyah "
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

export default AlZayah