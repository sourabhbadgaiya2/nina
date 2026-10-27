import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "@/app/aq-pages.css";
import WorkflowNavigation from "@/components/features/WorkflowNavigation";
import jsonld from "./jsonld.json";

export const metadata = {
  title: "Training Mode: Step by Step Software Training on Your Screen | AgenQ",
  description:
    "AgenQ Training Mode shows employees each step inside their insurance software while they do the real work. Training and onboarding without videos or classes.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/features/workflow-navigation/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title:
      "Training Mode: Step by Step Software Training on Your Screen | AgenQ",
    description:
      "AgenQ Training Mode shows employees each step inside their insurance software while they do the real work. Training and onboarding without videos or classes.",
    url: "https://agenq.com/features/workflow-navigation/",
    images: [
      {
        url: "https://agenq.com/assets/share/home.png",
        width: 1200,
        height: 630,
        alt: "Learn the Software While Doing the Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Training Mode: Step by Step Software Training on Your Screen | AgenQ",
    description:
      "AgenQ Training Mode shows employees each step inside their insurance software while they do the real work. Training and onboarding without videos or classes.",
    images: ["https://agenq.com/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonld} />
      <Nav />
      <WorkflowNavigation />
      <Footer />
    </>
  );
}
