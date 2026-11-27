import Image from "next/image";
import { story } from "@/data/story";
import { StoryReveal } from "./StoryReveal";
import { Kicker } from "./ui/Kicker";

export function FounderStory() {
  return (
    <section className="sec story" id="sobre" aria-labelledby="story-t">
      <StoryReveal>
        <figure className="story-photo">
          <div className="ph">
            <Image
              src={story.photo.src}
              alt={story.photo.alt}
              sizes="(max-width: 860px) 420px, 500px"
            />
          </div>
          <figcaption>
            <span className="story-cap-name">{story.person.name}</span>
            <span className="story-cap-role">{story.person.role}</span>
          </figcaption>
        </figure>
        <div className="story-text">
          <Kicker>{story.kicker}</Kicker>
          <h2 id="story-t">{story.title}</h2>
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <blockquote>{story.quote}</blockquote>
          <ul className="facts">
            {story.facts.map((f, i) => (
              <li key={f} style={{ "--i": i } as React.CSSProperties}>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </StoryReveal>
    </section>
  );
}
