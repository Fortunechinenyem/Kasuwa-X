import React from "react";

interface ProductRecommendationsProps {
  products: { id: number; name: string; price: number }[];
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({
  products,
}) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Recommended Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">N{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
