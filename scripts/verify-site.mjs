import assert from 'node:assert/strict';
const base=process.argv[2]||'http://127.0.0.1:3000';
const site='https://www.greysugarhome.com';
const xml=await (await fetch(base+'/sitemap.xml')).text();
const paths=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
assert.equal(paths.length,23);
const assets=new Set();let schemas=0;
for(const path of paths){
 const r=await fetch(base+path);assert.equal(r.status,200,path);const html=await r.text();
 assert(html.includes('rel="canonical" href="'+site+path+'"'),'canonical '+path);
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,'h1 '+path);
 assert(!/待 Skud|30个独立|30 个独立|ratingValue|telephone|高端定制家具/.test(html),'stale '+path);
 for(const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)){JSON.parse(m[1]);schemas++;}
 for(const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)"/g)){if(!m[1].startsWith('/_next/'))assets.add(m[1]);}
 if(path==='/faq/'){const clean=html.replace(/<script[\s\S]*?<\/script>/g,'');assert(clean.includes('3年质保＋10年售后支持'));assert(/无[需须]预约/.test(clean));}
}
for(const p of assets){const r=await fetch(base+p);assert.equal(r.status,200,'link '+p);}
const result=await(await fetch(base+'/search/?q='+encodeURIComponent('山屿'))).text();assert(result.includes('/products/shanyu/'));
const missing=await fetch(base+'/products/not-a-product/');assert.equal(missing.status,404);
console.log(JSON.stringify({pages:paths.length,linksAndImages:assets.size,validJsonLd:schemas,search:true,notFound:true}));

