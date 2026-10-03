// All copy and asset paths (layout cloned from invozone.com, rebranded to BXTrack).

/** Normalise a path from the original site into a local route: "/ai/hire/" -> "/ai/hire". */
export const url = (path: string) => {
  const p = path.replace(/^https?:\/\/[^/]*invozone\.com/, "").replace(/\/+$/, "");
  return p || "/";
};
export const img = (name: string) => `/images/${name}`;

export type Link = { label: string; href: string };
export type LinkGroup = { title: string; links: Link[] };

/* ---------------- Header ---------------- */

export const recognizedBy = [
  { alt: "Trustpilot", src: img("recognized-trustpilot.svg"), row: "top" },
  { alt: "DesignRush", src: img("recognized-designrush.svg"), row: "top" },
  { alt: "Clutch", src: img("recognized-clutch.svg"), row: "bottom" },
  { alt: "GoodFirms", src: img("recognized-goodfirms.svg"), row: "bottom" },
  { alt: "Google", src: img("recognized-google.svg"), row: "bottom" },
] as const;

const l = (label: string, path: string): Link => ({ label, href: url(path) });

export const hireDevsMenu: LinkGroup[] = [
  {
    title: "AI Developers",
    links: [
      l("ML Developers", "/ai/hire/ml-developers/"),
      l("LLM Developers", "/ai/hire/llm-developers/"),
      l("Gen AI Developers", "/ai/hire/gen-ai-developers/"),
      l("TensorFlow Developers", "/ai/hire/tensorflow-developers/"),
      l("Pytorch Developers", "/ai/hire/pytorch-developers/"),
    ],
  },
  {
    title: "Front-End Developers",
    links: [
      l("React.js Developers", "/hire-react-js-developers/"),
      l("Vue.js Developers", "/hire-vue-js-developers/"),
      l("Angular Developers", "/hire-angular-developers/"),
      l("JavaScript Developers", "/hire-javascript-developers/"),
      l("TypeScript Developers", "/hire-typescript-developers/"),
    ],
  },
  {
    title: "Back-End Developers",
    links: [
      l(".Net Developers", "/hire-dot-net-developers/"),
      l("Java Developers", "/hire-java-developers/"),
      l("Node.js Developers", "/hire-node-js-developer/"),
      l("Python Developers", "/hire-python-developers/"),
      l("C++ Developers", "/hire-c-plus-plus-developers/"),
    ],
  },
  {
    title: "Full Stack Developers",
    links: [
      l("MEAN Stack Developers", "/hire-mean-stack-developers/"),
      l("MERN Stack Developers", "/hire-mern-stack-developers/"),
      l("Drupal Developers", "/hire-drupal-developers/"),
      l("Bubble Developers", "/hire-bubble-developers/"),
      l("Unreal Engine Developers", "/hire-unreal-engine-developers/"),
    ],
  },
  {
    title: "By Role",
    links: [
      l("Web Developers", "/hire-web-developers/"),
      l("SAAS Developers", "/hire-saas-developers/"),
      l("Off-Shore Developers", "/hire-offshore-developers/"),
      l("Testing Consultants", "/hire-penetration-testing-consultants/"),
      l("Data Engineers", "/hire-data-engineers/"),
    ],
  },
];

