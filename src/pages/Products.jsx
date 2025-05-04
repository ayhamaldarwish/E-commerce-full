/* eslint-disable no-unused-vars */
import { products } from '../data/products';
import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaEye, FaHeart, FaFilter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductDetailSection from '../components/ProductDetailModal';
import { motion } from 'framer-motion';

const Rating = ({ value, reviews }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(value)) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i - value < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    }
  }
  return (
    <div className="flex items-center space-x-1 mb-1 text-xs">
      {stars}
      <span className="text-gray-500 ml-1">({reviews})</span>
    </div>
  );
};

const ProductCard = ({ product, onShowDetails, index }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative bg-gray-50 rounded-lg p-6 flex flex-col items-center"
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.title}
          className="w-[250px] h-[250px] object-contain mb-4 bg-[#eff2fd] rounded-lg "
        />
        <div className="cursor-pointer absolute inset-0 flex items-end justify-between px-2 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => onShowDetails(product)}
            className="w-9 h-9 flex items-center justify-center rounded bg-white shadow hover:bg-gray-100"
          >
            <FaEye className="text-gray-600" />
          </button>
          <button 
            onClick={handleAddToCart}
            className="px-4 h-9 flex items-center justify-center rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Add to cart
          </button>
          <button 
            onClick={handleAddToWishlist}
            className="w-9 h-9 flex items-center justify-center rounded bg-white shadow hover:bg-gray-100"
          >
            <FaHeart className="text-gray-600" />
          </button>
        </div>
      </div>
      <Rating value={product.rating} reviews={product.reviews}/>
      <p className="font-medium ease-out duration-200 hover:text-blue-800 mb-1.5 cursor-pointer">{product.title}</p>
      <div className="flex items-center gap-2 font-medium text-lg">
        {product.price}
        <span className="line-through text-gray-400 font-normal ml-2">{product.oldPrice}</span>
      </div>
    </motion.div>
  );
};

const Filters = ({ activeFilters, setActiveFilters }) => {
  const handleClearAll = () => {
    setActiveFilters({
      categories: [],
      maxPrice: 1000,
      minPrice: 0,
      minRating: 0,
      selectedRatings: [],
      size: null,
      color: null,
      genders: [],
    });

    // Reset form inputs
    const priceInputs = document.querySelectorAll('input[type="number"]');
    const priceRange = document.querySelector('input[type="range"]');
    const ratingCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    priceInputs.forEach(input => input.value = '');
    if (priceRange) priceRange.value = 1000;
    ratingCheckboxes.forEach(checkbox => checkbox.checked = false);
  };

  return (
    <div className="space-y-4 w-72 hidden md:block">
      {/* Filter Header */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button 
            onClick={handleClearAll}
            className="text-sm text-blue-600 hover:text-blue-700 transition duration-200 cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Size Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-medium mb-3">Size</h4>
        <div className="flex flex-wrap gap-2">
          {['M', 'L', 'XL', 'XXL'].map(size => (
            <button
              key={size}
              className={`w-10 h-10 rounded-lg border-2 font-medium transition-all duration-200 cursor-pointer
                ${activeFilters.size === size 
                  ? 'border-blue-600 bg-blue-600 text-white' 
                  : 'border-gray-200 hover:border-blue-600 text-gray-600'
                }`}
              onClick={() => setActiveFilters(prev => ({
                ...prev,
                size: prev.size === size ? null : size
              }))}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-medium mb-3">Color</h4>
        <div className="flex flex-wrap gap-2">
          { [
            { name: 'Red', color: '#EF4444' },
            { name: 'Blue', color: '#3B82F6' },
            { name: 'Green', color: '#10B981' },
            { name: 'Yellow', color: '#FBBF24' }
          ].map(({ name, color }) => (
            <button
              key={name}
              className={`w-5 h-5 cursor-pointer rounded-full transition-all duration-200 relative
                ${activeFilters.color === name 
                  ? 'ring-2 ring-offset-2 ring-blue-600' 
                  : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'
                }`}
              style={{ backgroundColor: color }}
              onClick={() => setActiveFilters(prev => ({
                ...prev,
                color: prev.color === name ? null : name
              }))}
              title={name}
            />
          ))}
        </div>
      </div>

      {/* Gender Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-medium mb-3">Gender</h4>
        <div className="space-y-2">
          { [
            { label: 'Men', count: 10 },
            { label: 'Women', count: 23 },
            { label: 'Unisex', count: 8 }
          ].map(({ label, count }) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox"
                checked={activeFilters.genders.includes(label)}
                onChange={() => {
                  setActiveFilters(prev => ({
                    ...prev,
                    genders: prev.genders.includes(label)
                      ? prev.genders.filter(g => g !== label)
                      : [...prev.genders, label]
                  }));
                }}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{label}</span>
              <span className="text-xs text-gray-400 ml-auto">({count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-medium mb-3">Category</h4>
        <div className="space-y-2">
          {['Desktop', 'Laptop', 'Monitor', 'UPS', 'Phone', 'Watch'].map(category => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{category}</span>
              <span className="text-xs text-gray-400 ml-auto">(23)</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-4">
          <input 
            type="range" 
            className="w-full h-2 accent-blue-600"
            min="0"
            max="1000"
          />
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1">Min</label>
              <input 
                type="number" 
                className="w-full px-3 py-1 border rounded text-sm"
                placeholder="0"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1">Max</label>
              <input 
                type="number" 
                className="w-full px-3 py-1 border rounded text-sm"
                placeholder="1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-medium mb-3">Rating</h4>
        <div className="space-y-2">
          {[ 5, 4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex text-yellow-400 text-sm">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-xs text-gray-400 ml-auto">(120)</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    maxPrice: 1000,
    minRating: 0,
    size: null, // إضافة فلتر الحجم
    color: null,
    genders: [], // إضافة فلتر الجنس
  });

  // تحديث طريقة التصفية
  const filteredProducts = products.filter(product => {
    const price = parseInt(product.price.replace('$', ''));
    return (
      (activeFilters.categories.length === 0 || 
       activeFilters.categories.includes(product.category)) &&
      (activeFilters.size === null || product.size === activeFilters.size) &&
      (activeFilters.color === null || product.color === activeFilters.color) &&
      (activeFilters.genders.length === 0 || activeFilters.genders.includes(product.gender)) &&
      price <= activeFilters.maxPrice
    );
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (product) => {
    setSelectedProduct({
      ...product,
      name: product.title,
      images: [product.image, product.secondImage],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      stock: true
    });
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen pt-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden md:block sticky top-[120px] self-start h-[calc(100vh-120px)] overflow-y-auto">
            <Filters activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">All Products</h1>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-500">Showing 9 of 50 Products</p>
                  <select className="border rounded px-3 py-1.5 text-sm bg-white">
                    <option>Best Selling</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                  </select>
                  <button className="md:hidden p-2 border rounded">
                    <FaFilter />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <ProductCard 
                    product={product}
                    onShowDetails={handleShowDetails}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <nav className="flex items-center gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  &larr;
                </motion.button>
                
                {[1, 2, 3, 4, 5].map((page, index) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`w-10 h-10 rounded-lg font-medium ${
                      page === 1
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {page}
                  </motion.button>
                ))}

                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  &rarr;
                </motion.button>
              </nav>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100]">
          <div className="fixed inset-0 bg-black opacity-50" 
               onClick={() => setShowModal(false)} 
          />
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-white rounded-lg">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-[60] text-2xl"
              >
                <IoClose />
              </button>
              <ProductDetailSection 
                product={selectedProduct}
                onClose={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Products;
