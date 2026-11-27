import Image from "next/image";
import { events } from "@/data/events";
import { EventSteps } from "./EventSteps";
import { Button } from "./ui/Button";
import { Kicker } from "./ui/Kicker";

export function Events() {
  const [a, b] = events.photos;
  return (
    <section className="sec events on-dark" id="eventos" aria-labelledby="ev-t">
      <div className="wrap">
        <div className="sec-head">
          <Kicker>{events.kicker}</Kicker>
          <h2 id="ev-t">{events.title}</h2>
          <p>{events.intro}</p>
        </div>
        <div className="ev-grid">
          <div className="ev-photos">
            {a && (
              <div className="ph a">
                <Image src={a.src} alt={a.alt} sizes="(max-width: 860px) 56vw, 380px" />
              </div>
            )}
            {b && (
              <div className="ph b">
                <Image src={b.src} alt={b.alt} sizes="(max-width: 860px) 38vw, 260px" />
              </div>
            )}
          </div>
          <div>
            <EventSteps steps={events.steps} />
            <div className="ev-cta">
              <Button href={events.primary.href} variant="gold">
                {events.primary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
