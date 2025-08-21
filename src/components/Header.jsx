import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { selectCartItemCount } from '../store/cartSlice';
import { FaReact } from 'react-icons/fa'; // React icon import

const Header = () => {
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FaReact className="w-10 h-10 text-blue-500" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10 text-lg font-medium">
            <Link
              to="/"
              className="relative text-gray-700 hover:text-blue-600 transition-colors after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Cart
            </Link>
            <Link
              to="/checkout"
              className="relative text-gray-700 hover:text-blue-600 transition-colors after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Checkout
            </Link>
          </nav>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
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
