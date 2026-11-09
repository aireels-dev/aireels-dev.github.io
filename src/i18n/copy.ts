import { siteConfig } from "../config";
import { servicePresentation, workingProcess } from "../data/site-content";
import type { Locale } from "./routing";

const en = {
  brand: "AIReels",
  nav: ["Home", "Services", "About us"],
  ui: {
    skip: "Skip to main content",
    mainNav: "Main navigation",
    footerNav: "Footer navigation",
    mobileNav: "Mobile navigation",
    menu: "Open navigation",
    languages: "Language",
    talk: "Let’s talk",
    contact: "Contact us",
    home: "Home",
    privacy: "Privacy policy",
    top: "Back to top",
    pause: "Pause motion",
    resume: "Resume motion",
    reduced: "Reduced motion",
    serviceDetails: "Explore this service",
    serviceMore: "View service details",
    serviceDirectory: "Service directory",
    fit: "IS THIS FOR YOU?",
    outcomes: "Application possibilities",
    consult: "Discuss this service",
    pageSignature: "From possibility to everyday impact.",
  },
  meta: {
    home: {
      title: "Intelligence, in motion.",
      description:
        "Practical AI integration, content tools and technical consulting for small businesses and independent founders.",
    },
    services: {
      title: "Services",
      description:
        "Explore AI integration, content creation tools and technical consulting. Turn a real business need into an AI application your team can use.",
    },
    about: {
      title: "About us",
      description:
        "Meet AIReels. We connect AI technology with real business needs, helping small businesses and independent founders put intelligence to work.",
    },
    contact: {
      title: "Contact us",
      description: `Talk to AIReels about AI integration, content tools and technical consulting. Email ${siteConfig.contactEmail} to start a conversation.`,
    },
    privacy: {
      title: "Privacy policy",
      description:
        "How AIReels handles information you share with us and the language preference stored in your browser.",
    },
    "404": {
      title: "Page not found",
      description:
        "This page could not be found. Return to the AIReels homepage to continue exploring.",
    },
  },
  home: {
    eyebrow: "AI INTEGRATION / HUMAN POSSIBILITIES",
    title: ["Intelligence,", "in motion."],
    description: [
      "Turn the possibilities of AI into your business advantage.",
      "Practical solutions for small businesses and independent founders.",
    ],
    explore: "Explore our capabilities",
    start: "Start a conversation",
    scroll: "SCROLL TO EXPLORE",
    pointer: "MOVE TO EXPLORE / FEEL THE GRAVITY",
    signature: ["THOUGHTFULLY BUILT.", "MADE FOR REAL WORK."],
    strip: "Small teams deserve powerful AI, too.",
    capabilities: ["From what’s possible,", "to what works."],
    capabilitiesDescription: [
      "You don’t need every new AI trend.",
      "You need technology that solves your actual problems.",
    ],
    approach: ["From one question,", "to a new possibility."],
    approachDescription: [
      "More than connecting a model.",
      "We build around the way your business works.",
    ],
    about: ["Technology moves forward.", "So can you."],
    aboutLead: ["We are AIReels.", "Your partner in applied AI."],
    aboutDescription:
      "We help small businesses and independent founders connect AI with everyday work. Lower the technical barriers, give ideas better tools, and make more of the resources you have.",
    aboutMore: "Meet AIReels",
    facts: [
      ["Cost-conscious", "Choose what your business needs"],
      ["Easy to use", "Fit into everyday work"],
      ["Practical by design", "Focus on real business problems"],
    ],
  },
  services: [
    {
      id: "integration",
      english: "INTEGRATE",
      category: "AI integration",
      title: ["Connect your business.", "Put AI to work."],
      tagline: "Bring AI capabilities into your existing business.",
      description:
        "Connect models, knowledge and existing systems, so intelligence becomes part of your workflow.",
      audience:
        "Businesses exploring intelligent customer support, knowledge assistants or AI capabilities for an existing system.",
      outcome: [
        "Conversational and knowledge assistants",
        "Custom AI tools",
        "AI modules for existing systems",
      ],
      details: [
        {
          title: "Language model API integration",
          description: "Connect mainstream models such as ChatGPT and ERNIE.",
        },
        {
          title: "Conversational applications",
          description:
            "Build customer support bots, knowledge Q&A and intelligent assistants.",
        },
        {
          title: "Custom AI tools",
          description:
            "Develop tools shaped around the needs of your business.",
        },
        {
          title: "Intelligent system upgrades",
          description: "Add AI capabilities to the systems you already use.",
        },
      ],
    },
    {
      id: "creation",
      english: "CREATE",
      category: "AI content tools",
      title: ["Keep ideas flowing.", "Make more of them."],
      tagline: "Give your content workflow a practical starting point.",
      description:
        "From marketing copy to video scripts, give creative work a steady source of momentum.",
      audience:
        "Teams and independent founders creating marketing copy, short-form video scripts and social content on a regular basis.",
      outcome: [
        "Copywriting tools",
        "Short-form video scripts",
        "Social content and email templates",
      ],
      details: [
        {
          title: "Marketing copy",
          description:
            "Turn product keywords into multiple versions of marketing copy.",
        },
        {
          title: "Video script creation",
          description:
            "Develop short-form video scripts around your industry and audience.",
        },
        {
          title: "Social media content",
          description:
            "Create content suited to different social channels and formats.",
        },
        {
          title: "Email templates",
          description:
            "Support customer follow-ups, event invitations and seasonal campaigns.",
        },
      ],
    },
    {
      id: "consulting",
      english: "EVOLVE",
      category: "Technical consulting & support",
      title: ["From technical choices,", "to practical progress."],
      tagline: "A partner for your next step with AI.",
      description:
        "From initial advice to deployment and optimization, support each stage of your AI journey.",
      audience:
        "Teams evaluating an AI solution or looking for help with model selection, integration and deployment.",
      outcome: [
        "AI solution consulting",
        "Model selection and deployment guidance",
        "Integration and ongoing optimization",
      ],
      details: [
        {
          title: "AI solution consulting",
          description:
            "Assess suitable approaches based on real business needs.",
        },
        {
          title: "Model application guidance",
          description:
            "Get support from model selection through deployment and optimization.",
        },
        {
          title: "System integration support",
          description:
            "Connect AI features with existing business applications.",
        },
        {
          title: "Ongoing technical support",
          description:
            "Refine performance and improve applications as needs evolve.",
        },
      ],
    },
  ],
  process: [
    {
      number: "01",
      english: "DISCOVER",
      title: "Understand first. Then build.",
      description:
        "Start with your business challenges. Map the workflow, context and budget to identify the problem worth solving.",
      scope: "Business discovery / Use-case analysis / Solution advice",
    },
    {
      number: "02",
      english: "CONNECT",
      title: "Connect what you have.",
      description:
        "Integrate a suitable model with existing systems, bringing conversational, knowledge and content capabilities into everyday work.",
      scope: "Model APIs / System integration / Custom tools",
    },
    {
      number: "03",
      english: "EVOLVE",
      title: "Make every use count.",
      description:
        "Deployment guidance, technical support and ongoing refinement help your team put the solution to use and keep improving it.",
      scope: "Deployment support / Application guidance / Optimization",
    },
  ],
  scenarios: {
    title: ["Beyond imagination.", "Into your workflow."],
    description: [
      "Start with a specific use case.",
      "Find the right place to begin.",
    ],
    label: "Explore AI use cases",
    discuss: "Discuss this use case",
    diagram: "Application flow",
    example: "Illustrative use case",
    input: "YOUR CONTEXT / INPUT",
    output: "NEW POSSIBILITIES / OUTPUT",
    caption: "Start with a real need. Build around the business.",
    items: [
      {
        id: "support",
        label: "Customer support",
        english: "CUSTOMER EXPERIENCE",
        title: ["Let an informed assistant", "handle repeat questions."],
        description:
          "Connect company knowledge with conversational AI to support customer enquiries and internal Q&A, freeing your team for conversations that need a human.",
        input: [
          "Customer enquiries",
          "Product information",
          "FAQs and service guidelines",
        ],
        engine: "Conversational AI & knowledge Q&A",
        output: ["Customer support bots", "Company knowledge assistants"],
      },
      {
        id: "creation",
        label: "Content creation",
        english: "CREATIVE INTELLIGENCE",
        title: ["From one idea,", "to a complete expression."],
        description:
          "Bring product details, brand voice and channel requirements together for a smoother flow from marketing copy to video scripts and social content.",
        input: [
          "Product keywords",
          "Brand voice",
          "Channel and format requirements",
        ],
        engine: "Language models & content templates",
        output: ["Marketing copy and video scripts", "Social media content"],
      },
      {
        id: "integration",
        label: "Business integration",
        english: "CONNECTED BUSINESS",
        title: ["Familiar systems.", "New capabilities."],
        description:
          "Connect language models with your existing workflows, building custom tools and modules that fit the way your business operates.",
        input: [
          "Existing business systems",
          "Business needs",
          "Current tools and workflows",
        ],
        engine: "Model APIs & custom development",
        output: ["Custom AI tools", "Intelligent application modules"],
      },
    ],
  },
  servicesPage: {
    eyebrow: "OUR CAPABILITIES",
    title: ["Turn frontier technology", "into everyday advantage."],
    description:
      "From a model connection to a business tool. Find the right AI application for the problem you actually need to solve.",
    explore: "Explore our three core services",
    processTitle: ["Step by step.", "From idea to application."],
    processDescription: [
      "Clarify the need first.",
      "Give each next step a clear direction.",
    ],
    processNote:
      "We agree on scope, implementation plans and costs after understanding your business requirements.",
  },
  aboutPage: {
    eyebrow: "ABOUT AIREELS",
    title: ["Technology moves forward.", "So can you."],
    description:
      "We are AIReels. A partner in AI integration and practical applications, connecting technology with the way you work.",
    explore: "Get to know our approach",
    companyTitle: ["Make AI possibilities", "more accessible."],
    companyDescription: [
      "We build AI integration and practical solutions for small businesses and independent founders, connecting language models, content tools and existing business systems.",
      "Technology proves its value in everyday use. Starting with one real problem, we turn complex capabilities into useful tools that give teams more time for their core business.",
    ],
    more: "See what we can build",
    principlesTitle: ["Good technology responds", "to real needs."],
    principlesDescription: [
      "Simple, practical and cost-conscious.",
      "That is where every solution begins.",
    ],
    principles: [
      {
        number: "01",
        label: "ACCESSIBLE BY DESIGN",
        title: "Technology should be easier.",
        description:
          "Keep complexity away from the people using the solution. Guidance and technical support help teams take their first steps with AI.",
      },
      {
        number: "02",
        label: "PURPOSE BEFORE SCALE",
        title: "Investment needs a purpose.",
        description:
          "Choose models and approaches around actual needs and available budgets. Put resources toward a specific problem worth solving.",
      },
      {
        number: "03",
        label: "BUILT FOR REAL WORK",
        title: "Tools should become habits.",
        description:
          "Fit AI into existing systems and ways of working. Pay attention to what happens after deployment, and keep refining the experience.",
      },
    ],
    audienceTitle: ["Different starting points.", "The same room to grow."],
    audienceDescription: [
      "For people with practical needs.",
      "The right AI capability for right now.",
    ],
    audiences: [
      [
        "Independent founders",
        "More time to create.",
        "Build AI tools for content and everyday work, suited to freelancers and independent service providers.",
      ],
      [
        "Small businesses",
        "Small teams. More headroom.",
        "Find practical approaches for customer enquiries, content marketing and internal collaboration.",
      ],
      [
        "Established businesses",
        "Familiar work. New possibilities.",
        "Connect AI with existing systems and workflows, starting with a specific business use case.",
      ],
      [
        "Innovative teams",
        "Bring ideas into application.",
        "Get technical advice, integration and deployment support when adding language models to your products and tools.",
      ],
    ],
    companyInfo: "COMPANY INFORMATION",
    infoTitle: ["Built around people.", "Connected through technology."],
    registeredOffice: "Registered office",
    companyLabel: "Company name",
    hoursLabel: "Working hours",
    artSignature: "HUMAN × INTELLIGENCE",
  },
  contactPage: {
    eyebrow: "LET’S BUILD WHAT’S NEXT",
    title: ["A new possibility", "starts with a conversation."],
    description:
      "You don’t need a complete technical brief. Tell us about your business, the problem in front of you, and where you want to go.",
    optionsTitle: ["Your idea.", "Our next conversation."],
    optionsDescription: [
      "Choose a direction and introduce your needs by email.",
      "You can also reach us using the details below.",
    ],
    hint: "Selecting a service opens the email app on your device.",
    informationTitle: "Stay connected.",
    labels: ["Email", "Phone", "Registered office & hours"],
    social: {
      wechat: {
        name: "WeChat",
        accountLabel: "WeChat ID",
        description: "Scan with WeChat to start a conversation.",
        alt: "WeChat contact QR code for aireels",
      },
      feishu: {
        name: "Feishu",
        accountLabel: "Connect with",
        description: "Scan with Feishu to connect and discuss your project.",
        alt: "Feishu contact QR code for AIReels",
      },
      download: "Save QR code",
      mobileHint: "On your phone? Save the code, then open it in WeChat or Feishu to scan.",
    },
    noteTitle: [
      "Start with your business.",
      "We’ll work through the technology together.",
    ],
    note: "If you can, tell us what you do, which tasks you want to improve, and your goals and budget range. It will help us understand your needs faster.",
    emailAction: "Start an email",
    subject: "AI application consultation",
    greeting: "Hello AIReels,",
    emailOpening: "I would like to discuss",
    emailFields: [
      "Business context",
      "Current challenge",
      "What we hope to achieve",
      "How to contact us",
    ],
  },
  company: {
    name: "Zhengzhou AIReels Technology Co., Ltd.",
    registeredOffice: "Huiji District, Zhengzhou, China",
    hours: "Mon–Fri, 09:00–18:00 (UTC+8)",
  },
  faq: {
    title: "About the next step.",
    items: [
      {
        question: "Can we integrate AI without in-house AI expertise?",
        answer:
          "Yes. We offer guidance from initial consulting through deployment, including technical support and application training.",
      },
      {
        question: "How do we evaluate API costs and results?",
        answer:
          "We assess models and approaches against your needs, expected usage and budget, and explain API and related costs before implementation.",
      },
      {
        question: "What support is available after deployment?",
        answer:
          "Ongoing technical support and performance refinement are available. Our working hours are Monday to Friday, 09:00–18:00 (UTC+8).",
      },
      {
        question: "Can we start with a consultation?",
        answer:
          "Yes. An initial AI consultation can help you assess suitable approaches before deciding on an implementation.",
      },
    ],
  },
  cta: {
    title: ["Your next possibility", "starts here."],
    brand: "AIReels / Applied intelligence",
  },
  footer: {
    tagline: "Let intelligence pull your business forward.",
    secondary: "From possibility to everyday impact.",
    links: "Explore",
    contact: "Contact details & enquiries",
    description: [
      "Connect intelligence with your business.",
      "Built for small businesses and independent founders.",
    ],
  },
  privacy: {
    sections: [
      {
        title: "Information you provide",
        description:
          "We handle information you choose to share with us, including:",
        items: [
          "Your name, email address and other details provided when contacting us.",
          "Feedback and suggestions about our services.",
        ],
      },
      {
        title: "How information is used",
        description: "We use the information you share to:",
        items: [
          "Respond to enquiries and requests.",
          "Improve our products and services.",
          "Provide relevant product updates with your consent.",
        ],
      },
      {
        title: "Protecting information",
        description:
          "We take reasonable measures to protect personal information, including:",
        items: [
          "Encrypted transmission.",
          "Restricted access permissions.",
          "Security reviews.",
        ],
      },
      {
        title: "Sharing information",
        description:
          "We do not sell or trade personal information. Disclosure may occur when:",
        items: [
          "You have given explicit consent.",
          "Disclosure is required by law.",
          "It is necessary to protect rights and safety.",
        ],
      },
      {
        title: "Language preference",
        description:
          "When you select a language, this website stores that preference locally in your browser. You can remove it by clearing the site’s browser storage. If there is no saved preference, the website matches supported browser languages and otherwise uses English.",
        items: [],
      },
    ],
    contactTitle: "Contact us",
    contactDescription:
      "For questions about this privacy policy, contact us at:",
    addressLabel: "Registered office",
  },
  notFound: {
    title: "This page has drifted out of orbit.",
    description:
      "The link may have changed. Return to AIReels to keep exploring.",
    home: "Back to home",
  },
};

