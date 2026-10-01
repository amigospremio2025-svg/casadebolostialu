import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";
import { cakes } from "@/lib/cakes";
import { CakePhoto } from "@/components/site/CakePhoto";

export const Route = createFileRoute("/cardapio")({
  head: () => ({ meta: [
    { title: "Cardápio | Casa de Bolo da Tia Lu" },
    { name: "description", content: "Conheça os bolos artesanais da Casa de Bolo da Tia Lu." },
    { property: "og:title", content: "Cardápio | Casa de Bolo da Tia Lu" },
    { property: "og:description", content: "Bolos artesanais para celebrar e compartilhar." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Cardapio,
});

function Cardapio() {
  return <SiteLayout><PageIntro eyebrow="Receitas da Tia Lu" title="Nosso cardápio">Bolos preparados em pequenos lotes, com ingredientes escolhidos e acabamento artesanal.</PageIntro><section className="section-shell pt-4"><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{cakes.map((cake) => <article className="cake-card" key={cake.name}><CakePhoto src={cake.image} alt={cake.name} /><div className="p-6"><span className="cake-tag">{cake.tag}</span><h2 className="mt-3 font-display text-3xl text-brand-brown">{cake.name}</h2><p className="mt-2 leading-6 text-muted-foreground">{cake.description}</p><Button asChild variant="confectionery" className="mt-5 w-full"><a href={`https://wa.me/5522992275273?text=${encodeURIComponent(`Olá, Tia Lu! Gostaria de encomendar o ${cake.name}.`)}`} target="_blank" rel="noreferrer"><MessageCircle /> Encomendar</a></Button></div></article>)}</div><p className="mt-9 text-center text-sm text-muted-foreground">Consulte pelo WhatsApp os tamanhos, sabores disponíveis, valores e opções personalizadas.</p></section></SiteLayout>;
}