import { createFileRoute } from "@tanstack/react-router";
import { CalendarHeart, Check, MessageCircle, Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactButtons, PageIntro, SiteLayout } from "@/components/site/SiteLayout";
import caseirinhosPromo from "@/assets/caseirinhos-promo.jpg.asset.json";
import boloNaruto from "@/assets/bolo-naruto.webp.asset.json";

export const Route = createFileRoute("/encomendas")({
  head: () => ({ meta: [
    { title: "Encomendas | Casa de Bolo da Tia Lu" },
    { name: "description", content: "Encomende seu bolo artesanal diretamente com a Tia Lu pelo WhatsApp." },
    { property: "og:title", content: "Encomendas | Casa de Bolo da Tia Lu" },
    { property: "og:description", content: "Seu bolo especial, feito com carinho pela Tia Lu." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Encomendas,
});

const steps = [
  { icon: MessageCircle, n: "01", title: "Conte sua ideia", text: "Chame no WhatsApp e diga a ocasião, o sabor desejado e para quantas pessoas." },
  { icon: Palette, n: "02", title: "Escolha os detalhes", text: "Definimos juntos tamanho, acabamento e detalhes para deixar tudo do seu jeito." },
  { icon: CalendarHeart, n: "03", title: "Combine a data", text: "Confirme a disponibilidade e os detalhes de retirada diretamente no atendimento." },
];

const encomendaGallery = [
  { src: boloNaruto.url, alt: "Bolo personalizado temático de aniversário", caption: "Bolos personalizados para festas e aniversários" },
  { src: caseirinhosPromo.url, alt: "Bolos caseiros fresquinhos da Casa de Bolo da Tia Lu", caption: "Caseirinhos fresquinhos saindo agora" },
];

function Encomendas() {
  return <SiteLayout><PageIntro eyebrow="Feito especialmente para você" title="Encomendas com carinho">Do primeiro “olá” ao último detalhe, a Tia Lu acompanha seu pedido de perto.</PageIntro><ContactButtons className="contact-stack" /><section className="section-shell pt-2"><div className="grid gap-6 md:grid-cols-3">{steps.map(({ icon: Icon, n, title, text }) => <article className="step-card" key={n}><span className="step-number">{n}</span><Icon className="mt-7 size-8 text-primary" /><h2 className="mt-4 font-display text-2xl text-brand-brown">{title}</h2><p className="mt-2 leading-7 text-muted-foreground">{text}</p></article>)}</div><div className="mt-10 grid gap-6 sm:grid-cols-2">{encomendaGallery.map((item) => <figure className="cake-card" key={item.src}><img src={item.src} alt={item.alt} className="w-full object-cover" loading="lazy" /><figcaption className="p-5 text-center text-sm font-medium text-muted-foreground">{item.caption}</figcaption></figure>)}</div><div className="order-panel"><div><p className="eyebrow">Vamos conversar?</p><h2 className="mt-2 font-display text-4xl text-brand-brown">Seu próximo bolo começa aqui.</h2><ul className="mt-5 space-y-3 text-sm text-muted-foreground"><li><Check /> Atendimento personalizado</li><li><Check /> Sabores artesanais</li><li><Check /> Detalhes combinados diretamente com você</li></ul></div><Button asChild variant="confectionery" size="lg" className="h-13 px-7"><a href="https://wa.me/5522992275273" target="_blank" rel="noreferrer"><MessageCircle /> Fazer pedido pelo WhatsApp</a></Button></div></section></SiteLayout>;
}
