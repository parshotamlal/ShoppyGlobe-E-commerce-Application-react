import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, Loader } from 'lucide-react';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';
import { 
  setSearchQuery, 
  setFilteredProducts, 
  selectSearchQuery, 
  selectFilteredProducts 
} from '../store/searchSlice';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch(setFilteredProducts(filtered));
    }
  }, [products, searchQuery, dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="w-8 h-8 animate-spin text-blue-600" />
        <span className="ml-2 text-lg">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
          <h3 className="font-semibold mb-2">Error Loading Products</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {searchQuery 
            ? `Found ${filteredProducts.length} results for "${searchQuery}"` 
            : `Showing ${products.length} products`}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchQuery ? `No products found for "${searchQuery}"` : 'No products available'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
