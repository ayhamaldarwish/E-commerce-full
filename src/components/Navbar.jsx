/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import React from 'react';
import { FaSearch, FaChevronDown, FaSyncAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { FaHeart } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const { cartItems, totalItems, removeFromCart, addToCart } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, logout } = useAuth();
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

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

  const handleLogout = () => {
    logout();
    setIsAccountDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Top Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
            {/* Left side - Search */}
            <div className="w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
              <form className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-md mx-auto sm:mx-0">
                <select className="hidden sm:block pl-2 pr-3 py-2 text-sm text-gray-700 border-r border-gray-300 focus:outline-none">
                  <option>All Categories</option>
                  <option>Desktop</option>
                  <option>Laptop</option>
                  <option>Smartphone</option>
                  <option>Tablet</option>
                  <option>Accessories</option>
                  <option>Smartwatch</option>
                  <option>Headphones</option>
                </select>
                <input
                  type="search"
                  className="flex-grow px-3 py-2 text-sm text-gray-400 placeholder-gray-400 focus:outline-none"
                  placeholder="I am shopping for..."
                />
                <button type="submit" className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                  <FaSearch />
                </button>
              </form>
            </div>

            {/* Right side - Account & Cart */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-0 sm:space-x-6 md:space-x-8 text-xs text-gray-600 sm:text-sm">
              {/* Support - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-2 gap-1">
                <FiPhoneCall className="text-blue-600 text-xl" />
                <div className="leading-tight">
                  <div className="uppercase tracking-wide text-[11px]">24/7 SUPPORT</div>
                  <div className="font-semibold text-blue-600">(+90) 5396700366</div>
                </div>
              </div>

              {/* Account */}
              <div className="flex items-center space-x-2 md:border-l md:border-gray-300 md:pl-6">
                <FaRegUser className="text-blue-600 text-xl" />
                <div className="leading-tight">
                  <div className="uppercase tracking-wide text-[11px]">ACCOUNT</div>
                  {user ? (
                    <div className="relative">
                      <button 
                        className="font-semibold text-blue-600 hover:text-blue-800"
                        onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                      >
                        {user.name || user.email.split('@')[0]}
                      </button>
                      {isAccountDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          <Link 
                            to="/my-account" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsAccountDropdownOpen(false)}
                          >
                            My Account
                          </Link>
                          <button 
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Sign Out
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to="/sign-in" 
                      className="font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              </div>

              {/* Cart */}
              <div className="flex items-center space-x-1 md:border-l md:border-gray-300 md:pl-6 cursor-pointer">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative"
                >
                  <BsCartCheck className="text-blue-600 text-xl cursor-pointer" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
                <div className="leading-tight">
                  <div className="uppercase tracking-wide text-[11px]">CART</div>
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
                className="w-24 h-10 md:w-30 md:h-14 object-cover"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
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

            {/* Desktop Quick Links */}
            <ul className="hidden md:flex space-x-8 text-gray-700">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2">
              <ul className="space-y-4 py-4">
                <li>
                  <Link
                    to="/"
                    className={`block py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={`block py-2 ${isActive('/shop') ? 'text-blue-600' : 'text-gray-700'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`block py-2 ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`block py-2 ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </li>
                <li className="py-2">
                  <div className="flex items-center justify-between" onClick={toggleDropdown}>
                    <span className="text-gray-700">Pages</span>
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {getPageLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`block py-1 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-600'}`}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to="/recently-viewed"
                    className="flex items-center space-x-2 py-2 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FaSyncAlt />
                    <span>Recently Viewed</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className="flex items-center space-x-2 py-2 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Dropdown with Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#4b69a8a6] bg-opacity-50 z-[90]"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-screen w-full sm:w-[350px] md:w-[400px] bg-white shadow-xl z-[100]"
            >
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
                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-gray-50"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium mb-2">{item.title}</h4>
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center border rounded-md">
                                <button
                                  onClick={() => addToCart(item, -1)}
                                  className="px-2 sm:px-3 py-1 hover:bg-gray-50"
                                >
                                  -
                                </button>
                                <span className="px-2 sm:px-3 py-1 border-x">{item.quantity}</span>
                                <button
                                  onClick={() => addToCart(item, 1)}
                                  className="px-2 sm:px-3 py-1 hover:bg-gray-50"
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
                      <div className="flex flex-col sm:flex-row gap-3">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
