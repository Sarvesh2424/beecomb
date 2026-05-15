"use client";

import React from "react";
import Link from "next/link";
import { Globe, X } from "lucide-react";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";

const mont = Montserrat({});
const inter = Inter({});

const footerLinks = {
  Company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Work", href: "/" },
    { name: "Contact", href: "/" },
    { name: "Insights", href: "/" },
    { name: "Terms & Conditions", href: "/" },
    { name: "Privacy Policy", href: "/" },
  ],
  Services: [
    { name: "UI UX Consultation", href: "#" },
    { name: "UI UX Design", href: "#" },
    { name: "Web Design", href: "#" },
    { name: "MVP Design", href: "#" },
    { name: "Product Revamp", href: "#" },
    { name: "Brand Design", href: "#" },
    { name: "NoCode Development", href: "#" },
    { name: "Webflow Development", href: "#" },
    { name: "Framer Development", href: "#" },
    { name: "Figma Design", href: "#" },
  ],
  Industries: [
    { name: "AI/ML", href: "#" },
    { name: "SaaS", href: "#" },
    { name: "Web3", href: "#" },
    { name: "Travel", href: "#" },
    { name: "Fintech", href: "#" },
    { name: "EdTech", href: "#" },
    { name: "Logistics", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "Healthcare", href: "#" },
    { name: "E-commerce", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer
      className={`bg-[#0B0B0B] border border-[#373636]/50 border-r-0 border-l-0 border-b-0 text-white pt-10 pb-10 px-6 md:px-12 lg:px-24 border-t ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Massive Wordmark */}
        <div className="w-full mb-16 overflow-hidden">
          <h1
            className={`md:text-[248px] text-9xl font-semibold leading-none text-white select-none ${mont.className}`}
          >
            BeeComb
          </h1>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <p className="text-[#D5D5D5] text-lg leading-relaxed max-w-3/4">
              We transform ideas into user-centered digital experiences for
              businesses worldwide, from Fortune 500s to startups, using Figma,
              Webflow, and no-code solutions.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {["/Globe.svg", "/LI.svg", "/INS.svg", "/FB.svg", "/X.svg"].map(
                (Icon, idx) => (
                  <div key={idx} className="rounded-full bg-[#242323] p-3">
                    <Image
                      src={Icon}
                      alt="icon"
                      width={18}
                      height={18}
                      className="w-5  h-5"
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-lg font-bold">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#8F8F8F] hover:text-white transition-colors duration-200 text-sm md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#FFFFFFB2] text-xs">
            © ZeeFrames (Private) Limited. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
