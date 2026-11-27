import { stores, storesSection } from "@/data/stores";
import { DeliveryCard } from "./DeliveryCard";
import { StoreCard } from "./StoreCard";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

export function Stores() {
  return (
    <section className="sec" id="lojas" aria-labelledby="lojas-t">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <Kicker>{storesSection.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="lojas-t">{storesSection.title}</h2>
          </Reveal>
        </div>
        <div className="stores-grid">
          {stores.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12}>
              <StoreCard store={s} />
            </Reveal>
          ))}
          <Reveal delay={stores.length * 0.12}>
            <DeliveryCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
