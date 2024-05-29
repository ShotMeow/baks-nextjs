"use client";
import { type FC, type PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/shared/hooks/useAuth";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    if (!token && token !== null) {
      router.push("/");
    }
  }, [token, router]);

  return <>{children}</>;
};

export default PrivateRoute;
