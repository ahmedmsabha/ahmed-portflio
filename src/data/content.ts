export type Text = { en: string; ar: string };

const s = (en: string, ar: string): Text => ({ en, ar });

export const schools = [
  {
    degree: s("B.Sc. Computer Engineering", "بكالوريوس هندسة حاسوب"),
    school: s("Islamic University of Gaza", "الجامعة الإسلامية بغزة"),
    dates: s("Sep 2022 — Present", "أيلول 2022 — حتى الآن"),
    note: s("In progress", "قيد الدراسة"),
  },
  {
    degree: s("B.Sc. Computer Science", "بكالوريوس علوم حاسوب"),
    school: s("University of the People", "جامعة الشعب"),
    dates: s("Jan 2025 — Present", "كانون الثاني 2025 — حتى الآن"),
    note: s("In progress", "قيد الدراسة"),
  },
];

export const awards = [
  {
    title: s("First in the Engineering Faculty", "الأول على كلية الهندسة"),
    org: s("Islamic University of Gaza", "الجامعة الإسلامية بغزة"),
    year: "2023",
  },
  {
    title: s("First at school, 20th in Gaza", "الأول على المدرسة، والعشرون في غزة"),
    org: s("Tawjihi examinations", "امتحان التوجيهي"),
    year: "2022",
  },
  {
    title: s("Youngest developer at the hackathon", "أصغر مطوّر في الهاكاثون"),
    org: s("Medical Solutions — GDG Gaza", "حلول طبية — GDG غزة"),
    year: "2018",
  },
];

export const skillBands = [
  {
    title: s("AI & ML", "الذكاء الاصطناعي"),
    status: s("Growing into", "أتجه إليه"),
    items: ["Python", "pandas", "scikit-learn", "Streamlit", "FastAPI", "Gemini", "pgvector"],
  },
  {
    title: s("Web", "الويب"),
    status: s("Current and formal", "حالي وأساسي"),
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    title: s("Mobile", "الموبايل"),
    status: s("Product craft", "صنعة المنتج"),
    items: ["React Native", "Expo", "NativeWind"],
  },
];

export type ProjectTag = "ai" | "web" | "mobile";

export type Project = {
  name: string;
  summary: Text;
  tags: ProjectTag[];
  stack: string[];
  href?: string;
};

export const almulhim: Project = {
  name: "Almulhim",
  summary: s(
    "A Tawjihi learning platform for Palestine, built as one product with four apps on a single NestJS API: a Next.js marketing site, a Next.js teacher dashboard, an Expo student app for iOS, Android, and web, and the API. Lessons follow a unit, chapter, and lesson tree. Teachers review subscriptions, Gemini checks payment receipts, and media is delivered with short-lived signed URLs on Cloudflare R2. The apps are siblings in one system workspace, sharing the API, Clerk, Prisma Postgres, and PostHog — the case I use for multi-app work.",
    "منصة تعليمية للتوجيهي في فلسطين، منتج واحد من أربعة تطبيقات على واجهة NestJS واحدة: موقع تعريفي بـ Next.js، ولوحة للمعلم بـ Next.js، وتطبيق طالب بـ Expo لـ iOS وأندرويد والويب، والواجهة نفسها. الدروس شجرة: وحدة، ثم فصل، ثم درس. يراجع المعلمون الاشتراكات، ويراجع Gemini إيصالات الدفع، وتُسلَّم الوسائط بروابط موقّعة قصيرة على Cloudflare R2. التطبيقات أشقاء في مساحة عمل واحدة تشارك الواجهة وClerk وPrisma Postgres وPostHog. هذه هي الحالة التي أستشهد بها للعمل متعدد التطبيقات.",
  ),
  tags: ["web", "mobile"],
  stack: ["Next.js", "Expo", "NestJS", "Prisma", "Clerk", "Cloudflare R2", "Gemini"],
};

