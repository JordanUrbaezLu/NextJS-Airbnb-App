"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <BiSun
      color="rgb(244 63 94)"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      size={50}
      style={{ cursor: "pointer", padding: "4px" }}
    />
  );
};

export default ThemeToggle;
