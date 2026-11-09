# 灵映科技 · AIReels 官网

基于 Astro 5 的静态企业官网，采用 A「事件视界」视觉方案。正式入口：https://aireelstech.com/ 。GitHub Pages 镜像：https://aireels-dev.github.io/ 。

## 开发与构建

```sh
npm ci
npm run dev
npm run build
npm run check:site
npm run preview -- --host 127.0.0.1 --port 4322
```

## 页面

- `/en/`、`/zh/`：完整英文与简体中文首页。
- 两种语言均包含 `services/`、`about/`、`contact/`、`privacy/` 和 `404/` 页面。
- `/` 及原来的无语言前缀内页按浏览器支持的语言匹配，无法匹配时使用英文；手动选择优先，并保留页面、查询参数和锚点。
- 顶部语言选择使用显式语言链接；浏览器禁用 JavaScript 时，入口保留可阅读的英文页面。
- `/404.html` 为默认英文错误页；服务器根据 `/zh/` 前缀提供中文错误页，保留 HTTP 404 状态。
- 旧 `/aireels-web/` 与 `/concepts/` 系列入口继续跳转首页。

## 内容和视觉维护

- `src/config.ts`：站点信息、导航、服务范围及 FAQ。
- `src/data/site-content.ts`：服务展示文案、应用方向及合作流程。
- `src/i18n/copy.ts`、`routing.ts`：完整语言文案、语言路径与页面类型。
- `src/components/SitePage.astro`：共享的双语页面模板；语言页面由静态路径生成。
- `src/layouts/Layout.astro`、`SiteHeader.astro`、`SiteFooter.astro`：公共布局及导航。
- `src/components/HorizonHome.astro`：首页内容；`HorizonScenarios.astro`：可键盘操作的场景选项卡。
- `src/styles/horizon.css`：光轮、品牌与应用场景；`site.css`：正式页面与移动导航。
- `src/scripts/concept-motion.ts`：鼠标响应、粒子绘制、滚动视差和暂停状态。
- `public/brand/aireels-logo-master.png`：完整 Logo 原稿，以 CSS 适配深色背景。

光轮最大水平倾角固定 6°，纵向 3°、平面扭转 0.4°。前景响应时间常数 320ms，背景 90ms。背景粒子独立绘制，绘制频率上限 30fps；触摸设备不依赖鼠标交互，支持系统减少动态效果及页脚手动暂停。

手机首屏按文案、独立光轮画面、滚动提示三行排布，装饰小字在手机隐藏，光轮和粒子居中。页面使用 `lang`、canonical 与双向 hreflang，sitemap 仅收录两种语言的十个正式内容页面。地域信息仅保留公司全称和明确标注的注册地。

`npm run check:site` 检查实际构建中的语言匹配脚本、偏好与路径保留、双语页面及导航、文案地域限制和 sitemap；GitHub 工作流会在部署前执行。

公开联系邮箱统一为 `business@aireelstech.com`，由 `src/config.ts` 的 `contactEmail` 集中维护。联系入口使用真实 `mailto:`、`tel:` 链接；网站没有在线表单后台、登录或 AI 生成接口。详细视觉说明与验证记录见 [DESIGN.md](DESIGN.md)。

## 部署

推送 `main` 后，`.github/workflows/deploy.yml` 工作流执行 `npm ci`、`npm run build`，随后部署到 GitHub Pages。实际工作流文件名以仓库 `.github/workflows/` 为准。

`43.130.52.232` 同步运行官网，`aireelstech.com` 和 `www.aireelstech.com` 的 A 记录指向该服务器。主域名使用 HTTPS，`www` 以 308 跳转到主域名；证书由现有 Caddy 网关自动签发与续期。

服务器配置位于 `deploy/server/`，运行目录为 `/srv/aireels-website`。官网使用独立容器、只读静态目录和版本化发布，常规更新切换 `releases/current`，不需要改动共享网关。首次接入、验证与回退说明见 [服务器部署](deploy/server/README.md)。

canonical、sitemap 与公开域名标记 `public/CNAME` 统一使用 `aireelstech.com`。主域名由自有服务器承载，GitHub Pages 当前设置保留默认域名作为镜像；实际绑定以 Pages 设置为准。
