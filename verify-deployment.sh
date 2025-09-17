#!/bin/bash

echo "🔍 AIReels 网站部署验证脚本"
echo "================================="

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 仓库信息
REPO_URL="https://github.com/aireels-dev/aireels-web"
SITE_URL="https://aireels-dev.github.io/aireels-web"
API_BASE="https://api.github.com/repos/aireels-dev/aireels-web"

echo -e "${BLUE}正在验证部署状态...${NC}\n"

# 1. 检查仓库是否存在
echo "1. 检查 GitHub 仓库状态..."
REPO_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$API_BASE")

if [ "$REPO_STATUS" = "200" ]; then
    echo -e "   ✅ GitHub 仓库存在: ${GREEN}$REPO_URL${NC}"
else
    echo -e "   ❌ GitHub 仓库不存在 (HTTP $REPO_STATUS)"
    echo -e "   ${YELLOW}请先创建 GitHub 仓库并推送代码${NC}"
    exit 1
fi

# 2. 检查最新提交
echo -e "\n2. 检查最新提交..."
LATEST_COMMIT=$(curl -s "$API_BASE/commits/main" | grep -o '"sha":"[^"]*' | cut -d'"' -f4 | head -1)
if [ -n "$LATEST_COMMIT" ]; then
    echo -e "   ✅ 最新提交: ${GREEN}${LATEST_COMMIT:0:7}${NC}"
else
    echo -e "   ❌ 无法获取提交信息"
fi

# 3. 检查 GitHub Actions 工作流
echo -e "\n3. 检查 GitHub Actions 状态..."
WORKFLOW_STATUS=$(curl -s "$API_BASE/actions/runs?per_page=1" | grep -o '"conclusion":"[^"]*' | cut -d'"' -f4 | head -1)
if [ -n "$WORKFLOW_STATUS" ]; then
    if [ "$WORKFLOW_STATUS" = "success" ]; then
        echo -e "   ✅ 最新工作流: ${GREEN}成功${NC}"
    elif [ "$WORKFLOW_STATUS" = "failure" ]; then
        echo -e "   ❌ 最新工作流: ${RED}失败${NC}"
        echo -e "   ${YELLOW}请检查 Actions 页面: $REPO_URL/actions${NC}"
    else
        echo -e "   🔄 最新工作流: ${YELLOW}$WORKFLOW_STATUS${NC}"
    fi
else
    echo -e "   ⚠️  ${YELLOW}工作流未运行或无法获取状态${NC}"
fi

# 4. 检查 GitHub Pages 配置
echo -e "\n4. 检查 GitHub Pages 配置..."
PAGES_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$API_BASE/pages")
if [ "$PAGES_STATUS" = "200" ]; then
    echo -e "   ✅ GitHub Pages: ${GREEN}已配置${NC}"
else
    echo -e "   ❌ GitHub Pages: ${RED}未配置${NC}"
    echo -e "   ${YELLOW}请在仓库设置中启用 GitHub Pages${NC}"
fi

# 5. 检查网站访问性
echo -e "\n5. 检查网站访问性..."
SITE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")
if [ "$SITE_STATUS" = "200" ]; then
    echo -e "   ✅ 网站可访问: ${GREEN}$SITE_URL${NC}"

    # 检查网站内容
    echo -e "\n6. 检查网站内容..."
    CONTENT_CHECK=$(curl -s "$SITE_URL" | grep -o "郑州灵映科技\|AIReels\|AI驱动" | head -1)
    if [ -n "$CONTENT_CHECK" ]; then
        echo -e "   ✅ 网站内容: ${GREEN}正确加载${NC}"
    else
        echo -e "   ⚠️  ${YELLOW}网站内容可能不完整${NC}"
    fi
else
    echo -e "   ❌ 网站无法访问 (HTTP $SITE_STATUS)"
    if [ "$SITE_STATUS" = "404" ]; then
        echo -e "   ${YELLOW}可能原因：GitHub Pages 未配置或部署失败${NC}"
    fi
fi

echo -e "\n================================="
echo -e "${BLUE}验证完成！${NC}"

# 提供解决方案
if [ "$SITE_STATUS" != "200" ]; then
    echo -e "\n${YELLOW}🔧 解决步骤：${NC}"
    echo "1. 确保代码已推送到 GitHub"
    echo "2. 在仓库设置中启用 GitHub Pages"
    echo "3. 选择 'GitHub Actions' 作为部署源"
    echo "4. 等待工作流完成部署"
    echo ""
    echo -e "${BLUE}📖 详细步骤请参考 deploy.md 文件${NC}"
else
    echo -e "\n${GREEN}🎉 网站部署成功！${NC}"
    echo -e "访问地址: ${GREEN}$SITE_URL${NC}"
fi