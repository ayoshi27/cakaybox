import type { PaymentMethod } from "../types/payment-method.type";

/**
 * 支払方法IDから支払人IDを取得する
 * @param paymentMethodId - 支払方法のID
 */
export const getPayerIdByPaymentMethodId = (
  paymentMethodId: number | undefined,
  paymentMethods: PaymentMethod[] | null,
) => {
  return paymentMethods?.find(
    (paymentMethod) => paymentMethod.id === paymentMethodId,
  )?.payerId;
};
