"use client";
import React from "react";
import Link from "next/link";
import { FloatingNav } from "./ui/floating-navbar";
const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Journey",
      link: "#journey",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div className="flex fixed inset-x-0  mx-auto font-funnel text-xs md:text-sm   z-[5000]  px-5 py-2  items-center justify-center">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
