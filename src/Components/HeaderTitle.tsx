"use client";
import React from "react";
import Typist from "react-typist-component";

function HeaderTitle() {
  return (
    <>
      <div className="text-9xl font-bold">
        <Typist cursor={<span>_</span>} hideCursorWhenDone>
          <span className="hidden sm:inline">I&apos;m</span>
          <span className="text-red-700"> Jesse</span>
        </Typist>
      </div>
    </>
  );
}

export default HeaderTitle;
