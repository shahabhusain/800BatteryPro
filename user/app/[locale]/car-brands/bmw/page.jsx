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
import serviceImg from "@/public/brands/bmwBrands/service.webp"
import serviceImg5 from "@/public/brands/bmwBrands/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/bmwBrands/1.webp'
   import carBrand2 from '@/public/brands/bmwBrands/2.webp'
    import carBrand3 from '@/public/brands/bmwBrands/3.webp'
     import carBrand4 from '@/public/brands/bmwBrands/4.webp'
      import carBrand5 from '@/public/brands/bmwBrands/5.webp'
       import carBrand6 from '@/public/brands/bmwBrands/6.webp'
        import carBrand7 from '@/public/brands/bmwBrands/7.webp'
         import carBrand8 from '@/public/brands/bmwBrands/8.webp'
          import carBrand9 from '@/public/brands/bmwBrands/9.webp'
           import carBrand10 from '@/public/brands/bmwBrands/10.webp' 
            import carBrand11 from '@/public/brands/bmwBrands/11.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/bmwBrands/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'


const Bmw = () => {
  const locale = useLocale()
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "BMW Car Battery Replacement",
        span2: " & Advanced Repairs"
    },
    desc1: "Don't panic if your Car Battery Is Dead! 800Battery Offers The Under 15 Minute On-site Battery Replacement for your BMW in Dubai? Branded car battery with best customer services.",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "استبدال بطارية سيارة BMW",
        span2: "وإصلاحات متقدمة"
    },
    desc1: "لا داعي للذعر إذا كانت بطارية سيارتك فارغة! تقدم 800Battery استبدال بطارية في الموقع خلال 15 دقيقة لسيارتك BMW في دبي؟ بطارية ذات علامة تجارية مع أفضل خدمات العملاء.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "BMW Battery Replacement & Auto Repair Services",
    services: [
        {
            id: 1,
            description: "Just had your BMW battery die? Don't panic, as you now have 800BatteryPro as a trusted partner for reliable BMW Battery Replacement in Dubai. We have a team of certified technicians who are experienced in all BMW models and a well-equipped garage, too. Our technicians only use genuine battery brands for your BMW, whether it's a sport, sedan, SUV, coupe, or any other model. We are regarded as one of the trusted BMW service centres in the UAE, with 100 percent customer satisfaction."
        },
        {
            id: 2,
            description: "We provide 24/7 roadside assistance and emergency BMW battery replacement services directly at your office, home, or anywhere in Dubai and Abu Dhabi."
        },
        {
            id: 3,
            description: "Our team of experts will offer free battery testing and use the latest tech, along with ensuring a genuine battery brand is used, which typically happens under 15 Minutes. Our Battery replacement service includes free battery health testing, expert installation, and up to 18 months of warranty."
        },
        {
            id: 4,
            description: "We only use genuine car batteries suited for your vehicle. For BMW Battery replacements, car scanning, engine repairs, electrical repairs or other advanced repair services, you can call us at our toll-free number at +971528475675 or book a free appointment right now!"
        },
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "استبدال بطارية BMW وخدمات إصلاح السيارات",
    services: [
        {
            id: 1,
            description: "هل ماتت بطارية BMW للتو؟ لا داعي للذعر، حيث لديك الآن 800BatteryPro كشريك موثوق لاستبدال بطارية BMW في دبي. لدينا فريق من الفنيين المعتمدين ذوي الخبرة في جميع موديلات BMW ومركز خدمة مجهز تجهيزاً جيداً. يستخدم فنيونا فقط ماركات البطاريات الأصلية لسيارتك BMW، سواء كانت رياضية أو سيدان أو SUV أو كوبيه أو أي موديل آخر. نحن نعتبر أحد مراكز خدمة BMW الموثوقة في الإمارات، مع رضا العملاء بنسبة 100٪."
        },
        {
            id: 2,
            description: "نقدم المساعدة على الطريق 24/7 وخدمات استبدال بطارية BMW الطارئة مباشرة في مكتبك أو منزلك أو في أي مكان في دبي وأبو ظبي."
        },
        {
            id: 3,
            description: "سيقدم فريق خبرائنا فحصاً مجانياً للبطارية ويستخدم أحدث التقنيات، مع ضمان استخدام ماركة بطارية أصلية، والذي يحدث عادةً خلال 15 دقيقة. تشمل خدمة استبدال البطارية لدينا فحص صحة البطارية مجاناً، وتركيباً احترافياً، وضماناً يصل إلى 18 شهراً."
        },
        {
            id: 4,
            description: "نستخدم فقط بطاريات السيارات الأصلية المناسبة لسيارتك. لاستبدال بطارية BMW، وفحص السيارة، وإصلاح المحرك، والإصلاحات الكهربائية أو غيرها من خدمات الإصلاح المتقدمة، يمكنك الاتصال بنا على رقمنا المجاني +971528475675 أو حجز موعد مجاني الآن!"
        },
    ]
}

