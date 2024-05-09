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

const Order: React.FC<{ orders: OrderData[] }> = ({ orders }) => {
  return (
    <div>
      <h1>Order Page</h1>
      {/* Display current order details */}
      <div>
        <h2>Current Order</h2>
        {/* Display current order details here */}
      </div>

      {/* Display order history */}
      <div>
        <h2>Order History</h2>
        {orders.map((order) => (
          <div key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <p>Total Amount: {order.totalAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
