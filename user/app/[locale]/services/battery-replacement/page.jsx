import Service from '@/app/components/Brands/subPage/Service'
import Hero from '@/app/components/Brands/subPage/Hero'
import { FaSitemap } from 'react-icons/fa'
import Faq from '@/app/components/Brands/subPage/Faq'
import Footer from '@/app/components/Footer'
import Trusted from '@/app/components/Hero/Trusted'
import { useLocale } from 'next-intl'
import serviceImg from "@/public/services/service.png"
import React from 'react'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/serviceBanners/Breplacement.webp'
import CarBrands from '@/app/components/Hero/CarBrands'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const BatteryReplacement = () => {
  const locale = useLocale()
// Hero Section
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "#1 Car Battery Replacement ",
        span2: "Services in Dubai & Abu Dhabi"
    },
    desc1: "Call 800BatteryPro at +971528475675 — Professional Car Battery Replacement in Under 25 Minutes, Anywhere in Dubai & Abu Dhabi.",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "خدمات استبدال بطارية",
        span2: "السيارة في دبي"
    },
    desc1: "اتصل بـ 800BatteryPro على +971528475675 لخدمات استبدال بطارية السيارة خلال 30 دقيقة في دبي وأبو ظبي.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

// Service Section
const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "Fast & Premium Car Battery Replacement Services With Free Battery Testing",
    services: [
        {
            id: 1,
            description: "Stuck with a dead battery in Dubai at 2 AM? Our 24/7 roadside assistance team is always on standby. 800BatteryPro is Dubai and Abu Dhabi's most trusted provider of car battery replacement services — delivering free battery testing and onsite branded battery installation in under 25 minutes at your location. Whether your car won't start in a parking lot, on a highway, or at home, our 24/7 roadside assistance for dead car batteries brings expert help directly to you - day or night, across the entire UAE. "
        },
         {
            id: 2,
            description: "Whether you are in Al Reem Island, Khalidiyah, Corniche, Mussafah, or Yas Island, we reach you fast and get you back on the road without delay. Our 24/7 roadside assistance for dead car batteries covers all major areas including Sheikh Zayed Road, Downtown Dubai, JBR, Business Bay, DIFC, Dubai Marina, Jumeirah, Deira, Bur Dubai, and Al Quoz, as well as all major Abu Dhabi districts and highways. "
        },
                 {
            id: 3,
            description: "800BatteryPro is not just another car battery services provider in the UAE. With over 6 years of proven experience, we have served more than 10,000 satisfied customers across Dubai and Abu Dhabi. Our team of 30+ Experienced technicians is trained on all American and European car brands, and our fleet of 20+ fully equipped mobile vans is deployed 24/7 to reach you wherever you are. Every service includes free car battery testing, free jump start assistance, and free delivery with secure on-site installation - all backed by a 100% customer satisfaction guarantee and using only genuine, OEM-approved batteries."
        },
            {
            id: 4,
            description: "Car battery replacement is the process of removing a discharged or failed vehicle battery and installing a new, fully charged, manufacturer-compatible battery — restoring your vehicle's electrical system and starting capability. In Dubai's extreme heat, battery degradation happens significantly faster than in cooler climates. Most car batteries in the UAE last between 2 to 4 years, compared to the 5-year average elsewhere, making regular testing essential. You likely need a car battery replacement in Dubai if your car cranks slowly or fails to start, your dashboard battery warning light is on, your battery is more than 3 years old, your headlights are dimming unexpectedly, or you have needed jump starts more than twice in a single month. When any of these signs appear, call 800BatteryPro immediately for a free on-site diagnosis."
        },
            {
            id: 5,
            description: "800BatteryPro offers and installs genuine, OEM-approved batteries compatible with all major car brands sold across the UAE. We cover American brands such as Ford, GMC, Chevrolet, Jeep, Dodge, and Cadillac, as well as European brands including BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, and Land Rover. Our range also extends to Japanese and Korean vehicles like Toyota, Nissan, Honda, Hyundai, Kia, and Lexus, along with luxury and electric vehicles including Tesla, Rolls-Royce, Bentley, and Ferrari. Every battery we install comes with a manufacturer warranty and is fitted by a Experienced technician for maximum safety and long-term performance."
        },
         {
            id: 6,
            description: "800BatteryPro is the UAE's most trusted name in car battery replacement in Dubai, car battery services in Abu Dhabi, and 24/7 roadside assistance for dead car batteries across the Emirates. With 6+ years of experience, more than 10,000 happy customers, a fleet of 20+ mobile vans, and a 100% satisfaction guarantee, we have built our reputation one reliable service call at a time. Don't wait — our team is ready around the clock to bring expert car battery services directly to your door. Call or WhatsApp Now: +971528475675 we are available 24/7 — Response in Under 25 Minutes"
        },
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "توصيل مجاني لبطارية السيارة مع استبدال خلال 30 دقيقة في دبي",
    services: [
        {
            id: 1,
            description: "لا تدع بطارية فارغة تعطل يومك. يوفر 800BatteryPro مساعدة على الطريق سريعة الاستجابة على مدار 24/7 في جميع أنحاء دبي وأبو ظبي، ليقدم لك رعاية متخصصة مباشرة في موقعك. يصل فنيونا المعتمدون بسرعة لتقديم فحص مجاني للسيارة في الموقع، وتوصيل مجاني، وتركيب آمن باستخدام بطاريات أصلية معتمدة من المصنع. عد إلى الطريق بأمان مع الخبراء الأكثر ثقة في الإمارات، مع ضمان رضا العملاء بنسبة 100٪. مع أكثر من 5 سنوات من الخبرة، نقوم بتشخيص وحل مشاكل البطارية بسرعة وبدقة. آلاف العملاء الراضين يثقون في التزامنا بالصدق والشفافية. اعتمد على 800BatteryPro للحصول على خدمة سريعة وموثوقة - في كل مرة تحتاجها."
        },
    ]
}

