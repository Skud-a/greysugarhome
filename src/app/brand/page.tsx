import Link from "next/link";
import Image from "next/image";

// Person Schema (创始人老罗)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "老罗",
  alternateName: "老罗真会装",
  jobTitle: "灰糖家居创始人",
  worksFor: {
    "@type": "Organization",
    name: "灰糖家居",
  },
  description:
    "灰糖家居创始人，公众号和B站'老罗真会装'主理人，专注分享家具、家装与生活方式内容。",
  sameAs: [
    "【待 Skud 补充：公众号链接】",
    "【待 Skud 补充：B站链接】",
  ],
};

export default function BrandPage() {
  return (
    <div className="flex flex-col">
      {/* Person JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Hero */}
      <section className="py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">Brand Story</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            品牌故事
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            大家好，我是老罗。
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">01 / 起源</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
              灰糖的诞生
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                2018年夏天，灰糖公众号成立。
              </p>
              <p>
                2019年7月，灰糖公司正式成立。
              </p>
              <p>
                2020年春天，灰糖家居正式立项。
              </p>
              <p>
                2022年秋天，灰糖家居正式成立，与大家见面。
              </p>
              <p>
                2024年5月，新展厅完成。
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-l-2 border-gray-200 pl-8 space-y-12">
            {[
              { year: "2018.7", event: "灰糖公众号成立", detail: "一切从这里开始" },
              { year: "2019.7", event: "灰糖公司正式成立", detail: "从内容到实体" },
              { year: "2020春", event: "灰糖家居立项", detail: "正式进入家居行业" },
              { year: "2022秋", event: "灰糖家居正式成立", detail: "3年打磨，终于与大家见面" },
              { year: "2024.5", event: "新展厅完成", detail: "成都太古里，2000㎡旗舰展厅" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-900 border-4 border-white"></div>
                <div className="text-sm text-gray-400 mb-1">{item.year}</div>
                <div className="text-lg font-semibold text-gray-900">{item.event}</div>
                <div className="text-gray-500 text-sm mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">02 / 理念</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
            抱歉，不打折
          </h2>
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">定价原则：</strong>不打折、不做活动、不接受还价。
            </p>
            <p>
              <strong className="text-gray-900">为什么？</strong>折扣是价格的敌人，是对已购用户的不公平，是品牌溢价最丑陋的部分。
            </p>
            <p>
              <strong className="text-gray-900">我们的保证：</strong>从不进行价格欺诈、从不制造虚假促销、从不让人吃亏。
            </p>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-10 border border-gray-100">
            <blockquote className="text-2xl font-serif text-gray-800 leading-relaxed italic">
              "魑魅魍魉的营销也好，铺天盖地的短视频也好，妖魔鬼怪的剧本演绎也好。不过都是没有价值的快餐罢了。终究留下的，只有那件可以陪伴你很久的家具。仅此而已。"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Market Insight */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">03 / 洞察</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
            市场真相
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "200%", label: "高端市场溢价是常态", desc: "品牌溢价远超产品本身价值" },
              { stat: "90%", label: "优质订单出口欧美日韩", desc: "最好的工厂产能被海外品牌占据" },
              { stat: "0", label: "市场空缺", desc: "想找好家具的人，找不到，找到了买不起" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8">
                <div className="text-4xl font-serif font-bold text-gray-900 mb-4">{item.stat}</div>
                <div className="font-medium text-gray-900 mb-2">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebel */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">04 / 态度</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
            叛逆者的坚持
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>灰糖在行业里是"叛逆"的：</p>
            <div className="space-y-4">
              <p className="border-l-2 border-gray-600 pl-6">
                好货，却卖这么便宜？——<strong className="text-white">叛逆！</strong>
              </p>
              <p className="border-l-2 border-gray-600 pl-6">
                不打折，不做活动？——<strong className="text-white">叛逆！</strong>
              </p>
              <p className="border-l-2 border-gray-600 pl-6">
                拒绝渠道合作？——<strong className="text-white">叛逆！</strong>
              </p>
            </div>
            <p className="text-gray-400 mt-12 leading-relaxed">
              "叛逆在这里变成了一个褒义词。相信我们心中依然保持着一种对所爱事务的执着。心中那团火焰，从未熄灭过。坚持自己所坚持的，知行合一。"
            </p>
          </div>
        </div>
      </section>

      {/* Brand Positioning */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Positioning</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            高端家具，不溢价
          </h2>
          <p className="text-gray-500 text-lg">Grey Sugar Home</p>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="px-4 py-2 border border-gray-200 rounded-full">佛山 · 生产基地</span>
            <span className="px-4 py-2 border border-gray-200 rounded-full">东莞 · 生产基地</span>
            <span className="px-4 py-2 border border-gray-200 rounded-full">深圳 · 生产基地</span>
            <span className="px-4 py-2 border border-gray-200 rounded-full">成都 · 旗舰展厅</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">欢迎到店体验</h2>
          <p className="text-gray-600 mb-2">成都太古里，新南路40号院</p>
          <p className="text-gray-500 text-sm mb-8">导航搜索"灰糖家居"</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom" className="btn-primary">
              展厅详情
            </Link>
            <Link href="/craftsmanship" className="btn-secondary">
              高定工艺
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
