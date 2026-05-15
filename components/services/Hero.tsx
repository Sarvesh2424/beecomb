"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Inter, Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({});

const mont = Montserrat_Alternates({
  weight: "600",
});

function Hero() {
  const [open, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-[url('/PortBG.png')] min-h-175 h-auto overflow-x-clip relative bg-cover bg-no-repeat ${inter.className}`}
    >
      <div className="absolute z-10 pointer-events-none bottom-0 right-0">
        <Image
          src="/ServicesHero.svg"
          width={774}
          height={500}
          alt="hero"
          className="w-auto h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-radial from-[#0099FF52] to-[#D2EDFF] blur-[120px] rounded-full 10 -translate-x-1/4 translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-175 h-175 bg-radial from-[#0099FF52] to-[#D2EDFF] blur-[120px] rounded-full 10 -translate-x-1/4 translate-y-1/3" />

      <div className="absolute bottom-0 right-0 w-175 h-175 bg-radial from-[#FF00D052] to-[#D2EDFF] blur-[120px] rounded-full 10 overflow-x-hidden translate-x-1/3 translate-y-1/3" />
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/Logo.svg"
            width={52}
            height={44}
            className="w-auto h-auto"
            alt="logo"
          />
        </div>
        {open ? (
          <button
            className="md:hidden text-black"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen((p) => !p);
            }}
          >
            <X />
          </button>
        ) : (
          <button
            className="md:hidden text-black"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen((p) => !p);
            }}
          >
            <Menu />
          </button>
        )}
        <div className="hidden md:flex items-center gap-10 text-[#0E1435]">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Work
          </a>
          <Link
            href="/services"
            className="hover:text-blue-600 transition-colors text-[#0E1435] flex items-center gap-1"
          >
            Services <ChevronDown size={16} className="mt-0.5" />
          </Link>
          <a
            href="#"
            className="hover:text-blue-600 text-[#0E1435] transition-colors"
          >
            Contact
          </a>
        </div>

        <button className="bg-[#0D70DA] text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all">
          Get a Proposal <ArrowRight size={18} />
        </button>
        <div className="md:hidden flex items-center gap-10 text-[#0E1435]">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Work
          </a>
          <Link
            href="/services"
            className="hover:text-blue-600 transition-colors text-[#0E1435] flex items-center gap-1"
          >
            Services <ChevronDown size={16} className="mt-0.5" />
          </Link>
          <a
            href="#"
            className="hover:text-blue-600 text-[#0E1435] transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
      <h1
        className={`md:w-1/3 flex relative items-center h-full ml-16 mt-24 text-3xl md:text-6xl text-[#0E1435] ${mont.className}`}
      >
        Services Built for
      </h1>
      <h1
        className={`md:w-1/3 relative flex items-center h-full ml-16 mt-4 text-3xl md:text-6xl text-[#0E1435] ${mont.className}`}
      >
        {" "}
        Performance,
      </h1>
      <h1
        className={`md:w-1/3 relative flex items-center h-full ml-16 mt-4 text-3xl md:text-6xl text-[#0E1435] ${mont.className}`}
      >
        {" "}
        Scale, and{" "}
      </h1>
      <h1
        className={`md:w-1/3 relative flex items-center h-full ml-16 mt-4 text-3xl md:text-6xl text-[#0E1435] ${mont.className}`}
      >
        Impact
      </h1>
    </div>
  );
}

export default Hero;
