# 灰糖家居官网

> Grey Sugar Home - 简约北欧生活方式

## 项目简介

灰糖家居官网，基于 Next.js + App Router + TailwindCSS 构建的静态站点，面向全球用户提供品牌展示和产品介绍。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: TailwindCSS 4
- **部署**: Vercel (静态导出)
- **内容管理**: Markdown/MDX
- **SEO**: 优化的 Meta 标签、Open Graph、Sitemap

## 页面结构

- `/` - 首页
- `/products` - 产品中心
- `/brand` - 品牌故事
- `/faq` - 常见问题
- `/about` - 关于我们

## 快速开始

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run start
```

### 部署到 Vercel

1. Fork 本仓库到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置域名 greysugarhome.com

## 项目结构

```
greysugarhome/
├── src/
│   └── app/
│       ├── globals.css      # 全局样式
│       ├── layout.tsx       # 根布局
│       ├── page.tsx         # 首页
│       ├── products/        # 产品页
│       ├── brand/           # 品牌页
│       ├── faq/             # FAQ页
│       └── about/           # 关于页
├── public/                  # 静态资源
├── next.config.ts          # Next.js 配置
├── vercel.json             # Vercel 配置
└── package.json
```

## SEO 配置

- 优化的 Meta 标签
- Open Graph 社交分享
- robots.txt
- sitemap.xml (待添加)
- 结构化数据 (待添加)

## 性能优化

- SSG 静态站点生成
- 图片懒加载
- 代码分割
- CDN 全球加速

## License

© 2024 灰糖家居 Grey Sugar Home. All rights reserved.

<!-- 2026-06-14 webhook 重连测试，无功能变更 -->
