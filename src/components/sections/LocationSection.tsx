import { Banknote, CarFront, MapPin, CreditCard } from "lucide-react";
import { business } from "@/data/business";
import { Container, Eyebrow } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
export function LocationSection() {
  return (
    <section id="contactos" className="bg-[#efe6d8] py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.3fr_.7fr] lg:gap-24">
          <div>
            <Eyebrow>Visite-nos</Eyebrow>
            <h2 className="section-title mt-7">
              Estamos em Vila Nova de Gaia.
            </h2>
            <div className="mt-10 flex gap-4">
              <MapPin className="mt-1 shrink-0 text-accent" />
              <p className="text-lg leading-8">
                {business.address.street}
                <br />
                {business.address.postal}
                <br />
                {business.address.country}
              </p>
            </div>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({ variant: "default" })} mt-8`}
            >
              Ver no mapa
            </a>
          </div>
          <div className="border-t border-foreground/25">
            <div className="grid grid-cols-2 border-b border-foreground/20 py-7">
              <p className="label">Segunda</p>
              <p className="text-right font-display text-2xl">Encerrado</p>
            </div>
            <div className="grid grid-cols-2 border-b border-foreground/20 py-7">
              <p className="label">Terça–Domingo</p>
              <p className="text-right font-display text-2xl leading-8">
                {business.hours.lunch} / {business.hours.dinner}
              </p>
            </div>
            <div className="space-y-4 pt-7 text-sm">
              <p className="flex items-center gap-3">
                <CarFront size={18} className="text-accent" />
                Estacionamento gratuito disponível
              </p>
              <p className="flex items-center gap-3">
                <Banknote size={18} className="text-accent" />
                Pagamento em dinheiro
              </p>
              <p className="flex items-center gap-3">
                <CreditCard size={18} className="text-accent" />
                Pagamento com cartão de débito
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
