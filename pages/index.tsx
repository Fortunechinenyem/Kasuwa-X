import React, { useEffect, useState } from "react";
import DefaultLayout from "@/app/Layouts/DefaultLayout";
import Hero from "@/app/Components/Hero";

import CurrencySelector from "@/app/Components/CurrencySelector";
import LanguageSelector from "@/app/Components/LanguageSelector";

import BestDeals from "@/app/Components/BestDeals";

import {
  searchProducts,
  getProductDetails,
  getCategoryProducts,
} from "../jumiaApi";

const bestDeals = [
  { id: 1, name: "Deal 1", price: 3500.99 },
  { id: 2, name: "Deal 2", price: 2500.99 },
  { id: 3, name: "Deal 3", price: 1500.99 },
];

const Homepage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [productDetails, setProductDetails] = useState<any | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await searchProducts("macbook pro", 50);
        console.log("Search Results:", results);
        setSearchResults(results);

        const details = await getProductDetails("your-product-id-here");
        console.log("Product Details:", details);
        setProductDetails(details);

        const categoryProds = await getCategoryProducts("iphone");
        console.log("Category Products:", categoryProds);
        setCategoryProducts(categoryProds);
      } catch (error) {
        console.error("Error fetching data:", error);
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
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>

      {productDetails && (
        <div>
          <h2>Product Details</h2>
          <p>Name: {productDetails.name}</p>
          <p>Price: {productDetails.price}</p>
        </div>
      )}

      <div>
        <h2>Category Products</h2>
        <ul>
          {categoryProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <BestDeals products={bestDeals} />
    </DefaultLayout>
  );
};

export default Homepage;
