"use client";
import { type FC, type PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/shared/hooks/useAuth";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth && isAuth !== null) {
      router.push("/");
    }
  }, [isAuth, router]);

  return <>{children}</>;
};

export default PrivateRoute;
