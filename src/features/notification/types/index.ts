import type { Dispatch, SetStateAction } from "react";

export interface NotificationContextType {
  setError: Dispatch<SetStateAction<string | null>>;
  setSuccess: Dispatch<SetStateAction<string | null>>;
}
