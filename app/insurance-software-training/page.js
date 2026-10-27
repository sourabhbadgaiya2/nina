import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import InsuranceSoftwareTraining from "@/components/insurance-software-training/InsuranceSoftwareTraining";
import "@/app/aq-pages.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://agenq.com/#organization",
      name: "AgenQ",
      url: "https://agenq.com/",
      logo: "https://agenq.com/assets/agenq-logo.webp",
      description:
        "AgenQ is AI training and onboarding software for insurance agencies and brokerages. Staff ask how to do a task and AgenQ shows each step on their screen inside EZLynx or AMS360. In Execution Mode, AgenQ can complete approved tasks, with a person approving the important steps.",
      founder: {
        "@type": "Person",
        name: "Varun Mishra",
        jobTitle: "Founder and CEO",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressCountry: "CA",
      },
      sameAs: [
        "https://www.linkedin.com/company/agenq/",
        "https://www.youtube.com/@AIProductAssistant",
        "https://x.com/agenQ_AI",
      ],
    },
    {
      "@type": "WebPage",
      url: "https://agenq.com/insurance-software-training/",
      name: "Insurance Software Training Options Compared (2026) | AgenQ",
      description:
        "Compare six ways to train staff on insurance software like EZLynx and AMS360: vendor training, consultants, guides and videos, learning platforms, general AI tools and in app AI training.",
      publisher: {
        "@id": "https://agenq.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best way to train employees on insurance software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Combine methods: vendor training for basics, plus help during real tasks. People remember steps better when they learn them while doing the work.",
          },
        },
        {
          "@type": "Question",
          name: "What training does EZLynx offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZLynx offers self guided training, interactive webinars, Customer Success Workshops and weekly office hours. One on one training is available for purchase.",
          },
        },
        {
          "@type": "Question",
          name: "What training is available for AMS360?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vertafore University, NetVU courses, consultants such as Kite Technology Group, Vertafore Velocity Coach Agent and AgenQ for AMS360.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an AI tool that trains employees inside insurance software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AgenQ shows each step on screen inside EZLynx and AMS360. Vertafore Velocity Coach Agent answers AMS360 how to questions.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between an AI chatbot and in app AI training?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A chatbot gives you text to read. In app AI training shows the next step on your screen, during the task.",
          },
        },
        {
          "@type": "Question",
          name: "Can we use more than one option?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most agencies do.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agenq.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: "https://agenq.com/#resources",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Insurance Software Training Options Compared",
          item: "https://agenq.com/insurance-software-training/",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Insurance Software Training Options Compared",
      author: {
        "@type": "Person",
        name: "Varun Mishra",
        jobTitle: "Founder and CEO",
        worksFor: {
          "@id": "https://agenq.com/#organization",
        },
        sameAs: ["https://www.linkedin.com/in/mishravarun/"],
        url: "https://www.linkedin.com/in/mishravarun/",
      },
      publisher: {
        "@id": "https://agenq.com/#organization",
      },
      image: "https://agenq.com/assets/share/compare.png",
      mainEntityOfPage: "https://agenq.com/insurance-software-training/",
      description:
        "Compare six ways to train staff on insurance software like EZLynx and AMS360: vendor training, consultants, guides and videos, learning platforms, general AI tools and in app AI training.",
      datePublished: "2026-10-25",
      dateModified: "2026-10-25",
    },
  ],
};

// URLs are relative: layout.js sets metadataBase. trailingSlash is on, so the canonical keeps the slash.
export const metadata = {
  title: "Insurance Software Training Options Compared (2026) | AgenQ",
  description:
    "Compare six ways to train staff on insurance software like EZLynx and AMS360: vendor training, consultants, guides and videos, learning platforms, general AI tools and in app AI training.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/insurance-software-training/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "Insurance Software Training Options Compared (2026) | AgenQ",
    description:
      "Compare six ways to train staff on insurance software like EZLynx and AMS360: vendor training, consultants, guides and videos, learning platforms, general AI tools and in app AI training.",
    url: "/insurance-software-training/",
    images: [
      {
        url: "/assets/share/compare.png",
        width: 1200,
        height: 630,
        alt: "Insurance Software Training Options Compared",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Software Training Options Compared (2026) | AgenQ",
    description:
      "Compare six ways to train staff on insurance software like EZLynx and AMS360: vendor training, consultants, guides and videos, learning platforms, general AI tools and in app AI training.",
    images: ["/assets/share/compare.png"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <JsonLd data={jsonLd} />
      <InsuranceSoftwareTraining />
      <Footer />
    </>
  );
}
