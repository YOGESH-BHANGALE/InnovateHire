import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/sections/products/ProductDetailSections";
import { getProductDetail, productDetails, type ProductSlug } from "@/lib/site-data";

export function generateStaticParams(): Array<{ slug: ProductSlug }> {
  return productDetails.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const detail = getProductDetail(params.slug);
  if (!detail) return { title: "Product" };

  return {
    title: detail.name,
    description: detail.description,
    openGraph: {
      title: `${detail.name} — InnovateHive`,
      description: detail.description,
      images: detail.image ? [{ url: detail.image, alt: detail.hero.imageAlt }] : undefined,
    },
  };
}

export default function ProductDetailRoute({ params }: { params: { slug: string } }) {
  const detail = getProductDetail(params.slug);
  if (!detail) notFound();
  return <ProductDetailPage detail={detail} />;
}
