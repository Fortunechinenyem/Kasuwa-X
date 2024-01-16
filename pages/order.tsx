import React from "react";

export interface OrderData {
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

const Order: React.FC = () => {
  // Your page content here
  return (
    <div>
      <h1>Order Page</h1>
      {/* Add your page content here */}
    </div>
  );
};

export default Order;
