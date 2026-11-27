import Image from "next/image";
import { events } from "@/data/events";
import { EventSteps } from "./EventSteps";
import { Button } from "./ui/Button";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

export function Events() {
  const [a, b] = events.photos;
  return (
    <section className="sec events on-dark" id="eventos" aria-labelledby="ev-t">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <Kicker>{events.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="ev-t">{events.title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>{events.intro}</p>
          </Reveal>
        </div>
        <div className="ev-grid">
          <div className="ev-photos">
            {a && (
              <Reveal className="ph a" kind="arch">
                <Image src={a.src} alt={a.alt} sizes="(max-width: 860px) 56vw, 380px" />
              </Reveal>
            )}
            {b && (
              <Reveal className="ph b" kind="arch" delay={0.25}>
                <Image src={b.src} alt={b.alt} sizes="(max-width: 860px) 38vw, 260px" />
              </Reveal>
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
