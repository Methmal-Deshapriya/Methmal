import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";
import Grid from "@/components/Grid";
import { Spotlight } from "@/components/ui/spotlight";
import { FloatingNav } from "@/components/ui/floating-nav";
import { IoHomeOutline } from "react-icons/io5";
import Hero2 from "@/components/Hero-2";
export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col mx-auto overflow-hidden sm:px-10 lg:pt-[45px] px:5 pt-[20px] pb-[20px]">
      <div className="max-w-[1750px] w-[90vw] mx-auto overflow-hidden flex flex-col mb-20">
        <FloatingNav
          navItems={[{ name: "Home", link: "#home", icon: <IoHomeOutline /> }]}
        />
        <Hero />
      </div>

      <Hero2 />
      <div className="max-w-[1750px] w-[90vw] mx-auto overflow-hidden flex flex-col mb-20">
        <Grid />
      </div>
    </main>
  );
}
