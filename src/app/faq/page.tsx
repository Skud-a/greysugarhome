"use client";

import { useState } from "react";

const faqs = [
  {
    category: "购物指南",
    items: [
      {
        question: "灰糖家居支持哪些支付方式？",
        answer:
          "我们支持支付宝、微信支付、银行卡支付、信用卡支付等多种支付方式。您可以在结账页面选择最适合您的支付方式。所有支付都经过加密处理，安全可靠。",
      },
      {
        question: "如何查看产品库存？",
        answer:
          "我们的网站会实时更新产品库存。如果某个产品暂时缺货，您可以选择到货通知，我们会第一时间通知您。您也可以联系客服了解具体的到货时间。",
      },
      {
        question: "可以定制产品吗？",
        answer:
          "是的，我们提供部分产品的定制服务。您可以选择不同的尺寸、颜色、材质等。具体定制需求可以联系我们的客服团队，我们会根据您的需求提供报价和交期。",
      },
    ],
  },
  {
    category: "配送安装",
    items: [
      {
        question: "配送范围和时效是怎样的？",
        answer:
          "我们提供全国范围内的配送服务（港澳台地区除外）。一线城市通常3-5个工作日送达，二三线城市5-7个工作日，偏远地区可能需要7-10个工作日。具体时间以下单时的提示为准。",
      },
      {
        question: "是否提供送货上门和安装服务？",
        answer:
          "是的，我们提供送货上门和免费安装服务。配送人员会按照您指定的时间和地点送货并完成安装。如果您需要拆卸旧家具，也可以预约我们的增值服务。",
      },
      {
        question: "偏远地区会额外收费吗？",
        answer:
          "部分偏远地区可能会收取额外的配送费用，具体费用会在结算页面显示。我们会尽量覆盖全国大部分地区，如果您不确定是否属于偏远地区，可以联系客服确认。",
      },
    ],
  },
  {
    category: "售后服务",
    items: [
      {
        question: "产品的质保期是多久？",
        answer:
          "我们的产品提供一年期的质保服务（特殊产品除外）。质保期内，如果产品出现非人为损坏的质量问题，我们会提供免费维修或更换服务。",
      },
      {
        question: "支持无理由退换货吗？",
        answer:
          "我们支持7天无理由退换货（定制产品除外）。退换货时产品需保持全新未使用状态，包装完整。退换货产生的运费根据具体情况由双方协商承担。",
      },
      {
        question: "如何申请售后服务？",
        answer:
          "您可以通过以下方式联系客服申请售后服务：1. 拨打客服热线 400-888-8888；2. 发送邮件至 hello@greysugarhome.com；3. 在官网联系在线客服。我们会尽快为您处理。",
      },
    ],
  },
  {
    category: "会员服务",
    items: [
      {
        question: "如何成为灰糖会员？",
        answer:
          "注册账号即成为灰糖会员。您可以享受会员积分、专属优惠、生日礼包等权益。消费越多，积分越多，可兑换的礼品也越丰富。",
      },
      {
        question: "会员积分可以做什么？",
        answer:
          "会员积分可以在下次购物时抵扣现金（100积分=1元），也可以在积分商城兑换专属礼品。积分有效期为获得后12个月，请及时使用。",
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
          <h2 className="heading-2 mb-4">还有其他问题？</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            如果您的问题没有在FAQ中找到答案，欢迎通过以下方式联系我们，我们的客服团队会尽快为您解答。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@greysugarhome.com"
              className="btn-primary"
            >
              发送邮件
            </a>
            <a href="tel:400-888-8888" className="btn-secondary">
              拨打热线
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
