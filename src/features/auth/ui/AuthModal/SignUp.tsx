import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DialogTitle, Field, Input, Label, Select } from "@headlessui/react";
import Button from "@/src/shared/ui/Button";
import { useSignUp } from "@/src/features/auth/mutations";
import { SignUpType } from "@/src/features/auth/types";
import Error from "@/src/shared/ui/Error";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const SignUp: FC<Props> = ({ onClose }) => {
  const [formState, setFormState] = useState<SignUpType>({
    email: "",
    password: "",
    nickname: "",
    name: "",
    role: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const { mutate, error } = useSignUp();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    if (formState.password !== formData.get("repeatPassword")) {
      setFormError("Пароли не совпадают");
      return;
    }

    mutate(formState);
    onClose(false);
  };

  useEffect(() => {
    error && setFormError(error.message);
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">Регистрация</DialogTitle>
      <Field>
        <Label className="text-sm/6 font-medium text-white">E-mail</Label>
        <Input
          required
          value={formState.email}
          onChange={(event) =>
            setFormState({ ...formState, email: event.target.value })
          }
          name="email"
          type="email"
          placeholder="E-mail"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Пароль</Label>
        <Input
          required
          value={formState.password}
          onChange={(event) =>
            setFormState({ ...formState, password: event.target.value })
          }
          name="password"
          type="password"
          placeholder="Пароль"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">
          Подтвердите пароль
        </Label>
        <Input
          required
          name="repeatPassword"
          type="password"
          placeholder="Подтвердите пароль"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Никнейм</Label>
        <Input
          required
          value={formState.nickname}
          onChange={(event) =>
            setFormState({ ...formState, nickname: event.target.value })
          }
          name="nickname"
          placeholder="Никнейм"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Имя</Label>
        <Input
          required
          value={formState.name}
          onChange={(event) =>
            setFormState({ ...formState, name: event.target.value })
          }
          name="name"
          placeholder="Имя"
          className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-white">Роль</Label>
        <Select
          required
          value={formState.role}
          onChange={(event) =>
            setFormState({ ...formState, role: event.target.value })
          }
          name="role"
          className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 [&>option]:bg-black"
        >
          <option value="tank">Танк</option>
          <option value="attack">Нападение</option>
          <option value="sniper">Снайпер</option>
          <option value="support">Поддержка</option>
        </Select>
      </Field>
      <div className="mt-4 flex gap-4">
        <Button
          type="button"
          variant="transparent"
          onClick={() => onClose(false)}
        >
          Отмена
        </Button>
        <Button type="submit" variant="more">
          Зарегистрироваться
        </Button>
      </div>
      {formError && (
        <Error message={formError} onClose={() => setFormError(null)} />
      )}
    </form>
  );
};

export default SignUp;
