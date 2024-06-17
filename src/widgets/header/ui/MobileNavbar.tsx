"use client";
import { type FC, useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import { headerNavigationData } from "../constants/headerNavigationData";
import { getIcon } from "../utils/getIcon";
import dynamic from "next/dynamic";

const DynamicThemeSwitcher = dynamic(
  () => import("@/src/features/theme").then((mod) => mod.ThemeSwitcher),
  {
    ssr: false,
  },
);

const MobileNavbar: FC = () => {
  const [hide, setHide] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setHide(isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        {
          "translate-y-48": hide,
        },
        "fixed inset-x-0 bottom-6 z-30 lg:hidden transition-all duration-500",
      )}
    >
      <div className="container flex flex-col items-end gap-6">
        <DynamicThemeSwitcher />
        <nav className="relative w-full overflow-x-auto rounded-full border border-white/5 bg-white/5 from-white to-white p-4 text-xs backdrop-blur-lg before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:rounded-full before:bg-gradient-to-r dark:before:from-yellow/5 dark:before:via-black dark:before:to-lilac/5 sm:gap-8">
          <ul className="flex items-center justify-between gap-6 overflow-x-auto px-4">
            {headerNavigationData.map((navItem) => (
              <li key={navItem.url}>
                <Link
                  className={classNames(
                    {
                      "text-yellow": pathname.startsWith(navItem.url),
                    },
                    "flex flex-col items-center gap-2",
                  )}
                  href={navItem.url}
                >
                  {getIcon(navItem.title)}
                  <span>{navItem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
