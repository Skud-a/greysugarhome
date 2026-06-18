import Link from "next/link";
import Image from "next/image";

// ImageObject Schema - 展厅Hero图
const showroomImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://greysugarhome.com/images/showroom.jpg",
  "caption": "灰糖家居成都太古里旗舰展厅中庭",
  "description": "2000㎡旗舰展厅中庭，玻璃盒设计结构，自然光影美学空间",
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

// LocalBusiness Schema (展厅页)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "灰糖家居 · 成都太古里旗舰展厅",
  image: "https://greysugarhome.com/images/showroom.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "新南路40号院",
    addressLocality: "成都",
    addressRegion: "四川",
    addressCountry: "CN",
  },
  telephone: "【待 Skud 补充】",
  openingHours: "Mo-Su 11:00-18:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "18:00",
    },
  ],
  publicAccess: true,
  reservationPolicy:
    "无须预约，直接到店即可；建议提前联系产品顾问预留充足体验时间。",
  hasMap: "【待 Skud 补充：高德 / 百度地图链接】",
  priceRange: "【待 Skud 补充：¥¥ / ¥¥¥】",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "专属停车场" },
    { "@type": "LocationFeatureSpecification", name: "光影美学体验" },
    { "@type": "LocationFeatureSpecification", name: "面料对比区" },
    { "@type": "LocationFeatureSpecification", name: "饮品空间" },
  ],
  makesOffer: {
    "@type": "Offer",
    warranty: {
      "@type": "WarrantyPromise",
      durationOfWarranty: {
        "@type": "QuantitativeValue",
        value: 3,
        unitCode: "ANN",
      },
      warrantyScope:
        "3 年非人为工艺缺陷免费质保 + 10 年质保支持期内成本价维修与配件更换",
    },
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "板材环保等级",
      value: "ENF级（GB/T 39600-2021）",
      propertyID: "GB/T 39600-2021",
    },
    {
      "@type": "PropertyValue",
      name: "板材甲醛释放量",
      value: "0.008 mg/m³（黄埔海关技术中心检测，报告号24202600083C）",
      measurementTechnique: "GB/T 39600-2021 1m³气候箱法",
    },
    {
      "@type": "PropertyValue",
      name: "胶粘剂认证",
      value: "中国环境标志（十环）CEC2020ELP00811231（生态环境部）",
    },
    {
      "@type": "PropertyValue",
      name: "纺织品认证",
      value: "中国环境标志（十环）CEC2019ELP00908696（生态环境部）",
    },
    {
      "@type": "PropertyValue",
      name: "海绵重金属检测",
      value: "EN 71-3:2019+A1:2021 19项全未检出（SGS通标，报告号SDHL2206011173FT）",
    },
  ],
};