export const projects: Project[] = [
  {
    name: "Academic Research Copilot",
    summary: s(
      "A study build of an academic assistant: chat with history, PDF retrieval that cites the file and page, a tool-calling agent, and a prompt lab. Next.js in front, FastAPI and Gemini behind it, vectors in Postgres with pgvector.",
      "بناء دراسي لمساعد أكاديمي: محادثة بتاريخ، واسترجاع من PDF يذكر اسم الملف والصفحة، ووكيل يستدعي أدوات، ومختبر أوامر. Next.js في الواجهة، وFastAPI وGemini في الخلف، والمتجهات في Postgres مع pgvector.",
    ),
    tags: ["ai", "web"],
    stack: ["Next.js", "FastAPI", "Gemini", "pgvector"],
    href: "https://github.com/ahmedmsabha/academic-research-copilot",
  },
  {
    name: "Wisconsin Breast Cancer Classifier",
    summary: s(
      "My first end-to-end model. It classifies benign and malignant cases on the Wisconsin diagnostic set, 569 rows. A tuned gradient boosting model reached a test F1 of 0.9756 on the malignant class. Streamlit wraps the saved model. This is training work, not a clinical product.",
      "أول نموذج أبنيه من البداية إلى النهاية. يصنّف الحالات الحميدة والخبيثة على مجموعة ويسكونسن التشخيصية، 569 صفًا. بلغ نموذج تعزيز متدرّج مضبوط مقياس F1 للاختبار 0.9756 على الصنف الخبيث. Streamlit يغلّف النموذج المحفوظ. هذا تدريب، وليس منتجًا سريريًا.",
    ),
    tags: ["ai"],
    stack: ["Python", "scikit-learn", "Streamlit"],
    href: "https://github.com/ahmedmsabha/ai-camp",
  },
  {
    name: "Global Temperature Dashboard",
    summary: s(
      "A Streamlit dashboard of global temperature anomalies from 1850, comparing NOAA GCAG and NASA GISTEMP. Built to practice pandas, cached loads, and Plotly.",
      "لوحة Streamlit لشذوذ الحرارة العالمية منذ 1850، تقارن GCAG من NOAA وGISTEMP من NASA. بُنيت للتدرّب على pandas والتحميل المخزَّن وPlotly.",
    ),
    tags: ["ai"],
    stack: ["Python", "pandas", "Plotly", "Streamlit"],
    href: "https://github.com/ahmedmsabha/ai-camp",
  },
  {
    name: "Academic Compass",
    summary: s(
      "A private notebook for planning graduate study abroad: countries, universities, programs, professors, scholarships, and applications, in English and Arabic.",
      "دفتر خاص للتخطيط للدراسة العليا في الخارج: دول، وجامعات، وبرامج، وأساتذة، ومنح، وطلبات، بالإنجليزية والعربية.",
    ),
    tags: ["web"],
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    href: "https://github.com/ahmedmsabha/study-abraod-notebook",
  },
  {
    name: "Rankify",
    summary: s(
      "A resume scanner that reads a CV and returns practical notes for applicant tracking systems.",
      "ماسح سيرة يقرأ الـ CV ويعيد ملاحظات عملية لأنظمة تتبّع المتقدمين.",
    ),
    tags: ["web", "ai"],
    stack: ["React"],
    href: "https://github.com/ahmedmsabha/Rankify",
  },
  {
    name: "Vidly",
    summary: s(
      "A video platform in the shape of YouTube, with title, description, and thumbnail suggestions drawn from subtitles.",
      "منصة فيديو على هيئة يوتيوب، تقترح العنوان والوصف والصورة المصغّرة من الترجمة.",
    ),
    tags: ["web", "ai"],
    stack: ["Next.js", "tRPC", "Mux", "OpenAI"],
    href: "https://github.com/ahmedmsabha/vidly",
  },
  {
    name: "PenSpace",
    summary: s(
      "A blogging platform in a Turborepo: rich text, authentication, and a GraphQL API.",
      "منصة تدوين داخل Turborepo: نص غني، وتوثيق دخول، وواجهة GraphQL.",
    ),
    tags: ["web"],
    stack: ["Next.js", "NestJS", "GraphQL", "Prisma"],
    href: "https://github.com/ahmedmsabha/Penspace",
  },
  {
    name: "Broadify",
    summary: s(
      "A project board for workspaces, tasks, drag-and-drop, and a calendar.",
      "لوحة مشاريع لمساحات العمل والمهام والسحب والإفلات والتقويم.",
    ),
    tags: ["web"],
    stack: ["React", "Hono", "Appwrite"],
    href: "https://github.com/ahmedmsabha/broadify",
  },
  {
    name: "Tell Me a Story",
    summary: s(
      "A children's story generator with illustrations. It comes out of my fiction writing: software for making stories, not a published book.",
      "مولّد قصص للأطفال مع رسوم. خرج من كتابتي للقصص: برنامج لصناعة الحكاية، لا كتاب منشور.",
    ),
    tags: ["web", "ai"],
    stack: ["Next.js", "Gemini", "PayPal"],
    href: "https://github.com/ahmedmsabha/tell-me-a-story",
  },
  {
    name: "AI Novelist",
    summary: s(
      "A writing desk that uses Gemini to draft fiction with the writer, rather than instead of them.",
      "مكتب كتابة يستخدم Gemini لمساعدة الكاتب على المسودة، لا ليكتب بدلًا عنه.",
    ),
    tags: ["web", "ai"],
    stack: ["React", "Gemini"],
  },
  {
    name: "Staff System",
    summary: s(
      "Responsive interface work for Areisto's staff application. Engagement on the screens I touched moved about 20%.",
      "عمل واجهات متجاوبة لتطبيق الموظفين في Areisto. ارتفع التفاعل على الشاشات التي لمستها نحو 20٪.",
    ),
    tags: ["web"],
    stack: ["Next.js", "React", "Redux"],
  },
  {
    name: "Dishify",
    summary: s("A recipe app for finding and cooking dishes.", "تطبيق وصفات للبحث عن الأطباق وطهوها."),
    tags: ["web"],
    stack: ["Next.js", "React"],
    href: "https://github.com/ahmedmsabha/Dishify",
  },
  {
    name: "Store It",
    summary: s(
      "File upload and management, built with Next.js and TypeScript.",
      "رفع الملفات وإدارتها، بـ Next.js وTypeScript.",
    ),
    tags: ["web"],
    stack: ["Next.js", "TypeScript"],
    href: "https://github.com/ahmedmsabha/upload-it",
  },
  {
    name: "Mini Drive",
    summary: s(
      "A small cloud-storage clone: folders, files, and a familiar drive layout.",
      "نسخة صغيرة من التخزين السحابي: مجلدات وملفات وتخطيط مألوف.",
    ),
    tags: ["web"],
    stack: ["React", "Drizzle"],
    href: "https://github.com/ahmedmsabha/drive-clone",
  },
  {
    name: "Movie Hub",
    summary: s(
      "A mobile app for browsing films, built with React Native and Expo.",
      "تطبيق جوال لتصفّح الأفلام، بـ React Native وExpo.",
    ),
    tags: ["mobile"],
    stack: ["React Native", "Expo", "TypeScript"],
    href: "https://github.com/ahmedmsabha/movie-hub",
  },
];

