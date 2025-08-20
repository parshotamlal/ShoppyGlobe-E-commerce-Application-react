import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to ShoppyGlobe
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing products from around the world
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section>
        <ProductList />
      </section>
    </div>
  );
};

export default Home;