"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Geologica } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";

// Added image to the interface so TypeScript doesn't complain
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: string; 
}

const geologica = Geologica({ subsets: ["latin"] });

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]); // Recalculate if data changes

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100%", "end 10%"], 
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10 relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove} // TRACK MOUSE POSITION
    >
      <div ref={ref} className="relative max-w-8xl mx-auto">
        <div className="flex flex-col gap-16 items-stretch">
          {data.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)} // SET ACTIVE ON HOVER
              onMouseLeave={() => setActiveIndex(null)}   // CLEAR ON LEAVE
              className="flex flex-col ml-16 justify-end items-stretch pt-10 md:pt-3 group cursor-none"
            >
              <div className="flex flex-col md:flex-row z-40 items-start self-start max-w-xs lg:max-w-sm md:w-full">
                <h3
                  className={`${geologica.className} hidden md:block text-xl md:text-2xl font-semibold text-[#8F8F8F] group-hover:text-white transition-colors duration-500`}
                >
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-0 pr-4 w-full">
                <h3 className="md:hidden block text-3xl mb-4 text-left font-bold text-[#8F8F8F]">
                  {item.title}
                </h3>
                {item.content}
              </div>

              {/* Floating Image Logic - Fixed positioning inside map */}
              {activeIndex === index && item.image && (
                <motion.img
                  src={item.image}
                  alt="preview"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  style={{
                    position: "fixed",
                    top: smoothY,
                    left: smoothX,
                    translateX: "100%",
                    translateY: "-50%",
                  }}
                  className="w-[250px] h-[320px] md:w-[350px] md:h-[450px] object-cover rounded-2xl pointer-events-none z-50 shadow-2xl"
                />
              )}
            </div>
          ))}
        </div>

        {/* The Animated Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-neutral-800"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-[#00B1FF] shadow-[0_0_8px_#00AEEF]"
          />
        </div>
      </div>
    </div>
  );
};