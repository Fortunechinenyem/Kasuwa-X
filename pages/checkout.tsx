import React, { useState } from "react";
import Layout from "@/app/Layouts/DefaultLayout";
import axios from "axios";
import Link from "next/link";

const Checkout: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      // Simulating a payment request using axios
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
          <div>
            <p>{paymentStatus}</p>
            <Link href="/cart" className="button">
              Back to Cart
            </Link>
          </div>
        ) : (
          <div>
            <p>Review your order details and proceed to payment:</p>

            <button className="button mb-5 mt-5" onClick={handlePayment}>
              Proceed to Payment
            </button>

            <Link href="/cart" className="button">
              Back to Cart
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
