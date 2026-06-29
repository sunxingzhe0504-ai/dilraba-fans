import { getSiteMeta } from "@content/index";
import { ContactPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("contact");

export const dynamic = "force-static";

export default function ContactPage() {
  const { feedbackUrl } = getSiteMeta();
  return <ContactPageDesign feedbackUrl={feedbackUrl} />;
}
