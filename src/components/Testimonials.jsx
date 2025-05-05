// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../data/products'; // Adjust the import path as necessary

const Testimonials = () => {

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index} className="text-yellow-400 text-lg">★</span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <FiUsers className="text-blue-800 font-bold text-xl sm:text-2xl" />
        <h2 className="font-bold text-2xl sm:text-3xl xl:text-heading-5 leading-8 text-gray-800">User Feedbacks</h2>
      </div>

      <div className="relative px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <div className="flex mb-3 sm:mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{testimonial.text}</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="mt-12 sm:mt-20 relative rounded-xl p-4 sm:p-8 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/newsletter-bg.jpg" 
            alt="newsletter background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Don't Miss Out Latest<br className="hidden sm:block" />Trends & Offers
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              Register to receive news about the latest offers & discount codes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 sm:py-3 text-gray-800 bg-amber-100 rounded-lg text-sm sm:text-base"
            />
            <button className="bg-blue-600 px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
