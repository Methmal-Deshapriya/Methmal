import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className=" flex overflow-hidden rounded-2xl lg:rounded-[50px] w-[90vw] lg:w-[95vw] ">
      <BackgroundGradientAnimation className="flex items-center justify-center text-center ">
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className=" text-lg md:text-xl tracking-widest bg-clip-text text-transparent w-[89vw] drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/80 font-funnel">
            Hi I'm Methmal Deshapriya
          </p>
          <TextGenerateEffect
            className=" text-transparent lg:max-w-[80vw] max-w-[83vw] drop-shadow-2xl text-4xl lg:text-7xl md:text-5xl font-funnel 
            "
            words="Empowering Ideas Through Intelligent Technology"
          />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;
