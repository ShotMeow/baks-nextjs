import Tank from "@/src/shared/ui/icons/Tank";
import Attack from "@/src/shared/ui/icons/Attack";
import Sniper from "@/src/shared/ui/icons/Sniper";
import Support from "@/src/shared/ui/icons/Support";
import type { UserType } from "@/src/entities/users";

export const getRoleIcon = (role: UserType["role"]) => {
  switch (role) {
    case "tank":
      return <Tank />;
    case "attack":
      return <Attack />;
    case "sniper":
      return <Sniper />;
    case "support":
      return <Support />;
  }
};
