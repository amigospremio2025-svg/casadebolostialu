import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Wheat } from "lucide-react";

import heroImage from "@/assets/tia-lu-hero.png";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({ meta: [
    { title: "Sobre Nós | Casa de Bolos da Tia Lu" },
    { name: "description", content: "Conheça a história e o carinho por trás dos bolos artesanais da Tia Lu." },
    { property: "og:title", content: "Sobre Nós | Casa de Bolos da Tia Lu" },
    { property: "og:description", content: "Tradição, memória afetiva e produção artesanal." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: SobreNos,
});

function SobreNos() {
  return <SiteLayout><PageIntro eyebrow="Uma receita de afeto" title="A história da Tia Lu">Uma confeitaria que nasceu do carinho pela família e do desejo de guardar boas memórias em cada receita.</PageIntro><section className="section-shell pt-2"><div className="story-grid"><div className="story-image"><img src={heroImage} width={1536} height={1536} loading="lazy" alt="Tia Lu em sua confeitaria artesanal" /></div><div><p className="eyebrow">De casa para a sua mesa</p><h2 className="mt-2 font-display text-4xl text-brand-brown sm:text-5xl">Bolo bom tem gosto de lembrança.</h2><p className="mt-5 leading-8 text-muted-foreground">A Casa de Bolos da Tia Lu celebra receitas caseiras, o cuidado com cada ingrediente e a alegria de reunir pessoas ao redor da mesa. Aqui, cada encomenda é preparada artesanalmente, com atenção aos detalhes e aquele toque acolhedor que só uma receita feita com amor consegue ter.</p><p className="mt-4 leading-8 text-muted-foreground">Mais do que confeitar, queremos fazer parte das suas celebrações e transformar momentos simples em lembranças que ficam.</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><div className="value-item"><Heart /><span>Carinho</span></div><div className="value-item"><Wheat /><span>Tradição</span></div><div className="value-item"><Sparkles /><span>Artesanal</span></div></div></div></div></section></SiteLayout>;
}