const serviceEnglishContent1 = {
    subtitle: "SERVICES",
    title: "BMW Service Centre in Dubai",
    services: [
        {
            id: 1,
            description: "Genuine Car Battery Replacement & Advances Car Repairs - BMW are powerful German machine with next-gen powertrains which requires branded battery capable of handling quick acceleration, complex electrical systems, and smart tech features. 800BatteryPro recommends AGM and lithium batteries, which are great in their capacity and trusted for reliable functionality. Our certified BMW experts in Dubai only use the premium AGM Batteries to ensure high performance in the harsh summer season of the UAE."
        },
        {
            id: 2,
            description: "We serve more than just BMW Car Battery replacement, as we have a car service center ideally located in Dubai and Abu Dhabi. Our services catalogue includes 24/7 roadside assistance, Free Battery Boosting, advance car repairs (I.e ECU, TCM, etc.), and all electrical and mechanical repair services delivered with 100 percent customer satisfaction and market competitive pricing. Our technicians only use OEM standard spare parts for BMW, which ensures peak engine performance and luxury."
        },
        {
            id: 3,
            description: "You can reserve your slot for your next Battery Checkup with the best BMW experts in Dubai. Contact us at +971 528475675 for 24/7 emergency roadside assistance."
        }
    ]
}

const serviceArabicContent1 = {
    subtitle: "الخدمات",
    title: "مركز خدمة BMW في دبي",
    services: [
        {
            id: 1,
            description: "استبدال بطارية السيارة الأصلية وإصلاحات السيارات المتقدمة - BMW هي آلة ألمانية قوية مع أنظمة دفع من الجيل التالي تتطلب بطارية ذات علامة تجارية قادرة على التعامل مع التسارع السريع والأنظمة الكهربائية المعقدة وميزات التكنولوجيا الذكية. يوصي 800BatteryPro ببطاريات AGM والليثيوم، والتي تعتبر رائعة في سعتها وموثوقة لوظائفها الموثوقة. يستخدم خبراء BMW المعتمدون لدينا في دبي فقط بطاريات AGM المتميزة لضمان أداء عالٍ في فصل الصيف القاسي في الإمارات."
        },
        {
            id: 2,
            description: "نحن نخدم أكثر من مجرد استبدال بطارية BMW، حيث لدينا مركز خدمة سيارات يقع بشكل مثالي في دبي وأبو ظبي. تتضمن كتالوج خدماتنا المساعدة على الطريق 24/7، تشغيل البطارية مجاناً، إصلاحات السيارات المتقدمة (مثل ECU، TCM، وما إلى ذلك)، وجميع خدمات الإصلاح الكهربائية والميكانيكية المقدمة مع رضا العملاء بنسبة 100٪ وأسعار تنافسية في السوق. يستخدم فنيونا فقط قطع الغيار ذات المستوى القياسي من OEM لسيارات BMW، مما يضمن أداء المحرك الأمثل والفخامة."
        },
        {
            id: 3,
            description: "يمكنك حجز موعدك لفحص البطارية التالي مع أفضل خبراء BMW في دبي. اتصل بنا على +971 528475675 للحصول على مساعدة طارئة على الطريق 24/7."
        }
    ]
}

const englishServices = [
    {
        img: serviceImg1,
        title: "Car Battery Replacement",
        desc: "Fast, reliable battery replacement delivered to your location in 30 minutes."
    },
    {
        img: serviceImg2,
        title: "Car Battery Boosting",
        desc: "Quick and stress-free jump-start services wherever you are."
    },
    {
        img: serviceImg3,
        title: "Roadside Assistance",
        desc: "Immediate roadside support across the UAE, anytime, anywhere."
    },
    {
        img: serviceImg4,
        title: "Car Scanning",
        desc: "Advanced diagnostics to identify and resolve car issues with precision."
    }
]

const arabicServices = [
    {
        img: serviceImg1,
        title: "استبدال بطارية السيارة",
        desc: "استبدال سريع وموثوق لبطارية السيارة يصل إلى موقعك خلال 30 دقيقة."
    },
    {
        img: serviceImg2,
        title: "تشغيل بطارية السيارة",
        desc: "خدمة تشغيل البطارية بسرعة وسهولة أينما كنت."
    },
    {
        img: serviceImg3,
        title: "المساعدة على الطريق",
        desc: "دعم فوري على الطريق في جميع أنحاء الإمارات في أي وقت."
    },
    {
        img: serviceImg4,
        title: "فحص السيارة",
        desc: "تشخيص متقدم لتحديد مشاكل السيارة وحلها بدقة."
    }
]

