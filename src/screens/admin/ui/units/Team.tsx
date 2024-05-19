import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";

import { type TeamType, useDeleteTeam } from "@/src/entities/teams";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import TeamsForm from "../forms/TeamsForm";

interface Props {
  team: TeamType;
}

const Team: FC<Props> = ({ team }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const mutation = useDeleteTeam();

  const handleDelete = () => {
    mutation.mutate(team.id);
    setDeleteModalShown(false);
  };

  return (
    <>
      <li className="flex items-center justify-between">
        <span>
          {team.id}. {team.name}
        </span>
        <div className="flex items-center gap-2">
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
          Вы точно хотите удалить команду &quot;{team.name}&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Team;