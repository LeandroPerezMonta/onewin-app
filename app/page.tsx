'use client'

import Footer from "@/src/shared/components/Footer"
import GameCategories from "@/src/shared/components/GameCategories"
import GamesGrid from "@/src/shared/components/GamesGrid"
import HeroSection from "@/src/shared/components/HeroSection"
import { NavbarComponent } from "@/src/shared/components/NavbarComponent"
import PokerSection from "@/src/shared/components/PokerSection"

export default function Home() {

  return (
    <div className="min-h-screen w-full bg-[#090f1e] p-3">
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevLbtKDFTucnMI7furOLaXHfp4CBN2-HL5MaIeJT1XbnjWhg/viewform?embedded=true" width="640" height="761" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5CklNaVGoec?si=2sim6tuxwGBsfuW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <NavbarComponent />
      <div className=" pb-8 pt-4 w-full">
        <HeroSection />
        <GameCategories />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GamesGrid />
          <PokerSection />
        </div>
      </div>
      <Footer/>
    </div>
  );
}