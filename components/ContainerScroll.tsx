"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";

export function ConnectScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold font-funnel text-white">
              <span className="text-purple text-3xl md:text-[3rem]">
                Unleash the power of
              </span>{" "}
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Network
              </span>
            </h1>
          </>
        }
      >
        <picture>
          <source
            srcSet={`/desktop.png`}
            type="image/png"
            media="(min-width:1127px)"
          />
          <source
            srcSet={`/big-tablet.png`}
            type="image/png"
            media="(min-width:792px)"
          />
          <source
            srcSet={`/tablet.png`}
            type="image/png"
            media="(min-width:768px)"
          />
          <source
            srcSet={`/big-mobile.png`}
            type="image/png"
            media="(min-width:455px)"
          />

          <Image
            src={`/mobile.png`}
            alt="hero"
            height={700}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </picture>
      </ContainerScroll>
    </div>
  );
}
