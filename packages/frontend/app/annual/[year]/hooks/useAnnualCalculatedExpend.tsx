import { client } from "@/lib/query";

export function useAnnualCalculatedExpendQuery(variables: { year: string }) {
  const { data, isLoading, error, refetch } =
    client.expends.getAnnualCalculatedExpend.useQuery(["expends"], {
      query: { year: variables.year },
    });

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
