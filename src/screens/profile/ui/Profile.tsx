"use client";
import type { FC } from "react";
import { useGetAuthUser } from "@/src/entities/users";
import { useAuth } from "@/src/shared/hooks/useAuth";

import UserInfo from "./UserInfo";
import TournamentsList from "./TournamentsList";

const Profile: FC = () => {
  const { token } = useAuth();
  const { data: user } = useGetAuthUser(token);

  return (
    <main className="container items-start gap-8 space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
      {user && (
        <>
          <UserInfo {...user} />
          {user.team?.tournaments ? (
            <TournamentsList tournaments={user.team.tournaments} />
          ) : (
            <div className="col-span-2 flex h-full items-center justify-center">
              <p className="text-center text-2xl font-semibold">
                Нет предстоящих турниров
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Profile;
