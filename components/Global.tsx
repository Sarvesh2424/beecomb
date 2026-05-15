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
    <section className="bg-white py-24 px-6 relative overflow-hidden flex gap-104 flex-col items-center">
      <BouncyFooter/>

      {/* Typography */}
      <div className="text-center max-w-7xl relative z-10">
        <h2 className={`"text-4xl md:text-6xl font-semibold text-gray-900 leading-tight tracking-tight ${monts.className}`}>
          Your <span className="text-[#00B1FF]">Global Partner</span> for <br />
          Scalable Digital Solutions
        </h2>
      </div>
    </section>
  );
};

export default GlobalPartner;
