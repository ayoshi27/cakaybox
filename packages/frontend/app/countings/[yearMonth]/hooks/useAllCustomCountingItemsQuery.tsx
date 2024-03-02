import { ClientInferResponseBody } from "@ts-rest/core";
import { contract } from "@cakaybox/common";
import { client } from "@/lib/query";

export type CustomCountingItems = ClientInferResponseBody<
  typeof contract.customCountingItems.getList,
  200
>;

/** 登録されているすべてのカスタム集計項目を取得する */
export function useAllCustomCountingItemsQuery() {
  const { data, isLoading, error, refetch } =
    client.customCountingItems.getList.useQuery(["customCountingItems"]);

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
