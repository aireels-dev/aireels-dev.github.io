# 部署指南

## GitHub 仓库设置步骤

### 1. 创建 GitHub 仓库
请按照以下步骤手动创建 GitHub 仓库：

1. 访问 https://github.com/new
2. 设置仓库信息：
   - **Repository name**: `aireels-web`
   - **Owner**: `aireels-dev` (需要先创建此组织)
   - **Description**: `AIReels官网 - 基于Astro.js的极简技术风格官网`
   - **Visibility**: Public
   - **不要勾选**: "Add a README file", "Add .gitignore", "Choose a license"

3. 点击 "Create repository"

### 2. 推送代码到 GitHub

在项目根目录执行以下命令：

```bash
# 推送代码到 GitHub（需要身份验证）
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入仓库设置页面：
   - 访问 `https://github.com/aireels-dev/aireels-web/settings`

2. 找到 "Pages" 选项：
   - 在左侧菜单中点击 "Pages"

3. 配置部署源：
   - **Source**: 选择 "GitHub Actions"
   - 系统会自动检测到我们的 `.github/workflows/deploy.yml` 文件

4. 确认配置：
   - 点击 "Save" 保存设置

### 4. 等待部署完成

1. 推送代码后，GitHub Actions 会自动触发部署
2. 可以在 `Actions` 标签页查看部署进度
3. 部署完成后，网站将在以下地址可用：
   ```
   https://aireels-dev.github.io/aireels-web
   ```

## 本地开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 故障排除

### 如果推送失败
1. 确保 GitHub 仓库已创建
2. 检查 Git 配置：
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
3. 如果需要身份验证，使用 Personal Access Token

### 如果部署失败
1. 检查 GitHub Actions 日志
2. 确保 `package.json` 中的依赖版本正确
3. 检查 `astro.config.mjs` 中的 site 和 base 配置

## 项目特色

- ✅ 极简技术风格设计
- ✅ 完整的 6 个页面
- ✅ 响应式布局
- ✅ 暗色模式支持
- ✅ 代码高亮展示
- ✅ AI 功能演示
- ✅ 自动化部署
- ✅ SEO 优化

## 联系信息

如有问题，请通过以下方式联系：
- Email: contact@lytech.ai
- 项目地址: https://github.com/aireels-dev/aireels-web