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
import serviceImg from "@/public/brands/alfa/service.webp"
import serviceImg5 from "@/public/brands/alfa/service1.webp"
import React from 'react'
import CarBrands from '@/app/components/Brands/subPage/CarBrands'
// car brands
  import carBrand1 from '@/public/brands/alfa/1.webp'
   import carBrand2 from '@/public/brands/alfa/2.webp'
    import carBrand3 from '@/public/brands/alfa/3.webp'
     import carBrand4 from '@/public/brands/alfa/4.webp'
      import carBrand5 from '@/public/brands/alfa/5.webp'
       import carBrand6 from '@/public/brands/alfa/6.webp'
// battery brands
import varta from "@/public/batteryBrands/varta.png";
import acdelco from "@/public/batteryBrands/ac.png";
import bosh from "@/public/batteryBrands/bosh.png";
import amron from "@/public/batteryBrands/amron.png";
import solite from "@/public/batteryBrands/solit.png";
import volcan from "@/public/batteryBrands/volcan.png";
import Battery from '@/app/components/Brands/subPage/Battery'
import WhyChooseUs from '@/app/components/Brands/subPage/WhyChooseUs'
import herobg from '@/public/brands/alfa/bg.webp'
import Cards from '@/app/components/Hero/Cards'
import Services from '@/app/components/locations/Services'
import HowItWorks from '@/app/components/Hero/HowItWorks'


