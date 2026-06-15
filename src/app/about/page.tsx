import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">About Us</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            关于灰糖
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            灰糖家居（Grey Sugar Home）<br />
            「灰糖」旗下高定家具品牌
          </p>
        </div>
      </section>

      {/* Brand Info */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Brand</p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                好家具，不溢价
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  灰糖家居是「灰糖」旗下专注于高定家具的品牌。我们致力于为城市精英提供真正高品质的家居产品，去除品牌溢价，让更多人能够享受到高品质的家居生活。
                </p>
                <p>
                  生产基地分布于佛山、东莞、深圳，成都设有2000㎡旗舰展厅。
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Services</p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                业务范围
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">100%自营成品家具</h3>
                  <p className="text-sm text-gray-500">无中间商，从工厂直接到你家</p>
                </div>
                <div className="border border-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">软装设计服务</h3>
                  <p className="text-sm text-gray-500">专业设计师提供空间搭配建议</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Guarantees */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Guarantees</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              四大保障
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "成都自营实体展厅", desc: "2000㎡旗舰展厅" },
              { title: "专业物流安装团队", desc: "自有团队全程把控" },
              { title: "售后服务保障", desc: "完善的售后体系" },
              { title: "100%自营", desc: "无中间商无渠道" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                <div className="text-xs text-gray-400 mb-3">0{i + 1}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Location</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              展厅地址
            </h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-10 md:p-16 text-center">
            <div className="text-5xl mb-6">📍</div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              成都太古里展厅
            </h3>
            <p className="text-gray-600 mb-2">新南路40号院</p>
            <p className="text-gray-500 text-sm mb-6">导航搜索"灰糖家居"</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="px-4 py-2 bg-white rounded-full border border-gray-200">
                🚇 地铁新南门站D口
              </span>
              <span className="px-4 py-2 bg-white rounded-full border border-gray-200">
                🅿️ 专属停车场 · 100个车位
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">
            好家具，不溢价
          </h2>
          <p className="text-gray-500 mb-8">
            祝愿大家，也祝愿我们：心中的热爱永远滚烫，所有的坚持都听到回响。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/brand" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              品牌故事
            </Link>
            <Link href="/showroom" className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors">
              展厅详情
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
