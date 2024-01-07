import React from "react";
import { useCart } from "../Components/CartContext";

interface DynamicAddToCartButtonProps {
  id: number;
}

const DynamicAddToCartButton: React.FC<DynamicAddToCartButtonProps> = ({
  id,
}) => {
  const { addToCart } = useCart();

  return (
    <button id={`addToCartButton-${id}`} className="button" onClick={addToCart}>
      Add to Cart
    </button>
  );
};

export default DynamicAddToCartButton;
