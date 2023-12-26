import React from "react";

interface FeaturedCategoriesProps {
  categories: { id: number; name: string; image: string }[];
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  categories,
}) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={category.image}
              alt={category.name}
              className="mb-2 rounded-md"
            />
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
