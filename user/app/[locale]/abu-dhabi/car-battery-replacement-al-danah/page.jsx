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
import service from '@/public/locations/aldahna/1.webp'
import service1 from '@/public/locations/aldahna/2.webp'
import service2 from '@/public/locations/aldahna/3.webp'
import service3 from '@/public/locations/aldahna/4.webp'
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

const Danah = () => {
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
      title2: " for All Car Brands in Al Danah",
      viewAll: "View All",
    };

     const howItWorksContent = locale === "en" 
        ? {
            desc: "How it Works?",
            title: {
                part1: "How Our Car ",
                highlighted: "Battery Service ",
                part2: " Works in Al Danah "
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
    desc: "Corniche Road to Electra Street Covered – 24/7 Emergency Support",
    title: {
        span1: " Car Battery Replacement in Al Danah, ",
        span2: "Abu Dhabi Under 25 Minutes"
    },
    desc1: "Starting From AED 299 — Up to 18 Months Warranty — 24/7 RSA — Reaching Every Street in Al Danah Under 25 Minutes",
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
        title: "381 Successful Battery Replacements in Al Danah",
        desc: "Abu Dhabi's most experienced mobile battery service in Al Danah's central district all under 25 Minutes average response time. Reaching every street from Corniche Road to Electra Street faster than any competitor"
    },
    {
        icons: <TiStarburst />,
        title: "AED 299 Starting Price & Up to 18 Months Warranty",
        desc: "Transparent pricing, zero hidden costs, told upfront before work begins. The strongest battery replacement warranty from any mobile service in Abu Dhabi. MW, Mercedes, Toyota, Audi, Land Rover, Nissan, Lexus and every other brand driven in Al Danah"
    },
    {
        icons: <TiStarburst />,
        title: "Genuine Batteries Only With Free Battery Testing",
        desc: "Bosch, Varta, ACDelco and other OEM-approved brands — never counterfeit. Advanced OBD-II diagnostic included with every service call at no extra charge"
    },
    {
        icons: <TiStarburst />,
        title: "10,000+ UAE Customers Served & 20+ Mobile Vans",
        desc: "Abu Dhabi's most trusted mobile battery service. Positioned across Abu Dhabi Island for fastest Al Danah response. No extra charge for nights, weekends or UAE public holidays anywhere in Al Danah"
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
        question: "How quickly can 800BatteryPro reach me in Al Danah, Abu Dhabi?",
        answer: "800BatteryPro reaches any street in Al Danah, Abu Dhabi in under 25 minutes — guaranteed. Our fleet of 20+ mobile vans are strategically positioned across Abu Dhabi Island, enabling rapid response to every part of Al Danah from Corniche Road in the north to Al Muroor Street in the south, and from Hazza Bin Zayed The First Street in the east to Sheikh Zayed Bin Sultan Street (E10) in the west. Our service operates 24 hours a day, 7 days a week with no additional charges for nighttime, weekend, or UAE public holiday callouts."
    },
    {
        question: "How much does car battery replacement cost in Al Danah, Abu Dhabi?",
        answer: "Car battery replacement in Al Danah, Abu Dhabi starts from AED 299 at 800BatteryPro. The exact price depends on your car make, model, and the specific battery brand required. Every price is communicated clearly and upfront before any work begins — with absolutely zero hidden costs. Included at no extra charge with every Al Danah service call: free battery health testing using advanced OBD-II diagnostic equipment, professional on-site installation, and up to 18 months manufacturer warranty on every battery replaced."
    },
    {
        question: "Does 800BatteryPro come to my apartment or hotel in Al Danah?",
        answer: "Yes — 800BatteryPro comes directly to your exact location anywhere in Al Danah, Abu Dhabi — whether you are at your apartment building, in a hotel parking structure at Millennium Downtown Abu Dhabi, Royal Rose Abu Dhabi, Copthorne Downtown Abu Dhabi, or Al Ain Palace Hotel on Corniche Street, in a basement parking near Madinat Zayed Shopping Centre, or parked on any Al Danah street. There is absolutely no need to arrange a tow truck or drive to a garage. Our technician brings everything needed to your exact location and completes the full job on the spot in under 25 minutes."
    },
    {
        question: "Which car battery brands does 800BatteryPro install in Al Danah?",
        answer: "800BatteryPro installs only genuine OEM-approved branded car batteries in Al Danah including Bosch, Varta, ACDelco, and other leading manufacturers trusted by UAE car owners. We never install counterfeit, substandard, or grey market batteries. Every battery installed in Al Danah comes with up to 18 months manufacturer warranty — the strongest battery warranty available from any mobile service in Abu Dhabi's central district."
    },
    {
        question: "Is 800BatteryPro available 24/7 in Al Danah including nights and weekends?",
        answer: "Yes — 800BatteryPro operates 24 hours a day, 7 days a week across all of Al Danah with no exceptions. Whether your car battery dies at midnight in a basement parking on Electra Street, early Friday morning near Madinat Zayed Shopping Centre, during a UAE public holiday near the Corniche, or at any other time — our nearest technician reaches you in under 25 minutes. There are absolutely no additional charges for nighttime, weekend, or public holiday callouts anywhere in Al Danah."
    },
    {
        question: "Which car brands does 800BatteryPro service in Al Danah?",
        answer: "800BatteryPro services every car brand driven by Al Danah residents and professionals including BMW, Mercedes-Benz, Toyota, Audi, Land Rover, Range Rover, Nissan, Lexus, Chevrolet, Jeep, Volkswagen, Mini Cooper, Jaguar, Rolls Royce, Bentley, Mitsubishi, Hyundai, Kia, Honda, Ford, and all other car brands available in the UAE. Al Danah's diverse community of locals, Arab expats, and international professionals drives a wide range of vehicles — our technicians are fully equipped to handle every make and model."
    },
    {
        question: "My car battery died near Abu Dhabi Corniche or Electra Street — can you help?",
        answer: "Yes — 800BatteryPro provides emergency car battery replacement and roadside assistance across all of Al Danah's main streets including Abu Dhabi Corniche Road, Electra Street, Hamdan Street, Sheikh Zayed The First Street, Al Falah Street, and Sheikh Rashid Bin Saeed Street. If your battery dies anywhere in Al Danah call +971 52 847 5675 immediately, share your location or nearest landmark, and our mobile technician will reach you in under 25 minutes — day or night, any day of the week, with no extra charge for emergency callouts."
    },
    {
        question: "Does 800BatteryPro offer free battery testing in Al Danah?",
        answer: "Yes — every service call in Al Danah includes a free comprehensive battery health test using advanced OBD-II diagnostic equipment. Our technicians test your battery's voltage, cold cranking amps, state of health, and alternator charging output at your exact Al Danah location — giving you a complete picture of your car's electrical system before any work begins. If your battery can be safely boosted rather than replaced, we will always tell you honestly. 800BatteryPro has completed 381 battery services in Al Danah and never recommends an unnecessary replacement."
    },
    {
        question: "How do I book a car battery replacement in Al Danah, Abu Dhabi?",
        answer: "Booking car battery replacement in Al Danah with 800BatteryPro takes under one minute. Call or WhatsApp +971 52 847 5675 with your street name or nearest landmark in Al Danah and your car details — or fill in the booking form on this page by selecting Al Danah as your location. A team member confirms your booking within minutes and dispatches the nearest available technician to your exact Al Danah location immediately. With 381 completed services in Al Danah, our technicians know every street and parking structure in the district."
    },
    {
        question: "Does 800BatteryPro cover all of Al Danah including areas near Madinat Zayed Shopping Centre and Abu Dhabi Mall?",
        answer: "Yes — 800BatteryPro covers every part of Al Danah, Abu Dhabi including the areas near Madinat Zayed Shopping Centre on Sultan Bin Zayed Street, Abu Dhabi Mall near Beach Rotana, all residential blocks on Electra Street and Hamdan Street, hotel areas on Corniche Road, the commercial district near LLH Hospital and NMC Speciality Hospital, GEMS Winchester School on Sheikh Zayed Bin Sultan Street, and all streets between Al Muroor Street and the Corniche. No location in Al Danah is beyond our 25-minute response guarantee — 24 hours a day, 7 days a week, 365 days a year."
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
      title: " Car Battery Replacement in Al Danah",
      hoverDec: "Dead car battery anywhere in Al Danah, Abu Dhabi? 800BatteryPro dispatches a technician directly to your exact location in under 25 minutes, 24/7 — whether you are parked on Electra Street, near Madinat Zayed Shopping Centre, outside Millennium Downtown Abu Dhabi, near LLH Hospital, or anywhere across Al Danah's residential and commercial blocks. We replace your battery on the spot using genuine OEM-approved branded batteries from Bosch, Varta, and ACDelco — with up to 18 months manufacturer warranty and zero hidden costs. All major car brands serviced including BMW, Mercedes, Toyota, Audi, Land Rover, Nissan, Lexus and more. ",
      img: service
    },
    {
      title: " Car Battery Boosting & Jump Start in Al Danah",
      hoverDec: "Car won't start in Al Danah, Abu Dhabi? Whether you are parked in one of Al Danah's basement car parks, on Sheikh Zayed The First Street, near Abu Dhabi Mall, outside Copthorne Downtown Abu Dhabi, or anywhere along the Corniche Road — our mobile technicians provide 24/7 emergency jump start and battery boosting across all of Al Danah in under 25 minutes. Every jump start includes a free advanced battery health diagnostic using professional equipment — we tell you honestly if your battery needs a boost or a full replacement. No guesswork, no hidden charges. Call +971 52 847 5675.",
      img: service2
    },
    {
      title: " 24/7 Roadside Assistance in Al Danah",
      hoverDec: "Stranded anywhere in Al Danah, Abu Dhabi? 800BatteryPro's 24/7 roadside assistance covers every street in Al Danah including Corniche Road, Electra Street, Hamdan Street, Sheikh Zayed The First Street, Al Falah Street, and Sheikh Rashid Bin Saeed Street. Whether your car battery is dead outside your apartment, in a hotel parking structure, near Madinat Zayed Shopping Centre, or anywhere across Al Danah — our nearest mobile technician reaches you in under 25 minutes, day or night. No towing needed, no garage visit required. We fix it on the spot and get you back on the road fast.",
      img: service1
    },
    {
      title: " Car Scanning & Diagnostics in Al Danah",
      hoverDec: "Dashboard warning light on in Al Danah, Abu Dhabi? 800BatteryPro's mobile technicians perform advanced OBD-II car scanning and full diagnostics at your exact location anywhere in Al Danah — no garage visit needed. We accurately identify fault codes, electrical faults, battery health issues, and ECU errors on the spot using professional diagnostic equipment. Trusted by hundreds of Al Danah residents and professionals — accurate results in under 30 minutes, transparent pricing, zero hidden costs guaranteed.",
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
    heading: "Reliable Car Battery Services in Al Danah, Abu Dhabi — Free Battery Testing & Zero Hidden Costs",
    description: "Al Danah — known in Arabic as The Pearl — is one of Abu Dhabi's most prestigious and centrally located districts, formerly known as Madinat Zayed and officially renamed by Abu Dhabi Municipality in February 2014. Situated in the very heart of Abu Dhabi Island and bordered by the iconic Abu Dhabi Corniche to the north, Al Muroor Street to the south, Hazza Bin Zayed The First Streetto the east, and Sheikh Zayed Bin Sultan Street (E10) to the west — Al Danah is one of the emirate's most densely populated and traffic-heavy districts. Home to thousands of residents in mid-rise apartment buildings, professionals commuting daily along Electra Street and Sheikh Zayed The First Street, and visitors staying in landmark hotels including Millennium Downtown Abu Dhabi and Royal Rose Abu Dhabi — a dead car battery in Al Danah is a daily emergency that demands the fastest possible response.800BatteryPro covers every street in Al Danah — from Corniche Road and Electra Street to the residential blocks near Madinat Zayed Shopping Centre, LLH Hospital, NMC Speciality Hospital on Electra Street, and GEMS Winchester School. With 381 successful car battery replacements in Al Danah alone — more than any other mobile battery service in Abu Dhabi's central district — our fleet of 20+ fully equipped mobile vans reaches any Al Danah location in under 25 minutes, 24 hours a day, 7 days a week. Our technicians know every street in Al Danah — from Corniche Road's hotel strip and the residential blocks near Madinat Zayed Shopping Centre to the commercial areas near LLH Hospital on Electra Street, NMC Speciality Hospital, and GEMS Winchester School on Sheikh Zayed Bin Sultan Street. With 30+ experienced technicians, advanced battery diagnostic technology, genuine branded batteries from Bosch and Varta, and up to 18 months manufacturer warranty — one call to +971 52 847 5675 and our nearest technician is on his way to your exact Al Danah Street in under 25 minutes — no towing, no garage visit, zero hidden costs. ",
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
    headingPrefix: "About Our Al Danah",
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
title2: " Service in Al Danah",
    viewAll: "View All",
  }

        const whyChooseUsContent = locale === "en" 
        ? {
            desc: "Why Choose Us",
            titlePart1: "Why Al Danah Drivers ",
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
            titlePart3: "in Al Danah "
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

export default Danah