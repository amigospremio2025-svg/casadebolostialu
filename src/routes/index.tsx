import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, MessageCircle, Sparkles } from "lucide-react";

import heroAsset from "@/assets/casa-de-bolo-tia-lu.jpg.asset.json";
import videoGourmet from "@/assets/video-bolo-gourmet.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { ContactButtons, SiteLayout } from "@/components/site/SiteLayout";
import { cakes } from "@/lib/cakes";
import { CakePhoto } from "@/components/site/CakePhoto";

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
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
          <div className="relative mx-auto w-full max-w-xl md:max-w-2xl">
            <div className="hero-image-wrap"><img src={heroAsset.url} width={1254} height={1254} alt="Casa de Bolo da Tia Lu — Confeitaria & Cafeteria" className="h-full w-full object-cover" /></div>
            <ContactButtons className="mt-5 grid grid-cols-5 gap-1.5 sm:gap-3 lg:absolute lg:top-1/2 lg:left-full lg:mt-0 lg:ml-6 lg:flex lg:-translate-y-1/2 lg:flex-col" />
          </div>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="eyebrow">Receitas feitas à mão</p>
            <h1 className="mt-3 font-display text-4xl leading-tight font-bold text-brand-brown sm:text-5xl lg:text-6xl">Bolos caseiros com sabor de infância</h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-brand-brown/80 sm:text-lg">Feitos com amor pela Tia Lu. Cada fatia guarda um pouco de carinho, memória e celebração.</p>
            <Button asChild variant="confectionery" size="lg" className="mt-6 h-12 px-7 text-base"><Link to="/encomendas">Peça agora <ArrowRight /></Link></Button>
            <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm font-semibold text-brand-brown/75"><span className="inline-flex items-center gap-2"><Heart className="size-4 text-primary" /> Feito com amor</span><span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-brand-gold" /> Produção artesanal</span></div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><span aria-hidden="true">✦</span><p className="eyebrow">Feito na nossa cozinha</p><h2>Conheça nossos bolos</h2><p>Ninho com Nutella, Sonho de Valsa, Chocolate Branco e Preto — confira o vídeo.</p></div>
        <figure className="cake-card mx-auto mt-8 max-w-md md:max-w-lg"><video src={videoGourmet.url} controls playsInline preload="metadata" className="w-full" /><figcaption className="p-5 text-center text-sm font-medium text-muted-foreground">Nosso primeiro bolo gourmet: Ninho com Nutella, Sonho de Valsa, Chocolate Branco e Preto.</figcaption></figure>
      </section>

      <section className="section-shell">
        <div className="section-heading"><span aria-hidden="true">✦</span><p className="eyebrow">Os queridinhos da casa</p><h2>Bolos para adoçar cada história</h2><p>Receitas com textura macia, coberturas generosas e aquele gostinho de casa.</p></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cakes.slice(0, 3).map((cake) => <article className="cake-card" key={cake.name}><CakePhoto src={cake.image} alt={cake.name} /><div className="p-6"><span className="cake-tag">{cake.tag}</span><h3 className="mt-3 font-display text-2xl text-brand-brown">{cake.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{cake.description}</p><Link to="/cardapio" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">Ver no cardápio <ArrowRight className="size-4" /></Link></div></article>)}
        </div>
      </section>

      <section className="cta-band"><div><p className="eyebrow text-brand-gold-light">Uma ocasião especial?</p><h2>Seu bolo merece ser inesquecível.</h2><p>Conte sua ideia para a Tia Lu e prepare-se para receber muito carinho em forma de bolo.</p></div><Button asChild variant="outline" size="lg" className="cta-light"><a href="https://wa.me/5522992275273" target="_blank" rel="noreferrer"><MessageCircle /> Fazer pedido</a></Button></section>
    </SiteLayout>
  );
}