import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Help & Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Help & Support</h3>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-2">
                <span>1043  Street, yil marker , turkey 78000</span>
              </p>
              <p className="flex items-center gap-2">
                <span>(+90) 5396700366</span>
              </p>
              <p className="flex items-center gap-2">
                <span>ayham.official@gmail.com</span>
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-600 hover:text-blue-600"><FaFacebookF /></a>
                <a href="#" className="text-gray-600 hover:text-blue-400"><FaTwitter /></a>
                <a href="#" className="text-gray-600 hover:text-pink-600"><FaInstagram /></a>
                <a href="#" className="text-gray-600 hover:text-blue-800"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Account</h3>
            <ul className="space-y-3">
              <li><Link to="/my-account" className="text-gray-600 hover:text-blue-600">My Account</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-blue-600">Login / Register</Link></li>
              <li><Link to="/cart" className="text-gray-600 hover:text-blue-600">Cart</Link></li>
              <li><Link to="/wishlist" className="text-gray-600 hover:text-blue-600">Wishlist</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-blue-600">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Quick Link</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-gray-600 hover:text-blue-600">Refund Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms of Use</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ's</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Download App</h3>
            <p className="text-gray-600 mb-4">Save $3 With App & New User only</p>
            <div className="flex flex-col gap-4">
              <a href="#" className="block">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2025. All rights reserved by Ayham Aldarwish.</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">We Accept:</span>
              <div className="flex gap-3">
                <img src="public\images\payment-01.svg" alt="" />
                <img src="public\images\payment-02.svg" alt="" />
                <img src="public\images\payment-03.svg" alt="" />
                <img src="public\images\payment-04.svg" alt="" />
                <img src="public\images\payment-05.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;