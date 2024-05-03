import type { FC } from "react";
import Link from "next/link";

import { navigation } from "../constants/navigation";

const Navigation: FC = () => {
  return (
    <nav>
      <ul className="hidden text-sm md:flex md:items-center md:gap-8 lg:text-base">
        {navigation.map((navItem) => (
          <li key={navItem.url}>
            <Link href={navItem.url}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
