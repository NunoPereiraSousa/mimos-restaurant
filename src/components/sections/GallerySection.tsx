import francesinha from "@/assets/mimos/uber-francesinha.webp";
import grillPlatter from "@/assets/mimos/uber-grill-platter.jpg";
import pizza from "@/assets/mimos/uber-pizza.webp";
import preparedDish from "@/assets/mimos/gallery-1.jpg";
import breadedDish from "@/assets/mimos/gallery-2.jpg";
import ovenDish from "@/assets/mimos/gallery-4.jpg";
import { Container, Eyebrow } from "@/components/shared";

const images = [
  {
    src: grillPlatter,
    alt: "Travessas de frango, costelinha e salsicha de churrasco do Mimo’s",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: francesinha,
    alt: "Francesinha do menu Uber Eats do Mimo’s",
    className: "md:col-span-5",
  },
  {
    src: pizza,
    alt: "Pizza de frango do menu Uber Eats do Mimo’s",
    className: "md:col-span-5",
  },
  {
    src: preparedDish,
    alt: "Prato de carne com batata e legumes preparado pelo Mimo’s",
    className: "md:col-span-4",
  },
  {
    src: breadedDish,
    alt: "Prato preparado na cozinha do Mimo’s",
    className: "md:col-span-4",
  },
  {
    src: ovenDish,
    alt: "Especialidade de forno preparada pelo Mimo’s",
    className: "md:col-span-4",
  },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Da nossa cozinha</Eyebrow>
            <h2 className="section-title mt-7">
              Aquilo que fazemos,
              <br />
              como fazemos.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">
            Uma seleção de pratos disponíveis no menu Mimo’s da Uber Eats.
          </p>
        </div>
        <div className="grid min-w-0 gap-4 md:auto-rows-[280px] md:grid-cols-12">
          {images.map((image) => (
            <figure
              key={image.src}
              className={`image-wrap group min-w-0 aspect-[4/3] overflow-hidden md:aspect-auto ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block h-full w-full min-w-0 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
