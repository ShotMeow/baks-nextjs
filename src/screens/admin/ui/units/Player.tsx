import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import { API_URL } from "@/src/shared/constants";

import FormModal from "../modals/FormModal";
import type { UserType } from "@/src/entities/users";
import PlayersForm from "@/src/screens/admin/ui/forms/PlayersForm";
import Image from "next/image";

interface Props {
  player: UserType;
}

const Player: FC<Props> = ({ player }) => {
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span>
            {player.nickname}{" "}
            <span className="text-sm text-zinc-400">| {player.name}</span>
          </span>
          {player.team?.logoUrl && (
            <Image
              src={`${API_URL}/images/${player.team.logoUrl}`}
              alt={player.team.name}
              width={40}
              height={40}
            />
          )}
        </div>
        <Button onClick={() => setUpdateModalShown(true)} variant="transparent">
          Изменить
        </Button>
      </li>
      {updateModalShown && (
        <FormModal
          open={updateModalShown}
          activeTab="tags"
          onClose={setUpdateModalShown}
        >
          <PlayersForm
            player={player}
            onClose={setUpdateModalShown}
            type="edit"
          />
        </FormModal>
      )}
    </>
  );
};

export default Player;
