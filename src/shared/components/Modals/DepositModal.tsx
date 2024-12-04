import {
  Accordion,
  AccordionItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
} from "@nextui-org/react";
import { LoginModalProps } from "./LoginModal";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const DepositModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      size="md"
      placement="center"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col text-center">
          Metodos de pago
        </ModalHeader>
        <ModalBody>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Metodo 1">
              <div className="flex flex-col items-center w-full ">
                <Image
                  src={"/qrWalletUsdt.jpg"}
                  alt=""
                  width={200}
                  height={200}
                />
                <div
                  className="my-4"
                  onClick={() => {
                    toast.success("Wallet copiada");
                  }}
                >
                  <h1 className="font-bold mb-2 max-lg:text-xs">Mi Wallet de USDT:</h1>
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
            <AccordionItem key="2" aria-label="Accordion 2" title="Link de Trust">
              <div className="my-4">
                <h1 className="font-bold mb-2">Mi Wallet de USDT:</h1>
                <Link
                  href={
                    "https://link.trustwallet.com/send?coin=20000714&address=0xFb3eDCA7041FD5E8F9e09F652C5f06bBa1D725Ba&token_id=0x55d398326f99059fF775485246999027B3197955"
                  }
                  className="font-semibold hover:underline text-blue-600 flex items-center space-x-2"
                  target="_blank"
                >
                  <h1 className="">Link</h1>
                  <BsArrowRight/>
                </Link>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Por Nequi">
            <div className="flex flex-col items-center w-full ">
                <Image
                  src={"/QrNequi.jpg"}
                  alt=""
                  width={200}
                  height={200}
                />
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
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
