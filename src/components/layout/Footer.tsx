import { business, nav } from "@/data/business";
import { Container } from "@/components/shared";
export function Footer() {
  return (
    <footer className="bg-[#160d09] py-16 text-[#f7f2e8] md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-4xl">MIMO’S</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[.24em] text-accent">
              Take Away
            </p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Cozinha portuguesa para levar, em Vila Nova de Gaia.
            </p>
          </div>
          <div>
            <p className="footer-label">Morada</p>
            <p>
              {business.address.street}
              <br />
              {business.address.postal}
            </p>
            <a
              className="mt-4 inline-block link-line underline"
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver no mapa
            </a>
          </div>
          <div>
            <p className="footer-label">Horário</p>
            <p>
              {business.hours.open}
              <br />
              {business.hours.lunch}
              <br />
              {business.hours.dinner}
            </p>
            <p className="mt-3 text-white/50">Segunda encerrado</p>
          </div>
          <div>
            <p className="footer-label">Contactos</p>
            <a className="block" href={business.phoneHref}>
              {business.phoneDisplay}
            </a>
            <a
              className="mt-2 block break-all text-white/65"
              href={`mailto:${business.email}`}
            >
              {business.email}
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-7 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mimo’s Take Away</p>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Navegação de rodapé"
          >
            {nav.map((i) => (
              <a href={i.href} key={i.href} className="hover:text-white">
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
