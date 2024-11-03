"use client";
import About from "@/Components/About";
import Education from "@/Components/Education";
import Experiences from "@/Components/Experiences";
import Header from "@/Components/Header";
import Skills from "@/Components/Skills";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <>
          <Header />
          <About />
          <Experiences />
          <Education />
          <Skills />
        </>
      ) : (
        <section className="flex h-screen items-center justify-center">
          <div className="text-center text-2xl">Loading...</div>
        </section>
      )}
    </>
  );
}
