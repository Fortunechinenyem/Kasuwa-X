import React from "react";
import Product from "./Product";

interface BestDealsProps {
  products: {
    id: number;
    name: string;
    price: number;
  }[];
}

const BestDeals: React.FC<BestDealsProps> = ({ products }) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Best Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
