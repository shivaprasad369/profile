import React from "react";
import about from "../assets/about.jpg";
import spin from "../assets/spin.png";
import text from "../assets/frontend.svg";
import "./About.css";
export default function About() {
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      id="about"
      className="bg-white md:px-[13%] max-md:px-[6%] py-[10%] text-black justify-center items-center h-[100%]"
    >
        <h2 className="text-blue-600 max-md:block hidden text-center font-bold uppercase text-xl pb-3 tracking-wider">
            About me
          </h2>
      <div className="md:flex max-md:flex-col md:justify-between  items-center gap-0   ">
        <div className="w-[100%] relative">
          <img
            src={about}
            alt=""
            className="md:w-[26rem] z-0 relative h-[22rem] rounded-2xl "
          />
          <div className="absolute max-md:hidden right-[-2rem] bottom-[-2rem] bg-white rounded-full  border-0 w-[10rem] h-[10rem]  ">
            <img
              src={spin}
              alt="spin"
              className="w-[3rem] z-20 items-center ml-[34%] mt-[30%]"
            />
            <img
              src={text}
              alt=""
              className="text absolute z-10 w-full top-0 "
            />
          </div>
        </div>
        <div className=" gap-5 md:ml-[3rem]  max-md:mt-6 max-md:text-center">
          <h2 className="text-blue-600 max-md:hidden font-bold uppercase text-md tracking-wider">
            About me
          </h2>
          <h4
            style={{ fontFamily: `Poppins, sans-serif` }}
            className="text-[#2d2e32] text-[2rem] font-bold"
          >
            Front-end Developer <br /> based in Hubli, Karnataka 📍
          </h4>
          <p
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: "500",
              fontSize: "1rem",
            }}
            className="text-[#767676] leading-[1.5] tracking-[0.1rem]"
          >
            Hey, my name is Shivaprasad, and I'm a Frontend Developer. My
            passion is to create and develop a clean UI/UX websites.<br />
            <br />
            My main stack currently is React.js in combination with Tailwind
            CSS, material-UI and framer-motion and also have knowledge about
            MERN stack.
          </p>
        </div>
      </div>
    </div>
  );
}
