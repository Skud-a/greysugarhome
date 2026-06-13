"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "品牌理念",
    items: [
      {
        question: "灰糖家居是什么品牌？",
        answer:
          '灰糖家居（Grey Sugar Home）是"灰糖"旗下专注于高定家具的品牌，2018年夏天诞生于成都，2022年秋天正式成立。生产基地分布于佛山、东莞、深圳，成都设有2000㎡旗舰展厅。',
      },
      {
        question: "灰糖家居的品牌理念是什么？",
        answer:
          '"好家具，不溢价"。我们相信好的家具不应该被过高的品牌溢价所定义，通过精简中间环节、优化供应链，让更多人能够享受到高品质的家居生活。',
      },
      {
        question: "为什么灰糖不打折？",
        answer:
          '折扣是价格的敌人，是对已购用户的不公平，是品牌溢价最丑陋的部分。我们坚持明码实价，不议价，不接受还价。从不进行价格欺诈、从不制造虚假促销、从不让人吃亏。',
      },
      {
        question: "灰糖家居的产品定位是什么？",
        answer:
          "高端家具，不溢价。我们面向城市精英，提供真正高品质的家居产品，价格远低于同品质的进口品牌。",
      },
    ],
  },
  {
    category: "展厅信息",
    items: [
      {
        question: "灰糖家居的展厅在哪里？",
        answer:
          '我们的旗舰展厅位于成都太古里，具体地址是新南路40号院。您可以在导航中搜索"灰糖家居"找到我们。',
      },
      {
        question: "展厅有多大？",
        answer:
          "成都旗舰展厅面积2000㎡，设有30个独立设计分区，覆盖客厅、餐厅、卧室等全场景家居空间。2024年5月完成升级。",
      },
      {
        question: "展厅可以停车吗？",
        answer:
          "可以。展厅楼下有独立停车场，提供100个车位。也可以乘坐地铁，新南门站D口步行可达。",
      },
      {
        question: "展厅里能看到什么？",
        answer:
          "展厅设有30个独立设计分区，4组实景风格展示（通透明亮、层次丰富、温馨复古、质感厚重）。还有光影美学展示、饮品服务、布艺面料体验区等。所见即所得——展厅看到的产品就是你收到的产品。",
      },
    ],
  },
  {
    category: "产品与工艺",
    items: [
      {
        question: "灰糖家居的产品有哪些品类？",
        answer:
          "目前主要涵盖客厅家具（沙发、茶几等）、餐厅家具（餐桌、餐椅等）、卧室家具（床、床头柜等）。我们专注于成品家具，不做全屋定制。",
      },
      {
        question: "灰糖的工艺标准是什么？",
        answer:
          "灰糖有9大高定工艺标准：内外套工艺、一毫米缝工艺（耗时半年研发）、65D极致海绵、真皮工艺（耗时3年研究）、国产高端布艺、国际一线品牌同源绑带、榉木弯板、慢回弹颗粒、看不见的细节。",
      },
      {
        question: "灰糖的材料从哪里来？",
        answer:
          "我们花了3年时间、120,000公里飞行里程进行供应链调研。真皮来自甘肃平凉（牛皮源头）和阳江皮厂（超亿级投资+意大利进口设备）；海绵来自广州茂名（65D密度）；五金来自深圳超一流工厂。",
      },
      {
        question: "产品是否提供定制服务？",
        answer:
          "我们提供部分产品的定制服务，包括面料、颜色等选择。具体定制需求可以到展厅咨询，我们会根据您的需求提供建议。",
      },
    ],
  },
  {
    category: "服务与保障",
    items: [
      {
        question: "如何购买灰糖家居的产品？",
        answer:
          "您可以到成都太古里展厅体验产品，或关注我们的官方渠道了解最新信息。我们提供100%自营服务，无中间商。",
      },
      {
        question: "灰糖家居提供哪些保障？",
        answer:
          "四大保障：①成都自营实体展厅 ②专业物流安装团队 ③售后服务保障 ④100%自营。从出厂到入户全程把控。",
      },
      {
        question: "是否提供软装设计服务？",
        answer:
          "是的，我们提供专业软装设计服务，设计师会根据您的空间和需求提供搭配建议。可以到展厅咨询详情。",
      },
      {
        question: "物流和安装怎么安排？",
        answer:
          "我们拥有专业的物流安装团队，从出厂到入户全程自有团队把控，确保产品完好送达并正确安装。",
      },
    ],
  },
  {
    category: "其他问题",
    items: [
      {
        question: "如何联系灰糖家居？",
        answer:
          "欢迎您到成都太古里展厅体验咨询（新南路40号院），或关注我们的官方渠道获取最新信息。",
      },
      {
        question: "灰糖家居有线上购买渠道吗？",
        answer:
          "目前我们主要通过线下展厅提供服务。线上渠道正在建设中，请关注我们的官方渠道了解最新信息。",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            常见问题
          </h1>
          <p className="text-gray-500 text-lg">
            您可能想了解的问题，我们已经为您准备好了答案
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = `${catIndex}-${itemIndex}`;
                  return (
                    <div
                      key={itemIndex}
                      className="border border-gray-100 rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        onClick={() =>
                          setOpenIndex(openIndex === globalIndex ? null : globalIndex)
                        }
                        aria-expanded={openIndex === globalIndex}
                      >
                        <span className="font-medium text-gray-900 pr-4 text-sm">
                          {item.question}
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${
                            openIndex === globalIndex ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4 bg-white">
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            还有问题？
          </h2>
          <p className="text-gray-600 mb-2">欢迎到店体验咨询</p>
          <p className="text-gray-500 text-sm mb-8">成都太古里，新南路40号院</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/showroom" className="btn-primary">
              展厅详情
            </Link>
            <Link href="/brand" className="btn-secondary">
              品牌故事
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
