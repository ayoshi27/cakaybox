import { ClientInferResponseBody } from "@ts-rest/core";
import { contract } from "@cakaybox/common";
import { client } from "@/lib/query";

export type FavoriteExpendItems = ClientInferResponseBody<
  typeof contract.favoriteExpendItem.getList,
  200
>;

/** 登録されているすべてのお気に入り支出を取得する */
export function useAllFavoriteExpendItemsQuery() {
  const { data, isLoading, error, refetch } =
    client.favoriteExpendItem.getList.useQuery(["favoriteExpendItem"]);

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
