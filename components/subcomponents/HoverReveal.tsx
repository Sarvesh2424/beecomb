"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const listItems = [
  {
    image: "/P1.svg",
    text: "restart reverse scrub pin markers overwrite modifiers",
  },
  {
    image: "/P2.svg",
    text: "toggleActions start end once refresh from to",
  },
  {
    image: "/P3.svg",
    text: "ScrollSmoother Flip Draggable SplitText InertiaPlugin",
  },
  {
    image: "/P4.svg",
    text: "onComplete onUpdate quickSetter quickTo utils.toArray.",
  },
  {
    image: "/P5.svg",
    text: "Power2 Power3 Power4 Back Elastic Bounce Expo Sine",
  },
];

export const SwipeList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement (pixel perfect inertia)
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div 
      className="w-full min-h-screen bg-black text-white flex items-center py-20"
      onMouseMove={handleMouseMove}
    >
      <ul className="w-full list-none p-0 m-0 border-t border-white/10">
        {listItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="group relative border-b border-white/10 px-8 py-10 md:py-16 cursor-none overflow-visible"
          >
            {/* List Text */}
            <h3 className="text-2xl md:text-5xl font-medium tracking-tight text-[#8F8F8F] group-hover:text-white transition-colors duration-300 relative z-20">
              {item.text}
            </h3>

            {/* The Floating Image */}
            {activeIndex === index && (
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
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                className="w-[250px] h-[320px] md:w-[350px] md:h-[450px] object-cover rounded-2xl pointer-events-none z-50 shadow-2xl"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwipeList;