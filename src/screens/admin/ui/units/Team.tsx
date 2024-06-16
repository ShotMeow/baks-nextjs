import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";

import { type TeamType, useDeleteTeam } from "@/src/entities/teams";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import TeamsForm from "../forms/TeamsForm";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  team: TeamType;
}

const Team: FC<Props> = ({ team }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const {
    mutate: deleteTeam,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteTeam();

  const handleDelete = () => {
    deleteTeam(team.id);
  };

  useNotificationCall({
    isDeleteSuccess,
    isDeleteError,
    onClose: () => setDeleteModalShown(false),
    deleteText: ["Команда успешно удалена", "Ошибка при удалении команды"],
  });

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-6">
        <span>{team.name}</span>
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
          activeTab="news"
          onClose={setUpdateModalShown}
        >
          <TeamsForm team={team} onClose={setUpdateModalShown} type="edit" />
        </FormModal>
      )}
      {deleteModalShown && (
        <DeleteModal
          open={deleteModalShown}
          onClose={setDeleteModalShown}
          action={handleDelete}
        >
          Вы точно хотите удалить команду <br />
          &quot;
          <span className="font-bold">{team.name}</span>&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Team;
