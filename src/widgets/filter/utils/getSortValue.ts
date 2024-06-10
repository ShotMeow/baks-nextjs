export const getSortValue = (sort: string) => {
  switch (sort) {
    case "asc":
      return "По возрастанию";
    case "desc":
      return "По убыванию";
    default:
      return "Сортировка";
  }
};
