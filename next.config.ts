import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态站点生成配置
  output: "export",
  
  // 图片优化配置（静态导出需要）
  images: {
    unoptimized: true,
  },
  
  // 严格的React模式
  reactStrictMode: true,
  
  // SEO友好的URL
  trailingSlash: true,
  
  // 页面扩展名
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  
  // 实验性功能
  experimental: {
    // 优化包导入
    optimizePackageImports: ["lucide-react", "clsx", "tailwind-merge"],
  },
};

export default nextConfig;
