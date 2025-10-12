import React from "react";
import Button from "./Button";
import { items } from "./Media";
const Footer = () => {
  return (
    <div
      className=" flex  justify-center mt-20 md:mt-40  rounded-2xl lg:rounded-[30px]  w-[90vw] lg:w-[95vw] "
      id="contact"
    >
      <div className="flex flex-col justify-center">
        <div className="w-full absolute  left-0 -bottom-0 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="footer grid"
            className="w-full h-full opacity-70"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center mb-8 font-bold font-funnel w-full ">
          Let&apos;s Build the <span className="text-purple">Future</span>{" "}
          Together
        </h1>
        <p className=" text-base md:text-xl text-center font-medium  w-[80vw] 2xl:w-[60vw] mx-auto font-funnel  text-slate-300 mt-4">
          Thank you for visiting my portfolio. I&apos;m passionate about
          creating impactful digital experiences through full-stack engineering,
          machine learning, and data science. I&apos;m currently available for
          work and collaborations , so if you have an idea or project in mind —
          let’s connect and make it happen.
        </p>
        <div className=" flex justify-center items-center gap-10 mt-20 mb-">
          <Button className="font-funnel z-10 px-7 py-3 text-lg" />
        </div>
        <div className="h-[20vh]"></div>
        <footer className="  text-slate-400 font-funnel flex flex-col md:flex-row justify-between items-center ">
          <div className="mb-4 md:mb-0">
            Copyright © 2024 Methmal Deshapriya{" "}
          </div>
          <div className=" flex gap-2  z-10">
            <div
              className="border-[1px] cursor-pointer flex items-center justify-center border-purple-100  w-10 h-10 rounded-full"
              onClick={items[2].onClick}
            >
              {items[2].icon}
            </div>
            <div
              className="border-[1px] cursor-pointer border-purple-100 flex items-center justify-center w-10 h-10 rounded-full"
              onClick={items[1].onClick}
            >
              {items[1].icon}
            </div>
            <div
              className=" border-[1px] cursor-pointer border-purple-100 flex items-center justify-center w-10 h-10 rounded-full"
              onClick={items[3].onClick}
            >
              {items[3].icon}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
