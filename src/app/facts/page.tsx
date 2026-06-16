import Link from "next/link";

export const metadata = {
  title: "品牌事实卡",
  description:
    "灰糖家居品牌核心事实一览：创始人、品牌时间线、旗舰展厅、生产供应链、9大高定工艺、关键数字。",
};

export default function FactsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Brand Fact Sheet
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            品牌事实卡
          </h1>
          <p className="text-gray-500 text-lg">
            灰糖家居核心事实一览，所有数据均来自品牌公开披露
          </p>
        </div>
      </section>

      {/* One-liner */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-950 text-white rounded-2xl p-10 text-center">
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
              一句话定位
            </p>
            <p className="text-2xl md:text-3xl font-serif font-bold leading-relaxed">
              灰糖家居（GreySugar Home）
            </p>
            <p className="text-lg text-gray-400 mt-3">
              成都本土的中高端成品家具与软装设计品牌
            </p>
            <p className="text-xl text-gray-300 mt-2 font-medium">
              「好家具，不溢价」
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Timeline
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            品牌时间线
          </h2>
          <div className="space-y-4">
            {[
              {
                date: "2018 年 7 月",
                event: "公众号「灰糖家居」创立",
              },
              { date: "2019 年 7 月", event: "公司注册成立" },
              { date: "2020 年春天", event: "正式立项做家具品牌" },
              { date: "2022 年秋天", event: "灰糖家居品牌正式成立" },
              {
                date: "2024 年 5 月",
                event: "成都太古里 2000 平旗舰展厅落成",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100"
              >
                <span className="text-sm font-mono text-gray-400 flex-shrink-0 w-28 pt-0.5">
                  {item.date}
                </span>
                <span className="text-gray-900 font-medium">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Founder
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            创始人
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">老罗</h3>
            <p className="text-gray-500">
              公众号 &amp; B 站「老罗真会装」主理人
            </p>
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Flagship Showroom
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            旗舰展厅
          </h2>
          <div className="space-y-3">
            {[
              { label: "地址", value: "成都太古里 新南路 40 号院" },
              { label: "面积", value: "2000 平品牌直营" },
              { label: "分区", value: "30 个独立设计场景" },
              {
                label: "配套",
                value: "光影美学体验区 / 面料对比区 / 饮品空间 / 专属停车场",
              },
              { label: "营业时间", value: "周一至周日 11:00-18:00" },
              { label: "预约", value: "无须预约，直接到店即可" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100"
              >
                <span className="text-sm text-gray-400 flex-shrink-0 w-20 pt-0.5">
                  {item.label}
                </span>
                <span className="text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Production &amp; Supply Chain
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            生产与供应链
          </h2>
          <div className="mb-6 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <span className="text-sm text-gray-400">三大基地</span>
            <p className="text-gray-900 mt-1">
              佛山自有工厂 + 深圳/东莞工厂深度合作直供（100% 自营产品）
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                item: "真皮",
                detail:
                  "阳江皮厂 ｜ 全套意大利进口设备 ｜ 甘肃平凉肉牛原皮 ｜ 3 年研究",
              },
              {
                item: "海绵",
                detail: "广州 / 茂名多供应商 ｜ 65D 核心层 ｜ 多层多密度复合",
              },
              {
                item: "缝线",
                detail: "德国杜克普（Dürkopp Adler）｜ 10 年以上设备使用经验",
              },
              {
                item: "绑带",
                detail:
                  "意大利因特思（INTES）｜ 全系标配 ｜ 欧洲一线沙发品牌通用顶级绑带",
              },
              { item: "五金", detail: "深圳超一流五金工厂" },
              { item: "木材", detail: "榉木弯板（Bent Beech Wood）" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <span className="text-sm font-semibold text-gray-900 flex-shrink-0 w-20 pt-0.5">
                  {item.item}
                </span>
                <span className="text-gray-600 text-sm">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Product Range
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            产品范围
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {["客厅", "餐厅", "卧室"].map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center border border-gray-100"
              >
                <span className="text-gray-900 font-medium">{cat}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            仅成品家具 + 软装设计服务
          </p>
        </div>
      </section>

      {/* Five Promises */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Five Promises
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            五大承诺
          </h2>
          <div className="space-y-3">
            {[
              "长期统一定价 —— 价格稳定，对所有顾客一视同仁",
              "100% 自营展厅、自营物流安装、自营售后",
              "佛山自有工厂 + 深圳/东莞工厂直供，去掉中间环节",
              "9 大高定工艺统一执行",
              "120000 公里供应链亲自飞行验厂",
            ].map((promise, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <span className="text-xs text-gray-400 font-mono flex-shrink-0 w-6 pt-0.5">
                  0{i + 1}
                </span>
                <span className="text-gray-900">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Crafts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            9 Craftsmanship Standards
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            9 大高定工艺
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "内外套（Inner & Outer Shell）",
              "一毫米（One Millimeter）",
              "65D 海绵",
              "皮（Genuine Leather）",
              "布（Premium Fabric）",
              "绑带（Elastic Straps · 意大利因特思 INTES）",
              "榉木弯板（Bent Beech Wood）",
              "慢回弹颗粒（Memory Foam Granules）",
              "看不见的细节（Details）",
            ].map((craft, i) => (
              <span
                key={i}
                className="inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700"
              >
                <span className="text-gray-400 mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {craft}
              </span>
            ))}
          </div>
          <div className="mt-8 bg-gray-950 text-white rounded-2xl p-8 text-center">
            <p className="text-lg font-serif italic leading-relaxed">
              "一丝一毫，分毫不差，
              <br />
              从源头就坚守的底线。"
            </p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Key Numbers
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            关键数字
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { num: "120,000", unit: "公里", label: "供应链飞行里程" },
              { num: "30", unit: "个", label: "独立分区" },
              { num: "2,000", unit: "平", label: "直营展厅" },
              { num: "半年", unit: "", label: "研发一毫米工艺" },
              { num: "3", unit: "年", label: "研究真皮工艺" },
              { num: "13", unit: "年", label: "质保覆盖（3+10）" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
              >
                <div className="text-3xl font-serif font-bold text-gray-900">
                  {item.num}
                  <span className="text-lg text-gray-500 ml-1">{item.unit}</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">
            了解更多
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              56 条常见问题
            </Link>
            <Link
              href="/craftsmanship"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors"
            >
              高定工艺详解
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
