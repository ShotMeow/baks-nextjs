"use client";
import { type FC, useState } from "react";
import Login from "./Login";
import Editor from "./Editor";

const Admin: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <main className="container my-20">
      <h2>Админ-панель</h2>
      {!isLogin ? <Login setIsLogin={setIsLogin} /> : <Editor />}
    </main>
  );
};

export default Admin;
