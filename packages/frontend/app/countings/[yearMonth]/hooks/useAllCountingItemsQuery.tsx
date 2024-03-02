import { ClientInferResponseBody } from "@ts-rest/core";
import { contract } from "@cakaybox/common";
import { client } from "@/lib/query";

export type CountingItems = ClientInferResponseBody<
  typeof contract.countingItems.getList,
  200
>;

/** 登録されているすべての集計項目を取得する */
export function useAllCountingItemsQuery() {
  const { data, isLoading, error, refetch } =
    client.countingItems.getList.useQuery(["countingItems"]);

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
