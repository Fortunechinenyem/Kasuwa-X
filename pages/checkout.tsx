import React, { useState } from "react";
import Layout from "@/app/Layouts/DefaultLayout";
import Link from "next/link";
import { useCart } from "@/app/Components/CartContext";

const Checkout: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const { cartItems } = useCart();

  const calculateTotal = (): number => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const deliveryFee = calculateDeliveryFee();
    return subtotal + deliveryFee;
  };

  const calculateCartItemsAmount = (): number => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal;
  };
  // Sample delivery fee calculation
  const calculateDeliveryFee = (): number => {
    // Implement your own logic for calculating the delivery fee
    return 5.0;
  };

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">Checkout Page</h2>
        {paymentStatus ? (
          <div>
            <p>{paymentStatus}</p>
            <Link href="/cart">
              <button className="button">Back to Cart</button>
            </Link>
          </div>
        ) : (
          <div>
            <p>Review your order details and proceed to payment:</p>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Delivery Details</h3>
              <form onSubmit={handleSubmit}>
                {/* Add your form fields for delivery details here */}
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Amount for Items</h3>
              <p>N{calculateCartItemsAmount().toFixed(2)}</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Delivery Fee</h3>
              <p>N{calculateDeliveryFee().toFixed(2)}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Total Amount</h3>
              <p>N{calculateTotal().toFixed(2)}</p>
            </div>

            <Link href="/payment">
              <button className="button mb-5 mt-5">Proceed to Payment</button>
            </Link>

            <Link href="/cart">
              <button className="button">Back to Cart</button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
