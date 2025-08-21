import React from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const inrRate = 83; // 1 USD ≈ ₹83

  const handleUpdateQuantity = (newQuantity) => {
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
      />
      
      <div className="flex-grow text-center sm:text-left">
        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
        
        {/* Single item price in INR */}
        <p className="text-blue-600 font-bold">
          ₹{(item.price * inrRate).toFixed(2)}
        </p>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => handleUpdateQuantity(item.quantity - 1)}
            className="p-2 hover:bg-gray-100 text-gray-600"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
          <button
            onClick={() => handleUpdateQuantity(item.quantity + 1)}
            className="p-2 hover:bg-gray-100 text-gray-600"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <button
          onClick={handleRemove}
          className="p-2 text-black hover:bg-red-50 rounded-lg"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="text-right">
        {/* Total Price in INR */}
        <p className="font-bold text-lg text-gray-900">
          ₹{(item.price * item.quantity * inrRate).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
