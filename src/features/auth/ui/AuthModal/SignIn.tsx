import {
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import { DialogTitle, Field, Input, Label } from "@headlessui/react";
import Button from "@/src/shared/ui/Button";
import Error from "@/src/shared/ui/Error";
import { useSignIn } from "../../mutations";
import type { SignInType } from "../../types";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const SignIn: FC<Props> = ({ onClose }) => {
  const [formState, setFormState] = useState<SignInType>({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const { mutate } = useSignIn();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formState);
    onClose(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <DialogTitle className="text-xl font-bold">Авторизация</DialogTitle>
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
      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Button
          type="button"
          variant="transparent"
          onClick={() => onClose(false)}
        >
          Отмена
        </Button>
        <Button type="submit" variant="more">
          Войти
        </Button>
      </div>
      {formError && (
        <Error message={formError} onClose={() => setFormError(null)} />
      )}
    </form>
  );
};

export default SignIn;
