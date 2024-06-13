import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import {
  type TournamentType,
  useDeleteTournament,
} from "@/src/entities/tournaments";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import TournamentsForm from "../forms/TournamentsForm";

interface Props {
  tournament: TournamentType;
}

const Tournament: FC<Props> = ({ tournament }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const mutation = useDeleteTournament();

  const handleDelete = () => {
    mutation.mutate(tournament.id);
    setDeleteModalShown(false);
  };

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-6">
        <span>{tournament.name}</span>
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
          <TournamentsForm
            tournament={tournament}
            onClose={setUpdateModalShown}
            type="edit"
          />
        </FormModal>
      )}
      {deleteModalShown && (
        <DeleteModal
          open={deleteModalShown}
          onClose={setDeleteModalShown}
          action={handleDelete}
        >
          Вы точно хотите удалить турнир <br />
          &quot;
          <span className="font-bold">{tournament.name}</span>&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Tournament;
