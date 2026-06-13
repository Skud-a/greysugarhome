import Link from "next/link";

// Product Schema (3 品类占位 — 具体产品上架时替换)
const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "灰糖家居 · 客厅系列",
    description:
      "灰糖家居客厅系列成品家具，涵盖沙发、茶几、电视柜，9大高定工艺统一执行，所见即所得。",
    brand: { "@type": "Brand", name: "灰糖家居" },
    category: "客厅家具",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CNY",
      lowPrice: "【待 Skud 补充】",
      highPrice: "【待 Skud 补充】",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "灰糖家居 · 餐厅系列",
    description:
      "灰糖家居餐厅系列成品家具，涵盖餐桌、餐椅、餐边柜，精致工艺，品质生活。",
    brand: { "@type": "Brand", name: "灰糖家居" },
    category: "餐厅家具",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CNY",
      lowPrice: "【待 Skud 补充】",
      highPrice: "【待 Skud 补充】",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "灰糖家居 · 卧室系列",
    description:
      "灰糖家居卧室系列成品家具，涵盖床、床头柜，舒适睡眠，匠心打造。",
    brand: { "@type": "Brand", name: "灰糖家居" },
    category: "卧室家具",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CNY",
      lowPrice: "【待 Skud 补充】",
      highPrice: "【待 Skud 补充】",
      availability: "https://schema.org/InStock",
    },
  },
];

// Review + AggregateRating 壳子 — 真实评价齐了再填，本轮不伪造数据
const reviewSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "灰糖家居 · 客厅系列",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "【待 Skud 补充】",
      reviewCount: "【待 Skud 补充】",
    },
    review: [
      // 待 Skud 提供真实客户评价后填入
      // {
      //   "@type": "Review",
      //   author: { "@type": "Person", name: "客户姓名" },
      //   datePublished: "YYYY-MM-DD",
      //   reviewBody: "评价内容",
      //   reviewRating: { "@type": "Rating", ratingValue: "5" },
      // }
    ],
  },
];

const categories = [
  {
    name: "客厅 Living",
    desc: "沙发、茶几、电视柜",
    note: "高定工艺，所见即所得",
  },
  {
    name: "餐厅 Dining",
    desc: "餐桌、餐椅、餐边柜",
    note: "精致工艺，品质生活",
  },
  {
    name: "卧室 Sleeping",
    desc: "床、床头柜",
    note: "舒适睡眠，匠心打造",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Product JSON-LD Schemas */}
      {productSchemas.map((schema, i) => (
        <script
          key={`product-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {reviewSchemas.map((schema, i) => (
        <script
          key={`review-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">Products</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            产品中心
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            高定工艺，品质保证
            <br />
            所见即所得，拒绝"见光死"
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Categories</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              产品分类
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-10 text-center hover:border-gray-300 transition-colors">
                <div className="text-xs text-gray-400 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{cat.desc}</p>
                <p className="text-xs text-gray-400">{cat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              为什么选择灰糖
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "9大高定工艺",
                desc: "从内外套到看不见的细节，每一项工艺都经过严格把控",
              },
              {
                title: "120,000公里溯源",
                desc: "3年飞行12万公里，从源头找到最好的材料",
              },
              {
                title: "所见即所得",
                desc: "展厅看到的产品就是你收到的产品，拒绝效果图与实物不符",
              },
              {
                title: "不打折不溢价",
                desc: "明码实价，去除品牌溢价，让好家具回归合理价格",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="text-xs text-gray-400 mb-3">0{i + 1}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">
            产品详情正在完善中
          </h2>
          <p className="text-gray-400 mb-8">
            欢迎到成都太古里展厅体验实物
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              预约展厅
            </Link>
            <Link href="/craftsmanship" className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors">
              高定工艺
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
