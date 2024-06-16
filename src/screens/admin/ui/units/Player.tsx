import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import Image from "next/image";
import { API_URL } from "@/src/shared/constants";

import { useDeleteUser, type UserType } from "@/src/entities/users";
import FormModal from "../modals/FormModal";
import PlayersForm from "../forms/PlayersForm";
import DeleteModal from "../modals/DeleteModal";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  player: UserType;
}

const Player: FC<Props> = ({ player }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const {
    mutate: deletePlayer,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteUser();

  const handleDelete = () => {
    deletePlayer(player.id);
  };

  useNotificationCall({
    isDeleteSuccess,
    isDeleteError,
    onClose: () => setDeleteModalShown(false),
    deleteText: [
      "Пользователь успешно удален",
      "Ошибка при удалении пользователя",
    ],
  });

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
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={() => setUpdateModalShown(true)}
            variant="transparent"
          >
            Изменить
          </Button>
          <Button onClick={() => setDeleteModalShown(true)} variant="primary">
            Удалить
          </Button>
        </div>
      </li>
      {updateModalShown && (
        <FormModal
          open={updateModalShown}
          activeTab="users"
          onClose={setUpdateModalShown}
        >
          <PlayersForm player={player} onClose={setUpdateModalShown} />
        </FormModal>
      )}
      {deleteModalShown && (
        <DeleteModal
          open={deleteModalShown}
          onClose={setDeleteModalShown}
          action={handleDelete}
        >
          Вы точно хотите удалить пользователя <br />
          &quot;
          <span className="font-bold">{player.nickname}</span>&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Player;
