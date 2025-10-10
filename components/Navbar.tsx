import React from "react";
import Link from "next/link";
import GlassSurface from "./ui/glass-surface";
const Navbar = () => {
  return (
    <div className="flex fixed top-20 inset-x-0  mx-auto font-funnel text-md   z-[5000]  px-5 py-2  items-center justify-center">
      <GlassSurface width={500} height={80} borderRadius={100} className="">
        <div className="mr-6">
          <Link href="/" className="font-thin relative group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="mr-6">
          <Link href="/" className="font-thin relative group">
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="mr-6">
          <Link href="/" className="font-thin relative group">
            Work
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="mr-6">
          <Link href="/" className="font-thin relative group">
            Journey
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="">
          <Link href="/" className="font-thin relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>
      </GlassSurface>
    </div>
  );
};

export default Navbar;
