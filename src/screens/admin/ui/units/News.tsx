import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import { type PostType, useDeleteNews } from "@/src/entities/news";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import NewsForm from "../forms/NewsForm";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  news: PostType;
}

const News: FC<Props> = ({ news }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const {
    mutate: deleteNews,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteNews();

  const handleDelete = () => {
    deleteNews(news.id);
  };

  useNotificationCall({
    isDeleteSuccess,
    isDeleteError,
    onClose: () => setDeleteModalShown(false),
    deleteText: ["Пост успешно удален", "Ошибка при удалении поста"],
  });

  return (
    <>
      <li className="flex flex-wrap items-center justify-between gap-6">
        <span>{news.title}</span>
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
          <NewsForm news={news} onClose={setUpdateModalShown} type="edit" />
        </FormModal>
      )}
      {deleteModalShown && (
        <DeleteModal
          open={deleteModalShown}
          onClose={setDeleteModalShown}
          action={handleDelete}
        >
          Вы точно хотите удалить пост <br />
          &quot;
          <span className="font-bold">{news.title}</span>&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default News;
