import { useCallback, useEffect, useRef, useState } from "react";
import type { ModuleSlide } from "@/content/nce";

/**
 * Carrossel horizontal dos módulos do NCE.
 * Exclusivamente visual: só imagens, sem títulos ou descrições fora da arte.
 * Para publicar as artes definitivas, basta preencher `src` em `modules.slides`
 * (src/content/nce.ts) com a URL/import da imagem.
 */
/**
 * Medidas por tipo de arte: largura do card, respiro nas pontas e proporção
 * reservada antes da imagem carregar (evita pulo no layout).
 */
const VARIANTS = {
  default: {
    item: "w-[72%] sm:w-[48%] lg:w-[32%]",
    first: "ml-[14%] sm:ml-[26%] lg:ml-[34%]",
    last: "mr-[14%] sm:mr-[26%] lg:mr-[34%]",
    img: "h-auto",
  },
  module: {
    item: "w-[74%] max-w-[340px] sm:w-[44%] lg:w-[26%]",
    first: "ml-[13%] sm:ml-[28%] lg:ml-[37%]",
    last: "mr-[13%] sm:mr-[28%] lg:mr-[37%]",
    img: "aspect-[2/3] h-auto",
  },
  proof: {
    item: "w-[68%] max-w-[290px] sm:w-[38%] lg:w-[22%]",
    first: "ml-[16%] sm:ml-[31%] lg:ml-[39%]",
    last: "mr-[16%] sm:mr-[31%] lg:mr-[39%]",
    img: "aspect-[884/1920] h-auto",
  },
} as const;

export function ModulesCarousel({
  slides,
  itemLabel = "Módulo",
  variant = "default",
  initialIndex = 0,
}: {
  slides: ModuleSlide[];
  itemLabel?: string;
  variant?: keyof typeof VARIANTS;
  initialIndex?: number;
}) {
  const size = VARIANTS[variant];
  const trackRef = useRef<HTMLDivElement>(null);
  const didInitial = useRef(false);
  const [active, setActive] = useState(initialIndex);
  const [atStart, setAtStart] = useState(initialIndex <= 0);
  const [atEnd, setAtEnd] = useState(false);

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const node = child as HTMLElement;
      const c = node.offsetLeft + node.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    // Pula para o slide inicial (sem animação) na primeira renderização
    if (el && initialIndex > 0 && !didInitial.current) {
      didInitial.current = true;
      const node = el.children[initialIndex] as HTMLElement | undefined;
      if (node) {
        el.scrollTo({
          left: node.offsetLeft - (el.clientWidth - node.offsetWidth) / 2,
          behavior: "instant",
        });
      }
    }
    updateState();
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const node = el.children[Math.max(0, Math.min(slides.length - 1, i))] as
      | HTMLElement
      | undefined;
    if (!node) return;
    el.scrollTo({
      left: node.offsetLeft - (el.clientWidth - node.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  // Drag com o mouse no desktop
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    drag.current.down = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="relative">
      {/* setas */}
      <div className="mb-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label={`${itemLabel} anterior`}
          onClick={() => scrollToIndex(active - 1)}
          disabled={atStart}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-all duration-300 hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label={`Próximo ${itemLabel.toLocaleLowerCase("pt-BR")}`}
          onClick={() => scrollToIndex(active + 1)}
          disabled={atEnd}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-all duration-300 hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="relative">
        {/* fade nas laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent md:w-20" />

        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ cursor: "grab", scrollPaddingInline: "12%" }}
        >
          {slides.map((slide, i) => {
            const isActive = i === active;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  if (!drag.current.moved) scrollToIndex(i);
                }}
                className={`relative shrink-0 snap-center transition-all duration-700 ease-out ${size.item} ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.94] opacity-45"
                } ${i === 0 ? size.first : ""} ${i === slides.length - 1 ? size.last : ""}`}
              >
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-700 ${
                    isActive ? "border-brand/40 brand-glow" : "border-border"
                  }`}
                >
                  {slide.src ? (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      draggable={false}
                      loading="lazy"
                      className={`block w-full select-none object-contain ${size.img}`}
                    />
                  ) : (
                    <div className="flex aspect-[3/4] items-center justify-center bg-surface/60 p-6 text-center">
                      <span className="text-brand-soft/80 italic text-sm">{slide.alt}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* indicadores */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Ir para ${itemLabel.toLocaleLowerCase("pt-BR")} ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-7 bg-brand" : "w-1.5 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
