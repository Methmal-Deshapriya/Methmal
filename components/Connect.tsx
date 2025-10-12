import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaMediumM,
} from "react-icons/fa";
import React from "react";
import { ConnectScrollDemo } from "@/components/ContainerScroll";
import Dock from "./ui/dock";
import { items } from "./Media";

export function MacbookScrollDemo() {
  return (
    <div className=" relative flex flex-col w-full h-full  ">
      <div className="absolute md:hidden w-full h-1/5 flex -top-3 justify-center  ">
        <div className="w-[270px] rounded-lg h-full overflow-hidden bg-[#121212] shadow-xl shadow-black-100">
          <div className="w-full h-8 flex justify-start px-2 items-center ">
            <div className="w-3 h-3 rounded-full ml-1 bg-[#7214ff] shadow-md shadow-black/[0.5]"></div>
            <div className="w-3 h-3 rounded-full ml-1 bg-[#883bfc] shadow-md shadow-black/[0.5]"></div>
            <div className="w-3 h-3 rounded-full ml-1 bg-[#ad77fd] shadow-md shadow-black/[0.5]"></div>
          </div>
          <div className=" mt-2 text-sm text-center text-slate-200 font-funnel">
            Thanks for visitng
          </div>
          <div className="  text-center text-xs text-slate-400 font-funnel">
            Keep scrolling there&apos;s more
          </div>
          <div className=" flex  justify-center  mt-6 h-full">
            <img src="Scroll.png" alt="" className="w-12 h-12" />
          </div>
        </div>
      </div>

      <div>
        <ConnectScrollDemo />
      </div>
      <div className="absolute bottom-20 left-0 w-full h-full">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className="font-funnel "
        />
      </div>
    </div>
  );
}
