import {
  Button
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SelectComponent } from "./SelectComponent";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import { CiGift } from "react-icons/ci";
import { BsFillPhoneFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

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
      <div className="bg-[#090f1e] border-b border-[#1E2329]  flex justify-between items-center">
        <div className="flex gap-2">
          <TbLock size={25} className="bg-[#1e283f] p-1 rounded-lg"/>
          <MdOutlinePhoneIphone size={25} className="bg-[#1e283f] p-1 rounded-lg"/>
          |
          <Button className="bg-[#FFD700] text-black font-bold text-sm px-4 !h-[1.5rem] rounded-full">
            Free Money! →
          </Button>
        </div>
        <div className="flex max-sm:hidden items-center gap-4">
          <Button size="sm" variant="flat" className="text-white text-xs !h-[1.7rem] w-[11.5rem] text-end">
            <CiGift size={28} className="rounded-full left-0 absolute bg-gradient-to-r from-[#cb66ff] to-[#85a7ff] p-1"/>
            <h1 className="text-end w-full">Promociones y bonos</h1>
          </Button>
          <Button size="sm" variant="flat" className="text-white text-xs !h-[1.7rem] w-[11.5rem] text-end">
            <BsFillPhoneFill size={25} className="rounded-full left-0 absolute bg-gradient-to-r from-[#8ad876] to-[#16eb32] p-1"/>
            <h1 className="text-end w-full">Lucky Drive</h1>
            <Image
            src="https://d16q5vvir3f28d.cloudfront.net/raffle-novermber-action-updated/headerLink.png"
            alt="lambo"
            width={50}
            height={30}
          />
          </Button>
            <SelectComponent/>
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
              className="text-white mr-2 px-4 bg-[#1f2841] font-semibold"
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
              <BiPlus size={20} className="mr-2 rounded-full bg-gradient-to-tr from-[#ade28a] to-[#2cb865] p-1"/>
              Crear cuenta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
