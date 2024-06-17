"use client";
import { type FC, type PropsWithChildren, useEffect } from "react";
import { ThemeProvider as GravityThemeProvider } from "@gravity-ui/uikit";
import { colorSchemeInitialize } from "@/src/features/theme/utils";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    colorSchemeInitialize();
  }, []);

  return <GravityThemeProvider theme="dark">{children}</GravityThemeProvider>;
};

export default ThemeProvider;
