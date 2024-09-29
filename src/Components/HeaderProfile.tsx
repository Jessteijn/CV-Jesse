"use client";
import Image from "next/image";
import React from "react";

export default class HeaderProfile extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <figure className="m-0 cursor-pointer">
          <Image
            src="/images/profile.png"
            width="300"
            height="300"
            alt="Profile picture"
            className="animate-flip transition-transform duration-1000 hover:rotate-y-180"
          />
        </figure>
      </div>
    );
  }
}
