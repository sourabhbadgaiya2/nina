import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "@/app/aq-pages.css";
import ActionBasedExecution from "@/components/features/ActionBasedExecution";
import jsonld from "./jsonld.json";

export const metadata = {
  title: "Execution Mode: AI That Completes Approved Tasks | AgenQ",
  description:
    "AgenQ Execution Mode completes approved tasks inside your insurance software. A person approves the important steps, and every change is recorded.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/features/action-based-execution/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "Execution Mode: AI That Completes Approved Tasks | AgenQ",
    description:
      "AgenQ Execution Mode completes approved tasks inside your insurance software. A person approves the important steps, and every change is recorded.",
    url: "https://agenq.com/features/action-based-execution/",
    images: [
      {
        url: "https://agenq.com/assets/share/home.png",
        width: 1200,
        height: 630,
        alt: "Ask for the Result. AgenQ Does the Task.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Execution Mode: AI That Completes Approved Tasks | AgenQ",
    description:
      "AgenQ Execution Mode completes approved tasks inside your insurance software. A person approves the important steps, and every change is recorded.",
    images: ["https://agenq.com/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonld} />
      <Nav />
      <ActionBasedExecution />
      <Footer />
    </>
  );
}
