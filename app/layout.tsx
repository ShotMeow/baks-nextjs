import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

import "./globals.css";

import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import QueryProvider from "@/src/shared/libs/tanstack-query/QueryProvider";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Phygital Basketball",
  description:
    "Игроки со всего мира собираются, чтобы продемонстрировать свои уникальные навыки и техники в фиджитал-баскетболе, соревнуясь за звание мастера мяча.",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={readexPro.className}>
        <QueryProvider>
          <div className="flex flex-col justify-between h-full">
            <div>
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
};

export default Layout;
