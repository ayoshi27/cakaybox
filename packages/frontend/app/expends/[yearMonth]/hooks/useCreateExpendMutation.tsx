import { client } from "@/lib/query";

export function useCreateExpendMutation() {
  return client.expends.createExpend.useMutation();
}
