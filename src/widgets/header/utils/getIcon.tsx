import Network from "@/src/shared/ui/icons/Network";
import Cast from "@/src/shared/ui/icons/Cast";
import Users from "@/src/shared/ui/icons/Users";
import Play from "@/src/shared/ui/icons/Play";
import Box from "@/src/shared/ui/icons/Box";

export const getIcon = (title: string) => {
  switch (title) {
    case "Новости":
      return <Network />;
    case "Трансляции":
      return <Cast />;
    case "Команды":
      return <Users />;
    case "Турниры":
      return <Play />;
    case "Магазин":
      return <Box />;
  }
};
