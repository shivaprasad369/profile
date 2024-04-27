import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
export default function Navbar() {
  const [nav,setNav]=useState(false)
  return (
    <div
      style={{ fontFamily: " Poppins, sans-serif" }}
      className="bg-[#fff] z-20 h-[fit w-[100%] fixed text-[#2d2e32] transition-all  tracking-wider font-semibold shadow-lg items-center"
    >
      <div className="flex justify-between h-[5rem] items-center px-[2rem]">
        <div className=" font-bold">
          <h3 className="font-bold text-[1.17em] cursor-pointer">
            {" "}
            Shivaprasad Sapare
          </h3>
        </div>
        <div>
          <IoMenu onClick={()=>setNav(()=>true)} className="cursor-pointer text-[2.4em] hover:text-blue-500 md:hidden" />
        </div>
        {nav && <div className="mobile-nav open-menu max-md:block md:hidden transition-all">
          <span>
            <svg 
            onClick={()=>setNav(()=>false)}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-x"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </span>
          <ul>
            <li>
              <a href="#home"  onClick={()=>setNav(()=>false)}>Home</a>
            </li>
            <li>
              <a href="#about"  onClick={()=>setNav(()=>false)}>About</a>
            </li>
            <li>
              <a href="#education"  onClick={()=>setNav(()=>false)}>Education</a>
            </li>
            <li>
              <a href="#project"  onClick={()=>setNav(()=>false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={()=>setNav(()=>false)}>Contact</a>
            </li>
          </ul>
        </div>}
        <div className="flex text-md gap-6 text-[1.16em]  max-md:hidden">
          <h3 className="cursor-pointer hover:text-blue-500"><a href="#home">Home</a></h3>
          <h3 className="cursor-pointer hover:text-blue-500"><a href="#about">About</a></h3>
          <h3 className="cursor-pointer hover:text-blue-500"><a href="#education">Education</a></h3>
          <h3 className="cursor-pointer hover:text-blue-500"><a href="#project">Projects</a></h3>
          <h3 className="cursor-pointer hover:text-blue-500"><a href="#contact">Contact</a></h3>
        </div>
      </div>
    </div>
  );
}
