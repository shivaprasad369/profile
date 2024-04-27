import React from "react";
import p3 from "../Projects/newsapp.mp4";
import p3image from "../Projects/p3.png";
import p2image from "../Projects/p2image.png";
import p2 from "../Projects/youtube.mp4";
import p1image from "../Projects/fitness.png";
import p1 from "../Projects/net part-1.mp4";
import p4image from "../Projects/p4.png";
import p4 from "../Projects/promptopia.mp4";
export default function Projects() {
  return (
    <div id="project" className="bg-[#f9f9f9] py-[2rem] flex flex-col md:px-[15%] max-md:px-[5%] max-md:text-center text-black">
      <div className="text-blue-500 text-lg font-bold tracking-wider text-center uppercase">
        <h2>Projects</h2>
      </div>
      <div className="py-5   justify-center items-center gap-5">
       
        <div className="md:flex max-md::flex-col md:justify-between items-center gap-10">
          <div className="relative h-[16rem] md:w-[35rem] sm:w-[100%] border-0">
            <img
              src={p1image}
              alt=""
              className="absolute z-10 cursor-pointer w-full h-full transition-all "
            />

            {/* <video
              poster="hello"
              loop
              muted
              autoPlay
              autoFocus
              className=" z-10 w-full h-full   "
            >
              <source src={p1} type="video/mp4" />
            </video> */}
          </div>
          <div className="flex flex-col gap-3 md:w-[60%] max-md:mt-4">
            <h3 className="text-xl font-bold tracking-wider">Fitness Club</h3>
            <p className="text-[#767676]  text-md tracking-wide">
              This is a web project project, This application give a guidences
              for exercises. It give exercises in categorised manner, User can
              easily find suitable exercises. In this project, I used RapidAPI
              YouTube Search and RapidAPI ExerciseDB.
              <div className="flex gap-6 items-center max-md:justify-center max-md:mb-[1rem]">
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400  text-black  transition-all md:pt-[1rem]"
                  href="https://github.com/shivaprasad369/fitness"
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
                    className="tabler-icon tabler-icon-brand-github mt-3 "
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <span
                  className="items-center text-[2rem] font-bold md:mt-5"
                  style={{ fontWeight: 600 }}
                >
                  <a
                    href="https://main--reliable-mooncake-a5ebbf.netlify.app"
                    target="_blank"
                  >
                    &#8594;
                  </a>
                </span>
              </div>
            </p>
          </div>
        </div>
        <div className="md:flex sm:flex-col md:justify-between  md:flex-row-reverse  items-center gap-10">
          <div className="relative h-[16rem] md:w-[35rem] sm:w-[100%] border-0">
            <img
              src={p2image}
              alt=""
              className="absolute z-10 w-full h-full transition-all cursor-pointer  hover:z-[-1]"
            />

            <video
              poster="hello"
              loop
              muted
              autoPlay
              autoFocus
              className="z-10  w-full h-full   "
            >
              <source src={p2} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-3 md:w-[60%] max-md:center max-md:py-4">
            <h3 className="text-xl font-bold tracking-wider">Youtube-Clone</h3>
            <p className="text-[#767676] text-md tracking-wide">
              This is web app. Inspired by YouTube. In this project, I got
              experienced on Material UI , Redux toolkit and Router. This
              project is responsive for all devices.
              <div className="flex gap-6 items-center max-md:justify-center">
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400  text-black transition-all md:pt-[1rem]"
                  href="https://github.com/shivaprasad369/youtube-clone"
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
                    className="tabler-icon tabler-icon-brand-github mt-3 "
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <span
                  className="items-center text-[2rem] font-bold md:mt-5"
                  style={{ fontWeight: 600 }}
                >
                  <a href="https://illustrious-axolotl-1f2fc2.netlify.app/">
                    &#8594;
                  </a>
                </span>
              </div>
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row-reverse justify-between items-center gap-10">
          <div className="relative h-[16rem] w-[35rem] border-0">
            <img
              src={p4image}
              alt=""
              className="absolute z-10 w-full h-full transition-all cursor-pointer  hover:z-[-1]"
            />

            <video
              poster="hello"
              loop
              muted
              autoPlay
              autoFocus
              className="z-10  w-full h-full   "
            >
              <source src={p4} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-3 w-[60%]">
            <h3 className="text-xl font-bold tracking-wider">Promptopia</h3>
            <p className="text-[#767676] text-md tracking-wide">
              With guidance of 'JavaScriptMastery'. using this website user can
              create prompt and share that prompt and also modify their prompts.
              frontend technology:- React.js, Next.js, tailwind CSS. backend
              technology:- mongoDB, next-auth.
              <div className="flex gap-6 items-center">
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400  text-black transition-all pt-[1rem]"
                  href="https://github.com/shivaprasad369/promptopia"
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
                    className="tabler-icon tabler-icon-brand-github mt-3 "
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <span
                  className="items-center text-[2rem] font-bold mt-5"
                  style={{ fontWeight: 600 }}
                >
                  <a href="https://promptopia-zeta-lilac.vercel.app/">
                    &#8594;
                  </a>
                </span>
              </div>
            </p>
          </div>
        </div> */}
        <div className="md:flex max-md:flex-col md:justify-between  items-center gap-10">
          <div className="relative h-[16rem]  md:w-[35rem] sm:w-[100%] border-0">
            <img
              src={p3image}
              alt=""
              className="absolute z-10 w-full h-full transition-all hover:z-[-2] cursor-pointer "
            />

            <video
              poster="hello"
              loop
              muted
              autoPlay
              autoFocus
              className="z-10  w-full h-full   "
            >
              <source src={p3} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-3 md:w-[60%] max-md:text-center max-md:py-[1rem]">
            <h3 className="text-xl font-bold tracking-wider">News App</h3>
            <p className="text-[#767676] text-md tracking-wide">
              This web project, Using this user can get updated world news in
              categorized manner, Using news API (Developer plan).
              <div className="flex gap-6 items-center max-md:justify-center">
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400  text-black transition-all pt-[1rem]"
                  href="https://github.com/shivaprasad369/Global-News"
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
                    className="tabler-icon tabler-icon-brand-github mt-3 "
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <span
                  className="items-center text-[2rem] font-bold mt-5"
                  style={{ fontWeight: 600 }}
                >
                  &#8594;
                </span>
              </div>
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row-reverse justify-between items-center gap-10">
          <div className="relative h-[16rem] w-[35rem] border-0">
            <img
              src={p2image}
              alt=""
              className="absolute z-10 w-full h-full transition-all cursor-pointer  hover:z-[-1]"
            />

            <video
              poster="hello"
              loop
              muted
              autoPlay
              autoFocus
              className="z-10  w-full h-full   "
            >
              <source src={p2} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col gap-3 w-[60%]">
            <h3 className="text-xl font-bold tracking-wider">Youtube-Clone</h3>
            <p className="text-[#767676] text-md tracking-wide">
              This is web app. Inspired by YouTube. In this project, I got
              experienced on Material UI , Redux toolkit and Router. This
              project is responsive for all devices.
              <div className="flex gap-6 items-center">
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400  text-black transition-all pt-[1rem]"
                  href="https://github.com/shivaprasad369/youtube-clone"
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
                    className="tabler-icon tabler-icon-brand-github mt-3 "
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
                <span
                  className="items-center text-[2rem] font-bold mt-5"
                  style={{ fontWeight: 600 }}
                >
                  <a href="https://illustrious-axolotl-1f2fc2.netlify.app/">
                    &#8594;
                  </a>
                </span>
              </div>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
