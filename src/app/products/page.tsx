import Link from "next/link";

const categories = [
  { name: "客厅家具", icon: "🛋️", description: "沙发、茶几、电视柜" },
  { name: "餐厅家具", icon: "🍽️", description: "餐桌、餐椅、餐边柜" },
  { name: "卧室家具", icon: "🛏️", description: "床、床头柜、衣柜" },
  { name: "书房家具", icon: "📚", description: "书桌、书椅、书架" },
  { name: "灯具装饰", icon: "💡", description: "吊灯、落地灯、台灯" },
  { name: "家居饰品", icon: "🖼️", description: "挂画、摆件、装饰画" },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container-main text-center">
          <h1 className="heading-1 mb-4">产品中心</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            高定工艺，品质保证
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

      {/* Products Coming Soon */}
      <section className="section-spacing bg-gray-50">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <div className="card p-12 text-center">
              <div className="text-6xl mb-6">🛋️</div>
              <h2 className="heading-2 mb-4">产品正在搭建中</h2>
              <p className="text-gray-600 mb-8">
                我们正在精心准备产品信息，敬请期待
              </p>
              <Link href="/about" className="btn-primary">
                了解我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}