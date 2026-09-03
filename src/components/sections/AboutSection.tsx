import grillPlatter from "@/assets/mimos/uber-grill-platter.jpg";
import { Container, Eyebrow } from "@/components/shared";

const details = [
  "Cozinha portuguesa",
  "Preparado diariamente",
  "Takeaway",
  "Delivery",
];

export function AboutSection() {
  return (
    <section id="sobre" className="border-y border-line py-20 md:py-28">
      <Container>
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20 2xl:gap-28">
          <figure className="image-wrap min-w-0 aspect-[4/3] lg:aspect-[5/4]">
            <img
              src={grillPlatter}
              alt="Seleção de carnes grelhadas preparada pelo Mimo’s"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="min-w-0 max-w-3xl">
            <Eyebrow>Sobre nós</Eyebrow>
            <h2 className="section-title mt-7">
              Comida simples.
              <br />
              <em>Feita com cuidado.</em>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              No Mimo’s, a cozinha portuguesa encontra a simplicidade de uma boa
              refeição preparada todos os dias. Pratos para levar, churrasco e
              opções para receber em casa.
            </p>
            <div className="mt-9 grid grid-cols-2 border-t border-line">
              {details.map((detail) => (
                <p
                  className="border-b border-line py-4 text-sm font-semibold"
                  key={detail}
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
