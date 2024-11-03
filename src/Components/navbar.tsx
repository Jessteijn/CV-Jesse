import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="absolute right-0 gap-4 p-10">
        <ThemeToggle />
      </div>
    </header>
  );
}
