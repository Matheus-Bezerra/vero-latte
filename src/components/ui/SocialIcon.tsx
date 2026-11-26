import type { SocialNetwork } from "@/data/types";

const paths: Record<SocialNetwork, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M14 8h3V4.5h-3a4 4 0 0 0-4 4V11H7v3.5h3V21h3.5v-6.5h3L17 11h-3.5V8.8c0-.5.3-.8.5-.8z" />
  ),
  pinterest: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M11 8.5c3-1 5 .8 4.6 3.3-.4 2.4-2.6 3.3-3.8 2.2M11.6 10.5 9.5 20" />
    </>
  ),
};

export function SocialIcon({ network }: { network: SocialNetwork }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      focusable="false"
    >
      {paths[network]}
    </svg>
  );
}
