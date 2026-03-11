"use client";

import { useEffect } from "react";
import useThemeStore from "../store/useDarkMode";


export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeLight = useThemeStore((s) => s.themeLight);

  useEffect(() => {
    const html = document.documentElement;

    if (!themeLight) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [themeLight]);

  return <>{children}</>;
}