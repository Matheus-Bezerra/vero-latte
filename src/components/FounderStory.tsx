import Image from "next/image";
import { story } from "@/data/story";
import { Kicker } from "./ui/Kicker";

export function FounderStory() {
  return (
    <section className="sec story" id="sobre" aria-labelledby="story-t">
      <div className="wrap story-grid">
        <figure className="story-photo">
          <div className="ph">
            <Image
              src={story.photo.src}
              alt={story.photo.alt}
              sizes="(max-width: 860px) 420px, 500px"
            />
          </div>
          <figcaption>
            <b>{story.person.name}</b>
            {story.person.role}
          </figcaption>
        </figure>
        <div>
          <Kicker>{story.kicker}</Kicker>
          <h2 id="story-t">{story.title}</h2>
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <blockquote>{story.quote}</blockquote>
          <ul className="facts">
            {story.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
