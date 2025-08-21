import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Store } from 'lucide-react';
import { selectCartItemCount } from '../store/cartSlice';

const Header = () => {
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <Store className="w-8 h-8" />
            <span>ShoppyGlobe</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition-colors">
              Cart
            </Link>
            <Link to="/checkout" className="text-gray-700 hover:text-blue-600 transition-colors">
              Checkout
            </Link>
          </nav>
          
          <Link
            to="/cart"
            className="relative flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;