import type { Metadata, Viewport } from "next";
import { Cinzel, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

// TODO: definir o domínio final em NEXT_PUBLIC_SITE_URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  // TODO: remover o noindex quando o projeto deixar de ser protótipo.
  robots: { index: false, follow: false },
  openGraph: {
    title: site.title,
    description: site.description,
    locale: site.locale,
    type: "website",
    images: [{ url: "/img/logo.png", width: 338, height: 348, alt: site.logoAlt }],
  },
};

export const viewport: Viewport = {
  themeColor: "#3b2618",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${nunito.variable}`}
    >
      <body>
        <a className="skip" href="#conteudo">
          {site.skipLink}
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
