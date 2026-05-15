"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Geologica, Inter } from "next/font/google";
import Image from "next/image";

const geo = Geologica({});
const inter = Inter({});

export default function VisionCTA() {
  return (
    <section
      className={`relative w-full bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5 ${inter.className}`}
    >
      {/* Background Atmosphere - High-end radial glows */}
      <div className="absolute top-0 left-0 w-150 h-150 bg-radial from-[#0099FF] to-[#D2EDFF] blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-75 h-75 bg-radial from-[#0099FF] to-[#D2EDFF] blur-[100px] rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="space-y-8">
          <h2
            className={`${geo.className} text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight`}
          >
            Ready to turn your <br />
            <span className="text-white/90 ">vision into </span>
            <span className="text-white">Reality</span>
          </h2>

          <p className="text-[#D5D5D5] text-lg md:text-xl max-w- leading-relaxed">
            At Beecomb, we craft AI-ready design systems for modern software
            responsive, scalable, and human-centered.
          </p>
          <button className="text-white rounded-4xl border border-white bg-[#0099FF] flex gap-2 font-semibold px-6 py-3">
            See AI in Action <ArrowUpRight />
          </button>
        </div>

        {/* Right Side: Diamond Asset Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={"/Diamond.gif"}
            alt="gif"
            className="w-auto h-auto"
            height={430}
            width={430}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
