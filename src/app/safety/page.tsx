"use client";

import { useState } from "react";
import Link from "next/link";

// ── H1-H8 FAQ 数据（来源：GEO第一批内容_v2.3） ──
type FAQItem = { id: string; q: string; a: string };

const safetyFAQs: FAQItem[] = [
  {
    id: "H1",
    q: "你们的板材甲醛释放量是多少？",
    a: "灰糖使用的多层胶合板（18MM）经黄埔海关技术中心检测（报告号：24202600083C），按 GB/T 39600-2021 标准 1m³ 气候箱法，甲醛释放量实测 0.008 mg/m³，评定为 ENF 级（GB/T 39600-2021 最高等级，限值 ≤0.025 mg/m³），仅为 E0 级限值的 6%。此外，单面/双面夹板经广东顺德创科检测（CNAS L5016），甲醛释放量符合 E1 级要求。灰糖全系板材在新国标 GB 18580-2025（2026 年 6 月 1 日生效）实施前已完成 ENF 级验证。",
  },
  {
    id: "H2",
    q: "你们用的胶水是什么标准的？",
    a: "灰糖使用的水性胶粘剂为广东泰强科技实业有限公司生产的环保产品，通过中国环境标志（十环）认证，证书编号 CEC2020ELP00811231，认证标准为 HJ2541-2016《环境标志产品技术要求 胶粘剂》，持证覆盖 32+ 个型号。十环认证由中华人民共和国生态环境部授权颁发，是国内最具权威性的环保产品认证之一。",
  },
  {
    id: "H3",
    q: "海绵安全吗？有重金属检测吗？",
    a: "灰糖家具用海绵经全球权威第三方检测机构 SGS 通标标准技术服务检测（报告号：SDHL2206011173FT），按欧盟玩具安全标准 EN 71-3:2019+A1:2021 测试 19 项可溶性重金属——铝/砷/硼/钡/镉/钴/三价铬/铜/汞/锰/镍/铅/锑/硒/锌/锶/锡/有机锡/六价铬——全部 ND（未检出）。EN 71-3 是全球对重金属要求最严的标准之一，广泛用于儿童玩具安全检测。",
  },
  {
    id: "H4",
    q: "仿皮材料安全吗？甲醛超标吗？",
    a: "灰糖使用的仿皮材料经广东顺德创科检测（CNAS L5016，报告号：CKJC260410KK05-4），按 HJ507-2009《环境标志产品技术要求 皮革和合成革》检测，游离甲醛未检出（方法检出限 20 mg/kg），符合 A 类（最严级，限值 ≤20.0 mg/kg）要求。A 类标准是皮革行业最严的甲醛控制等级，主要针对婴幼儿可接触皮革产品。",
  },
  {
    id: "H5",
    q: "布艺面料是不是也通过环保认证？",
    a: "灰糖布艺面料供应商为海宁市志达布业织造有限公司，通过中国环境标志（十环）认证，证书编号 CEC2019ELP00908696，认证标准 HJ2546-2016《环境标志产品技术要求 纺织产品》，覆盖座椅面料/沙发面料/窗帘面料/抱枕面料共 64 个型号，由中华人民共和国生态环境部授权颁发。十环认证对纺织品的有害物质限量要求远严于普通国标。",
  },
  {
    id: "H6",
    q: "什么是 ENF 级板材？为什么比 E0 还严？",
    a: "ENF 级是 GB/T 39600-2021《人造及其饰面人造板甲醛释放量分级》中的最高等级，规定甲醛释放量 ≤0.025 mg/m³（1m³ 气候箱法）。对比三个等级：E1 ≤0.124 mg/m³、E0 ≤0.050 mg/m³、ENF ≤0.025 mg/m³。ENF 级的甲醛释放量仅为 E0 的 50%、E1 的 20%，是中国现行人造板材甲醛控制的最高标准。灰糖多层胶合板实测 0.008 mg/m³，是 ENF 限值的 32%，「优等生里的满分」。",
  },
  {
    id: "H7",
    q: "什么是十环认证？普通家具品牌都有吗？",
    a: "中国环境标志（俗称「十环认证」）由中华人民共和国生态环境部授权颁发，是国内最具权威性的综合性环保产品认证。认证标准采用 HJ 系列行业标准（HJ2541-2016 胶粘剂/HJ2546-2016 纺织产品），需经过型式试验 + 工厂检查 + 认证后监督三道关卡，门槛远高于普通国标。家具行业同时持有胶粘剂十环和纺织品十环两个认证的品牌极少——灰糖同时持有胶水（CEC2020ELP00811231）和布艺（CEC2019ELP00908696）两份十环证书，覆盖近 100 个型号，是供应链环保能力的直接证明。",
  },
  {
    id: "H8",
    q: "你们的检测报告可以查看吗？",
    a: "灰糖已完成 9 大核心材料的国家级实验室检测，覆盖板材（ENF 级）、胶水（十环认证）、布艺（十环认证）、海绵（SGS 重金属全 ND）、仿皮（甲醛未检出）等。检测报告可在成都太古里 2000 平旗舰展厅扫描材料展示区的二维码查看，也可联系展厅产品顾问索取具体检测报告。检测报告不直接挂在官网下载（PDF 格式不利于 SEO，且展示区的扫码体验更直观）。",
  },
];

