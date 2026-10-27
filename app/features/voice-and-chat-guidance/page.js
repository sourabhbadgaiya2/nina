import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "@/app/aq-pages.css";
import VoiceAndChatGuidance from "@/components/features/VoiceAndChatGuidance";
import jsonld from "./jsonld.json";

export const metadata = {
  title: "Ask by Typing or Speaking | AgenQ Voice and Chat",
  description:
    "Ask AgenQ how to do any task in your insurance software, by typing or speaking in plain English. See the steps on your screen.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/features/voice-and-chat-guidance/" },
  openGraph: {
    siteName: "AgenQ",
    type: "website",
    title: "Ask by Typing or Speaking | AgenQ Voice and Chat",
    description:
      "Ask AgenQ how to do any task in your insurance software, by typing or speaking in plain English. See the steps on your screen.",
    url: "https://agenq.com/features/voice-and-chat-guidance/",
    images: [
      {
        url: "https://agenq.com/assets/share/home.png",
        width: 1200,
        height: 630,
        alt: "Ask by Typing or Speaking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask by Typing or Speaking | AgenQ Voice and Chat",
    description:
      "Ask AgenQ how to do any task in your insurance software, by typing or speaking in plain English. See the steps on your screen.",
    images: ["https://agenq.com/assets/share/home.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={jsonld} />
      <Nav />
      <VoiceAndChatGuidance />
      <Footer />
    </>
  );
}
