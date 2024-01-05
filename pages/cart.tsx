import React from "react";
import Layout from "@/app/Layouts/DefaultLayout";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
  ];

  const calculateTotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        {cartItems.length > 0 ? (
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cartItems.map((item) => (
                <li key={item.id} className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                  <p className="text-gray-600 mb-2">
                    Quantity: {item.quantity}
                  </p>
                  <button
                    className="text-red-500 hover:underline focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() =>
                      console.log(`Remove from cart: ${item.name}`)
                    }
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Total: N{calculateTotal().toFixed(2)}
              </h3>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => console.log("Proceed to Checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
