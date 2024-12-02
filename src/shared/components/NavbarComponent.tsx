import {
  Button
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { text: "Inicio", href: "#" , id:'inicio'},
  { text: "En vivo", href: "#", id:'envivo1' },
  { text: "Deportes", href: "#", id:'deportes' },
  { text: "Casino", href: "#", id:'casino' },
  { text: "En vivo", href: "#", id:'envivo2' },
  { text: "Lucky Jet", href: "#", id:'lickyjet' },
  { text: "Aviator", href: "#", id:'aviator' },
  { text: "JetX", href: "#", id: 'jetx' },
  { text: "Juegos rápidos", href: "#", id:'juegosrapidos' },
];

export const NavbarComponent = () => {
  const [currentTab, setCurrentTab] = useState('inicio')

  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#090f1e] border-b border-[#1E2329] p-2 flex justify-between items-center px-4">
        <div className="flex gap-2">
          <Button isIconOnly size="sm" variant="flat">
            🏠
          </Button>
          <Button isIconOnly size="sm" variant="flat">
            📱
          </Button>
          <Button className="bg-[#FFD700] text-black font-bold text-sm px-4 rounded-full">
            Free Money! →
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="flat" className="text-white">
            Promociones y bonos 🎁
          </Button>
          <Button size="sm" variant="flat" className="bg-green-500 text-white">
            Lucky Drive 🎲
          </Button>
          <div className="flex gap-2 items-center">
            <span className="text-white">ES</span>
            <Image
              src="/placeholder.svg?height=20&width=20"
              alt="Spanish"
              width={20}
              height={20}
            />
            <span>▼</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r relative from-[#1e283f] to-[#0f1627] flex justify-between p-2 rounded-xl">
        <div className="flex items-center">
          <Image
            src="https://v1.bundlecdn.com/img/1win-normal.d39105a87.svg"
            alt="1win"
            width={50}
            height={30}
            className="mr-2"
          />
          <div className="hidden sm:flex gap-5 px-4 absolute left-16 top-[11px]">
            {links.map((link, index) => (
              <div key={index} onClick={() => setCurrentTab(link.id)} className={`border-b-3 border-transparent hover:border-[#0859c6] duration-300 transition-all cursor-pointer pb-2 ${currentTab === link.id ? 'border-[#0859c6]' : ''}`}>
                <Link color="foreground" href={link.href} className="text-sm font-semibold">
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <Button
              variant="flat"
              size="sm"
              className="text-white mr-2 bg-[#1f2841] font-semibold"
            >
              Iniciar sesión
            </Button>
          </div>
          <div>
            <Button
              size="sm"
              variant="solid"
              className=" bg-gradient-to-r from-[#2cb865] to-[#099f4f] font-semibold"
            >
              Crear cuenta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
