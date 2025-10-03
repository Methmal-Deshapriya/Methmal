import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/utils/cn";
import Image from "next/image";
const Hero2 = () => {
  return (
    <section className="relative md:py-30 w-[80vw] ">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="top-10 -left-10 md:-left-32 md:top-10 h-[80vh]"
          fill="purple"
        />
        <Spotlight className="h-[60vh] w-[50vw] top-40 left-full" fill="blue" />
        <Spotlight className="left-80 top-48 h-[60vh] w-[50vw]" fill="white" />
      </div>

      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
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
        <div className="relative md:flex items-center justify-center z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-4xl font-bold text-transparent sm:text-7xl">
          <Image
            src="/Hero.png"
            alt="Hero Image"
            width={500}
            height={600}
            className="mx-auto"
          />
          <div className=" text-blue-100 w-[70vw] md:w-[30vw] m-auto text-center ">
            <p className="uppercase tracking-widest text-3xl font-funnel font-light mb-10">
              Full Stack Developer
            </p>
            <p className="uppercase  tracking-widest text-xs font-funnel font-light">
              A Developer and Designer with years of experience, and a data
              science and machine learning enthusiast. I enjoy building websites
              and creating 3D models as a hobby to showcase my design skills. My
              expertise includes React.js, HTML, CSS, and other front-end
              technologies, along with programming knowledge in Java, Python, C
              and C#.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
