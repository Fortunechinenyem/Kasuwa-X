import React from "react";
import Layout from "@/app/Layouts/DefaultLayout";
import { useRouter } from "next/router";
import DynamicAddToCartButton from "@/app/Components/DynamicAddToCartButton";

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const router = useRouter();
  const { productId } = router.query;

  const product = {
    id: Number(productId),
    name: "Sample Product",
    price: 2550.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">Product Detail Page</h2>
        {productId ? (
          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
            <p className="text-gray-600 mb-4">N{product.price.toFixed(2)}</p>
            <p className="text-gray-800">{product.description}</p>
            <DynamicAddToCartButton
              id={product.id}
              name={product.name}
              price={product.price}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
