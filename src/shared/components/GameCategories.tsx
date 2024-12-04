'use client'
import { Card, CardBody } from "@nextui-org/react"
import { motion } from "framer-motion"
import { GenericProps } from "./HeroSection"

const categories = [
  {
    title: "TVBET",
    subtitle: "Juegos en vivo 24/7",
    icon: "🎮",
  },
  {
    title: "Casino",
    subtitle: "Más de 3000 juegos",
    icon: "🎰",
  },
  {
    title: "Live-Games",
    subtitle: "Distribuidores en vivo",
    icon: "🎲",
  },
  {
    title: "Poker",
    subtitle: "Torneos gratis",
    icon: "♠️",
  },
]

export default function GameCategories({currentUser, setActiveTab, handleOpen}:GenericProps) {

  const handleOpenModal = () => {
    handleOpen();
    if (currentUser) {
      setActiveTab("deposit");
    } else {
      setActiveTab("register");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8 max-lg:mt-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className="bg-gradient-to-r from-[#1e283f] to-[#0f1627] cursor-pointer hover:scale-105 transition-transform rounded-xl w-full"
            isPressable
            onClick={() => handleOpenModal()}
          >
            <CardBody className="flex flex-row-reverse items-center gap-4 p-4 w-full justify-between">
              <div className="text-3xl">{category.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                <p className="text-sm text-gray-400">{category.subtitle}</p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

