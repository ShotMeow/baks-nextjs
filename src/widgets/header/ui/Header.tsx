import type { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import Logo from "@/src/shared/ui/icons/Logo";

import Navigation from "./Navigation";
import MobileNavbar from "./MobileNavbar";
import Account from "./Account";

const DynamicThemeSwitcher = dynamic(
  () => import("@/src/features/theme").then((mod) => mod.ThemeSwitcher),
  {
    ssr: false,
  },
);

const Header: FC = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50">
        <div className="container">
          <div className="flex items-center justify-between rounded-full border border-white/5 bg-white/5 from-white to-white p-4 shadow-2xl backdrop-blur-lg before:absolute before:left-0 before:-z-10 before:size-full before:rounded-full before:bg-gradient-to-r dark:shadow-none dark:before:from-yellow/5 dark:before:via-black dark:before:to-lilac/5 sm:gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 text-xl font-semibold"
            >
              <Logo className="shrink-0 text-green dark:text-yellow" />
              <span className="hidden sm:inline md:hidden lg:inline">
                baks.gg
              </span>
            </Link>
            <Navigation />
            <div className="relative flex items-center gap-8">
              <DynamicThemeSwitcher className="absolute -left-20 2xl:-left-56 hidden lg:flex [&>p]:hidden 2xl:[&>p]:block" />
              <Account />
            </div>
          </div>
        </div>
      </header>
      <MobileNavbar />
    </>
  );
};

export default Header;
