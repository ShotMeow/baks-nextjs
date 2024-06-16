import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface queryType {
  [key: string]: string | undefined;
}

export const useQueryParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryObject: queryType = {};

  // Преобразование URLSearchParams в объект с парами ключ-значение
  searchParams.forEach((value, key) => {
    queryObject[key] = value;
  });

  return {
    query: queryObject,
    push: (key: string, item: string) => {
      const existingParams = new URLSearchParams(window.location.search);

      // Клонируем существующие параметры
      const newParams = new URLSearchParams(existingParams.toString());

      // Проверяем, существует ли параметр с таким ключом
      if (newParams.has(key)) {
        // Если параметр существует, обновляем его значение
        newParams.set(key, item);
      } else {
        // Если параметра с таким ключом нет, добавляем новый параметр
        newParams.append(key, item);
      }

      // Формируем новый URL с учетом старых и нового параметра
      const newSearch = newParams.toString();

      // Переходим на новый URL
      router.push(`${pathname}/?${newSearch}`);
    },
    remove: (key: string) => {
      const existingParams = new URLSearchParams(window.location.search);
      const newParams = new URLSearchParams(existingParams.toString());

      newParams.delete(key);

      const newSearch = newParams.toString();

      router.push(`${pathname}/?${newSearch}`);
    },
  };
};
