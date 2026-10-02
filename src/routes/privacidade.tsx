import { createFileRoute, Link } from "@tanstack/react-router";
import logoUrl from "@/assets/logo.svg";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Políticas de Privacidade — NCE" },
      {
        name: "description",
        content: "Política de privacidade do treinamento NCE — Nicolas Ecommerce.",
      },
      { property: "og:title", content: "Políticas de Privacidade — NCE" },
      {
        property: "og:description",
        content: "Política de privacidade do treinamento NCE — Nicolas Ecommerce.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="eyebrow inline-flex items-center gap-3 transition-colors hover:text-foreground"
        >
          <span className="inline-block h-px w-8 bg-brand" />
          Voltar ao início
        </Link>
        <img src={logoUrl} alt="NCE" className="mt-10 h-10 w-10" />
        <h1 className="mt-8 text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.08]">
          Políticas de Privacidade
        </h1>
        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
          <p className="text-brand-soft/80 italic">
            [TEXTO OFICIAL DA POLÍTICA DE PRIVACIDADE — ENVIAR PARA PUBLICAR]
          </p>
          <p>
            Esta página fica pronta no layout enquanto o texto oficial não é enviado. Ela já é
            acessível pelo rodapé do site, na coluna "Políticas".
          </p>
        </div>
      </div>
    </main>
  );
}
