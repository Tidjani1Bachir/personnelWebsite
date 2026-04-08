// ── Navigation ────────────────────────────────────────────────────────────────

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#whatIdo" },
  { name: "My Approach", link: "#myApproach" },
  { name: "Contact", link: "#contact" },
];

export const navItemsArabic = [
  { name: "نبذة عني", link: "#about" },
  { name: "المشاريع", link: "#projects" },
  { name: "خدماتي", link: "#whatIdo" },
  { name: "نهجي", link: "#myApproach" },
  { name: "اتصل بنا", link: "#contact" },
];

export const navItemsFrench = [
  { name: "À propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Services", link: "#whatIdo" },
  { name: "Mon approche", link: "#myApproach" },
  { name: "Contact", link: "#contact" },
];

// ── Grid / Bento Items ────────────────────────────────────────────────────────

export const gridItems = [
  {
    id: 1,
    title: "I deliver fast, reliable full-stack solutions with clear communication at every step.",
    description: "From idea to production — I keep you updated and involved.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available for remote work worldwide — flexible with time zones.",
    description: "Responsive, reliable, and easy to work with.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technologies I use",
    description: "React · Next.js · Node.js · MongoDB · TypeScript · Tailwind CSS",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Security-focused full-stack developer delivering clean, maintainable code.",
    description: "Built for performance, scalability, and long-term use.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },
  {
    id: 5,
    title: "I build production-ready applications — from APIs to modern user interfaces.",
    description: "Web apps, dashboards, SaaS platforms, and desktop apps.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Let’s build your project — fast, scalable, and ready for real users.",
    description: "Contact me and let's get started.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// ── Main Projects ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: "ShopSphere — Secure E-Commerce Solution",
    titleArab: "ShopSphere — متجر إلكتروني آمن",
    titleFrench: "ShopSphere — Solution E-Commerce Sécurisée",

    des: "A high-performance online store featuring secure PayPal payments and an advanced admin dashboard for sales tracking. Built with the MERN stack, it includes professional security features like malware scanning (ClamAV) and encrypted authentication to protect your business and customer data.",
    desArab: "متجر إلكتروني عالي الأداء يتميز بمدفوعات PayPal آمنة ولوحة تحكم متقدمة لتتبع المبيعات. يتضمن ميزات أمان احترافية مثل فحص الملفات وتشفير البيانات لحماية عملك.",
    desFrecnh: "Une boutique en ligne performante avec paiements PayPal sécurisés et tableau de bord de vente. Comprend des fonctions de sécurité avancées comme le scan de malwares et l'authentification cryptée.",

    img: "./shopsphere.png",
    link: "https://shops-frontend.vercel.app",
    tags: ["MERN Stack", "PayPal SDK", "Redux", "Security-Focused"],
  },
  {
    id: 2,
    title: "Business Product Manager (Web & Desktop)",
    titleArab: "مدير المنتجات (ويب وسطح مكتب)",
    titleFrench: "Gestionnaire de Produits (Web & Bureau)",

    des: "A professional inventory management tool that works on both web browsers and as a native desktop application (.exe). Optimized for accuracy with a full automated testing suite, featuring easy PDF exports and cloud image storage for your product catalog.",
    desArab: "أداة احترافية لإدارة المخزون تعمل على المتصفح وتطبيق سطح مكتب. يوفر تصدير ملفات PDF وتخزين سحابي للصور، مع كود مختبر بدقة لضمان استقرار النظام.",
    desFrecnh: "Outil professionnel de gestion d'inventaire disponible sur le web et en application bureau (.exe). Optimisé pour la précision avec export PDF et stockage cloud.",

    img: "./productmanager.png",
    link: "https://product-manager-chi-eosin.vercel.app",
    tags: ["React", "Tauri", "TypeScript", "Automated Testing"],
  },
  {
    id: 3,
    title: "Shoppy — Business Intelligence Dashboard",
    titleArab: "Shoppy — لوحة تحكم ذكاء الأعمال",
    titleFrench: "Shoppy — Tableau de bord Décisionnel",

    des: "An all-in-one visual dashboard designed for data management. It features interactive charts, Kanban boards for task tracking, and a built-in calendar. Fully customizable with dark/light themes and 6 accent colors to match your corporate branding.",
    desArab: "لوحة تحكم مرئية شاملة لإدارة البيانات. تتميز برسوم بيانية تفاعلية، لوحات مهام Kanban، وتقويم مدمج. قابلة للتخصيص بالكامل لتناسب هوية شركتك.",
    desFrecnh: "Tableau de bord visuel pour la gestion de données. Comprend des graphiques interactifs, Kanban et calendrier. Entièrement personnalisable selon votre marque.",

    img: "./adminApp.png",
    link: "https://react-admin-dashboard-rbrf.vercel.app",
    tags: ["React", "Syncfusion", "Tailwind CSS", "Data Analytics"],
  },
  {
  id: 4,
  title: "Brainwave — Modern AI Landing Page",
  titleArab: "Brainwave — صفحة هبوط للذكاء الاصطناعي",
  titleFrench: "Brainwave — Page de Destination IA Moderne",

  des: "A high-fidelity 'Figma-to-Code' implementation of a premium AI SaaS design. This project showcases advanced frontend skills, including complex CSS layouts, interactive dark-mode aesthetics, and ultra-responsive components designed for modern software platforms.",
  desArab: "تطبيق عالي الدقة لتصميم Figma احترافي. يعرض المشروع مهارات متقدمة في واجهة المستخدم (UI/UX)، بما في ذلك تخطيطات CSS المعقدة، والجماليات الحديثة المتوافقة مع منصات الذكاء الاصطناعي.",
  desFrecnh: "Implémentation haute fidélité d'un kit de design Figma premium. Ce projet démontre une maîtrise avancée du UI/UX, avec des mises en page CSS complexes et une esthétique 'Dark Mode' moderne pour les plateformes SaaS IA.",

  img: "./brainwave2.png", 
  link: "https://modern-saas-ptototype.vercel.app/",

  tags: ["React", "Tailwind CSS", "Figma-to-Code", "Framer Motion", "UI/UX"],
}
];

// ── What I Can Do (Services) ──────────────────────────────────────────────────

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Web Applications",
    titleArab: "تطبيقات ويب متكاملة",
    titleFrecn: "Applications Web Full-Stack",
    desc: "I build scalable full-stack applications using MERN stack with secure authentication, REST APIs, and production-ready deployments. Ideal for SaaS, dashboards, and business platforms.",
    descArab: "أبني تطبيقات ويب متكاملة وقابلة للتوسع باستخدام MERN Stack مع مصادقة آمنة وREST APIs.",
    descFrench: "Je développe des applications web complètes et évolutives avec MERN Stack, authentification sécurisée et APIs REST.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Frontend & UI Development",
    titleArab: "تطوير الواجهات",
    titleFrecn: "Développement Frontend",
    desc: "I create fast, responsive, and modern user interfaces using React, Next.js, and Tailwind CSS — optimized for performance and user experience.",
    descArab: "أبني واجهات حديثة وسريعة ومتجاوبة باستخدام React وNext.js.",
    descFrench: "Je conçois des interfaces modernes, rapides et responsives avec React et Next.js.",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  },
  {
    id: 3,
    title: "Desktop Applications (Tauri)",
    titleArab: "تطبيقات سطح المكتب",
    titleFrecn: "Applications Desktop",
    desc: "I build cross-platform desktop applications using Tauri — lightweight, secure, and distributed as native installers (.exe/.msi).",
    descArab: "أبني تطبيقات سطح مكتب متعددة المنصات باستخدام Tauri.",
    descFrench: "Je développe des applications desktop multiplateformes avec Tauri.",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 4,
    title: "Secure Backend & API Development",
    titleArab: "تطوير الواجهة الخلفية والخدمات",
    titleFrecn: "Développement Backend & API",
    desc: "I build high-performance REST APIs and secure database designs (SQL/NoSQL). I specialize in secure user authentication, real-time data syncing, and professional PayPal payment integration.",
    descArab: "أبني برمجيات خلفية آمنة وREST APIs عالية الأداء. أتخصص في المصادقة الآمنة، وتصميم قواعد البيانات، وربط بوابات الدفع مثل PayPal.",
    descFrench: "Je développe des APIs REST performantes et des bases de données sécurisées. Expert en authentification, synchronisation de données et intégration de paiements PayPal.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg", // Ensure you have this icon or reuse exp2.svg
  },
];

