import type { NextPage } from "next";
import { Suspense } from "react";
import { Admin } from "@/src/screens/admin";

const AdminPage: NextPage = () => {
  return (
    <Suspense>
      <Admin />
    </Suspense>
  );
};

export default AdminPage;