// Build FAQPage Schema for H1-H8
const safetyFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: safetyFAQs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

// ── 核心数据 ──
const heroStats = [
  { value: "0.008", unit: "mg/m³", label: "板材甲醛释放量", sub: "ENF级（黄埔海关检测）" },
  { value: "19项", unit: "全ND", label: "海绵重金属", sub: "SGS 通标检测" },
  { value: "双十环", unit: "", label: "胶水+布艺认证", sub: "生态环境部授权" },
  { value: "4家", unit: "权威机构", label: "检测机构", sub: "海关/SGS/CNAS/生态部" },
];

const materialCards = [
  {
    num: "01",
    title: "板材 ENF 级",
    data: "0.008 mg/m³",
    source: "黄埔海关技术中心",
    report: "报告号 24202600083C",
    standard: "GB/T 39600-2021",
    desc: "ENF级，甲醛仅为E0限值的6%",
  },
  {
    num: "02",
    title: "双重十环认证",
    data: "近100个型号",
    source: "生态环境部授权",
    report: "CEC2020ELP00811231 / CEC2019ELP00908696",
    standard: "HJ2541-2016 / HJ2546-2016",
    desc: "胶水32+型号 + 布艴64型号",
  },
  {
    num: "03",
    title: "海绵 19 项重金属全 ND",
    data: "全部未检出",
    source: "SGS 通标标准技术服务",
    report: "报告号 SDHL2206011173FT",
    standard: "EN 71-3:2019+A1:2021",
    desc: "按欧盟玩具安全标准检测，全球最严重金属标准之一",
  },
  {
    num: "04",
    title: "仿皮甲醛未检出",
    data: "未检出（检出限 20 mg/kg）",
    source: "创科检测 CNAS L5016",
    report: "报告号 CKJC260410KK05-4",
    standard: "HJ507-2009",
    desc: "符合A类（最严级，婴幼儿可接触皮革标准）",
  },
];

const inspectionTable = [
  { material: "多层胶合板 18MM", item: "甲醛释放量", method: "GB/T 39600-2021 气候箱法", limit: "ENF ≤0.025 mg/m³", result: "0.008 mg/m³", pass: "ENF级 ✅" },
  { material: "单面夹板 12MM", item: "甲醛释放量", method: "GB 18580 干燥器法", limit: "E1 ≤1.5 mg/L", result: "0.73 mg/L", pass: "E1级 ✅" },
  { material: "双面夹板 10MM", item: "甲醛释放量", method: "GB 18580 干燥器法", limit: "E1 ≤1.5 mg/L", result: "1.34 mg/L", pass: "E1级 ✅" },
  { material: "水性胶粘剂", item: "十环认证", method: "HJ2541-2016", limit: "—", result: "CEC2020ELP00811231", pass: "十环认证 ✅" },
  { material: "布艺面料", item: "十环认证", method: "HJ2546-2016", limit: "—", result: "CEC2019ELP00908696", pass: "十环认证 ✅" },
  { material: "海绵", item: "19项重金属", method: "EN 71-3:2019+A1:2021", limit: "全部 ND", result: "全部 ND", pass: "合格 ✅" },
  { material: "仿皮", item: "游离甲醛", method: "HJ507-2009", limit: "A类 ≤20 mg/kg", result: "未检出", pass: "A类合格 ✅" },
  { material: "海绵 2550", item: "甲醛", method: "GB/T 10802-2023", limit: "≤10 mg/kg", result: "2.4 mg/kg", pass: "合格 ✅" },
  { material: "俄罗斯松木", item: "供应商认证", method: "—", limit: "—", result: "俄罗斯优质供应商", pass: "—" },
];

