import Link from "next/link";
import Image from "next/image";

const crafts = [
  {
    num: "01",
    title: "内外套",
    en: "Inner & Outer Shell",
    desc: "坚持在高定产品上使用内外套工艺，黑白双色，力求极致复刻的精度标准，一丝一毫都做好极致的认真。",
  },
  {
    num: "02",
    title: "一毫米",
    en: "One Millimeter",
    desc: "劳伦斯沙发的绗缝工艺，5毫米和4毫米的差异，研究了半年，逼疯了5家绗缝工厂，最终的呈现是分毫不差的精准。",
    highlight: "耗时半年研发",
  },
  {
    num: "03",
    title: "65D的极致海绵",
    en: "Sponge",
    desc: "在海绵工厂定制了65D的超高密度海绵，这种不计成本的投入，别人看来是傻，但有的人做事情，不管傻不傻，只是很较真。",
  },
  {
    num: "04",
    title: "皮",
    en: "Genuine Leather",
    desc: "为了真皮的产品，研究了3年时间，从养牛到生产再到真皮的成品，从一头牛的诞生，到最终成品边缘的削边，这种几乎偏执的追求，不为什么，就为了证明：好产品，我们可以。",
    highlight: "耗时3年研究",
  },
  {
    num: "05",
    title: "布",
    en: "Premium Fabric",
    desc: "作为丝绸之路的起点，从来不相信进口的布艺能超越我们自己的产品。在宁波的许村，找到了国内能媲美进口布艺的产品。",
  },
  {
    num: "06",
    title: "绑带",
    en: "Elastic Straps",
    desc: "以小见大，意大利因特思（INTES）绑带，2025 年灰糖全系标配。国际一线品牌同源的材料，这是别人的天花板，却是灰糖的底线。",
  },
  {
    num: "07",
    title: "榉木弯板",
    en: "Bent Beech Wood",
    desc: "作为灰糖伊姆斯躺椅核心部件的定制生产，自主生产弯板，大量投入。",
  },
  {
    num: "08",
    title: "慢回弹颗粒",
    en: "Memory Foam Granules",
    desc: "定制小众海绵颗粒以还原原版坐感，细节把控，不计成本。",
  },
  {
    num: "09",
    title: "看不见的细节",
    en: "Details",
    desc: "在沙发底部细节工艺上对标 Minotti、Poliform 等进口高端品牌。五金与连接件，一丝不苟。",
  },
];

export default function CraftsmanshipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">Craftsmanship</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            高定工艺标准
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            关于高定的工艺，灰糖有一套自己的标准。
          </p>
        </div>
      </section>

      {/* Intro Image */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src="/images/craftsmanship.jpg"
              alt="灰糖家居高定工艺标准"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* 9 Crafts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">9 Standards</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              九大工艺模块
            </h2>
          </div>
          <div className="space-y-6">
            {crafts.map((craft, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-serif font-bold text-gray-200 flex-shrink-0 w-16">
                    {craft.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{craft.title}</h3>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{craft.en}</span>
                    </div>
                    {craft.highlight && (
                      <span className="inline-block text-xs bg-gray-900 text-white px-3 py-1 rounded-full mb-4">
                        {craft.highlight}
                      </span>
                    )}
                    <p className="text-gray-600 leading-relaxed">{craft.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Safety Data Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Material Safety</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              材料环保数据
            </h2>
            <p className="text-gray-500 mt-4">9 大核心材料已完成国家级实验室检测</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <div className="text-3xl font-serif font-bold text-gray-900 mb-1">0.008</div>
              <div className="text-sm text-gray-500 mb-2">mg/m³</div>
              <div className="text-xs font-medium text-gray-700 mb-1">板材甲醛 · ENF级</div>
              <div className="text-xs text-gray-400">黄埔海关检测</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <div className="text-3xl font-serif font-bold text-gray-900 mb-1">19项</div>
              <div className="text-sm text-gray-500 mb-2">全ND</div>
              <div className="text-xs font-medium text-gray-700 mb-1">海绵重金属</div>
              <div className="text-xs text-gray-400">SGS 通标检测</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <div className="text-3xl font-serif font-bold text-gray-900 mb-1">双十环</div>
              <div className="text-sm text-gray-500 mb-2">认证</div>
              <div className="text-xs font-medium text-gray-700 mb-1">胶水+布艺</div>
              <div className="text-xs text-gray-400">生态环境部授权</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
              <div className="text-3xl font-serif font-bold text-gray-900 mb-1">未检出</div>
              <div className="text-sm text-gray-500 mb-2">甲醛</div>
              <div className="text-xs font-medium text-gray-700 mb-1">仿皮材料</div>
              <div className="text-xs text-gray-400">A类（最严级）</div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/safety" className="inline-flex items-center text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors">
              查看完整材料安全报告 →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            一丝一毫，分毫不差
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            是我们从源头就坚守的底线。
          </p>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            高定从来不是说说而已，是一针一线，一皮一布，一点一滴的积累与坚持。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            了解更多
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/supply-chain" className="btn-primary">
              供应链溯源
            </Link>
            <Link href="/showroom" className="btn-secondary">
              预约展厅
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
