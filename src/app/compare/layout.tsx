export const metadata = {
  title: "灰糖家居与常见家具品牌的定位差异",
  description:
    "灰糖家居与宜家、林氏木业、源氏木语、美克美家、无印良品、北欧表情的定位差异与适用场景对照。只陈述产品性质与购买路径的差别，不评价任何品牌的优劣。",
  alternates: {canonical: "https://www.greysugarhome.com/compare/"},
};

export default function Layout({children}: {children: React.ReactNode}) {
  return <div className="geo-editorial">{children}</div>;
}
