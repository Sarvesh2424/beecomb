"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Inter } from "next/font/google";

const technologyMap: Record<string, string> = {
  "HTML.svg": "HTML5",
  "CSS3.svg": "CSS3",
  "Javascript.svg": "JavaScript",
  "Bootstrap.svg": "Bootstrap",
  "TailwindCSS.svg": "Tailwind CSS",
  "React.svg": "React.js",
  "Vue.svg": "Vue.js",
  "Flutter.svg": "Flutter",
  "Dart.svg": "Dart",
  "Firebase.svg": "Firebase",
  "REST.svg": "REST APIs",
  "SQLITE.svg": "SQLite",
};
const inter = Inter({});

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // 1. The scroll container ref remains strictly on the outer scroll viewport div
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    offset: ["start start", "end start"],
  });

  // 2. Create distinct transformation speeds/directions for columns to create the Parallax effect
  const slowUp = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const fastDown = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const fastUp = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const slowDown = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const steady = useTransform(scrollYProgress, [0, 1], [0, 0]); // Neutral baseline

  // Map each of the 7 column slots to an explicit motion assignment tracker
  const columnTransforms = [
    slowUp,
    fastDown,
    fastUp,
    slowDown,
    fastUp,
    fastDown,
    steady,
  ];

  // 3. Dynamically chunk the incoming asset links into 7 structured arrays
  const columns = useMemo(() => {
    const partsCount = 7;
    const partSize = Math.ceil(images.length / partsCount);
    return Array.from({ length: partsCount }, (_, i) =>
      images.slice(i * partSize, (i + 1) * partSize),
    );
  }, [images]);

  return (
    <div
      className={cn(
        "md:h-[40rem] items-start overflow-y-auto w-full scrollbar-none ",
        className,
      )}
      ref={scrollContainerRef} // ONLY assign ref here!
    >
      <div className="md:grid hidden grid-cols-2 md:grid-cols-4 lg:grid-cols-7 items-start max-w-7xl mx-auto gap-6 py-20 px-4">
        {columns.map((columnImages, colIdx) => (
          <div key={`col-${colIdx}`} className="grid gap-6">
            {columnImages.map((el, imgIdx) => {
              // Extract the raw file name (e.g., "React.svg") out of full paths like "/icons/React.svg"
              const filename = el.split("/").pop() || "";
              const techName = technologyMap[filename] || "Technology";

              return (
                <motion.div
                  style={{ y: columnTransforms[colIdx] }} // Applies independent velocity per column
                  key={`img-${colIdx}-${imgIdx}`}
                  className={`flex ${inter.className} font-medium flex-col items-center justify-center gap-2 w-full aspect-square bg-white rounded-2xl shadow-[0_7px_4px_0px_#0000001F] border border-[#D4D4D4] p-4 transition-all duration-300 hover:scale-105 cursor-default`}
                >
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <Image
                      src={el}
                      fill
                      className="object-contain"
                      alt={techName}
                      sizes="(max-width: 768px) 48px, 56px"
                    />
                  </div>
                  <span className="font-medium text-xs md:text-sm text-black text-center mt-2 break-words w-full">
                    {techName}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
