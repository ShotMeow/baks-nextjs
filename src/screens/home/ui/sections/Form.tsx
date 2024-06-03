import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Field from "@/src/shared/ui/Field";
import Button from "@/src/shared/ui/Button";

const Form: FC = () => {
  return (
    <section className="my-40 bg-zinc-900 pt-12 lg:py-12">
      <div className="container relative flex flex-col items-center gap-8 lg:grid lg:grid-cols-12">
        <form className="col-span-5 flex flex-col gap-8">
          <h3 className="text-xl font-semibold md:text-4xl">
            Будь в курсе новых турниров, <br />
            <span className="text-yellow">подписывайся!</span>
          </h3>
          <Field placeholder="Введите имя" />
          <Field placeholder="Введите e-mail" />
          <div className="flex flex-col gap-4">
            <Button variant="secondary">Подписаться</Button>
            <p className="text-zinc-600">
              Нажимая кнопку «Подписаться», вы соглашаетесь с политикой
              обработки{" "}
              <Link href="#" className="text-green">
                персональных данных
              </Link>
            </p>
          </div>
        </form>
        <Image
          className="-top-14 right-0 lg:absolute 2xl:-top-24"
          src="/images/statue.png"
          alt="Статуя держит в руках басктебольный мяч и телефон"
          width={607}
          height={521}
        />
      </div>
    </section>
  );
};

export default Form;
