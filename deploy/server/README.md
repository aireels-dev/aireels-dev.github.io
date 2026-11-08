# 服务器部署

正式入口：<https://aireelstech.com/>。服务器：`ubuntu@43.130.52.232`。

## 运行结构

- `/srv/aireels-website/compose.yaml`：独立 `aireels-website` 静态容器，固定使用已验证的 Caddy 2.11.8 镜像摘要。
- `/srv/aireels-website/Caddyfile`：内部 HTTP 服务，只在容器网络监听 8080。
- `/srv/aireels-website/releases/<版本>/`：Astro `dist/` 的完整静态产物。
- `/srv/aireels-website/releases/current`：相对符号链接；容器只读挂载整个 `releases`，切换链接即可发布新版本。
- `/srv/aireels-website/gateway.caddy`：主域名和 `www` 的入口片段，已追加至现有 `/srv/narraside/Caddyfile`。
- `/srv/aireels-website/state/`：仅 root 可访问的网关备份、加载验证和原有容器状态记录。

官网没有公开新的容器端口。现有 Caddy 在 443 接收域名请求，通过 `narraside-production_edge` 网络转发官网；原有叙外路由、运行配置和容器保持原状。

## DNS 与证书

阿里云 `aireelstech.com`：

| 主机记录 | 类型 | 记录值 | TTL |
| --- | --- | --- | --- |
| `@` | A | `43.130.52.232` | 600 秒 |
| `www` | A | `43.130.52.232` | 600 秒 |

现有网关通过 TLS-ALPN-01 签发 Let's Encrypt 证书，沿用其持久化证书卷和自动续期。`https://www.aireelstech.com/<路径>` 以 308 跳转到主域名的相同路径。现有服务器仅开放 SSH 与 HTTPS；本次沿用该端口策略。

## 常规更新

在维护端执行 `npm ci` 与 `npm run build`，仅打包 `dist/` 中的文件，上传到服务器的独立暂存目录。校验归档 SHA-256 后，解压到新的 `releases/<版本>/`，并核对首页、内页、JS、CSS 和 Logo 的内容哈希。

通过同目录临时链接与 `os.replace()` 原子更新 `releases/current`，保留旧版本用于回退。官网容器绑定的是整个发布目录，无需重建容器或重新加载共享网关。之后核对公开页面、资源及自定义 404。

GitHub Pages 继续由推送 `main` 的工作流构建部署。当前服务器发布使用既有 SSH 密钥；没有向 GitHub 或源码存储私钥，也没有新增服务器轮询任务。

## 入口配置变更

`gateway.caddy` 仅在首次接入或域名调整时应用。修改共享网关前，备份并校验当前配置哈希，生成合并后的候选配置，再通过运行中的同版本 Caddy 执行 `validate`。

当前网关关闭 admin API，启动命令为 `caddy run --config /etc/caddy/Caddyfile --adapter caddyfile`。已验证该版本支持 SIGUSR1 从原文件平滑加载。网关配置以单文件只读绑定到容器，写入时保留原 inode；关闭文件后再发送信号。

```sh
ssh "ubuntu@43.130.52.232" 'sudo -n docker kill --signal=USR1 narraside-production-ingress-1'
```

加载前后核对 `/narraside/health/ready`、账号页、公开政策页及启动接口；保留原有容器 ID、启动时间和重启计数。加载失败时恢复备份字节，再以相同方式加载。

## 验证记录

2026-11-09 接入时：官网静态容器 healthy；两个域名公共 DNS 指向目标 IP；两个域名均通过 TLS 1.3 与主机名校验。原有七个容器未重启；加载期间 20 次就绪检查全部返回 200，账号页与公开政策页哈希一致。原有 `aireels.dev/` 及 `/docs` 继续返回 404。

具体网关加载记录在服务器 `/srv/aireels-website/state/gateway-activation.json`，发布信息在 `/srv/aireels-website/deployment.json`。
