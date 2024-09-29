import About from "@/Components/About";
import Education from "@/Components/Education";
import Experiences from "@/Components/Experiences";
import Header from "@/Components/Header";
import Skills from "@/Components/Skills";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Jesse Wessteijn",
};

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Experiences />
      <Education />
      <Skills />
    </div>
  );
}
