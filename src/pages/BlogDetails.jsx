/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { FaSearch, FaRegClock, FaRegEye, FaTags, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const BlogDetails = () => {
  const { blogs, recentPosts, blogCategories, popularTags } = useData();
  const { id } = useParams();
  const location = useLocation();
  const blogData = location.state?.blogData;

  const blogPost = blogData || blogs.find(blog => blog.id === parseInt(id));
  
  console.log('Blog Image:', blogPost?.image); // للتأكد من مسار الصورة

  if (!blogPost) {
    return (
      <div className="max-w-[1170px] mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl">Blog post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-2"
        >
          <motion.article 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <img 
              src={`/${blogPost.image}`} // إضافة / قبل المسار
              alt={blogPost.title} 
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-2">
                  <FaRegClock className="text-blue-600" />
                  {blogPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaRegEye className="text-blue-600" />
                  {blogPost.views}
                </span>
                <span className="flex items-center gap-2">
                  <FaTags className="text-blue-600" />
                  {blogPost.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                {blogPost.title}
              </h1>

              {/* Content */}
              <div className="prose max-w-none">
                {blogPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t">
                <span className="font-semibold">Share:</span>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* Sidebar */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-8"
        >
          {/* Search */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-2 border rounded-md"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.map(post => {
                // Remove 'public' from the image path if it exists
                const imagePath = post.image.replace('public/', '');
                
                return (
                  <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-4 group">
                    <img 
                      src={imagePath}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {blogCategories.map(category => (
                <li key={category.name} className="flex items-center justify-between">
                  <Link to="#" className="hover:text-blue-600">{category.name}</Link>
                  <span className="text-gray-500">({category.count})</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tags */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <Link
                  key={tag}
                  to="#"
                  className="px-3 py-1 bg-gray-100 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogDetails;
