import Link from "next/link";import {notFound} from "next/navigation";import {products,SITE,brand,meta} from "@/lib/content";import {Hero,Section,JsonLd,Related,Updated} from "@/components/editorial";
export const dynamicParams=false;export function generateStaticParams(){return products.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);return p?meta(p.name,p.description,'/products/'+slug+'/'):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=products.find(x=>x.slug===slug);
  if(!p)notFound();
  const pr=p.price;
  const url=SITE+'/products/'+p.slug+'/';
  const ld:Record<string,unknown>={"@context":"https://schema.org","@type":"Product",name:p.name,sku:p.sku,description:p.description,image:SITE+p.image,url,brand:{"@type":"Brand",name:brand.name}};
  if(pr){ld.offers={"@type":"AggregateOffer",priceCurrency:"CNY",lowPrice:pr.from,offerCount:pr.offerCount,availability:"https://schema.org/InStock",url};}
  const basis=pr?pr.basis.split('-').map(s=>String(Number(s))).join(' 年 ')+' 月':'';
  return <>
    <div className="wrap crumb"><Link href="/products/">产品资料</Link> / {p.name}</div>
    <JsonLd data={ld}/>
    <Hero eyebrow={p.sku+' · '+p.category} title={p.name} description={p.tagline}/>
    <div className="wrap"><img className="wide-image" src={p.image} alt={p.name+'品牌实拍'}/></div>
    {pr&&<div className="wrap"><div className="price-block">
      <div className="price-main"><span className="cur">¥</span>{pr.from.toLocaleString('en-US')}<span className="from">起</span></div>
      <p className="price-config">起价配置：{pr.fromConfig}</p>
      {pr.reference&&<p className="price-config">{pr.reference.label}：¥{pr.reference.value.toLocaleString('en-US')}</p>}
      <p className="price-note">{brand.priceNote}价格基准：{basis}。</p>
    </div></div>}
    <Section title="设计与日常使用">
      <div className="article">
        <p className="lead">{p.description}</p>
        <h3>选配时重点核对</h3>
        <p>{p.tip}</p>
        <p>确认具体尺寸、面料、色号、模块与配件。照片中的陈列组合不表示所有物品均为标配；不同版本的规格分别核对。</p>
        <h3>制作与售后</h3>
        <p>{brand.leadTime}</p>
        <p>{brand.warranty}。免费质保与后续售后支持不同，不等于13年全部免费维修。</p>
        <div className="note">产品配置按具体型号确认，不将某款的海绵密度、绑带或材料检测结果推广至全系。</div>
        {p.source&&<p><a href={p.source} rel="noopener noreferrer" target="_blank">延伸阅读：{p.sourceLabel} ↗</a></p>}
        <Updated/>
      </div>
    </Section>
    <Related/>
  </>;
}
