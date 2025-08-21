import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ArrowLeft, Plus, Star, Truck, Shield, RefreshCcw } from 'lucide-react';
import { addToCart } from '../store/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
            <h3 className="font-semibold mb-2">Error Loading Product</h3>
            <p>{error}</p>
            <Link to="/" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-500">Product not found</p>
          <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images && product.images[selectedImage] ? product.images[selectedImage] : product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images && product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.title}</h1>
            <p className="text-gray-600 mt-4">{product.description}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.rating}/5)</span>
          </div>

          {/* Price */}
 <div className="space-y-2">
  <div className="flex items-center space-x-3">
    <span className="text-3xl font-bold text-blue-600">
      ₹{(product.price * 83).toFixed(2)}
    </span>
    <span className="text-lg text-gray-500 line-through">
      ₹{((product.price / (1 - product.discountPercentage / 100)) * 83).toFixed(2)}
    </span>
    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
      {product.discountPercentage}% OFF
    </span>
  </div>
</div>

          {/* Stock */}
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              product.stock > 10 
                ? 'bg-green-100 text-green-800' 
                : product.stock > 0 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg font-semibold"
          >
            <Plus className="w-5 h-5" />
            <span>{product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>

          {/* Features */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">2 year warranty</span>
            </div>
            <div className="flex items-center space-x-3">
              <RefreshCcw className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">30 day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;