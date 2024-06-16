import { useEffect } from "react";
import { useNotificationContext } from "@/src/features/notification";

interface NotificationCallProps {
  isCreateSuccess?: boolean;
  isUpdateSuccess?: boolean;
  createText?: string[];
  updateText?: string[];
  onClose: (action: boolean) => void;
  isCreateError?: boolean;
  isUpdateError?: boolean;
  isDeleteSuccess?: boolean;
  isDeleteError?: boolean;
  deleteText?: string[];
}

export const useNotificationCall = ({
  isCreateSuccess,
  isUpdateSuccess,
  createText = ["", ""],
  updateText = ["", ""],
  onClose,
  isCreateError,
  isUpdateError,
  isDeleteSuccess,
  isDeleteError,
  deleteText = ["", ""],
}: NotificationCallProps) => {
  const { setError, setSuccess } = useNotificationContext();

  useEffect(() => {
    if (isCreateSuccess || isUpdateSuccess || isDeleteSuccess) {
      onClose(false);
      setSuccess(
        isCreateSuccess
          ? createText[0]
          : isUpdateSuccess
            ? updateText[0]
            : deleteText[0],
      );
    }
  }, [
    setSuccess,
    isCreateSuccess,
    isUpdateSuccess,
    onClose,
    createText,
    updateText,
    isDeleteSuccess,
    deleteText,
  ]);

  useEffect(() => {
    if (isCreateError || isUpdateError || isDeleteError) {
      setError(
        isCreateError
          ? createText[1]
          : isUpdateError
            ? updateText[1]
            : deleteText[1],
      );
    }
  }, [
    isCreateError,
    isUpdateError,
    setError,
    isDeleteError,
    createText,
    updateText,
    deleteText,
  ]);
};
