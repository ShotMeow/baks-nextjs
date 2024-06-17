import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

import "./globals.css";

import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";

import QueryProvider from "@/src/shared/libs/tanstack-query/QueryProvider";
import { NotificationContextProvider } from "@/src/features/notification";
import { ThemeProvider } from "@/src/features/theme";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Baks.gg",
  description:
    "Игроки со всего мира собираются, чтобы продемонстрировать свои уникальные навыки и техники в киберспорте, соревнуясь за звание мастера.",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={readexPro.className}>
        <ThemeProvider>
          <NotificationContextProvider>
            <QueryProvider>
              <div className="flex h-full flex-col justify-between">
                <div>
                  <Header />
                  {children}
                </div>
                <Footer />
              </div>
            </QueryProvider>
          </NotificationContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