export const experience = [
  {
    role: s("AI & Data Science Trainee", "متدرّب ذكاء اصطناعي وعلم بيانات"),
    org: s("Code Center for Training and Development", "مركز الكود للتدريب والتطوير"),
    kind: s("Internship", "تدريب"),
    dates: s("Jul 2026 — Sep 2026", "تموز 2026 — أيلول 2026"),
    place: s("Gaza · Remote", "غزة · عن بُعد"),
    summary: s(
      "Supervised by Eng. Anas Mushtaha. Collected, cleaned, and prepared datasets for analysis.",
      "بإشراف م. أنس مشتهى. جمعت البيانات ونظّفتها وجهّزتها للتحليل.",
    ),
  },
  {
    role: s("Full Stack Engineer", "مهندس فل ستاك"),
    org: "zakey.tech",
    kind: s("Internship", "تدريب"),
    dates: s("Aug 2025 — Dec 2025", "آب 2025 — كانون الأول 2025"),
    place: s("Remote", "عن بُعد"),
    summary: s(
      "An intensive full-stack program aimed at production-grade web applications, including work with Google Gemini.",
      "برنامج مكثف لبناء تطبيقات ويب بمستوى الإنتاج، ومنه عمل على Google Gemini.",
    ),
  },
  {
    role: s("Frontend Developer", "مطوّر واجهات"),
    org: "Areisto",
    kind: s("Internship", "تدريب"),
    dates: s("Jan 2025 — May 2025", "كانون الثاني 2025 — أيار 2025"),
    place: s("Palestinian Authority · Remote", "السلطة الفلسطينية · عن بُعد"),
    summary: s(
      "Built responsive UI for the Staff System and saw about a 20% lift in engagement on those screens.",
      "بنيت واجهة متجاوبة لنظام الموظفين، وارتفع التفاعل على تلك الشاشات نحو 20٪.",
    ),
  },
  {
    role: s("Full Stack Developer", "مطوّر فل ستاك"),
    org: s("Gaza Sky Geeks", "غزة سكاي غيكس"),
    kind: s("Internship", "تدريب"),
    dates: s("Dec 2024 — Apr 2025", "كانون الأول 2024 — نيسان 2025"),
    place: s("Palestinian Authority · Remote", "السلطة الفلسطينية · عن بُعد"),
    summary: s(
      "A capstone web application with Next.js on the front and Node.js on the API.",
      "تطبيق ويب ختامي: Next.js في الواجهة وNode.js في الواجهة البرمجية.",
    ),
  },
  {
    role: s("Frontend Developer", "مطوّر واجهات"),
    org: "Work Net",
    kind: s("Internship", "تدريب"),
    dates: s("Jun 2024 — Nov 2024", "حزيران 2024 — تشرين الثاني 2024"),
    place: s("Remote", "عن بُعد"),
    summary: s(
      "A capstone web app that scored about 95% in peer-review satisfaction. React and CSS, with a Sanad certificate.",
      "تطبيق ويب ختامي نال نحو 95٪ في رضا مراجعة الأقران. React وCSS، مع شهادة سند.",
    ),
  },
];

