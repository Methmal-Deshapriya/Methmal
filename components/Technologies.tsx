import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiDjango,
  SiCplusplus,
  SiCashapp,
  SiFlutter,
  SiFigma,
  SiOpenai,
  SiJavascript,
  SiMysql,
  SiGit,
} from "react-icons/si";
import LogoLoop from "./ui/logo-loop";

const techLogos = [
  {
    node: <SiReact className="hover:text-[#61DAFB] hover:-translate-y-1" />,
    title: "React",
  },
  {
    node: (
      <SiNextdotjs className="hover:text-[#020d3a] hover:-translate-y-1 " />
    ),
    title: "Next.js",
  },
  {
    node: <SiTypescript className="text-[#3178C6] hover:-translate-y-1" />,
    title: "TypeScript",
  },
  {
    node: <SiTailwindcss className="text-[#06B6D4] hover:-translate-y-1" />,
    title: "Tailwind CSS",
  },
  {
    node: <SiNodedotjs className="text-[#68A063] hover:translate-y-1" />,
    title: "Node.js",
  },
  {
    node: <SiPostgresql className="text-[#336791] hover:translate-y-1" />,
    title: "PostgreSQL",
  },
  {
    node: <SiMongodb className="text-[#4DB33D] hover:translate-y-1" />,
    title: "MongoDB",
  },
  {
    node: <SiPython className="text-[#3776AB] hover:translate-y-1" />,
    title: "Python",
  },
  {
    node: <SiDjango className="text-[#092E20] hover:translate-y-1" />,
    title: "Django",
  },
  {
    node: <SiCplusplus className="text-[#00599C] hover:translate-y-1" />,
    title: "C++",
  },
  {
    node: <SiCashapp className="text-[#00C244] hover:translate-y-1" />,
    title: "Cash App",
  },
  {
    node: <SiFlutter className="text-[#02569B] hover:translate-y-1" />,
    title: "Flutter",
  },
  {
    node: <SiFigma className="text-[#d40aca] hover:translate-y-1" />,
    title: "Figma",
  },
  {
    node: <SiOpenai className="text-[#acaaaa] hover:translate-y-1" />,
    title: "OpenAI",
  },
  {
    node: <SiJavascript className="text-[#F7DF1E] hover:translate-y-1" />,
    title: "JavaScript",
  },
  {
    node: <SiMysql className="text-[#4479A1] hover:translate-y-1" />,
    title: "MySQL",
  },
  {
    node: <SiGit className="text-[#F05032] hover:translate-y-1" />,
    title: "Git",
  },
];

export default function Technologies() {
  return (
    <div
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
      className="flex justify-center  mb-10 items-center"
    >
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut={true}
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