const englishContent = [
    {
        icons: <FaSitemap />,
        title: "Premium 24/7 Customer",
        desc: "800BatteryPro provides Compassionate 24/7 Customer Support For BMW In Dubai. We offer you with a complete car care solution on pricing."
    },
    {
        icons: <FaSitemap />,
        title: "Certified BMW specialists",
        desc: "We have a team of certified BMW specialists, who have 5+ years of experience working on different BMW models and Car Batteries."
    },
    {
        icons: <FaSitemap />,
        title: "Using Genuine BMW Parts",
        desc: "Our certified BMW specialists only use OEM approved spare parts and Branded BMW batteries for all car jobs."
    },
    {
        icons: <FaSitemap />,
        title: "Car Battery Under 15 Minutes",
        desc: "800BatteryPro offers 24/7 roadside assistance with our free battery delivery, our technicians use the latest equipment to work on your replacement."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "خدمة عملاء متميزة 24/7",
        desc: "يقدم 800BatteryPro دعماً حنوناً للعملاء على مدار 24/7 لسيارات BMW في دبي. نقدم لك حلاً كاملاً للعناية بالسيارة بأسعار تنافسية."
    },
    {
        icons: <FaSitemap />,
        title: "متخصصون معتمدون في BMW",
        desc: "لدينا فريق من متخصصي BMW المعتمدين، لديهم أكثر من 5 سنوات من الخبرة في العمل على مختلف موديلات BMW وبطاريات السيارات."
    },
    {
        icons: <FaSitemap />,
        title: "استخدام قطع BMW أصلية",
        desc: "يستخدم متخصصو BMW المعتمدون لدينا فقط قطع الغيار المعتمدة من OEM وبطاريات BMW ذات العلامات التجارية لجميع مهام السيارات."
    },
    {
        icons: <FaSitemap />,
        title: "بطارية السيارة خلال 15 دقيقة",
        desc: "يقدم 800BatteryPro مساعدة على الطريق 24/7 مع توصيل البطارية مجاناً، يستخدم فنيونا أحدث المعدات للعمل على استبدالك."
    }
]

const englishFaqs = [
    {
        question: "How long does a BMW battery replacement take?",
        answer: "800BatteryPro guarantees on-site battery replacement under 15 Minutes once our certified BMW technicians arrive at your location. We offer free battery testing and boosting services 24/7 through our specialised roadside assistance services. If you are car battery is dead or something wrong with its electrical system, just call as at +971 528475675 for immediate assistance."
    },
    {
        question: "How do I know if my BMW battery needs replacing?",
        answer: "If you notice signs such as slow engine cranking, warning lights blinking, Headlights getting dimmed or even if it's your car not starting. Then 800Battery recommends its free battery testing before any replacement happens."
    },
    {
        question: "Do you offer battery replacement in Dubai?",
        answer: "800BatteryPro offers 24/7 battery replacement services in Dubai and Abu Dhabi. We have a team of certified BMW technicians using latest technology and genuine car battery serving residents of UAE with under 15 minutes roadside assistance."
    },
    {
        question: "How much does a BMW battery replacement cost in Dubai?",
        answer: "BMW Battery replacement cost varies depending upon the car model and battery type, however when it comes to 800BatteryPro we offer free battery testing and 24/7 roadside assistance which can be availed by contacting us at +971 528475675 or WhatsApp One of our experts."
    },
    {
        question: "What warranty comes with a battery replacement?",
        answer: "Yes, 800BatteryPro only recommends genuine Battery Brands, as our battery replacement services comes up with 18 months warranty. While, our battery boosting is completely free of cost you can avail our services by calling us at +971 528475675."
    },
    {
        question: "Is BMW battery replacement in Dubai available 24/7?",
        answer: "Yes, 800BatteryPro has 24/7 roadside assistance available for BMW battery replacement in Dubai. We have our team of certified BMW specialist in Dubai, who uses latest technology and genuine battery brands only for every battery job."
    },
    {
        question: "Why is it important to service my BMW with manufacturer recommended Oil and Filter, when there are cheaper alternative available?",
        answer: "Your BMW engine is very well built and has very little tolerances. The makers choose a certain brand and grade of oil that works well with each engine while they were testing and designing the engine. Changing the kind and occasionally even the brand of oil can make the engine run worse and wear it out faster. We use the kind and grade of oil that the manufacturer recommends, even if it costs a little more, because it makes the engine last longer and work better."
    },
    {
        question: "What do I do when the low engine oil light turns on?",
        answer: "You can see if any oil has spilled where the automobile is parked. If oil has leaked, the engine oil lamp is probably on because of a leak. You might also have a small leak that doesn't make a big puddle but can lower the oil level over time. If not, the problem can be that the engine in your BMW is burning oil because it is too worn out. Using the right oil grade for your car is vital to avoid this."
    },
    {
        question: "My BMW is shaking, is it safe to drive?",
        answer: "No is the short answer. Maybe is the long response. There could be a simple explanation why your automobile is shaking, like worn-out spark plugs, or it could be something more serious. Don't ignore the engine noise; get it checked out as soon as you can."
    },
    {
        question: "What does 'transmission fault' signify on your car's dashboard?",
        answer: "It usually signifies that the transmission has a problem inside. It could be because of dirty gearbox fluid, a problem with the valve body, the torque converter, the internal mechanical parts, or a broken output speed sensor."
    },
    {
        question: "What to do if my BMW is overheating?",
        answer: "If your BMW is overheating, turn off the engine as soon as it is safe to do so. The engine can get damaged beyond repair if it gets too hot, which can happen very fast. If you're driving, you should pull over as soon as it's safe to do so and call a tow truck to take your car to the shop for an inspection. If the engine becomes too hot, even traveling a few meters can break it beyond repair."
    },
]

