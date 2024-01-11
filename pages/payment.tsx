import React, { useState } from "react";
import Layout from "@/app/Layouts/DefaultLayout";

const Payment: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePayment = async () => {
    // Implement your actual payment gateway integration logic here
    // For simplicity, let's just simulate a successful payment
    try {
      // Simulating a payment request
      // Replace this with your actual payment gateway integration
      // You may want to use a library like Stripe for secure payment processing
      // Example: const response = await stripe.paymentIntents.create({ amount: calculateTotal() });
      setPaymentStatus("Payment successful!");
    } catch (error) {
      console.error("Error during payment:", error);
      setPaymentStatus("Payment failed. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div className="container mx-auto my-8 p-2">
        <h2 className="text-3xl font-semibold mb-4">Payment Page</h2>

        {paymentStatus ? (
          <p>{paymentStatus}</p>
        ) : (
          <form>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cardHolder"
                className="block text-sm font-medium text-gray-600"
              >
                Card Holder
              </label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium text-gray-600"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-600"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>

            <button type="button" onClick={handlePayment} className="button ">
              Pay Now
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Payment;
