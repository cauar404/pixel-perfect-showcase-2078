import { ArrowUpRight, Check, CreditCard, ShieldCheck } from "lucide-react";
import { brand, contact, offer } from "@/content/nce";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function DecisionSection() {
  return (
    <section id="oferta" className="amber-section editorial-section border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal direction="left">
          <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-brand" />{offer.eyebrow}</p>
          <h2 className="mt-7 max-w-xl font-semibold leading-[1.12]">{offer.headline}</h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{offer.lead.join(" ")}</p>
          <div className="mt-10 border-t border-border pt-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Seu acesso inclui</p>
            <ul className="mt-5 space-y-5">
              {offer.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">{offer.includesNote}</p>
        </Reveal>

        <Reveal direction="right" delay={120}>
          <div className="overflow-hidden rounded-lg border border-brand/30 bg-card shadow-decision">
            <div className="amber-heading flex items-center justify-between gap-3 border-b border-border px-6 py-5 sm:px-8">
              <span className="font-display text-sm font-semibold">Método NCE</span>
              <span className="text-xs text-muted-foreground">12 meses de acesso</span>
            </div>
            <div className="px-6 py-8 sm:px-8 sm:py-9">
              <p className="eyebrow">Investimento</p>
              <p className="mt-5 flex flex-wrap items-baseline gap-x-2 text-sm text-muted-foreground">
                <span>De</span>
                <span className="line-through decoration-muted-foreground/70">{offer.priceOld}</span>
                <span className="text-brand">por</span>
              </p>
              <p className="decision-price mt-1 font-display text-5xl font-semibold leading-none sm:text-6xl">{offer.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{offer.priceNote}</p>
              <div className="mt-6 flex items-center gap-3 border-y border-border py-5">
                <CreditCard className="h-5 w-5 shrink-0 text-brand" />
                <p className="text-sm"><span className="font-semibold text-foreground">{offer.installment}</span><span className="ml-2 text-muted-foreground">{offer.installmentNote}</span></p>
              </div>
              <Button asChild className="mt-7 h-auto w-full justify-between whitespace-normal rounded-md px-5 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5">
                <a href="https://pay.kiwify.com.br/vx7MPrd">{brand.ctaBuy}<ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">{offer.platformNote}</p>
              <div className="mt-7 flex items-start gap-3 border-t border-border pt-6">
                <ShieldCheck className="h-6 w-6 shrink-0 text-brand" />
                <div><p className="text-sm font-semibold">{offer.guaranteeTitle}</p><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{offer.guaranteeText}</p></div>
              </div>
            </div>
          </div>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand">
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand" />Dúvidas? Fale com o suporte<ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
