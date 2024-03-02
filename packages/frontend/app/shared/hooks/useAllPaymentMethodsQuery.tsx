import { ClientInferResponseBody } from "@ts-rest/core";
import { contract } from "@cakaybox/common";
import { client } from "@/lib/query";

export type PaymentMethods = ClientInferResponseBody<
  typeof contract.paymentMethods.getList,
  200
>;

/** 登録されているすべての支払方法を取得する */
export function useAllPaymentMethodsQuery() {
  const { data, isLoading, error, refetch } =
    client.paymentMethods.getList.useQuery(["paymentMethods"]);

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