const zh: typeof en = {
  brand: "灵映科技",
  nav: ["首页", "服务介绍", "关于我们"],
  ui: {
    skip: "跳转到主要内容",
    mainNav: "主导航",
    footerNav: "页脚导航",
    mobileNav: "移动端主导航",
    menu: "展开网站导航",
    languages: "语言切换",
    talk: "聊聊你的想法",
    contact: "联系我们",
    home: "首页",
    privacy: "隐私政策",
    top: "返回顶部",
    pause: "暂停动效",
    resume: "开启动效",
    reduced: "已减少动效",
    serviceDetails: "探索服务内容",
    serviceMore: "了解这项服务",
    serviceDirectory: "服务目录",
    fit: "IS THIS FOR YOU? / 适用需求",
    outcomes: "可构建的应用方向",
    consult: "咨询这项服务",
    pageSignature: "从可能，到日常。",
  },
  meta: {
    home: { title: "让智能，引力全开。", description: siteConfig.description },
    services: {
      title: "服务介绍",
      description:
        "探索灵映科技的 AI 智能化集成、内容创作助手与技术咨询服务。从业务场景到系统接入，让 AI 真正进入日常工作。",
    },
    about: {
      title: "关于我们",
      description:
        "认识灵映科技。我们专注 AI 技术集成与应用，为中小企业和个人创业者连接前沿技术与真实业务。",
    },
    contact: {
      title: "联系我们",
      description: `联系灵映科技，聊聊 AI 集成、内容创作和技术咨询需求。邮箱 ${siteConfig.contactEmail}。`,
    },
    privacy: {
      title: "隐私政策",
      description:
        "了解灵映科技如何处理您主动提供的信息，以及浏览器中保存的语言偏好。",
    },
    "404": {
      title: "页面未找到",
      description: "这个页面未找到。返回灵映科技首页，继续探索。",
    },
  },
  home: {
    eyebrow: "AI INTEGRATION / HUMAN POSSIBILITIES",
    title: ["让智能，", "引力全开。"],
    description: [
      "把前沿 AI，变成你的业务优势。",
      "为中小企业与个人创业者，构建真正用得上的智能化方案。",
    ],
    explore: "探索我们的能力",
    start: "从一次交流开始",
    scroll: "向下探索",
    pointer: "MOVE TO EXPLORE / 移动鼠标，探索引力场",
    signature: ["THOUGHTFULLY BUILT.", "MADE FOR REAL WORK."],
    strip: "小团队，也值得拥有强大的 AI。",
    capabilities: ["从技术的可能，", "到业务的日常。"],
    capabilitiesDescription: [
      "不用追逐每一个新概念。",
      "我们关心的是，AI 如何解决你的实际问题。",
    ],
    approach: ["从一个问题，", "到一种新可能。"],
    approachDescription: [
      "不止于接入一个模型。",
      "我们让技术顺着你的业务生长。",
    ],
    about: ["技术向前，", "也让你向前。"],
    aboutLead: ["我们是灵映科技，", "你的 AI 技术应用伙伴。"],
    aboutDescription:
      "专注为中小企业和个人创业者提供 AI 集成与智能化解决方案。让技术降低门槛，让创意拥有工具，让有限的资源创造更多可能。",
    aboutMore: "认识灵映科技",
    facts: [
      ["成本友好", "以实际需求选择方案"],
      ["简单易用", "让工具走进日常工作"],
      ["效果实用", "聚焦真实的业务痛点"],
    ],
  },
  services: siteConfig.features.map((feature, i) => ({
    ...servicePresentation[i],
    category: feature.title,
    title: servicePresentation[i].title
      .split("，")
      .map((part, index) => (index === 0 ? `${part}，` : part)),
    tagline: `${feature.description}。`,
    audience: servicePresentation[i].audience,
    outcome: servicePresentation[i].outcome,
    details: feature.details.map((detail) => {
      const [title, description] = detail.split("：");
      return { title, description };
    }),
  })),
  process: workingProcess,
  scenarios: {
    title: ["不止于想象，", "更进入你的工作。"],
    description: ["从一个具体场景切入，", "找到适合你的智能化起点。"],
    label: "探索 AI 应用场景",
    discuss: "聊聊这个场景",
    diagram: "能力流程示意",
    example: "应用场景示意",
    input: "YOUR CONTEXT / 业务输入",
    output: "NEW POSSIBILITIES / 场景输出",
    caption: "从真实需求出发 · 围绕业务完成集成",
    items: [
      {
        id: "support",
        label: "客户服务",
        english: "CUSTOMER EXPERIENCE",
        title: ["把重复的问题，", "交给更懂业务的助手。"],
        description:
          "将企业资料与智能对话能力连接，为客户咨询和内部知识问答提供支持，让团队把时间留给更重要的沟通。",
        input: ["客户咨询", "企业产品资料", "常见问题与服务规范"],
        engine: "智能对话与知识问答",
        output: ["客服机器人", "企业知识助手"],
      },
      {
        id: "creation",
        label: "内容创作",
        english: "CREATIVE INTELLIGENCE",
        title: ["从一个想法，", "到一次完整的表达。"],
        description:
          "围绕产品信息、品牌语气与发布渠道，将营销文案、短视频脚本和社交媒体内容串成更顺畅的创作过程。",
        input: ["产品关键词", "品牌语气", "渠道与内容要求"],
        engine: "大模型与内容模板",
        output: ["营销文案与视频脚本", "社交媒体内容"],
      },
      {
        id: "integration",
        label: "业务集成",
        english: "CONNECTED BUSINESS",
        title: ["让熟悉的系统，", "拥有新的智能能力。"],
        description:
          "在既有业务基础上接入大语言模型，按实际需求开发专属工具与功能模块，让智能自然地融入工作流程。",
        input: ["现有业务系统", "业务需求", "已有工具与流程"],
        engine: "模型 API 与定制开发",
        output: ["专属 AI 工具", "智能化功能模块"],
      },
    ],
  },
  servicesPage: {
    eyebrow: "OUR CAPABILITIES / 服务能力",
    title: ["把前沿技术，", "变成日常优势。"],
    description:
      "从一次模型接入，到一套业务工具。围绕你的实际问题，找到恰到好处的 AI 应用方式。",
    explore: "探索三项核心服务",
    processTitle: ["一步一步，", "让智能落地。"],
    processDescription: ["先把需求说清楚，", "再让每一步都有明确的方向。"],
    processNote: "具体服务范围、实施计划与费用，在了解业务需求后共同确认。",
  },
  aboutPage: {
    eyebrow: "ABOUT AIREELS / 关于灵映",
    title: ["技术向前，", "也让你向前。"],
    description:
      "我们是灵映科技。专注 AI 技术集成与应用，做你的智能化业务伙伴。",
    explore: "认识我们的想法",
    companyTitle: ["让 AI 的可能，", "离每个人更近。"],
    companyDescription: [
      "我们专注为中小企业和个人创业者提供 AI 集成与智能化解决方案，将大语言模型、内容创作工具与现有业务系统连接。",
      "我们相信，技术的价值体现在每一天的使用里。从一个具体问题开始，让复杂的能力成为简单、实用的工具，帮助团队把时间留给核心业务。",
    ],
    more: "看看我们能做什么",
    principlesTitle: ["好的技术，", "应该回应真实需求。"],
    principlesDescription: [
      "简单、实用、成本友好。",
      "这是我们做方案的出发点。",
    ],
    principles: [
      {
        number: "01",
        label: "ACCESSIBLE BY DESIGN",
        title: "技术，应该更容易。",
        description:
          "不把复杂性留给使用者。通过应用指导与技术支持，让没有 AI 技术背景的团队也能迈出第一步。",
      },
      {
        number: "02",
        label: "PURPOSE BEFORE SCALE",
        title: "投入，应该有方向。",
        description:
          "从业务需求与预算出发选择模型和方案，优先解决具体问题，让有限的资源用在值得的地方。",
      },
      {
        number: "03",
        label: "BUILT FOR REAL WORK",
        title: "工具，应该用得起来。",
        description:
          "让 AI 融入已有系统和工作习惯，关注部署之后的使用体验，通过持续优化让工具更贴近业务。",
      },
    ],
    audienceTitle: ["不同的起点，", "同样值得向前。"],
    audienceDescription: ["为有实际需求的人，", "找到适合当下的 AI 能力。"],
    audiences: [
      [
        "个人创业者",
        "把时间还给创造。",
        "为自由职业者与个人服务提供商，构建内容创作与日常工作中的 AI 工具。",
      ],
      [
        "小型企业",
        "小团队，也能更从容。",
        "围绕客户咨询、内容营销与内部协作，找到适合当前阶段的智能化方案。",
      ],
      [
        "传统企业",
        "熟悉的业务，新的能力。",
        "在已有系统和流程上接入 AI，让数字化升级从一个实际场景开始。",
      ],
      [
        "创新团队",
        "让想法，更快进入应用。",
        "为需要接入大模型能力的团队，提供技术咨询、系统集成与部署支持。",
      ],
    ],
    companyInfo: "COMPANY INFORMATION / 公司信息",
    infoTitle: ["连接技术，", "也连接每一个想法。"],
    registeredOffice: "注册地",
    companyLabel: "公司全称",
    hoursLabel: "工作时间",
    artSignature: "HUMAN × INTELLIGENCE",
  },
  contactPage: {
    eyebrow: "LET’S BUILD WHAT’S NEXT / 联系我们",
    title: ["下一种可能，", "从一次交流开始。"],
    description:
      "不必先准备一份完整的技术方案。告诉我们你的业务、遇到的问题，以及想要抵达的地方。",
    optionsTitle: ["你的想法，", "我们一起展开。"],
    optionsDescription: [
      "选择一个方向，通过邮件介绍你的需求。",
      "也可以直接使用下方联系方式与我们交流。",
    ],
    hint: "点击服务方向，将打开你设备上的邮件应用。",
    informationTitle: "保持联系。",
    labels: ["邮箱", "电话", "注册地与时间"],
    social: {
      wechat: {
        name: "微信",
        accountLabel: "微信号",
        description: "使用微信扫一扫，直接开始交流。",
        alt: "微信 aireels 联系二维码",
      },
      feishu: {
        name: "飞书",
        accountLabel: "联系团队",
        description: "使用飞书扫一扫，添加联系人，沟通项目与协作需求。",
        alt: "灵映科技飞书联系二维码",
      },
      download: "保存二维码",
      mobileHint: "在手机上浏览？可先保存二维码，再到微信或飞书中识别。",
    },
    noteTitle: ["从你的业务说起，", "技术的部分，交给我们一起梳理。"],
    note: "如果方便，可以在邮件里写下：你正在做什么、哪些工作需要改进，以及预期的效果与预算范围。这将帮助我们更快理解你的需求。",
    emailAction: "开始一封邮件",
    subject: "AI 应用方案咨询",
    greeting: "你好，灵映科技：",
    emailOpening: "我们希望了解",
    emailFields: ["业务背景", "目前的问题", "希望实现的目标", "方便联系的方式"],
  },
  company: {
    name: siteConfig.author,
    registeredOffice: "郑州市惠济区",
    hours: "周一至周五 9:00–18:00（UTC+8）",
  },
  faq: { title: "关于下一步。", items: siteConfig.faq },
  cta: {
    title: ["下一种可能，", "从你开始。"],
    brand: "灵映科技 / AI 技术应用伙伴",
  },
  footer: {
    tagline: "让智能成为业务的引力。",
    secondary: "From possibility to everyday impact.",
    links: "探索",
    contact: "联系方式与咨询",
    description: ["连接智能与业务。", "为中小企业和个人创业者而构建。"],
  },
  privacy: {
    sections: [
      {
        title: "信息收集",
        description: "我们处理您主动提供的信息，包括：",
        items: [
          "联系沟通中主动提供的姓名、邮箱等信息。",
          "使用我们服务时的反馈和建议。",
        ],
      },
      {
        title: "信息使用",
        description: "我们使用您提供的信息用于：",
        items: [
          "响应您的询问和请求。",
          "改进我们的产品和服务。",
          "发送相关的产品更新（需要您的同意）。",
        ],
      },
      {
        title: "信息保护",
        description: "我们采取合理的安全措施保护您的个人信息：",
        items: ["数据传输加密。", "限制访问权限。", "安全审查。"],
      },
      {
        title: "信息共享",
        description: "我们不会出售、交易您的个人信息；以下情形可能需要共享：",
        items: ["获得您的明确同意。", "法律要求。", "保护合法权利和安全。"],
      },
      {
        title: "语言偏好",
        description:
          "当您主动切换语言时，网站会在您的浏览器本地保存语言偏好。您可以通过清除网站的浏览器存储移除该偏好。未保存偏好时，网站匹配浏览器支持的语言，无法匹配时使用英文。",
        items: [],
      },
    ],
    contactTitle: "联系我们",
    contactDescription:
      "如果您对此隐私政策有任何问题，请通过以下方式联系我们：",
    addressLabel: "注册地",
  },
  notFound: {
    title: "这个页面，暂时偏离了轨道。",
    description: "链接可能已更新。回到首页，继续探索灵映科技。",
    home: "返回首页",
  },
};

export function getCopy(locale: Locale) {
  return locale === "zh" ? zh : en;
}
