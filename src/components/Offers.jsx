/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to 5 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = endDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mt-10 sm:mt-20">
      {/* Main Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-lg bg-[#F5F5F7] py-6 sm:py-12 px-4 sm:px-8 mb-6 sm:mb-8"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-4 sm:p-8 md:w-1/2 text-center md:text-left">
            <h2 className="text-base sm:text-lg mb-2 font-semibold">Apple iPhone 14 Plus</h2>
            <div className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-5 text-[#0f1f3a]">UP TO 30% OFF</div>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
              iPhone 14 has the same superseded chip that's in 
              iPhone 13 Pro, A15 Bionic, with a 5‑core GPU, powers all the latest features.
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-[#4361ee] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Buy Now
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img 
              src="/images/promo-01.jpg" 
              alt="iPhone 14 Plus"
              className="w-full h-[200px] sm:h-auto max-w-[200px] sm:max-w-[274px] mx-auto md:absolute md:bottom-0 md:right-4 lg:right-26 object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Small Banners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Exercise Banner */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#dffffd] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between"
        >
          <div className="text-center sm:text-left mb-4 sm:mb-0 sm:pr-4">
            <h3 className="text-base sm:text-lg text-[#0a1931] mb-1.5">Foldable Motorised Treadmill</h3>
            <div className="font-bold text-2xl sm:text-3xl text-[#020e20] mb-2">Workout At Home</div>
            <div className="text-base sm:text-lg text-[#10b981] font-semibold mb-4 sm:mb-6">Flat 20% off</div>
            <Link 
              to="/products" 
              className="inline-block bg-[#10b981] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-green-600 transition text-sm sm:text-base"
            >
              Grab Now
            </Link>
          </div>
          <img 
            src="/images/promo-02.webp" 
            alt="Treadmill"
            className="w-full h-[150px] sm:h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[241px] object-contain"
          />
        </motion.div>

        {/* Watch Banner */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#fff4f0] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between"
        >
          <div className="text-center sm:text-left mb-4 sm:mb-0 sm:pr-4">
            <h3 className="text-lg sm:text-xl font-medium mb-2">Apple Watch Ultra</h3>
            <div className="text-xl sm:text-2xl font-bold">Up to <span className="text-[#ff6b35]">40% off</span></div>
            <p className="text-gray-400 mb-4 sm:mb-5 text-sm sm:text-base">
              The aerospace-grade titanium case strikes the perfect balance
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-[#ff6b35] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-orange-600 transition text-sm sm:text-base"
            >
              Buy Now
            </Link>
          </div>
          <img 
            src="/images/promo-03.png" 
            alt="Apple Watch Ultra"
            className="w-full h-[150px] sm:h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[241px] object-contain"
          />
        </motion.div>
      </div>

      {/* Countdown Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 sm:mt-8 bg-[#EDF3FF] rounded-xl p-4 sm:p-8 lg:p-12"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-blue-600 font-medium mb-2 block text-sm sm:text-base">Don't Miss!!</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Enhance Your Music Experience
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              The Havit H206d is a wired PC headphone.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 mb-6 sm:mb-8">
              {/* Timer boxes */}
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 block">{value}</span>
                    <span className="text-xs sm:text-sm text-gray-600">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/products" 
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Check it Out!
            </Link>
          </div>

          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <img 
              src="/images/countdown-01.webp" 
              alt="Gaming Headphone"
              className="max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] w-full mx-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Offers;
