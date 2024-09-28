import { Metadata } from "next";
import Header from "../Components/Header";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
