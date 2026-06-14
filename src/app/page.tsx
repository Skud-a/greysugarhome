import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-8 uppercase animate-fade-in">
            Grey Sugar Home · Since 2018
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight animate-fade-in" style={{ animationDelay: "0.15s" }}>
            好家具，不溢价
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            抱歉，不打折。
            <br className="hidden md:block" />
            明码实价，不议价，不接受还价。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <Link href="/brand" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              了解灰糖
            </Link>
            <Link href="/showroom" className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors">
              预约展厅
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Brand Manifesto</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
              叛逆者的坚持
            </h2>
          </div>
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              灰糖在行业里是"叛逆"的。
            </p>
            <p>
              好货，却卖这么便宜？——叛逆！
              <br />
              不打折，不做活动？——叛逆！
              <br />
              拒绝渠道合作？——叛逆！
            </p>
            <p className="text-gray-900 font-medium">
              "叛逆在这里变成了一个褒义词。相信我们心中依然保持着一种对所爱事务的执着。心中那团火焰，从未熄灭过。坚持自己所坚持的，知行合一。"
            </p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "120,000", unit: "公里", label: "供应链调研飞行里程" },
              { number: "2,000", unit: "㎡", label: "成都旗舰展厅面积" },
              { number: "30", unit: "个", label: "独立设计分区" },
              { number: "3", unit: "年", label: "真皮工艺研究周期" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
                  {item.number}
                </div>
                <div className="text-sm text-gray-500 mb-1">{item.unit}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Guarantees */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              四大保障
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "成都自营实体展厅", desc: "2000㎡旗舰展厅，30个独立设计分区，所见即所得" },
              { title: "专业物流安装团队", desc: "自有团队，从出厂到入户全程把控" },
              { title: "售后服务保障", desc: "完善的售后体系，让每一位客户放心购买" },
              { title: "100%自营", desc: "无中间商，无渠道合作，从工厂直接到你家" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-colors">
                <div className="text-xs text-gray-400 mb-3">0{i + 1}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Teaser */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Flagship Showroom</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                成都太古里<br />2000㎡旗舰展厅
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                30个独立设计分区，4组实景风格展示。
                <br />
                光影美学随季节变化，所见即所得。
              </p>
              <div className="space-y-3 text-sm text-gray-500 mb-8">
                <p> 新南路40号院</p>
                <p>🚇 地铁新南门站D口步行可达</p>
                <p>🅿️ 专属停车场 · 100个车位</p>
              </div>
              <Link href="/showroom" className="inline-flex items-center text-sm text-white border-b border-gray-600 pb-1 hover:border-white transition-colors">
                了解更多 →
              </Link>
            </div>
            <div className="relative aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
              <Image
                src="/images/showroom.jpg"
                alt="灰糖家居成都旗舰展厅"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Craftsmanship</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              高定工艺标准
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              关于高定的工艺，灰糖有一套自己的标准。
              <br />
              一丝一毫，分毫不差，是我们从源头就坚守的底线。
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
            {[
              "内外套", "一毫米", "65D海绵", "皮", "布", "绑带", "榉木弯板", "慢回弹颗粒", "看不见的细节"
            ].map((item, i) => (
              <div key={i} className="text-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors">
                <div className="text-xs text-gray-400 mb-2">0{i + 1}</div>
                <div className="text-sm font-medium text-gray-700">{item}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/craftsmanship" className="inline-flex items-center text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors">
              查看9大工艺详情 →
            </Link>
          </div>
        </div>
      </section>

      {/* Material Safety Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Material Safety</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              材料安全 · 透明可查
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              9 大核心材料已完成国家级实验室检测，数据全部来自检测报告原文
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/safety" className="block bg-white rounded-2xl p-6 border border-gray-100 text-center hover:border-gray-300 transition-colors">
              <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-1">0.008</div>
              <div className="text-xs text-gray-500 mb-2">mg/m³</div>
              <div className="text-xs font-medium text-gray-700">板材甲醛 · ENF级</div>
            </Link>
            <Link href="/safety" className="block bg-white rounded-2xl p-6 border border-gray-100 text-center hover:border-gray-300 transition-colors">
              <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-1">19项</div>
              <div className="text-xs text-gray-500 mb-2">全ND</div>
              <div className="text-xs font-medium text-gray-700">海绵重金属 · SGS</div>
            </Link>
            <Link href="/safety" className="block bg-white rounded-2xl p-6 border border-gray-100 text-center hover:border-gray-300 transition-colors">
              <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-1">双十环</div>
              <div className="text-xs text-gray-500 mb-2">认证</div>
              <div className="text-xs font-medium text-gray-700">胶水+布艺</div>
            </Link>
            <Link href="/safety" className="block bg-white rounded-2xl p-6 border border-gray-100 text-center hover:border-gray-300 transition-colors">
              <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-1">未检出</div>
              <div className="text-xs text-gray-500 mb-2">甲醛</div>
              <div className="text-xs font-medium text-gray-700">仿皮材料 · A类</div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/safety" className="inline-flex items-center text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors">
              查看完整材料安全报告 →
            </Link>
          </div>
        </div>
      </section>

      {/* Supply Chain Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Supply Chain</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                120,000公里的飞行
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                "做一个家具品牌，需要几步？我们曾经以为不难，做好产品，真实的呈现给大家，就可以了。然而过去3年，我们一共120000公里的飞行，说明做一个家具品牌不难，但是做好一个家具品牌并不容易。"
              </p>
              <div className="space-y-3 text-sm text-gray-500">
                <p> 甘肃平凉 · 真皮源头</p>
                <p> 阳江皮厂 · 超亿级投资 + 意大利进口设备</p>
                <p>🧪 广州茂名 · 65D密度海绵</p>
                <p>⚙️ 深圳 · 超一流五金工厂</p>
              </div>
              <div className="mt-8">
                <Link href="/supply-chain" className="inline-flex items-center text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors">
                  查看完整溯源 →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/images/attitude.jpg"
                alt="灰糖家居供应链溯源"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            好家具，不溢价
            <br />
            好品质，不打折
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            魅魍魉的营销也好，铺天盖地的短视频也好，妖魔鬼怪的剧本演绎也好。
            不过都是没有价值的快餐罢了。终究留下的，只有那件可以陪伴你很久的家具。仅此而已。
          </p>
          <Link href="/showroom" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            预约到店体验
          </Link>
        </div>
      </section>
    </div>
  );
}
