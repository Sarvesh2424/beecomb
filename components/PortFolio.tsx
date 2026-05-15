"use client";

import { Inter, Montserrat } from "next/font/google";

const monts = Montserrat({});
const inter = Inter({});

const technologies = [
  {
    name: "HTML5",
    icon: "HTML.svg",
  },
  {
    name: "CSS3",
    icon: "CSS3.svg",
  },
  {
    name: "JavaScript",
    icon: "Javascript.svg",
  },
  {
    name: "Bootstrap",
    icon: "Bootstrap.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "TailwindCSS.svg",
  },
  {
    name: "React.js",
    icon: "React.svg",
  },
  {
    name: "Vue.js",
    icon: "Vue.svg",
  },
  {
    name: "Flutter",
    icon: "Flutter.svg",
  },
  {
    name: "Dart",
    icon: "Dart.svg",
  },
  {
    name: "Firebase",
    icon: "Firebase.svg",
  },
  {
    name: "REST APIs",
    icon: "REST.svg",
  },
  {
    name: "SQLite",
    icon: "SQLITE.svg",
  },
];

const TechnologySection = () => {
  return (
    <section className="relative bg-[url('/PortBG.png')] py-24 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <h2
          className={`${monts.className} text-4xl md:text-5xl font-semibold text-[#1a1a2e] tracking-tight mb-4`}
        >
          TECHNOLOGIES <span className="text-[#00B1FF]">WE USE</span>
        </h2>
        <p
          className={`text-[#757575] ${inter.className} text-sm md:text-base font-medium max-w-2xl mx-auto`}
        >
          Empowering Our Products with Modern, Scalable & Robust Technologies
        </p>
      </div>

      {/* Grid Container */}
      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto">
        <div className="grid md:grid-cols-7 grid-cols-2 items-center justify-center gap-6 md:gap-8 justify-items-center">
          {technologies.slice(0, 7).map((tech, idx) => (
            <div
              key={idx}
              className={`
                flex flex-col items-center justify-center gap-2
                w-32 h-32 md:w-36 md:h-36 
                bg-white rounded-2xl shadow-[0_7px_4px_0px_#0000001F]
                border border-[#D4D4D4]
                transition-all duration-500  
                ${inter.className} 
                group cursor-default
              `}
            >
              <div
                className={`relative w-12 h-12 md:w-14 md:h-14 mb-3 transition-transform duration-500 `}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain "
                />
              </div>
              <span className="font-medium text-black ">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-5 w-max grid-cols-2 mt-8 items-center justify-center gap-6 md:gap-8 justify-items-center">
          {technologies.slice(7, 13).map((tech, idx) => (
            <div
              key={idx}
              className={`
                flex flex-col items-center justify-center gap-2
                w-32 h-32 md:w-36 md:h-36 
                bg-white rounded-2xl shadow-[0_7px_4px_0px_#0000001F]
                border border-[#D4D4D4]
                transition-all duration-500  
                ${inter.className} 
                group cursor-default
              `}
            >
              <div
                className={`relative w-12 h-12 md:w-14 md:h-14 mb-3 transition-transform duration-500 `}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain "
                />
              </div>
              <span className="font-medium text-black ">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-8 z-10 flex flex-col items-center max-w-7xl mx-auto">
        <div className="grid md:grid-cols-7 grid-cols-2 items-center justify-center gap-6 md:gap-8 justify-items-center">
          {technologies.slice(0, 7).map((tech, idx) => (
            <div
              key={idx}
              className={`
                flex flex-col items-center justify-center gap-2
                w-32 h-32 md:w-36 md:h-36 
                bg-white rounded-2xl shadow-[0_7px_4px_0px_#0000001F]
                border border-[#D4D4D4]
                transition-all duration-500  
                ${inter.className} 
                group cursor-default
              `}
            >
              <div
                className={`relative w-12 h-12 md:w-14 md:h-14 mb-3 transition-transform duration-500 `}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain "
                />
              </div>
              <span className="font-medium text-black ">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2 mt-8 items-center justify-center gap-6 md:gap-8 w-max ">
          {technologies.slice(7, 13).map((tech, idx) => (
            <div
              key={idx}
              className={`
                flex flex-col items-center justify-center gap-2
                w-32 h-32 md:w-36 md:h-36 
                bg-white rounded-2xl shadow-[0_7px_4px_0px_#0000001F]
                border border-[#D4D4D4]
                transition-all duration-500  
                ${inter.className} 
                group cursor-default
              `}
            >
              <div
                className={`relative w-12 h-12 md:w-14 md:h-14 mb-3 transition-transform duration-500 `}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain "
                />
              </div>
              <span className="font-medium text-black ">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
