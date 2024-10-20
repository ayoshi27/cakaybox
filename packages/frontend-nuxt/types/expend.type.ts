/**支出レコード */
export type Expend = {
  id: number;
  price: number;
  description: string;
  date: string;
  category: {
    id: number;
    name: string;
    colorCode: string | null;
  };
  payer: {
    id: number;
    name: string;
  };
  budget: {
    id: number;
    name: string;
  };
  paymentMethod: {
    id: number;
    name: string;
  };
  processed: boolean;
};
