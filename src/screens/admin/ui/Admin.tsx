"use client";
import { type FC, useState } from "react";
import Login from "./Login";
import Editor from "./Editor";
import Subtitle from "@/src/shared/ui/Subtitle";

const Admin: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <main className="container">
      <Subtitle>Админ-панель</Subtitle>
      {!isLogin ? <Login setIsLogin={setIsLogin} /> : <Editor />}
    </main>
  );
};

export default Admin;
