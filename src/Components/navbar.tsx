import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-background sticky top-0">
      <div className="absolute right-0 gap-4 p-10">
        <ThemeToggle />
      </div>
    </header>
  );
}
