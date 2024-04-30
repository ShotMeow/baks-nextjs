import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="container grid md:grid-cols-2 gap-10 items-center">
      <Image
        src="/images/poster.png"
        alt="На фоне в виде логотипа изображены два баскетболиста"
        width={620}
        height={770}
      />
      <div className="space-y-8">
        <h1 className="font-bold text-2xl lg:text-3xl">
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
        <ul className="flex items-center justify-center md:justify-start gap-4 md:gap-8">
          <li>
            <Link href="#">
              <Image
                src="/images/icons/message.png"
                alt="Иконка сообщения"
                width={60}
                height={60}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="/images/icons/instagram.png"
                alt="Иконка Инстаграма"
                width={60}
                height={60}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="/images/icons/telegram.png"
                alt="Иконка Телеграма"
                width={60}
                height={60}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="/images/icons/youtube.png"
                alt="Иконка Ютуба"
                width={60}
                height={60}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="/images/icons/vkontakte.png"
                alt="Иконка Вконтакте"
                width={60}
                height={60}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src="/images/icons/tiktok.png"
                alt="Иконка ТикТок"
                width={60}
                height={60}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
