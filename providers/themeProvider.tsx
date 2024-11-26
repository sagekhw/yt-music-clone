"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types"
// import { type ThemeProviderProps } from "next-themes/dist/types"
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
