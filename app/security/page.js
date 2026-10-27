import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Security from "@/components/security/Security";
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
      url: "https://agenq.com/security/",
      name: "Security and Control | AgenQ",
      description:
        "AgenQ only does what you allow. Permissions, task controls, approvals, audit logs and data control for insurance teams.",
      publisher: {
        "@id": "https://agenq.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What do staff need to install?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Staff add the AgenQ Google Chrome extension. Nothing is installed inside EZLynx or AMS360.",
          },
        },
        {
          "@type": "Question",
          name: "Can AgenQ see everything on our screen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AgenQ only sees the EZLynx or AMS360 window. It does not see other applications, tabs or anything else on your screen.",
          },
        },
        {
          "@type": "Question",
          name: "Where is our data stored, and for how long?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgenQ stores data in the United States and keeps it for 90 days.",
          },
        },
        {
          "@type": "Question",
          name: "Can AgenQ change our records without approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Training Mode, your employee makes every change. In Execution Mode, AgenQ completes only approved tasks, and you decide which steps need a person's approval.",
          },
        },
        {
          "@type": "Question",
          name: "Can we control who uses AgenQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, with permissions.",
          },
        },
        {
          "@type": "Question",
          name: "Can we see what AgenQ did?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Audit logs record every step and change.",
          },
        },
        {
          "@type": "Question",
          name: "Can AgenQ run in a private environment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, on the Enterprise plan.",
          },
        },
        {
          "@type": "Question",
          name: "Who do we contact about security?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email founder@agenq.com or book a meeting.",
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
          name: "You Stay in Control",
          item: "https://agenq.com/security/",
        },
      ],
    },
  ],
};

// URLs are relative: layout.js sets metadataBase. trailingSlash is on, so the canonical keeps the slash.
export const metadata = {
  title: "Security and Control | AgenQ",
  description:
    "AgenQ only does what you allow. Permissions, task controls, approvals, audit logs and data control for insurance teams.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/security/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "Security and Control | AgenQ",
    description:
      "AgenQ only does what you allow. Permissions, task controls, approvals, audit logs and data control for insurance teams.",
    url: "/security/",
    images: [
      {
        url: "/assets/share/home.png",
        width: 1200,
        height: 630,
        alt: "You Stay in Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security and Control | AgenQ",
    description:
      "AgenQ only does what you allow. Permissions, task controls, approvals, audit logs and data control for insurance teams.",
    images: ["/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <JsonLd data={jsonLd} />
      <Security />
      <Footer />
    </>
  );
}
