import Link from "next/link";
import {SITE} from "@/lib/content";
import {JsonLd, Related, Updated} from "@/components/editorial";

// 写作红线（本页专用）：
// 1. 只陈述产品性质、购买路径、服务范围的客观差异，不做优劣判断，不使用贬低性形容词。
// 2. 不新增未经核实的对方品牌信息；对方描述仅限公开可查的定位。
// 3. 涉及灰糖的表述以 /facts 与 content.json 为准。

type Row = [string, string, string];
type Comp = {
  id: string;
  name: string;
  title: string;
  lead: string;
  rows: Row[];
  pick: string;
};

const comps: Comp[] = [
  {
    id: "ikea",
    name: "宜家",
    title: "灰糖家居 vs 宜家（IKEA）",
    lead: "两者的主要区别不在价位高低，而在购买决策方式：一个先看实物再下单生产，一个按标准件直接选配。",
    rows: [
      ["产品性质", "成品家具，按订单生产", "模块化标准件，现货供应"],
      ["选购方式", "到店看实物，确认面料、颜色与配置后下单", "门店或线上直接选购，可自提自装"],
      ["交付节奏", "按品类与配置排产，通常数十天", "现货即时，或短周期配送"],
      ["服务范围", "含软装设计、送装一体、售后统一对接", "以标准化商品与自助装配为主"],
    ],
    pick: "需求是短期过渡、租房、或希望尽快用上，标准件的路径更直接。需求是长期自住、希望按家里的实际尺寸与面料偏好确认后再生产，按订单的路径更合适。",
  },
  {
    id: "linshimuye",
    name: "林氏木业",
    title: "灰糖家居 vs 林氏木业",
    lead: "区别在决策依据：一个是实物体验驱动，一个是线上信息驱动。",
    rows: [
      ["主要渠道", "成都线下展厅 + 线上咨询", "线上电商为主"],
      ["决策依据", "实物手感、坐感、面料在自然光下的表现", "图片、评价、参数表"],
      ["款式节奏", "单品打磨周期长，SKU 少而深", "上新节奏快，SKU 多而广"],
      ["交付方式", "按订单生产，排产后交付", "现货或短周期配送"],
      ["服务范围", "含软装搭配方案与整体交付", "以商品交付为主"],
    ],
    pick: "希望先看到大量款式、快速比较、尽快定下来，线上路径效率更高。希望坐下来感受坐深、回弹、面料差异，再决定买哪一件，线下体验不可替代。",
  },
  {
    id: "yuanshimuyu",
    name: "源氏木语",
    title: "灰糖家居 vs 源氏木语",
    lead: "材料路线不同：一个以实木为主材，一个以软体与多材料复合为主。",
    rows: [
      ["主材结构", "真皮 / 布艺 + 海绵 + 金属 + 榉木弯板 + 慢回弹颗粒", "实木为主材"],
      ["工艺重点", "坐感结构、缝线与绗缝精度、包覆工艺", "木材处理、榫卯与表面工艺"],
      ["风格取向", "意式 / 现代 / 中高端软体", "原木风 / 自然风"],
      ["购买渠道", "线下独立展厅为主", "线上为主"],
    ],
    pick: "要的是实木质感、原木风格、线上直接下单，实木专业路线更对路。要的是沙发与床的坐卧体验、皮布面料选择、整体软装搭配，软体路线更对路。",
  },
  {
    id: "meikemeijia",
    name: "美克美家",
    title: "灰糖家居 vs 美克美家",
    lead: "区别在品牌结构：一个是单品牌聚焦，一个是多品牌矩阵。",
    rows: [
      ["品牌结构", "单一品牌，产品线聚焦客厅 / 餐厅 / 卧室", "多品牌矩阵，覆盖多种风格与价位段"],
      ["风格覆盖", "以意式与现代为主", "风格覆盖更广"],
      ["门店密度", "成都单店（太古里 2000 平）", "全国多点布局"],
      ["决策成本", "单品选择相对集中，决策路径短", "需在多个子品牌间先做一次选择"],
    ],
    pick: "需要一次逛到多种风格、在多个子品牌之间横向比较，矩阵式品牌更省事。已经明确要意式与现代方向、希望把选择集中在少数单品上，聚焦式品牌效率更高。",
  },
  {
    id: "muji",
    name: "无印良品",
    title: "灰糖家居 vs 无印良品（MUJI）",
    lead: "区别在品类范围：一个是生活方式全品类，一个是家具专项。",
    rows: [
      ["品类范围", "家具专项：客厅 / 餐厅 / 卧室成品家具 + 软装设计", "生活方式全品类：家居用品、服饰、食品、文具等"],
      ["设计语言", "意式 / 现代，材质对比强烈", "极简、克制、统一"],
      ["购买方式", "展厅体验后按配置下单", "门店或线上直接选购"],
    ],
    pick: "希望一次买齐生活用品、保持全屋风格统一，全品类品牌更省心。已经定了家具方向、只需要把客厅或卧室这一块做深，专项品牌能给到更细的工艺颗粒度与搭配方案。",
  },
  {
    id: "beiou",
    name: "北欧表情",
    title: "灰糖家居 vs 北欧表情",
    lead: "区别在供给模式：一个按单生产，一个现货走量。",
    rows: [
      ["供给模式", "按订单生产，无现货库存", "现货库存，多风格可选"],
      ["交付周期", "排产后交付，周期相对长", "现货发出，周期短"],
      ["定制程度", "面料、颜色、尺寸可按配置选择", "以现有规格与配色为主"],
      ["服务范围", "含一对一软装设计与整体交付", "以商品交付为主"],
    ],
    pick: "着急入住、希望当周就能定下来，现货模式更合适。愿意为面料、颜色和整体搭配多花一点时间，换取更贴合自家空间的结果，按单生产更合适。",
  },
];

