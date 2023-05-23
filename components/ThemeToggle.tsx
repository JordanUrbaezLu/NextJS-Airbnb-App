"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log("CurrentTheme:", currentTheme);
  console.log("SystemTheme:", systemTheme);

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="absolute bottom-32 rounded-lg bg-gray-800 px-8 py-2 text-2xl text-white transition-all duration-100 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300 md:text-4xl"
    >
      Toggle Mode
    </button>
  );
};

export default ThemeToggle;
