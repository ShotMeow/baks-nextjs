"use client";
import { type FC, type PropsWithChildren, useState } from "react";

import { NotificationContext } from "../context";
import Message from "../ui/Message";

export const NotificationContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  return (
    <NotificationContext.Provider
      value={{
        setError,
        setSuccess,
      }}
    >
      {error && (
        <Message error messageVisibleHandler={setError}>
          {error}
        </Message>
      )}
      {success && (
        <Message success messageVisibleHandler={setSuccess}>
          {success}
        </Message>
      )}
      {children}
      <div
        style={{
          position: "relative",
          zIndex: 9999,
        }}
        id="notifications"
      />
    </NotificationContext.Provider>
  );
};
