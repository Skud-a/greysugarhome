import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-main text-center">
          <span className="text-accent font-medium mb-4 block">About Us</span>
          <h1 className="heading-1 text-white mb-6">关于灰糖家居</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            "灰糖"旗下高定家具品牌，为城市精英提供真正高品质的家居产品
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium mb-4 block">品牌简介</span>
              <h2 className="heading-2 mb-6">好家具，不溢价</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  灰糖家居（Grey Sugar Home）是"灰糖"旗下专注于高定家具的品牌。我们致力于为城市精英提供真正高品质的家居产品，去除品牌溢价，让更多人能够享受到高品质的家居生活。
                </p>
                <p>
                  我们相信，好家具不应该被过高的品牌溢价所定义。通过精简中间环节、优化供应链，我们以更合理的价格提供高品质的产品。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <span className="text-9xl">🏢</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-spacing bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-accent font-medium mb-4 block">展厅地址</span>
            <h2 className="heading-2 mb-4">欢迎到店体验</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 text-center">
              <div className="text-6xl mb-6">📍</div>
              <h3 className="heading-3 mb-4">成都太古里展厅</h3>
              <p className="text-gray-600 mb-2">新南路40号院</p>
              <p className="text-gray-500 text-sm">导航搜索"灰糖家居"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-accent font-medium mb-4 block">核心团队</span>
            <h2 className="heading-2 mb-4">我们的团队</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              一群热爱设计和生活的专业人士，致力于为您打造美好的居家体验
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card p-12 text-center">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="heading-3 mb-4">正在搭建中</h3>
              <p className="text-gray-600">团队信息正在整理中，敬请期待</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="heading-2 mb-4">了解更多</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            如果您对我们的品牌感兴趣，欢迎了解更多或直接到店体验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/brand" className="btn-primary">
              品牌故事
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