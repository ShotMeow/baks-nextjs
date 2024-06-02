import type { FC } from "react";
import Link from "next/link";

import Message from "@/src/shared/ui/icons/Message";
import Instagram from "@/src/shared/ui/icons/Instagram";
import Telegram from "@/src/shared/ui/icons/Telegram";
import Youtube from "@/src/shared/ui/icons/Youtube";
import Vkontakte from "@/src/shared/ui/icons/Vkontakte";
import Tiktok from "@/src/shared/ui/icons/Tiktok";

const Socials: FC = () => {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold">Наши социальные сети</h4>
      <ul className="flex flex-wrap items-center justify-between gap-8 md:justify-start">
        <li>
          <Link aria-label="Ссылка на сообщество" href="#">
            <Message width={60} height={60} />
          </Link>
        </li>
        <li>
          <Link aria-label="Ссылка на Instagram" href="#">
            <Instagram width={60} height={60} />
          </Link>
        </li>
        <li>
          <Link aria-label="Ссылка на Telegram" href="#">
            <Telegram width={60} height={60} />
          </Link>
        </li>
        <li>
          <Link aria-label="Ссылка на YouTube" href="#">
            <Youtube width={60} height={60} />
          </Link>
        </li>
        <li>
          <Link aria-label="Ссылка на Vkontakte" href="#">
            <Vkontakte width={60} height={60} />
          </Link>
        </li>
        <li>
          <Link aria-label="Ссылка на Tiktok" href="#">
            <Tiktok width={60} height={60} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
