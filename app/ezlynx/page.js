import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Ezlynx from "@/components/ezlynx/Ezlynx";
import jsonLd from "./jsonld.json";
import "../aq-pages.css";

const title = "EZLynx Training and Onboarding for Agency Staff | AgenQ";
const description =
  'AI training and onboarding inside EZLynx. New and experienced staff ask "How do I…?" and see the steps on their screen.';

// URLs are relative: layout.js sets metadataBase, so they resolve to absolute.
// trailingSlash is on in next.config.js, so /ezlynx/ is the real URL.
export const metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  alternates: { canonical: "/ezlynx/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title,
    description,
    url: "/ezlynx/",
    images: [
      {
        url: "/assets/share/ezlynx.png",
        width: 1200,
        height: 630,
        alt: "Your Staff Know the Client. AgenQ Knows EZLynx.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/share/ezlynx.png"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <JsonLd data={jsonLd} />
      <Ezlynx />
      <Footer />
    </>
  );
}
