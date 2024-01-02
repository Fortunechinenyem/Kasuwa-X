import React from "react";

interface LocalBrandsShowcaseProps {
  brands: { id: number; name: string; logo: string }[];
}

const LocalBrandsShowcase: React.FC<LocalBrandsShowcaseProps> = ({
  brands,
}) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Local Brands Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={brand.logo}
              alt={brand.name}
              className="mb-2 rounded-md"
            />
            <p className="text-lg font-semibold">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalBrandsShowcase;
