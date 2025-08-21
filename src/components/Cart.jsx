import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import CartItem from './CartItem';
import { selectCartItems, selectCartTotal, clearCart } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-16">
        <div className="text-center py-16 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 text-lg">Add some products to get started!</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 lg:mb-0">Shopping Cart</h1>
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Items ({cartItems.length})</h2>
            <button
              onClick={handleClearCart}
              className="text-red-600 hover:text-red-800 text-sm font-semibold transition-colors"
            >
              Clear Cart
            </button>
          </div>
          
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg sticky top-28">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-semibold text-gray-900">₹{(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-extrabold text-gray-900">
                  <span>Total</span>
                  <span>₹{(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl text-center font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
            >
              Proceed to Checkout
            </Link>
            
            <p className="mt-4 text-sm text-gray-500 text-center">
              Secure checkout with SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