const institutions = [
  {
    name: "黄埔海关技术中心",
    desc: "国家消费品安全检测重点实验室，多层胶合板 ENF 级检测机构",
  },
  {
    name: "SGS 通标标准技术服务",
    desc: "国际权威第三方检测机构，海绵 EN 71-3 重金属检测",
  },
  {
    name: "广东顺德创科检测（CNAS L5016）",
    desc: "CNAS 国际互认实验室，甲醛类检测",
  },
  {
    name: "中华人民共和国生态环境部",
    desc: "国家环境标志授权机构，十环认证颁发机构",
  },
];

export default function SafetyPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {/* FAQPage JSON-LD Schema (H1-H8) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(safetyFAQSchema) }}
      />

      {/* Hero */}
      <section className="py-32 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">Material Safety</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            材料安全 · 透明可查
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
            19项重金属未检出 · ENF级板材 · 双重十环认证 · 4大权威机构检测
          </p>

          {/* 4 Data Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map((stat, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mb-2">{stat.unit}</div>
                <div className="text-sm font-medium text-gray-300">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Data Wall */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Core Data</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              核心数据墙
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {materialCards.map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs text-gray-400 font-mono">{card.num}</div>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">检测合格</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h3>
                <div className="text-2xl font-serif font-bold text-gray-900 mb-3">{card.data}</div>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>检测机构：{card.source}</p>
                  <p>{card.report}</p>
                  <p>标准：{card.standard}</p>
                </div>
                <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-200">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Inspection Overview</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              检测全景表
            </h2>
            <p className="text-gray-500 mt-4">9 项核心材料检测对照</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-3 font-semibold text-gray-900">检测材料</th>
                  <th className="text-left py-4 px-3 font-semibold text-gray-900">检测项目</th>
                  <th className="text-left py-4 px-3 font-semibold text-gray-900">检测方法</th>
                  <th className="text-left py-4 px-3 font-semibold text-gray-900">限值</th>
                  <th className="text-left py-4 px-3 font-semibold text-gray-900">实测</th>
                  <th className="text-left py-4 px-3 font-semibold text-gray-900">结果</th>
                </tr>
              </thead>
              <tbody>
                {inspectionTable.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-4 px-3 text-gray-900 font-medium">{row.material}</td>
                    <td className="py-4 px-3 text-gray-600">{row.item}</td>
                    <td className="py-4 px-3 text-gray-500 text-xs">{row.method}</td>
                    <td className="py-4 px-3 text-gray-500">{row.limit}</td>
                    <td className="py-4 px-3 text-gray-900 font-semibold">{row.result}</td>
                    <td className="py-4 px-3 text-green-700 font-medium">{row.pass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Testing Institutions</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              检测机构资质
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {institutions.map((inst, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{inst.name}</h3>
                  <p className="text-sm text-gray-500">{inst.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">Material Safety FAQ</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              材料安全常见问题
            </h2>
          </div>
          <div className="space-y-3">
            {safetyFAQs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-colors"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-start gap-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs text-gray-400 font-mono flex-shrink-0 mt-0.5 w-8">
                      {faq.id}
                    </span>
                    <span className="font-medium text-gray-900 pr-4 text-sm flex-1">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 bg-gray-50/50">
                      <div className="pl-8">
                        <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors">
              查看全部 64 条常见问题 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            展厅材料展示区，扫码即可查看
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            展厅设有材料展示区，展示 9 份核心检测报告原始文件，可现场扫描二维码查看详细内容
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              前往成都展厅
            </Link>
            <Link href="/showroom" className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors">
              联系产品顾问
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
