export interface Order {
  id: number;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  deliveryAddress: string;
  phoneNumber: string;
  email: string;
  paymentStatus: string;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}
