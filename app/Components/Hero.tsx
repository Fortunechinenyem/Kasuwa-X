import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="hero relative bg-cover bg-center h-screen flex items-center text-white"
      style={{ backgroundImage: 'url("/images/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          Welcome to our E-commerce Store
        </h1>
      </div>
    </div>
  );
};

export default Hero;
