import { useState } from 'react';
import ProductDetailSection from './ProductDetailModal';
import { FaStar, FaStarHalfAlt, FaEye, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Offers from './Offers';

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

const ProductCard = ({ product, onShowDetails }) => {
  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="relative bg-gray-50 rounded-lg p-6 flex flex-col items-center">
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
            <FaHeart className={`${isInWishlist ? 'text-red-500' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>
      <Rating value={product.rating} reviews={product.reviews}/>
      <p className="font-medium ease-out duration-200 hover:text-blue-800 mb-1.5 cursor-pointer">{product.title}</p>
      <div className="flex items-center gap-2 font-medium text-lg">
        ${product.price}
        <span className="line-through text-gray-400 font-normal ml-2">${product.oldPrice}</span>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (product) => {
    setSelectedProduct({
      ...product,
      name: product.title,
      images: [product.image, product.secondImage], // تمرير مصفوفة الصور
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      stock: true
    });
    setShowModal(true);
  };

  return (
    <div className="bg-white text-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
          <span class="flex items-center gap-2.5 font-medium text-dark mb-1.5"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.11826 15.4622C4.11794 16.6668 5.97853 16.6668 9.69971 16.6668H10.3007C14.0219 16.6668 15.8825 16.6668 16.8821 15.4622M3.11826 15.4622C2.11857 14.2577 2.46146 12.429 3.14723 8.77153C3.63491 6.17055 3.87875 4.87006 4.8045 4.10175M3.11826 15.4622C3.11826 15.4622 3.11826 15.4622 3.11826 15.4622ZM16.8821 15.4622C17.8818 14.2577 17.5389 12.429 16.8532 8.77153C16.3655 6.17055 16.1216 4.87006 15.1959 4.10175M16.8821 15.4622C16.8821 15.4622 16.8821 15.4622 16.8821 15.4622ZM15.1959 4.10175C14.2701 3.33345 12.947 3.33345 10.3007 3.33345H9.69971C7.0534 3.33345 5.73025 3.33345 4.8045 4.10175M15.1959 4.10175C15.1959 4.10175 15.1959 4.10175 15.1959 4.10175ZM4.8045 4.10175C4.8045 4.10175 4.8045 4.10175 4.8045 4.10175Z" stroke="#3C50E0" stroke-width="1.5"></path><path d="M7.64258 6.66678C7.98578 7.63778 8.91181 8.33345 10.0003 8.33345C11.0888 8.33345 12.0149 7.63778 12.3581 6.66678" stroke="#3C50E0" stroke-width="1.5" stroke-linecap="round"></path></svg>This Week’s</span>
        </div>
        <button 
          onClick={() => navigate('/products')}
          className="text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded px-7 py-2.5 hover:bg-[#0f1f3a] hover:text-white transition duration-300 ease-in-out cursor-pointer"
        >
          View All
        </button>
      </div>
      <h2 className="font-bold text-3xl xl:text-heading-5 leading-8 text-gray-800 mb-4">
        New Arrivals
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onShowDetails={handleShowDetails}
          />
        ))}
      </div>

      {/* Product Detail Modal - Updated */}
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
                ×
              </button>
              <ProductDetailSection 
                product={selectedProduct}
                onClose={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      )}
      <Offers />
    </div>
  );
};

export default NewArrivals;