import Link from "next/link";

const categories = [
  { name: "客厅家具", icon: "🛋️", description: "沙发、茶几、电视柜" },
  { name: "餐厅家具", icon: "🍽️", description: "餐桌、餐椅、餐边柜" },
  { name: "卧室家具", icon: "🛏️", description: "床、床头柜、衣柜" },
  { name: "书房家具", icon: "📚", description: "书桌、书椅、书架" },
  { name: "灯具装饰", icon: "💡", description: "吊灯、落地灯、台灯" },
  { name: "家居饰品", icon: "🖼️", description: "挂画、摆件、装饰画" },
];

const products = [
  {
    id: 1,
    name: "北欧简约三人沙发",
    category: "客厅家具",
    price: "¥3,980",
    description: "进口白蜡木框架，高回弹海绵坐垫，可拆洗布艺外套",
    tag: "畅销",
  },
  {
    id: 2,
    name: "实木餐桌 1.6米",
    category: "餐厅家具",
    price: "¥2,680",
    description: "北美黑胡桃木，环保木蜡油涂装，适合4-6人家庭",
    tag: "新品",
  },
  {
    id: 3,
    name: "极简落地灯",
    category: "灯具装饰",
    price: "¥899",
    description: "黄铜灯体，亚麻灯罩，暖白光LED光源",
    tag: null,
  },
  {
    id: 4,
    name: "布艺双人床",
    category: "卧室家具",
    price: "¥4,280",
    description: "科技布面料，软包床头，多规格可选",
    tag: "热卖",
  },
  {
    id: 5,
    name: "升降书桌",
    category: "书房家具",
    price: "¥1,980",
    description: "电动升降，记忆高度，实木桌面",
    tag: null,
  },
  {
    id: 6,
    name: "装饰画组合",
    category: "家居饰品",
    price: "¥468",
    description: "莫兰迪色系，3幅组合装，送礼佳品",
    tag: "特惠",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container-main text-center">
          <h1 className="heading-1 mb-4">产品中心</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            精选北欧风格家居产品，为您的家带来简约与温暖
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <h2 className="heading-2 mb-8 text-center">产品分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="card p-6 text-center hover:border-accent border-2 border-transparent transition-colors"
              >
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="font-medium mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing bg-gray-50">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-2">全部产品</h2>
            <span className="text-gray-500">共 {products.length} 件商品</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article key={product.id} className="card group">
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-7xl">{product.tag === "畅销" ? "🛋️" : product.tag === "新品" ? "🍽️" : product.tag === "热卖" ? "🛏️" : product.tag === "特惠" ? "🖼️" : "💡"}</span>
                  </div>
                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-sm rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-sm text-accent mb-2 block">{product.category}</span>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
                      查看详情
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-main text-center">
          <h2 className="heading-2 mb-4">没有找到心仪的产品？</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            我们提供定制服务，根据您的需求打造专属家居产品。联系我们，获取更多帮助。
          </p>
          <Link href="/about" className="btn-primary">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
}
