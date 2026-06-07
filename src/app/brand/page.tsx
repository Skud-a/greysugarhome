import Link from "next/link";

export default function BrandPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-main text-center">
          <span className="text-accent font-medium mb-4 block">About Us</span>
          <h1 className="heading-1 text-white mb-6">品牌故事</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            灰糖家居，始于对美好生活的向往，成于对匠心品质的坚持
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <span className="text-accent font-medium mb-4 block">01 / 起源</span>
              <h2 className="heading-2 mb-6">一个简单的愿望</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  2018年的一个冬天，创始人小灰在哥本哈根的一家咖啡馆里，看着窗外飘落的雪花，思绪回到了千里之外的家。那时候的他，刚刚结束了在北欧的设计工作，心里却一直有一个愿望——让更多人能够享受到北欧的简约生活方式。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "简约不是简单，而是一种生活态度。"小灰说道，"我们希望通过灰糖家居，让每一个家庭都能感受到这种来自北欧的温暖与舒适。"
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-7xl">🇩🇰</span>
              </div>
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-7xl">🇫🇮</span>
              </div>
            </div>

            <div className="mb-16">
              <span className="text-accent font-medium mb-4 block">02 / 理念</span>
              <h2 className="heading-2 mb-6">设计的本质</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  在灰糖家居，我们相信好的设计应该服务于生活。我们不追求花哨的外表，而是专注于每一个细节，让产品既美观又实用。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  从材料选择到生产工艺，从包装设计到售后服务，每一个环节都体现着我们对品质的追求。我们与北欧的设计师紧密合作，将北欧的简约美学与中国的居住习惯相结合，打造出适合中国家庭的家居产品。
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <blockquote className="text-2xl font-serif text-gray-800 italic mb-4">
                "我们不是在卖家具，我们是在传递一种生活方式。"
              </blockquote>
              <cite className="text-gray-500">—— 小灰，灰糖家居创始人</cite>
            </div>

            <div className="mb-16">
              <span className="text-accent font-medium mb-4 block">03 / 承诺</span>
              <h2 className="heading-2 mb-6">品质与服务</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  我们深知，家居产品是陪伴家人多年的重要物品。因此，我们对品质有着近乎苛刻的要求。每一件产品都经过严格的质检，确保到您手中的都是精品。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  同时，我们提供完善的售后服务，包括免费配送、专业安装、以及长期的质保服务。让您购买无忧，使用放心。
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
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "简约", desc: "去除繁杂，回归本质" },
              { title: "品质", desc: "精选用料，精湛工艺" },
              { title: "环保", desc: "可持续发展，绿色生产" },
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
          <h2 className="heading-2 mb-4">了解更多关于灰糖</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            如果您对我们的品牌感兴趣，欢迎了解更多或直接联系我们的团队。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              联系我们
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