export const servicesMenu: LinkGroup[] = [
  {
    title: "AI Development",
    links: [
      l("Agent as a Service", "/ai/agent-as-a-service/"),
      l("AI Product Development", "/ai/ai-product-development/"),
      l("LLM Development", "/ai/llm-development-services/"),
      l("Agentic AI", "/ai/agentic-ai/"),
      l("Computer Vision & OCR", "/ai/computer-vision-services/"),
      l("Chatbot Development", "/ai/chatbot-development/"),
      l("Conversational AI", "/ai/conversational/"),
    ],
  },
  {
    title: "Software Development",
    links: [
      l("Custom Software Development", "/software-development-services/custom/"),
      l("Product Development", "/software-development-services/product/"),
      l("MVP Development", "/software-development-services/mvp/"),
      l("Application Modernisation", "/software-development-services/application-modernization/"),
      l("Enterprise Software", "/software-development-services/enterprise/"),
      l("IOT Development", "/software-development-services/iot/"),
      l("Software Project Management", "/software-development-services/project-management/"),
    ],
  },
  {
    title: "Mobile App Development",
    links: [
      l("Android Application", "/mobile-app-development/android/"),
      l("iOS Application", "/mobile-app-development/ios/"),
      l("Hybrid Application", "/mobile-app-development/hybrid/"),
      l("Grocery Delivery Application", "/mobile-app-development/grocery/"),
      l("Payment Application", "/mobile-app-development/payment/"),
      l("Ride-Hailing Application", "/mobile-app-development/taxi/"),
      l("Food Delivery Application", "/mobile-app-development/food/"),
    ],
  },
  {
    title: "DevOps & Cloud",
    links: [
      l("Containerization", "/devops/containerization-and-orchestration-services/"),
      l("IT Infrastructure", "/devops/it-infrastructure/"),
      l("Monitoring & Logging", "/devops/monitoring-and-logging/"),
      l("Cloud Consulting", "/cloud-consulting-services/"),
      l("Cyber Security", "/cyber-security-services/"),
    ],
  },
  {
    title: "Others",
    links: [
      l("UI/UX Design", "/ui-ux-design/"),
      l("CX Optimization", "/cx-optimization-services/"),
      l("Big Data", "/big-data-services/"),
      l("Data Scraping", "/data-scraping/"),
      l("BlockChain", "/blockchain-development-services/"),
      l("Technical Support", "/technical-support-services/"),
    ],
  },
];

export const industriesMenu = [
  { title: "Healthcare", desc: "Advanced technology for healthcare excellence.", href: url("/healthcare/"), icon: img("industry-healthcare.svg") },
  { title: "Fintech", desc: "Financial technology solutions for modern markets.", href: url("/fintech/"), icon: img("industry-fintech.svg") },
  { title: "Education", desc: "We promote education through innovative technology.", href: url("/education/"), icon: img("industry-education.svg") },
  { title: "E-Commerce", desc: "We enhance online commerce with tailored solutions.", href: url("/e-commerce/"), icon: img("industry-ecommerce.svg") },
  { title: "Food & Groceries", desc: "Tech solutions revolutionizing food and grocery.", href: url("/food-groceries/"), icon: img("industry-food.svg") },
  { title: "Travel & Tourism", desc: "Digital solutions for travel and hospitality.", href: url("/travel-tourism/"), icon: img("industry-travel.svg") },
  { title: "Insurance", desc: "Innovative insurance technology solutions.", href: url("/insurance/"), icon: img("industry-insurance.svg") },
  { title: "On-Demand", desc: "Instant solutions tailored to your needs.", href: url("/on-demand-services/"), icon: img("industry-on-demand.svg") },
];

export const companyMenu: Link[][] = [
  [l("About Us", "/about-us/"), l("Podcasts", "/podcast/"), l("Events", "/events/"), l("Blogs", "/blog/"), l("Guides", "/guides/")],
  [l("Pricing", "/pricing/"), l("Careers", "/careers/"), l("Technologies", "/technologies/"), l("Reviews", "/reviews/")],
];

/* ---------------- Hero ---------------- */

export const specializations = [
  "AI / ML Developers",
  "Front-End Developers",
  "Back-End Developers",
  "Full Stack Developers",
  "Mobile App Developers",
  "SaaS Developers",
  "Data Engineers",
  "QA Engineers",
  "UI/UX Designers",
  "Product Managers",
];

export const clientLogos = [
  "image_374_4b11bd505c.svg",
  "Screenshot_2026_03_10_at_16_40_46_1_c35907c698.svg",
  "image_373_c3233ebe3d.svg",
  "image_381_9b30e154dd.svg",
  "Group_55_e3680b6d13.svg",
  "image_375_978f68123b.svg",
  "image_372_44edaf1df0.svg",
  "Layer_0_1_8_1087e10eee.svg",
  "Layer_0_1_9_d1905e7fbb.svg",
  "image_369_8ce8c94288.svg",
].map((n, i) => ({ src: img(n), alt: `Client logo ${i + 1}` }));

/* ---------------- Industries ---------------- */

