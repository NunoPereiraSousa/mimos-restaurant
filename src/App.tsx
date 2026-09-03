import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BusinessInfo } from "@/components/sections/BusinessInfo";
import { MenuSection } from "@/components/sections/MenuSection";
import { OrderSection } from "@/components/sections/OrderSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BusinessInfo />
        <MenuSection />
        <OrderSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
