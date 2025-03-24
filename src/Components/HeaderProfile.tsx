"use client";
import profile from "@/assets/profile.png";
import Image from "next/image";

export default function HeaderProfile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <figure className="m-0 cursor-pointer">
        <Image
          src={profile}
          width="300"
          height="300"
          alt="Profile picture"
          className="animate-flip transition-transform duration-1000 hover:rotate-y-180"
        />
      </figure>
    </div>
  );
}
