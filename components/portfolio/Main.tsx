"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ListFilter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({});

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: Array<string>;
};

export default function PortfolioSection({
  portfolio,
}: {
  portfolio: Array<Project>;
}) {
  const [activeTab, setActiveTab] = useState("All");
  const [open, setIsOpen] = useState(false);
  const [projects, setProjects] = useState(portfolio);
  const [categories, setCategories] = useState([
    "All",
    ...new Set(portfolio.flatMap((p) => p.tags)),
  ]);

  return (
    <section
      className={`${inter.className} bg-[#0099FF]/2.5 pb-20 px-6 md:px-12 lg:px-24 text-black`}
    >
      <div className="max-w-7xl mx-auto">
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
            <Link
              href="/work"
              className="hover:text-blue-600 transition-colors"
            >
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

          <button className="bg-[#0D70DA] text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all">
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
              <Menu />
            </button>
          )}
          {open && (
            <div className="md:hidden absolute right-5 bg-[#0D70DA]/70 rounded-xl text-white top-2/3 px-2 flex flex-col items-center gap-10">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Work
              </a>
              <Link
                href="/services"
                className="hover:text-blue-600 transition-colors  flex items-center gap-1"
              >
                Services <ChevronDown size={16} className="mt-0.5" />
              </Link>
              <a href="#" className="hover:text-blue-600  transition-colors">
                Contact
              </a>
            </div>
          )}
        </nav>

        <div className="flex flex-col mt-12 items-center gap-6 mb-16">
          <div className="relative w-full max-w-2xl flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder='Search "Latest Projects"'
                className="w-full pl-12  pr-4 py-4 bg-white rounded-full border border-[#D9D9D9] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-[#757575]"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#0D70DA]">
              <ListFilter className="w-4 h-4 text-[#0099FF]" />
              <span className=" font-medium text-[#0099FF]">Filters</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(cat!)}
                className={`px-5 py-1.5 rounded-full  font-medium border transition-all ${
                  activeTab === cat!
                    ? "border bg-white   border-black text-black font-bold"
                    : "bg-white text-[#757575] border-[#D9D9D9] hover:border-gray-400"
                }`}
              >
                {cat!}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, idx) => {
            console.log(project);
            return (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden mb-8 bg-gray-100">
                <Image src={project.image} alt="image" width={100} height={200} className="w-full h-full object-cover"/>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full border border-black text-sm text-black"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl mt-8 font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="p-3 rounded-full border border-black flex items-center justify-center">
                  <ArrowRight className="w-10 h-10" />
                </div>
              </div>

              <p className="text-[#757575] text-sm leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
