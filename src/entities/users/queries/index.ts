import { useQuery } from "@tanstack/react-query";

import { getAuthUser, getUserById, getUsers } from "../api";
import type { UserType } from "../types";

export const useGetUsers = ({ search }: { search?: string }) => {
  return useQuery<UserType[]>({
    queryKey: ["users", { search }],
    queryFn: () => getUsers({ search }),
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
