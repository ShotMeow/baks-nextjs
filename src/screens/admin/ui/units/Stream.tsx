import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import { StreamType, useDeleteStream } from "@/src/entities/streams";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import StreamsForm from "../forms/StreamsForm";

interface Props {
  stream: StreamType;
}

const Stream: FC<Props> = ({ stream }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const mutation = useDeleteStream();

  const handleDelete = () => {
    mutation.mutate(stream.id);
    setDeleteModalShown(false);
  };

  return (
    <>
      <li className="flex items-center justify-between gap-6">
        <span>{stream.title}</span>
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
          activeTab="streams"
          onClose={setUpdateModalShown}
        >
          <StreamsForm
            stream={stream}
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
          Вы точно хотите удалить трансляцию <br />
          &quot;
          <span className="font-bold">{stream.title}</span>&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Stream;
