import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { BsFlagFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { LoginModalProps } from "./LoginModal";

export const RegisterModal = ({ isOpen, onClose, setActiveTab }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" size="sm" placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col text-center">
          Creación de cuenta
        </ModalHeader>
        <ModalBody>
          {/* Formulario de registro */}
          <div className="space-y-4">
            <Select placeholder="Selecciona una moneda" className="w-full">
              <SelectItem key="COP">Peso colombiano (COP)</SelectItem>
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
              <Input startContent={<FaGift className="text-red-500" />} placeholder="Código promocional (opcional)" className="w-full" />
            </div>
            <Checkbox color="success" size="sm" defaultSelected>
              Estoy familiarizado y de acuerdo con las{" "}
              <a className="text-blue-500 underline">
                condiciones del acuerdo de uso del sitio
              </a>
            </Checkbox>
            <p className="text-right text-sm mt-2 cursor-pointer">
              <a onClick={() => setActiveTab("login")} className="text-blue-500 underline">
                Iniciar Sesion
              </a>
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
            onPress={onClose}
          >
            Crear cuenta
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
