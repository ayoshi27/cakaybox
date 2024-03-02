import { client } from "@/lib/query";

export function useAllExpendsQuery(variables: { yearMonth: string }) {
  const { data, isLoading, error, refetch } = client.expends.getList.useQuery(
    ["expends"],
    { query: { yearMonth: variables.yearMonth } }
  );

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
