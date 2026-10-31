import type {Metadata} from "next";
import Link from "next/link";
import {JsonLd} from "@/components/editorial";
import {SITE,brand} from "@/lib/content";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(SITE),title:{default:"灰糖家居｜好家具，不溢价",template:"%s｜灰糖家居"},description:"灰糖家居成品家具与软装设计。了解产品、材料工艺、选购指南与成都展厅。",robots:{index:true,follow:true},openGraph:{siteName:"灰糖家居",locale:"zh_CN",type:"website"}};
const nav=[["产品","/products/"],["工艺与材料","/craftsmanship/"],["选购指南","/guides/"],["展厅","/showroom/"],["品牌事实","/facts/"],["常见问题","/faq/"]];
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body><a className="skip" href="#main">跳转正文</a><JsonLd data={{"@context":"https://schema.org","@type":"Organization","@id":SITE+"/#organization",name:brand.name,url:SITE,slogan:brand.slogan,description:brand.positioning}}/><header className="site-header"><div className="wrap header-row"><Link href="/" className="wordmark">灰糖家居<small>GREY SUGAR HOME</small></Link><nav className="nav" aria-label="主导航">{nav.map(([n,p])=><Link href={p} key={p}>{n}</Link>)}</nav></div></header><main id="main">{children}</main><footer className="site-footer"><div className="wrap footer-row"><div><h2>好家具，不溢价。</h2><p>成品家具与软装设计 · 成都</p></div><div><p><Link href="/about/">关于灰糖</Link> · <Link href="/safety/">材料检测资料</Link> · <Link href="/search/">站内查找</Link></p><p>© 2026 灰糖家居 · <Link href="/facts/">品牌信息</Link></p></div></div></footer></body></html>}
