# 官网发布与验收

正式网站：https://aireelstech.com/

GitHub Pages 镜像：https://aireels-dev.github.io/

仓库：https://github.com/aireels-dev/aireels-dev.github.io

当前网站使用 A 方案，包含中英文首页、服务介绍、关于我们、联系我们、隐私政策和错误页。默认语言根据浏览器匹配，英文兜底；公开邮箱为 `business@aireelstech.com`，微信为 `aireels`，联系页同时提供微信与飞书二维码。

Logo 统一使用共享组件内联 SVG，保留完整外形；标签页图标为白底黑色。公司 SVG 原文件已在公司资料目录备份。

发布流程：本地构建与检查 → 推送 main → 等待 GitHub Pages 工作流成功 → 下载同一次工作流的静态产物 → 校验并上传服务器 → 原子切换版本目录 → 公网与浏览器验收。

网络验收命令：

```sh
./verify-deployment.sh
```

检查中英文页面、内联 Logo、公开联系方式、页面与静态资源、HTTPS，以及评审页未公开。服务器发布记录保存在 `/srv/aireels-website/deployment.json`，包含源提交、产物哈希、回滚目标及其他服务的状态核对。详细运行结构见 [服务器部署](deploy/server/README.md)。