export const industries = [
  { title: "HealthTech", desc: "Hire healthcare software developers your patients and staff can rely on.", href: url("/healthcare/"), bg: "Group_1707479579_04dce60c58.webp" },
  { title: "Fintech", desc: "Build secure financial products by hiring expert fintech developers.", href: url("/fintech/"), bg: "Group_1707479580_c16118ad7d.webp" },
  { title: "Food & Groceries", desc: "Food and grocery app developers to build apps that keep orders flowing.", href: url("/food-groceries/"), bg: "Group_1707479581_3a2d857d10.webp" },
  { title: "E-Commerce", desc: "Hire ecommerce developers to expand your business and drive online growth.", href: url("/e-commerce/"), bg: "Chat_GPT_Image_May_8_2026_01_59_43_PM_2_a9b02d1d75.webp" },
  { title: "Travel & Tourism", desc: "Hire travel developers to build platforms users trust, book, and return to.", href: url("/travel-tourism/"), bg: "Rectangle_40317_3a3e1abcef.webp" },
  { title: "EdTech", desc: "Top Edtech developers to build digital tools for better learning outcomes.", href: url("/education/"), bg: "Rectangle_40318_5267e04ba8.webp" },
  { title: "Real Estate", desc: "Hire real estate developers to streamline property management.", href: url("/contact-us/"), bg: "Rectangle_40319_39ca553dfc.webp" },
  { title: "On Demand", desc: "Get dedicated developers for any on-demand product you need.", href: url("/on-demand-services/"), bg: "Rectangle_40320_a8dfeb0648.webp" },
].map((c) => ({ ...c, bg: img(c.bg) }));

/* ---------------- Services ---------------- */

type SubService = { name: string; href?: string };
export const services: {
  title: string;
  desc: string;
  image: string;
  learnMore: string;
  items: SubService[];
}[] = [
  {
    title: "AI & Data Innovation",
    desc: "Build Intelligent Products Using AI, Machine Learning, And Advanced Data Engineering.",
    image: img("Frame_1991422830_9c60cdfcbb.webp"),
    learnMore: url("/ai/"),
    items: [
      { name: "Agent As a Service", href: url("/ai/agent-as-a-service/") },
      { name: "AI Product Development", href: url("/ai/ai-product-development/") },
      { name: "Agentic AI", href: url("/ai/agentic-ai/") },
      { name: "Computer Vision & OCR", href: url("/ai/computer-vision-services/") },
    ],
  },
  {
    title: "Custom Software Development",
    desc: "Develop Secure, Scalable Custom Software And Web Applications According To Your Business Needs.",
    image: img("Rectangle_40327_442ac737fa.webp"),
    learnMore: url("/software-development-services/custom/"),
    items: [
      { name: "MVP Development", href: url("/software-development-services/mvp/") },
      { name: "Application Modernization", href: url("/software-development-services/application-modernization/") },
      { name: "Enterprise Software Development", href: url("/software-development-services/enterprise/") },
      { name: "Software Project Management", href: url("/software-development-services/project-management/") },
    ],
  },
  {
    title: "Strategy & Consultation",
    desc: "Guide Technology Decisions With Expert Consulting, Architecture Planning, And Product Strategy.",
    image: img("Frame_1991422831_f61d8caed6.webp"),
    learnMore: url("/contact-us/"),
    items: [
      { name: "AI Strategy & Consulting", href: url("/ai/consulting-services/") },
      { name: "Cloud Consulting", href: url("/cloud-consulting-services/") },
      { name: "Web Development Consulting", href: url("/web-development-services/consulting/") },
      { name: "Product Strategy" },
    ],
  },
  {
    title: "Cloud & DevOps",
    desc: "Scale Infrastructure With Cloud Engineering, DevOps Automation, And Reliable CI/CD Pipelines.",
    image: img("Frame_1991422832_ce4f321779.webp"),
    learnMore: url("/devops/"),
    items: [
      { name: "IT Infrastructure", href: url("/devops/it-infrastructure/") },
      { name: "Monitoring & Logging", href: url("/devops/monitoring-and-logging/") },
      { name: "Big Data", href: url("/big-data-services/") },
      { name: "Cyber Security", href: url("/cyber-security-services/") },
    ],
  },
  {
    title: "QA & Audits",
    desc: "Protect Product Quality With Expert Software Testing, QA Automation And Performance Audits.",
    image: img("Rectangle_40328_50c3c00bd9.webp"),
    learnMore: url("/software-development-services/quality-assurance/"),
    items: [
      { name: "Software Quality Assurance", href: url("/software-development-services/quality-assurance/") },
      { name: "Performance Optimization" },
      { name: "Process Optimization" },
      { name: "Penetration Testing", href: url("/hire-penetration-testing-consultants/") },
    ],
  },
];

