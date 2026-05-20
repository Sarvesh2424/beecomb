import React from "react";
import Image from "next/image";
import { Geologica, Inter, Montserrat } from "next/font/google";
import { TimelineDemo } from "./subcomponents/TimeLine";
import SwipeList from "./subcomponents/HoverReveal";

const monts = Montserrat({});
const inter = Inter({});
const geologica = Geologica({});

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      subtitle: "Project Fit Assessment",
      description:
        "We start with a consultation to understand your idea, goals, and market. This helps us tailor our services to meet your needs.",
    },
    {
      title: "Strategic Roadmap",
      subtitle: "Project Fit Assessment",
      description:
        "Together, we create a customized roadmap outlining each milestone in your MVP development journey.",
    },
    {
      title: "Design",
      subtitle: "User-Centered Approach",
      description:
        "We begin with in-depth research to understand your users, business goals, and industry trends. This allows us to create designs that are not only visually appealing but also highly functional and intuitive.",
    },
    {
      title: "Build & Iterate",
      subtitle: "Project Fit Assessment",
      description:
        "We start with a consultation to understand your idea, goals, and market. This helps us tailor our services to meet your needs.",
    },
    {
      title: "Launch & Support",
      subtitle: "Project Fit Assessment",
      description:
        "We start with a consultation to understand your idea, goals, and market. This helps us tailor our services to meet your needs.",
    },
  ];

  return (
    <section
      className={` ${inter.className} bg-black text-white py-24 px-6 md:px-12 lg:px-24 font-sans`}
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2
          className={`text-3xl  md:text-5xl font-semibold mb-6 ${monts.className}`}
        >
          From <span className="text-[#00B1FF]">Idea</span> To{" "}
          <span className="text-[#00B1FF]">Execution</span>
        </h2>
        <p className="text-[#757575] text-xs md:text-base leading-relaxed">
          We have become experts in creating top-notch digital products. We
          design beautifully and develop excellently. And we care deeply about
          what we do.
        </p>
      </div>

      <div className="max-w-7xl hidden mx-auto md:grid grid-cols-1 lg:grid-cols-2items-start">
        <TimelineDemo />
      </div>
      <div className="md:hidden mt-12">
        <Image
          src={"/P1.svg"}
          alt="img"
          height={100}
          width={100}
          className="w-auto h-auto"
        />
        <h3
          className={`${geologica.className}mb-4 mt-4 text-xl md:text-2xl font-semibold text-[#8F8F8F] group-hover:text-white transition-colors duration-500`}
        >
          Discovery
        </h3>
        <p className="mb-4  text-[#8F8F8F] text-xl">Project Fit Assessment</p>
        <p className="text-lg md:max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
          We start with a consultation to understand your idea, goals, and
          market. This helps us tailor our services to meet your specific needs
          and ensure a perfect project fit.
        </p>
      </div>
      <div className="md:hidden mt-12">
        <Image
          src={"/P2.svg"}
          alt="img"
          height={100}
          width={100}
          className="w-auto h-auto"
        />
        <h3
          className={`${geologica.className}mb-4 mt-4 text-xl md:text-2xl font-semibold text-[#8F8F8F] group-hover:text-white transition-colors duration-500`}
        >
          Strategic Roadmap
        </h3>
        <p className="mb-4  text-[#8F8F8F] text-xl">Project Fit Assessment</p>
        <p className="text-lg md:max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
          Together, we create a customized roadmap outlining each milestone in
          your MVP development journey.
        </p>
      </div>
      <div className="md:hidden mt-12">
        <Image
          src={"/P3.svg"}
          alt="img"
          height={100}
          width={100}
          className="w-auto h-auto"
        />
        <h3
          className={`${geologica.className}mb-4 mt-4 text-xl md:text-2xl font-semibold text-[#8F8F8F] group-hover:text-white transition-colors duration-500`}
        >
          Design
        </h3>
        <p className="mb-4  text-[#8F8F8F] text-xl">User-Centered Approach</p>
        <p className="text-lg md:max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
          We begin with in-depth research to understand your users, business
          goals, and industry trends. This allows us to create designs that are
          not only visually appealing but also highly functional and intuitive.
        </p>
      </div>
      <div className="md:hidden mt-12">
        <Image
          src={"/P4.svg"}
          alt="img"
          height={100}
          width={100}
          className="w-auto h-auto"
        />
        <h3
          className={`${geologica.className}mb-4 mt-4 text-xl md:text-2xl font-semibold text-[#8F8F8F] group-hover:text-white transition-colors duration-500`}
        >
          Build & Iterate
        </h3>
        <p className="mb-4  text-[#8F8F8F] text-xl">Project Fit Assessment</p>
        <p className="text-lg md:max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
          We start with a consultation to understand your idea, goals, and
          market. This helps us tailor our services to meet your needs.
        </p>
      </div>
      <div className="md:hidden mt-12">
        <Image
          src={"/P5.svg"}
          alt="img"
          height={100}
          width={100}
          className="w-auto h-auto"
        />
        <h3
          className={`${geologica.className}mb-4 mt-4 text-xl md:text-2xl font-semibold text-[#8F8F8F] group-hover:text-white transition-colors duration-500`}
        >
          Launch & Support
        </h3>
        <p className="mb-4  text-[#8F8F8F] text-xl">Project Fit Assessment</p>
        <p className="text-lg md:max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
          We start with a consultation to understand your idea, goals, and market. This helps us tailor our services to meet your needs.
        </p>
      </div>
    </section>
  );
};

export default Process;
