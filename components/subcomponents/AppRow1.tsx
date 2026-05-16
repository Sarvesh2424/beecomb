"use client";

import Image from "next/image";

const AppRow = () => {
  const row1Images = [
    { src: "/APP1.svg", alt: "app 1" },
    { src: "/APP2.svg", alt: "app 2" },
    { src: "/APP3.svg", alt: "app 3" },
    { src: "/APP4.svg", alt: "app 4" },
  ];
  const row2Images = [
    { src: "/APP8.svg", alt: "app 1" },
    { src: "/APP6.svg", alt: "app 2" },
    { src: "/APP7.svg", alt: "app 3" },
    { src: "/APP5.svg", alt: "app 4" },
  ];

  return (
    <div className="w-full bg-transparent overflow-hidden pb-30 flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {/* marqueeGroup */}
        <div className="group flex  overflow-hidden select-none w-full">
          {/* First List */}
          <ul className="flex shrink-0 items-center justify-start  min-w-full animate-scroll-marquee group-hover:[animation-play-state:paused]">
            {row2Images.map((image, index) => (
              <li
                key={`set1-${index}`}
                className="text-[2em] px-2  rounded-[1em] list-none"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={268}
                  width={408}
                  className="w-auto h-auto"
                />
              </li>
            ))}
          </ul>

          {/* Second List (Aria Hidden for Accessibility) */}
          <ul
            aria-hidden="true"
            className="flex shrink-0 items-center justify-center  min-w-full animate-scroll-marquee group-hover:[animation-play-state:paused]"
          >
            {row2Images.map((image, index) => (
              <li
                key={`set2-${index}`}
                className="text-[2em] px-2 rounded-[1em] list-none"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={268}
                  width={408}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="group flex  overflow-hidden select-none w-full">
          {/* First List */}
          <ul className="flex shrink-0 items-center justify-center  min-w-full animate-scroll-marquee2 group-hover:[animation-play-state:paused]">
            {row1Images.map((image, index) => (
              <li
                key={`set1-${index}`}
                className="text-[2em] px-2  rounded-[1em] list-none"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={268}
                  width={408}
                  className="w-auto h-auto"
                />
              </li>
            ))}
          </ul>

          {/* Second List (Aria Hidden for Accessibility) */}
          <ul
            aria-hidden="true"
            className="flex shrink-0 items-center justify-center  min-w-full animate-scroll-marquee2 group-hover:[animation-play-state:paused]"
          >
            {row1Images.map((image, index) => (
              <li
                key={`set2-${index}`}
                className="text-[2em] px-2  rounded-[1em] list-none"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={268}
                  width={408}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 1rem)); /* -100% plus the gap */
          }
        }
        @keyframes scrollMarquee2 {
          from {
            transform: translateX(calc(-100% - 1rem));
          }
          to {
            transform: translateX(0); /* -100% plus the gap */
          }
        }
        .animate-scroll-marquee {
          animation: scrollMarquee 20s linear infinite;
        }
        .animate-scroll-marquee2 {
          animation: scrollMarquee2 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AppRow;
