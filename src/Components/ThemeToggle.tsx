"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun
        size={40}
        className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
      <Moon
        size={40}
        className="transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
    </button>
  );
}
