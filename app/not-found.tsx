"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Button from "@/src/shared/ui/Button";

const ErrorPage: NextPage = () => {
  const router = useRouter();

  return (
    <main className="container my-36 flex flex-col items-center gap-4 bg-white/5 p-4 lg:flex-row lg:gap-0">
      <Image
        src="/images/404.jpg"
        alt="404 Error image"
        className="h-[300px] object-cover md:h-[400px] lg:size-full"
        width={800}
        height={800}
      />
      <div className="space-y-8 lg:px-10 xl:px-24">
        <h1 className="text-4xl font-bold xl:text-6xl">
          404 - <span className="text-yellow">Страница не найдена</span>
        </h1>
        <p className="text-sm xl:text-base">
          К сожалению, мы не смогли найти ту страницу, которую вы ищете. Не
          волнуйтесь, это просто небольшой виртуальный недочет в нашем
          фиджитал-пространстве. Возможно, она была перемещена, или в адресе
          закралась ошибка. Но не стоит отчаиваться!
          <br />
          <br />И помните, в этом фиджитал-мире всегда есть место для маленьких
          приключений. Может быть, именно благодаря этой ошибке вы откроете для
          себя что-то новое и интересное на нашем сайте.
        </p>
        <Button onClick={() => router.push("/")} variant="transparent">
          Вернуться на главную
        </Button>
      </div>
    </main>
  );
};

export default ErrorPage;
