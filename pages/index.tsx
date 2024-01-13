import React, { useEffect, useState } from "react";
import DefaultLayout from "@/app/Layouts/DefaultLayout";
import Hero from "@/app/Components/Hero";
import CurrencySelector from "@/app/Components/CurrencySelector";
import LanguageSelector from "@/app/Components/LanguageSelector";
import BestDeals from "@/app/Components/BestDeals";

const bestDeals = [
  { id: 1, name: "Deal 1", price: 3500.99 },
  { id: 2, name: "Deal 2", price: 2500.99 },
  { id: 3, name: "Deal 3", price: 1500.99 },
];
const Homepage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const json = await res.json();
        console.log(json);
        setSearchResults(json.products); // Assuming the products are nested under a 'products' key
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
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
        ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
          <div className="product-grid">
            {searchResults.map((product: any) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No data received from the API.</p>
        )}
      </div>

      <div className="mt-5">
        <h2>Category Products</h2>
        {/* Render your category products here */}
      </div>
      <BestDeals products={bestDeals} />
    </DefaultLayout>
  );
};

export default Homepage;
