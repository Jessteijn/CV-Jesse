"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun
        size={40}
        className="absolute scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0"
      />
      <Moon
        size={40}
        className="scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90"
      />
    </button>
  );
}
