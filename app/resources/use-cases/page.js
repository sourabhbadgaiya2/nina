import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UseCaseIndex from "@/components/UseCaseIndex";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Use Cases - AgenQ",
  description:
    "Every AgenQ solution, feature, and use-case page in one place — by industry, by outcome, by capability, and by team.",
  alternates: { canonical: "/resources/use-cases" },
  path: "/resources/use-cases",
});

export default function Page() {
  return (
    <>
      <Nav />
      <UseCaseIndex />
      <Footer />
    </>
  );
}
