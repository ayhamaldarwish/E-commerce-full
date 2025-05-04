import { useState } from 'react';
import { FaExpand, FaStar, FaRegStar, FaHeart, FaCheck } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetailSection = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const fullStars = Math.floor(product.rating);
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < fullStars ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-gray-300" />
        )
      );
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
      id: product.title
    });
    onClose(); // إغلاق المودال بعد الإضافة
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      ...product,
      id: product.title
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow-md md:flex md:gap-6"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center md:w-1/2"
      >
        {/* عرض الصور المصغرة بشكل أفقي */}
        <div className="flex gap-4 mb-4 justify-center">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              className={`h-24 w-24 rounded-md border-2 p-1 ${
                selectedImage === idx ? 'border-blue-600' : 'border-gray-200'
              } hover:border-blue-400 transition-colors`}
              onClick={() => setSelectedImage(idx)}
            >
              <img 
                src={img} 
                alt={`View ${idx + 1}`} 
                className="h-full w-full object-contain bg-gray-50"
              />
            </button>
          ))}
        </div>

        {/* الصورة الرئيسية */}
        <div className="relative w-full max-w-md rounded-lg bg-gray-100 p-6">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="mx-auto h-80 w-full object-contain"
          />
          <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow hover:bg-gray-50">
            <FaExpand />
          </button>
        </div>
      </motion.div>

      {/* Right: Details */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 md:mt-0 md:w-1/2"
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded bg-green-500 px-3 py-2 text-sm font-semibold text-white">
            SALE 20% OFF
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-bold text-gray-800">{product.name}</h2>

        <div className="mb-2 flex items-center text-sm">
          <div className="flex">{renderStars()}</div>
          <span className="ml-2 text-gray-600 font-medium">
            {product.rating} Rating ({product.reviews} reviews)
          </span>
          {product.stock && (
            <span className="ml-4 flex items-center text-green-600">
              <FaCheck className="mr-1" /> In Stock
            </span>
          )}
        </div>

        <p className="mb-4 text-gray-600">{product.description}</p>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 text-xl mb-2">Price</h3>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900 ">{product.price}</span>
            <span className="text-lg text-gray-400 line-through">{product.price + 3}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 text-xl mb-3">Quantity</h3>
          <div className="flex items-center">
            <button
              className="h-10 w-10 rounded-l-md border bg-gray-100 text-lg hover:bg-gray-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="h-10 w-14 border-y text-center outline-none"
            />
            <button
              className="h-10 w-10 rounded-r-md border bg-gray-100 text-lg hover:bg-gray-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={handleAddToCart}
            className="flex-1 rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 cursor-pointer "
          >
            Add to Cart
          </button>
          <button 
            onClick={handleAddToWishlist}
            className="flex-1 rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 hover:bg-gray-50 cursor-pointer"
          >
            <FaHeart className="mr-2 inline" />
            Add to Wishlist
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailSection;
