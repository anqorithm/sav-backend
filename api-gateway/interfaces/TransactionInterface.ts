export interface TransactionData {
  status: string;
  amount: number;
  paymentMethod: string;
  paymentId: string;
  deliveryDate: Date;
  buyer: {
    name: string;
    email: string;
    phone: string;
  };
  seller: {
    name: string;
    email: string;
    phone: string;
  };
}
