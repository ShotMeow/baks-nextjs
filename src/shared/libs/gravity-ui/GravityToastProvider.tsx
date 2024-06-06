"use client";
import type { FC, PropsWithChildren } from "react";
import { ToasterComponent, ToasterProvider } from "@gravity-ui/uikit";

const GravityToastProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ToasterProvider>
      {children}
      <ToasterComponent />
    </ToasterProvider>
  );
};

export default GravityToastProvider;
