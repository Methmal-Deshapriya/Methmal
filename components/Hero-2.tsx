"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { Spotlight } from "./ui/spotlight";
import {
  FaFacebookSquare,
  FaInstagram,
  FaMedium,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { cn } from "@/utils/cn";
import Image from "next/image";
import TextType from "./ui/text-type";
import { Highlight } from "./Highlight";
import { motion } from "framer-motion";

const iconVariants: any = (due: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: due,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Hero2 = () => {
  return (
    <section className="relative mb-40 py-20 md:py-30  w-[80vw] h-[80vh]">
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
        <div className="relative gap-10 md:flex flex-wrap items-center justify-center z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-4xl font-bold text-transparent sm:text-7xl">
          <div className="">
            <Image
              src="/Hero.png"
              alt="Hero Image"
              width={600}
              height={700}
              className="mx-auto"
            />
          </div>
          <div className="w-[80vw]  2xl:w-[40vw] m-auto text-center  ">
            <div className=" hidden 2xl:flex items-center gap-3 justify-center text-center mb-7 lg:text-6xl text-5xl font-bold font-funnel lg:tracking-widest uppercase">
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className=""
              >
                <FaFacebookSquare className="text-[#0470ca] w-8 h-8" />{" "}
              </motion.div>
              <motion.div
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
              >
                <FaGithubSquare className="text-[#6b0aff] w-8 h-8" />{" "}
              </motion.div>
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
              >
                <FaMedium className="text-[#b700da] w-8 h-8" />{" "}
              </motion.div>
              <motion.div
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
              >
                <BsLinkedin className="text-[#2aa9d2] w-8 h-8" />{" "}
              </motion.div>
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
              >
                <FaWhatsappSquare className="text-[#2fc36a] w-8 h-8" />{" "}
              </motion.div>
              <motion.div
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
              >
                <FaInstagram className="text-[#e6405c] w-8 h-8" />{" "}
              </motion.div>
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className=""
              >
                <SiGmail className="text-[#f9812f] w-8 h-8" /> {/* Gmail Red */}
              </motion.div>
            </div>
            <TextType
              text={["Full-stack Engineer", "Tech Enthusiast", "Designer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible={true}
              className=" font-funnel lg:tracking-widest uppercase mb-7 text-center lg:text-6xl text-5xl"
              textColors={["#cbacf9", "#FFFFFF", "#06b6d4"]}
              cursorClassName="text-purple"
            />
            <p className=" text-slate-400 tracking-widest lg:text-xl text-sm font-thin font-funnel">
              " A Developer and Designer with years of experience, and a data
              science and machine learning enthusiast. I enjoy building websites
              and creating 3D models as a hobby to showcase my design skills. My
              expertise includes{" "}
              <Highlight>
                React, Next, Tailwindcss, JavaScript, Typescript{" "}
              </Highlight>
              , and other web frameworks, along with programming knowledge in
              <Highlight>Java, Python, C and C#</Highlight> ."
            </p>

            <button className="shadow-[0_0_0_3px_#000000_inset] text-lg px-6 py-2 bg-transparent border border-white hover:border-purple text-white font-thin hover:text-purple rounded-lg  transform hover:-translate-y-1 transition duration-400 font-funnel">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
