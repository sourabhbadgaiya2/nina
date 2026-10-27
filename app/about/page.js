import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import About from "@/components/about/About";
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
      "description": "AgenQ is AI training and onboarding software for insurance agencies and brokerages. Staff ask how to do a task and AgenQ shows each step on their screen inside EZLynx or AMS360. In Execution Mode, AgenQ can complete approved tasks, with a person approving the important steps.",
      "founder": {
        "@type": "Person",
        "name": "Varun Mishra",
        "jobTitle": "Founder and CEO"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressCountry": "CA"
      },
      "sameAs": [
        "https://www.linkedin.com/company/agenq/",
        "https://www.youtube.com/@AIProductAssistant",
        "https://x.com/agenQ_AI"
      ]
    },
    {
      "@type": "WebPage",
      "url": "https://agenq.com/about/",
      "name": "About AgenQ | AI Training and Onboarding for Insurance Software",
      "description": "AgenQ builds AI training and onboarding inside insurance software. Founded by Varun Mishra, based in Toronto and Montreal.",
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
          "name": "About AgenQ",
          "item": "https://agenq.com/about/"
        }
      ]
    }
  ]
};

// URLs are relative: layout.js sets metadataBase. trailingSlash is on, so the canonical keeps the slash.
export const metadata = {
  title: "About AgenQ | AI Training and Onboarding for Insurance Software",
  description:
    "AgenQ builds AI training and onboarding inside insurance software. Founded by Varun Mishra, based in Toronto and Montreal.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/about/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "About AgenQ | AI Training and Onboarding for Insurance Software",
    description:
      "AgenQ builds AI training and onboarding inside insurance software. Founded by Varun Mishra, based in Toronto and Montreal.",
    url: "/about/",
    images: [{ url: "/assets/share/home.png", width: 1200, height: 630, alt: "About AgenQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AgenQ | AI Training and Onboarding for Insurance Software",
    description:
      "AgenQ builds AI training and onboarding inside insurance software. Founded by Varun Mishra, based in Toronto and Montreal.",
    images: ["/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <JsonLd data={jsonLd} />
      <About />
      <Footer />
    </>
  );
}
