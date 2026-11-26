import type { ReactNode } from "react";

type Variant = "choc" | "line" | "gold";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Ícone de picolé que inclina no hover. */
  stick?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

/** Botão em pílula (link). Altura mínima de 48 px. */
export function Button({
  href,
  children,
  variant = "choc",
  stick = false,
  external = false,
  className = "",
  onClick,
}: Props) {
  return (
    <a
      className={`btn btn-${variant} ${className}`.trim()}
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {stick && <span className="stick" aria-hidden="true" />}
      {children}
    </a>
  );
}
