"use client";
import React, { useEffect } from "react";
import DynamicAddToCartButton from "./DynamicAddToCartButton";

interface ProductProps {
  id: number;
  name: string;
  description?: string; // Make description optional
  price: number;
  userId?: string;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description = "", // Set a default value for description
  price,
  userId,
}) => {
  useEffect(() => {
    // Attach the event handler only on the client side
    const handleAddToCart = () => {
      console.log(`Add to cart: ${name}`);
      // You can also include other information like description, price, userId, etc.
    };

    // Get the button by its ID
    const addToCartButton = document.getElementById(`addToCartButton-${id}`);

    // Attach the event handler if the button exists
    if (addToCartButton) {
      addToCartButton.addEventListener("click", handleAddToCart);
    }

    return () => {
      if (addToCartButton) {
        addToCartButton.removeEventListener("click", handleAddToCart);
      }
    };
  }, [id, name, description, price, userId]);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-600 mb-2">N{price.toFixed(2)}</p>
      <DynamicAddToCartButton id={id} name={name} price={price} />
    </div>
  );
};

export default Product;
