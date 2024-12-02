'use client'

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { motion } from "framer-motion"

const games = [
  {
    title: "Lucky Jet",
    image: "/placeholder.svg?height=200&width=200",
    provider: "1win Games",
  },
  {
    title: "Mines 1win",
    image: "/placeholder.svg?height=200&width=200",
    provider: "1win Games",
  },
  {
    title: "Crash",
    image: "/placeholder.svg?height=200&width=200",
    provider: "1win Games",
  },
  {
    title: "Rocket Queen",
    image: "/placeholder.svg?height=200&width=200",
    provider: "1win Games",
  },
]

export default function GamesGrid() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=30&width=30" alt="1win" width={30} height={30} />
          <h2 className="text-xl font-bold text-white">1win games</h2>
        </div>
        <button className="text-blue-500">Todos</button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#1E2329] cursor-pointer hover:scale-105 transition-transform rounded-xl overflow-hidden">
              <CardBody className="p-0">
                <Image
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start p-4">
                <p className="text-sm text-gray-400">{game.provider}</p>
                <h3 className="text-lg font-bold text-white">{game.title}</h3>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

