import { gallery, ingredients } from "@/data/ingredients";
import { IngredientsGallery } from "./IngredientsGallery";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";

export function Ingredients() {
  return (
    <section className="sec ingr" id="experiencia" aria-labelledby="ingr-t">
      <div className="ingr-track" style={{ "--n": gallery.length } as React.CSSProperties}>
        <div className="ingr-stage">
          <div className="wrap ingr-grid">
            <div className="ingr-text">
              <Reveal>
                <Kicker>{ingredients.kicker}</Kicker>
                <h2 id="ingr-t">{ingredients.title}</h2>
                <p>{ingredients.text}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <dl className="ingr-list">
                  {ingredients.list.map((item) => (
                    <div key={item.term}>
                      <dt>{item.term}</dt>
                      <dd>{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <IngredientsGallery
              items={gallery}
              label={ingredients.galleryLabel}
              controls={ingredients.controls}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
