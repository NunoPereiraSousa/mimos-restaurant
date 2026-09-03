export const business = {
  name: "Mimo's Take Away",
  phone: "+351 227 128 297",
  phoneDisplay: "227 128 297",
  phoneHref: "tel:+351227128297",
  email: "Teixeiravaz1972@hotmail.com",
  address: {
    street: "Rua Jardim 233",
    postal: "4405-827 Vila Nova de Gaia",
    country: "Portugal",
  },
  hours: {
    closed: "Segunda — Encerrado",
    open: "Terça–Domingo",
    lunch: "11:00–14:00",
    dinner: "18:00–21:00",
  },
  menuUrl:
    "https://cdn.website.dish.co/media/b6/21/1883840/Mimos-Take-Away-Menu.pdf",
  uberEatsUrl:
    "https://www.ubereats.com/pt-en/store/takeaway-mimos/RWwRaePqS6meS7d0OXxHng/8c8a9021-d40c-46c3-a0f2-5f7653b953a1",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Jardim+233%2C+4405-827+Vila+Nova+de+Gaia%2C+Portugal",
} as const;
export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Ementa", href: "#ementa" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contactos", href: "#contactos" },
] as const;
