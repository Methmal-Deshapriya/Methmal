"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { text } from "stream/consumers";
import { a, div } from "motion/react-client";

// optional helper if you're using class merging

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const [isDownloaded, setDownloaded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDownloaded(true);
  };
  return (
    <div className="z-10">
      {!isDownloaded && (
        <a
          href="/Methmal_Deshapriya_CV.pdf"
          download="Methmal_Deshapriya_CV.pdf"
        >
          <button
            className={cn(
              "font-funnel  box-border border-2 border-white focus:border-none hover:border-purple text-white hover:text-purple rounded-xl",
              "bg-transparent shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(104,0,159,0.8)]",
              "transition-all duration-300 ease-in-out hover:scale-105",
              "items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
              className
            )}
            onClick={handleClick}
          >
            Download CV
          </button>
        </a>
      )}
    </div>
  );
};

export default Button;
