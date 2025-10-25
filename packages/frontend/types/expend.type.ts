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

export interface FavoriteExpendItem {
  id: number;
  name: string;
  code: string;
  price: number;
  description: string;
  date: string;
  category: {
    id: number;
    name: string;
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
  processed: true;
}
