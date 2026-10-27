import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "@/app/aq-pages.css";
import ProductKnowledgeTraining from "@/components/features/ProductKnowledgeTraining";
import jsonld from "./jsonld.json";

export const metadata = {
  title: "Your Procedures Inside Your Software | AgenQ Product Knowledge",
  description:
    "AgenQ uses your agency's procedures and training material, so employees learn the software your way. Keep know how in the business when people leave.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/features/product-knowledge-training/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "Your Procedures Inside Your Software | AgenQ Product Knowledge",
    description:
      "AgenQ uses your agency's procedures and training material, so employees learn the software your way. Keep know how in the business when people leave.",
    url: "https://agenq.com/features/product-knowledge-training/",
    images: [
      {
        url: "https://agenq.com/assets/share/home.png",
        width: 1200,
        height: 630,
        alt: "Your Procedures, on Every Screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Procedures Inside Your Software | AgenQ Product Knowledge",
    description:
      "AgenQ uses your agency's procedures and training material, so employees learn the software your way. Keep know how in the business when people leave.",
    images: ["https://agenq.com/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonld} />
      <Nav />
      <ProductKnowledgeTraining />
      <Footer />
    </>
  );
}
