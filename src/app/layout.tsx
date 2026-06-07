import type { Metadata } from "next";
import { Inter, Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "灰糖家居 Grey Sugar Home - 简约北欧生活方式",
    template: "%s | 灰糖家居 Grey Sugar Home",
  },
  description:
    "灰糖家居，专注于简约、北欧风格的现代家居品牌。为您提供高品质的家具、家居饰品和装饰品，打造温馨舒适的生活空间。",
  keywords: [
    "灰糖家居",
    "北欧风格",
    "简约家居",
    "现代家具",
    "家居装饰",
    "Grey Sugar Home",
  ],
  authors: [{ name: "灰糖家居" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://greysugarhome.com",
    siteName: "灰糖家居",
    title: "灰糖家居 Grey Sugar Home - 简约北欧生活方式",
    description:
      "灰糖家居，专注于简约、北欧风格的现代家居品牌。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSerif.variable} ${notoSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold text-gray-900">
                  灰糖
                </span>
                <span className="text-sm text-gray-500">Grey Sugar</span>
              </a>
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  首页
                </a>
                <a
                  href="/products"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  产品
                </a>
                <a
                  href="/brand"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  品牌
                </a>
                <a
                  href="/faq"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  关于
                </a>
              </div>
              <button className="md:hidden p-2" aria-label="菜单">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  灰糖家居
                </h3>
                <p className="text-gray-600 max-w-md">
                  灰糖家居致力于为追求品质生活的人群提供简约、北欧风格的现代家居产品。我们相信，好的设计可以让生活更美好。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">快速链接</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="/products" className="hover:text-gray-900">
                      产品中心
                    </a>
                  </li>
                  <li>
                    <a href="/brand" className="hover:text-gray-900">
                      品牌故事
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-gray-900">
                      关于我们
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:text-gray-900">
                      常见问题
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">联系我们</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>邮箱: hello@greysugarhome.com</li>
                  <li>电话: 400-888-8888</li>
                  <li>地址: 上海市静安区</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
              © 2024 灰糖家居 Grey Sugar Home. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
