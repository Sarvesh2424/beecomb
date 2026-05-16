import { PartyPopper } from "lucide-react";
import { Montserrat, Poppins } from "next/font/google";

const monst = Montserrat({});
const poppins = Poppins({
  weight: "500",
});
const poppins2 = Poppins({
  weight: "500",
  style:"italic"
});

function ClientSay() {
  return (
    <div className="bg-[#070707] flex flex-col px-2 md:px-0 items-center gap-8 py-12">
      <h1 className={`${monst.className} font-semibold text-5xl text-white`}>
        What Our{" "}
        <span className="text-[#00B1FF] font-normal italic">Clients Say</span>
      </h1>
      <button
        className={`border border-white w-max rounded-4xl py-3 px-6 font-medium text-white ${poppins.className}`}
      >
        View All Testimonials
      </button>
      <div className="flex md:gap-20 mt-12">
        <div className="flex flex-col items-center">
            <h1 className={`${monst.className} text-9xl text-white`}>5.0</h1>
            <p className={`italic ${poppins2.className} text-[#C1C1C1]` }>Google, Facebook, Carousell</p>
        </div>
        <div className="flex flex-col items-center">
            <h1 className={`${monst.className} text-9xl text-white`}>4.9</h1>
            <p className={`italic ${poppins2.className} text-[#C1C1C1]` }>Clutch</p>
        </div>
      </div>
    </div>
  );
}

export default ClientSay;
