import { Bike, Clock3, Phone } from "lucide-react";
import { business } from "@/data/business";
import { Container } from "@/components/shared";
const info = [
  {
    label: "Takeaway",
    icon: Phone,
    content: (
      <>
        <span>Encomendas por telefone</span>
        <a className="info-main" href={business.phoneHref}>
          {business.phoneDisplay}
        </a>
      </>
    ),
  },
  {
    label: "Horário",
    icon: Clock3,
    content: (
      <>
        <span>{business.hours.open}</span>
        <strong className="info-main">
          {business.hours.lunch} · {business.hours.dinner}
        </strong>
      </>
    ),
  },
  {
    label: "Delivery",
    icon: Bike,
    content: (
      <>
        <span>Entrega através da</span>
        <a
          className="info-main"
          href={business.uberEatsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Uber Eats
        </a>
      </>
    ),
  },
];
export function BusinessInfo() {
  return (
    <section aria-label="Informação rápida" className="border-y border-line">
      <Container className="grid p-0 md:grid-cols-3 md:px-8 xl:px-12">
        {info.map(({ label, icon: Icon, content }, i) => (
          <div
            key={label}
            className={`flex gap-4 px-5 py-7 md:px-7 md:py-9 ${i ? "border-t border-line md:border-l md:border-t-0" : ""}`}
          >
            <Icon className="mt-1 shrink-0 text-accent" size={18} />
            <div className="flex min-w-0 flex-col gap-1 text-sm text-muted">
              <span className="mb-1 text-[10px] font-bold uppercase tracking-[.18em] text-accent">
                {label}
              </span>
              {content}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
