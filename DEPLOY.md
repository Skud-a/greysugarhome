# 灰糖家居官网 - 部署指南

## 项目信息

- **项目路径**: `./greysugarhome`
- **技术栈**: Next.js 16 + App Router + TailwindCSS 4
- **部署平台**: Vercel
- **构建输出**: 静态文件 (SSG)

---

## 部署步骤

### 1. 推送代码到 GitHub

```bash
cd greysugarhome

# 添加远程仓库（请替换为你的GitHub仓库地址）
git remote add origin https://github.com/你的用户名/greysugarhome.git

# 推送代码
git branch -M main
git push -u origin main
```

### 2. 在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 "Add New..." → "Project"
3. 导入你的 GitHub 仓库
4. Framework Preset 会自动识别为 Next.js
5. 点击 "Deploy"

### 3. 配置域名

部署完成后，在项目设置中添加自定义域名：

1. 进入项目 → Settings → Domains
2. 添加 `greysugarhome.com`
3. Vercel 会自动配置 SSL 证书
4. 等待 DNS 验证通过

### 4. DNS 配置

在你的域名服务商处，将 DNS 记录指向 Vercel：

```
类型: CNAME
名称: @
值: cname.vercel-dns.com
```

或者如果你使用子域名：

```
类型: CNAME
名称: www
值: cname.vercel-dns.com
```

---

## 本地开发

```bash
cd greysugarhome

# 安装依赖（如尚未安装）
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run start
```

---

## 页面结构

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 品牌展示、精选产品 |
| `/products/` | 产品中心 | 产品列表、分类筛选 |
| `/brand/` | 品牌故事 | 品牌历史、理念 |
| `/faq/` | 常见问题 | FAQ 折叠面板 |
| `/about/` | 关于我们 | 公司介绍、联系方式 |

---

## SEO 配置

项目已配置：

- [x] 优化的 Meta 标签
- [x] Open Graph 社交分享
- [x] 结构化 Metadata
- [ ] sitemap.xml（待添加）
- [ ] robots.txt（待添加）

---

## 性能优化

- SSG 静态站点生成
- 图片优化（配置已就绪）
- 代码分割
- TailwindCSS 按需编译

---

## 后续工作

1. 添加 sitemap.xml
2. 添加 robots.txt
3. 添加实际产品图片
4. 配置 Google Analytics
5. 添加联系表单后端
