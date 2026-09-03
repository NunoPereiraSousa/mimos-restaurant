import francesinha from "@/assets/mimos/uber-francesinha.webp";
import grillPlatter from "@/assets/mimos/uber-grill-platter.jpg";
import pizzaHam from "@/assets/mimos/uber-pizza-ham.webp";
import pizzaPepperoni from "@/assets/mimos/uber-pizza-pepperoni.webp";
import pizzaVegetable from "@/assets/mimos/uber-pizza-vegetable.webp";
import pizza from "@/assets/mimos/uber-pizza.webp";
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
    src: pizzaHam,
    alt: "Pizza de fiambre e cogumelos do menu Uber Eats do Mimo’s",
    className: "md:col-span-4",
  },
  {
    src: pizzaPepperoni,
    alt: "Pizza de pepperoni do menu Uber Eats do Mimo’s",
    className: "md:col-span-4",
  },
  {
    src: pizzaVegetable,
    alt: "Pizza de legumes do menu Uber Eats do Mimo’s",
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
                className="h-full min-w-0 max-w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
