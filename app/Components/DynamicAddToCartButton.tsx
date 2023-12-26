import React from "react";

interface DynamicAddToCartButtonProps {
  id: number;
}

const DynamicAddToCartButton: React.FC<DynamicAddToCartButtonProps> = ({
  id,
}) => {
  return (
    <button
      id={`addToCartButton-${id}`}
      className="button px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
    >
      Add to Cart
    </button>
  );
};

export default DynamicAddToCartButton;
