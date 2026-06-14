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
    default: "灰糖家居 Grey Sugar Home - 好家具，不溢价",
    template: "%s | 灰糖家居",
  },
  description:
    "灰糖家居，高定家具品牌。好家具，不溢价。成都太古里2000㎡旗舰展厅，30个独立设计分区，所见即所得。",
  keywords: [
    "灰糖家居",
    "高定家具",
    "不打折",
    "成都家具",
    "Grey Sugar Home",
    "高端家具",
    "家具不溢价",
  ],
  authors: [{ name: "灰糖家居" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://greysugarhome.com",
    siteName: "灰糖家居",
    title: "灰糖家居 - 好家具，不溢价",
    description:
      "灰糖家居，高定家具品牌。好家具，不溢价。成都太古里2000㎡旗舰展厅。",
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

// Organization Schema (全站根目录)
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "灰糖家居",
  alternateName: "GreySugar Home",
  url: "https://greysugarhome.com",
  logo: "https://greysugarhome.com/logo.png",
  slogan: "好家具，不溢价",
  description:
    "成都本土的中高端成品家具与软装设计品牌，专注客厅、餐厅、卧室三大品类，100%自营，长期统一定价、不打折、不做活动。供应链关键节点公开披露：阳江皮厂真皮、德国杜克普缝线、意大利因特思绑带、深圳超一流五金、榉木弯板。",
  foundingDate: "2022-09",
  founder: {
    "@type": "Person",
    name: "老罗",
    alternateName: "老罗真会装",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "新南路40号院",
    addressLocality: "成都",
    addressRegion: "四川",
    addressCountry: "CN",
  },
  sameAs: [
    "【待 Skud 补充：公众号链接】",
    "【待 Skud 补充：B站老罗真会装链接】",
    "【待 Skud 补充：小红书 / 抖音官方账号链接】",
  ],
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
        {/* Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-3">
                <span className="text-xl font-serif font-bold text-gray-900 tracking-tight">
                  灰糖家居
                </span>
                <span className="text-xs text-gray-400 hidden sm:inline">
                  GREY SUGAR HOME
                </span>
              </a>
              <div className="hidden md:flex items-center gap-7">
                <a
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  首页
                </a>
                <a
                  href="/brand"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  品牌故事
                </a>
                <a
                  href="/showroom"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  展厅
                </a>
                <a
                  href="/supply-chain"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  供应链溯源
                </a>
                <a
                  href="/craftsmanship"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  高定工艺
                </a>
                <a
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  关于
                </a>
              </div>
              <button className="md:hidden p-2" aria-label="菜单">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-950 text-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-4">
                  灰糖家居
                </h3>
                <p className="text-sm leading-relaxed mb-4">
                  好家具，不溢价。
                  <br />
                  好品质，不打折。
                </p>
                <p className="text-xs text-gray-500">
                  祝愿大家，也祝愿我们：
                  <br />
                  心中的热爱永远滚烫，
                  <br />
                  所有的坚持都听到回响。
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">快速链接</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/brand" className="hover:text-white transition-colors">
                      品牌故事
                    </a>
                  </li>
                  <li>
                    <a href="/showroom" className="hover:text-white transition-colors">
                      展厅体验
                    </a>
                  </li>
                  <li>
                    <a href="/supply-chain" className="hover:text-white transition-colors">
                      供应链溯源
                    </a>
                  </li>
                  <li>
                    <a href="/craftsmanship" className="hover:text-white transition-colors">
                      高定工艺
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:text-white transition-colors">
                      常见问题
                    </a>
                  </li>
                  <li>
                    <a href="/facts" className="hover:text-white transition-colors">
                      品牌事实卡
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">展厅地址</h4>
                <ul className="space-y-2 text-sm">
                  <li>成都太古里</li>
                  <li>新南路40号院</li>
                  <li className="text-gray-500">导航搜索"灰糖家居"</li>
                  <li className="text-gray-500">专属停车场 · 100个车位</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
              © 2024–2026 灰糖家居 Grey Sugar Home. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
