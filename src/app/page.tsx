import About from "@/Components/About";
import Experiences from "@/Components/Experiences";
import Header from "@/Components/Header";

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
      {/* <Education /> */}
      {/* <Skills /> */}
    </div>
  );
}
