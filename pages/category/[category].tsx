import React, { useEffect, useState } from "react";
import Layout from "@/app/Layouts/DefaultLayout";
import Product from "@/app/Components/Product";
import { useRouter } from "next/router";
import { fetchData } from "@/utils/api";

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Category: React.FC = () => {
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        if (typeof category === "string") {
          const categoryData = await fetchData.productsByCategory(category);
          setCategoryProducts(categoryData.products);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
        setError("Error fetching category products. Please try again later.");
      }
    };

    fetchCategoryProducts();
  }, [category]);

  if (typeof category !== "string") {
    return (
      <Layout>
        <div className="container mx-auto my-8">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4">{category} Products</h2>
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
