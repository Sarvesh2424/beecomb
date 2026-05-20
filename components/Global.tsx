"use client";

import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import BouncyFooter from "./subcomponents/Bouncy";

const locations = [
  {
    id: "headquarters",
    city: "Luton, UK",
    label: "Headquarters",
    sub: "Strategic innovation center",
    top: "35%",
    left: "48%",
  },
  {
    id: "canada",
    city: "New Brunswick, Canada",
    label: "Regional Office",
    sub: "Western Operations",
    top: "45%",
    left: "25%",
  },
  {
    id: "uae",
    city: "Sharjah, UAE",
    label: "Regional Office",
    sub: "Middle East Operations",
    top: "55%",
    left: "52%",
  },
  {
    id: "india",
    city: "Bangalore, India",
    label: "Tech Hub",
    sub: "Development Powerhouse",
    top: "62%",
    left: "75%",
  },
];

const monts = Montserrat({});

const GlobalPartner = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden flex md:gap-104 flex-col items-center">
      <BouncyFooter/>

      <div className="md:hidden grid grid-cols-2 gap-2">
        <div className="bg-[#C2E7FF33] p-3 rounded-4xl">
          <p className="text-[#1E2A2EE5] font-['Arial']">Tech Hub</p>
          <h1 className="font-clash text-[#1E2A2E] font-bold text-xl">Bangalore, India</h1>
          <p className="text-[#1E2A2EBF] font-['Arial'] text-sm">Development Powerhouse</p>
        </div>
        <div className="bg-[#C2E7FF33] p-3 rounded-4xl">
          <p className="text-[#1E2A2EE5] font-['Arial']">Headquaters</p>
          <h1 className="font-clash text-[#1E2A2E] font-bold text-xl"> Luton, UK</h1>
          <p className="text-[#1E2A2EBF] font-['Arial'] text-sm">Strategic innovation center</p>
        </div>
        <div className="bg-[#C2E7FF33] p-3 rounded-4xl">
          <p className="text-[#1E2A2EE5] font-['Arial']">Regional Office</p>
          <h1 className="font-clash text-[#1E2A2E] font-bold text-xl">Sharjah, UAE</h1>
          <p className="text-[#1E2A2EBF] font-['Arial'] text-sm">Middle East Operations</p>
        </div>
        <div className="bg-[#C2E7FF33] p-3 rounded-4xl">
          <p className="text-[#1E2A2EE5] font-['Arial']">Regional Office</p>
          <h1 className="font-clash text-[#1E2A2E] font-bold text-xl">New Brunswick, Canada</h1>
          <p className="text-[#1E2A2EBF] font-['Arial'] text-sm">Western Operations</p>
        </div>
      </div>

      {/* Typography */}
      <div className="text-center  mt-12  md:mt-0 md:max-w-7xl w-full relative z-10">
        <h2 className={`text-2xl w-full  md:text-6xl font-semibold text-gray-900 md:leading-tight md:tracking-tight ${monts.className}`}>
          Your <span className="text-[#00B1FF]">Global Partner</span> for <br />
          Scalable Digital Solutions
        </h2>
      </div>
    </section>
  );
};

export default GlobalPartner;
