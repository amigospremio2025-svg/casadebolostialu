import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, MessageCircle, Sparkles } from "lucide-react";

import heroImage from "@/assets/tia-lu-hero.png";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { cakes } from "@/lib/cakes";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Casa de Bolo da Tia Lu | Bolos caseiros e artesanais" },
    { name: "description", content: "Bolos caseiros feitos com carinho, tradição e sabor de infância. Conheça a Casa de Bolo da Tia Lu." },
    { property: "og:title", content: "Casa de Bolo da Tia Lu" },
    { property: "og:description", content: "Bolos artesanais com sabor de infância." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="hero-band">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-[0.82fr_1.18fr] md:py-14 lg:gap-12">
          <div className="relative z-10 text-center md:text-left">
            <p className="eyebrow">Receitas feitas à mão</p>
            <h1 className="mt-3 font-display text-5xl leading-tight font-bold text-brand-brown sm:text-6xl lg:text-7xl">Bolos caseiros com sabor de infância</h1>
            <p className="mx-auto mt-5 max-w-lg text-lg text-brand-brown/80 md:mx-0">Feitos com amor pela Tia Lu. Cada fatia guarda um pouco de carinho, memória e celebração.</p>
            <Button asChild variant="confectionery" size="lg" className="mt-7 h-12 px-7 text-base"><Link to="/encomendas">Peça agora <ArrowRight /></Link></Button>
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-semibold text-brand-brown/75 md:justify-start"><span className="inline-flex items-center gap-2"><Heart className="size-4 text-primary" /> Feito com amor</span><span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-brand-gold" /> Produção artesanal</span></div>
          </div>
          <div className="hero-image-wrap"><img src={heroImage} width={1536} height={1536} alt="Tia Lu e confeiteiro em uma confeitaria vintage, rodeados de bolos e flores" className="h-full w-full object-cover" /></div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><span aria-hidden="true">✦</span><p className="eyebrow">Os queridinhos da casa</p><h2>Bolos para adoçar cada história</h2><p>Receitas com textura macia, coberturas generosas e aquele gostinho de casa.</p></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cakes.map((cake) => <article className="cake-card" key={cake.name}><div className="aspect-square overflow-hidden"><img src={cake.image} width={1024} height={1024} loading="lazy" alt={cake.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div><div className="p-6"><span className="cake-tag">{cake.tag}</span><h3 className="mt-3 font-display text-2xl text-brand-brown">{cake.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{cake.description}</p><Link to="/cardapio" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">Ver no cardápio <ArrowRight className="size-4" /></Link></div></article>)}
        </div>
      </section>

      <section className="cta-band"><div><p className="eyebrow text-brand-gold-light">Uma ocasião especial?</p><h2>Seu bolo merece ser inesquecível.</h2><p>Conte sua ideia para a Tia Lu e prepare-se para receber muito carinho em forma de bolo.</p></div><Button asChild variant="outline" size="lg" className="cta-light"><a href="https://wa.me/5522992275273" target="_blank" rel="noreferrer"><MessageCircle /> Fazer pedido</a></Button></section>
    </SiteLayout>
  );
}