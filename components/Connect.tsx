import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="flex flex-col h-full ">
      <div className=" overflow-hidden  ">
        <MacbookScroll
          title={
            <span className="font-funnel ">
              Let's Connet <br /> <span className="text-purple">Grow</span>{" "}
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