const arabicFaqs = [
    {
        question: "كم من الوقت يستغرق استبدال بطارية BMW؟",
        answer: "يضمن 800BatteryPro استبدال البطارية في الموقع خلال 15 دقيقة بمجرد وصول فنيينا المعتمدين في BMW إلى موقعك. نقدم خدمات فحص وتشغيل البطارية مجاناً على مدار 24/7 من خلال خدمات المساعدة على الطريق المتخصصة. إذا كانت بطارية سيارتك فارغة أو كان هناك خطأ ما في نظامها الكهربائي، فقط اتصل بنا على +971 528475675 للحصول على مساعدة فورية."
    },
    {
        question: "كيف أعرف أن بطارية BMW الخاصة بي بحاجة إلى الاستبدال؟",
        answer: "إذا لاحظت علامات مثل بطء تشغيل المحرك، أو وميض أضواء التحذير، أو تعتيم المصابيح الأمامية، أو حتى عدم تشغيل سيارتك. يوصي 800Battery بإجراء فحص مجاني للبطارية قبل حدوث أي استبدال."
    },
    {
        question: "هل تقدمون خدمة استبدال البطارية في دبي؟",
        answer: "يقدم 800BatteryPro خدمات استبدال البطارية على مدار 24/7 في دبي وأبو ظبي. لدينا فريق من فنيي BMW المعتمدين الذين يستخدمون أحدث التقنيات وبطاريات السيارات الأصلية لخدمة سكان الإمارات مع مساعدة على الطريق خلال 15 دقيقة."
    },
    {
        question: "كم تكلفة استبدال بطارية BMW في دبي؟",
        answer: "تختلف تكلفة استبدال بطارية BMW حسب موديل السيارة ونوع البطارية، ومع ذلك عندما يتعلق الأمر بـ 800BatteryPro فإننا نقدم فحصاً مجانياً للبطارية ومساعدة على الطريق 24/7 يمكن الاستفادة منها عن طريق الاتصال بنا على +971 528475675 أو واتساب لأحد خبرائنا."
    },
    {
        question: "ما هو الضمان المقدم مع استبدال البطارية؟",
        answer: "نعم، يوصي 800BatteryPro فقط بماركات البطاريات الأصلية، حيث تأتي خدمات استبدال البطارية لدينا مع ضمان يصل إلى 18 شهراً. بينما، تشغيل البطارية لدينا مجاني تماماً ويمكنك الاستفادة من خدماتنا بالاتصال بنا على +971 528475675."
    },
    {
        question: "هل استبدال بطارية BMW في دبي متاح 24/7؟",
        answer: "نعم، يقدم 800BatteryPro مساعدة على الطريق 24/7 لاستبدال بطارية BMW في دبي. لدينا فريق من متخصصي BMW المعتمدين في دبي، الذين يستخدمون أحدث التقنيات وماركات البطاريات الأصلية فقط لكل مهمة بطارية."
    },
    {
        question: "لماذا من المهم صيانة سيارتي BMW بالزيت والفلتر الموصى به من قبل الشركة المصنعة، عندما تكون هناك بدائل أرخص متاحة؟",
        answer: "محرك BMW الخاص بك مبني بشكل جيد للغاية وله تفاوتات قليلة جداً. يختار المصنعون علامة تجارية ودرجة معينة من الزيت تعمل بشكل جيد مع كل محرك أثناء اختبارهم وتصميمهم للمحرك. تغيير نوع الزيت وأحياناً حتى العلامة التجارية يمكن أن يجعل المحرك يعمل بشكل أسئ ويبلى بشكل أسرع. نحن نستخدم نوع ودرجة الزيت التي توصي بها الشركة المصنعة، حتى لو كانت تكلف أكثر قليلاً، لأنها تجعل المحرك يدوم لفترة أطول ويعمل بشكل أفضل."
    },
    {
        question: "ماذا أفعل عندما يضيء ضوء انخفاض زيت المحرك؟",
        answer: "يمكنك معرفة ما إذا كان أي زيت قد تسرب حيث تكون السيارة متوقفة. إذا تسرب الزيت، فمن المحتمل أن يكون ضوء زيت المحرك مضاءً بسبب تسرب. قد يكون لديك أيضاً تسرب صغير لا يشكل بركة كبيرة ولكن يمكن أن يخفض مستوى الزيت بمرور الوقت. إذا لم يكن الأمر كذلك، فقد تكون المشكلة أن المحرك في سيارتك BMW يحرق الزيت لأنه بالٍ جداً. استخدام درجة الزيت الصحيحة لسيارتك أمر حيوي لتجنب ذلك."
    },
    {
        question: "سيارتي BMW تهتز، هل من الآمن القيادة؟",
        answer: "لا هو الجواب المختصر. ربما هو الجواب الطويل. قد يكون هناك تفسير بسيط لاهتزاز سيارتك، مثل شمعات الإشعال البالية، أو قد يكون شيئاً أكثر خطورة. لا تتجاهل ضوضاء المحرك؛ افحصها في أقرب وقت ممكن."
    },
    {
        question: "ماذا يعني 'خلل في ناقل الحركة' على لوحة القيادة في سيارتك؟",
        answer: "يعني عادةً أن ناقل الحركة به مشكلة من الداخل. قد يكون بسبب سوائل علبة التروس المتسخة، أو مشكلة في جسم الصمام، أو محول العزم، أو الأجزاء الميكانيكية الداخلية، أو مستشعر سرعة الخرج المكسور."
    },
    {
        question: "ماذا أفعل إذا كانت سيارتي BMW ترتفع حرارتها؟",
        answer: "إذا كانت سيارتك BMW ترتفع حرارتها، فأوقف المحرك في أقرب وقت ممكن. يمكن أن يتلف المحرك بشكل لا يمكن إصلاحه إذا أصبح ساخناً جداً، ويمكن أن يحدث ذلك بسرعة كبيرة. إذا كنت تقود، يجب أن تتوقف على جانب الطريق في أقرب وقت ممكن وتتصل بشاحنة سحب لنقل سيارتك إلى الورشة للفحص. إذا أصبح المحرك ساخناً جداً، حتى السفر بضعة أمتار يمكن أن يكسرها بشكل لا يمكن إصلاحه."
    },
]