export const paper = {
  title: s(
    "Hybrid Drone-Edge AI for Medical Triage",
    "ذكاء طرفي بطائرات مسيّرة لفرز الإصابات الطبية",
  ),
  dates: s("Feb 2026 — Mar 2026", "شباط 2026 — آذار 2026"),
  status: s("Started, not completed", "بدأ ولم يكتمل"),
  summary: s(
    "I joined a research team on a low-cost system for medical triage where the network is unreliable. The work was a proof of concept: a lightweight model for trauma-related injury detection, an offline-first architecture, and a feasibility look at latency, energy, and accuracy. The paper was not finished and was not published. It is not a deployed medical device.",
    "شاركت فريق بحث في نظام منخفض الكلفة لفرز الإصابات حيث الشبكة غير موثوقة. كان العمل إثبات مفهوم: نموذج خفيف لاكتشاف إصابات مرتبطة بالرضح، ومعمارية تعمل بلا اتصال أولًا، ونظرة جدوى إلى التأخير والطاقة والدقة. الورقة لم تُنجز ولم تُنشر. ليست جهازًا طبيًا منشورًا.",
  ),
};

export const certificateGroups = [
  {
    label: s("AI", "الذكاء الاصطناعي"),
    items: [
      { title: "Building with the Claude API", issuer: "Anthropic", issued: s("Aug 2026", "آب 2026"), id: "k4i2s2p3vda3" },
      { title: "Claude 101", issuer: "Anthropic", issued: s("Aug 2026", "آب 2026"), id: "zttatimcozh6" },
      { title: "Claude Code 101", issuer: "Anthropic", issued: s("Jul 2026", "تموز 2026"), id: "8bhn8xhuf2w9" },
      { title: "AI Fluency Framework & Foundations", issuer: "Anthropic", issued: s("Jul 2026", "تموز 2026"), id: "fhf5emboi3uj" },
      { title: "Machine Learning Introduction for Everyone", issuer: "IBM", issued: s("Nov 2025", "تشرين الثاني 2025"), id: "Z9H1355M3F1C" },
      { title: "Developing with GitHub Copilot and VS Code", issuer: "Microsoft", issued: s("Aug 2024", "آب 2024"), id: "VEPFTLYC03FH" },
    ],
  },
  {
    label: s("Web", "الويب"),
    items: [
      { title: "Advanced React", issuer: "Meta", issued: s("Nov 2024", "تشرين الثاني 2024"), id: "PO8GJJBF3BHP" },
      { title: "React Basics", issuer: "Meta", issued: s("Nov 2024", "تشرين الثاني 2024"), id: "KUS2TBF1OB5Q" },
      { title: "Introduction to Front-End Development", issuer: "Meta", issued: s("Aug 2024", "آب 2024"), id: "GIWR2T9PA61Q" },
      { title: "Introduction to Back-End Development", issuer: "Meta", issued: s("Nov 2024", "تشرين الثاني 2024"), id: "KLHEGZ5PZRER" },
      { title: "Introduction to HTML, CSS, & JavaScript", issuer: "IBM", issued: s("Nov 2024", "تشرين الثاني 2024"), id: "UXQ2CLOLY624" },
      { title: "Get Started with Android App Development", issuer: "SkillUp", issued: s("Nov 2024", "تشرين الثاني 2024"), id: "BKOU8LVHH5QW" },
    ],
  },
  {
    label: s("Data", "البيانات"),
    items: [
      { title: "Python for Data Science, AI & Development", issuer: "IBM", issued: s("Aug 2026", "آب 2026"), id: "HDDQ6Z090XD8" },
      { title: "Foundations: Data, Data, Everywhere", issuer: "Google", issued: s("Oct 2025", "تشرين الأول 2025"), id: "Y098SUWVHBR0" },
      { title: "Understanding Research Methods", issuer: "University of London · SOAS", issued: s("Feb 2026", "شباط 2026"), id: "HI94FC8VH800" },
      { title: "Welcome to Game Theory", issuer: "The University of Tokyo", issued: s("Jun 2026", "حزيران 2026"), id: "9R9HHXX6EJDH" },
    ],
  },
];

