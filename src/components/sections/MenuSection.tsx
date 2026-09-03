import { ExternalLink } from "lucide-react";
import { Container, Eyebrow } from "@/components/shared";
import { business } from "@/data/business";
import { menuCategories, menuNote } from "@/data/menu";
import { buttonVariants } from "@/components/ui/button";
export function MenuSection() {
  return (
    <section id="ementa" className="bg-[#1d110d] py-24 text-[#f8f1e7] md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <Eyebrow>A nossa ementa</Eyebrow>
            <h2 className="section-title mt-7 max-w-lg">
              O sabor de sempre, à sua escolha.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-white/60">
              Uma seleção da ementa oficial do Mimo’s. Os pratos do dia podem
              variar; confirme no momento da encomenda.
            </p>
          </div>
          <div>
            {menuCategories.map((category, index) => (
              <div key={category.name} className={index ? "mt-14" : ""}>
                <div className="mb-3 flex items-baseline justify-between border-b border-white/20 pb-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-[.2em] text-accent">
                    {category.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-white/35">
                    Ementa oficial
                  </span>
                </div>
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="grid gap-3 border-b border-white/15 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                  >
                    <p
                      className={`font-display text-[clamp(1.65rem,3vw,2.35rem)] leading-none ${item.featured ? "italic text-accent" : ""}`}
                    >
                      {item.name}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 sm:justify-end">
                      {item.prices.map((p) => (
                        <p key={p.label} className="whitespace-nowrap text-sm">
                          <span className="mr-2 text-white/45">{p.label}</span>
                          <strong>{p.value}</strong>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-5 text-white/40">{menuNote}</p>
          <a
            href={business.menuUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Ver ementa completa <ExternalLink size={15} />
          </a>
        </div>
      </Container>
    </section>
  );
}
