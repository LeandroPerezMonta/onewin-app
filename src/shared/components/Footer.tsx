'use client'

import { Link, Image, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FaTelegram, FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { BsThreads } from 'react-icons/bs';
import { IoLanguage, IoAccessibility } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className=" text-gray-300 w-full">
      <div className=" w-full">
        {/* Logo */}
        <div className="mb-4 flex items-center">
        <Image
            src="https://v1.bundlecdn.com/img/1win-normal.d39105a87.svg"
            alt="1win"
            width={50}
            height={30}
            className="mr-2"
          />
          <div className="h-[0.1rem] w-full bg-gray-800 ml-4 rounded-full">
          </div>
        </div>

        {/* Support and Categories Grid */}
        <div className="flex flex-col md:flex-row items-start justify-between max-md:space-y-4 md:space-x-4  mb-12">
          {/* Support Section */}
            <div className="w-[12rem]">
              <h3 className="text-white mb-4">Soporte 24/7</h3>
              <p className="text-xs text-[#3a4c7a] mb-4">Si tienes dudas, ponte en contacto con nosotros</p>
            </div>
            <div className="space-y-2 text-[#3a4c7a]">
            <h3 className="text-[#3a4c7a] mb-4">Contacto de Soporte</h3>
              <div className=" flex items-center space-x-2">
                <div className="text-sm font-medium min-w-max">Soporte técnico</div>
                <Link href="mailto:support@1win.social" className="text-sm text-white">support@1win.social</Link>
              </div>
              <div className=" flex items-center space-x-2">
                <div className="text-sm font-medium min-w-max">Servicio de seguridad</div>
                <Link href="mailto:security@1win.social" className="text-sm text-white">security@1win.social</Link>
              </div>
              <div className=" flex items-center space-x-2">
                <div className="text-sm font-medium min-w-max">Propuestas comerciales</div>
                <Link href="mailto:business@1win.social" className="text-sm text-white">business@1win.social</Link>
              </div>
              <div className=" flex items-center space-x-2">
                <div className="text-sm font-medium min-w-max">Programa de afiliados</div>
                <Link href="mailto:partners@1w.run" className="text-sm text-white">partners@1w.run</Link>
              </div>
            </div>

          {/* Information Section */}
          <div className="text-white">
            <h1 className=" text-md mb-4 text-[#3a4c7a]">Información</h1>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-white min-w-max">Reglas</Link>
              <Link href="#" className="block text-sm text-white min-w-max">Promociones y bonos</Link>
              <Link href="#" className="block text-sm text-white min-w-max">Versión móvil</Link>
              <Link href="#" className="block text-sm text-white min-w-max">Programa de afiliados</Link>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white">
            <h3 className=" text-base mb-4">Categorías</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 ">
                <Link href="#" className="block text-sm text-white">En vivo</Link>
                <Link href="#" className="block text-sm text-white">Deportes</Link>
                <Link href="#" className="block text-sm text-white">Póker</Link>
                <Link href="#" className="block text-sm text-white">Casino</Link>
              </div>
              <div className="space-y-2 ">
                <Link href="#" className="block text-sm text-white">Promociones</Link>
                <Link href="#" className="block text-sm text-white">En vivo</Link>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className=" space-x-2 flex  justify-end">
            <div className="flex flex-col space-y-4 ">
              <Button
                variant="bordered"
                className="w-full h-[3.5rem] text-white"
              >
                Aplicación para iOS
              </Button>
              <Button
                variant="bordered"
                className="w-full h-[3.5rem] text-white"
              >
                Aplicación para Android
              </Button>
            </div>
            <Button
              variant="bordered"
              className="w-full text-white h-[8rem]"
            >
              para Windows
            </Button>
          </div>
        </div>
        <div className="h-[0.1rem] w-full bg-gray-800 mb-4 rounded-full"></div>

        {/* Social Media Icons */}
        <div className="flex gap-4 my-8">
          <Link href="#" className="text-2xl text-blue-400 hover:text-blue-300"><FaTelegram /></Link>
          <Link href="#" className="text-2xl text-red-500 hover:text-red-400"><FaYoutube /></Link>
          <Link href="#" className="text-2xl text-pink-500 hover:text-pink-400"><FaInstagram /></Link>
          <Link href="#" className="text-2xl text-blue-500 hover:text-blue-400"><FaFacebook /></Link>
          <Link href="#" className="text-2xl text-gray-400 hover:text-gray-300"><FaTwitter /></Link>
          <Link href="#" className="text-2xl text-green-500 hover:text-green-400"><FaWhatsapp /></Link>
          <Link href="#" className="text-2xl text-gray-400 hover:text-gray-300"><BsThreads /></Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 border-t border-gray-800 pt-4">
          <p>© 2024 1WIN. NextGen Development Labs Ltd (República de Seychelles). Todos los derechos reservados. El contenido de este sitio es propiedad exclusiva de NextGen Development Labs Ltd. La reproducción, modificación, distribución, publicación, transmisión o cualquier forma de copia no autorizada está estrictamente prohibida.</p>
        </div>

        {/* Certifications and Language Selector */}
        <div className=" hidden sm:flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <Image src="/cert1.png" alt="Certification 1" className="h-8" />
            <Image src="/cert2.png" alt="Certification 2" className="h-8" />
            <Image src="/cert3.png" alt="Certification 3" className="h-8" />
            <Image src="/cert4.png" alt="Certification 4" className="h-8" />
            <Image src="/cert5.png" alt="Certification 5" className="h-8" />
          </div>
          <div className="flex items-center gap-4">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="bg-[#1C2834] text-white"
                  startContent={<IoLanguage className="text-xl" />}
                >
                  ES
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Language selection">
                <DropdownItem key="es">Español</DropdownItem>
                <DropdownItem key="en">English</DropdownItem>
                {/* Add more language options as needed */}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-[#1C2834] text-white"
              startContent={<IoAccessibility className="text-xl" />}
            >
              <span className="sr-only">Accessibility options</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

