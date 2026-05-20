"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Geist, Montserrat } from "next/font/google";

const services = [
  {
    title: "UX/UI Design",
    image: "/Serv1.svg",
  },
  {
    title: "AI & Intelligent Solutions",
    image: "/Serv2.svg",
  },
  {
    title: "MVP Development",
    image: "/Serv3.svg",
  },
  {
    title: "Mobile App Development",
    image: "/Serv4.svg",
  },
  {
    title: "Web Application Development",
    image: "/Serv5.svg",
  },
  {
    title: "Website Design & Development",
    image: "/Serv6.svg",
  },
  {
    title: "E-commerce Development",
    image: "/Serv7.svg",
  },
  {
    title: "SaaS Product Engineering",
    image: "/Serv8.svg",
  },
  {
    title: "Dedicated Team",
    image: "/Serv9.svg",
  },
];

const mont = Montserrat({});
const geist = Geist({});

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className={`${geist.className} bg-black text-white py-24 px-6 md:px-12 lg:px-24`}
    >
      {/* Header section  */}
      <div className="mb-16">
        <h2 className={`md:text-5xl text-3xl font-bold mb-4 ${mont.className}`}>
          What <span className="text-[#0099FF]">we do</span>
        </h2>
        <p className="md:text-[#99A1AF] text-[#99A1AF] max-w-lg     text-xl leading-relaxed">
          Make your vision a reality, right now. We help founders turn early
          ideas into products people remember by removing the fluff and
          distilling the good stuff.
        </p>
      </div>

      {/* Services List */}
      <div className="">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="group relative flex items-center justify-center py-8 cursor-pointer overflow-visible"
          >
            <div className="w-1/3">
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -20, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20, rotate: 5 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute bottom-0 md:left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20  lg:block"
                  >
                    <div className="relative  h-auto overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={574}
                        height={184}
                        priority
                      />
                      {/* Dark overlay to pop the blue border */}
                      <div className="absolute inset-0 mix-blend-overlay" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* The Text Title */}
            <h3
              className={`text-4xl w-2/3 md:text-8xl mt-8 font-medium transition-all duration-500 ease-out z-10 ${
                activeIndex === index
                  ? "text-[#0099FF] text-start -translate-y-24 md:translate-y-0  md:translate-x-58"
                  : "text-white"
              }`}
            >
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
