export const getTabPanelButton = (tabType: string): string => {
  switch (tabType) {
    case "news":
      return "Создать новый пост";
    case "tags":
      return "Создать новый тег";
    case "streams":
      return "Создать новую трансляцию";
    case "teams":
      return "Создать новую команду";
    case "tournaments":
      return "Создать новый турнир";
    case "products":
      return "Создать новый товар";
    default:
      return "";
  }
};
