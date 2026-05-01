import React from 'react'
import About from '../../components/Hero/About'
// import Services from '../../components/Hero/Services'
import Banners from '../../components/Hero/Banners'
import CarBrands from '../../components/Hero/CarBrands'
import BatteryBrands from '../../components/Hero/BatteryBrands'
import RealExperience from '../../components/Hero/RealExperience'
import Trusted from '../../components/Hero/Trusted'
import Footer from '../../components/Footer'
import Review from '../../components/Hero/Review'
import HowItWorks from '../../components/Hero/HowItWorks'
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
  title: "Car Battery Replacement & Mobile Repair in Dubai | 800BatteryPro",
  description:
    "Expert mobile car battery replacement, 24/7 roadside assistance & car repair across all areas of Dubai. We come to you — book 800BatteryPro now.",
      keywords: "car battery replacement near me Dubai, car battery change Dubai, dead car battery Dubai, Free Car Battery, Expert Car Battery, car battery price Dubai, mobile battery replacement UAE, replace car battery Dubai, best car battery replacement UAE, battery change at home service Dubai",
      alternates: {
    canonical: "https://800batterypro.com/best-car-battery-replacement-dubai",
  },
};

const Dubai = () => {
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
      title2: " for All Car Brands in Dubai",
      viewAll: "View All",
    };

     const howItWorksContent = locale === "en" 
        ? {
            desc: "How it Works?",
            title: {
                part1: "How Our Car ",
                highlighted: "Battery Service ",
                part2: " Works in Dubai "
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
        span1: "Best Car Battery  ",
        span2: "Replacement in Dubai Under 25 Minutes"
    },
    desc1: "Branded Car Battery Replacement – 24/7 RSA Under 25 Minutes – Free Battery Testing Zero Cost",
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
        title: "Genuine Car Battery Replacement ",
        desc: "If you are stuck with a dead car battery or issues in your car electronic system. Don’t Panic !800BatteryPro provides you with 24/7 car battery replacement and free battery testing under 25 minutes, which comes along with expert car electronic system repairs in Dubai. "
    },
    {
        icons: <TiStarburst />,
        title: "Experienced Technicians & 6+ Years Of Experience",
        desc: "800BatteryPro has partnered with the best and trusted car service centers in Dubai. We have 25+ technicians with over 6+ years of experience working on premium car repairs delivering car jobs with 100% precision and customer satisfaction. Our team of technicians are all well-trained and certified by vendors to work on all major car brands."
    },
    {
        icons: <TiStarburst />,
        title: "OEM-Approved Spare Parts & Genuine Car Battery",
        desc: "Don’t worry 800BatteryPro only uses OEM-approved spare parts for your car. Our technicians only recommend branded car batteries for installation if needed after a free battery testing. "
    },
    {
        icons: <TiStarburst />,
        title: "No Hidden Cost & Free Battery Testing",
        desc: "Unlike other service providers, 800BatteryPro provides every customer with free battery testing services with no hidden costs. If you need a replacement, our technicians will use a branded car battery for replacement services anywhere in Dubai and Abu Dhabi. We provide top-tier car battery services with no hidden cost and free onsite delivery. 800Batterypro has partnered with a well-equipped service center with fully-equipped car workshops and a team of certified technicians who know how to get your car back on the road. You are offered with free battery testing anywhere in Dubai with no hidden costs."
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
        question: "Which one is the best car service center in Dubai?",
        answer: "800BatteryPro has partnered with the best car service centers in Dubai and Abu Dhabi. We have a team of 30+ certified technicians who are experienced to work on every major car maker including the American and European car brands."
    },
    {
        question: "Where do we provide services?",
        answer: "8000BatteryPro provides 24/7 roadside assistance, car battery replacement under 25 minutes, and advanced car programming services across both Dubai and Abu Dhabi. If you need instant services call us at +971528475675."
    },
    {
        question: "How much does it cost to do car battery replacement?",
        answer: "The range of car battery replacement really depends upon your car make and model. You can contact 800BatteryPro for market competitive pricing of the car battery replacement and other services. Our technicians only use genuine car batteries and OEM-approved spare parts for all our customers."
    },
    {
        question: "Where is our service centre in Dubai?",
        answer: "800BatteryPro has partnered with well-equipped and ideally located car service centres in Dubai. With our 20+ mobile vans and 50+ certified technicians, we deliver every car battery and advanced repair service with 100% customer satisfaction."
    },
    {
        question: "How much does a car battery replacement cost in Dubai?",
        answer: "Car battery replacement in Dubai typically depends on brand and model. 800BatteryPro offers competitive pricing with same-day mobile service — no garage visit needed."
    },
    {
        question: "How long does a car battery replacement take?",
        answer: "Most car battery replacements take 20–25 minutes. Our mobile technician arrives, fits the new battery and tests the system on-site — zero downtime for you."
    },
    {
        question: "Does 800BatteryPro come to my location in Dubai?",
        answer: "Yes — 800BatteryPro is a mobile service. We come to your home, office or roadside anywhere in Dubai & Abu Dhabi. No need to visit a garage."
    },
    {
        question: "Can a dead car battery be boosted instead of replaced?",
        answer: "Yes, if the battery is not damaged. A boost (jump-start) restores enough charge to start the engine. If the battery fails again quickly, replacement is needed."
    },
    {
        question: "What does roadside assistance include in Dubai?",
        answer: "800BatteryPro roadside assistance includes battery jump-start, tyre inflation, minor mechanical first-aid & on-site battery replacement — available 24/7 across Dubai & Abu Dhabi."
    },
    {
        question: "How fast does roadside assistance arrive in Dubai?",
        answer: "Our technicians typically arrive within 20–25 minutes across Dubai and Abu Dhabi, depending on traffic and your exact location."
    },
    {
        question: "How much does a car diagnostic scan cost in Dubai?",
        answer: "A basic OBD-II diagnostic scan in Dubai typically depends upon your car make and model. 800BatteryPro provides full mobile scanning at your location with a detailed fault report."
    },
    {
        question: "How do I know if my car's ECU is faulty?",
        answer: "Signs of a faulty ECU include: engine warning light, poor fuel economy, engine misfires, car not starting & erratic sensor readings. A diagnostic scan confirms ECU faults."
    },
    {
        question: "When does ADAS need to be recalibrated?",
        answer: "ADAS requires recalibration after windscreen replacement, wheel alignment, camera/sensor replacement, accident repair or if driver assistance warnings appear on the dashboard."
    },
    {
        question: "Why is my car AC blowing hot air in Dubai?",
        answer: "Common causes: low refrigerant, faulty compressor, clogged condenser or blower motor failure. In Dubai's heat, low gas is most frequent. Book a mobile AC check to diagnose."
    },
    {
        question: "How much does brake pad replacement cost in Dubai?",
        answer: "Brake pad replacement in Dubai ranges per axle, depends on the car brand and pad quality. Get our rapid 24/7 Mobile van service means no towing or garage visit required."
    },
    {
        question: "What type of battery does an Audi need?",
        answer: "Most modern Audis require AGM (Absorbent Glass Mat) batteries. Older models may use EFB. Always match the exact CCA & Ah rating specified in your Audi owner's manual."
    },
    {
        question: "Is 800BatteryPro available 24 hours in Dubai?",
        answer: "Yes — 800BatteryPro operates 24/7 across all Dubai districts for battery replacement, boosting & roadside assistance. Call or book online anytime."
    },
    {
        question: "Does 800BatteryPro serve Abu Dhabi?",
        answer: "Yes — we serve all Abu Dhabi areas including Khalifa City, Al Reem Island, Mussafah, Al Ain & the city centre. Mobile service — we come to you."
    },
    {
        question: "How does 800BatteryPro work?",
        answer: "Call or book online, tell us your location & car issue. A mobile technician comes to you — home, office or roadside — anywhere in Dubai or Abu Dhabi. No garage needed."
    },
    {
        question: "What areas does 800BatteryPro cover in UAE?",
        answer: "800BatteryPro currently covers all major areas of Dubai and Abu Dhabi (including Al Ain). See our locations page for a full district-by-district breakdown."
    },
    {
        question: "Can I get an oil change done at home in Dubai?",
        answer: "Yes — 800BatteryPro offers mobile oil & filter change at your home or office across Dubai & Abu Dhabi. Genuine & OEM oils available. Book online."
    },
    {
        question: "Can a lost car key be programmed in Dubai without going to a dealer?",
        answer: "Yes — 800BatteryPro offers mobile car key coding & programming for most brands, saving you dealer rates & towing costs. We come to your location in Dubai or Abu Dhabi."
    },
    {
        question: "Can a flood-damaged car be repaired in Dubai?",
        answer: "Yes, if caught early. Flood damage repair involves drying electrical components, ECU restoration & wiring inspection. Delay causes irreversible corrosion — act immediately."
    },
    {
        question: "Does BMW battery replacement require coding in Dubai?",
        answer: "Yes — most BMW models (F & G series onwards) require battery registration/coding after replacement so the car's BMS (Battery Management System) resets correctly."
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
      title: "Car Battery Replacement",
      hoverDec: "Dead car battery in Dubai or Abu Dhabi? 800BatteryPro dispatches a experienced technician to your location with a branded replacement battery — under 25 minutes, 24/7, no hidden costs.",
      img: service
    },
    {
      title: "Car Battery Boosting",
      hoverDec: "Car won't start? Our mobile technicians provide 24/7 jump start and battery boosting anywhere in Dubai & Abu Dhabi — under 25 minutes. Free battery test included after every boost.",
      img: service2
    },
    {
      title: "24/7 Roadside Assistance",
      hoverDec: "Stuck on the road in Dubai or Abu Dhabi? 800BatteryPro's fully equipped mobile vans and 30+ experienced technicians are available 24/7 for battery replacement, tyre help and roadside emergencies — anywhere, anytime.",
      img: service1
    },
    {
      title: "Car Scanning & Diagnostics",
      hoverDec: "Warning light on your dashboard? Our experienced technicians perform advanced OBD-II car scanning and diagnostics at your location across Dubai & Abu Dhabi. Fast, accurate fault detection with no garage visit needed.",
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
    heading: "Dubai's Most Trusted Car Battery Replacement Service",
    description: "Signs of a Weak Car Battery? Dim lights ? Car Not Starting? 800BatteryPro is just a call away with its fully equipped rapid response mobile van and a team of 30+ technicians. There is no need to panic as we offer 24/7 roadside assistance our technician will do free car battery testing and inspection for you, if its needed our experts will do a branded car battery replacement for you, or else if there is any flat tyre we will also fix it for you all Under 30 Minutes and no hidden cost! Sounds Amazing, Doesn't It? With over 6+ years delivering excellence in every premium car repair and car battery replacement job in Dubai. 800BatteryPro has over 10,000+ satisfied customers, our team of certified technicians always use OEM-approved spare parts and branded car batteries. We have partnered with a well-equipped workshop stacked with the latest technology and equipment for working on all major car brands. If you drive an old model or an exotic car, we have trained professionals who are certified to work on all American and European car brands in Dubai. Car brands we service include Audi, Alfa Romeo, Aston Martin, BMW, Lamborghini, Bentley, Bugatti, Ferrari, Jaguar, Land Rover, Mercedes, Chevrolet, Mini Cooper, Maybach, Pagani, Range Rover, Jeep, Rolls Royce, Brabus, Mansory, Lexus, Nissan and Volkswagen.",
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
    headingPrefix: "About Our Dubai  ",
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
    title1: "Car Battery Services ",
    title2: "in Dubai",
    viewAll: "View All",
  }

        const whyChooseUsContent = locale === "en" 
        ? {
            desc: "Why Choose Us",
            titlePart1: "Why Dubai Drivers ",
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
            titlePart3: "in Dubai "
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

export default Dubai