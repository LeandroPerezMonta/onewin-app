'use client'

import { Button, Card } from "@nextui-org/react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:mb-8 f-full 2xl:h-[410px]">
      {/* Main hero card */}
      <Card className="lg:col-span-3 bg-gradient-to-br from-[#0B0E17]  to-[#1E2329] p-8 relative overflow-hidden rounded-3xl h-[25rem] sm:h-[19rem] 2xl:h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">
            Dese prisa
            <br />y reciba su primer
            <br />
            bono de +500%
            <br />
            para depósito
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
      <div className="relative max-sm:space-y-4 lg:space-x-4 flex flex-col lg:flex-row items-center h-full w-full col-span-1 lg:col-span-2">
        <Card className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-3xl h-[25rem] sm:h-[19rem] 2xl:h-full w-full">
          <Image
            src={"https://imgproxy.v1.bundlecdn.com/unsafe/banner_desktop_main_2x/plain/https://v1.bundlecdn.com/img/cashback.f5a548e68-399.png@png"}
            alt="Cashback"
            className="absolute "
            width={400}
            height={300}
          />
          <div className="z-[1] h-full w-full flex flex-col justify-between items-center px-4">
            <div className="pt-4">
              <h2 className="text-3xl 2xl:text-[43px] leading-10 font-bold text-white">
                Cashback hasta 30% en el casino
              </h2>
            </div>
            <Button className="bg-white text-black w-full p-6">
              <h2 className="text-xl 2xl:text-2xl font-semibold">Ir al casino</h2>
            </Button>
          </div>
        </Card>

        <Card className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-3xl h-[25rem] sm:h-[19rem] 2xl:h-full w-full ">
        <Image
            src={"https://imgproxy.v1.bundlecdn.com/unsafe/banner_desktop_main_2x/plain/https://v1.bundlecdn.com/img/bonus.8be9e8f98-362.png@png"}
            alt="Cashback"
            className="absolute "
            width={400}
            height={300}
          />
          <div className="z-[1] h-full w-full flex flex-col justify-between items-center px-4">
            <div className="pt-4">
              <h2 className="text-3xl 2xl:text-[43px] leading-10 font-bold text-white">
                Bono de <br />
                +500%
              </h2>
            </div>
            <Button className="bg-white text-black w-full p-6">
              <h2 className="text-xl 2xl:text-2xl font-semibold">Registro</h2>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
