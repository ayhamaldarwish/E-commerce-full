import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import React from 'react';
import { FaPhoneAlt, FaUser, FaShoppingCart, FaSearch, FaChevronDown, FaSyncAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const { cartItems, totalItems, removeFromCart, addToCart } = useCart();
  const { wishlistItems } = useWishlist();

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * (item.quantity || 1);
  }, 0);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getPageLinks = [
    { path: '/checkout', label: 'Checkout' },
    { path: '/wishlist', label: 'Wishlist' },
    { path: '/sign-in', label: 'Sign in' },
    { path: '/sign-up', label: 'Sign up' },
    { path: '/my-account', label: 'My Account' },
    /* { path: '/error', label: 'Error' }, */
    /* { path: '/mail-success', label: 'Mail Success' } */
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
    // Clear existing timer if any
    if (dropdownTimer) clearTimeout(dropdownTimer);
    
    // Set new timer if opening dropdown
    if (!isDropdownOpen) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 5000); // 5 seconds
      setDropdownTimer(timer);
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimer) clearTimeout(dropdownTimer);
    };
  }, [dropdownTimer]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Top Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
            {/* Left side */}
            <div className="flex items-center space-x-10">
              <form className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-md w-full">
                <select className="pl-2 pr-3 py-2 text-sm text-gray-700 border-r border-gray-300 focus:outline-none">
                  <option>All Categories</option>
                  <option>Desktop</option>
                  <option>Laptop</option>
                  <option>Smartphone</option>
                  <option>Tablet</option>
                  <option>Accessories</option>
                  <option>Smartwatch</option>
                  <option>Headphones</option>
                </select>
                <span className="border-r border-gray-300 h-11"></span>
                <input
                  type="search"
                  className="flex-grow px-1 py-3 text-sm text-gray-400 placeholder-gray-400 focus:outline-none"
                  placeholder="I am shopping for..."
                />
                <button type="submit" className="pl-29 pr-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                  <FaSearch />
                </button>
              </form>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-8 text-xs text-gray-600 mt-4 sm:mt-0 sm:text-sm sm:space-x-12">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-blue-600 text-lg" />
                <div className="leading-tight">
                  <div className="uppercase tracking-wide">24/7 SUPPORT</div>
                  <div className="font-semibold text-black">(+90) 5396700366</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 border-l border-gray-300 pl-8">
                <FaUser className="text-blue-600 text-lg" />
                <div className="leading-tight">
                  <div className="uppercase tracking-wide">ACCOUNT</div>
                  <div className="font-semibold cursor-pointer select-none">
                    <Link to="/sign-in" className="text-blue-600 hover:text-blue-800">
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1 border-l border-gray-300 pl-8 cursor-pointer">
                <button 
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative"
                >
                  <FaShoppingCart className="text-blue-600 text-lg cursor-pointer" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
                <div className="leading-tight">
                  <div className="uppercase tracking-wide">CART</div>
                  <div className="font-bold cursor-default select-none text-blue-600">${totalPrice.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4">
        <div className='container mx-auto'>
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/logo1.png"  
                alt="ElectraBay Logo"
                
                className="w-30 h-14 object-cover" 
              />
            </Link>
          
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`font-medium transition-colors ${
                    isActive('/') ? 'text-blue-600' : 'hover:text-blue-600'
                  }`}
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop" 
                  className={`font-medium transition-colors ${
                    isActive('/shop') ? 'text-blue-600' : 'hover:text-blue-600'
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`font-medium transition-colors ${
                    isActive('/contact') ? 'text-blue-600' : 'hover:text-blue-600'
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={`font-medium transition-colors ${
                    isActive('/blog') ? 'text-blue-600' : 'hover:text-blue-600'
                  }`}
                >
                  Blogs
                </Link>
              </li>
              <li className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center space-x-1 hover:text-blue-600 font-medium"
                >
                  <span>Pages</span>
                  <FaChevronDown className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-50`}>
                  {getPageLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 ${
                        isActive(link.path) 
                          ? 'bg-gray-50 text-blue-600' 
                          : 'hover:bg-gray-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
            <ul className="flex space-x-8 text-gray-700">
              <li>
                <Link to="/recently-viewed" className="flex items-center space-x-2 hover:text-blue-600">
                  <FaSyncAlt />
                  <span>Recently Viewed</span>
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="flex items-center space-x-2 hover:text-blue-600">
                  <div className="relative">
                    <FaHeart />
                    {wishlistItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        {wishlistItems.length}
                      </span>
                    )}
                  </div>
                  <span>Wishlist</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cart Dropdown with Overlay */}
      {isCartOpen && (
        <>
          {/* Dark Overlay */}
          <div 
            className="fixed inset-0 bg-[#4b69a8a6] bg-opacity-50 z-[90]"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Cart Sidebar */}
          <div className="fixed right-0 top-0 h-screen w-[400px] bg-white shadow-xl z-[100]">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Cart View</h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                  <svg className="w-16 h-16 text-gray-300 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-500 mb-4">Your cart is empty!</p>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/shop');
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 mb-4 pb-4 border-b">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-20 h-20 object-cover rounded-lg bg-gray-50"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium mb-2">{item.title}</h4>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border rounded-md">
                              <button 
                                onClick={() => addToCart(item, -1)}
                                className="px-3 py-1 hover:bg-gray-50"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 border-x">{item.quantity}</span>
                              <button 
                                onClick={() => addToCart(item, 1)}
                                className="px-3 py-1 hover:bg-gray-50"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-medium">${item.price}</span>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-600"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="border-t p-4">
                    <div className="flex justify-between mb-4">
                      <span className="text-lg">Subtotal:</span>
                      <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-4">
                      <Link 
                        to="/cart"
                        className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                        onClick={() => setIsCartOpen(false)}
                      >
                        View Cart
                      </Link>
                      <Link
                        to="/checkout"
                        className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
