import React from "react";
import Button from "./Button";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaMedium,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Highlight } from "./Highlight";
import { ImMail } from "react-icons/im";

const Footer = () => {
  return (
    <div className=" flex  justify-center  mt-40  rounded-2xl lg:rounded-[30px]  w-[90vw] lg:w-[95vw] ">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl text-center mb-8 font-bold font-funnel w-full ">
          Let’s Build the <span className="text-purple">Future</span> Together
        </h1>
        <p className=" text-xl md:text-3xl text-center font-medium  w-[80vw] 2xl:w-[60vw] mx-auto font-funnel  text-slate-300 mt-4">
          Thank you for visiting my portfolio. I’m passionate about creating
          impactful digital experiences through full-stack engineering, machine
          learning, and data science.{" "}
          <Highlight>
            I’m currently available for work and collaborations
          </Highlight>
          , so if you have an idea or project in mind — let’s connect and make
          it happen.
        </p>
        <div className=" flex justify-center items-center gap-10 mt-20 mb-10">
          <Button className="font-funnel box-border border-2 box-shadow-input  px-7 py-3 text-lg">
            Download CV
          </Button>
        </div>
        <div className="relative h-[30vh] flex justify-center   w-full">
          <div className="absolute flex justify-center items-center gap-5 text-center px-20 rounded-t-full border-t-2 border-white  font-funnel  h-1/3 bottom-0">
            <div className="">
              <FaFacebookSquare className="hover:text-[#0470ca] text-slate-300 w-9 h-10 hover:-translate-y-2 " />{" "}
            </div>
            <div>
              <FaGithubSquare className="hover:text-[#6b0aff] text-slate-300 w-10 h-10 hover:-translate-y-2" />{" "}
            </div>
            <div>
              <FaMedium className="hover:text-[#b700da] text-slate-300 w-10 h-10 hover:-translate-y-2" />{" "}
            </div>
            <div>
              <BsLinkedin className="hover:text-[#2aa9d2] text-slate-300 w-10 h-10 hover:-translate-y-2" />{" "}
            </div>
            <div>
              <FaWhatsappSquare className="hover:text-[#2fc36a] text-slate-300 w-10 h-10 hover:-translate-y-2" />{" "}
            </div>
            <div>
              <FaInstagramSquare className="hover:text-[#e6405c] text-slate-300 w-10 h-10 hover:-translate-y-2" />{" "}
            </div>
            <div className="">
              <ImMail className="hover:text-[#f9812f] text-slate-300 w-9 h-9 hover:-translate-y-2" />{" "}
              {/* Gmail Red */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
