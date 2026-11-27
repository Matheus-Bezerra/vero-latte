import Image from "next/image";
import Link from "next/link";
import { logo } from "@/data/images";
import { policyLabels } from "@/data/policies";
import { navLabels } from "@/data/site";

/** Topo das páginas internas: a mesma pílula do menu da home, só com "Voltar ao início". */
export function PageTop() {
  return (
    <header className="page-top">
      <div className="page-pill">
        <Link className="nav-logo" href={policyLabels.backHref} aria-label={navLabels.logoHome}>
          <Image src={logo} alt="" width={46} height={47} sizes="46px" />
          <span>{navLabels.brand}</span>
        </Link>
        <Link className="page-back" href={policyLabels.backHref}>
          <span aria-hidden="true">←</span> {policyLabels.back}
        </Link>
      </div>
    </header>
  );
}
