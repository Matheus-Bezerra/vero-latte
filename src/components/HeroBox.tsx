"use client";

import Image, { getImageProps } from "next/image";
import { useRef } from "react";
import { hero } from "@/data/hero";
import { logo } from "@/data/images";
import { site } from "@/data/site";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "./ui/Button";
import { PopsiclePattern } from "./ui/PopsiclePattern";

/** Abertura: a tampa da caixa se abre com a rolagem (--p de 0 a 1). */
export function HeroBox() {
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();

  useScrollProgress(({ vh }) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = reduce ? 0 : clamp((-r.top / (el.offsetHeight - vh)) * 1.25);
    el.style.setProperty("--p", p.toFixed(4));
  });

  const common = { fill: true, sizes: "100vw", quality: 90, preload: true, fetchPriority: "high" as const };
  const { props: landscape } = getImageProps({ ...common, src: hero.photo.src, alt: hero.photo.alt });
  const { props: portrait } = getImageProps({ ...common, src: hero.photoPortrait.src, alt: hero.photoPortrait.alt });

  const [primary, secondary] = hero.ctas;

  return (
    <section className="hero" id="inicio" aria-label={hero.sectionLabel} ref={ref}>
      <div className="hero-stage">
        <div className="hero-photo">
          <picture>
            <source media="(max-aspect-ratio: 4/5)" srcSet={portrait.srcSet} sizes="100vw" />
            {/* eslint-disable-next-line jsx-a11y/alt-text -- alt vem de hero.photo.alt */}
            <img {...landscape} />
          </picture>
        </div>

        <div className="hero-reveal on-dark">
          <div className="wrap">
            <h2>{hero.revealTitle}</h2>
            <p>{hero.revealText}</p>
          </div>
        </div>

        <PopsiclePattern className="lid lid-l" />
        <PopsiclePattern className="lid lid-r" />

        <div className="label">
          <Image
            className="logo"
            src={logo}
            alt={site.logoAlt}
            sizes="(max-width: 640px) 150px, 240px"
            loading="eager"
          />
          <h1>{hero.title}</h1>
          <div className="ctas">
            {primary && (
              <Button href={primary.href} stick>
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button href={secondary.href} variant="line">
                {secondary.label}
              </Button>
            )}
          </div>
          <div className="scroll-hint" aria-hidden="true">
            {hero.scrollHint}
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
