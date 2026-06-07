import Link from "next/link";

export default function BrandPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-main text-center">
          <span className="text-accent font-medium mb-4 block">Brand Story</span>
          <h1 className="heading-1 text-white mb-6">品牌故事</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            好家具，不溢价
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <span className="text-accent font-medium mb-4 block">01 / 理念</span>
              <h2 className="heading-2 mb-6">我们的信念</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  灰糖家居相信，好的家具不应该被过高的品牌溢价所绑架。我们致力于为城市精英提供真正高品质的家居产品，通过精简中间环节、优化供应链，让更多人能够享受到高品质的家居生活。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "好家具，不溢价" —— 这是我们对每一位客户的承诺。
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <blockquote className="text-2xl font-serif text-gray-800 italic mb-4">
                "让更多人享受高品质家居，是我们不变的追求。"
              </blockquote>
              <cite className="text-gray-500">—— 灰糖家居</cite>
            </div>

            <div className="mb-16">
              <span className="text-accent font-medium mb-4 block">02 / 品质</span>
              <h2 className="heading-2 mb-6">品质与服务</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  我们深知，家居产品是陪伴家人多年的重要物品。因此，我们对品质有着近乎苛刻的要求。每一件产品都经过严格的质检，确保到您手中的都是精品。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  我们提供完善的售后服务，让每一位客户都能放心购买，无忧使用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-gray-50">
        <div className="container-main">
          <h2 className="heading-2 mb-12 text-center">我们的价值观</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "品质", desc: "精选用料，精湛工艺" },
              { title: "真诚", desc: "去除溢价，真实定价" },
              { title: "服务", desc: "贴心售后，用户至上" },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">0{i + 1}</span>
                </div>
                <h3 className="heading-3 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-main text-center">
          <h2 className="heading-2 mb-4">欢迎到店体验</h2>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto">
            成都太古里，新南路40号院
          </p>
          <p className="text-gray-500 text-sm mb-8">导航搜索"灰糖家居"</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              了解更多
            </Link>
            <Link href="/products" className="btn-secondary">
              浏览产品
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}