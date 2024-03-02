import { client } from "@/lib/query";

export function useDeleteExpendMutation() {
  return client.expends.deleteExpend.useMutation();
}
