import { useState } from 'react';
import { FaRegHeart, FaTrash } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';

const WishlistDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { wishlistItems, removeFromWishlist, totalItems } = useWishlist();

  return (
    <div className="relative">
      <button 
        className="flex items-center gap-2 hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <FaRegHeart className="text-xl" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <span>Wishlist</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Wishlist</h3>
            {wishlistItems.length === 0 ? (
              <p className="text-gray-500">Your wishlist is empty</p>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistDropdown;
