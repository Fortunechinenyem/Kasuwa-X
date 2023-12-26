import React from "react";

interface LocalBrandsShowcaseProps {
  brands: { id: number; name: string; logo: string }[];
}

const LocalBrandsShowcase: React.FC<LocalBrandsShowcaseProps> = ({
  brands,
}) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">Local Brands Showcase</h2>
      <div className="flex space-x-4">
        {brands.map((brand) => (
          <div key={brand.id} className="flex-shrink-0">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 w-16 object-contain"
            />
            <p className="text-center">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalBrandsShowcase;
