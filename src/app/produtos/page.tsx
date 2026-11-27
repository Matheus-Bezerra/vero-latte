import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogBrowser } from "@/components/CatalogBrowser";
import { Kicker } from "@/components/ui/Kicker";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PageTop } from "@/components/ui/PageTop";
import { catalogPage, isCatalogCategory } from "@/data/catalog";

export const metadata: Metadata = {
  title: catalogPage.metaTitle,
  description: catalogPage.metaDescription,
};

type Props = { searchParams: Promise<{ categoria?: string | string[] }> };

/**
 * O filtro de ?categoria= é aplicado no servidor: o HTML já chega só com os produtos da
 * categoria, sem baixar as fotos das outras. Topo e título ficam no shell estático.
 */
async function Catalog({ searchParams }: Props) {
  const { categoria } = await searchParams;
  const initial = isCatalogCategory(categoria) ? categoria : "todos";
  // key: indo de uma categoria para outra pela mesma rota, o filtro recomeça do novo valor
  return <CatalogBrowser key={initial} initial={initial} />;
}

export default function Page({ searchParams }: Props) {
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
          {/* espaço reservado enquanto a grade chega no mesmo stream, sem fotos erradas */}
          <Suspense fallback={<div className="cat-pending" aria-hidden="true" />}>
            <Catalog searchParams={searchParams} />
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