export const volunteering = [
  {
    title: s("New-student welcome", "استقبال الطلبة الجدد"),
    org: s("Faculty of Engineering, Islamic University of Gaza", "كلية الهندسة، الجامعة الإسلامية بغزة"),
    dates: "",
    summary: s(
      "Welcomed and guided new students in the faculty.",
      "عملت في استقبال وتوجيه الطلبة الجدد في كلية الهندسة.",
    ),
  },
  {
    title: s("Advisor", "مرشد"),
    org: s("Al Mutanabi School", "مدرسة المتنبي"),
    dates: "",
    summary: s(
      "Sessions during and after my own high school years, on how to study toward academic excellence.",
      "جلسات أثناء الثانوية وبعدها، عن كيف يدرس الطالب باتجاه التفوّق.",
    ),
  },
  {
    title: s("Scientific retreat volunteer", "متطوّع في إدارة معتكف علمي"),
    org: s("Ibn Al-Qayyim Center", "مركز ابن القيّم"),
    dates: s("Aug 2023", "آب 2023"),
    summary: s(
      "Helped run an academic retreat: administration and the day-to-day of a full-time study program.",
      "ساعدت في إدارة معتكف علمي: التنظيم واليوم الدراسي المتواصل.",
    ),
  },
  {
    title: s("Quran teacher", "معلّم قرآن"),
    org: s("Al Rahma Mosque", "مسجد الرحمة"),
    dates: s("Jun 2023 — Aug 2023", "حزيران 2023 — آب 2023"),
    summary: s(
      "Guided a group through memorization and recitation for about two and a half months, with mentorship alongside the instruction.",
      "رافق مجموعة في الحفظ والتلاوة نحو شهرين ونصف، مع إرشاد إلى جانب التعليم.",
    ),
  },
  {
    title: s("Humanitarian relief", "إغاثة"),
    org: s("Community initiative", "مبادرة مجتمعية"),
    dates: s("Dec 2023 — Mar 2024", "كانون الأول 2023 — آذار 2024"),
    summary: s(
      "Assisted displaced families with tents, temporary shelter, and food distribution.",
      "ساعدت عائلات نازحة بالخيام والمأوى المؤقت وتوزيع الطعام.",
    ),
  },
];
