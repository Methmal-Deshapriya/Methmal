"use client";
import Hero from "@/components/Hero";
import React from "react";
import Grid from "@/components/Grid";
import Hero2 from "@/components/Hero-2";
import RecentProjects from "@/components/RecentProjects";
import { MacbookScrollDemo } from "@/components/Connect";
import { StickyScrollRevealDemo } from "@/components/Experiance";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col mt-4  overflow-hidden sm:px-10 lg:pt-[45px] px:5 pt-[20px] pb-[20px]">
      <div className="mb-20">
        <Navbar />
        <Hero />
      </div>
      <Hero2 />
      <div className=" w-[80vw] lg:w-[50vw]">
        <Technologies />
      </div>
      <div className=" w-[80vw]">
        <Grid />
        <RecentProjects />
      </div>
      <div className="w-full">
        <MacbookScrollDemo />
      </div>
      <StickyScrollRevealDemo />
      <Footer />
    </main>
  );
}
