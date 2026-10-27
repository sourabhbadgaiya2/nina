import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Press from "@/components/press/Press";
import "@/app/aq-pages.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://agenq.com/#organization",
      "name": "AgenQ",
      "url": "https://agenq.com/",
      "logo": "https://agenq.com/assets/agenq-logo.webp",
      "description": "AgenQ is AI training and onboarding software for insurance teams. It shows users each step on their screen and can complete approved tasks. Supported software: EZLynx and Vertafore AMS360. Backed by NEXT Canada (NEXT AI), MaRS, MARL and NEC X.",
      "founder": {
        "@type": "Person",
        "name": "Varun Mishra",
        "jobTitle": "Founder and CEO"
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressCountry": "CA"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Montreal",
          "addressCountry": "CA"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/agenq/",
        "https://www.youtube.com/@AIProductAssistant",
        "https://x.com/agenQ_AI"
      ],
      "email": "founder@agenq.com",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "Canada"
        }
      ]
    },
    {
      "@type": "WebPage",
      "url": "https://agenq.com/press/",
      "name": "AgenQ Press Kit | Company Facts and Logo",
      "description": "AgenQ company facts, one line description, founder bio and logo for press, partners and directories.",
      "publisher": {
        "@id": "https://agenq.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://agenq.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AgenQ Press Kit",
          "item": "https://agenq.com/press/"
        }
      ]
    }
  ]
};

// URLs are relative: layout.js sets metadataBase. trailingSlash is on, so the canonical keeps the slash.
export const metadata = {
  title: "AgenQ Press Kit | Company Facts and Logo",
  description:
    "AgenQ company facts, one line description, founder bio and logo for press, partners and directories.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/press/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "AgenQ Press Kit | Company Facts and Logo",
    description:
      "AgenQ company facts, one line description, founder bio and logo for press, partners and directories.",
    url: "/press/",
    images: [{ url: "/assets/share/home.png", width: 1200, height: 630, alt: "AgenQ Press Kit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenQ Press Kit | Company Facts and Logo",
    description:
      "AgenQ company facts, one line description, founder bio and logo for press, partners and directories.",
    images: ["/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <JsonLd data={jsonLd} />
      <Press />
      <Footer />
    </>
  );
}
