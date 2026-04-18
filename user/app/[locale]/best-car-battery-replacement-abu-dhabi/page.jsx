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
import AboutContent from '@/app/components/About/AboutContent'

export const metadata = {
  title: "Car Battery Replacement & Mobile Repair in Abu Dhabi | 800BatteryPro",
  description:
    "Expert mobile battery, 24/7 RSA, & car repair across Abu Dhabi city, Khalifa City, Al Ain & surrounds. Doorstep service — book now.",
      keywords: "mobile mechanic Abu Dhabi, car repair at home Abu Dhabi, roadside assistance Abu Dhabi,  car battery replacement near me Abu Dhabi, car battery change Abu Dhabi, dead car battery Abu Dhabi, car battery price Abu Dhabi,  Free Car Battery, Expert Car Battery, mobile battery replacement UAE, replace car battery Abu Dhabi, best car battery replacement UAE, battery change at home service Abu Dhabi",
      alternates: {
    canonical: "https://800batterypro.com/best-car-battery-replacement-abu-dhabi",
  },
};

const AbuDhabi = () => {
    const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "800BatteryPro – Trusted Car Service  ",
        span2: "Center in Abu Dhabi"
    },
    desc1: "Genuine Car Battery Replacement – 24/7 RSA – OEM-Approved Spare Parts",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ على مدار الساعة أينما كنت!",
    title: {
        span1: "800BatteryPro – مركز خدمة سيارات موثوق",
        span2: "في أبو ظبي"
    },
    desc1: "استبدال بطارية سيارة أصلية – خدمة طرق على مدار الساعة – قطع غيار معتمدة من الشركة المصنعة",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: "Genuine Car Battery Replacement ",
        desc: "Don’t panic if you are stranded somewhere with a dead car battery anywhere in Abu Dhabi, 800BatteryPro is just a call away. You can call us at 24/7 for our fast roadside assistance which includes genuine car battery replacement, flat tyre replacement, fuel delivery and car recovery services. Our technicians also provide you with a free car battery testing which ensures our professionalism and transparency towards our loyal customers."
    },
    {
        icons: <FaSitemap />,
        title: "Certified Technicians & 10+ Years Of Experience",
        desc: " 800BatteryPro has a team of over 50+ certified technicians who are capable of working on any of the major car brands in the world. With over 10 years of experience and availability of the latest technology in our garage, we offer premium car battery replacement and advanced repair solutions in Abu Dhabi."
    },
    {
        icons: <FaSitemap />,
        title: "OEM-Approved Spare Parts & Genuine Car Battery",
        desc: "Our european and italian car specialists at 800BatteryPro only use the OEM-approved spare parts for every car minor and major car jobs in Abu Dhabi. And It doesn’t stop there as our technicians only recommend the genuine car battery for installation only if need after a free car battery testing. "
    },
    {
        icons: <FaSitemap />,
        title: "No Hidden Cost & Free Battery Testing",
        desc: "800BatteryPro offers free battery testing, with branded car battery replacement with no hidden cost and market competitive pricings. Our technicians are trained to work on major European and American car brands, ensuring you get 100 % satisfaction for every car job done at 800BatteryPro. We have a well-equipped service center in Abu Dhabi with the availability of the latest technology and equipment, we ensure to deliver every car battery replacement under 25 minutes anywhere in the Emirates.  "
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "استبدال بطارية سيارة أصلية",
        desc: "لا داعي للذعر إذا تعطلت سيارتك بسبب نفاد البطارية في أي مكان في أبو ظبي، فمركز 800BatteryPro على بعد مكالمة واحدة فقط. يمكنك الاتصال بنا على مدار الساعة للحصول على مساعدة سريعة على الطريق تشمل استبدال البطارية الأصلية، وتغيير الإطار المثقوب، وتوصيل الوقود، وخدمات إنقاذ السيارة. كما يقدم فنيونا فحصًا مجانيًا للبطارية، مما يضمن احترافيتنا وشفافيتنا تجاه عملائنا المخلصين."
    },
    {
        icons: <FaSitemap />,
        title: "فنيون معتمدون وأكثر من 10 سنوات من الخبرة",
        desc: "يضم 800BatteryPro فريقًا يضم أكثر من 50 فنيًا معتمدًا قادرين على العمل على أي من ماركات السيارات الكبرى في العالم. بفضل أكثر من 10 سنوات من الخبرة وتوفر أحدث التقنيات في مركزنا، نقدم استبدال البطاريات الفاخرة وحلول الإصلاح المتقدمة في أبو ظبي."
    },
    {
        icons: <FaSitemap />,
        title: "قطع غيار معتمدة من OEM وبطارية سيارة أصلية",
        desc: "يستخدم خبراؤنا في السيارات الأوروبية والإيطالية في 800BatteryPro قطع الغيار المعتمدة من الشركة المصنعة الأصلية (OEM) لجميع أعمال السيارات الصغيرة والكبيرة في أبو ظبي. ولا يتوقف الأمر عند هذا الحد، حيث يوصي فنيونا بتركيب بطارية السيارة الأصلية فقط إذا لزم الأمر بعد إجراء فحص مجاني للبطارية."
    },
    {
        icons: <FaSitemap />,
        title: "بدون تكاليف خفية وفحص بطارية مجاني",
        desc: "يقدم 800BatteryPro فحصًا مجانيًا للبطارية، مع استبدال بطارية بعلامات تجارية وبدون تكاليف خفية وبأسعار تنافسية في السوق. فنيونا مدربون على العمل مع الماركات الأوروبية والأمريكية الكبرى، مما يضمن لك رضا بنسبة 100% عن كل مهمة سيارة تتم في 800BatteryPro. لدينا مركز خدمة مجهز تجهيزًا جيدًا في أبو ظبي بأحدث التقنيات والمعدات، ونضمن توصيل كل بطارية سيارة يتم استبدالها في أقل من 25 دقيقة في أي مكان في الإمارات."
    }
]

