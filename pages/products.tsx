import React from "react";
import Layout from "@/app/Layouts/DefaultLayout";
import DynamicAddToCartButton from "@/app/Components/DynamicAddToCartButton";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const products: Product[] = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">Product Listing Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">N{product.price.toFixed(2)}</p>
              <DynamicAddToCartButton id={product.id} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
