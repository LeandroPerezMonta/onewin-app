'use client'

import { Button, Card } from "@nextui-org/react"
import { motion } from "framer-motion"

export default function PokerSection() {
  return (
    <Card className="bg-gradient-to-r from-[#1E2329] to-[#0B0E17] overflow-hidden rounded-xl">
      <div className="flex justify-between items-center p-8">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Poker</h2>
            <p className="text-gray-400 mb-6">Ven, juega y gana</p>
            <Button
              size="lg"
              className="bg-purple-600 text-white font-bold rounded-full px-8"
            >
              Obtener bono
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64"
        >
          {/* Animated playing cards */}
          <motion.div
            animate={{
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="absolute -right-8 -top-12 transform rotate-12 text-6xl">
                ♠️
              </div>
              <div className="absolute -left-8 -bottom-12 transform -rotate-12 text-6xl">
                ♥️
              </div>
              <div className="text-8xl font-bold text-white">A</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Card>
  )
}

