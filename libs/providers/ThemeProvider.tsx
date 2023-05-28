"use client";

import React from "react";
import { ThemeProvider as NextTheme } from "next-themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextTheme attribute="class">{children}</NextTheme>;
};
