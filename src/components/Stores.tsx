import { stores, storesSection } from "@/data/stores";
import { DeliveryCard } from "./DeliveryCard";
import { StoreCard } from "./StoreCard";
import { Kicker } from "./ui/Kicker";

export function Stores() {
  return (
    <section className="sec" id="lojas" aria-labelledby="lojas-t">
      <div className="wrap">
        <div className="sec-head">
          <Kicker>{storesSection.kicker}</Kicker>
          <h2 id="lojas-t">{storesSection.title}</h2>
        </div>
        <div className="stores-grid">
          {stores.map((s) => (
            <StoreCard key={s.id} store={s} />
          ))}
          <DeliveryCard />
        </div>
      </div>
    </section>
  );
}
