export const siteConfig = {
  title: "郑州灵映科技",
  description: "让每个创业者都能用上专业的AI工具",
  url: "https://aireels-dev.github.io/aireels-web",
  author: "郑州灵映科技",
  logo: "/logo.png",

  nav: [
    { title: "产品", href: "/products" },
    { title: "Demo", href: "/demo" },
    { title: "文档", href: "/docs" },
    { title: "关于", href: "/about" },
    { title: "联系", href: "/contact" },
  ],

  features: [
    {
      title: "轻量化营销工具开发",
      description: "让个人创业者也能拥有专业工具",
      icon: "tool",
      details: [
        "简易官网搭建：拖拽式建站，无需代码基础",
        "智能表单系统：客户信息收集、预约管理、问卷调查",
        "基础会员管理：客户档案、消费记录、回访提醒",
        "数据统计面板：访问量、转化率、客户来源等关键数据"
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
      title: "运营指导与优化建议",
      description: "新手创业路上的贴心助手",
      icon: "trending-up",
      details: [
        "营销策略建议：基于行业经验提供实用的营销思路",
        "内容优化反馈：分析内容表现，给出改进建议",
        "工具使用指导：详细的操作教程和最佳实践分享",
        "同行案例参考：匿名化的成功案例和经验分享"
      ]
    }
  ],

  testimonials: [
    {
      quote: "以前总是不知道怎么写朋友圈推广自己，用了文案生成工具后，每天发圈不再是难事，询盘确实多了一些。",
      author: "自由设计师"
    },
    {
      quote: "简易官网帮我省了不少建站费用，客户可以直接在线预约，比微信沟通方便多了。",
      author: "烘焙工作室创始人"
    },
    {
      quote: "短视频脚本生成器很实用，给了我很多拍摄灵感，现在内容更新不再是负担。",
      author: "健身教练"
    }
  ],

  faq: [
    {
      question: "我完全不懂技术，能用吗？",
      answer: "完全可以！我们的工具都是傻瓜式操作，有详细教程，遇到问题随时咨询。"
    },
    {
      question: "生成的内容会和别人重复吗？",
      answer: "不会。AI会根据您的行业特点和个人风格调整，每次生成的内容都不相同。"
    },
    {
      question: "可以免费试用吗？",
      answer: "可以！新用户可以免费试用7天，体验所有功能。"
    },
    {
      question: "如果不满意可以退款吗？",
      answer: "使用未超过3天且生成内容少于50次的用户，支持全额退款。"
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