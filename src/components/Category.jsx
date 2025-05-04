/* eslint-disable no-unused-vars */
import { FaTags, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { categories } from "../data/products";

const Category = () => {

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-[#1B2A4D] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between mb-1"
      >
        <div className="flex items-center space-x-2">
          <FaTags className="text-[#004cff] text-[20px]" />
          <span className="text-2xl">Categories</span>
        </div>
        <div className="flex space-x-2">
          <button
            className="w-9 h-9 border border-gray-300 rounded-md flex items-center justify-center text-[#1B2A4D] hover:bg-blue-700 hover:text-white"
          >
            <FaChevronLeft />
          </button>
          <button
            className="w-9 h-9 border border-gray-300 rounded-md flex items-center justify-center text-[#1B2A4D] hover:bg-blue-700 hover:text-white"
          >
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[#1B2A4D] font-medium text-[36px] leading-[28px] mb-8 select-none"
      >
        Browse by Category
      </motion.h2>

      <div className="overflow-hidden">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-nowrap gap-x-16.5 ml-4.5 transition-transform duration-300"
        >
          {categories.map((category, idx) => (
            <motion.li
              key={idx}
              className="group flex-shrink-0 w-28 flex flex-col items-center space-y-3 cursor-pointer select-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.5, duration: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-35 h-35 rounded-full bg-[#F5F7FA] flex items-center justify-center"
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className={`${category.size} object-contain`}
                />
              </motion.div>
              <span className="relative text-[14px] font-semibold text-[#1B2A4D] group-hover:text-blue-700 transition-colors duration-300">
                {category.name}
                <motion.span 
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <hr className="border-t border-gray-200 mt-15" />
      </div>
    </motion.section>
  );
}

export default Category;