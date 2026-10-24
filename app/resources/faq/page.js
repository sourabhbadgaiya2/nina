import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqPage from "@/components/FaqPage";
import JsonLd from "@/components/JsonLd";
import { FAQ_GROUPS } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ - AgenQ",
  description:
    "What NINA is, how it differs from a copilot or a digital adoption platform, what it is allowed to do inside your product, and what it costs.",
  path: "/resources/faq",
});

// FAQ answers contain [text](/path) links; schema needs plain text.
const plain = (t) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: (Array.isArray(item.a) ? item.a : [item.a]).map(plain).join(" "),
    },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Nav />
      <FaqPage />
      <Footer />
    </>
  );
}
