import React from "react";
import Layout from "@/app/Components/Layout";
import { useRouter } from "next/router";

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
            {/* <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => console.log(`Add to cart: ${product.name}`)}
            >
              Add to Cart
            </button> */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
