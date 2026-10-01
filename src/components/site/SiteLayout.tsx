import { Link } from "@tanstack/react-router";
import { Copy, Instagram, MapPin, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/encomendas", label: "Encomendas" },
  { to: "/sobre-nos", label: "Sobre Nós" },
] as const;

const external = [
  { label: "Google Meu Negócio", short: "Google", href: "https://share.google/TfAoJRCZ7U1uG971q", icon: MapPin },
  { label: "Instagram", short: "Instagram", href: "https://www.instagram.com/casa_de_bolostialu?stkn=OXpoZ2RpOGViZzZy", icon: Instagram },
  { label: "WhatsApp", short: "WhatsApp", href: "https://wa.me/5522992275273", icon: MessageCircle },
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

      <aside className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2" aria-label="Contatos">
        {external.map(({ label, short, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="social-tile" aria-label={label}>
            <Icon aria-hidden="true" /><span>{short}</span>
          </a>
        ))}
        <Button type="button" variant="outline" className="social-tile" onClick={copyPix} aria-label="Copiar chave Pix">
          <Copy aria-hidden="true" /><span>{copied ? "Copiado!" : "Pix"}</span>
        </Button>
      </aside>

      <main>{children}</main>

      <footer className="border-t border-brand-gold/40 bg-footer text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div><p className="brand-script text-3xl">Casa de Bolo da Tia Lu 🍓</p><p className="mt-3 max-w-sm text-sm text-footer-muted">Bolos artesanais que transformam afeto, tradição e ingredientes escolhidos em momentos inesquecíveis.</p></div>
          <div><p className="font-semibold">Navegue</p><div className="mt-3 flex flex-col gap-2 text-sm text-footer-muted">{links.map((link) => <Link key={link.to} to={link.to} className="hover:text-footer-foreground">{link.label}</Link>)}</div></div>
          <div><p className="font-semibold">Faça sua encomenda</p><p className="mt-3 text-sm text-footer-muted">Atendimento direto pelo WhatsApp.</p><a className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-gold" href="https://wa.me/5522992275273" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> (22) 99227-5273</a></div>
        </div>
        <div className="border-t border-footer-line py-4 text-center text-xs text-footer-muted">Feito com carinho, como bolo de família.</div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="ornament" aria-hidden="true">❦</div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{children}</p></section>;
}