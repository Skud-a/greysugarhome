import Link from "next/link";
import Image from "next/image";

export default function SupplyChainPage() {
  return (
    <div className="flex flex-col">
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
