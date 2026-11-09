# 部署指南

仓库为 [aireels-dev/aireels-dev.github.io](https://github.com/aireels-dev/aireels-dev.github.io)，正式入口为 [aireelstech.com](https://aireelstech.com/)，[GitHub Pages](https://aireels-dev.github.io/) 保留为镜像。

推送 `main` 后，`.github/workflows/deploy.yml` 安装锁定依赖、构建静态页面、执行站点检查，并发布 GitHub Pages。以该次成功工作流的 `github-pages` 产物同步独立服务器，保证两个入口使用同一份构建文件。

```sh
npm ci
npm run build
npm run check:site
./verify-deployment.sh
```

服务器通过版本目录与原子符号链接发布，更新前后核对静态文件哈希、共享网关配置及已有容器状态，保留旧版以便回退。常规更新不重启容器、不修改共享网关和 DNS。详细操作见 [服务器部署](deploy/server/README.md)。

设计实验、截图与 SVG 对照页仅留本地，不进入生产源码或静态产物。验收应确认正式页面及资源可访问，而 `/review/` 评审路径返回 404。

公开联系邮箱：business@aireelstech.com。
