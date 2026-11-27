import { delivery } from "@/data/contacts";
import { DeliveryApps } from "./DeliveryModal";

export function DeliveryCard() {
  return (
    <aside className="delivery pattern" id="delivery" aria-labelledby="dlv-t">
      <div className="inner">
        <h3 id="dlv-t">{delivery.title}</h3>
        <p>{delivery.text}</p>
        <DeliveryApps apps={delivery.apps} />
      </div>
    </aside>
  );
}