// ── My Approach ───────────────────────────────────────────────────────────────

export const approach = [
  {
    id: 1,
    phase: "Step 1",
    title: "Understand Your Requirements",
    desc: "I start by understanding your goals, business needs, and technical requirements to ensure the right solution from the beginning.",
  },
  {
    id: 2,
    phase: "Step 2",
    title: "Plan & Communicate",
    desc: "I keep you updated with clear communication, progress tracking, and fast feedback loops.",
  },
  {
    id: 3,
    phase: "Step 3",
    title: "Build & Test",
    desc: "I develop clean, scalable, and tested code to ensure reliability and performance.",
  },
  {
    id: 4,
    phase: "Step 4",
    title: "Deliver & Support",
    desc: "I deliver production-ready applications and provide support for improvements and scaling.",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials = [
  {
    quote:
      "Delivered exactly what we needed — fast, clean, and reliable. Communication was excellent throughout the project.",
    name: "Client",
    title: "E-Commerce Project",
  },
  {
    quote:
      "Very professional developer. The application was delivered on time and exceeded expectations.",
    name: "Client",
    title: "Dashboard Project",
  },
  {
    quote:
      "Great experience working together. Highly recommended for full-stack development projects.",
    name: "Client",
    title: "Web & Desktop App",
  },
];

// ── Companies / Technologies ──────────────────────────────────────────────────

export const companies = [
  { id: 1, name: "MongoDB", img: "./cloud.svg", nameImg: "./cloudName.svg" },
  { id: 2, name: "Vercel", img: "./app.svg", nameImg: "./appName.svg" },
  { id: 3, name: "Render", img: "./host.svg", nameImg: "./hostName.svg" },
  { id: 4, name: "Cloudinary", img: "./s.svg", nameImg: "./streamName.svg" },
  { id: 5, name: "GitHub", img: "./dock.svg", nameImg: "./dockerName.svg" },
];

// ── Products2 (Parallax Section — UI Design Showcase) ────────────────────────

export const products2 = [
  { title: "Moonbeam", link: "#", thumbnail: "./restraunt1.png" },
  { title: "Cursor", link: "#", thumbnail: "./Ecomeerce Shop For serveral Projects.png" },
  { title: "Rogue", link: "#", thumbnail: "./restraunt1.png" },
  { title: "Editorially", link: "#", thumbnail: "./SimpleBootstrap.png" },
  { title: "Editrix AI", link: "#", thumbnail: "./Book-store.png" },
  { title: "Pixel Perfect", link: "#", thumbnail: "./Cake-shope-scss.png" },
  { title: "Algochurn", link: "#", thumbnail: "./AdvancedEcomercceCite.png" },
  { title: "Aceternity UI", link: "#", thumbnail: "./booking housees.png" },
  { title: "Tailwind Master Kit", link: "#", thumbnail: "./car repair services.png" },
  { title: "SmartBridge", link: "#", thumbnail: "./coffe shop.png" },
  { title: "Renderwork Studio", link: "#", thumbnail: "./ecommerce--shop.png" },
  { title: "Creme Digital", link: "#", thumbnail: "./building--app.png" },
  { title: "Golden Bells Academy", link: "#", thumbnail: "./carpenter--shop.png" },
  { title: "Invoker Labs", link: "#", thumbnail: "./car repaired shop.png" },
  { title: "E Free Invoice", link: "#", thumbnail: "./Mobile App Presentation.png" },
  { title: "Aceternity UI 2", link: "#", thumbnail: "./admin-dashboard---2.png" },
  { title: "Tailwind Master Kit 2", link: "#", thumbnail: "./Book-store.png" },
  { title: "SmartBridge 2", link: "#", thumbnail: "./building--app.png" },
  { title: "Renderwork Studio 2", link: "#", thumbnail: "./car app using api to fetch cars.png" },
  { title: "Creme Digital 2", link: "#", thumbnail: "./ecommerce--shop.png" },
  { title: "Golden Bells Academy 2", link: "#", thumbnail: "./fast food delivery.png" },
  { title: "Invoker Labs 2", link: "#", thumbnail: "./carpenter--shop.png" },
  { title: "E Free Invoice 2", link: "#", thumbnail: "./graphic designer 22 potfolio.png" },
  { title: "HooBankDesign", link: "#", thumbnail: "./carpenter--shop.png" },
  { title: "Invoker Labs 3", link: "#", thumbnail: "./ModernPortfolio Website.png" },
  { title: "E Free Invoice 3", link: "#", thumbnail: "./mehcanics store.png" },
  { title: "Aceternity UI 3", link: "#", thumbnail: "./ui for Platform to showcase a profuct of company.png" },
  { title: "Tailwind Master Kit 3", link: "#", thumbnail: "./restraunt1.png" },
  { title: "SmartBridge 3", link: "#", thumbnail: "./rent car 2.png" },
  { title: "Renderwork Studio 3", link: "#", thumbnail: "./photo grapher potfolio.png" },
  { title: "Creme Digital 3", link: "#", thumbnail: "./painting shop.png" },
  { title: "Golden Bells Academy 3", link: "#", thumbnail: "./Modern Jquery potfolio.png" },
  { title: "Invoker Labs 4", link: "#", thumbnail: "./Kasper.png" },
  { title: "E Free Invoice 4", link: "#", thumbnail: "./Book-store.png" },
];

// ── Social Media ──────────────────────────────────────────────────────────────

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/Tidjani1Bachir",
  },
  {
    id: 2,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/tidjani-bachir-b27861226/",
  },
];