import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import InAppAiTraining from "@/components/in-app-ai-training/InAppAiTraining";
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
      "url": "https://agenq.com/resources/in-app-ai-training/",
      "name": "What Is In App AI Training? | AgenQ",
      "description": "In app AI training shows staff the next step inside the software they use. Compare courses, videos, learning platforms and chat tools for insurance teams.",
      "publisher": {
        "@id": "https://agenq.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is in app AI training the same as a chatbot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In app AI training shows software steps on the application screen during a task. Chat tools can explain steps and may support images, shared screens or actions, depending on the tool and permissions."
          }
        },
        {
          "@type": "Question",
          "name": "Does in app AI training replace vendor training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In app AI training can work alongside vendor training. Courses can establish the basics while on screen help supports real work."
          }
        },
        {
          "@type": "Question",
          "name": "Can in app AI training follow our own procedures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The answer depends on the tool. AgenQ uses your approved procedures and training material."
          }
        }
      ]
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
          "name": "Resources",
          "item": "https://agenq.com/#resources"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Is In App AI Training?",
          "item": "https://agenq.com/resources/in-app-ai-training/"
        }
      ]
    }
  ]
};

// URLs are relative: layout.js sets metadataBase. trailingSlash is on, so the canonical keeps the slash.
export const metadata = {
  title: "What Is In App AI Training? | AgenQ",
  description:
    "In app AI training shows staff the next step inside the software they use. Compare courses, videos, learning platforms and chat tools for insurance teams.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/resources/in-app-ai-training/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "What Is In App AI Training? | AgenQ",
    description:
      "In app AI training shows staff the next step inside the software they use. Compare courses, videos, learning platforms and chat tools for insurance teams.",
    url: "/resources/in-app-ai-training/",
    images: [{ url: "/assets/share/home.png", width: 1200, height: 630, alt: "What Is In App AI Training?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is In App AI Training? | AgenQ",
    description:
      "In app AI training shows staff the next step inside the software they use. Compare courses, videos, learning platforms and chat tools for insurance teams.",
    images: ["/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <JsonLd data={jsonLd} />
      <InAppAiTraining />
      <Footer />
    </>
  );
}
