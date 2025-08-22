import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { selectCartItems, selectCartTotal, clearCart } from '../store/cartSlice';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  // USD → INR conversion
  const conversionRate = 87; // 1 USD = ₹83
  const cartTotalInINR = cartTotal * conversionRate;
  const tax = cartTotal * 0.08 * conversionRate;
  const total = cartTotalInINR + tax;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderCompleted(true);
    dispatch(clearCart());
  };

  if (cartItems.length === 0 && !orderCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md mx-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Order Completed!</h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase. You will receive a confirmation email shortly.</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link to="/cart" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
          Back to Cart
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
         {/* Contact Information */}
<div className="bg-gray-50 rounded-lg shadow-md p-6">
  <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        required
        value={formData.firstName}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        required
        value={formData.lastName}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
      />
    </div>
  </div>
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      required
      value={formData.email}
      onChange={handleInputChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
    />
  </div>
</div>

              {/* Shipping Address */}
<div className="bg-gray-50 rounded-lg shadow-md p-6">
  <h2 className="text-xl font-semibold mb-4 text-gray-800">Shipping Address</h2>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Street Address
      </label>
      <input
        type="text"
        name="address"
        required
        value={formData.address}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          City
        </label>
        <input
          type="text"
          name="city"
          required
          value={formData.city}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Postal Code
        </label>
        <input
          type="number"
          name="postalCode"
          required
          value={formData.postalCode}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
        />
      </div>
    </div>
  </div>
</div>


 {/* Payment Information */}
<div className="bg-gray-50 rounded-lg shadow-md p-6">
  <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
    <CreditCard className="w-5 h-5 mr-2 text-blue-500" />
    Payment Information
  </h2>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Card Number
      </label>
      <input
        type="number"
        name="cardNumber"
        required
        placeholder="1234 5678 9012 3456"
        value={formData.cardNumber}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Expiry Date
        </label>
        <input
          type="number"
          name="expiry"
          required
          placeholder="MM/YY"
          value={formData.expiry}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          CVV
        </label>
        <input
          type="number"
          name="cvv"
          required
          placeholder="123"
          value={formData.cvv}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-800"
        />
      </div>
    </div>
  </div>
  <div className="mt-4 flex items-center text-sm text-gray-500">
    <Lock className="w-4 h-4 mr-2 text-gray-400" />
    Your payment information is secure and encrypted
  </div>
</div>


              <button
  type="submit"
  disabled={isProcessing}
  className="w-full bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold text-lg shadow-md transition-all transform hover:-translate-y-0.5"
>
  {isProcessing ? 'Processing...' : `Complete Order - ₹${total.toFixed(2)}`}
</button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">
                      ₹{(item.price * conversionRate * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{cartTotalInINR.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
