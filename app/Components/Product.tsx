"use client";
import React, { useEffect } from "react";
import DynamicAddToCartButton from "./DynamicAddToCartButton";

interface ProductProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  userId?: string;
  imageUrl?: string; // Add imageUrl to the ProductProps interface
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description = "",
  price,
  userId,
  imageUrl, // Destructure imageUrl from props
}) => {
  useEffect(() => {
    const handleAddToCart = () => {
      console.log(`Add to cart: ${name}`);
    };

    const addToCartButton = document.getElementById(`addToCartButton-${id}`);

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
      {imageUrl && <img src={imageUrl} alt={name} className="mb-2" />}{" "}
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-600 mb-2">N{price.toFixed(2)}</p>
      <DynamicAddToCartButton id={id} name={name} price={price} />
    </div>
  );
};

export default Product;
