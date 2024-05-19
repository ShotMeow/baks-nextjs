import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTag, deleteTag, updateTag } from "../api";
import type {
  CreateTagType,
  TagType,
  UpdateTagType,
} from "@/src/entities/tags/types";

export const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tag: CreateTagType) => createTag({ name: tag.name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export const useUpdateTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tag: UpdateTagType) => updateTag(tag),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export const useDeleteTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: TagType["id"]) => deleteTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};