const englishFaqs = [
    {
        question: "How much does a car battery replacement cost in Dubai?",
        answer: "Car battery replacement in Dubai typically costs AED 250–600 depending on brand and model. 800BatteryPro offers competitive pricing with same-day mobile service — no garage visit needed."
    },
    {
        question: "How long does a car battery replacement take?",
        answer: "Most car battery replacements take 20–45 minutes. Our mobile technician arrives, fits the new battery and tests the system on-site — zero downtime for you."
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
        answer: "Our technicians typically arrive within 30–90 minutes across Dubai and Abu Dhabi, depending on traffic and your exact location."
    },
    {
        question: "How much does a car diagnostic scan cost in Dubai?",
        answer: "A basic OBD-II diagnostic scan in Dubai typically costs AED 100–300. 800BatteryPro provides full mobile scanning at your location with a detailed fault report."
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
        answer: "Brake pad replacement in Dubai ranges AED 200–600 per axle, depending on the car brand and pad quality. Mobile service means no towing or garage visit required."
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
    }
]

  const hero = locale === "en" ? heroEnglishContent : heroArabicContent
        const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
       const faqs = locale === "ar" ? arabicFaqs : englishFaqs
  return (
    <div>

      <div className='sticky top-0'>
        <Hero hero={hero} herobg={herobg} />
      </div>

      <Review /> {/* move it here */}

      <div className='bg-white pb-12 rounded-t-4xl relative z-10'>
         <AboutContent />
        <Services /> 
        <Banners />
        <HowItWorks />
      </div>

      <RealExperience />

      <div className='bg-white  rounded-t-4xl relative z-10'>
        <CarBrands />
        <BatteryBrands />
  
        <WhyChooseUs data={data} />
           <Trusted />
           <Faq faqs={faqs} />
        <Footer />
      </div>

    </div>
  )
}

export default AbuDhabi