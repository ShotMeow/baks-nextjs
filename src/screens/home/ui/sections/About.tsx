import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Message from "@/src/shared/ui/icons/Message";
import Instagram from "@/src/shared/ui/icons/Instagram";
import Telegram from "@/src/shared/ui/icons/Telegram";
import Youtube from "@/src/shared/ui/icons/Youtube";
import Vkontakte from "@/src/shared/ui/icons/Vkontakte";
import Tiktok from "@/src/shared/ui/icons/Tiktok";

const About: FC = () => {
  return (
    <section className="container grid items-center gap-10 md:grid-cols-2">
      <Image
        src="/images/poster.png"
        alt="На фоне в виде логотипа изображены два баскетболиста"
        width={620}
        height={770}
      />
      <div className="space-y-8">
        <h1 className="text-2xl font-bold lg:text-3xl">
          Приветствуем Вас в Мире Фитжитал Баскетбола!
        </h1>
        <p className="lg:text-lg">
          Добро пожаловать в захватывающий мир фитжитал баскетбола, где любовь к
          игре объединяется с передовыми цифровыми технологиями, открывая новые
          возможности для игроков всех уровней. Здесь, на нашем портале, вы
          найдете все необходимое для погружения: от обучающих курсов и
          VR-тренировок до участия в онлайн-турнирах.
          <br />
          <br />
          Присоединяйтесь к нашему сообществу, чтобы исследовать будущее
          баскетбола, где цифровой мир расширяет границы возможного и приглашает
          каждого стать частью глобальной спортивной революции.
        </p>
        <ul className="flex flex-wrap items-center justify-between gap-8 text-black md:justify-start">
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
            <Link aria-label="Ссылка на Youtube" href="#">
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
    </section>
  );
};

export default About;
