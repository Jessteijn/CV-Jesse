import { interest } from "@/assets/interest/";
import Image from "next/image";

export default function AboutInterest() {
  return (
    <>
      <div className="my-5 text-left text-xl font-bold text-yellow-400">
        My Interests
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {interest.map((item, index) => (
          <div key={index} className="group flex flex-col items-center">
            <Image
              key={index}
              src={item.img}
              alt={item.name}
              height="100"
              width="100"
              className="h-24 transition-all duration-300 ease-in-out transform hover:scale-125"
            />
            <div className="mt-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
