/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock, FaRegEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const Blogs = () => {
  const { blogs } = useData();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-8"
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-8"
      >
        Latest Blog Posts
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post, index) => (
          <motion.article 
            key={post.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <Link 
              to={`/blog/${post.id}`} 
              state={{ 
                blogData: {
                  ...post,
                  views: post.views,
                  category: post.category,
                  content: post.content || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                } 
              }}
              className="block"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-2">
                    <FaRegClock />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegEye />
                    {post.views}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-blue-600 hover:text-blue-700">
                  Read More →
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
