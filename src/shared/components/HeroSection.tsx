'use client'

import { Button, Card } from "@nextui-org/react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <div className="grid grid-cols-5 gap-4 mb-8">
      {/* Main hero card */}
      <Card className="col-span-3 bg-gradient-to-br from-[#0B0E17] to-[#1E2329] p-8 relative overflow-hidden rounded-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">
            Dese prisa
            <br />y reciba su primer
            <br />bono de +500%
            <br />para depósito
          </h1>
          <Button
            size="lg"
            className="bg-white text-black font-bold rounded-full px-8"
          >
            Registrarse
          </Button>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2"
        >
          <div className="text-[120px] font-bold text-[#FFD700] glow-text">
            +500%
          </div>
        </motion.div>

        {/* Animated floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 right-1/4 text-4xl"
        >
          🎲
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/4 right-1/3 text-4xl"
        >
          🎁
        </motion.div>
      </Card>

      {/* Promotional cards */}
      <div className="space-x-4 flex items-center h-full w-full col-span-2">
        <Card className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl h-full w-full">
          <h2 className="text-2xl font-bold text-white">
            Cashback
            <br />
            hasta 30% en
            <br />
            el casino
          </h2>
          <Button className="bg-white text-black font-bold rounded-full px-6">
            Ir al casino
          </Button>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl h-full w-full">
          <h2 className="text-2xl font-bold text-white mb-4">
            Bono de
            <br />
            +500%
          </h2>
          <Button className="bg-white text-black font-bold rounded-full px-6">
            Registro
          </Button>
        </Card>
      </div>
    </div>
  )
}
