"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const games = [
  {
    title: "Lucky Jet",
    image:
      "https://imgproxy.v1.bundlecdn.com/unsafe/casino_list_big_2x/plain/https://v1.bundlecdn.com/casino-images/1play/8cd3ae6e-3840-454e-8e42-434cd48af16c.jpg@png",
    provider: "1win Games",
  },
  {
    title: "Mines 1win",
    image:
      "https://imgproxy.v1.bundlecdn.com/unsafe/casino_list_big_2x/plain/https://v1.bundlecdn.com/casino-images/1play/e47f89a4-3663-4c9d-bc45-fe1845d34e1b.png@png",
    provider: "1win Games",
  },
  {
    title: "Crash",
    image:
      "https://imgproxy.v1.bundlecdn.com/unsafe/casino_list_big_2x/plain/https://v1.bundlecdn.com/casino-images/1play/20ea037b-301f-46d5-993f-76d1b4319da3_horizontal.png@png",
    provider: "1win Games",
  },
  {
    title: "Rocket Queen",
    image:
      "https://imgproxy.v1.bundlecdn.com/unsafe/casino_list_big_2x/plain/https://v1.bundlecdn.com/casino-images/1play/0c8b561e-d1d5-4e08-903f-f0b53d280c7c.jpg@png",
    provider: "1win Games",
  },
];

export default function GamesGrid() {
  return (
    <div className="mb-8 flex flex-col justify-center bg-gradient-to-r from-[#1e283f] to-[#0f1627] overflow-hidden rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12">
            <svg
              data-v-05b89ab6=""
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon icon-home-1win sm margin square section-icon VIconSvgGradient_icon_WJLeK section-icon section-icon VIconSvgGradient_icon_WJLeK section-icon"
            >
              <rect
                width="40"
                height="40"
                rx="10"
                fill="url(#1win_svg__paint0_linear_3_4313)"
              ></rect>
              <path
                d="M14.687 16.953c.24-1.172-.192-2.007-.975-2.557-.716-.477-1.619-.55-2.57-.072L7.164 16.12c-.999.453-1.426 1.625-.999 2.605a1.969 1.969 0 002.594 1.003l.524-.24-.855 4.664c-.24 1.409.668 2.557 1.907 2.798 1.311.242 2.594-.622 2.81-1.939l1.542-8.057zM15.11 14c.524.623 1.143 1.39.831 3.253l-.807 4.38.144 3.517c.024 1.269.644 1.819 1.691 1.819h2.666c.831 0 1.192-.647 1.523-1.457l2.023-4.998.216 4.78c.024 1.052.547 1.699 1.523 1.699h3.026c.855 0 1.215-.526 1.595-1.457l3.881-9.567c.428-.98.169-1.958-.879-1.958h-1.93c-.716 0-1.216.24-1.5.93l-2.622 6.402-.24-5.716c-.049-1.22-.62-1.626-1.312-1.626h-1.975c-.787 0-1.239.309-1.474.907l-2.618 6.46-.24-5.886c-.025-1.1-.404-1.481-1.288-1.481H15.11z"
                fill="#fff"
              ></path>
              <defs>
                <linearGradient
                  id="1win_svg__paint0_linear_3_4313"
                  x1="0"
                  y1="2.143"
                  x2="23.909"
                  y2="46.604"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1BF1FF"></stop>
                  <stop offset="1" stopColor="#0855C4"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white min-w-max">
              1win games
            </h2>
          </div>
        </div>
        <button className="text-blue-500 text-sm">Todos</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-transparent shadow-none cursor-pointer hover:scale-105 transition-transform rounded-xl overflow-hidden">
              <CardBody className="p-0">
                <Image
                  src={game.image}
                  alt={game.title}
                  className="w-full h-30 object-cover bg-[#1E2329]"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start p-0 mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4">
                    <svg
                      data-v-05b89ab6=""
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="icon icon-home-1win sm margin square section-icon VIconSvgGradient_icon_WJLeK section-icon section-icon VIconSvgGradient_icon_WJLeK section-icon"
                    >
                      <rect
                        width="40"
                        height="40"
                        rx="10"
                        fill="url(#1win_svg__paint0_linear_3_4313)"
                      ></rect>
                      <path
                        d="M14.687 16.953c.24-1.172-.192-2.007-.975-2.557-.716-.477-1.619-.55-2.57-.072L7.164 16.12c-.999.453-1.426 1.625-.999 2.605a1.969 1.969 0 002.594 1.003l.524-.24-.855 4.664c-.24 1.409.668 2.557 1.907 2.798 1.311.242 2.594-.622 2.81-1.939l1.542-8.057zM15.11 14c.524.623 1.143 1.39.831 3.253l-.807 4.38.144 3.517c.024 1.269.644 1.819 1.691 1.819h2.666c.831 0 1.192-.647 1.523-1.457l2.023-4.998.216 4.78c.024 1.052.547 1.699 1.523 1.699h3.026c.855 0 1.215-.526 1.595-1.457l3.881-9.567c.428-.98.169-1.958-.879-1.958h-1.93c-.716 0-1.216.24-1.5.93l-2.622 6.402-.24-5.716c-.049-1.22-.62-1.626-1.312-1.626h-1.975c-.787 0-1.239.309-1.474.907l-2.618 6.46-.24-5.886c-.025-1.1-.404-1.481-1.288-1.481H15.11z"
                        fill="#fff"
                      ></path>
                      <defs>
                        <linearGradient
                          id="1win_svg__paint0_linear_3_4313"
                          x1="0"
                          y1="2.143"
                          x2="23.909"
                          y2="46.604"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1BF1FF"></stop>
                          <stop offset="1" stopColor="#0855C4"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">{game.provider}</p>
                </div>
                <h3 className="text-lg font-bold text-white">{game.title}</h3>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
