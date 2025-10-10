import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { div } from "motion/react-client";
import LetterGlitch from "./letter-glitch";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  spareImg,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border font-funnel text-slate-300 border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-black-100",
        className
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && " flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <div className="absolute top-0 left-0 w-full h-full">
            <LetterGlitch
              glitchSpeed={100}
              centerVignette={true}
              outerVignette={true}
              smooth={true}
              glitchColors={["#2b4539", "#61dca3", "#61b3dc"]} // pick colors
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            />
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            ` group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3  font-sans">
              <div className="flex flex-col gap-3 lg:gap-4">
                {["React", "NextJS", "Postgres"].map((tech) => (
                  <span
                    key={tech}
                    className="py-2 lg:py-4 lg:px-6 px-3 text-xs lg:text-base opacity-50  rounded-lg text-center bg-[#10132E]"
                  >
                    {tech}
                  </span>
                ))}
                <span className=" py-4 lg:py-6 px-3 opacity-50  rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-4 ">
                <span className=" py-4 lg:py-6 px-3 opacity-50  rounded-lg text-center bg-[#10132E]" />
                {["AWS", "MongoDB", "OpenAI"].map((tech) => (
                  <span
                    key={tech}
                    className="py-2 lg:py-4 lg:px-6 px-3 text-xs lg:text-base opacity-50  rounded-lg text-center bg-[#10132E]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
