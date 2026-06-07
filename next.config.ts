import type { NextConfig } from "next";\n\nconst nextConfig: NextConfig:={
  // static site generation configuration
  output: "export",\n  // image optimization configuration (static export needs)
  images: {
    unoptimized: true,
  },
  // strict React mode
  reactStrictMode: true,\n  // SEO-friendly URLs
  trailingSlash: true,\n  // page extensions
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};\n\nexport default nextConfig;\n