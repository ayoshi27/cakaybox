import { ClientInferResponseBody } from "@ts-rest/core";
import { contract } from "@cakaybox/common";
import { client } from "@/lib/query";

export type Budgets = ClientInferResponseBody<
  typeof contract.budgets.getList,
  200
>;

/** 登録されているすべての支出元を取得する */
export function useAllBudgetsQuery() {
  const { data, isLoading, error, refetch } = client.budgets.getList.useQuery([
    "budgets",
  ]);

  if (data && data.status !== 200) {
    throw new Error("could not get data");
  }

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
