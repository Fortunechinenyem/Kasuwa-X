import React, { useEffect, useState } from "react";

import { orderService } from "../api/orderService";
import { OrderData } from "../order";
import UserDashboardLayout from "@/app/Layouts/UserDashboradLayout";

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
    <UserDashboardLayout>
      <div className="container mx-auto my-8 p-2">
        <h2 className="text-3xl font-semibold mb-4">User Dashboard</h2>
        <div>
          <h3 className="text-xl font-semibold mb-2">Order History</h3>
          {orderHistory.length > 0 ? (
            <ul>
              {orderHistory.map((order) => (
                <li key={order.id}>
                  <p>Order ID: {order.id}</p>
                  <p>Total Amount: N{order.totalAmount.toFixed(2)}</p>
                  <p>Delivery Status: {order.paymentStatus}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No order history available.</p>
          )}
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default UserDashboard;
