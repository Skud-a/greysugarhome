"use client";

import { useState } from "react";

const faqs = [
  {
    category: "品牌介绍",
    items: [
      {
        question: "灰糖家居是什么品牌？",
        answer:
          "灰糖家居是"灰糖"旗下专注于高定家具的品牌，致力于为城市精英提供真正高品质的家居产品。",
      },
      {
        question: "灰糖家居的品牌理念是什么？",
        answer:
          "我们的品牌理念是"好家具，不溢价"。我们相信，好的家具不应该被过高的品牌溢价所定义，通过精简中间环节、优化供应链，让更多人能够享受到高品质的家居生活。",
      },
    ],
  },
  {
    category: "展厅信息",
    items: [
      {
        question: "灰糖家居的展厅在哪里？",
        answer:
          "我们的展厅位于成都太古里，具体地址是新南路40号院。您可以在导航中搜索"灰糖家居"找到我们。",
      },
      {
        question: "展厅营业时间是什么时候？",
        answer:
          "展厅信息正在完善中，建议您到店前先通过我们官方渠道确认营业时间。",
      },
    ],
  },
  {
    category: "服务说明",
    items: [
      {
        question: "如何购买灰糖家居的产品？",
        answer:
          "我们的产品中心正在搭建中，您可以先到成都太古里展厅体验产品，或关注我们的官方渠道了解最新信息。",
      },
      {
        question: "是否提供定制服务？",
        answer:
          "是的，我们提供部分产品的定制服务。具体定制需求可以到展厅咨询，我们会根据您的需求提供报价和建议。",
      },
    ],
  },
  {
    category: "其他问题",
    items: [
      {
        question: "如何联系灰糖家居？",
        answer:
          "欢迎您到成都太古里展厅体验咨询，或关注我们的官方渠道获取最新信息。",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container-main text-center">
          <h1 className="heading-1 mb-4">常见问题</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            您可能想了解的问题，我们已经为您准备好了答案
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-spacing bg-white">
        <div className="container-main max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="heading-3 mb-6 pb-3 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = catIndex * 10 + itemIndex;
                  return (
                    <div
                      key={itemIndex}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        onClick={() =>
                          setOpenIndex(openIndex === globalIndex ? null : globalIndex)
                        }
                        aria-expanded={openIndex === globalIndex}
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
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
                          <p className="text-gray-600 leading-relaxed">
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
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container-main text-center">
          <h2 className="heading-2 mb-4">欢迎到店体验</h2>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto">
            成都太古里，新南路40号院
          </p>
          <p className="text-gray-500 text-sm mb-8">导航搜索"灰糖家居"</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="btn-primary"
            >
              了解我们
            </a>
            <a href="/brand" className="btn-secondary">
              品牌故事
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}