import React from "react";

export default function Foolter() {
  return (
    <div className="md:px-[15%] max-md:px-[5%] bg-[#2d2e32] md:py-[4.5rem] max-md:py-[2rem] w-[100%]">
      <div className="md:flex max-md:flex-col justify-between item-center ">
        <h3 className="tracking-wider font-bold text-lg">Copyright © 2024. All rights are reserved</h3>
        <div className="flex gap-3 max-md:mt-5 max-md:justify-center">
          <a
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-all"
            href="https://www.linkedin.com/in/shivaprasad-sapare-036b4925a/"
          >
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
              class="tabler-icon tabler-icon-brand-linkedin"
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
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-all"
            href="https://github.com/shivaprasad369"
          >
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
              class="tabler-icon tabler-icon-brand-github"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
