"use client";
import type { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { headerNavigationData } from "../constants/headerNavigationData";

const Navigation: FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="hidden text-sm text-black lg:flex lg:items-center lg:gap-8 xl:text-base dark:text-white">
        {headerNavigationData.map((navItem) => (
          <li key={navItem.url}>
            <Link
              className={classNames({
                "text-green font-semibold dark:font-medium dark:text-yellow":
                  pathname.startsWith(navItem.url),
              })}
              href={navItem.url}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
