import { ClientInferResponseBody } from "@ts-rest/core";
import { contract } from "@cakaybox/common";
import { client } from "@/lib/query";

export type Categories = ClientInferResponseBody<
  typeof contract.categories.getList,
  200
>;

/** 登録されているすべてのカテゴリーを取得する */
export function useAllCategoriesQuery() {
  const { data, isLoading, error, refetch } =
    client.categories.getList.useQuery(["categories"]);

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
