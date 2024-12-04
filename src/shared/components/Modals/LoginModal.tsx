import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FaGoogle, FaVk, FaTelegram, FaYandex, FaOdnoklassniki, FaSteam } from "react-icons/fa";

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "login" | "register";
  setActiveTab: React.Dispatch<React.SetStateAction<"login" | "register">>;
}

export const LoginModal = ({ isOpen, onClose, setActiveTab }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" size="sm" placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col text-center">Iniciar sesión</ModalHeader>
        <ModalBody>
          {/* Redes sociales */}
          <div className="flex justify-between mb-4">
            {[FaGoogle, FaVk, FaTelegram, FaYandex, FaOdnoklassniki, FaSteam].map((Icon, index) => (
              <Button
                key={index}
                isIconOnly
                className="bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-600"
              >
                <Icon size={24} />
              </Button>
            ))}
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
            <Input placeholder="E-mail / teléfono" startContent={<AiOutlineMail />} type="text" className="w-full" />
            <Input placeholder="Contraseña" startContent={<AiOutlineLock />} type="password" className="w-full" />
          </div>

          {/* Olvidó contraseña */}
          <p className="text-right text-sm mt-2 cursor-pointer">
            <a onClick={() => setActiveTab("register")} className="text-blue-500 hover:underline">
              ¿Has olvidado la contraseña?
            </a>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold"
            onPress={onClose}
          >
            Entrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
