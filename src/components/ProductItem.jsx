import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { addToCart } from '../store/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-red-200 rounded-lg shadow-md border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
            {product.discountPercentage}% OFF
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600 ml-1">
                {product.rating} ({product.stock} in stock)
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">
                ₹{(product.price * 83).toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ₹{((product.price / (1 - product.discountPercentage / 100)) * 83).toFixed(2)}
              </span>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
