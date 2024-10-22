import { interest } from "@/assets/interest/";
import type { interestProps } from "@/types/interest-types";
import Image from "next/image";

function AboutInterest() {
  return (
    <div>
      <div className="mt-5 text-left text-xl font-bold text-yellow-400">
        My Interests
      </div>
      <div className="grid grid-flow-col justify-center gap-8">
        {interest.map((item, index) => (
          <div key={index} className="group relative inline-block">
            <Image
              key={index}
              src={item.img}
              alt={item.name}
              height="80"
              width="80"
              className="mb-4 transition-all duration-300 ease-in-out transform hover:scale-125"
            />
            <div className="absolute inset-x-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutInterest;
