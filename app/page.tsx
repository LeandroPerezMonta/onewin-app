'use client'

import GameCategories from "@/src/shared/components/GameCategories"
import GamesGrid from "@/src/shared/components/GamesGrid"
import HeroSection from "@/src/shared/components/HeroSection"
import { NavbarComponent } from "@/src/shared/components/NavbarComponent"
import PokerSection from "@/src/shared/components/PokerSection"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#090f1e] p-3">
      <NavbarComponent/>
      <div className=" pb-8 pt-4 w-full">
        <HeroSection />
        <GameCategories />
        <GamesGrid />
        <PokerSection />
      </div>
    </div>
  )
}