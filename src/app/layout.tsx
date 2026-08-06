import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/providers/PageTransition";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovatehive.in"),
  title: {
    default: "InnovateHive — Digital systems with signal",
    template: "%s — InnovateHive",
  },
  description:
    "InnovateHive builds digital products, AI workflows, and growth systems for teams moving from idea to adoption.",
  applicationName: "InnovateHive",
  keywords: ["digital products", "AI services", "web development", "InnovateHive"],
  openGraph: {
    title: "InnovateHive — Digital systems with signal",
    description:
      "Websites, apps, AI services, and search foundations for teams moving from idea to adoption.",
    url: "https://innovatehive.in",
    siteName: "InnovateHive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovateHive — Digital systems with signal",
    description:
      "Websites, apps, AI services, and search foundations for teams moving from idea to adoption.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <AnimationProvider>
          <SmoothScrollProvider>
            <div className="grain-overlay min-h-screen overflow-x-hidden bg-white text-ink">
              <MagneticCursor />
              <SiteHeader />
              <PageTransition>{children}</PageTransition>
              <SiteFooter />
            </div>
          </SmoothScrollProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
