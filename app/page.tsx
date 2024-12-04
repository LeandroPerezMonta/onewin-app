'use client'

import Footer from "@/src/shared/components/Footer"
import GameCategories from "@/src/shared/components/GameCategories"
import GamesGrid from "@/src/shared/components/GamesGrid"
import HeroSection from "@/src/shared/components/HeroSection"
import { ModalForm } from "@/src/shared/components/ModalForm"
import { NavbarComponent } from "@/src/shared/components/NavbarComponent"
import PokerSection from "@/src/shared/components/PokerSection"
import { useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react"
import Cookies from "js-cookie";

export default function Home() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [activeTab, setActiveTab] = useState<"login" | "register" | "deposit">("register");

  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const loginCookie = Cookies.get("loginCookie");
    if (loginCookie) {
      const { username } = JSON.parse(loginCookie);
      if (username) {
        setCurrentUser(username);
      }
    }
  }, []);

  const handleOpen = () => {
    onOpen();
  }

  return (
    <div className="min-h-screen w-full bg-[#090f1e] p-3">
      <NavbarComponent handleOpen={handleOpen} setActiveTab={setActiveTab} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <div className=" pb-8 pt-4 w-full">
        <HeroSection currentUser={currentUser} setActiveTab={setActiveTab} handleOpen={handleOpen}/>
        <GameCategories currentUser={currentUser} setActiveTab={setActiveTab} handleOpen={handleOpen}/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GamesGrid currentUser={currentUser} setActiveTab={setActiveTab} handleOpen={handleOpen}/>
          <PokerSection currentUser={currentUser} setActiveTab={setActiveTab} handleOpen={handleOpen}/>
        </div>
      </div>
      <Footer/>
      <ModalForm activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isOpen} onClose={onClose}/>
    </div>
  );
}