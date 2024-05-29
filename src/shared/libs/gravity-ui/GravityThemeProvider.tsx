"use client";
import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@gravity-ui/uikit";

const GravityThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme="dark">{children}</ThemeProvider>;
};

export default GravityThemeProvider;
