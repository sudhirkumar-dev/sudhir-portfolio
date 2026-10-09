import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "./globals.css";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.title}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.title}`,
    description: site.description,
    url: site.url,
    locale: "en_IN",
  },
  twitter: { card: "summary", title: `${site.name} | ${site.title}`, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-ink font-sans text-base leading-relaxed antialiased selection:bg-accent/30 selection:text-white">
        <ScrollProgressBar />
        <noscript><style>{".reveal{opacity:1!important;transform:none!important}"}</style></noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-black font-medium">Skip to content</a>
        <Header />
        <main id="main" className="mx-auto max-w-5xl px-6">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
