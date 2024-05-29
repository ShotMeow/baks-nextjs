"use client";
import type { FC } from "react";
import Link from "next/link";

import { headerNavigationData } from "../constants/headerNavigationData";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navigation: FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="hidden text-sm lg:flex lg:items-center lg:gap-8 xl:text-base">
        {headerNavigationData.map((navItem) => (
          <li key={navItem.url}>
            <Link
              className={classNames({
                "text-yellow": pathname.startsWith(navItem.url),
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
