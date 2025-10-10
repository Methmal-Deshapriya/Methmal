"use client";

import React from "react";
import { cn } from "@/utils/cn";
// optional helper if you're using class merging

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-funnel box-border border-2  hover:text-white text-slate-200 rounded-xl",
        "bg-transparent shadow-[0_0_15px_rgba(203,172,249,0.4)] hover:shadow-[0_0_25px_rgba(203,172,249,0.8)]",
        "transition-all duration-300 ease-in-out hover:scale-105",
        "items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
