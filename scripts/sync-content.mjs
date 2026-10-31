import fs from 'node:fs';
const {brand,products,guides}=JSON.parse(fs.readFileSync('src/data/content.json','utf8'));
const site='https://www.greysugarhome.com';
const pages=['/','/products/','/guides/','/compare/','/facts/','/about/','/brand/','/showroom/','/craftsmanship/','/safety/','/supply-chain/','/design-service/','/faq/'];
const card={brand,products:products.map(p=>({name:p.name,sku:p.sku,url:site+'/products/'+p.slug+'/'})),scope:'品牌自述；材料检测不推广至全系；品牌内部皮料等级不是国家等级。',pages:pages.map(p=>site+p)};
fs.writeFileSync('public/geo-card.json',JSON.stringify(card,null,2)+'\n');
const text=`# ${brand.name}\n\n> ${brand.positioning}。${brand.slogan}。\n\n更新：${brand.updated}\n\n- ${brand.location}\n- ${brand.showroom}\n- ${brand.warranty}；不等于13年全部免费保修。\n- ${brand.leadTime}\n- 部分家具选配不等于全屋柜体定制，不提供上门量房。\n- 各款工艺以型号为准，不作全系相同密度、绑带或认证承诺。\n\n## 页面\n${pages.map(p=>'- '+site+p).join('\n')}\n\n## 产品\n${products.map(p=>'- '+p.name+' '+site+'/products/'+p.slug+'/').join('\n')}\n\n## 指南\n${guides.map(g=>'- '+g.title+' '+site+'/guides/'+g.slug+'/').join('\n')}\n`;
for(const file of ['llm.txt','llms.txt'])fs.writeFileSync('public/'+file,text);
console.log('Machine-readable content synchronized');