/* ---------------- Stats ---------------- */

export const stats = [
  { label: "Vetted Engineers", value: "1000+" },
  { label: "Average Match Time", value: "24", unit: "Hours" },
  { label: "Tech Talent", value: "TOP 3%" },
  { label: "Industry Experience", value: "12+", unit: "Years" },
];

export const trustLogos = [
  { src: img("4j_LL_68_4fe597d07c.svg"), alt: "DesignRush" },
  { src: img("Services_Categories_c5f1925091.svg"), alt: "GoodFirms" },
  { src: img("Group_52_8a455942fc.svg"), alt: "Trustpilot" },
  { src: img("Group_53_aed08fbd87.svg"), alt: "Google" },
  { src: img("Group_56_fba1342478.svg"), alt: "Clutch" },
];

/* ---------------- Tech stack ---------------- */

const t = (name: string, file: string) => ({ name, icon: img(file) });
export const techStacks: { tab: string; items: { name: string; icon: string }[] }[] = [
  {
    tab: "AI & ML",
    items: [
      t("Tensorflow", "Mask_group_61_5a8a59d7bb.svg"), t("Keras", "Mask_group_26_64ee75390a.svg"),
      t("Pytorch", "Mask_group_49_73c670d284.svg"), t("Lisp", "Mask_group_9e3e298a1e.svg"),
      t("NTKL", "Mask_group_34_630f07a5ca.svg"), t("Spacy", "Mask_group_58_051b5ac148.svg"),
      t("Open-ai", "Mask_group_40_6029de2f93.svg"), t("Ploty", "image_29_21354b97d2.svg"),
      t("Matplotlib", "Mask_group_30_0e43e7f16e.svg"), t("Pandas", "Mask_group_45_0ef2cdfd6f.svg"),
      t("Opencv", "Mask_group_41_5ac74a1383.svg"), t("Numpy", "Mask_group_37_5807d2951c.svg"),
    ],
  },
  {
    tab: "Front-End",
    items: [
      t("HTML", "Mask_group_17_ad882713c2.svg"), t("CSS", "Mask_group_6_0da85377ce.svg"),
      t("Javascript", "Mask_group_24_64f1e0fa79.svg"), t("SaaS", "Mask_group_56_688475039e.svg"),
      t("React JS", "Mask_group_50_c93c4841d2.svg"), t("Vue JS", "Mask_group_63_d9105ea78f.svg"),
      t("Angular", "Mask_group_2_df8f915dc8.svg"), t("Meteor JS", "Mask_group_31_6747d43108.svg"),
      t("Nuxt JS", "Mask_group_38_529e7ff082.svg"), t("WebGL", "Mask_group_65_55f5a780f2.svg"),
    ],
  },
  {
    tab: "Back-End",
    items: [
      t("Node-js", "node_js_ba6f19e132.svg"), t("Python", "python_9828a276c4.svg"),
      t("Elixir", "elixir_617ae7f1a2.svg"), t("Ruby", "ruby_632c73bf20.svg"),
      t("Java", "java_af6208f7f7.svg"), t("php", "php_1d3b64b85d.svg"),
      t("Golang", "golang_897a5b704b.svg"), t("C#", "c_e3bc66767f.svg"),
      t("C++", "C_4cd508eb6d.svg"), t("Rust", "rust_ae892f1b03.svg"),
      t("Nest-js", "nest_js_347dd24c27.svg"), t(".Net Core", "dot_net_core_5afd52a4f6.svg"),
    ],
  },
  {
    tab: "Low/No Code",
    items: [
      t("Shopify", "Mask_group_57_a25c1b4ea5.svg"), t("Wordpress", "Mask_group_67_8bd99d404b.svg"),
      t("Strapi", "Mask_group_59_3f41747aac.svg"), t("Bubble.io", "Mask_group_70_53054090d2.svg"),
      t("Builder.io", "Mask_group_71_a166f6744a.svg"), t("Zoho", "Mask_group_69_2a490c7292.svg"),
      t("Zapier", "Mask_group_68_9709da4b29.svg"), t("Webflow", "Mask_group_64_f72b309b77.svg"),
      t("Wix", "Mask_group_66_c9f9f0ba42.svg"), t("Wizard's Toolkit", "62_5349aee1ab.svg"),
    ],
  },
  {
    tab: "Database",
    items: [
      t("Firebase", "firebase_c6c4691af1.svg"), t("Mongodb", "mangodb_0b552dbfc4.svg"),
      t("Postgresql", "postgresql_018ca56509.svg"), t("Couch-db", "couch_db_9d0e36ccfe.svg"),
      t("Db", "db_469cb3200a.svg"), t("Sqlite", "sqlite_9fc822116d.svg"),
      t("Ms-sql", "ms_sql_c9279e2570.svg"), t("Aws-dynamodb", "aws_dynamodb_8ce325843f.svg"),
      t("Oracle", "oracle_6be07ed081.svg"), t("Mysql", "mysql_99960cd0a3.svg"),
      t("Redis", "redis_8ef174bc41.svg"),
    ],
  },
  {
    tab: "DevOps",
    items: [
      t("Aws", "Mask_group_1_716b4e2e92.svg"), t("Gcp", "Mask_group_15_65ba1959e0.svg"),
      t("Azure", "Mask_group_3_79a3725f15.svg"), t("Ibm-cloud", "Mask_group_19_8781b97904.svg"),
      t("Digital-ocean", "Mask_group_9_6bfce2475c.svg"), t("Oracle-cloud", "Mask_group_42_7401e31b3a.svg"),
      t("Puppet", "Mask_group_47_8ffa861d43.svg"), t("Kubernetes", "Mask_group_28_9cb2e449f5.svg"),
      t("Docker", "Mask_group_10_1be6abb5a3.svg"), t("Jenkins", "Mask_group_25_d89d554a77.svg"),
      t("Chef", "Mask_group_7_558453bb6f.svg"), t("Terraform", "Mask_group_62_d9eb76d12c.svg"),
    ],
  },
  {
    tab: "Mobile",
    items: [
      t("Android", "android_ce04718bfc.svg"), t("Kotlin", "Mask_group_27_56cfcc433d.svg"),
      t("Swift", "Mask_group_60_e37f871f35.svg"), t("Objective-c", "Mask_group_39_32e642f0b4.svg"),
      t("React-Native", "Mask_group_51_b75d5583be.svg"), t("Ionic", "Mask_group_20_ff0a1d4c97.svg"),
      t("Flutter", "Mask_group_14_a2da91a4de.svg"), t("IOs", "Mask_group_72_ab44e0e6c2.svg"),
      t("PWA", "Mask_group_44_03aa04ef5a.svg"),
    ],
  },
];

