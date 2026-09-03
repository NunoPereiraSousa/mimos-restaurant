import { ArrowDownRight } from "lucide-react";

import hero from "@/assets/mimos/uber-grill-platter.jpg";
import { Container, Eyebrow } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden">
      <Container>
        <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-w-0 flex-col justify-center py-14 lg:py-20 lg:pr-14 xl:py-24 2xl:pr-24">
            <Eyebrow>Mimo’s Take Away · Vila Nova de Gaia</Eyebrow>
            <h1 className="mt-7 max-w-[760px] font-display text-[clamp(3.25rem,5.1vw,6rem)] leading-[0.88] tracking-[-0.04em]">
              Comida de casa, <em className="font-normal">feita todos</em> os
              dias.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Cozinha portuguesa, pratos preparados diariamente e o frango de
              churrasco que já conhece. Para levantar no Mimo’s ou receber em
              casa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#ementa" className={buttonVariants()}>
                Ver ementa
              </a>
              <a
                href="#encomendar"
                className={buttonVariants({ variant: "outline" })}
              >
                Encomendar <ArrowDownRight size={16} />
              </a>
            </div>
          </div>
          <div className="image-wrap relative min-h-[420px] lg:min-h-[640px]">
            <img
              src={hero}
              alt="Travessas de frango, costelinha e salsicha de churrasco do Mimo’s"
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-5 left-5 bg-dark/90 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Takeaway · Delivery
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