// Cards Content
const englishContent = [
    {
        icons: <FaSitemap />,
        title: " 25-Minute Rapid Response",
        desc: "Get back on the road fast when a dead battery interrupts your schedule. 800BatteryPro dispatches a rapid-response unit immediately to your location in the UAE, arriving within 30 minutes fully equipped to test and replace your battery right on the spot."
    },
    {
        icons: <FaSitemap />,
        title: "Free Battery Testing",
        desc: " Unlike other car battery services in Dubai that push unnecessary replacements, 800BatteryPro always starts with a free, professional battery diagnostic at your location. Our Experienced technicians give you an honest assessment first — if your battery can be saved with a jump start, we will tell you. We only recommend a replacement when your vehicle genuinely needs one, because our reputation is built on trust, not upselling."
    },
    {
        icons: <FaSitemap />,
        title: "Branded car Batteries",
        desc: "Every battery we install is a genuine, OEM-approved unit compatible with your specific vehicle make and model — from everyday sedans to high-performance European and American luxury cars. We never use substandard or counterfeit parts, and every installation comes backed by a manufacturer warranty and a 100% customer satisfaction guarantee, giving you complete peace of mind long after we leave."
    },
    {
        icons: <FaSitemap />,
        title: " Reliable 24/7 Roadside Assistance",
        desc: "A dead car battery does not follow business hours, and neither do we. 800BatteryPro's 24/7 roadside assistance in Dubai is available every single day of the year — including weekends, UAE public holidays, and the early hours of the morning. With 30+ Experienced technicians on call at all times and a dedicated rapid-response dispatch team, help is always just one phone call away at +971528475675."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "طوارئ خلال 30 دقيقة",
        desc: "عد إلى الطريق بسرعة عندما تعطل بطارية فارغة جدولك. يرسل 800BatteryPro وحدة استجابة سريعة فوراً إلى موقعك في الإمارات، وتصل خلال 30 دقيقة مجهزة بالكامل لفحص واستبدال بطاريتك في المكان."
    },
    {
        icons: <FaSitemap />,
        title: "استبدال بطارية عند الطلب 24/7",
        desc: "تخطى شاحنة السحب ودعنا نأتي بورشة السيارات إليك مباشرة. يقدم فنيونا المخلصون خدمات استبدال بطارية السيارة المتميزة إلى منزلك أو مكتبك أو موقعك على الطريق في جميع أنحاء دبي وأبو ظبي، وفقاً لجدولك الزمني."
    },
    {
        icons: <FaSitemap />,
        title: "متخصصون معتمدون لماركات السيارات الفاخرة",
        desc: "ثق بسيارتك لدى خبراء معتمدين يفهمون المواصفات الدقيقة للسيارات الأمريكية والأوروبية والآسيوية. نقوم بتركيب بطاريات سيارات أصلية معتمدة من المصنع فقط بأسعار تنافسية للغاية، مما يضمن أقصى قدر من الموثوقية مع حماية ضمان سيارتك."
    },
    {
        icons: <FaSitemap />,
        title: "حلول متقدمة لإصلاح وتشخيص السيارات",
        desc: "احصل على رعاية شاملة لسيارتك تتجاوز مجرد استبدال البطارية. تتعامل مراكز الخدمة الحديثة لدينا في دبي وأبو ظبي مع التشخيص الكهربائي المعقد، وبرمجة السيارات الدقيقة، ووحدة التحكم الإلكترونية، ونظام إدارة البطارية، والإصلاحات الميكانيكية الكاملة تحت سقف واحد."
    }
]

