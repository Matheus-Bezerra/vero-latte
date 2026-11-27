/** Máscara de celular brasileiro: (11) 91234-5678. Aceita colar com +55 ou 0 na frente. */
export function formatBrMobile(raw: string): string {
  let d = raw.replace(/\D/g, "");
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2);
  d = d.slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Celular completo: DDD + 9 dígitos começando em 9. */
export function isBrMobile(value: string): boolean {
  return /^\d{2}9\d{8}$/.test(value.replace(/\D/g, ""));
}
