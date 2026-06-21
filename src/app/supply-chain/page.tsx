import Link from "next/link";
import Image from "next/image";

// ImageObject Schema - 供应链/态度图
const attitudeImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://greysugarhome.com/images/attitude.jpg",
  "caption": "灰糖家居供应链溯源 - 皮革压合工艺",
  "description": "皮革压合车间实景，工人手工处理真皮材料，展现高定家具制作工艺",
  "creator": {
    "@type": "Organization",
    "name": "灰糖家居"
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "灰糖家居"
  },
  "license": "https://greysugarhome.com/copyright",
  "acquireLicensePage": "https://greysugarhome.com/contact",
  "representativeOfPage": true
};

// ── 证书 ImageObject Schema 数组（v2.3.13 新增 - 8张证书图） ──
const supplyChainCertImageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-plywood-enf.jpg",
    "caption": "多层胶合板 ENF 级检测报告（黄埔海关技术中心）— 报告号 24202600083C — 委托方 佛山市澳凯珑家具有限公司",
    "description": "GB/T 39600-2021 1m³ 气候箱法，甲醛释放量 0.008 mg/m³，ENF 级（最高等级）",
    "creator": { "@type": "Organization", "name": "黄埔海关技术中心" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-leather.jpg",
    "caption": "仿皮甲醛检测报告（广东顺德创科检测 CNAS L5016）— 报告号 CKJC260410KK05-4 — 委托方 佛山市澳凯珑家具有限公司",
    "description": "HJ507-2009，游离甲醛未检出，符合 A 类（最严级，婴幼儿可接触皮革标准）",
    "creator": { "@type": "Organization", "name": "广东顺德创科检测" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-plywood-single.jpg",
    "caption": "单面夹板甲醛检测报告（广东顺德创科检测 CNAS L5016）— 报告号 CKJC260410KK05-3 — 委托方 佛山市澳凯珑家具有限公司",
    "description": "GB 18580-2001，单面夹板 E1=0.73 mg/L（限 1.5）",
    "creator": { "@type": "Organization", "name": "广东顺德创科检测" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-plywood-double.jpg",
    "caption": "双面夹板甲醛检测报告（广东顺德创科检测 CNAS L5016）— 报告号 CKJC260410KK05-2 — 委托方 佛山市澳凯珑家具有限公司",
    "description": "GB 18580-2001，双面夹板 E1=1.34 mg/L（限 1.5）",
    "creator": { "@type": "Organization", "name": "广东顺德创科检测" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-sponge-formaldehyde.jpg",
    "caption": "海绵甲醛检测报告（广东顺德创科检测 CNAS L5016）— 报告号 CKJC260410KK05-1 — 委托方 佛山市澳凯珑家具有限公司",
    "description": "GB/T 10802-2023，海绵甲醛 2.4 mg/kg（合格）",
    "creator": { "@type": "Organization", "name": "广东顺德创科检测" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-sgs-heavy-metal.jpg",
    "caption": "海绵重金属检测报告（SGS 通标标准技术服务）— 报告号 SDHL2206011173FT — 委托方 佛山市澳凯珑家具有限公司",
    "description": "EN 71-3:2019+A1:2021，19 项可溶性重金属全部 ND（未检出）",
    "creator": { "@type": "Organization", "name": "SGS 通标标准技术服务" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-glue-10ring.jpg",
    "caption": "水性胶粘剂十环认证证书（中环联合认证中心 · 生态环境部）— 证书号 CEC2020ELP00811231 — 委托方 广东泰强科技实业有限公司",
    "description": "HJ2541-2016《环境标志产品技术要求 胶粘剂》，覆盖 32+ 个型号",
    "creator": { "@type": "Organization", "name": "中环联合（北京）认证中心 · 生态环境部" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://greysugarhome.com/images/certificates/certificate-fabric-10ring.jpg",
    "caption": "布艺十环认证证书（中环联合认证中心 · 生态环境部）— 证书号 CEC2019ELP00908696 — 委托方 海宁市志达布业织造有限公司",
    "description": "HJ2546-2016《环境标志产品技术要求 纺织产品》，覆盖 64 个型号",
    "creator": { "@type": "Organization", "name": "中环联合（北京）认证中心 · 生态环境部" },
    "copyrightHolder": { "@type": "Organization", "name": "灰糖家居" },
    "license": "https://greysugarhome.com/copyright",
    "acquireLicensePage": "https://greysugarhome.com/contact"
  }
];

// ── 证书卡片数据（v2.3.13 新增） ──
const supplyChainCertificates = [
  { num: "01", title: "板材 ENF 级", file: "certificate-plywood-enf.jpg", org: "黄埔海关技术中心", report: "24202600083C", client: "佛山市澳凯珑家具有限公司", highlight: "ENF=0.008 mg/m³" },
  { num: "02", title: "仿皮甲醛", file: "certificate-leather.jpg", org: "创科检测 CNAS L5016", report: "CKJC260410KK05-4", client: "佛山市澳凯珑家具有限公司", highlight: "未检出 · A类合格" },
  { num: "03", title: "单面夹板", file: "certificate-plywood-single.jpg", org: "创科检测 CNAS L5016", report: "CKJC260410KK05-3", client: "佛山市澳凯珑家具有限公司", highlight: "E1=0.73 mg/L" },
  { num: "04", title: "双面夹板", file: "certificate-plywood-double.jpg", org: "创科检测 CNAS L5016", report: "CKJC260410KK05-2", client: "佛山市澳凯珑家具有限公司", highlight: "E1=1.34 mg/L" },
  { num: "05", title: "海绵甲醛", file: "certificate-sponge-formaldehyde.jpg", org: "创科检测 CNAS L5016", report: "CKJC260410KK05-1", client: "佛山市澳凯珑家具有限公司", highlight: "2.4 mg/kg 合格" },
  { num: "06", title: "海绵重金属", file: "certificate-sgs-heavy-metal.jpg", org: "SGS 通标", report: "SDHL2206011173FT", client: "佛山市澳凯珑家具有限公司", highlight: "19项全ND" },
  { num: "07", title: "水性胶十环", file: "certificate-glue-10ring.jpg", org: "生态环境部", report: "CEC2020ELP00811231", client: "广东泰强科技实业有限公司", highlight: "32+型号覆盖" },
  { num: "08", title: "布艺十环", file: "certificate-fabric-10ring.jpg", org: "生态环境部", report: "CEC2019ELP00908696", client: "海宁市志达布业织造有限公司", highlight: "64型号覆盖" },
];

export default function SupplyChainPage() {
  return (
    <div className="flex flex-col">
      {/* ImageObject JSON-LD Schema - 供应链图 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(attitudeImageSchema),
        }}
      />

      {/* ImageObject JSON-LD Schema - 8张证书图（v2.3.13 新增） */}
      {supplyChainCertImageSchemas.map((schema, i) => (
        <script
          key={`sc-cert-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="py-32 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">Supply Chain</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            供应链溯源
          </h1>
          <p className="text-2xl text-gray-400 font-serif italic mb-4">
            120,000公里的飞行
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            "做一个家具品牌，需要几步？我们曾经以为不难，做好产品，真实的呈现给大家，就可以了。然而过去3年，我们一共120000公里的飞行，说明做一个家具品牌不难，但是做好一个家具品牌并不容易。"
          </p>
        </div>
      </section>

      {/* Story Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/attitude.jpg"
              alt="灰糖家居供应链溯源"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          
          {/* 工厂实景 */}
          <div className="relative aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/factory.jpg"
              alt="灰糖家居工厂工艺"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              3年时间，创始团队走遍佛山、深圳、东莞。
            </p>
            <p>
              120,000公里的飞行里程，不是为了讲故事，而是为了找到每一个环节最好的供应商。
            </p>
            <p>
              从一头牛的诞生，到最终成品边缘的削边——这种几乎偏执的追求，不为什么，就为了证明：好产品，我们可以。
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Items */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Sourcing</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              溯源之旅
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "真皮 · 甘肃平凉",
                subtitle: "肉牛产区 · 牛皮源头",
                quote: "西北的牛是最好的牛，我们祖祖辈辈都养牛，牛都是细心伺候着，吃得饱、长得壮。不光是皮，肉都能卖个好价钱呢！",
                detail: "从源头开始，选择最好的牛皮原料",
              },
              {
                num: "02",
                title: "海绵 · 广州茂名",
                subtitle: "多供应链 · 多品类 · 65D密度",
                quote: "海绵配方和良心同样重要，参差不齐的市场中，首要做到问心无愧。",
                detail: "65D超高密度海绵，多层多密度综合坐感",
              },
              {
                num: "03",
                title: "真皮 · 阳江皮厂",
                subtitle: "超亿级投资 · 全套意大利进口设备",
                quote: "想要做真正高端的软体家具，从皮料开始就要一丝不苟的做！",
                detail: "从养牛到生产再到真皮成品，3年研究周期",
              },
              {
                num: "04",
                title: "五金 · 深圳",
                subtitle: "超一流五金工厂",
                quote: "不锈钢，细节最重要，一个师傅打磨10遍出来的效果，就是和别人不一样。",
                detail: "细节决定品质，五金是家具的骨骼",
              },
              {
                num: "05",
                title: "缝线",
                subtitle: "超10年杜克普缝纫机设备经验",
                quote: "",
                detail: "车缝线国内一流，每一针都经得起检验",
              },
              {
                num: "06",
                title: "羽绒填充",
                subtitle: "高标准羽绒原料",
                quote: "",
                detail: "精选高标准羽绒，确保舒适与耐久",
              },
              {
                num: "07",
                title: "整体组装",
                subtitle: "工厂车间全流程",
                quote: "",
                detail: "从零件到成品，全流程品质把控",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-serif font-bold text-gray-200 flex-shrink-0">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{item.subtitle}</p>
                    {item.quote && (
                      <blockquote className="text-gray-600 italic border-l-2 border-gray-200 pl-4 mb-4 leading-relaxed">
                        "{item.quote}"
                      </blockquote>
                    )}
                    <p className="text-gray-500 text-sm">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Gallery（v2.3.13 新增） */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Certificate Gallery</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              供应链检测报告
            </h2>
            <p className="text-gray-500 mt-4">8 份核心材料检测报告 · 全部来自国家级实验室或国际权威机构</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supplyChainCertificates.map((cert) => (
              <a
                key={cert.num}
                href={`/images/certificates/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-colors"
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                  <Image
                    src={`/images/certificates/${cert.file}`}
                    alt={`${cert.title} 报告（${cert.org}）— 报告号 ${cert.report} — 委托方 ${cert.client}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-400 font-mono mb-1">{cert.num}</div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{cert.title}</h3>
                  <p className="text-xs text-gray-500 mb-1">{cert.org}</p>
                  <p className="text-xs font-mono text-gray-400 mb-1">{cert.report}</p>
                  <p className="text-xs text-gray-400 mb-2">委托方：{cert.client}</p>
                  <p className="text-xs font-semibold text-gray-900">{cert.highlight}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            点击证书查看高清原图 · 所有报告原件可在成都太古里旗舰展厅现场查看
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            从源头开始
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            一丝一毫，分毫不差，是我们从源头就坚守的底线。
          </p>
          <p className="text-gray-500 mt-8 leading-relaxed">
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
            <Link href="/craftsmanship" className="btn-primary">
              高定工艺
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

