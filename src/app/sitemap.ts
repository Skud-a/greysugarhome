import type {MetadataRoute} from "next";
import {brand, products, guides, SITE} from "@/lib/content";

// lastModified 取自 src/data/content.json 的 brand.updated，由内容维护者手动推进。
// 不要用 new Date()，也不要写死日期：前者会让全站永远显示"今天更新"，后者会永久失真。
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(brand.updated);
  const paths = [
    "/",
    "/products/",
    "/guides/",
    "/compare/",
    "/facts/",
    "/about/",
    "/brand/",
    "/showroom/",
    "/craftsmanship/",
    "/safety/",
    "/supply-chain/",
    "/design-service/",
    "/faq/",
  ];
  return [
    ...paths,
    ...products.map((p) => "/products/" + p.slug + "/"),
    ...guides.map((g) => "/guides/" + g.slug + "/"),
  ].map((p) => ({url: SITE + p, lastModified: updated}));
}
