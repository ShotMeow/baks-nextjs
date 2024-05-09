import type { FC } from "react";
import Link from "next/link";

import { footerNavigationData } from "../constants/navigation";
import Socials from "./Socials";

const Navigation: FC = () => {
  return (
    <div className="flex flex-wrap justify-between gap-10 pt-10">
      {footerNavigationData.map((navItem) => (
        <div key={navItem.title}>
          <h4 className="mb-4 text-xl font-semibold">{navItem.title}</h4>
          <ul className="flex flex-col gap-2 text-lg">
            {navItem.items.map((item) => (
              <li key={item.title}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Socials />
    </div>
  );
};

export default Navigation;
