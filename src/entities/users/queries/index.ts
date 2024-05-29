import { useQuery } from "@tanstack/react-query";
import { getAuthUser, getUserById, getUsers } from "../api";
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

export const useGetAuthUser = (jwtToken: string | null) => {
  return useQuery<UserType>({
    queryKey: ["auth", jwtToken],
    queryFn: () => getAuthUser(jwtToken),
    enabled: jwtToken !== null,
  });
};
