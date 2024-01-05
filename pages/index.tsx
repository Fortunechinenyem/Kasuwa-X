import React from "react";

import BestDeals from "@/app/Components/BestDeals";
import Hero from "@/app/Components/Hero";

import FeaturedCategories from "@/app/Components/FeaturedCategories";
import LocalBrandsShowcase from "@/app/Components/LocalBrandsShowcase";
import CurrencySelector from "@/app/Components/CurrencySelector";
import LanguageSelector from "@/app/Components/LanguageSelector";
import ProductRecommendations from "@/app/Components/ProductRecommendations";
import DefaultLayout from "@/app/Layouts/DefaultLayout";

const featuredCategories = [
  {
    id: 1,
    name: "Traditional Attire",
    image: "/images/traditional_attire.jpg",
  },
  { id: 2, name: "Local Crafts", image: "/images/local_crafts.jpg" },
  { id: 3, name: "African Foods", image: "/images/african_foods.jpg" },
];

const localBrands = [
  { id: 1, name: "Local Brand 1", logo: "/images/local_brand1_logo.png" },
  { id: 2, name: "Local Brand 2", logo: "/images/local_brand2_logo.png" },
  { id: 3, name: "Local Brand 3", logo: "/images/local_brand3_logo.png" },
];

const recommendedProducts = [
  { id: 4, name: "Recommended Product 1", price: 199.99 },
  { id: 5, name: "Recommended Product 2", price: 149.99 },
  { id: 6, name: "Recommended Product 3", price: 99.99 },
];

const bestDeals = [
  { id: 1, name: "Deal 1", price: 3500.99 },
  { id: 2, name: "Deal 2", price: 2500.99 },
  { id: 3, name: "Deal 3", price: 1500.99 },
];

const Homepage: React.FC = () => {
  return (
    <DefaultLayout>
      <Hero />
      <CurrencySelector />
      <LanguageSelector />
      <FeaturedCategories categories={featuredCategories} />
      <LocalBrandsShowcase brands={localBrands} />

      <ProductRecommendations products={recommendedProducts} />
      <BestDeals products={bestDeals} />
    </DefaultLayout>
  );
};

export default Homepage;
