"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRef, useState } from "react";

const mont = Montserrat({});

const Solutions = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      title: "UI/UX Design",
      description: "Rich experience plus unlimited imagination.",
      type: "blue",
      // Placeholder for your laptop mockup image
      imageSrc: "/Sol3.png",
    },
    {
      title: "AI & Automation",
      description: "Seamless UI experience for shoppers.",
      // Placeholder for your phone interface mockup image
      imageSrc: "/Sol1.png",
    },
    {
      title: "Web Development",
      description: "Keep your site up-to-date and secure.",
      // Placeholder for your yellow screen laptop mockup image
      imageSrc: "/Sol2.png",
    },
    {
      title: "Custom Applications",
      description: "Custom applications to enhance your business.",
      // Placeholder for your layered window mockup image
      imageSrc: "/Sol4.png",
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    // Debounce or calculate based on the width of a single mobile card (85vw + gap)
    const index = Math.round(scrollLeft / (clientWidth * 0.85));

    // Ensure index stays within bounds
    if (index >= 0 && index < cards.length) {
      setActiveIndex(index);
    }
  };

  // Optional: Allows users to click a dot to snap to that card
  const scrollToCard = (index:number) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: index * (clientWidth * 0.85),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };
  return (
    <section
      className={`${mont.className} bg-linear-to-t from-100% to-0% from-[#070707] to-[#07070700] relative text-white py-28 font-sans`}
    >
      <div
        className=" hidden md:block absolute -top-20 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(10, 10, 10, 1) 100%)",
        }}
      />
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-center text-3xl md:text-6xl font-semibold mb-20 leading-tight">
          Solutions We <span className="text-[#00B1FF]">Provide</span>
        </h2>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-4 p-4 md:p-0 gap-8 scrollbar-none"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-[#222222]
                rounded-4xl shrink-0 w-[85vw] md:w-auto overflow-hidden relative p-10 h-125  flex flex-col justify-end`}
            >
              {/* Mockup Placeholder Div - This simulates where your images would go */}
              <div className="absolute inset-0 z-0 flex items-center justify-center p-4">
                {/* For actual implementation, replace this with your Image component */}
                <div className="w-full h-full  rounded-2xl flex items-center justify-center text-gray-600 text-xs text-center">
                  <Image
                    src={card.imageSrc}
                    alt="sol"
                    layout="fill"
                    objectFit="cover"
                    className="w-auto h-auto"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="text-white leading-relaxed text-sm max-w-[85%]">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <div className="relative z-10 flex flex-col items-start pt-10">
                <button
                  className={`${
                    card.type === "blue"
                      ? "bg-[#0099FF] text-white"
                      : "border border-white text-white bg-transparent"
                  } w-16 h-16 rounded-full flex items-center hover:bg-[#0099FF]  justify-center shadow-2xl `}
                >
                  {card.type === "blue" ? (
                    <ArrowUpRight size={32} />
                  ) : (
                    <ArrowRight size={32} />
                  )}
                </button>
              </div>
              <div className="absolute inset-0 h-125 bg-linear-to-b from-transparent to-black"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-8 mt-4 md:hidden">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-2 bg-[#0099FF]" // Active dot expands slightly
                  : "w-2 bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
