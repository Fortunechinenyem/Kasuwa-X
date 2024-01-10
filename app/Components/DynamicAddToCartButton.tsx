import React from "react";
import { useCart } from "../Components/CartContext";

interface DynamicAddToCartButtonProps {
  id: number;
  name: string;
  price: number;
}

const DynamicAddToCartButton: React.FC<DynamicAddToCartButtonProps> = ({
  id,
  name,
  price,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 });
  };

  return (
    <button
      id={`addToCartButton-${id}`}
      className="button"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default DynamicAddToCartButton;
