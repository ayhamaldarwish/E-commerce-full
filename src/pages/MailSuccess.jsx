import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const MailSuccess = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 py-16">
      <div className="text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Email Sent Successfully!</h2>
        <p className="text-gray-600 mt-2">Check your inbox for further instructions.</p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MailSuccess;