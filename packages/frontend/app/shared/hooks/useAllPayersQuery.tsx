import { ClientInferResponseBody } from "@ts-rest/core";
import { contract } from "@cakaybox/common";
import { client } from "@/lib/query";

export type Payers = ClientInferResponseBody<
  typeof contract.payers.getList,
  200
>;

/** 登録されているすべての支払者を取得する */
export function useAllPayersQuery() {
  const { data, isLoading, error, refetch } = client.payers.getList.useQuery([
    "payers",
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
