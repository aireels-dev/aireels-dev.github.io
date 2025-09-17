# AIReels 官网

基于 Astro.js 构建的极简技术风格官网，展示郑州灵映科技的AI驱动数字化营销工具。

## 🚀 技术栈

- **框架**: Astro 4.0+
- **样式**: Tailwind CSS
- **交互**: Alpine.js
- **部署**: GitHub Pages
- **字体**: JetBrains Mono + Inter

## 🎨 设计特色

- **极简美学**: 大量留白，精确的8px网格系统
- **技术感**: 代码块样式，终端界面元素，等宽字体应用
- **暗色模式**: 完整的light/dark主题切换
- **响应式**: 移动优先设计，完美适配各种屏幕尺寸

## 📁 项目结构

```
src/
├── components/          # 组件
│   ├── Header.astro    # 导航栏
│   ├── Footer.astro    # 页脚
│   ├── CodeBlock.astro # 代码展示组件
│   ├── MetricCard.astro # 性能指标卡片
│   └── TestimonialCard.astro # 用户证言卡片
├── layouts/
│   └── Layout.astro    # 基础布局
├── pages/              # 页面
│   ├── index.astro     # 首页
│   ├── products.astro  # 产品页面
│   ├── demo.astro      # 演示页面
│   ├── docs.astro      # 文档页面
│   ├── about.astro     # 关于页面
│   └── contact.astro   # 联系页面
├── config.ts           # 站点配置
└── ...
```

## 🛠️ 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 🌐 部署

项目配置了 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 访问 `https://aireels-dev.github.io/aireels-web`

## 📱 页面功能

### 首页 (`/`)
- Hero 区域：命令行风格欢迎界面
- 核心价值主张展示
- AI能力演示（代码示例）
- 用户证言
- 性能指标展示

### 产品页面 (`/products`)
- 三大核心业务模块详细介绍
- API示例代码展示
- 技术优势说明
- 集成能力介绍

### 演示页面 (`/demo`)
- 在线AI内容生成器
- 实时性能监控
- 多语言代码示例
- API服务状态监控

### 文档页面 (`/docs`)
- 快速开始指南
- 完整API参考
- 错误处理说明
- FAQ手风琴组件

### 关于页面 (`/about`)
- 公司使命和愿景
- 目标用户群体
- 技术架构展示
- 团队信息

### 联系页面 (`/contact`)
- 联系表单（Alpine.js驱动）
- 多渠道联系方式
- 服务方案概述
- 响应时间说明

## 🎨 主题色彩

```css
:root {
  --tech-black: #1a1a1a;      /* 技术黑 */
  --minimal-white: #fafafa;    /* 极简白 */
  --function-blue: #0066cc;    /* 功能蓝 */
  --success-green: #00d084;    /* 成功绿 */
}
```

## 🔧 配置说明

### Site 配置 (`src/config.ts`)

包含站点的所有配置信息：
- 基本信息（标题、描述等）
- 导航菜单
- 功能特性
- 用户证言
- FAQ内容
- 性能指标

### Astro 配置 (`astro.config.mjs`)

- 站点URL和base路径
- 集成插件（Tailwind、Sitemap、MDX）
- 构建配置

### Tailwind 配置 (`tailwind.config.mjs`)

- 自定义颜色
- 字体配置
- 扩展间距
- Typography插件

## 📦 组件说明

### CodeBlock
- 支持多语言语法高亮
- 一键复制功能
- 终端风格设计
- 深色主题适配

### MetricCard
- 性能指标展示
- 趋势指示器
- 响应式设计

### TestimonialCard
- 用户证言展示
- 自动生成头像
- 验证徽章

## 🚀 性能优化

- 静态生成，零JavaScript运行时（除交互组件）
- 图片懒加载
- CSS Critical Path内联
- 字体预加载
- Service Worker缓存

## 📱 响应式断点

```css
sm: 640px    /* 小屏手机 */
md: 768px    /* 平板 */
lg: 1024px   /* 小屏笔记本 */
xl: 1280px   /* 桌面显示器 */
2xl: 1536px  /* 大屏显示器 */
```

## 🔄 更新日志

### v1.0.0 (2024-09-18)
- 初始版本发布
- 完整的多页面网站
- 响应式设计
- 暗色模式支持
- GitHub Pages部署

## 📄 许可证

本项目采用 MIT 许可证。

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目。

---

**联系我们**: contact@lytech.ai
**项目地址**: https://github.com/aireels-dev/aireels-web
