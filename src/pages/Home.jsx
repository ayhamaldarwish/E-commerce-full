/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Hero from "../pages/Hero";
import Category from '../components/Category';
import NewArrivals from '../components/New Arrivals';

function HomePage() {
  return (
    <div className="bg-[#E5EAF4] w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <Hero />
      </motion.div>

      {/* هذا القسم خارج الكونتينر حتى يمتد بكامل عرض الشاشة */}
      <div className="w-full bg-white">
        <Category />
        <NewArrivals />
      </div>
    </div>
  );
}

export default HomePage;