import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About, Areas, Cases, Testimonials, Differentials, FAQ, Contact, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Helena Vasconcellos — Advocacia de alto padrão em São Paulo" },
      {
        name: "description",
        content:
          "Advocacia sofisticada em Direito Civil, Empresarial, Trabalhista, Família e Previdenciário. Atendimento discreto e estratégico em São Paulo.",
      },
      { property: "og:title", content: "Helena Vasconcellos — Advocacia" },
      { property: "og:description", content: "Defesa que antecipa. Estratégia que resolve." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Areas />
      <Cases />
      <Testimonials />
      <Differentials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
