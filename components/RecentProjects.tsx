"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full" id="work">
      <div className="flex flex-col items-center font-funnel">
        <h1 className="md:text-5xl text-white text-4xl font-bold">
          Recent <span className="text-purple">Projects</span>
        </h1>
        <p className="md:text-xl text-base text-center font-thin w-[80vw] lg:w-[60vw] text-slate-300 mt-4">
          A showcase of my latest full-stack and AI-driven projects,
          highlighting innovation, functionality, and modern design.
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-28 lg:gap-y-8 mt-10  max-w-[1800px] lg:w-[90vw]">
          {projects.map((item) => (
            <div
              className=" sm:h-[42rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[560px] w-[80vw] font-funnel"
              key={item.id}
            >
              <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
              >
                <div className="relative flex items-center justify-center sm:w-[600px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-8">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl "
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-medium lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
