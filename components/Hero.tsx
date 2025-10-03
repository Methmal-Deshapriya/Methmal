import { div } from "motion/react-client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import LitUpBordersButton from "./ui/tailwindcss-buttons";

const Hero = () => {
  return (
    <div className=" flex  w-full overflow-hidden rounded-2xl lg:rounded-[30px]">
      <BackgroundGradientAnimation className="flex items-center justify-center text-center">
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="uppercase text-xs md:text-lg tracking-widest bg-clip-text text-transparent w-[89vw] drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/80 font-funnel">
            Hi I'm Methmal Deshapriya
          </p>
          <TextGenerateEffect
            className=" text-transparent lg:max-w-[80vw] max-w-[83vw] drop-shadow-2xl  lg:text-7xl md:text-5xl font-funnel 
            "
            words="Empowering Ideas Through Intelligent Technology"
          />
          <div className=" ">
            <LitUpBordersButton />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;