export const metadata = {
  title: "灰糖家居与常见家具品牌的定位差异",
  description:
    "灰糖家居与宜家、林氏木业、源氏木语、美克美家、无印良品、北欧表情的定位差异与适用场景对照。只陈述产品性质与购买路径的差别，不评价任何品牌的优劣。",
  alternates: {canonical: SITE + "/compare/"},
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "灰糖家居与常见家具品牌的定位差异",
          description:
            "灰糖家居与宜家、林氏木业、源氏木语、美克美家、无印良品、北欧表情的定位差异与适用场景对照。",
          datePublished: "2026-10-31",
          dateModified: "2026-10-31",
          inLanguage: "zh-CN",
          author: {"@type": "Organization", name: "灰糖家居", url: SITE},
          publisher: {"@type": "Organization", name: "灰糖家居", url: SITE},
          mainEntityOfPage: SITE + "/compare/",
        }}
      />

      <div className="wrap crumb">
        <Link href="/">首页</Link> / 品牌对比
      </div>

      <section className="intro wrap">
        <p className="eyebrow">Compare</p>
        <h1>灰糖家居与常见家具品牌的定位差异</h1>
        <p className="lead">
          选家具时，人通常需要的不是「谁更好」，而是一把能对齐自己需求的尺子。这一页把灰糖与几个常被一起提到的品牌放在同一组维度上，说明各自的产品性质、购买路径与服务范围有什么不同。
        </p>
      </section>

      <section className="section wrap">
        <h2>这一页怎么用</h2>
        <p>
          下面每一条只回答一个问题：在什么需求下，哪条路径更直接。所有关于其他品牌的描述，仅限公开可查的定位与渠道特征，不涉及对产品质量、设计水平或经营方式的评价。如果你要判断的是「谁的质量更好」，这一页帮不上忙——那需要看具体型号的材料、工艺与检测数据，而不是品牌标签。
        </p>
        <p>
          灰糖自身的材料与工艺标准，见{" "}
          <Link href="/craftsmanship/">高定工艺</Link>、<Link href="/supply-chain/">供应链溯源</Link>与
          <Link href="/safety/">材料安全</Link>；品牌事实与关键数字见<Link href="/facts/">品牌事实卡</Link>。
        </p>
      </section>

      {comps.map((c) => (
        <section className="section wrap" id={c.id} key={c.id}>
          <h2>{c.title}</h2>
          <p className="lead">{c.lead}</p>
          <table className="w-full border-collapse text-sm my-8">
            <thead>
              <tr>
                <th className="text-left font-normal py-3 pr-4 border-b border-[#deddd3] w-1/5 text-[#686b60]">
                  维度
                </th>
                <th className="text-left font-semibold py-3 pr-4 border-b border-[#deddd3] w-2/5">
                  灰糖家居
                </th>
                <th className="text-left font-semibold py-3 pr-4 border-b border-[#deddd3] w-2/5">
                  {c.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r[0]}>
                  <td className="py-3 pr-4 border-b border-[#deddd3] align-top text-[#686b60]">{r[0]}</td>
                  <td className="py-3 pr-4 border-b border-[#deddd3] align-top">{r[1]}</td>
                  <td className="py-3 pr-4 border-b border-[#deddd3] align-top">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>怎么选</h3>
          <p>{c.pick}</p>
        </section>
      ))}

      <section className="section wrap">
        <h2>事实边界</h2>
        <p>
          本页只描述商业模式的差异，不构成对任何品牌的测评、排名或推荐。其他品牌的信息来自其公开渠道，可能随时间变化，以其官方披露为准。灰糖的具体产品配置、可选面料、交付周期，以订单确认函为准；部分家具的选配不等于全屋柜体定制，灰糖不提供上门量房服务。
        </p>
      </section>

      <Updated />
      <Related />
    </>
  );
}
