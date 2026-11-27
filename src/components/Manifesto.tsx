"use client";

import { useEffect, useRef } from "react";
import { manifesto } from "@/data/manifesto";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const stanzaCount = manifesto.stanzas.length;
/** Pausa extra (em batidas) no fecho, para a assinatura assentar antes de a seção subir. */
const HOLD = 0.6;
/** Batidas de rolagem: uma por estrofe, uma para o fecho e a pausa. Lido pelo CSS (--beats). */
const beats = stanzaCount + 1 + HOLD;
/** Atraso entre versos da mesma estrofe (fração da batida): cascata rápida. */
const CASCADE = 0.3;

/** Manifesto preenchido estrofe a estrofe (versos em cascata) conforme a rolagem. */
export function Manifesto() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const reduce = usePrefersReducedMotion();

  // Altura real do palco (--stage-h): o CSS usa para dimensionar o trilho e centralizar o sticky.
  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;
    const ro = new ResizeObserver(() => {
      track.style.setProperty("--stage-h", `${stage.offsetHeight}px`);
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  useScrollProgress(({ vh }) => {
    const track = trackRef.current;
    const text = textRef.current;
    const stage = stageRef.current;
    if (!track || !text || !stage) return;
    const cs = getComputedStyle(track);
    const stageH = stage.offsetHeight;
    // Espaço livre entre o menu e a barra de ações (as mesmas faixas do CSS).
    const free = vh - (parseFloat(cs.getPropertyValue("--safe-t")) || 0) - (parseFloat(cs.getPropertyValue("--safe-b")) || 0);
    // Se o palco não cabe (tela baixa, zoom de 200%), não prende: o manifesto rola
    // normalmente e cada estrofe acende pela própria posição na tela.
    // compara pelo conteúdo (não pelo palco, cujo respiro muda entre os modos) + respiro mínimo
    const inner = stage.firstElementChild as HTMLElement | null;
    const flow = (inner?.offsetHeight ?? stageH) + 32 > free;
    if ((track.dataset.flow === "1") !== flow) track.dataset.flow = flow ? "1" : "";
    const stanzas = Array.from(text.querySelectorAll<HTMLElement>(".stanza"));

    let progress: (k: number) => number;
    let lastP: number;
    if (flow) {
      const at = (el: Element) => clamp((vh * 0.85 - el.getBoundingClientRect().top) / (vh * 0.35));
      const ps = stanzas.map(at);
      progress = (k) => ps[k] ?? 0;
      lastP = at(text.querySelector(".last") ?? text);
      track.style.setProperty("--mp", "0");
    } else {
      // o palco trava no `top` do sticky (calculado no CSS); o progresso corre enquanto
      // ele está preso, ou seja, ao longo de (trilho - palco)
      const r = track.getBoundingClientRect();
      const pinTop = parseFloat(getComputedStyle(stage).top) || 0;
      const mp = clamp((pinTop - r.top) / (track.offsetHeight - stageH));
      track.style.setProperty("--mp", mp.toFixed(3));
      const v = mp * beats;
      progress = (k) => clamp(v - k);
      lastP = clamp(v - stanzaCount);
    }

    stanzas.forEach((stanza, k) => {
      // progresso da estrofe; dentro dela, os versos entram em cascata
      const sp = progress(k);
      stanza.querySelectorAll<HTMLElement>(".ln").forEach((l, j) => {
        const p = clamp(sp * (1 + CASCADE * 2) - j * CASCADE);
        l.style.setProperty("--p", reduce ? "1" : p.toFixed(3));
      });
    });
    const last = text.querySelector<HTMLElement>(".last");
    last?.style.setProperty("--p", reduce ? "1" : lastP.toFixed(3));
  });

  return (
    <section className="manifesto" id="manifesto" aria-labelledby="man-t">
      <div
        className="man-track"
        ref={trackRef}
        style={{ "--beats": beats } as React.CSSProperties}
      >
        <div className="man-stage" ref={stageRef}>
          <div className="man-inner">
            <h2 className="man-side" id="man-t">
              {manifesto.title}
            </h2>
            <p className="man-text" ref={textRef}>
              {manifesto.stanzas.map((stanza) => (
                <span className="stanza" key={stanza[0]}>
                  {stanza.map((line, i) => (
                    <span key={line}>
                      {i > 0 && " "}
                      <span className="ln" data-text={line}>
                        {line}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
              <span className="last" data-text={manifesto.closing}>
                {manifesto.closing}
              </span>
            </p>
          </div>
          <div className="man-progress" aria-hidden="true">
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
