import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to ShoppyGlobe
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover amazing products from around the world
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Home;
