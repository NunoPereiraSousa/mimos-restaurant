import { ArrowUpRight, Phone } from "lucide-react";

import { Container, Eyebrow } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { business } from "@/data/business";

export function FinalCTA() {
  return (
    <section className="border-t border-line bg-background py-20 md:py-28">
      <Container>
        <div className="grid gap-10 border-y border-foreground/20 py-12 lg:grid-cols-[1fr_auto] lg:items-end lg:py-16">
          <div>
            <Eyebrow>Pronto quando estiver</Eyebrow>
            <h2 className="mt-7 max-w-4xl font-display text-[clamp(3rem,4.8vw,5.5rem)] leading-[0.9] tracking-[-0.035em]">
              Já sabe o que vai levar?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              Encomende por telefone para levantar ou consulte a disponibilidade
              de entrega na Uber Eats.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href={business.phoneHref} className={buttonVariants()}>
              Ligar para encomendar <Phone size={16} />
            </a>
            <a
              href={business.uberEatsUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              Pedir na Uber Eats <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
