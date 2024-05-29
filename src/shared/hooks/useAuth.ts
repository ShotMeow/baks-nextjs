import { useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storageEventHandler = () => {
      const jwtLocal = localStorage.getItem("jwtToken");
      setToken(jwtLocal);
    };
    storageEventHandler();

    window.addEventListener("storage", storageEventHandler);
    return () => {
      window.removeEventListener("storage", storageEventHandler);
    };
  }, []);

  return { token };
};
