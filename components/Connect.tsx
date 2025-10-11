import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="flex flex-col h-[848.48px] sm:h-[1088px] md:h-[1252.48px] lg:h-[1714px] xl:h-[1854px] 2xl:h-[2307.2px]  ">
      <div className=" relative overflow-hidden h-full  ">
        <MacbookScroll
          title={
            <span className="font-funnel ">
              Let&apos;s Connet <br /> <span className="text-purple">Grow</span>{" "}
              together.
            </span>
          }
          src="/Connect8.png"
          badge=""
          showGradient={false}
        />
      </div>
    </div>
  );
}
