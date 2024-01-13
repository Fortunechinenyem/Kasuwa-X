import React, { useEffect, useState } from "react";
import DefaultLayout from "@/app/Layouts/DefaultLayout";
import Hero from "@/app/Components/Hero";
import CurrencySelector from "@/app/Components/CurrencySelector";
import LanguageSelector from "@/app/Components/LanguageSelector";
import BestDeals from "@/app/Components/BestDeals";
import { fetchData } from "@/utils/api";

const bestDeals = [
  { id: 1, name: "Deal 1", price: 3500.99 },
  { id: 2, name: "Deal 2", price: 2500.99 },
  { id: 3, name: "Deal 3", price: 1500.99 },
];

const Homepage: React.FC = () => {
  const [generalProducts, setGeneralProducts] = useState<any[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const allProducts = await fetchData.allProducts();
        setGeneralProducts(allProducts.products);
        console.log("All Products:", allProducts);

        const smartphoneProducts = await fetchData.productsByCategory(
          "smartphones"
        );
        setCategoryProducts(smartphoneProducts.products);
        console.log("Smartphone Products:", smartphoneProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchDataAndSetState();
  }, []);

  return (
    <DefaultLayout>
      <Hero />
      <CurrencySelector />
      <LanguageSelector />

      <div>
        <h2>Search Results</h2>
        {error ? (
          <p>{error}</p>
        ) : Array.isArray(generalProducts) && generalProducts.length > 0 ? (
          <div className="product-grid">
            {generalProducts.map((product: any) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No data received for general products.</p>
        )}
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold text-center mb-5">
          Category Products
        </h2>
        {error ? (
          <p>{error}</p>
        ) : Array.isArray(categoryProducts) && categoryProducts.length > 0 ? (
          <div className="product-grid">
            {categoryProducts.map((product: any) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No data received for category products.</p>
        )}
      </div>

      <BestDeals products={bestDeals} />
    </DefaultLayout>
  );
};

export default Homepage;
