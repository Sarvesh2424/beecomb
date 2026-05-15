import React from "react";
import Image from "next/image";
import { Geologica, Inter, Montserrat } from "next/font/google";
import { TimelineDemo } from "./subcomponents/TimeLine";
import SwipeList from "./subcomponents/HoverReveal";

const monts = Montserrat({});
const inter = Inter({});


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
          className={`text-4xl  md:text-5xl font-semibold mb-6 ${monts.className}`}
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2items-start">
        <TimelineDemo />
      </div>
    </section>
  );
};

export default Process;
