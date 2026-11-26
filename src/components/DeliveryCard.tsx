import { delivery } from "@/data/contacts";
import { ExternalLink } from "./ui/ExternalLink";

export function DeliveryCard() {
  return (
    <aside className="delivery pattern" id="delivery" aria-labelledby="dlv-t">
      <div className="inner">
        <h3 id="dlv-t">{delivery.title}</h3>
        <p>{delivery.text}</p>
        <div className="apps">
          {delivery.apps.map((app) => (
            <ExternalLink key={app.name} href={app.href}>
              {app.name} <small>{app.units}</small>
            </ExternalLink>
          ))}
        </div>
        {/* TODO: remover quando os links diretos de delivery forem confirmados. */}
        <p className="pending">
          <span className="prov" title={delivery.pending.title}>
            {delivery.pending.text}
          </span>
        </p>
      </div>
    </aside>
  );
}
