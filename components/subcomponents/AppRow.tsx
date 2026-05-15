// "use client";

// import React from "react";
// import Image from "next/image";
// import { ChevronDown, ArrowRight } from "lucide-react";

// const LandingPage = () => {
//   const row1Images = [
//     { src: "/APP5.svg", alt: "app 5" },
//     { src: "/APP6.svg", alt: "app 6" },
//     { src: "/APP7.svg", alt: "app 7" },
//     { src: "/APP8.svg", alt: "app 8" },
//   ];

//   const row2Images = [
//     { src: "/APP1.svg", alt: "app 1" },
//     { src: "/APP2.svg", alt: "app 2" },
//     { src: "/APP3.svg", alt: "app 3" },
//     { src: "/APP4.svg", alt: "app 4" },
//   ];

//   return (
//     <div className="min-h-screen bg-transparent font-sans overflow-x-hidden">
//       {/* ROW 1: MOVING RIGHT */}
//       <div className="marquee-container mb-12">
//         <div className="flex gap-6 animate-marquee-right whitespace-nowrap hover:[animation-play-state:paused]">
//           {[...row1Images, ...row1Images].map((img, i) => (
//             <div
//               key={i}
//               className="shrink-0 hover:scale-110 cursor-pointer"
//             >
//               <div className="rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
//                 <Image
//                   src={img.src}
//                   alt={img.alt}
//                   width={416}
//                   height={274}
//                   className="w-auto h-auto object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ROW 2: MOVING LEFT */}
//       <div className="marquee-container w-screen">
//         <div className="flex gap-6 animate-marquee-left whitespace-nowrap hover:[animation-play-state:paused]">
//           {[...row2Images, ...row2Images].map((img, i) => (
//             <div
//               key={i}
//               className="shrink-0 hover:scale-110 cursor-pointer"
//             >
//               <div className="rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
//                 <Image
//                   src={img.src}
//                   alt={img.alt}
//                   width={416}
//                   height={274}
//                   className="w-auto h-auto object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .marquee-container {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//           mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 10%,
//             black 90%,
//             transparent
//           );
//           -webkit-mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 10%,
//             black 90%,
//             transparent
//           );
//         }

//         /* ROW 1: Right Movement */
//         @keyframes marqueeRight {
//           0% {
//             transform: translateX(calc(-50% - 12px));
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         /* ROW 2: Left Movement */
//         @keyframes marqueeLeft {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-50% - 12px));
//           }
//         }

//         .animate-marquee-right {
//           animation: marqueeRight 40s linear infinite;
//         }

//         .animate-marquee-left {
//           animation: marqueeLeft 40s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;
