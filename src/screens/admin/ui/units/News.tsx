import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";
import { NewsType, useDeleteNews } from "@/src/entities/news";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import NewsForm from "../forms/NewsForm";

interface Props {
  news: NewsType;
}

const News: FC<Props> = ({ news }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const mutation = useDeleteNews();

  const handleDelete = () => {
    mutation.mutate(news.id);
    setDeleteModalShown(false);
  };

  return (
    <>
      <li className="flex items-center justify-between gap-6">
        <span>{news.title}</span>
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
