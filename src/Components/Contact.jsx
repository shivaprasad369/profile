import React from "react";

export default function Contact() {
  return (
    <div id="contact" style={{fontFamily:'Poppins, sans-serif'}} className="bg-white py-[7%] px-[15%] text-black">
      <div>
        <div className="flex flex-col ">
          <div class="">
            <p className="text-[#147efb] uppercase  text-md font-extrabold mb-[1rem] max-md:text-center">contact</p>
            <h3 className="text-[#2d2e32] text-[1.7rem] font-bold max-md:text-center">Don't be shy! Hit me up! 👇</h3>
          </div>
          <div className="mt-[4rem] md:flex sm:flex-col gap-10">
            <div className="flex gap-[1.7rem] items-center max-md:mb-4">
              <span className="text-[#147efb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div class="contact__info">
                <h3 className="text-[#2d2e32] font-extrabold mb-1 tracking-wide" >Location</h3>
                <p className="text-[#767676] tracking-wider">Hubli, Karnataka</p>
              </div>
            </div>
            <div className="flex gap-[1.7rem] items-center">
              <span className="text-[#147efb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div class="contact__info">
              <h3 className="text-[#2d2e32] font-extrabold mb-1 tracking-wide" >Mail</h3>
                <a className="text-[#767676] tracking-wider" href="mailto:Shivu369sapare@gmail.com">
                 Shivu369sapare@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
