import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

import "./globals.css";

const readexPro = Readex_Pro({ subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Phygital Basketball",
  description:
    "Игроки со всего мира собираются, чтобы продемонстрировать свои уникальные навыки и техники в фиджитал-баскетболе, соревнуясь за звание мастера мяча.",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={readexPro.className}>{children}</body>
    </html>
  );
};

export default Layout;
