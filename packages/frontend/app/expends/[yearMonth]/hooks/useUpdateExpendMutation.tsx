import { client } from "@/lib/query";

export function useUpdateExpendMutation() {
  return client.expends.updateExpend.useMutation();
}