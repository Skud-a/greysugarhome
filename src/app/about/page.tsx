import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-main text-center">
          <span className="text-accent font-medium mb-4 block">About Us</span>
          <h1 className="heading-1 text-white mb-6">关于灰糖家居</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            始于北欧美学，成于匠心品质，为您打造温馨舒适的家
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium mb-4 block">公司简介</span>
              <h2 className="heading-2 mb-6">我们是谁</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  灰糖家居（Grey Sugar Home）成立于2018年，是一家专注于北欧简约风格现代家居产品的品牌。我们致力于为追求品质生活的人群提供高品质、设计感强的家居产品。
                </p>
                <p>
                  总部位于上海，我们的设计团队由来自中国和北欧的专业设计师组成，将北欧的简约美学与中国的居住习惯相结合，打造出既国际化又本土化的家居产品。
                </p>
                <p>
                  目前，灰糖家居已服务超过10万家庭，产品涵盖客厅、餐厅、卧室、书房等多个居家场景。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <span className="text-9xl">🏢</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-accent font-medium mb-4 block">核心团队</span>
            <h2 className="heading-2 mb-4">我们的团队</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              一群热爱设计和生活的年轻人，致力于为您打造美好的居家体验
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "小灰",
                role: "创始人 & CEO",
                desc: "前北欧知名设计公司设计师，10年家居设计经验",
                emoji: "👨‍💼",
              },
              {
                name: "Sophie",
                role: "设计总监",
                desc: "毕业于丹麦皇家艺术学院，专注于北欧设计研究",
                emoji: "👩‍🎨",
              },
              {
                name: "老王",
                role: "供应链总监",
                desc: "深耕家具行业15年，精通供应链管理与品质控制",
                emoji: "👨‍🔧",
              },
            ].map((member, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">{member.emoji}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">发展历程</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { year: "2018", event: "灰糖家居在上海成立" },
              { year: "2019", event: "推出首批北欧风格家具产品线" },
              { year: "2020", event: "线上商城正式上线，服务超过1万家庭" },
              { year: "2021", event: "在上海开设首家线下体验店" },
              { year: "2022", event: "产品线扩展至全屋家居，入驻天猫旗舰店" },
              { year: "2023", event: "服务家庭突破10万，荣获年度家居品牌奖" },
              { year: "2024", event: "品牌升级，推出全新系列产品" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-8">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xl font-bold text-accent">{item.year}</span>
                </div>
                <div className="relative flex-shrink-0 w-4">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full"></div>
                  {i < 6 && <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-spacing bg-gray-900 text-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6 text-white">联系我们</h2>
              <p className="text-gray-400 mb-8">
                无论是咨询产品、了解合作机会，还是有任何建议，我们都期待与您交流。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-sm text-gray-400">邮箱</p>
                    <a href="mailto:hello@greysugarhome.com" className="hover:text-accent transition-colors">
                      hello@greysugarhome.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-400">电话</p>
                    <a href="tel:400-888-8888" className="hover:text-accent transition-colors">
                      400-888-8888
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-400">地址</p>
                    <p>上海市静安区某某路888号灰糖大厦</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-sm text-gray-400">营业时间</p>
                    <p>周一至周六 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-6">发送消息</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">姓名</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors text-white"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">邮箱</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">留言</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors text-white resize-none"
                      placeholder="请输入您的留言..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
