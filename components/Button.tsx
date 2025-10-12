"use client";

import React, { useState } from "react";

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
  const [text, setText] = useState("Download CV");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("Downloaded");
    setTimeout(() => {
      setText("Download CV");
    }, 3000);
  };
  return (
    <div className="z-10  relative">
      <a href="/Methmal_Deshapriya_CV.pdf" download="Methmal_Deshapriya_CV.pdf">
        <button
          className="bg-[#530080] py-3 px-5 rounded-full font-funnel shadow-xl shadow-black/[0.1] hover:shadow-black/[0.2] transition-all duration-300 ease-in-out hover:scale-105 items-center justify-center    outline-none "
          onClick={handleClick}
        >
          {text}
        </button>
      </a>
    </div>
  );
};

export default Button;
