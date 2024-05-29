import type { NextPage } from "next";
import PrivateRoute from "@/src/shared/ui/PrivateRoute";
import { Profile } from "@/src/screens/profile";

const ProfilePage: NextPage = () => {
  return (
    <PrivateRoute>
      <Profile />
    </PrivateRoute>
  );
};

export default ProfilePage;
