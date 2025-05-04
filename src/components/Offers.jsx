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
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mt-20">
      {/* Main Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-9 px-4 sm:px-7.5 lg:px-14 xl:px-10 mb-7.5"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-12 md:w-1/2">
            <h2 className="text-lg mb-2 font-semibold">Apple iPhone 14 Plus</h2>
            <div className="font-bold text-5xl lg:text-heading-4 xl:text-heading-3 mb-5 text-[#0f1f3a]">UP TO 30% OFF</div>
            <p className="text-gray-400 mb-8 ">
                iPhone 14 has the same superseded chip that’s in 
                iPhone 13 Pro, A15 Bionic, with a 5‑core GPU, powers all the latest features.
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-[#4361ee] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Buy Now
            </Link>
          </div>
          <div className="md:w-1/2 p-6">
            <img 
              src="public\images\promo-01.jpg" 
              alt="iPhone 14 Plus"
              width={274} 
              height={350}
              className="absolute bottom-0 right-4 lg:right-26 -z-1"
            />
          </div>
        </div>
      </motion.div>

      {/* Small Banners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Exercise Banner */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#dffffd] rounded-xl p-6 flex items-center justify-between"
        >
          
          <div className="pr-4">
            <h3 className="block text-lg text-[#0a1931] mb-1.5">Foldable Motorised Treadmill</h3>
            <div className="font-bold text-3xl lg:text-heading-4 text-[#020e20]  mb-2.5">Workout At Home</div>
            <div className="text-lg text-[#10b981] font-semibold mb-6">Flat 20% off</div>
            <Link 
              to="/products" 
              className="bg-[#10b981] text-white px-6 py-2.5 rounded-md hover:bg-green-600 transition"
            >
              Grab Now
            </Link>
          </div>
          <img 
            src="public\images\promo-02.webp" 
            alt="Treadmill"
            width={241}
            height={241}
            className=" object-contain"
          />
        </motion.div>

        {/* Watch Banner */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#fff4f0] rounded-xl p-6 flex items-center justify-between"
        >
            
          <div className="pr-4">
            
            <h3 className="text-xl font-medium mb-2">Apple Watch Ultra</h3>
            <div className="text-2xl font-bold">Up to <span className="text-[#ff6b35]">40% off</span></div>
            <p className="text-gray-400 mb-5">
              The aerospace-grade titanium case strikes the perfect balance of everything
            </p>
            <Link 
              to="/products" 
              className="bg-[#ff6b35] text-white px-6 py-2.5 rounded-md hover:bg-orange-600 transition"
            >
              Buy Now
            </Link>
          </div>
          <img 
            src="public\images\promo-03.png" 
            alt="Apple Watch Ultra"
            width={241}
            height={241}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Countdown Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-7.5 bg-[#EDF3FF] rounded-xl p-8 lg:p-12"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-medium mb-2 block">Don't Miss!!</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enhance Your Music Experience
            </h2>
            <p className="text-gray-600 mb-6">
              The Havit H206d is a wired PC headphone.
            </p>

            <div className="flex gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 min-w-[80px]">
                  <span className="text-2xl font-bold text-gray-900 block">{timeLeft.days}</span>
                  <span className="text-sm text-gray-600">Days</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 min-w-[80px]">
                  <span className="text-2xl font-bold text-gray-900 block">{timeLeft.hours}</span>
                  <span className="text-sm text-gray-600">Hours</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 min-w-[80px]">
                  <span className="text-2xl font-bold text-gray-900 block">{timeLeft.minutes}</span>
                  <span className="text-sm text-gray-600">Minutes</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-3 min-w-[80px]">
                  <span className="text-2xl font-bold text-gray-900 block">{timeLeft.seconds}</span>
                  <span className="text-sm text-gray-600">Seconds</span>
                </div>
              </div>
            </div>

            <Link 
              to="/products" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Check it Out!
            </Link>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img 
              src="public\images\countdown-01.webp" 
              alt="Gaming Headphone"
              className="max-w-[500px] w-full mx-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Offers;
