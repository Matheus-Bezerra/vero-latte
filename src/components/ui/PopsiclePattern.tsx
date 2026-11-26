type Props = { className?: string; strip?: boolean };

/** Faixa decorativa com o padrão de picolés (public/pattern-picoles.svg). */
export function PopsiclePattern({ className = "", strip = false }: Props) {
  return (
    <div
      className={`pattern ${strip ? "pattern-strip" : ""} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
