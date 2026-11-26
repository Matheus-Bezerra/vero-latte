import { notice } from "@/data/site";
import { ExternalLink } from "./ui/ExternalLink";

export function Notice() {
  return (
    <div className="notice" id="notice">
      {notice.text} <ExternalLink href={notice.link.href}>{notice.link.label}</ExternalLink>
    </div>
  );
}
