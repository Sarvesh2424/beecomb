import { Settings, Lightbulb, Puzzle, Users } from "lucide-react";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";

const features = [
  {
    title: "Integrated Expertise",
    description:
      "project management with time tracking & invoicing capabilities.",
    icon: "SIC1.svg",
  },
  {
    title: "Ownership Mindset",
    description:
      "We act as strategic partners, not external vendors engaging deeply with your goals, anticipating needs, and taking responsibility for outcomes throughout the product lifecycle.",
    icon: "SIC2.svg",
  },
  {
    title: "Smart Value Delivery",
    description:
      "You receive enterprise-level quality, reliable communication, and adaptive collaboration packaged in a cost-smart engagement model that avoids overhead, inefficiency, and rigid agency structures.",
    icon: "SIC3.svg",
  },
  {
    title: "Lasting Partnership",
    description:
      "Our support extends beyond launch we maintain, evolve, and scale your product with continuous improvement, ensuring it remains stable, competitive, and aligned with changing business needs.",
    icon: "SIC4.svg",
  },
];

const mont = Montserrat({});
const inter = Inter({});

const FeaturesApart = () => {
  return (
    <section
      className={`bg-black relative text-white py-24 px-6 md:px-12 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`${mont.className} text-3xl font-semibold md:text-5xl  tracking-tight`}
          >
            What Sets <span className="text-[#0099FF]">Us Apart</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 mt-40 gap-8 md:gap-4 lg:grid-cols-4 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative md:p-10 p-2 flex flex-col  justify-start  transition-all duration-300 ${"md:hover:bg-[#1a1a1a] active:bg-[#1a1a1a] active:border-[#0099FF] md:hover:border-[#0099FF] border-t-6 bg-transparent active:scale-110 focus:scale-110  md:hover:scale-110 md:hover:border-t-6 border-transparent"}`}
            >
              {/* Icon Container */}
              <div className="mb-12">
                <div className="inline-flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt="icon"
                    width={60}
                    height={60}
                    className="w-auto h-auto"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="m">
                <h3 className="text-xl font-bold mb-6 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFF]/90 font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesApart;
