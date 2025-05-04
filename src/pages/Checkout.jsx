/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice } = useCart();
  const [shippingMethod, setShippingMethod] = useState('free');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    street: '',
    apartment: '',
    city: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.street.trim()) newErrors.street = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1 error-message">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1 error-message">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">
                Country/Region <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.country}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.street ? 'border-red-500' : 'border-gray-300'} rounded mb-2`}
                placeholder="House number and street name"
              />
              {errors.street && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.street}</p>
              )}
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">
                Town/City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.city}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 error-message">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Create an account?</span>
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Other Notes (optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Notes about your order"
              ></textarea>
            </div>
          </motion.form>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div 
            className="bg-gray-50 p-6 rounded-lg"
            whileHover={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-xl font-semibold mb-4">Your Order</h3>
            
            {/* Order Items */}
            <div className="border-b pb-4 mb-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex justify-between mb-2"
                >
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </motion.div>
              ))}
            </div>

            {/* Shipping and Payment Methods */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="mb-6">
                <h4 className="font-medium mb-3">Shipping Method</h4>
                <div className="space-y-2">
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="shipping"
                      value="free"
                      checked={shippingMethod === 'free'}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span>Free Shipping</span>
                  </label>
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === 'express'}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span>Express Shipping - $10.99</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Payment Method</h4>
                <div className="space-y-2">
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span>Direct bank transfer</span>
                  </label>
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span>Cash on delivery</span>
                  </label>
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span>PayPal</span>
                  </label>
                </div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Checkout;
