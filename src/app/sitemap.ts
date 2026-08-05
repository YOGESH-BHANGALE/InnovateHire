import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "services", "products", "contact", "case-studies"];
  return routes.map((route) => ({ url: `https://innovatehive.in/${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