// Locale assignments
const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
const serviceContent1 = locale === "ar" ? serviceArabicContent1 : serviceEnglishContent1
const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
const faqs = locale === "ar" ? arabicFaqs : englishFaqs

const text = locale === "ar"
    ? {
        desc: "ماركات سيارات BMW التي نخدمها",
        title1: "يشمل جميع",
        title2: "الموديلات والفئات الرئيسية"
    }
    : {
        desc: "BMW Car Models We Serve",
        title1: "Includes All",
        title2: "Major Models & Variants"
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
            desc: "BMW M1",
            car: carBrand1,
        },
        {
            desc: "BMW M2",
            car: carBrand2,
        },
        {
            desc: "BMW M3",
            car: carBrand3,
        },
        {
            desc: "BMW M4",
            car: carBrand4,
        },
        {
            desc: "BMW M5",
            car: carBrand5,
        },
        {
            desc: "BMW M6",
            car: carBrand6,
        },
        {
            desc: "BMW M7",
            car: carBrand7,
        },
        {
            desc: "BMW X7",
            car: carBrand9,
        },
          {
            desc: "BMW Z4",
            car: carBrand10,
        },
          {
            desc: "BMW M8",
            car: carBrand11,
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
      <div className='sticky top-0 '>  {/* Added z-index */}
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className=' bg-white  rounded-t-4xl relative z-10'>
            <Cards />
            <Services />
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

export default Bmw