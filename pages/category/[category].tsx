import React from "react";
import { useRouter } from "next/router";
import Layout from "@/app/Components/Layout";
import Product from "@/app/Components/Product";

const products = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  { id: 3, name: "Product 3", price: 39.99 },
];

const Category: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">{category} Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
