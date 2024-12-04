"use client";

import Footer from "@/src/shared/components/Footer";
import GameCategories from "@/src/shared/components/GameCategories";
import GamesGrid from "@/src/shared/components/GamesGrid";
import HeroSection from "@/src/shared/components/HeroSection";
import { ModalForm } from "@/src/shared/components/ModalForm";
import { NavbarComponent } from "@/src/shared/components/NavbarComponent";
import PokerSection from "@/src/shared/components/PokerSection";
import { Accordion, AccordionItem, Tooltip, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { toast } from "react-toastify";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState<"login" | "register" | "deposit">(
    "register"
  );

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
  };

  return (
    <div className="min-h-screen w-full bg-[#090f1e] p-3">
      <NavbarComponent
        handleOpen={handleOpen}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <div className={`pb-8 pt-4 w-full ${currentUser ? 'mb-[18rem]' : ''}`}>
        {currentUser ? (
          <div className="mt-8">
            <div className="w-full justify-center text-center "><h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#ececec] to-[#5d28cf]  bg-clip-text text-transparent font-inter">Recarga tu saldo</h1></div>
            <div className="w-full justify-center text-center text-white"><h1 className="text-xl font-bold mb-4"></h1>Se te Retornará el 200% de tu Recarga 🥳</div>
            <Accordion defaultSelectedKeys={["1", "2", "3"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="USDT Wallet" >
            <div className="flex flex-col items-center w-full text-white ">
                <Image src={"/QrNequi.jpg"} alt="" width={300} height={300} />
                <div
                  className="my-4"
                  onClick={() => {
                    toast.success("Wallet copiada");
                  }}
                >
                  <h1 className="font-bold mb-2">Por Nequi:</h1>
                </div>
              </div>
              
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Link de Trust"
            >
              <div className="my-4 flex text-2xl flex-col w-full items-center text-white">
                <h1 className="font-bold mb-2">Mi Wallet de USDT:</h1>
                <Link
                  href={
                    "https://link.trustwallet.com/send?coin=20000714&address=0xFb3eDCA7041FD5E8F9e09F652C5f06bBa1D725Ba&token_id=0x55d398326f99059fF775485246999027B3197955"
                  }
                  className="font-semibold hover:underline text-blue-600 flex items-center space-x-2"
                  target="_blank"
                >
                  <h1 className="">Link</h1>
                  <BsArrowRight />
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Nequi">
            <div className="flex flex-col items-center w-full ">
                <Image
                  src={"/qrWalletUsdt.jpg"}
                  alt=""
                  width={300}
                  height={300}
                />
                <div
                  className="my-4 text-center text-white"
                  onClick={() => {
                    toast.success("Wallet copiada");
                  }}
                >
                  <h1 className="font-bold mb-2 max-lg:text-xs">
                    Mi Wallet de USDT:
                  </h1>
                  <CopyToClipboard
                    text={"0xFb3eDCA7041FD5E8F9e09F652C5f06bBa1D725Ba"}
                  >
                    <div>
                      <Tooltip showArrow={true} content="Copiar Wallet">
                        <div>
                          <button className=" bg-default p-4 rounded-xl max-lg:text-xs">
                            0xFb3eDCA7041FD5E8F9e09F652C5f06bBa1D725Ba
                          </button>
                        </div>
                      </Tooltip>
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
          </div>
        ) : (
          <>
            <HeroSection
              currentUser={currentUser}
              setActiveTab={setActiveTab}
              handleOpen={handleOpen}
            />
            <GameCategories
              currentUser={currentUser}
              setActiveTab={setActiveTab}
              handleOpen={handleOpen}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <GamesGrid
                currentUser={currentUser}
                setActiveTab={setActiveTab}
                handleOpen={handleOpen}
              />
              <PokerSection
                currentUser={currentUser}
                setActiveTab={setActiveTab}
                handleOpen={handleOpen}
              />
            </div>
          </>
        )}
      </div>
      <Footer />
      <ModalForm
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
}