/* ---------------- Testimonials ---------------- */

export const testimonials = [
  { name: "Peter Loeb", role: "CTO", quote: "I'd describe InvoZone as a reliable and proactive technology partner.", image: "Rectangle_40122_5d283e7674.webp", video: "testimonial-peter-loeb.webm" },
  { name: "Lee Scott", role: "Engineering Director", quote: "AI-enabled engineers who made our product faster, smarter and more stable", image: "Rectangle_40123_d506c51489.webp", video: "testimonial-lee-scott.webm" },
  { name: "Roberto Hisaca Castro", role: "Director of Software Development", quote: "We’re very happy to have InvoZone as part of the team. Our managers, investors, and I have all been really pleased with their professionalism and the quality they bring to the work.", image: "Client_Testimonial_c9dbf5b3da.jpg", video: "testimonial-roberto-castro.webm" },
  { name: "Mark Fzier", role: "Head of Engineering", quote: "InvoZone brought structured engineering and reliability our healthcare platform truly needed.", image: "Rectangle_40124_ee4df43127.webp", video: "testimonial-mark-fzier.webm" },
  { name: "Oliver Wolff", role: "Product Manager, Kinde", quote: "Communication was top-notch and the code quality was excellent.", image: "Gemini_Generated_Image_pyt5ijpyt5ijpyt5_8700270952.webp", video: "testimonial-oliver-wolff.webm" },
  { name: "Ron Zabel", role: "Founder & CEO, Cryptool", quote: "InvoZone stood out from eight development teams with strong planning and the ability to support our modular MVP roadmap.", image: "Chat_GPT_Image_Jun_3_2026_03_35_32_PM_e2463516ae.webp", video: "testimonial-ron-zabel.webm" },
  { name: "Ryan Carter", role: "Head of Engineering", quote: "We were nervous about outsourcing development overseas, but InvoZone proved that exceptional quality exists.", image: "Kindle_s_1e9a957dac.webp", video: "testimonial-ryan-carter.webm" },
  { name: "David Smith", role: "CEO & Co-Founder - Easyfill", quote: "A focused team with strong partnership and technology support we continue to build on year after year", image: "David_Smith_1_48be27971d.webp", video: "testimonial-david-smith.webm" },
  { name: "Chris Dominguez", role: "CEO, StorageChain LLC", quote: "InvoZone has felt like a true technology partner. The team is diligent and continues to support our product.", image: "122_6ff538a1cd.webp", video: "testimonial-chris-dominguez.webm" },
].map((x) => ({ ...x, image: img(x.image), video: `/videos/${x.video}` }));

