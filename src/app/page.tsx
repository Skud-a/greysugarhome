import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="heading-1 text-gray-900 mb-6 animate-fade-in">
            简约，是一种态度
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            灰糖家居，为您打造温馨、舒适、有品质的生活空间。北欧设计，匠心工艺。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/products" className="btn-primary">
              探索产品
            </Link>
            <Link href="/brand" className="btn-secondary">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">为什么选择灰糖</h2>
            <p className="text-muted max-w-2xl mx-auto">
              我们相信，好的家居产品不仅要有美观的设计，更要有卓越的品质和实用性。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "北欧设计",
                description: "源自北欧的简约美学，每一件产品都经过精心设计，兼具美观与实用。",
                icon: "🎨",
              },
              {
                title: "匠心工艺",
                description: "精选优质材料，传统工艺与现代技术相结合，打造持久耐用的家居产品。",
                icon: "🪵",
              },
              {
                title: "环保理念",
                description: "我们致力于可持续发展，选用环保材料，减少对环境的影响。",
                icon: "🌱",
              },
            ].map((feature, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="heading-3 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-spacing bg-gray-50">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="heading-2 mb-4">精选产品</h2>
              <p className="text-muted max-w-xl">
                从客厅到卧室，从家具到装饰，每一件产品都体现着我们对品质的追求。
              </p>
            </div>
            <Link href="/products" className="mt-4 md:mt-0 text-gray-900 font-medium hover:text-accent transition-colors">
              查看全部产品 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="card group">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-6xl text-gray-400">{["🛋️", "🪑", "💡", "🛏️"][item - 1]}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">
                    {["极简沙发系列", "北欧餐桌椅", "创意灯具", "舒适床品"][item - 1]}
                  </h3>
                  <p className="text-accent font-semibold">
                    ¥{["3,980", "2,680", "899", "1,580"][item - 1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium mb-4 block">品牌故事</span>
              <h2 className="heading-2 mb-6">源于对美好生活的追求</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                灰糖家居成立于2018年，创始团队由一群热爱设计和生活的年轻人组成。我们相信，家是心灵的港湾，值得被用心对待。
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                我们走遍北欧各国，寻访当地的工匠和设计师，将北欧的简约美学与中国的居住习惯相结合，打造出适合中国家庭的家居产品。
              </p>
              <Link href="/brand" className="btn-secondary">
                阅读更多故事
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">🏠</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="heading-2 mb-6 text-white">准备好改变你的家了吗？</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            浏览我们的产品系列，发现更多能让你的家变得更美好的设计。
          </p>
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
            开始探索
          </Link>
        </div>
      </section>
    </div>
  );
}
