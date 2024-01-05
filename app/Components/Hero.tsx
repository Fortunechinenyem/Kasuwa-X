import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="hero relative bg-cover bg-center h-screen flex items-center text-[#a42e4b]"
      style={{ backgroundImage: 'url("/images/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          Welcome to Kasuwa-X
        </h1>
        <h1 className="text-3xl lg:text-3xl font-medium leading-tight mb-4">
          Your one-stop shop for affordable items
        </h1>
      </div>
    </div>
  );
};

export default Hero;