export default function ShowroomPage() {
  return (
    <div className="flex flex-col">
      {/* ImageObject JSON-LD Schema - 展厅图 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(showroomImageSchema),
        }}
      />

      {/* LocalBusiness JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Hero */}
      <section className="relative py-32 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/showroom.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">
            Flagship Showroom
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            成都旗舰展厅
          </h1>
          <p className="text-xl text-gray-400">CHENGDU FLAGSHIP SHOWROOM</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
                Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
                2000㎡ · 30个独立设计分区
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  灰糖家居成都旗舰展厅，位于太古里核心商圈，新南路40号院。
                </p>
                <p>
                  展厅采用品牌直营模式，2024年5月完成升级。30个独立设计分区，覆盖客厅、餐厅、卧室等全场景家居空间。
                </p>
                <p>
                  所见即所得——展厅看到的产品就是你收到的产品，拒绝"见光死"。
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src="/images/showroom.jpg"
                alt="灰糖家居成都旗舰展厅"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours & Visit Info */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="font-semibold text-gray-900 mb-2">营业时间</h3>
              <p className="text-gray-600 text-sm">
                周一至周日
                <br />
                <span className="text-lg font-semibold text-gray-900">
                  11:00 — 18:00
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-2">全年同时段 · 节假日不歇业</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <div className="text-3xl mb-4">🎫</div>
              <h3 className="font-semibold text-gray-900 mb-2">无须预约</h3>
              <p className="text-gray-600 text-sm">
                直接到店即可
                <br />
                <span className="text-gray-500">
                  也可联系产品顾问预约充足时间
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                产品顾问会提前准备风格方案与面料样本
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <div className="text-3xl mb-4">🅿️</div>
              <h3 className="font-semibold text-gray-900 mb-2">专属停车</h3>
              <p className="text-gray-600 text-sm">
                楼下独立停车场
                <br />
                <span className="text-gray-500">100个车位</span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                地铁 1 号线新南门站 D 口出·步行可达
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Style Groups */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
              Interior Styles
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              四组实景风格
            </h2>
            <p className="text-gray-500">展厅已拍摄实景风格展示</p>
          </div>
          
          {/* 展厅实景大图 */}
          <div className="relative aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/showroom-detail.jpg"
              alt="灰糖家居展厅实景"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "通透明亮",
                desc: "浅灰色布艺沙发 + 金属支架玻璃茶几，光线充足，空间开阔",
              },
              {
                title: "层次丰富",
                desc: "暖棕皮质沙发 + 红色单人椅，软装层次丰富，温暖而有张力",
              },
              {
                title: "温馨复古",
                desc: "壁炉旁浅米色沙发，营造温馨复古的家庭氛围",
              },
              {
                title: "质感厚重",
                desc: "深绿色丝绒单人椅 + 木质茶几，质感厚重，品味独特",
              },
            ].map((style, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="text-xs text-gray-400 mb-3">
                  STYLE 0{i + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {style.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {style.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              展厅体验
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "光影美学",
                desc: "随季节与时间变化的自然光影",
              },
              { icon: "☕", title: "饮品服务", desc: "零食饮料供应，舒适洽谈空间" },
              { icon: "🧵", title: "面料体验", desc: "布艺面料实物触摸与选择" },
              { icon: "👥", title: "互动活动", desc: "定期举办人群互动活动" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 border border-gray-100 rounded-2xl bg-white"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After-Sales Guarantee */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
              Warranty
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              售后保障 · 管 13 年
            </h2>
            <p className="text-gray-500">
              自营售后，不通过经销商也不分包给第三方
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-xs text-gray-400 mb-3">第一层</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3 年非人为质保
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                自购买之日起 3 年内，因工艺缺陷导致的产品问题，灰糖免费提供质保维修。覆盖最高频的工艺类隐患。
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-xs text-gray-400 mb-3">第二层</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                10 年质保支持期
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                3 年质保到期后，进入长达 10 年的质保支持期——灰糖以成本价为客户提供维修服务和配件更换，确保家具的长期使用价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              Location
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              到店指南
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-800 rounded-2xl">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">地址</h3>
              <p className="text-gray-400 text-sm">
                成都太古里
                <br />
                新南路40号院
              </p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl">
              <div className="text-3xl mb-4">🚇</div>
              <h3 className="font-semibold mb-2">交通</h3>
              <p className="text-gray-400 text-sm">
                地铁 1 号线
                <br />
                新南门站 D 口出
              </p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl">
              <div className="text-3xl mb-4">🅿️</div>
              <h3 className="font-semibold mb-2">停车</h3>
              <p className="text-gray-400 text-sm">
                楼下独立停车场
                <br />
                100个车位
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">导航搜索"灰糖家居"</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            好家具，不溢价
            <br />
            好品质，不打折
          </h2>
          <p className="text-gray-500 mb-8">
            祝愿大家，也祝愿我们：心中的热爱永远滚烫，所有的坚持都听到回响。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/brand" className="btn-primary">
              品牌故事
            </Link>
            <Link href="/craftsmanship" className="btn-secondary">
              高定工艺
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
