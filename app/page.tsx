import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";
import Grid from "@/components/Grid";
import { Spotlight } from "@/components/ui/spotlight";
import { FloatingNav } from "@/components/ui/floating-nav";
import { IoHomeOutline } from "react-icons/io5";
import Hero2 from "@/components/Hero-2";
import { GlobeDemo } from "@/components/ui/GlobeDemo";
import RecentProjects from "@/components/RecentProjects";
import { MacbookScrollDemo } from "@/components/Connect";
import { StickyScrollRevealDemo } from "@/components/Experiance";
export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col  overflow-hidden sm:px-10 lg:pt-[45px] px:5 pt-[20px] pb-[20px]">
      <div className="mb-20">
        <FloatingNav
          navItems={[{ name: "Home", link: "#home", icon: <IoHomeOutline /> }]}
        />
        <Hero />
      </div>

      <Hero2 />

      <div className=" w-[80vw]">
        <Grid />
        <RecentProjects />
      </div>
      <div className="w-full">
        <MacbookScrollDemo />
      </div>

      <StickyScrollRevealDemo />
    </main>
  );
}
