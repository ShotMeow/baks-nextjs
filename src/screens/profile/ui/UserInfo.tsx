import type { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { UserType } from "@/src/entities/users";
import Button from "@/src/shared/ui/Button";
import { logOut } from "@/src/features/auth";
import Avatar from "@/src/shared/ui/icons/Avatar";
import { API_URL } from "@/src/shared/constants";

interface Props extends Omit<UserType, "createdAt"> {}

const UserInfo: FC<Props> = ({ nickname, name, team }) => {
  const router = useRouter();
  const handleLogout = () => {
    logOut();
    router.push("/");
  };

  return (
    <aside className="flex w-full flex-col items-center justify-center gap-8 rounded-xl bg-white p-10 text-center shadow-2xl lg:col-span-1 dark:bg-white/5 dark:shadow-none">
      <div className="flex flex-col items-center gap-4">
        <Avatar />
        <div>
          <h3 className="text-xl font-semibold">
            {nickname} - {name}
          </h3>
          {team?.name && (
            <div className="mt-10">
              <p className="text-zinc-400">Команда</p>
              <Link
                href={`/teams/${team.id}`}
                className="mt-2 flex items-center justify-center gap-2"
              >
                {team.logoUrl && (
                  <Image
                    src={`${API_URL}/images/${team.logoUrl}`}
                    alt={team.name}
                    width={32}
                    height={32}
                  />
                )}
                <p className="text-xl font-semibold">{team.name}</p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Button variant="primary" onClick={() => handleLogout()}>
        Выход
      </Button>
    </aside>
  );
};

export default UserInfo;
