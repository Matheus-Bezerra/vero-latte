import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { deliveriesPage } from "@/data/policies";

export const metadata: Metadata = {
  title: deliveriesPage.metaTitle,
  description: deliveriesPage.metaDescription,
};

export default function Page() {
  return <PolicyPage page={deliveriesPage} />;
}
