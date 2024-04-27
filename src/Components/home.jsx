import React from "react";
import hand from "../assets/waving.1bae5fcfb51082b5c2b4.png";
import profile from "../assets/shivu.jpg";
import "./Home.css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div
      style={{ fontFamily: " Poppins, sans-serif" }}
      id="home"
      className="bg-[#f7f3f3] relative overflow-hidden items-center  lg:px-[13%] max-lg:px-[5%]  md:pt-[5rem] max-md:pt-[2rem] text-black w-full  md:h-screen max-md:h-fit"
    >
      <div className="">
        <div  className="md:justify-between  max-md:flex-row-reverse items-center md:flex gap-10 mt-[4rem] ">
        <div className="max-md:block hidden">
            <div className="text-center justify-center sm:pl-[35%] max-sm:pl-[15%]">
              <div>
                <img
                  src={profile}
                  alt=""
                  className=" w-[15rem] h-[20%] bg-gray-500 hero-img"
                />
              </div>
            </div>
          </div>
          <div className="text-xl">
            <h1
              style={{ color: "rgb(45, 46, 50)" }}
              className="md:text-[3.4rem] max-md:flex-wrap max-md:text-[2rem] max-md:text-center md:py-[2rem] max-md:py-[1rem] relative md:leading-[4.5rem] max-md:leading-[3rem] tracking-wide font-extrabold text-[rgb(45, 46, 50)]"
            >
              Front-End React Developer{" "}
              <img
                src={hand}
                alt="waving hand"
                width={60}
                className="absolute right-[25%] max-md:hidden bottom-[18%]"
              />
            </h1>
            <div>
              <p
                className="text-[1em] md:w-[85%] max-md:w-[100%] max-md:text-[0.9em] max-md:text-center pb-[1.5rem] "
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "rgb(85, 85, 85)",
                }}
              >
                Hi, I'm shivaprasad sapare. A passionate Front-end React
                Developer based in Hubli, Karnataka. 📍
              </p>
            </div>
            <div className="flex gap-5 max-md:text:center max-md:justify-center msx-md:items-center">
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/shivaprasad-sapare-036b4925a/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin hover:text-blue-500"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/shivaprasad369"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-github hover:text-blue-500"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="max-md:hidden">
            <div>
              <div>
                <img
                  src={profile}
                  alt=""
                  className=" w-[90%] h-[90%] bg-gray-500 hero-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:absolute max-md:w-[100%] md:bottom-5 max-md:overflow-hidden max-md:justify-center max-md:object-cover">
          <div className="md:flex max-md:py-[2rem] max-md:flex-col text-center justify-center items-center ">
            <h1 className="text-lg font-semibold pr-[1rem] md:border-r-[2px]  border-gray-400 md:mr-[4rem] ">
              Tech Stack
            </h1>
            <div className="md:flex max-md:flex-col max-md:w-[100%] ">
              <ul className="md:flex  md:gap-10 w-[100%]  ">
                <div className="flex gap-10 justify-center max-md:py-4">

                
                <motion.li
                  className="cursor-pointer"
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.3,
                      type: "tween",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=html,css"
                    alt="skill-icon"
                  />
                </motion.li>
                <motion.li
                  className="cursor-pointer"
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.3,
                      type: "tween",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=js,tailwind"
                    alt="skill-icon"
                  />
                </motion.li>
                </div>
                <div className="flex gap-10 justify-center max-md:py-4">
                <motion.li
                  className="cursor-pointer"
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.3,
                      type: "tween",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=react,nodejs"
                    alt="skill-icon"
                  />
                </motion.li>
                <motion.li
                  className="cursor-pointer"
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.3,
                      type: "tween",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=express,mongodb"
                    alt="skill-icon"
                  />
                </motion.li>
                </div>
                <div className="flex gap-10 justify-center ">
                <motion.li
                  className="cursor-pointer w-fit"
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.3,
                      type: "tween",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=materialui,framermotion"
                    alt="skill-icon"
                  />
                </motion.li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
