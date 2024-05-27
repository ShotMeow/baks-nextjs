import type { NextPage } from "next";
import PrivateRoute from "@/src/shared/ui/PrivateRoute";

const ProfilePage: NextPage = () => {
  return (
    <PrivateRoute>
      <div></div>
    </PrivateRoute>
  );
};

export default ProfilePage;
