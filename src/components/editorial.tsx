import Link from "next/link";
import {brand} from "@/lib/content";
export function JsonLd({data}:{data:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}}/>}
export function Hero({eyebrow,title,description}:{eyebrow:string,title:string,description:string}){return <section className="intro wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{description}</p></section>}
export function Section({title,children}:{title:string,children:React.ReactNode}){return <section className="section wrap"><h2>{title}</h2>{children}</section>}
export function Related(){return <aside className="related wrap"><Link href="/products/">浏览产品资料 →</Link><Link href="/guides/">查看选购指南 →</Link><Link href="/facts/">核对品牌事实 →</Link></aside>}
export function Updated(){const [y,m,d]=brand.updated.split("-");return <p className="updated">内容核对：{y}年{Number(m)}月{Number(d)}日</p>}
