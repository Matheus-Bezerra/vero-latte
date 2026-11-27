import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogBrowser, CatalogFromUrl } from "@/components/CatalogBrowser";
import { Kicker } from "@/components/ui/Kicker";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PageTop } from "@/components/ui/PageTop";
import { catalogPage } from "@/data/catalog";

export const metadata: Metadata = {
  title: catalogPage.metaTitle,
  description: catalogPage.metaDescription,
};

export default function Page() {
  return (
    <>
      <PageTop />
      <main id="conteudo" tabIndex={-1} className="policy catalog">
        <div className="wrap">
          <div className="cat-head">
            <Kicker>{catalogPage.kicker}</Kicker>
            <h1>{catalogPage.title}</h1>
            <p>{catalogPage.intro}</p>
          </div>
          <Suspense fallback={<CatalogBrowser />}>
            <CatalogFromUrl />
          </Suspense>
          <p className="cat-source">
            {catalogPage.source.intro}{" "}
            <ExternalLink href={catalogPage.source.link.href}>
              {catalogPage.source.link.label}
            </ExternalLink>
          </p>
        </div>
      </main>
    </>
  );
}
