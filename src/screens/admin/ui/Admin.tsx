"use client";
import { type FC, useState } from "react";
import Login from "./Login";
import Editor from "./Editor";

const Admin: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <main className="container">
      {!isLogin ? <Login setIsLogin={setIsLogin} /> : <Editor />}
    </main>
  );
};

export default Admin;
