import { Menu } from "lucide-react";
import { business, nav } from "@/data/business";
import { Container } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
export function Header() {
  return (
    <header className="relative z-40 border-b border-line bg-background">
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <a href="#inicio" aria-label="Mimo's — início" className="leading-none">
          <span className="block font-display text-[30px] tracking-[-.03em]">
            MIMO’S
          </span>
          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.28em] text-accent">
            Take Away
          </span>
        </a>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="link-line text-[13px] font-semibold"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href={business.phoneHref}
          className={`${buttonVariants({ variant: "outline" })} hidden lg:inline-flex`}
        >
          {business.phoneDisplay}
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Abrir menu"
              className="rounded-full border border-foreground/30 p-3 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-16 flex h-[calc(100%-4rem)] flex-col">
              <nav className="flex flex-col">
                {nav.map((i) => (
                  <SheetClose asChild key={i.href}>
                    <a
                      href={i.href}
                      className="border-b border-line py-5 font-display text-4xl"
                    >
                      {i.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <a
                href={business.phoneHref}
                className={`${buttonVariants()} mt-auto`}
              >
                Ligar · {business.phoneDisplay}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
