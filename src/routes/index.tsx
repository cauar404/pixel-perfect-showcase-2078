import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import logoUrl from "@/assets/logo.svg";
import { Reveal } from "@/components/Reveal";
import { ModulesCarousel } from "@/components/ModulesCarousel";
import {
  author,
  brand,
  contact,
  deliverables,
  faq,
  finalCta,
  hero,
  hook,
  objections,
  offer,
  modules,
  pillars,
  policies,
  problem,
  proof,
  shift,
  turn,
  what,
} from "@/content/nce";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NCE — Método de E-commerce" },
      {
        name: "description",
        content:
          "O NCE é o método de e-commerce criado por Nicolas: visão, estrutura, execução e decisão para operar sem depender de tentativa e erro.",
      },
      { property: "og:title", content: "NCE — Método de E-commerce" },
      {
        property: "og:description",
        content:
          "Método, processo e clareza para operar e-commerce como negócio — sem depender de um marketplace específico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`flex w-full max-w-fit items-center justify-between gap-4 rounded-full border px-2.5 py-2 backdrop-blur-xl transition-all duration-500 md:gap-10 ${
          scrolled
            ? "border-border bg-background/90 shadow-[0_12px_40px_-12px_hsl(0_0%_0%/0.65)]"
            : "border-border/40 bg-background/70"
        }`}
      >
        <a href="#top" aria-label="NCE" className="shrink-0 pl-1">
          <img
            src={logoUrl}
            alt="NCE"
            className="h-10 w-10 md:h-14 md:w-14 [filter:drop-shadow(0_0_14px_hsl(38_90%_60%/0.25))] transition-transform duration-300 hover:scale-105"
          />
        </a>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#metodo">
            Método
          </a>
          <a className="transition-colors hover:text-foreground" href="#nicolas">
            Nicolas
          </a>
          <a className="transition-colors hover:text-foreground" href="#incluso">
            O que você recebe
          </a>
          <a className="transition-colors hover:text-foreground" href="#faq">
            FAQ
          </a>
        </nav>
        <a
          href="#oferta"
          className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[0_0_20px_hsl(38_90%_60%/0.2)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
        >
          {brand.ctaBuy}
        </a>
      </nav>
    </header>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-brand" />
      {children}
    </p>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  if (typeof children === "string" && !children.includes("[")) {
    return <>{children}</>;
  }
  return <span className="text-brand-soft/80 italic">{children}</span>;
}

function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  const isPlaceholder = label.includes("[");
  return isPlaceholder ? (
    <span className="flex items-center gap-3 text-muted-foreground">
      <span className="text-brand">{icon}</span>
      <Placeholder>{label}</Placeholder>
    </span>
  ) : (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="text-brand">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function Landing() {
  return (
    <main id="top" className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-32 pb-20">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-20 blur-[140px]"
          style={{ background: "var(--brand)" }}
        />
        <div className="relative mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>{brand.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 text-[clamp(2.5rem,6.5vw,4.75rem)] font-semibold leading-[1.02]">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {hero.sub}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#nce"
                  className="rounded-full bg-brand px-7 py-4 text-center text-sm font-semibold text-brand-foreground transition-transform duration-300 hover:scale-[1.02]"
                >
                  {brand.ctaPrimary}
                </a>
                <a
                  href="#metodo"
                  className="rounded-full border border-border px-7 py-4 text-center text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
                >
                  {brand.ctaSecondary}
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 text-sm text-muted-foreground">{hero.note}</p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="brand-glow rounded-2xl bg-surface/70 p-2 backdrop-blur">
              <div className="rounded-xl border border-border bg-background/60 p-8">
                <p className="eyebrow">Método NCE</p>
                <div className="mt-8 space-y-6">
                  {hero.panels.map((p) => (
                    <div key={p.label} className="border-l border-brand/50 pl-5">
                      <p className="font-display text-sm font-semibold text-brand">{p.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{p.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 h-px w-full bg-border" />
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  Sem foco exclusivo em marketplace. O canal muda. O raciocínio permanece.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOOK */}
      <Section className="border-t border-border">
        <Reveal>
          <Eyebrow>{hook.eyebrow}</Eyebrow>
        </Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={80}>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08]">
              {hook.headline}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {hook.body.map((p, i) => (
              <Reveal key={p} delay={120 + i * 80}>
                <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* PROBLEMA */}
      <Section className="border-t border-border bg-surface/40">
        <Reveal>
          <Eyebrow>{problem.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08]">
            {problem.headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{problem.intro}</p>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {problem.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <p className="font-display text-xl font-semibold">{item.title}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-14 max-w-2xl border-l-2 border-brand pl-6 font-display text-xl leading-snug">
            {problem.close}
          </p>
        </Reveal>
      </Section>

      {/* A VIRADA */}
      <Section className="border-t border-border">
        <Reveal>
          <Eyebrow>{turn.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-4xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08]">
            {turn.headline}
          </h2>
        </Reveal>
        <div className="mt-8 max-w-2xl space-y-5">
          {turn.body.map((p, i) => (
            <Reveal key={p} delay={120 + i * 70}>
              <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {turn.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full rounded-xl border border-border p-7 transition-transform duration-500 hover:-translate-y-1">
                <p className="font-display text-sm text-brand">{s.n}</p>
                <p className="mt-6 font-display text-lg font-semibold">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* O QUE É O NCE */}
      <Section id="nce" className="border-t border-border bg-surface/40">
        <Reveal>
          <Eyebrow>{what.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05]">
            {what.headline}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {what.body.map((p, i) => (
              <Reveal key={p} delay={100 + i * 70}>
                <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="space-y-4">
            {[what.meaning, what.why].map((item, i) => (
              <Reveal key={item.label} delay={120 + i * 90}>
                <div className="rounded-xl border border-dashed border-brand/40 bg-background/50 p-6">
                  <p className="eyebrow">{item.label}</p>
                  <p className="mt-3">
                    <Placeholder>{item.value}</Placeholder>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {what.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-border bg-background p-8">
                <p className="font-display text-lg font-semibold">{c.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MÉTODO / PILARES */}
      <Section id="metodo" className="border-t border-border">
        <Reveal>
          <Eyebrow>{pillars.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05]">
            {pillars.headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-muted-foreground">{pillars.intro}</p>
        </Reveal>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {pillars.items.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <div className="group grid gap-6 py-10 transition-colors duration-500 md:grid-cols-[100px_1fr_1fr] md:gap-10">
                <p className="font-display text-3xl font-semibold text-brand/70 transition-colors group-hover:text-brand">
                  {p.n}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    <Placeholder>{p.title}</Placeholder>
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <Placeholder>{p.what}</Placeholder>
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="eyebrow block">Por que importa</span>
                    <Placeholder>{p.why}</Placeholder>
                  </p>
                  <p>
                    <span className="eyebrow block">O que muda</span>
                    <Placeholder>{p.result}</Placeholder>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* O QUE MUDA */}
      <Section className="border-t border-border bg-surface/40">
        <Reveal>
          <Eyebrow>{shift.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08]">
            {shift.headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-muted-foreground">{shift.intro}</p>
        </Reveal>
        <div className="mt-14 space-y-4">
          {shift.pairs.map((pair, i) => (
            <Reveal key={pair.before} delay={i * 90}>
              <div className="grid items-stretch gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
                <div className="bg-background p-7">
                  <p className="eyebrow">Sem método</p>
                  <p className="mt-3 text-muted-foreground">“{pair.before}”</p>
                </div>
                <div className="bg-background p-7">
                  <p className="eyebrow text-brand">Com método</p>
                  <p className="mt-3 font-display text-lg">“{pair.after}”</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MÓDULOS */}
      <section id="modulos" className="border-t border-border px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>{modules.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.05]">
              {modules.headline}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-muted-foreground">{modules.intro}</p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="mx-auto mt-14 max-w-[110rem]">
            <div className="mx-auto mb-2 max-w-6xl" />
            <ModulesCarousel slides={modules.slides} variant="module" initialIndex={3} />
          </div>
        </Reveal>
      </section>

      {/* NICOLAS */}
      <Section id="nicolas" className="border-t border-border">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              {author.photo && !author.photo.includes("[") ? (
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface/60">
                  <img
                    src={author.photo}
                    alt="Nicolas"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-brand/40 bg-surface/60 p-8 text-center">
                  <Placeholder>{author.photo}</Placeholder>
                </div>
              )}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {author.facts.map((f) => (
                  <div key={f.label} className="rounded-lg border border-border p-4">
                    <p className="font-display text-base text-brand">
                      <Placeholder>{f.value}</Placeholder>
                    </p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal delay={80}>
              <Eyebrow>{author.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={140}>
              <h2 className="mt-8 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08]">
                {author.headline}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5">
              {author.paragraphs.map((p, i) => (
                <Reveal key={p} delay={180 + i * 80}>
                  <p className="leading-relaxed text-muted-foreground">
                    <Placeholder>{p}</Placeholder>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROVAS */}
      <section className="border-t border-border bg-surface/40 px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>{proof.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08]">
              {proof.headline}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-muted-foreground">{proof.intro}</p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="mx-auto mt-14 max-w-[110rem]">
            <ModulesCarousel slides={proof.slides} itemLabel="Prova" variant="proof" initialIndex={3} />
          </div>
        </Reveal>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <Section id="incluso" className="border-t border-border">
        <Reveal>
          <Eyebrow>{deliverables.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08]">
            {deliverables.headline}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {deliverables.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className={i === deliverables.items.length - 1 ? "md:col-span-2" : ""}
            >
              <div className="h-full bg-background p-8 md:p-10">
                <p className="font-display text-xl font-semibold">{item.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.what.startsWith("[") ? <Placeholder>{item.what}</Placeholder> : item.what}
                </p>
                <p className="mt-4 border-l border-brand/50 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {item.why}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OBJEÇÕES */}
      <Section className="border-t border-border bg-surface/40">
        <Reveal>
          <Eyebrow>{objections.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08]">
            {objections.headline}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {objections.items.map((o, i) => (
            <Reveal key={o.q} delay={i * 70}>
              <div className="h-full rounded-xl border border-border bg-background p-7">
                <p className="font-display text-lg">{o.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {o.a.includes("[") ? <Placeholder>{o.a}</Placeholder> : o.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OFERTA */}
      <Section id="oferta" className="border-t border-border">
        <Reveal>
          <Eyebrow>{offer.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.06]">
            {offer.headline}
          </h2>
        </Reveal>
        <div className="mt-8 max-w-2xl space-y-3">
          {offer.lead.map((l, i) => (
            <Reveal key={l} delay={120 + i * 70}>
              <p className="text-lg text-muted-foreground">{l}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="brand-glow mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-background p-9 md:p-12">
              <p className="eyebrow">Está incluído</p>
              <ul className="mt-7 space-y-4">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-muted-foreground">{offer.includesNote}</p>
            </div>
            <div className="flex flex-col justify-between bg-surface p-9 md:p-12">
              <div>
                <p className="eyebrow">Investimento</p>
                <p className="mt-6 font-display text-5xl font-semibold">
                  <Placeholder>{offer.price}</Placeholder>
                </p>
                <p className="mt-3 text-sm">
                  <Placeholder>{offer.priceNote}</Placeholder>
                </p>
              </div>
              <a
                href="#oferta"
                className="mt-10 block rounded-full bg-brand px-8 py-4 text-center font-semibold text-brand-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                {brand.ctaBuy}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-dashed border-brand/40 p-7">
              <p className="eyebrow text-brand">Garantia</p>
              <p className="mt-3 font-display text-lg">
                <Placeholder>{offer.guaranteeTitle}</Placeholder>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {offer.guaranteeText}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-xl border border-border p-7">
              <p className="eyebrow">Condições e prazos</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {offer.urgencyNote}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="border-t border-border bg-surface/40">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{faq.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-8 text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold leading-[1.08]">
                {faq.headline}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 font-display text-lg text-brand-soft">{faq.sub}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{faq.text}</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 max-w-sm rounded-xl border border-border bg-background p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <MessageCircle className="h-6 w-6 text-brand" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold">{faq.cta.label}</p>
                    <p className="text-sm text-muted-foreground">
                      <Placeholder>{faq.cta.sub}</Placeholder>
                    </p>
                  </div>
                </div>
                {faq.cta.url.includes("[") ? (
                  <span className="mt-5 block cursor-not-allowed rounded-full bg-brand/60 px-6 py-3 text-center text-sm font-semibold text-brand-foreground opacity-60">
                    Mandar mensagem
                  </span>
                ) : (
                  <a
                    href={faq.cta.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-brand-foreground transition-transform duration-300 hover:scale-[1.02]"
                  >
                    Mandar mensagem
                  </a>
                )}
              </div>
            </Reveal>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faq.items.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium">
                    {item.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {item.a.includes("[") ? <Placeholder>{item.a}</Placeholder> : item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="relative border-t border-border px-6 py-32 text-center md:py-44">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full opacity-15 blur-[150px]"
          style={{ background: "var(--brand)" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] text-muted-foreground">
              {finalCta.headline}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-display font-semibold leading-[1.06]">
              {finalCta.sub}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
              {finalCta.text}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href="#oferta"
              className="mt-12 inline-block rounded-full bg-brand px-9 py-4 font-semibold text-brand-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              {brand.ctaBuy}
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          <div>
            <img
              src={logoUrl}
              alt="NCE"
              className="h-12 w-12 [filter:drop-shadow(0_0_14px_hsl(38_90%_60%/0.25))]"
            />
            <p className="mt-6 text-sm">NCE — Método de e-commerce por Nicolas.</p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} NCE. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold">Contato</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <ContactItem
                  icon={<Mail className="h-4 w-4" />}
                  label={contact.email}
                  href={contact.email.includes("[") ? "#" : `mailto:${contact.email}`}
                />
              </li>
              <li>
                <ContactItem
                  icon={<Instagram className="h-4 w-4" />}
                  label={contact.instagram}
                  href={
                    contact.instagram.includes("[")
                      ? "#"
                      : `https://instagram.com/${contact.instagram.replace("@", "").trim()}`
                  }
                />
              </li>
              <li>
                <ContactItem
                  icon={<Phone className="h-4 w-4" />}
                  label={contact.phone}
                  href={
                    contact.phone.includes("[")
                      ? "#"
                      : `https://wa.me/${contact.phone.replace(/\D/g, "")}`
                  }
                />
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-lg font-semibold">Políticas</p>
            <ul className="mt-5 space-y-4 text-sm">
              {policies.map((p) => (
                <li key={p.href}>
                  <Link
                    to={p.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
