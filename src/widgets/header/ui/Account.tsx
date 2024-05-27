"use client";
import { type FC, useState } from "react";
import Smile from "@/src/shared/ui/icons/Smile";
import Button from "@/src/shared/ui/Button";
import { AuthModal, logOut } from "@/src/features/auth";
import { useAuth } from "@/src/shared/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";
const Account: FC = () => {
  const [authModalShown, setAuthModalShown] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const { isAuth } = useAuth();

  const handleLogout = () => {
    logOut();
    router.push("/");
  };

  return (
    <>
      {isAuth ? (
        pathname.includes("/profile") ? (
          <Button onClick={() => handleLogout()} variant="primary">
            <Smile />
            Выйти
          </Button>
        ) : (
          <Button onClick={() => router.push("/profile")} variant="primary">
            <Smile />
            Профиль
          </Button>
        )
      ) : (
        <Button onClick={() => setAuthModalShown(true)} variant="primary">
          <Smile />
          Войти
        </Button>
      )}
      {authModalShown && (
        <AuthModal open={authModalShown} onClose={setAuthModalShown} />
      )}
    </>
  );
};

export default Account;
