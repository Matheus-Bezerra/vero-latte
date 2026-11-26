import Image from "next/image";
import { hours } from "@/data/contacts";
import { storesSection } from "@/data/stores";
import type { Store } from "@/data/types";
import { Button } from "./ui/Button";

/** Card de loja. O quadro 16:9 alinhado ao topo esconde a legenda gravada na foto. */
export function StoreCard({ store }: { store: Store }) {
  return (
    <article className="store">
      <div className="ph">
        <Image src={store.photo.src} alt={store.photo.alt} sizes="(max-width: 640px) 90vw, 420px" />
        <span className="tag">{store.tag}</span>
      </div>
      <h3>{store.name}</h3>
      <dl>
        <dt>{storesSection.labels.address}</dt>
        <dd>{store.address}</dd>
        <dt>{storesSection.labels.hours}</dt>
        <dd>
          {hours.map((h) => (
            <span key={h} className="block">
              {h}
            </span>
          ))}
        </dd>
        <dt>{store.phone.label}</dt>
        <dd>
          {store.phone.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </dd>
      </dl>
      <div className="links">
        {store.actions.map((a) => (
          <Button key={a.label} href={a.href} variant={a.variant} external={a.external}>
            {a.label}
          </Button>
        ))}
      </div>
    </article>
  );
}
