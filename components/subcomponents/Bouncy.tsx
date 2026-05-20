"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BouncyFooter = () => {
  const visualRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = visualRef.current;
    const container = containerRef.current;

    if (!element || !container) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      onEnter: (self) => {
        const velocity = Math.abs(self.getVelocity());
        // Calculate intensity based on scroll speed
        const intensity = 1 + Math.min(velocity / 4000, 0.6);

        gsap.fromTo(
          element,
          { scaleY: intensity },
          {
            duration: 2.2,
            scaleY: 1,
            transformOrigin: "bottom center",
            ease: "elastic.out(1.2, 0.3)",
            overwrite: true,
          },
        );
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative w-full h-100 md:h-125 mt-[20vh] bg-transparent overflow-visible"
    >
      {/* The "Bouncy Wrapper" 
        By putting the Map and the Arch inside this div, 
        they both bounce as a single unit.
      */}
      <div
        ref={visualRef}
        className="absolute inset-0  w-full h-full will-change-transform overflow-visible"
      >
        {/* The Arch/Background */}
        <div className="mx-auto w-full h-full relative bg-transparent md:rounded-t-[50%_100%] rounded-t-[50%_20%]  shadow-[0_-100px_200px_-100px_#0099FF40] border-t border-x border-emerald-50/20">
          <div className="absolute top-0 left-1/2 -z-20 -translate-x-1/2">
            <div className="hidden p-4 w-screen md:flex justify-center rounded-full mt-12  ">
              <Image
                src="/MAP.svg"
                width={1400}
                height={800}
                className="lg:max-w-[70%] md:max-w-[70%]  h-auto"
                alt="circlelogo"
                priority
              />
            </div>
            <div className="md:hidden p-4 w-screen flex justify-center rounded-full mt-12  ">
              <Image
                src="/MAPM.svg"
                width={1400}
                height={800}
                className="lg:max-w-[70%] md:max-w-[70%]  h-auto"
                alt="circlelogo"
                priority
              />
            </div>
          </div>
        </div>

       
        {/* Grain/Noise Texture Layer */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none rounded-t-[50%_100%]"
          style={{
            backgroundImage: `url("https://assets.codepen.io/16327/noise.png")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>
    </footer>
  );
};

export default BouncyFooter;
