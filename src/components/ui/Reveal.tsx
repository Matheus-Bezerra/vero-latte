"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: ReactNode;
  className?: string;
  /** "up" sobe com fade; "arch" revela por clip-path (fotos). */
  kind?: "up" | "arch";
  /** Atraso em segundos, para escalonar irmãos. */
  delay?: number;
};

/** Revela o conteúdo ao entrar na tela. Só o wrapper é client; os filhos seguem server. */
export function Reveal({ children, className, kind = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      data-rv-kind={kind}
      style={{ "--d": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
