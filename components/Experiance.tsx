import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { CardStackDemo } from "./Testonomials";

const content = [
  {
    title: "Entering to University (2023)",
    description:
      "My journey began after earning 3As in the Technology stream with a 2.9294 Z-score, ranking 15th in Sri Lanka. This led me to the University of Sri Jayewardenepura to pursue a BICT (Honours) degree, building on my early knowledge of Python, HTML, CSS, React, Bootstrap, PHP, and SQL.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/exp1.svg"
          width={80}
          height={80}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Front End Era (2023-2024)",
    description:
      "Began exploring JavaScript, ReactJS, and Tailwind CSS, completing several mini projects that strengthened my frontend development skills. Alongside, I learned C and Java with OOP concepts, data structures, and algorithms, while building a strong foundation in mathematics and statistics — essential pillars for problem-solving and future specialization.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/exp2.svg"
          width={80}
          height={80}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Exploring Data and ML (2024)",
    description:
      "Decided to take a glimpse into the world of Data Science and Machine Learning, where I strengthened my Python skills and explored web scraping, data gathering, cleaning, and basic data engineering. I studied key supervised learning algorithms such as Linear Regression, Logistic Regression, Decision Trees, and Random Forests, building a solid understanding of data-driven systems while developing a growing interest in Deep Learning.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/exp3.svg"
          width={80}
          height={80}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Back End Era (2024-2025)",
    description:
      "As internship opportunities in Data Science and Machine Learning were limited, I decided to shift my focus toward backend development. During this phase, I mastered the MERN stack, building several projects to strengthen my full-stack skills. I later explored Next.js for its SEO-friendly and performance-optimized nature, while also gaining a basic understanding of frameworks like Django and Spring Boot. This era expanded my knowledge of databases, cloud technologies, and AI integration, shaping me into a more versatile developer.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/exp4.svg"
          width={80}
          height={80}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "The Future",
    description:
      "I plan to begin my industrial journey by securing a Full Stack Developer internship, where I can apply my skills in real-world projects and gain hands-on experience. I believe this step will accelerate my growth and bring me closer to becoming the best at what I do, while I continue to pursue my passion for Data Science and lifelong learning.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full pt-40  " id="journey">
      <div className="flex flex-col items-center font-funnel pb-10">
        <h1 className="md:text-5xl text-white text-4xl font-bold">
          My <span className="text-purple">Journey</span>
        </h1>
        <p className="md:text-xl text-base text-center font-thin  w-[80vw] lg:w-[60vw] text-slate-300 mt-4">
          A glimpse into my journey of growth, driven by curiosity, continuous
          learning, and a passion for creating meaningful technological impact.
        </p>
      </div>
      <div className="w-full 2xl:flex  justify-center gap-10 items-center  ">
        <div className="2xl:w-[40vw] flex items-center justify-center  w-full  h-[30rem]">
          <CardStackDemo />
        </div>
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