// FAQs Section
const englishFaqs = [
    {
        question: "How long does a car battery last in Dubai?",
        answer: "Your car battery's lifetime depends upon the climate of the region, your car mileage, and how you drive. When it comes to driving in the UAE's extreme summer, your car battery may last between 2 and 3 years, while a quick battery checkup is required each year or after 10,000 KMs."
    },
    {
        question: "Can you come to my location to replace my car battery?",
        answer: "Yes, 800BatteryPro provides onsite 24/7 battery replacement in Dubai and Abu Dhabi. We offer free car battery delivering and testing services, along with 100 percent customer satisfaction for every battery job. You can call one of our technicians at +971528475675."
    },
    {
        question: "How much does a car battery replacement cost in Dubai?",
        answer: "It depends upon your car brand and model; however, a typical car battery may cost you around AED 250 to AED 600. 800BatteryPro provides free car battery delivering and testing services. In addition, we only use branded car batteries such as Amaron, ACDelco, Varta, Bosch, and Exide. Call us for a quick battery checkup right now!"
    },
    {
        question: "How do I know if my car battery needs replacing?",
        answer: "If you notice any of the following signs of a weak battery, dim headlights, warning or Dashboard Lights Flickering, the car is not starting, and malfunctioning electronic system. Avoid such issues by booking a free car battery checkup with 800BatteryPro!"
    },
    {
        question: "What car battery brands do you sell?",
        answer: "800BatteryPro only stocks Amaron, ACDelco, Varta, Bosch, Exide, and Hankook-branded batteries. For premium cars, we also use AGM and Lithium Ion batteries for different models of BMW, Mercedes-Benz, Land Rover, Porsche, Bugatti, and others. Car batteries we deliver come with 18 months of extended warranty."
    },
    {
        question: "How much does a car battery cost in the UAE?",
        answer: "A car battery price literally depends upon your car brand and model you drive, but the range of the battery price starts from AED 250, which also depends upon the type of battery, too, if it's an AGM Battery, lead Acid Battery or a Lithium Ion Battery."
    },
    {
        question: "Do you offer jumpstart service if my battery is flat?",
        answer: "Yes, 800BatteryPro provides you with under 30 minutes of onsite free battery boosting services anywhere in Dubai and Abu Dhabi. If your car does not start immediately or you face trouble using your dashboard options, then you should contact us at +971528475675 for immediate 24/7 roadside assistance. Our Battery replacement services start from AED 150."
    },
    {
        question: "What is an AGM battery, and does my car need one?",
        answer: "AGM stands for Absorbent Glass Mat — it's a reliable and premium battery type recommended for the latest generation of car models who has the start-stop technology. Some of the latest European cars (BMW 3/5 Series, Mercedes C/E Class, Audi A4/A6) use AGM batteries. If you install a standard flooded battery in an AGM car, it can damage the electrical system of the vehicle. Our technicians always use genuine car batteries recommended by the car manufacturers."
    },
    {
        question: "Can a bad alternator drain my new battery?",
        answer: "Yes, one of the most typical reasons a fresh battery dies quickly is a broken alternator. While you drive, the alternator charges your battery. If it doesn't work right, even a brand-new battery will die. With every battery replacement, we check your alternator and charging system to make sure they all work together."
    },
    {
        question: "Do you replace batteries for hybrid or electric cars?",
        answer: "We change out the 12V auxiliary batteries in hybrid cars, including the Toyota Camry Hybrid, Lexus hybrid models, and others. This needs special tools and training for high-voltage traction batteries in electric vehicles. Please get in touch with us to find out whether we can help with your unique hybrid model."
    },
    {
        question: "How do I know what size battery my car needs?",
        answer: "The size of the battery group that each car needs varies on the type, model, and engine. You can find this information in the owner's manual or on the label of your existing battery. Or give us a call with the specs of your car, and we'll tell you exactly what battery fits and how much it costs."
    },
    {
        question: "Do you dispose of the old battery?",
        answer: "Yes, we will take your old car battery away and recycle it the right way for free. You should never toss away car batteries since they contain lead and acid. We get rid of things in a way that follows UAE environmental rules."
    },
]

