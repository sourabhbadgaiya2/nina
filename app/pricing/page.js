import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

import JsonLd from "@/components/JsonLd";
import { PLANS, FAQ } from "@/lib/pricing";

const description =
  "Plans for deploying NINA, AgenQ's AI product assistant. Priced per assistant, not per user. Starter, Growth, and Enterprise.";

export const metadata = {
  title: "Pricing - AgenQ",
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "/pricing",
    title: "Pricing - AgenQ",
    description,
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";
const pricingUrl = `${siteUrl}/pricing/`;
const amount = (p) => p.replace(/[^0-9.]/g, "");

const offers = PLANS.filter((p) => p.price.monthly.startsWith("$")).flatMap(
  (p) => [
    {
      "@type": "Offer",
      name: `${p.name} (billed monthly)`,
      price: amount(p.price.monthly),
      priceCurrency: "USD",
      url: pricingUrl,
      description: `${p.tagline}. Price per month.`,
    },
    {
      "@type": "Offer",
      name: `${p.name} (billed annually)`,
      price: amount(p.price.annual),
      priceCurrency: "USD",
      url: pricingUrl,
      description: `${p.tagline}. Price per month, billed annually.`,
    },
  ],
);

const pricingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NINA by AgenQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    publisher: { "@type": "Organization", name: "AgenQ", url: siteUrl },
    offers,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={pricingSchema} />
      <Nav />
      <Pricing />
      <Footer />
    </>
  );
}
