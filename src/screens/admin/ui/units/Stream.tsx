import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";

import { type StreamType, useDeleteStream } from "@/src/entities/streams";
import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import StreamsForm from "../forms/StreamsForm";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  stream: StreamType;
}

const Stream: FC<Props> = ({ stream }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const {
    mutate: deleteStream,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteStream();

  const handleDelete = () => {
    deleteStream(stream.id);
  };

  useNotificationCall({
    isDeleteSuccess,
    isDeleteError,
    onClose: () => setDeleteModalShown(false),
    deleteText: [
      "Трансляция успешно удалена",
      "Ошибка при удалении трансляции",
    ],
  });

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-6">
        <span>{stream.title}</span>
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
