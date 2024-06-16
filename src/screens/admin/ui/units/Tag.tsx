import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";

import { type TagType, useDeleteTag } from "@/src/entities/tags";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import TagsForm from "../forms/TagsForm";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  tag: TagType;
}

const Tag: FC<Props> = ({ tag }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const {
    mutate: deleteTag,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteTag();

  const handleDelete = () => {
    deleteTag(tag.id);
  };

  useNotificationCall({
    isDeleteSuccess,
    isDeleteError,
    onClose: () => setDeleteModalShown(false),
    deleteText: ["Тег успешно удален", "Ошибка при удалении тега"],
  });

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-6">
        <span>{tag.name}</span>
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
          activeTab="tags"
          onClose={setUpdateModalShown}
        >
          <TagsForm tag={tag} onClose={setUpdateModalShown} type="edit" />
        </FormModal>
      )}
      {deleteModalShown && (
        <DeleteModal
          open={deleteModalShown}
          onClose={setDeleteModalShown}
          action={handleDelete}
        >
          Вы точно хотите удалить тег <br />
          &quot;
          <span className="font-bold">{tag.name}</span>&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Tag;
