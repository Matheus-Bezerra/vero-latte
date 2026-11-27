import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { cookiesPage } from "@/data/policies";

export const metadata: Metadata = {
  title: cookiesPage.metaTitle,
  description: cookiesPage.metaDescription,
};

export default function Page() {
  return <PolicyPage page={cookiesPage} />;
}
