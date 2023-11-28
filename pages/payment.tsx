import React from "react";
import Layout from "@/app/Components/Layout";

const Payment: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">Payment Page</h2>
        <p>
          This is the payment page. Implement the payment form and integration
          with a payment gateway here.
        </p>
      </div>
    </Layout>
  );
};

export default Payment;
