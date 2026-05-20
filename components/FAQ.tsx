"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowBigDown, ArrowUpRight } from "lucide-react";
import { Geologica, Inter, Montserrat } from "next/font/google";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We offer end-to-end digital solutions including custom software development, web and mobile app development, UI/UX design, AI & automation solutions, cloud integration, and dedicated development teams tailored to business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on complexity, but an average MVP typically takes 6-12 weeks.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients globally, utilizing remote collaboration tools and flexible time-zone scheduling.",
  },
  {
    question: "Can you help redesign an existing product or website?",
    answer:
      "Absolutely. We perform UI/UX audits and technical refactoring to modernize and scale existing platforms.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes, we offer various maintenance packages to ensure your product remains secure and up-to-date.",
  },
];

const inter = Inter({});
const geo = Geologica({});
const mont = Montserrat();

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0B0B0B] border border-[#373636]/50 border-r-0 border-l-0 border-b-0 text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
        <div className="space-y-8">
          <span
            className={`text-[#00B1FF] ${geo.className} tracking-widest text-sm uppercase  `}
          >
            FAQS
          </span>
          <h2 className={`${mont.className} text-2xl mt-8 md:text-5xl font-semibold leading-tight`}>
            Questions? <br className="md:block hidden" />
            We’ve <br />
            <span className="text-[#00AEEF]">Got Answers</span>
          </h2>
          <p className={`${inter.className} text-[#D5D5D5]  max-w-md leading-relaxed`}>
            Beecomb reduces design complexity & speeds up product launches with
            clear UX workflows, scalable visual systems, and no-code execution.
          </p>

          <button className={`${inter.className} group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-200`}>
            Book a free call
            <span className="transition-transform group-hover:rotate-45 group-hover:translate-x-1">
              <ArrowUpRight/>
            </span>
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`cursor-pointer rounded-xl transition-all duration-300 border ${
                  isOpen
                    ? "border-[#00B1FF] bg-[#FFFFFF0A] shadow-[0_0_20px_rgba(0,174,239,0.1)]"
                    : "border-[#3C3C3C] bg-[#FFFFFF0A] hover:border-white/20"
                }`}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3
                    className={`text-lg font-medium transition-colors ${geo.className} text-white`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-[#00B1FF] border border-[#00B1FF] text-[#515050]"
                        : "bg-[#2B2A2A] border border-[#373636] text-[#515050]"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 text-[#D5D5D5] leading-relaxed text-sm md:text-base ${inter.className}`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
