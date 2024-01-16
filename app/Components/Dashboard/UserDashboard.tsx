// components/UserDashboard.tsx
import { orderService } from "@/pages/api/orderService";
import { OrderData } from "@/pages/order";
import React, { useEffect, useState } from "react";

interface UserDashboardProps {
  userId: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ userId }) => {
  const [orderHistory, setOrderHistory] = useState<OrderData[]>([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const orders = await orderService.getOrderHistory(userId);
        setOrderHistory(orders);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    fetchOrderHistory();
  }, [userId]);

  return (
    <div>
      <h2>Order History</h2>
      {/* Render orderHistory here */}
      {orderHistory.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Total Amount: N{order.totalAmount.toFixed(2)}</p>
          {/* Render other order details as needed */}
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
