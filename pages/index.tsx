import BestDeals from "@/app/Components/BestDeals";
import Hero from "@/app/Components/Hero";
import Layout from "@/app/Components/Layout";

import React from "react";

const bestDeals = [
  { id: 1, name: "Deal 1", price: 15.99 },
  { id: 2, name: "Deal 2", price: 25.99 },
  { id: 3, name: "Deal 3", price: 35.99 },
];

const Homepage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <BestDeals products={bestDeals} />
    </Layout>
  );
};

export default Homepage;
