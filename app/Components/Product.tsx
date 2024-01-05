"use client";
import React, { useEffect } from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, price }) => {
  useEffect(() => {
    // Attach the event handler only on the client side
    const handleAddToCart = () => {
      console.log(`Add to cart: ${name}`);
    };

    // Get the button by its ID
    const addToCartButton = document.getElementById(`addToCartButton-${id}`);

    // Attach the event handler if the button exists
    if (addToCartButton) {
      addToCartButton.addEventListener("click", handleAddToCart);
    }

    // Clean up the event handler when the component unmounts
    return () => {
      if (addToCartButton) {
        addToCartButton.removeEventListener("click", handleAddToCart);
      }
    };
  }, [id, name]);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">N{price.toFixed(2)}</p>
      <button id={`addToCartButton-${id}`} className="button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
