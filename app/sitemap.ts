import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const pages = ["", "/projects", "/about", "/contact"].map((p) => ({ url: `${base}${p}`, priority: p === "" ? 1 : 0.8 }));
  const detail = projects.map((p) => ({ url: `${base}/projects/${p.slug}`, priority: 0.7 }));
  return [...pages, ...detail];
}
