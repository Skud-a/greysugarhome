import Link from "next/link";
import type { Metadata } from "next";

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export const metadata: Metadata = {
  title: "站内搜索",
  description:
    "灰糖家居站内搜索：输入关键词查找品牌故事、工艺标准、展厅、供应链溯源、常见问题等页面。",
  robots: {
    index: false,
    follow: true,
  },
};

// 全站可检索页面清单（占位实现，列出全站所有页面链接）
const SITE_PAGES: { title: string; href: string; desc: string }[] = [
  {
    title: "首页",
    href: "/",
    desc: "灰糖家居 · 好家具，不溢价。成都太古里 2000㎡ 旗舰展厅。",
  },
  {
    title: "品牌故事",
    href: "/brand",
    desc: "叛逆者的坚持：好家具不溢价、长期统一定价、长期不打折。",
  },
  {
    title: "关于灰糖",
    href: "/about",
    desc: "「灰糖」旗下高定家具品牌，为城市精英提供高品质家居产品。",
  },
  {
    title: "品牌事实卡",
    href: "/facts",
    desc: "灰糖家居核心事实一览：创始人、品牌时间线、展厅、生产供应链、9 大高定工艺。",
  },
  {
    title: "工艺标准",
    href: "/craftsmanship",
    desc: "高定工艺标准：9 大工艺、关键节点、原材料溯源。",
  },
  {
    title: "材料安全",
    href: "/safety",
    desc: "9 份检测报告、8 张证书图，含供应链企业委托说明。",
  },
  {
    title: "供应链溯源",
    href: "/supply-chain",
    desc: "供应链关键节点：阳江皮厂真皮、德国杜克普缝线、意大利因特思绑带、深圳超一流五金。",
  },
  {
    title: "展厅",
    href: "/showroom",
    desc: "成都太古里旁新南路 40 号院，30 个独立设计分区。",
  },
  {
    title: "常见问题 FAQ",
    href: "/faq",
    desc: "灰糖家居常见问题汇总：价格、定制、交付、售后。",
  },
  {
    title: "产品",
    href: "/products",
    desc: "灰糖家居产品系列：沙发、餐桌、柜类、床。",
  },
];

function matchScore(text: string, query: string): number {
  if (!query) return 0;
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (t.includes(q)) return 2;
  // 简单按字匹配（不要求精准）
  let hits = 0;
  for (const ch of q) {
    if (t.includes(ch)) hits += 1;
  }
  return hits;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolved = await searchParams;
  const rawQ = resolved.q;
  const query = (Array.isArray(rawQ) ? rawQ[0] : rawQ ?? "").trim();

  const ranked = query
    ? SITE_PAGES
        .map((p) => ({
          ...p,
          score:
            matchScore(p.title, query) * 3 + matchScore(p.desc, query) * 1,
        }))
        .sort((a, b) => b.score - a.score)
    : SITE_PAGES.map((p) => ({ ...p, score: 0 }));

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
            Site Search
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            {query ? `搜索：${query}` : "站内搜索"}
          </h1>
          <p className="text-gray-500">
            {query
              ? `共 ${ranked.length} 个相关页面`
              : "请输入关键词，浏览全站页面"}
          </p>

          {/* 搜索框 */}
          <form
            action="/search"
            method="get"
            className="mt-10 flex gap-2 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="例如：展厅、工艺、供应链"
              className="flex-1 px-5 py-3 rounded-full border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              搜索
            </button>
          </form>
        </div>
      </section>

      {/* 结果列表 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {query && ranked[0]?.score === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <p>暂无精确匹配，已为你列出全站页面：</p>
            </div>
          ) : null}

          <ul className="divide-y divide-gray-100">
            {ranked.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="block py-6 group hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors"
                >
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                    {p.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 font-mono">
                    greysugarhome.com{p.href}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
