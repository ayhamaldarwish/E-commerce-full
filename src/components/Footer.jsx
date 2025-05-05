import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterSection = ({ title, children }) => {
  return (
    <div className="pb-6 md:pb-0">
      <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="block">
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-6 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-12">
          {/* Help & Support */}
          <FooterSection title="Help & Support">
            <div className="space-y-3 text-sm md:text-base text-gray-600">
              <p className="flex items-center gap-2">
                <span>1043 Street, yil marker, turkey 78000</span>
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
          </FooterSection>

          {/* Account */}
          <FooterSection title="Account">
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li><Link to="/my-account" className="text-gray-600 hover:text-blue-600">My Account</Link></li>
              <li><Link to="/sign-in" className="text-gray-600 hover:text-blue-600">Login / Register</Link></li>
              <li><Link to="/cart" className="text-gray-600 hover:text-blue-600">Cart</Link></li>
              <li><Link to="/wishlist" className="text-gray-600 hover:text-blue-600">Wishlist</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-blue-600">Shop</Link></li>
            </ul>
          </FooterSection>

          {/* Quick Link */}
          <FooterSection title="Quick Link">
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="text-gray-600 hover:text-blue-600">Refund Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms of Use</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ's</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </FooterSection>

          {/* Download App */}
          <FooterSection title="Download App">
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Save $3 With App & New User only</p>
            <img
              src="public\images\App_Store_(iOS)-Badge-Alternative-Logo.wine.svg"
              alt="Download on App Store"
              className="h-8 md:h-15 w-full"
            />
          </FooterSection>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
              © 2025. All rights reserved by Ayham Aldarwish.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-xs md:text-sm text-gray-600">We Accept:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((payment, index) => (
                  <img 
                    key={payment}
                    src={`/images/payment-0${index + 1}.svg`}
                    alt={payment}
                    className="h-5 sm:h-6 md:h-6 w-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;