const arabicFaqs = [
    {
        question: "كم تدوم بطارية السيارة في دبي؟",
        answer: "عمر بطارية سيارتك يعتمد على مناخ المنطقة، وعدد الكيلومترات التي تقطعها سيارتك، وطريقة قيادتك. عندما يتعلق الأمر بالقيادة في صيف الإمارات الحار، فقد تدوم بطارية سيارتك بين 2 و 3 سنوات، بينما يلزم فحص سريع للبطارية كل عام أو بعد 10,000 كم."
    },
    {
        question: "هل يمكنكم القدوم إلى موقعي لاستبدال بطارية سيارتي؟",
        answer: "نعم، يوفر 800BatteryPro خدمة استبدال البطارية في الموقع على مدار 24/7 في دبي وأبو ظبي. نقدم خدمات توصيل وفحص مجاني لبطارية السيارة، مع رضا العملاء بنسبة 100٪ لكل مهمة بطارية. يمكنك الاتصال بأحد فنيينا على +971528475675."
    },
    {
        question: "كم تكلفة استبدال بطارية السيارة في دبي؟",
        answer: "يعتمد ذلك على ماركة سيارتك وطرازها؛ ومع ذلك، قد تكلفك بطارية السيارة النموذجية حوالي 250 إلى 600 درهم إماراتي. يوفر 800BatteryPro خدمات توصيل وفحص مجاني لبطارية السيارة. بالإضافة إلى ذلك، نستخدم فقط بطاريات السيارات ذات العلامات التجارية مثل Amaron و ACDelco و Varta و Bosch و Exide. اتصل بنا لإجراء فحص سريع للبطارية الآن!"
    },
    {
        question: "كيف أعرف أن بطارية سيارتي بحاجة إلى الاستبدال؟",
        answer: "إذا لاحظت أيًا من العلامات التالية لضعف البطارية، مثل الأضواء الخافتة، أو تحذير أو وميض أضواء لوحة القيادة، أو عدم تشغيل السيارة، أو خلل في النظام الإلكتروني. تجنب هذه المشاكل عن طريق حجز فحص مجاني لبطارية السيارة مع 800BatteryPro!"
    },
    {
        question: "ما هي ماركات بطاريات السيارات التي تبيعونها؟",
        answer: "يخزن 800BatteryPro فقط بطاريات العلامات التجارية Amaron و ACDelco و Varta و Bosch و Exide و Hankook. بالنسبة للسيارات الفاخرة، نستخدم أيضاً بطاريات AGM وليثيوم أيون لموديلات مختلفة من BMW و Mercedes-Benz و Land Rover و Porsche و Bugatti وغيرها. تأتي بطاريات السيارات التي نقدمها مع ضمان ممتد لمدة 18 شهراً."
    },
    {
        question: "كم تكلفة بطارية السيارة في الإمارات؟",
        answer: "سعر بطارية السيارة يعتمد فعلياً على ماركة سيارتك وطرازها، لكن نطاق سعر البطارية يبدأ من 250 درهم إماراتي، والذي يعتمد أيضاً على نوع البطارية، سواء كانت بطارية AGM أو بطارية حمض الرصاص أو بطارية ليثيوم أيون."
    },
    {
        question: "هل تقدمون خدمة تشغيل البطارية إذا كانت فارغة؟",
        answer: "نعم، يوفر 800BatteryPro خدمات تشغيل بطارية مجانية في الموقع خلال 30 دقيقة في أي مكان في دبي وأبو ظبي. إذا لم تبدأ سيارتك على الفور أو واجهت مشكلة في استخدام خيارات لوحة القيادة، فيجب عليك الاتصال بنا على +971528475675 للحصول على مساعدة فورية على الطريق 24/7. تبدأ خدمات استبدال البطارية لدينا من 150 درهم إماراتي."
    },
    {
        question: "ما هي بطارية AGM وهل سيارتي بحاجة إليها؟",
        answer: "AGM تعني الحصيرة الزجاجية الماصة - إنها نوع بطارية موثوق ومتميز موصى به لأحدث جيل من موديلات السيارات التي تتميز بتقنية التشغيل والإيقاف. بعض أحدث السيارات الأوروبية (BMW 3/5 Series، Mercedes C/E Class، Audi A4/A6) تستخدم بطاريات AGM. إذا قمت بتركيب بطارية عادية في سيارة AGM، فقد يؤدي ذلك إلى إتلاف النظام الكهربائي للسيارة. يستخدم فنيونا دائماً بطاريات سيارات أصلية موصى بها من قبل مصنعي السيارات."
    },
    {
        question: "هل يمكن للمولد التالف أن يستنزف بطاريتي الجديدة؟",
        answer: "نعم، أحد الأسباب الأكثر شيوعاً لنفاد البطارية الجديدة بسرعة هو المولد التالف. أثناء القيادة، يقوم المولد بشحن البطارية. إذا لم يعمل بشكل صحيح، فحتى البطارية الجديدة تماماً ستنفد. مع كل استبدال للبطارية، نتحقق من المولد ونظام الشحن لديك للتأكد من أنها تعمل جميعاً معاً."
    },
    {
        question: "هل تستبدلون البطاريات للسيارات الهجينة أو الكهربائية؟",
        answer: "نقوم بتغيير البطاريات المساعدة 12V في السيارات الهجينة، بما في ذلك Toyota Camry Hybrid و Lexus hybrid models وغيرها. هذا يتطلب أدوات وتدريباً خاصاً لبطاريات الجهد العالي في السيارات الكهربائية. يرجى التواصل معنا لمعرفة ما إذا كان بإمكاننا المساعدة في طرازك الهجين الفريد."
    },
    {
        question: "كيف أعرف حجم البطارية الذي تحتاجه سيارتي؟",
        answer: "يختلف حجم مجموعة البطارية التي تحتاجها كل سيارة حسب النوع والطراز والمحرك. يمكنك العثور على هذه المعلومات في دليل المالك أو على ملصق البطارية الحالية. أو اتصل بنا مع مواصفات سيارتك، وسنخبرك بالضبط بالبطارية المناسبة وتكلفتها."
    },
    {
        question: "هل تتخلصون من البطارية القديمة؟",
        answer: "نعم، سنأخذ بطارية سيارتك القديمة ونعيد تدويرها بالطريقة الصحيحة مجاناً. يجب ألا تتخلص أبداً من بطاريات السيارات لأنها تحتوي على الرصاص والحمض. نتخلص منها بطريقة تتبع قواعد البيئة في الإمارات."
    }
]




      const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
      const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
      const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
       const faqs = locale === "ar" ? arabicFaqs : englishFaqs


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

              
                    const batteryBrands = [
                      { image: varta, name: "Varta" },
                      { image: acdelco, name: "AC Delco" },
                      { image: bosh, name: "Bosch" },
                      { image: amron, name: "Amaron" },
                      { image: solite, name: "Solite" },
                      { image: volcan, name: "Volcan" },
                  ];

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
      title2: " for All Car Brands in Dubai & Abu Dhabi",
      viewAll: "View All",
    };

                  // English content
  const englishContents = {
    sectionTitle: "What Our Customers Say",
    headingPrefix: "About Our Dubai & Abu Dhabi ",
    headingHighlight: "Battery Service",
  };

  // Arabic content (translated reviews)
  const arabicContents = {
    sectionTitle: "ماذا يقول عملاؤنا",
    headingPrefix: "موثوق من قبل",
    headingHighlight: "السائقين في كل مكان",
  };


  return (
    <div>
      <div className='sticky top-0 '>
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className='bg-white rounded-t-4xl relative z-10'>
           <HowItWorks />
           <Service serviceContent={serviceContent} serviceImg={serviceImg} />
           <CarBrands text={text} />
           <Battery brands={batteryBrands} batteryText={batteryText} />
            <WhyChooseUs data={data} />
           <Trusted englishContent={englishContents} arabicContent={arabicContents} />
           <Faq faqs={faqs} />
           <Footer />
        </div>
    </div>
  )
}

export default BatteryReplacement