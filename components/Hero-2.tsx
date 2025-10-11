"use client";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Highlight } from "./Highlight";
import { TypewriterEffectSmooth } from "./ui/text-type";
import CountUp from "./ui/count-up";
import Button from "./Button";
import Technologies from "./Technologies";
const words = [
  {
    text: "Full",
    className: "dark:text-[#b5b5b5a4]",
  },
  {
    text: "Stack",
    className: "dark:text-[#b5b5b5a4]",
  },
  {
    text: "Engineer",
    className: "dark:text-purple ",
  },
];

const Hero2 = () => {
  return (
    <section
      className="relative 2xl:mb-5 md:mb-14  mb-10   w-[80vw] h-[80vh]"
      id="home"
    >
      {/* Spotlights */}
      <div>
        <Spotlight
          className="top-10 -left-10 md:-left-32 md:top-10 h-[80vh]"
          fill="purple"
        />
        <Spotlight className="h-[60vh] w-[50vw] top-40 left-full" fill="blue" />
        <Spotlight className="left-80 top-48 h-[60vh] w-[50vw]" fill="white" />
      </div>

      <div className="relative flex h-[80vh] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative  md:flex flex-wrap items-center justify-center z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-4xl font-bold text-transparent sm:text-7xl">
          <div className="">
            <Image
              src="/avatar3.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="mx-auto  shadow-lg "
            />
          </div>
          <div className="w-[80vw]  2xl:w-[40vw] m-auto   text-center  ">
            <div className=" hidden 2xl:flex items-center  justify-center text-center  md:text-lg  text-sm  font-funnel">
              I&apos;m a passionate
            </div>
            <div className="font-funnel flex justify-center">
              <TypewriterEffectSmooth words={words} className="text-center " />
            </div>

            <p className=" text-slate-300  md:text-xl mb-10 text-base  font-thin font-funnel">
              Full Stack Engineer with a passion for building scalable web
              solutions and exploring the power of Artificial Intelligence. I
              bridge creativity and technology to craft efficient, intelligent,
              and user-focused digital experiences.
            </p>

            <div className="flex mt-10 items-center justify-center">
              <div className="flex justify-center lg:gap-30 md:gap-20 gap-10">
                <div className="flex-col  items-center justify-center">
                  <div className="flex  mb-2 w-full justify-center">
                    <CountUp
                      to={5}
                      duration={2}
                      className="text-slate-300  text-3xl md:text-4xl lg:text-5xl font-funnel"
                    />
                    <h1 className="text-slate-300 text-3xl md:text-4xl lg:text-5xl font-bold font-funnel">
                      +
                    </h1>
                  </div>
                  <p className="md:text-base text-sm text-slate-300 font-thin font-funnel">
                    Projects
                  </p>
                </div>
                <div className="flex-col  justify-center ">
                  <div className="flex mb-2">
                    <CountUp
                      to={2}
                      duration={2}
                      className="text-slate-300 text-3xl md:text-4xl lg:text-5xl  w-full font-funnel"
                    />
                  </div>

                  <p className="md:text-base text-sm text-slate-300 font-thin font-funnel">
                    Years Experiance
                  </p>
                </div>
                <div className="flex-col justify-center ">
                  <div className="flex w-full justify-center mb-2">
                    <CountUp
                      to={24}
                      duration={2}
                      className="text-purple text-3xl md:text-4xl lg:text-5xl font-funnel"
                    />
                    <h1 className="text-purple text-3xl md:text-4xl lg:text-5xl font-bold font-funnel">
                      H
                    </h1>
                  </div>
                  <p className="md:text-base text-sm text-purple font-thin font-funnel">
                    Availabity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
