import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/encomendas", label: "Encomendas" },
  { to: "/sobre-nos", label: "Sobre Nós" },
] as const;

const external = [
  { label: "Google Meu Negócio", short: "Google", href: "https://share.google/TfAoJRCZ7U1uG971q", logo: "https://cdn.simpleicons.org/google" },
  { label: "Instagram", short: "Instagram", href: "https://www.instagram.com/casa_de_bolostialu?stkn=OXpoZ2RpOGViZzZy", logo: "https://cdn.simpleicons.org/instagram" },
  { label: "WhatsApp", short: "WhatsApp", href: "https://wa.me/5522992275273", logo: "https://cdn.simpleicons.org/whatsapp" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function copyPix() {
    await navigator.clipboard.writeText("22992275273");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-header/95 shadow-soft backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <Link to="/" className="brand-script shrink-0 text-2xl leading-5 text-brand-brown" aria-label="Casa de Bolo da Tia Lu — início">
            Casa de Bolo<br />da Tia Lu <span aria-hidden="true">🍓</span>
          </Link>

          <nav className="flex flex-1 flex-row items-center gap-2 overflow-x-auto" aria-label="Navegação principal">
            {links.map((link) => (
              <Button key={link.to} asChild variant="outline" size="sm" className="shrink-0 rounded-full border-primary/40 font-semibold uppercase tracking-wide">
                <Link to={link.to} activeOptions={{ exact: link.to === "/" }} activeProps={{ className: "bg-primary text-primary-foreground" }}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <aside className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3" aria-label="Contatos">
        {external.map(({ label, short, href, logo }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="side-tile" aria-label={label}>
            <img src={logo} alt="" width={26} height={26} /><span>{short}</span>
          </a>
        ))}
        <button type="button" className="side-tile" onClick={copyPix} aria-label="Copiar chave Pix">
          <img src="https://cdn.simpleicons.org/pix" alt="" width={26} height={26} /><span>{copied ? "Copiado!" : "Pix"}</span>
        </button>
      </aside>

      <main>{children}</main>

      <footer className="border-t border-brand-gold/40 bg-footer text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div><p className="brand-script text-3xl">Casa de Bolo da Tia Lu 🍓</p><p className="mt-3 max-w-sm text-sm text-footer-muted">Bolos artesanais que transformam afeto, tradição e ingredientes escolhidos em momentos inesquecíveis.</p></div>
          <div><p className="font-semibold">Navegue</p><div className="mt-3 flex flex-col gap-2 text-sm text-footer-muted">{links.map((link) => <Link key={link.to} to={link.to} className="hover:text-footer-foreground">{link.label}</Link>)}</div></div>
          <div><p className="font-semibold">Faça sua encomenda</p><p className="mt-3 text-sm text-footer-muted">Atendimento direto pelo WhatsApp.</p><a className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-gold" href="https://wa.me/5522992275273" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> (22) 99227-5273</a><p className="mt-3 flex items-start gap-2 text-sm text-footer-muted"><MapPin className="mt-0.5 size-4 shrink-0" /> Rua Comandante Ituriel, 599 - Base - São Pedro da Aldeia - RJ</p><a className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-gold px-4 py-2 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-footer" href="https://www.google.com/maps/dir//Bolos+da+Tia+Lu,+Rua+Cmte.+Ituriel+-+Jardim+Soledade,+S%C3%A3o+Pedro+da+Aldeia+-+RJ,+28941-348/@-22.8360192,-42.1003264,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x970f92c76299cb:0xbf95689f4f3f045a!2m2!1d-42.09109!2d-22.8229605?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer"><MapPin className="size-4" /> Como chegar</a></div>
        </div>
        <div className="border-t border-footer-line py-4 text-center text-xs text-footer-muted">Feito com carinho, como bolo de família.</div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="ornament" aria-hidden="true">❦</div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{children}</p></section>;
}