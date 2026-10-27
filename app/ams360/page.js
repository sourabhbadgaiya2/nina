import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Ams360 from "@/components/ams360/Ams360";
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
      "url": "https://agenq.com/ams360/",
      "name": "Vertafore AMS360 Training and Onboarding for Agency Staff | AgenQ",
      "description": "AI training and onboarding inside Vertafore AMS360, including the new interface. New and experienced staff ask \"How do I…?\" and see the steps on their screen.",
      "publisher": {
        "@id": "https://agenq.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can AgenQ help onboard new employees on AMS360?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New hires learn AMS360 by doing real client work from the start, with the steps shown on their screen instead of weeks of shadowing."
          }
        },
        {
          "@type": "Question",
          "name": "Can AgenQ train experienced staff too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Experienced staff get help with tasks they rarely do, without asking a colleague."
          }
        },
        {
          "@type": "Question",
          "name": "Does AgenQ work with the new AMS360 interface?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AgenQ is configured around the AMS360 screens your agency uses. Ask the AgenQ team to confirm support for your specific AgencyOne screens before setup."
          }
        },
        {
          "@type": "Question",
          "name": "How is AgenQ different from Vertafore University or NetVU courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Courses teach before or away from the task. AgenQ helps during the task, on the AMS360 screen."
          }
        },
        {
          "@type": "Question",
          "name": "Is AgenQ affiliated with Vertafore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. AgenQ is independent."
          }
        }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "AgenQ for AMS360",
      "url": "https://agenq.com/ams360/",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "AgenQ for AMS360 is AI training and onboarding software that works inside Vertafore AMS360, including the AgencyOne Experience. Insurance agency staff ask how to do a task and see each step on their AMS360 screen."
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
          "name": "AgenQ for Insurance",
          "item": "https://agenq.com/solutions/insurance/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Your Staff Know the Client. AgenQ Knows AMS360.",
          "item": "https://agenq.com/ams360/"
        }
      ]
    }
  ]
};

// URLs are relative: layout.js sets metadataBase. trailingSlash is on, so the canonical keeps the slash.
export const metadata = {
  title: "Vertafore AMS360 Training and Onboarding for Agency Staff | AgenQ",
  description:
    "AI training and onboarding inside Vertafore AMS360, including the new interface. New and experienced staff ask \"How do I…?\" and see the steps on their screen.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ams360/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "Vertafore AMS360 Training and Onboarding for Agency Staff | AgenQ",
    description:
      "AI training and onboarding inside Vertafore AMS360, including the new interface. New and experienced staff ask \"How do I…?\" and see the steps on their screen.",
    url: "/ams360/",
    images: [{ url: "/assets/share/ams360.png", width: 1200, height: 630, alt: "Your Staff Know the Client. AgenQ Knows AMS360." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertafore AMS360 Training and Onboarding for Agency Staff | AgenQ",
    description:
      "AI training and onboarding inside Vertafore AMS360, including the new interface. New and experienced staff ask \"How do I…?\" and see the steps on their screen.",
    images: ["/assets/share/ams360.png"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <JsonLd data={jsonLd} />
      <Ams360 />
      <Footer />
    </>
  );
}
