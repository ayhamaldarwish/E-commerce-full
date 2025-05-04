/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\+?[\d\s-]{8,}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, navigate to success page
    navigate('/mail-success');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" bg-gray-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="example@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="+1234567890"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Type your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0f1f3a] text-white rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {[
                { icon: FaLocationArrow, title: "Our Location", content: "7398 Smoke Ranch Road Las Vegas, Nevada 89128" },
                { icon: FaPhone, title: "Phone Number", content: "1234 567890" },
                { icon: FaEnvelope, title: "Email Address", content: "james@septimus.com" }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.5896121235266!2d-115.2748138!3d36.2037814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf2d0c75e06f%3A0x55ad0a4789e24ea2!2s7398%20Smoke%20Ranch%20Rd%2C%20Las%20Vegas%2C%20NV%2089128%2C%20USA!5e0!3m2!1sen!2s!4v1628744744407!5m2!1sen!2s"
                width="100%"
                height="300"
                className="rounded-lg"
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
