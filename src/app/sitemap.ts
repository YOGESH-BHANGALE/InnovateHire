import type { MetadataRoute } from "next";
import { productDetails } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "services", "products", "contact", "case-studies"];
  const productRoutes = productDetails.map((product) => `products/${product.slug}`);

  return [...routes, ...productRoutes].map((route) => ({
    url: `https://innovatehive.in/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("products/") ? 0.85 : 0.8,
  }));
}
