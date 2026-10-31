import type { Metadata } from "next";
import content from "@/data/content.json";
export const {brand,products,guides,faqs}=content;
export const SITE="https://www.greysugarhome.com";
export function meta(title:string,description:string,path:string):Metadata{return {title,description,alternates:{canonical:SITE+path},openGraph:{title,description,url:SITE+path}};}
