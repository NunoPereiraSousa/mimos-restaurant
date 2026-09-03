import { ArrowUpRight, Phone } from "lucide-react";

import food from "@/assets/mimos/uber-francesinha.webp";
import { Container, Eyebrow } from "@/components/shared";
import { business } from "@/data/business";

export function OrderSection() {
  return (
    <section id="encomendar" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Encomendar</Eyebrow>
            <h2 className="section-title mt-7">Em casa ou para levar.</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              Escolha como prefere receber o seu Mimo’s.
            </p>
            <div className="image-wrap mt-9 aspect-[4/3] max-w-xl">
              <img
                src={food}
                alt="Francesinha do menu Uber Eats do Mimo’s"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="self-end border-t border-line">
            <div className="order-row">
              <p className="order-index">01</p>
              <div>
                <h3>Levantar no Mimo’s</h3>
                <p>
                  Faça a sua encomenda por telefone e levante no nosso espaço.
                </p>
                <a href={business.phoneHref}>
                  Ligar para encomendar <Phone size={16} />
                </a>
                <strong>{business.phoneDisplay}</strong>
              </div>
            </div>
            <div className="order-row">
              <p className="order-index">02</p>
              <div>
                <h3>Receber em casa</h3>
                <p>
                  Peça através da Uber Eats e receba a sua refeição em casa. A
                  seleção e os preços de entrega estão disponíveis na
                  plataforma.
                </p>
                <a href={business.uberEatsUrl} target="_blank" rel="noreferrer">
                  Ver menu e pedir na Uber Eats <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