/* ---------------- Efficiency + Team ---------------- */

export const features = [
  { title: "3-5x Output Per Engineer", desc: "AI-native workflows that eliminate grunt work.", lottie: "/lottie/development_8344205738.json" },
  { title: "First PR< 72 Hours", desc: "Start shipping immediately with no onboarding drag.", lottie: "/lottie/handshake_f4b52222f0.json" },
  { title: "Prompt To Prototype In Hours", desc: "Turn ideas into working prototypes within hours.", lottie: "/lottie/teleprompter_1_dc9e3f5e36.json" },
  { title: "Domain Expert Engineers", desc: "Deep industry knowledge with zero ramp time.", lottie: "/lottie/domain_1_89bbdea63c.json" },
];

export const team = [
  { role: "AI/ML Engineers", photo: "Rectangle_40144_1e30d115a7.webp", bg: "Rectangle_40131_3573ea72c3.svg" },
  { role: "Software Developers", photo: "Rectangle_40140_d055c590ce.webp", bg: "Rectangle_40127_0322740967.svg" },
  { role: "QA Engineers", photo: "Rectangle_40141_06f6502ec6.webp", bg: "Rectangle_40128_6995c98fd7.svg" },
  { role: "UI/UX Designers", photo: "Rectangle_40142_56b5ae7497.webp", bg: "Rectangle_40129_888f9f4c26.svg" },
  { role: "Project Managers", photo: "Rectangle_40143_03c522dad3.webp", bg: "Rectangle_40130_813441d689.svg" },
].map((x) => ({ ...x, photo: img(x.photo), bg: img(x.bg) }));

/* ---------------- Process ---------------- */

export const steps = [
  { title: "Tell Us What You Need", desc: "One quick conversation. Tell us about your team, tech stack, and goals." },
  { title: "Build Your Match Within 24 Hours", desc: "We match AI developers to your stack and workflow. You review them." },
  { title: "Start Shipping Immediately", desc: "Your engineer is embedded, onboarded and contributing." },
];

/* ---------------- Contact form awards ---------------- */

export const awards = [
  { src: "good_firms_top_web_development_company-d8afdd3bf52e7c99198027728e6f7981.svg", alt: "Top Web Development Companies in Mississauga" },
  { src: "design_rush_best_ar_vr_agency-9dafbc7d12a5020f1e21c448e6dc75fe.svg", alt: "Software Development Company - Design Rush" },
  { src: "featured_on_upcity-4f67e820876fba8ecad1a7712b52782f.svg", alt: "Top Software Development Companies in Toronto, ON" },
  { src: "top_firms_top_software_development_companies-a83da71d8cdc0867a3a1cd5a4aafb926.svg", alt: "Best Software Development Companies In 2021" },
  { src: "fastest_growing_app_development_company_2021-988b8e06a4ca171178eb147dc7aa5a67.svg", alt: "Fastest growing app development companies" },
  { src: "tech_reviewer_top_software_developers_2020-562eec793e356113a009f4aed5e48ded.svg", alt: "Top 100+ Software Development Companies in 2021" },
  { src: "top_developers_2021-dd23c99461906b1c45b32e53a654c846.svg", alt: "Finest Mobile App Developers in Canada - March 2021" },
  { src: "selected_firms_top_ecommerce_development_company-7b6f23046d5a69342336c8c123021606.svg", alt: "Top eCommerce Development Companies in the USA" },
  { src: "superb_company_in_2023-46c0b277a82d8f2079ec135b287577c7.svg", alt: "Top Web Development Companies" },
  { src: "Tawk_to_partner_2_ddfb96b759.webp", alt: "Tawk.to partner" },
  { src: "Frame_1991422785_5fe4e787e9.svg", alt: "Award badge" },
  { src: "Frame_1991422784_4197d311c7.svg", alt: "Award badge" },
  { src: "Frame_1991422786_83fbdd387d.svg", alt: "Award badge" },
].map((x) => ({ ...x, src: img(x.src) }));

