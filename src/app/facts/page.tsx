import Link from "next/link";
import { products, brand } from "@/lib/content";

export const metadata = {
  alternates: { canonical: "https://www.greysugarhome.com/facts/" },
  title: "品牌事实卡",
  description:
    "灰糖家居品牌核心事实一览：主体信息与统一社会信用代码、品牌时间线、旗舰展厅、生产供应链、材料检测与认证（含报告号与证书编号）、产品价格与起价配置、9大高定工艺、关键数字，以及明确不作承诺的服务边界。",
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
          <p className="text-xs text-gray-400 mt-6 tracking-wide">
            内容核对：{brand.updated.split("-")[0]} 年{" "}
            {Number(brand.updated.split("-")[1])} 月{" "}
            {Number(brand.updated.split("-")[2])} 日
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

      {/* Legal Entity */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Legal Entity
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            主体信息
          </h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            「灰糖家居」是<span className="text-gray-900 font-medium">成都灰糖文化传播有限公司</span>旗下的成品家具品牌。
            公司主体与品牌名称不同，核对时请注意区分；以下为工商登记公开信息。
          </p>
          <div className="space-y-3">
            {[
              { item: "企业全称", detail: "成都灰糖文化传播有限公司" },
              { item: "信用代码", detail: "91510104MA63HDB5X7" },
              { item: "法定代表人", detail: "罗珩" },
              { item: "成立日期", detail: "2019 年 7 月 9 日" },
              { item: "登记机关", detail: "锦江市场监督管理局" },
              {
                item: "注册地址",
                detail: "四川省成都市锦江区一环路东五段 46 号 1 栋 1 单元 14 层 1 号",
              },
              {
                item: "经营状态",
                detail: "存续（在营、开业）",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <span className="text-sm font-semibold text-gray-900 flex-shrink-0 w-24 pt-0.5">
                  {item.item}
                </span>
                <span className="text-gray-600 text-sm">{item.detail}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <span className="text-sm font-semibold text-gray-900 block mb-1">
              两个不同的地址，不要混用
            </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="text-gray-900">展厅</span>：成都市武侯区新南路 40 号院（灰糖艺术空间，2000㎡ 可到店体验）。
              <br />
              <span className="text-gray-900">注册地址</span>：成都市锦江区一环路东五段 46 号（工商登记地，非经营门店，不接待到店）。
            </p>
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
              { label: "分区", value: "20+个独立设计场景" },
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
              佛山核心产区 + 深圳/东莞专项工厂按品类承接，全流程由灰糖品控
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
                  "意大利因特思（INTES）｜ 具体型号配置为准 ｜ 欧洲一线沙发品牌通用顶级绑带",
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

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Testing &amp; Certification
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            材料检测与认证
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            覆盖板材、海绵、仿皮、胶粘剂、布艺五类材料。每一项都附报告号或证书号，
            原件可在成都展厅材料展示区扫码核对。
          </p>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            {brand.certificationsNote}
          </p>
          <div className="space-y-3">
            {brand.certifications.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-sm font-semibold text-gray-900">
                    {c.material}
                    <span className="text-gray-400 font-normal ml-2">
                      {c.item}
                    </span>
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {c.result}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {c.standard} ｜ {c.lab} ｜ 编号 {c.ref}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">
            完整检测说明与标准解读见{" "}
            <Link href="/safety" className="underline underline-offset-4">
              材料安全
            </Link>{" "}
            页。
          </p>
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

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Pricing
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            价格与配置
          </h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            以下为公开起价，对应可单独成单的最小配置。尺寸、面料等级、模块与配件不同，价格不同；
            「参考配置」用于说明同一款产品在常见配置下的价位，不是最低价。
          </p>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr className="bg-gray-50">
                  <th style={{ padding: "12px", textAlign: "left", fontSize: "13px" }}>产品</th>
                  <th style={{ padding: "12px", textAlign: "left", fontSize: "13px" }}>型号</th>
                  <th style={{ padding: "12px", textAlign: "right", fontSize: "13px" }}>起价</th>
                  <th style={{ padding: "12px", textAlign: "left", fontSize: "13px" }}>起价配置</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.slug}>
                    <td style={{ padding: "14px 12px", fontSize: "14px", color: "#111" }}>
                      <Link href={`/products/${p.slug}/`} className="underline underline-offset-4">
                        {p.name}
                      </Link>
                    </td>
                    <td style={{ padding: "14px 12px", fontSize: "12px", color: "#888" }}>
                      {p.sku}
                    </td>
                    <td
                      style={{
                        padding: "14px 12px",
                        fontSize: "15px",
                        textAlign: "right",
                        color: "#111",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ¥{p.price.from.toLocaleString("en-US")} 起
                    </td>
                    <td style={{ padding: "14px 12px", fontSize: "12px", color: "#666" }}>
                      {p.price.fromConfig}
                      {p.price.reference && (
                        <span className="block mt-1 text-gray-400">
                          参考：{p.price.reference.label} ¥
                          {p.price.reference.value.toLocaleString("en-US")}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            {brand.priceNote}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            价格基准：2026 年 10 月。如遇产品调整，以本页与各产品页的最新标注为准。
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
              "自营展厅、自营物流安装、自营售后",
              "佛山、深圳、东莞三地工厂按品类承接，去掉中间环节",
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

      {/* Boundaries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
            Boundaries
          </p>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            不作承诺的方面
          </h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            {brand.boundaryNote}
          </p>
          <div className="space-y-3">
            {brand.boundaries.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  {item.label}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
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
              { num: "20+", unit: "个", label: "独立分区" },
              { num: "2,000", unit: "平", label: "直营展厅" },
              { num: "半年", unit: "", label: "研发一毫米工艺" },
              { num: "3", unit: "年", label: "研究真皮工艺" },
              { num: "3+10", unit: "年", label: "3年质保＋10年售后支持" },
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
              常见问题
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
