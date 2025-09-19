export const siteConfig = {
  title: "灵映科技",
  description: "专注为中小企业和个人创业者提供AI集成与智能化解决方案",
  url: "https://aireels-dev.github.io",
  author: "郑州灵映科技有限公司",
  logo: "/logo.png",

  nav: [
    { title: "智能服务", href: "/products/" },
    { title: "技术实力", href: "/demo/" },
    { title: "技术文档", href: "/docs/" },
    { title: "关于我们", href: "/about/" },
    { title: "联系我们", href: "/contact/" },
  ],

  features: [
    {
      title: "AI智能化集成服务",
      description: "让传统业务快速接入AI能力",
      icon: "tool",
      details: [
        "大语言模型API集成：ChatGPT、文心一言等主流模型接入",
        "智能对话系统：客服机器人、知识问答、智能助手开发",
        "AI工具定制开发：基于业务需求的专属AI工具",
        "系统智能化升级：为现有系统增加AI功能模块"
      ]
    },
    {
      title: "AI内容创作助手",
      description: "解决内容创作的\"不知道写什么\"难题",
      icon: "edit-3",
      details: [
        "文案生成工具：输入产品关键词，自动生成多版本营销文案",
        "短视频脚本创作：根据行业特点，生成吸引人的视频脚本",
        "社交媒体内容：朋友圈、微博、小红书等平台内容一键生成",
        "邮件模板库：客户跟进、活动邀请、节日祝福等邮件模板"
      ]
    },
    {
      title: "技术支持与咨询",
      description: "AI技术应用的专业伙伴",
      icon: "trending-up",
      details: [
        "AI技术方案咨询：基于业务需求提供最适合的AI解决方案",
        "大模型应用指导：从模型选择到部署优化的全程支持",
        "系统集成支持：确保AI功能与现有系统无缝集成",
        "持续技术服务：定期优化和性能调优，保持最佳效果"
      ]
    }
  ],

  testimonials: [
    {
      quote: "李总帮我们集成了智能客服系统，客户咨询响应效率提升了3倍，技术实力很强。",
      author: "电商企业主"
    },
    {
      quote: "文案生成API接入后，我们的内容创作效率大大提升，AI技术真的很实用。",
      author: "营销公司负责人"
    },
    {
      quote: "从咨询到部署，灵映科技提供了完整的AI集成方案，专业可靠。",
      author: "传统企业CTO"
    }
  ],

  faq: [
    {
      question: "我们公司不懂AI技术，能顺利集成吗？",
      answer: "完全可以！我们提供从咨询到部署的全流程服务，有详细的技术支持和培训。"
    },
    {
      question: "AI API的成本和效果如何？",
      answer: "我们会根据您的业务需求推荐最适合的模型和方案，确保性价比最优。"
    },
    {
      question: "技术支持和后续维护怎么样？",
      answer: "提供持续的技术支持，定期优化性能，工作日9:00-18:00快速响应。"
    },
    {
      question: "可以先做技术咨询吗？",
      answer: "当然可以！我们提供免费的AI技术咨询，帮您评估最适合的解决方案。"
    }
  ],

  metrics: [
    { title: "API响应时间", value: "< 200ms", trend: "up" },
    { title: "准确率", value: "95.8%", trend: "up" },
    { title: "并发处理", value: "1000+ req/s", trend: "stable" },
    { title: "可用性", value: "99.9%", trend: "up" }
  ],

  github: {
    url: "https://github.com/aireels-dev/aireels-web",
    stars: "Star"
  }
};