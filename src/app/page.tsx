import { Metadata } from "next";
import Header from "../Components/Header";

export const metadata: Metadata = {
  title: "Resume | Jesse Wessteijn",
};

export default function Home() {
  return (
    <div>
      <Header />
      {/* <About /> */}
      {/* <Experiences /> */}
      {/* <Education /> */}
      {/* <Skills /> */}
    </div>
  );
}
