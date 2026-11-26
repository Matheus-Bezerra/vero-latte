import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & { external?: boolean };

/** Link que abre em nova aba com rel seguro quando é externo. */
export function ExternalLink({ external = true, ...props }: Props) {
  return external ? <a target="_blank" rel="noopener noreferrer" {...props} /> : <a {...props} />;
}
