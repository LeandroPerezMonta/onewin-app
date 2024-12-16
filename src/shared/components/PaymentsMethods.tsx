"use client";

import { Card, CardBody, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const banks = [
  {
    name: "Bancolombia",
    logo: "/bancolombia.png",
    qr: "/bancolombiaQR.jpg"
  },
  {
    name: "Nequi",
    logo: "/nequi.png",
    qr: "/nequiQR.jpg"
  },
  {
    name: "Davivienda",
    logo: "/davivienda.png",
    qr: "/daviviendaQR.jpg"
  },
  {
    name: "Daviplata",
    logo: "/daviplata.png",
    qr: "/daviplataQR.jpg"
  },
  {
    name: "Usdt",
    logo: "/usdt.png",
    qr: "/usdtQR.jpg"
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function PaymentMethods() {
  const [selectedBank, setSelectedBank] = useState<{ name: string; logo: string; qr: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (bank: { name: string; logo: string; qr: string }) => {
    setSelectedBank(bank);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBank(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {banks.map((bank) => (
          <motion.div key={bank.name} variants={item}>
            <Card isPressable className="w-full" onClick={() => openModal(bank)}>
              <CardBody className="flex flex-row items-center gap-3 p-4 bg-gradient-to-r from-[#1e283f] to-[#0f1627] text-white">
                <motion.div
                  className="relative h-10 w-10 overflow-hidden rounded-md bg-background"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </motion.div>
                <span className="font-medium">{bank.name}</span>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {selectedBank && (
        <Modal isOpen={isModalOpen} onClose={closeModal} placement="center">
          <ModalContent>
            <ModalHeader className="text-center">
              {selectedBank.name} QR Code
            </ModalHeader>
            <ModalBody className="flex justify-center items-center pb-8">
              <Image
                src={selectedBank.qr}
                alt={`${selectedBank.name} QR code`}
                width={300}
                height={300}
                className="object-contain"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