/* ---------------- Footer ---------------- */

export const footerColumns: LinkGroup[] = [
  {
    title: "Services",
    links: [
      l("AI Development Services", "/ai/"),
      l("Software Development", "/software-development-services/"),
      l("Web Development", "/web-development-services/"),
      l("Mobile App Development", "/mobile-app-development/"),
      l("DevOps Services", "/devops/"),
      l("Web Application Development", "/web-application-development-services/"),
      l("UI/UX Designs", "/ui-ux-design/"),
      l("Product Engineering", "/product-engineering/"),
    ],
  },
  {
    title: "Hire Developers",
    links: [
      l("AI Developers", "/ai/hire/"),
      l("Full Stack Developers", "/hire-full-stack-developers/"),
      l("Front End Developers", "/hire-frontend-developers/"),
      l("Back End Developers", "/hire-backend-developers/"),
      l("Mobile App Developers", "/hire-mobile-app-developers/"),
      l("SaaS Developers", "/hire-saas-developers/"),
      l("Data Engineers", "/hire-data-engineers/"),
      l("Product Managers", "/hire-product-manager/"),
    ],
  },
  {
    title: "How We Engage",
    links: [
      l("Staff Augmentation", "/staff-augmentation-company/"),
      l("Dedicated Teams", "/dedicated-development-team/"),
      l("Fixed Price", "/fixed-price/"),
    ],
  },
  {
    title: "Company",
    links: [
      l("About Us", "/about-us/"),
      l("Portfolio", "/portfolio/"),
      l("Careers", "/careers/"),
      l("Podcasts", "/podcast/"),
      l("Events", "/events/"),
      l("Pricing", "/pricing/"),
      l("Blog", "/blog/"),
      l("Reviews", "/reviews/"),
    ],
  },
];

export const reviewPlatforms = [
  { name: "Clutch", src: img("Group_1000005708_c162021cee.svg") },
  { name: "Goodfirms", src: img("Group_1000005711_d7a4bce3b5.svg") },
  { name: "G2", src: img("Group_1000005709_6f4a5abefb.svg") },
  { name: "Trustpilot", src: img("Group_1000005710_930415671c.svg") },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/bxtrack", src: img("linked_in_1e48b7cbdb.svg") },
  { name: "X (Twitter)", href: "https://twitter.com/bxtrack", src: img("twitter_d51ffbc4e5.svg") },
  { name: "Instagram", href: "https://www.instagram.com/bxtrack", src: img("instagram_459d2e6756.svg") },
];

export const office = {
  flag: img("Screenshot_2026_05_08_at_3_10_14_PM_1_9481d23980.svg"),
  country: "Pakistan",
  address: "2nd Floor, Gondal Arcade, in front of HBL, 4th Road, Rawalpindi, Pakistan",
  map: "https://goo.gl/maps/ywAZNjeGniGqXTTA8",
};

export const legalLinks: Link[] = [
  l("Sitemap", "/sitemap/"),
  l("Privacy Policy", "/privacy-policy/"),
  l("IMS Policy", "/integrated-management-system-policy/"),
  l("Terms & Conditions", "/terms-conditions/"),
];

export const contact = {
  phone: "+92 (51) 889 7098",
  phoneHref: "tel:+92518897098",
  email: "info@bxtrack.com",
  phoneIcon: img("Group_1000005707_13cfe22692.svg"),
  emailIcon: img("Group_1000005707_1_223f1deba8.svg"),
};
