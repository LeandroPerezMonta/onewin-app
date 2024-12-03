import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { BsFlagFill } from 'react-icons/bs'
import { FaGift, FaGoogle, FaOdnoklassniki, FaSteam, FaTelegram, FaVk, FaYandex } from 'react-icons/fa'

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "login" | "register";
  setActiveTab: React.Dispatch<React.SetStateAction<"login" | "register">>;
}


export const ModalForm = ({isOpen, onClose, activeTab, setActiveTab}:ModalFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col text-center">
            {activeTab === "login" ? "Iniciar sesión" : "Creación de cuenta"}
          </ModalHeader>
          <ModalBody>
            {/* Tabs */}
            <div className="flex justify-between mb-4">
              <Button
                className={`w-1/2 ${
                  activeTab === "login"
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-gray-500 border-b border-gray-300"
                }`}
                onPress={() => setActiveTab("login")}
              >
                Iniciar sesión
              </Button>
              <Button
                className={`w-1/2 ${
                  activeTab === "register"
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-gray-500 border-b border-gray-300"
                }`}
                onPress={() => setActiveTab("register")}
              >
                Crear cuenta
              </Button>
            </div>

            {/* Contenido de cada tab */}
            {activeTab === "login" ? (
              <>
                {/* Redes sociales */}
                <div className="flex justify-between mb-4">
                  {[FaGoogle, FaVk, FaTelegram, FaYandex, FaOdnoklassniki, FaSteam].map(
                    (Icon, index) => (
                      <Button
                        key={index}
                        isIconOnly
                        className="bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-600"
                      >
                        <Icon size={24} />
                      </Button>
                    )
                  )}
                </div>

                {/* Separador */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-default-50 px-2 text-gray-500">o</span>
                  </div>
                </div>

                {/* Formulario */}
                <div className="space-y-4">
                  <Input
                    placeholder="E-mail / teléfono"
                    startContent={<AiOutlineMail />}
                    type="text"
                    className="w-full"
                  />
                  <Input
                    placeholder="Contraseña"
                    startContent={<AiOutlineLock />}
                    type="password"
                    className="w-full"
                  />
                </div>

                {/* Olvidó contraseña */}
                <p className="text-right text-sm mt-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    ¿Has olvidado la contraseña?
                  </a>
                </p>
              </>
            ) : (
              <>
                {/* Formulario de registro */}
                <div className="space-y-4">
                  <Select
                    placeholder="Selecciona una moneda"
                    className="w-full"
                    // defaultValue="COP"
                  >
                    <SelectItem key="COP">Peso colombiano (COP)</SelectItem>
                    <SelectItem key="USD">Dólar estadounidense (USD)</SelectItem>
                  </Select>
                  <Input
                    placeholder="Número de teléfono"
                    startContent={<BsFlagFill className="text-red-500" />}
                    type="tel"
                    className="w-full"
                  />
                  <Input
                    placeholder="Correo electrónico"
                    startContent={<AiOutlineMail />}
                    type="email"
                    className="w-full"
                  />
                  <Input
                    placeholder="Contraseña"
                    startContent={<AiOutlineLock />}
                    type="password"
                    className="w-full"
                  />
                  <div className="flex items-center space-x-2">
                    <FaGift className="text-red-500" />
                    <Input placeholder="Código promocional" className="w-full" />
                  </div>
                  <Checkbox color="success" size="sm" defaultSelected>
                    Estoy familiarizado y de acuerdo con las{" "}
                    <a href="#" className="text-blue-500 underline">
                      condiciones del acuerdo de uso del sitio
                    </a>
                  </Checkbox>
                </div>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              className={`w-full ${
                activeTab === "login"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700"
                  : "bg-green-500 hover:bg-green-600"
              } text-white font-semibold`}
              onPress={onClose}
            >
              {activeTab === "login" ? "Entrar" : "Crear cuenta"}
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}
