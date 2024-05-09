import React from "react";

import Order, { OrderData } from "@/app/Components/Order";
import Link from "next/link";

const OrderPage: React.FC = () => {
  // Mock order history data
  const orderHistory: OrderData[] = [
    {
      id: 1,
      userId: "user123",
      items: [
        { productId: 1, productName: "Product 1", quantity: 2, price: 100 },
        { productId: 2, productName: "Product 2", quantity: 1, price: 50 },
      ],
      totalAmount: 250,
      deliveryAddress: "123 Main St",
      phoneNumber: "123-456-7890",
      email: "user@example.com",
      paymentStatus: "Paid",
    },
    // Add more order history data as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Order Page</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        <Order orders={orderHistory} />
      </div>

      <div className="mt-8">
        <p>
          Add any additional content or actions related to orders here, such as
          order tracking, customer support information, etc.
        </p>
      </div>
      <button className="mt-8 b button px-6 py-2 rounded-full hover:bg-purple-100 hover:text-black transition duration-300">
        <Link href="/">Go Back Home</Link>
      </button>
    </div>
  );
};

export default OrderPage;
