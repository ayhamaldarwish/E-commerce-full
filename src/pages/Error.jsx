import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 py-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">The page you are looking for doesn't exist.</p>
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

export default Error;