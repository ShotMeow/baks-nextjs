import { useQuery } from "@tanstack/react-query";
import { getUserById, getUsers } from "../api";
import type { UserType } from "../types";

export const useGetUsers = () => {
  return useQuery<UserType[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useGetUserById = (id: UserType["id"]) => {
  return useQuery<UserType>({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });
};