const AlfaRomeo = () => {
  const locale = useLocale()
const heroEnglishContent = {
    desc: "Top Car Brands – 24/7 Emergency Support & Anywhere!",
    title: {
        span1: "Alfa Romeo Car Battery &",
        span2: "Advanced Repair Experts"
    },
    desc1: "Talk To Our Expert at 800BatteryPro For Alfa Romeo Battery Replacement in Dubai or Advance Repair Services.",
    btn: "Call Now",
    btn1: "Book Service Now"
}

const heroArabicContent = {
    desc: "أفضل ماركات السيارات – دعم طوارئ 24/7 في أي مكان!",
    title: {
        span1: "بطارية سيارة ألفا روميو و",
        span2: "خبراء الإصلاح المتقدم"
    },
    desc1: "تحدث إلى خبيرنا في 800BatteryPro لاستبدال بطارية ألفا روميو في دبي أو خدمات الإصلاح المتقدمة.",
    btn: "اتصل الآن",
    btn1: "احجز الخدمة الآن"
}

const serviceEnglishContent = {
    subtitle: "SERVICES",
    title: "Alfa Romeo Specialists in Dubai – A to Z Car Battery Replacement Solutions",
    services: [
        {
            id: 1,
            description: "The Alfa Romeo Logo represents both luxury and Italian prestige, with its peak performance and comfortable ride. Almost every car brand finds it unable to cope with the challenging climate of the UAE, with heat rising to 55°C in summers, both battery services and car programming is high demand. Alfa Romeo batteries are long-lasting and highly durable, but they still it needs certified Alfa Romeo Specialist for treating any car battery replacements or advanced car repairs in Dubai. 800BatteryPro is one of the trusted Alfa Romeo service centres in the UAE, with 100+ technicians and a well-equipped garage. For Alfa Romeo Giulia, Giulietta, Tonale, Giulia QuadriFoglio, Milano, QuadriFoglio, Stelvio, 4c, 8c, we provide both AGM and Enhanced Flooded Battery in most model variants. The AGM Batteries we provide are genuine, long-lasting, and durable, supporting the electrical systems of Alfa Romeo. There is a need for having routine car check-ups once a year or maybe after 10,000 KMs, as it will help you in staying safe on the road and keeping your car in good shape. Do not ignore any unknown mechanical sounds or quirks in your car. Contact 800BatteryPro at +971528475675 for Alfa Romeo Battery replacements, car scanning, engine repairs, electrical repairs or other advanced repair services. Our certified technicians offer on-site services within 15 minutes across the UAE."
        },
    ]
}

const serviceArabicContent = {
    subtitle: "الخدمات",
    title: "متخصصو ألفا روميو في دبي – حلول شاملة لاستبدال بطارية السيارة",
    services: [
        {
            id: 1,
            description: "شعار ألفا روميو يمثل الفخامة والهيبة الإيطالية، مع أدائها المتميز وراحتها في القيادة. تجد كل ماركات السيارات تقريباً صعوبة في التعامل مع مناخ الإمارات الصعب، حيث ترتفع الحرارة إلى 55 درجة مئوية في الصيف، وكل من خدمات البطارية وبرمجة السيارات مطلوبة بشدة. بطاريات ألفا روميو طويلة الأمد وعالية التحمل، لكنها لا تزال بحاجة إلى متخصص معتمد في ألفا روميو لمعالجة أي استبدال لبطارية السيارة أو إصلاحات السيارات المتقدمة في دبي. 800BatteryPro هو أحد مراكز خدمة ألفا روميو الموثوقة في الإمارات، مع أكثر من 100 فني ومركز خدمة مجهز تجهيزاً جيداً. بالنسبة لسيارات ألفا روميو جوليا، جوليتا، تونالي، جوليا كوادري فوجليو، ميلانو، كوادري فوجليو، ستيلفيو، 4c، 8c، نوفر بطاريات AGM والبطاريات الغامرة المحسنة في معظم موديلاتها. بطاريات AGM التي نوفرها أصلية وطويلة الأمد ومتينة، وتدعم الأنظمة الكهربائية لسيارات ألفا روميو. هناك حاجة لإجراء فحوصات روتينية للسيارة مرة في السنة أو ربما بعد 10,000 كم، لأن ذلك سيساعدك في البقاء آمناً على الطريق والحفاظ على سيارتك في حالة جيدة. لا تتجاهل أي أصوات ميكانيكية غير معروفة أو سلوكيات غريبة في سيارتك. اتصل بـ 800BatteryPro على +971528475675 لاستبدال بطارية ألفا روميو، وفحص السيارة، وإصلاح المحرك، والإصلاحات الكهربائية أو خدمات الإصلاح المتقدمة الأخرى. يقدم فنيونا المعتمدون خدمات في الموقع خلال 15 دقيقة في جميع أنحاء الإمارات."
        },
    ]
}

const serviceEnglishContent1 = {
    subtitle: "SERVICES",
    title: "Trusted Alfa Romeo Service Center in Dubai & Abu Dhabi",
    services: [
        {
            id: 1,
            description: "800BatteryPro has a team of certified Alfa Romeo technicians who know about every technical detail related to its car battery, advanced repair, and maintenance services. Considered the go-to premium service centre in the UAE, we serve our customers with top car care solutions with transparent pricing. Our technicians only use Alfa Romeo genuine and OEM standard parts, which are sourced from branded manufacturers only. We don't stop there as our car repair services in Dubai extend to 24/7 Roadside assistance and onsite battery boosting within 15 minutes across the Emirates. Fill out the form to book an appointment with one of our Alfa Romeo specialists in Dubai."
        },
    ]
}

const serviceArabicContent1 = {
    subtitle: "الخدمات",
    title: "مركز خدمة ألفا روميو الموثوق في دبي وأبو ظبي",
    services: [
        {
            id: 1,
            description: "يضم 800BatteryPro فريقاً من فنيي ألفا روميو المعتمدين الذين يعرفون كل التفاصيل الفنية المتعلقة ببطارية السيارة والإصلاح المتقدم وخدمات الصيانة. يعتبر مركز الخدمة المتميز في الإمارات، ونحن نخدم عملائنا بأفضل حلول العناية بالسيارات بأسعار شفافة. يستخدم فنيونا فقط قطع غيار ألفا روميو الأصلية والمعايير القياسية من OEM، والتي يتم الحصول عليها من الشركات المصنعة ذات العلامات التجارية فقط. لا نتوقف عند هذا الحد حيث تمتد خدمات إصلاح سياراتنا في دبي إلى المساعدة على الطريق 24/7 وتشغيل البطارية في الموقع خلال 15 دقيقة في جميع أنحاء الإمارات. املأ النموذج لحجز موعد مع أحد متخصصي ألفا روميو لدينا في دبي."
        },
    ]
}

const englishServices = [
    {
        img: serviceImg1,
        title: "Premium 24/7 Customer Support",
        desc: "800BatteryPro provides you with 24/7 Alfa Romeo Customer Support services, not just this we ensure you get all the right details which can resolve your issue asap."
    },
    {
        img: serviceImg2,
        title: "Certified Alfa Romeo Specialists",
        desc: "We have certified Alfa Romeo Specialists who are all experienced dealing with every Alfa Romeo Car battery job with precision and excellence."
    },
    {
        img: serviceImg3,
        title: "Genuine Alfa Romeo Parts & Genuine Battery",
        desc: "Our Alfa Romeo Technicians only recommend and use genuine Alfa Romeo parts and genuine car battery for every job with 100 percent customer satisfaction."
    },
    {
        img: serviceImg4,
        title: "Battery Under 15 Minutes & No Hidden Charges",
        desc: "We have one of the best 24/7 onsite battery replacement services in Dubai and Abu Dhabi."
    }
]

const arabicServices = [
    {
        img: serviceImg1,
        title: "دعم عملاء متميز 24/7",
        desc: "يقدم 800BatteryPro خدمات دعم عملاء ألفا روميو على مدار 24/7، ليس هذا فقط بل نضمن لك الحصول على جميع التفاصيل الصحيحة التي يمكنها حل مشكلتك في أسرع وقت."
    },
    {
        img: serviceImg2,
        title: "متخصصون معتمدون في ألفا روميو",
        desc: "لدينا متخصصون معتمدون في ألفا روميو وكلهم خبراء في التعامل مع كل مهمة بطارية سيارة ألفا روميو بدقة وتميز."
    },
    {
        img: serviceImg3,
        title: "قطع غيار ألفا روميو أصلية وبطارية أصلية",
        desc: "يوصي فنيو ألفا روميو لدينا ويستخدمون فقط قطع غيار ألفا روميو الأصلية وبطارية السيارة الأصلية لكل مهمة مع رضا العملاء بنسبة 100٪."
    },
    {
        img: serviceImg4,
        title: "بطارية خلال 15 دقيقة ولا رسوم مخفية",
        desc: "لدينا واحدة من أفضل خدمات استبدال البطارية في الموقع على مدار 24/7 في دبي وأبو ظبي."
    }
]

const englishContent = [
    {
        icons: <FaSitemap />,
        title: "Premium Customer Support",
        desc: "For all Alfa Romeo car battery replacement and advance repairs we offer rapid and premium customer support."
    },
    {
        icons: <FaSitemap />,
        title: "Certified Alfa Romeo Specialists",
        desc: "800BatteryPro has a team of 50+ certified Alfa Romeo Specialists who are experienced in working on all sorts of car battery and advanced repair services."
    },
    {
        icons: <FaSitemap />,
        title: "Using Genuine Alfa Romeo Parts",
        desc: "Our technicians only use OEM-approved parts and genuine car batteries for all replacement services."
    },
    {
        icons: <FaSitemap />,
        title: "Car Battery Under 15 Minutes",
        desc: "If you are stranded anywhere in Dubai and Abu Dhabi we offer instant 24/7 roadside assistance with free battery testing and delivery services on market competitive pricing."
    }
]

const arabicContent = [
    {
        icons: <FaSitemap />,
        title: "دعم عملاء متميز",
        desc: "لجميع خدمات استبدال بطارية سيارة ألفا روميو والإصلاحات المتقدمة، نقدم دعماً سريعاً ومتميزاً للعملاء."
    },
    {
        icons: <FaSitemap />,
        title: "متخصصون معتمدون في ألفا روميو",
        desc: "يضم 800BatteryPro فريقاً من أكثر من 50 متخصصاً معتمداً في ألفا روميو، لديهم خبرة في العمل على جميع أنواع خدمات بطارية السيارات والإصلاح المتقدم."
    },
    {
        icons: <FaSitemap />,
        title: "استخدام قطع غيار ألفا روميو الأصلية",
        desc: "يستخدم فنيونا فقط قطع الغيار المعتمدة من OEM وبطاريات السيارات الأصلية لجميع خدمات الاستبدال."
    },
    {
        icons: <FaSitemap />,
        title: "بطارية السيارة خلال 15 دقيقة",
        desc: "إذا كنت عالقاً في أي مكان في دبي وأبو ظبي، فإننا نقدم مساعدة فورية على الطريق 24/7 مع فحص مجاني للبطارية وخدمات توصيل بأسعار تنافسية في السوق."
    }
]

const englishFaqs = [
    {
        question: "Are Alfa Romeo vehicles expensive to maintain?",
        answer: "Alfa Romeo vehicles are known for their high performance, but they are relatively affordable to maintain compared to other luxury brands. In Dubai, the average car maintenance cost is approximately AED 2,394 per year. However, Alfa Romeo owners typically spend around AED 1,696 annually on maintenance, making it a cost-effective choice for luxury car enthusiasts."
    },
    {
        question: "How often should I change the oil in my Alfa Romeo?",
        answer: "Regular oil changes are essential for maintaining the performance and longevity of your Alfa Romeo. Oil lubricates the engine and removes contaminants that can accumulate over time. At 800BatteryPro, we recommend changing your oil every 7,500 miles or as per the manufacturer's guidelines. Visit our service centres in Dubai or Abu Dhabi for professional oil change services to keep your Alfa Romeo in peak condition."
    },
    {
        question: "How can I tell if my car battery is weak?",
        answer: "Signs of a weak car battery in your Alfa Romeo includes, Slow engine cranking during startup, Dimming or flickering interior lights, Engine failing to start, Swelling or leaking battery casing. If you notice any of these issues, it's crucial to have your battery checked immediately. At 800BatteryPro, we offer regular battery testing and replacement services to ensure you're never stranded due to a dead battery. Contact us for 24/7 roadside assistance at +971 528475675."
    },
    {
        question: "What factors affect the fuel consumption of my Alfa Romeo?",
        answer: "Several factors can influence your Alfa Romeo's fuel efficiency, including, Vehicle weight and aerodynamics, Tyre type, size, pressure, and condition, Transmission type and gear ratios, Driving habits (e.g., aggressive acceleration, excessive speeds), Vehicle age and condition, Fuel quality, and Weather and road conditions. By addressing these factors, you can improve fuel efficiency and reduce overall fuel costs."
    },
    {
        question: "How do I fix an overheating car?",
        answer: "If your Alfa Romeo is overheating, it's essential to address the issue promptly to avoid engine damage. Common causes of overheating includes, low coolant levels, malfunctioning radiator or thermostat, faulty water pump, and clogged radiator hoses. To resolve the issue, refill the coolant, replace faulty components, or flush the cooling system. For professional assistance, visit 800BatteryPro service centres in Dubai or Abu Dhabi."
    },
    {
        question: "How do I know if I need new brakes for my Alfa Romeo?",
        answer: "Signs that your Alfa Romeo may need new brakes includes, Squealing or grinding noises when braking, A soft or spongy brake pedal, Brake warning light on the dashboard. Regular brake inspections are crucial to ensure safety and prevent more severe issues. At 800BatteryPro, our certified technicians provide comprehensive brake services for Alfa Romeo vehicles."
    },
    {
        question: "What are common AC system issues in Alfa Romeo cars?",
        answer: "Common issues with Alfa Romeo AC systems includes, Low refrigerant levels, leading to ineffective cooling, Faulty compressors causing warm air or AC failure, Clogged air filters reduce airflow, Defective condensers affecting cooling efficiency. Given Dubai's harsh climate, a functional AC system is essential. If you experience any of these issues, visit 800BatteryPro for expert AC diagnostics and repairs."
    },
    {
        question: "Do you provide car battery replacement for Alfa Romeo?",
        answer: "Yes, 800BatteryPro offers certified car battery replacement services for Alfa Romeo vehicles. We use genuine OEM-standard parts and branded batteries for all Italian car brands, including Ferrari, Lamborghini, Pagani, Fiat, and Maserati. For 24/7 roadside assistance, contact us at +971 528475675."
    },
    {
        question: "Do you use OEM parts for repairing Italian car brands?",
        answer: "Absolutely. At 800BatteryPro, we exclusively use OEM-standard parts for all repairs on Italian car brands, including Alfa Romeo, Lamborghini, Fiat, Ferrari, Pagani, and Maserati. Customers can inspect the parts before installation to ensure quality and authenticity."
    },
    {
        question: "Who are the best Italian car brand experts in Dubai?",
        answer: "800BatteryPro is recognised as one of the leading service providers for Italian car brands in Dubai and Abu Dhabi. With over 50 certified Italian car specialists and state-of-the-art service centres, we cater to almost every exotic and premium car brand in the UAE."
    },
]

const arabicFaqs = [
    {
        question: "هل سيارات ألفا روميو مكلفة في الصيانة؟",
        answer: "تتميز سيارات ألفا روميو بأدائها العالي، ولكن صيانتها معقولة التكلفة نسبياً مقارنة بالعلامات التجارية الفاخرة الأخرى. في دبي، يبلغ متوسط تكلفة صيانة السيارة حوالي 2,394 درهم إماراتي سنوياً. ومع ذلك، ينفق مالكو ألفا روميو عادةً حوالي 1,696 درهم إماراتي سنوياً على الصيانة، مما يجعلها خياراً فعالاً من حيث التكلفة لعشاق السيارات الفاخرة."
    },
    {
        question: "كم مرة يجب أن أغير الزيت في سيارتي ألفا روميو؟",
        answer: "تغيير الزيت بانتظام ضروري للحفاظ على أداء سيارتك ألفا روميو وطول عمرها. يزيت الزيت المحرك ويزيل الملوثات التي يمكن أن تتراكم بمرور الوقت. في 800BatteryPro، نوصي بتغيير الزيت كل 7,500 ميل أو وفقاً لإرشادات الشركة المصنعة. قم بزيارة مراكز الخدمة لدينا في دبي أو أبو ظبي للحصول على خدمات تغيير زيت احترافية للحفاظ على سيارتك ألفا روميو في أفضل حالة."
    },
    {
        question: "كيف يمكنني معرفة أن بطارية سيارتي ضعيفة؟",
        answer: "علامات ضعف بطارية السيارة في سيارتك ألفا روميو تشمل: تشغيل المحرك البطيء أثناء بدء التشغيل، تعتيم أو وميض الأضواء الداخلية، فشل المحرك في بدء التشغيل، انتفاخ أو تسرب غلاف البطارية. إذا لاحظت أياً من هذه المشكلات، فمن الضروري فحص بطاريتك على الفور. في 800BatteryPro، نقدم خدمات فحص واستبدال منتظمة للبطارية لضمان عدم بقائك عالقاً أبداً بسبب نفاد البطارية. اتصل بنا للحصول على مساعدة على الطريق 24/7 على +971 528475675."
    },
    {
        question: "ما هي العوامل التي تؤثر على استهلاك الوقود في سيارتي ألفا روميو؟",
        answer: "هناك عدة عوامل يمكن أن تؤثر على كفاءة استهلاك الوقود في سيارتك ألفا روميو، بما في ذلك: وزن السيارة والديناميكا الهوائية، نوع الإطار وحجمه وضغطه وحالته، نوع ناقل الحركة ونسب التروس، عادات القيادة (مثل التسارع القوي، السرعات الزائدة)، عمر السيارة وحالتها، جودة الوقود، وظروف الطقس والطرق. من خلال معالجة هذه العوامل، يمكنك تحسين كفاءة استهلاك الوقود وتقليل تكاليف الوقود الإجمالية."
    },
    {
        question: "كيف يمكنني إصلاح سيارة ترتفع حرارتها؟",
        answer: "إذا كانت سيارتك ألفا روميو ترتفع حرارتها، فمن الضروري معالجة المشكلة على الفور لتجنب تلف المحرك. تشمل الأسباب الشائعة لارتفاع الحرارة: انخفاض مستويات سائل التبريد، خلل في الرادياتير أو منظم الحرارة، مضخة مياه معيبة، خراطيم الرادياتير المسدودة. لحل المشكلة، أعد ملء سائل التبريد، واستبدل المكونات المعيبة، أو قم بتنظيف نظام التبريد. للحصول على مساعدة احترافية، قم بزيارة مراكز خدمة 800BatteryPro في دبي أو أبو ظبي."
    },
    {
        question: "كيف أعرف أن سيارتي ألفا روميو بحاجة إلى فرامل جديدة؟",
        answer: "علامات تشير إلى أن سيارتك ألفا روميو قد تحتاج إلى فرامل جديدة تشمل: أصوات صرير أو طحن عند الفرملة، دواسة فرامل ناعمة أو إسفنجية، ضوء تحذير الفرامل على لوحة القيادة. فحوصات الفرامل المنتظمة ضرورية لضمان السلامة ومنع المشكلات الأكثر خطورة. في 800BatteryPro، يقدم فنيونا المعتمدون خدمات فرامل شاملة لسيارات ألفا روميو."
    },
    {
        question: "ما هي مشاكل نظام المكيف الشائعة في سيارات ألفا روميو؟",
        answer: "تشمل المشكلات الشائعة في أنظمة المكيف في سيارات ألفا روميو: انخفاض مستويات سائل التبريد، مما يؤدي إلى تبريد غير فعال، ضواغط معيبة تسبب هواء دافئ أو فشل في المكيف، فلاتر هواء مسدودة تقلل من تدفق الهواء، مكثفات معيبة تؤثر على كفاءة التبريد. نظراً لمناخ دبي القاسي، فإن نظام المكيف الوظيفي ضروري. إذا واجهت أياً من هذه المشكلات، قم بزيارة 800BatteryPro للحصول على تشخيص وإصلاح خبراء للمكيف."
    },
    {
        question: "هل تقدمون خدمة استبدال بطارية السيارة لسيارات ألفا روميو؟",
        answer: "نعم، يقدم 800BatteryPro خدمات استبدال بطارية السيارة المعتمدة لسيارات ألفا روميو. نستخدم قطع غيار معايير OEM أصلية وبطاريات ذات علامات تجارية لجميع ماركات السيارات الإيطالية، بما في ذلك فيراري، لامبورغيني، باجاني، فيات، ومازيراتي. للحصول على مساعدة على الطريق 24/7، اتصل بنا على +971 528475675."
    },
    {
        question: "هل تستخدمون قطع غيار OEM لإصلاح ماركات السيارات الإيطالية؟",
        answer: "بالتأكيد. في 800BatteryPro، نستخدم حصرياً قطع غيار معايير OEM لجميع الإصلاحات على ماركات السيارات الإيطالية، بما في ذلك ألفا روميو، لامبورغيني، فيات، فيراري، باجاني، ومازيراتي. يمكن للعملاء فحص القطع قبل التركيب لضمان الجودة والأصالة."
    },
    {
        question: "من هم أفضل خبراء ماركات السيارات الإيطالية في دبي؟",
        answer: "يُعترف بـ 800BatteryPro كأحد مقدمي الخدمات الرائدين لعلامات السيارات الإيطالية في دبي وأبو ظبي. مع أكثر من 50 متخصصاً معتمداً في السيارات الإيطالية ومراكز خدمة حديثة، نحن نخدم تقريباً كل ماركة سيارات فاخرة ومتميزة في الإمارات."
    },
]

// Locale assignments
const hero = locale === "en" ? heroEnglishContent : locale === "ar" ? heroArabicContent : null
const services = locale === "en" ? englishServices : locale === "ar" ? arabicServices : null
const serviceContent = locale === "ar" ? serviceArabicContent : serviceEnglishContent
const serviceContent1 = locale === "ar" ? serviceArabicContent1 : serviceEnglishContent1
const data = locale === "en" ? englishContent : locale === "ar" ? arabicContent : null
const faqs = locale === "ar" ? arabicFaqs : englishFaqs

const text = locale === "ar"
    ? {
        desc: "موديلات سيارات ألفا روميو التي نخدمها",
        title1: "يشمل جميع",
        title2: "الموديلات والفئات الرئيسية"
    }
    : {
        desc: "Alfa Romeo Car Models We Serve",
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
            desc: "TONALE",
            car: carBrand1,
        },
        {
            desc: "STELVIO",
            car: carBrand2,
        },
        {
            desc: "GIULIA",
            car: carBrand3,
        },
        {
            desc: "JUNIOR",
            car: carBrand4,
        },
        {
            desc: "GIULIA QUANDRIFOGLIO",
            car: carBrand5,
        },
        {
            desc: "4C SPIDER",
            car: carBrand6,
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
      <div className='sticky top-0 '>
        <Hero hero={hero} herobg={herobg} />
      </div>
        <div className='bg-white rounded-t-4xl relative z-10'>
                <Cards />
            <Services />
             <HowItWorks />
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

export default AlfaRomeo