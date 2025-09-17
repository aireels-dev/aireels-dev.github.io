#!/bin/bash

echo "🌐 AIReels 网站本地预览脚本"
echo "================================="

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}正在启动本地预览...${NC}\n"

# 检查是否已构建
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}📦 构建网站...${NC}"
    npm run build
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ 构建失败${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ 构建完成${NC}\n"
fi

# 显示网站信息
echo -e "${CYAN}📋 网站信息：${NC}"
echo "   标题: AIReels 官网"
echo "   描述: 郑州灵映科技 AI驱动数字化营销工具"
echo "   技术栈: Astro.js + Tailwind CSS + Alpine.js"
echo ""

echo -e "${CYAN}📄 页面列表：${NC}"
echo "   🏠 首页 (index.html)"
echo "   📦 产品页面 (products/index.html)"
echo "   🎮 演示页面 (demo/index.html)"
echo "   📚 文档页面 (docs/index.html)"
echo "   ℹ️  关于页面 (about/index.html)"
echo "   📞 联系页面 (contact/index.html)"
echo ""

echo -e "${CYAN}🔧 核心功能：${NC}"
echo "   ✅ 极简技术风格设计"
echo "   ✅ 响应式布局 (移动端适配)"
echo "   ✅ 暗色模式支持"
echo "   ✅ 代码高亮展示"
echo "   ✅ AI功能演示"
echo "   ✅ 交互式表单"
echo "   ✅ 性能指标展示"
echo ""

# 启动预览服务器
echo -e "${GREEN}🚀 启动预览服务器...${NC}"
echo -e "${YELLOW}预览地址: http://localhost:4321/aireels-web${NC}"
echo -e "${YELLOW}按 Ctrl+C 停止服务器${NC}"
echo ""

# 检查端口是否被占用
if lsof -Pi :4321 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${RED}⚠️  端口 4321 已被占用，尝试停止现有进程...${NC}"
    pkill -f "astro dev" 2>/dev/null || true
    sleep 2
fi

# 启动开发服务器
npm run dev

echo -e "\n${BLUE}预览结束${NC}"