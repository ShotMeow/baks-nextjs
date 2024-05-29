import type { FC } from "react";
import Link from "next/link";

import Logo from "@/src/shared/ui/icons/Logo";

import Navigation from "./Navigation";
import MobileNavbar from "@/src/widgets/header/ui/MobileNavbar";
import Account from "@/src/widgets/header/ui/Account";

const Header: FC = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-4 z-30">
        <div className="container">
          <div className="flex items-center justify-between rounded-full border border-white/5 bg-white/5 p-4 backdrop-blur-lg before:absolute before:left-0 before:-z-10 before:size-full before:rounded-full before:bg-gradient-to-r before:from-yellow/5 before:via-black before:to-lilac/5 sm:gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 text-lg font-semibold"
            >
              <Logo className="shrink-0 text-yellow" />
              <span className="hidden sm:inline md:hidden lg:inline">
                phygital basketball
              </span>
            </Link>
            <Navigation />
            <Account />
          </div>
        </div>
      </header>
      <MobileNavbar />
    </>
  );
};

export default Header;
