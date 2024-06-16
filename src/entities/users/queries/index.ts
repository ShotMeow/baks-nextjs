import { useQuery } from "@tanstack/react-query";

import { getAuthUser, getUserById, getUsers } from "../api";
import type { UsersType, UserType } from "../types";

export const useGetUsers = ({
  page,
  take,
  search,
}: {
  page?: string;
  take?: number;
  search?: string;
}) => {
  return useQuery<UsersType>({
    queryKey: ["users", { page, take, search }],
    queryFn: () => getUsers({ page, take, search }),
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
