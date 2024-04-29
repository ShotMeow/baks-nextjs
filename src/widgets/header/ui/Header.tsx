import type { FC } from "react";
import Link from "next/link";

import Logo from "@/src/shared/ui/icons/Logo";

import Navigation from "./Navigation";
import Button from "@/src/shared/ui/Button";
import Smile from "@/src/shared/ui/icons/Smile";

const Header: FC = () => {
  return (
    <header className="container relative my-2 flex items-center justify-between rounded-full border border-white/5 bg-white/5 p-4 backdrop-blur-lg before:absolute before:left-0 before:-z-10 before:size-full before:rounded-full before:bg-gradient-to-r before:from-yellow/5 before:via-black before:to-lilac/5 sm:gap-8">
      <Link href="/" className="flex items-center gap-2 px-4 text-lg">
        <Logo className="shrink-0 text-yellow" />
        <span className="hidden sm:inline md:hidden lg:inline">
          phygital basketball
        </span>
      </Link>
      <Navigation />
      <Button variant="primary">
        <Smile />
        Войти
      </Button>
    </header>
  );
};

export default Header;
