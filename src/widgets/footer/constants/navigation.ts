import type { FooterNavigationType } from "../types/navigation.types";

export const footerNavigationData: FooterNavigationType[] = [
  {
    title: "Карта сайта",
    items: [
      { title: "Команда и участники", url: "/teams-and-members" },
      { title: "Новости", url: "/news" },
      { title: "Магазин", url: "/shop" },
      { title: "Трансляции", url: "/streams" },
      { title: "Турниры", url: "/tournaments" },
    ],
  },
  {
    title: "О нас",
    items: [
      { title: "Наши контакты", url: "/contacts" },
      { title: "Политика конфиденциальности", url: "/policy" },
      { title: "Часто задаваемые вопросы", url: "/questions" },
      { title: "Платежи", url: "/payments" },
      { title: "Условия и положения", url: "/terms-and-conditions" },
    ],
  },
];
