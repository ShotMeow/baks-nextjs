import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const storageEventHandler = () => {
      const jwtLocal = localStorage.getItem("jwtToken");
      setIsAuth(!!jwtLocal);
    };
    storageEventHandler();

    window.addEventListener("storage", storageEventHandler);
    return () => {
      window.removeEventListener("storage", storageEventHandler);
    };
  }, []);

  return { isAuth };
};
