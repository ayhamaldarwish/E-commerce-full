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
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <FiUsers className="text-blue-800 font-bold text-2xl" />
        <h2 className="font-bold text-3xl xl:text-heading-5 leading-8 text-gray-800 ">User Feedbacks</h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md">
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md">
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="mt-20 relative rounded-xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="public\images\newsletter-bg.jpg" 
            alt="newsletter background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out Latest<br />Trends & Offers</h3>
            <p className="text-white/80">Register to receive news about the latest offers & discount codes</p>
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-800 bg-amber-100 rounded-lg"
            />
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
