import { Hero } from "./components/Hero";
import { EventInfo } from "./components/EventInfo";
import { Activities } from "./components/Activities";
import { NostalgiaGallery } from "./components/NostalgiaGallery";
import { PicnicCoin } from "./components/PicnicCoin";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import flyer1 from "figma:asset/6049272ceedb40a90b9f57f4c4580525c9929e1f.png";
import flyer2 from "figma:asset/b687ff8b8dc0ade77804cef27b83c2e94b6b83c2.png";
import flyer3 from "figma:asset/fdf8c684147b24a3e474a7f7e080a34b480f353d.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a1942] via-[#6b2a5c] to-[#2d0e29] overflow-x-hidden">
      <Hero />
      <EventInfo />
      <Activities />
      <NostalgiaGallery />
      <PicnicCoin />
      <CtaSection />
      <Footer />
    </div>
  );
}
