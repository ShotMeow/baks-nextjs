import type { FC } from "react";
import Link from "next/link";

import Logo from "@/src/shared/ui/icons/Logo";
import Navigation from "./Navigation";

const Footer: FC = () => {
  return (
    <footer className="bg-yellow text-black">
      <div className="container">
        <Navigation />
        <div className="flex flex-col items-center justify-between gap-10 py-14 xl:flex-row xl:gap-20">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 px-4 text-3xl font-semibold md:text-5xl"
          >
            <Logo width={100} height={100} className="shrink-0" />
            <span>phygital basketball</span>
          </Link>
          <p className="text-center font-semibold xl:text-left">
            – это инновационная платформа, объединяющая киберспорт и современные
            технологии, предоставляя игрокам всех уровней возможность
            участвовать в онлайн-турнирах по различным играм. Мы предлагаем
            уникальный опыт соревнований и тренировок, делая киберспорт
            доступным и увлекательным для каждого, не выходя из дома.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
