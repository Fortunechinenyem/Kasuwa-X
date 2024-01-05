import React from "react";

interface DynamicAddToCartButtonProps {
  id: number;
}

const DynamicAddToCartButton: React.FC<DynamicAddToCartButtonProps> = ({
  id,
}) => {
  return (
    <button id={`addToCartButton-${id}`} className="button ">
      Add to Cart
    </button>
  );
};

export default DynamicAddToCartButton;
