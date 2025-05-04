import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  return (
    <div className="mt-[144px] bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Your Wishlist</h1>
            {wishlistItems.length > 0 && (
              <button 
                onClick={clearWishlist}
                className="text-red-600 hover:text-red-800 font-medium cursor-pointer"
              >
                Clear Wishlist
              </button>
            )}
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Your wishlist is empty!</p>
              <Link 
                to="/shop"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Product</th>
                    <th className="text-left py-4 px-4">Unit Price</th>
                    <th className="text-left py-4 px-4">Stock Status</th>
                    <th className="text-right py-4 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-16 h-16 object-contain bg-gray-50 rounded-lg"
                          />
                          <span className="font-medium">{item.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">{item.price}</td>
                      <td className="py-4 px-4">
                        <span className="text-green-600">In Stock</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-red-600 hover:text-red-800 p-2 cursor-pointer"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
