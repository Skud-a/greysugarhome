import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    // llm.txt 与 llms.txt 内容完全一致，保留旧路径做 301，避免两个 URL 各说一遍
    return [
      { source: "/llm.txt", destination: "/llms.txt", permanent: true },
    ];
  },
};

export default nextConfig;
