import React, { useState } from "react";
import Layout from "@/app/Components/Layout";
import axios from "axios";

const Checkout: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {}
      );

      if (response.data) {
        setPaymentStatus("Payment successful!");
      } else {
        setPaymentStatus("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      setPaymentStatus("An error occurred during payment. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">Checkout Page</h2>
        {paymentStatus ? (
          <p>{paymentStatus}</p>
        ) : (
          <div>
            <p>Review your order details and proceed to payment:</p>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handlePayment}
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
