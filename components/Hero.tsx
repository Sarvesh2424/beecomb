'use client'

import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Inter, Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
// import AppRow from "./subcomponents/AppRow";
import AppRow1 from "./subcomponents/AppRow1";
import InfiniteEmojiMarquee from "./subcomponents/AppRow1";
import Link from "next/link";
import { useState } from "react";

const mont = Montserrat_Alternates({
  weight: "600",
});

const inter = Inter({});

const Hero = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div
      className={`md:bg-[url('/BG.svg')] bg-[url('/BGM.svg')] bg-cover bg-no-repeat ${inter.className}`}
    >
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            {" "}
            <Image
              src="/Logo.svg"
              width={52}
              height={44}
              className="w-auto h-auto"
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[#0E1435]">
          <Link href="/work" className="hover:text-blue-600 transition-colors">
            Work
          </Link>
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

        <button className="bg-[#0D70DA] text-white px-7 py-3 hidden rounded-full font-semibold md:flex items-center gap-2 hover:bg-blue-700 transition-all">
          Get a Proposal <ArrowRight size={18} />
        </button>
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
             <Image src="/Menu.svg" alt="menu" className="w-auto h-auto" height={10} width={10}/>
          </button>
        )}
        {open && (
          <div className="md:hidden absolute right-5 bg-white py-2 z-20 rounded-xl text-black top-2/3 px-2 flex flex-col items-center gap-10">
            <Link href="/work" className="hover:text-blue-600 transition-colors">
              Work
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-600 transition-colors  flex items-center gap-1"
            >
              Services <ChevronDown size={16} className="mt-0.5" />
            </Link>
            <a
              href="#"
              className="hover:text-blue-600  transition-colors"
            >
              Contact
            </a>
             <button className="bg-[#0D70DA] text-white px-7 py-3  rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all">
          Get a Proposal <ArrowRight size={18} />
        </button>
          </div>
        )}
      </nav>

      <section className="relative  pt-20 pb-16 px-4 text-center max-w-7xl mx-auto">
        <span className="text-[#0D70DA] font-medium text-sm md:text-xl mb-12 block">
          Conversion-Focused Web Design, SEO & AI Search Optimization
        </span>

        <h1
          className={`text-3xl md:text-7xl font-extrabold text-[#0E1435] tracking-tight leading-[1.1] mb-12 ${mont.className}`}
        >
          Turning Bold Ideas Into <br />
          <span className="inline-block">Measurable Business Outcomes</span>
        </h1>
      </section>
      <section className="relative z-10  px-4 text-center mx-auto">
        <div className="overflow-hidden">
          <InfiniteEmojiMarquee />
        </div>
      </section>
    </div>
  );
};

export default Hero;
