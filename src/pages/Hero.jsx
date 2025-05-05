
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <main className="pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:pb-20 xl:pb-1">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            className="mb-4 sm:mb-6 md:mb-0 md:col-span-2 bg-white rounded-xl p-1 flex flex-col md:flex-row items-center md:items-start relative overflow-hidden"
          >
            <SwiperSlide>
              <div className="md:col-span-2 bg-white rounded-xl flex flex-col md:flex-row items-center md:items-start relative overflow-hidden">
                <div className="w-full md:w-1/2 py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-10 flex flex-col justify-center md:pr-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl sm:text-[40px] md:text-[60px] font-bold text-[#2e44c2] leading-none">30%</span>
                    <div className="text-sm sm:text-base md:text-lg font-medium text-[#1a2a4a] leading-tight">
                      <div>Sale</div>
                      <div>Off</div>
                    </div>
                  </div>

                  <h2 className="text-[#0f1f3a] font-bold text-base sm:text-lg md:text-2xl mb-5 lg:text-3xl leading-tight mt-3 sm:mt-4 md:mt-8">
                    True Wireless Noise Cancelling Earbuds
                  </h2>

                  <p className="text-[#7f8697] text-xs sm:text-sm md:text-base mb-3 sm:mb-4 max-w-md">
                    Lorem ipsum dolor sit, consectetur eliz unna succinic.
                    ipsum dolor sit, consectetur eliz unna succinic.
                  </p>

                  {/* Mobile image */}
                  <div className="flex md:hidden justify-center my-3 sm:my-4">
                    <img
                      src="/images/hero00.jpg"
                      alt="Blue wireless noise cancelling headphones"
                      className="w-32 sm:w-40 h-auto object-contain"
                    />
                  </div>

                  <button
                    type="button"
                    className="bg-[#0f1f3a] text-white hover:bg-blue-800 text-xs sm:text-sm font-semibold rounded-md cursor-pointer mt-3 sm:mt-4 md:mt-8 px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3 w-max"
                  >
                    Shop Now
                  </button>
                </div>

                {/* Desktop image */}
                <div className="hidden md:flex md:w-1/2 justify-center md:justify-end relative">
                  <img
                    src="/images/hero00.jpg"
                    alt="Blue wireless noise cancelling headphones"
                    className="w-48 sm:w-64 lg:w-82 h-auto my-6 object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Second slide */}
            <SwiperSlide>
              <div className="md:col-span-2 bg-white rounded-xl flex flex-col md:flex-row items-center md:items-start relative overflow-hidden">
                <div className="w-full md:w-1/2 py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-10 flex flex-col justify-center md:pr-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl sm:text-[40px] md:text-[60px] font-bold text-[#2e44c2] leading-none">25%</span>
                    <div className="text-sm sm:text-base md:text-lg font-medium text-[#1a2a4a] leading-tight">
                      <div>Sale</div>
                      <div>Off</div>
                    </div>
                  </div>

                  <h2 className="text-[#0f1f3a] font-bold text-base sm:text-lg md:text-2xl mb-5 lg:text-3xl leading-tight mt-3 sm:mt-4 md:mt-8">
                    Premium Bluetooth {/* <br className="hidden sm:block" /> */} Earbuds
                  </h2>

                  <p className="text-[#7f8697] text-xs sm:text-sm md:text-base mb-3 sm:mb-4 max-w-md">
                    Lorem ipsum dolor sit, consectetur elit nunc suscipit.
                    ipsum dolor sit, consectetur eliz unna succinic.
                  </p>

                  {/* Mobile image */}
                  <div className="flex md:hidden justify-center my-3 sm:my-4">
                    <img
                      src="/images/hero01.jpg"
                      alt="Premium Bluetooth Earbuds"
                      className="w-32 sm:w-40 h-auto object-contain"
                    />
                  </div>

                  <button
                    type="button"
                    className="bg-[#0f1f3a] text-white hover:bg-blue-800 text-xs sm:text-sm font-semibold rounded-md cursor-pointer mt-3 sm:mt-4 md:mt-8 px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3 w-max"
                  >
                    Shop Now
                  </button>
                </div>

                {/* Desktop image */}
                <div className="hidden md:flex md:w-1/2 justify-center md:justify-end relative">
                  <img
                    src="/images/hero01.jpg"
                    alt="Premium Bluetooth Earbuds"
                    className="w-48 sm:w-64 lg:w-82 h-auto my-6 object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Right Small Promos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-3 sm:p-4 md:p-5 flex items-center justify-between"
            >
              <div className="max-w-[60%]">
                <h3 className="text-[#0f1f3a] font-bold text-sm sm:text-lg md:text-xl leading-snug mb-4 sm:mb-6 md:mb-12">
                  iPhone 14 Plus & <br /> 14 Pro Max
                </h3>
                <p className="text-[#7f8697] text-xs font-medium mb-1">limited time offer</p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#e02b1d] font-bold text-sm sm:text-base md:text-lg">$699</span>
                  <span className="text-[#7f8697] line-through text-xs">$999</span>
                </div>
              </div>
              <img
                src="/images/hero03.jpg"
                alt="iPhone 14 Plus and 14 Pro Max"
                className="w-16 sm:w-20 md:w-24 lg:w-37 h-auto object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-3 sm:p-4 md:p-5 flex items-center justify-between"
            >
              <div className="max-w-[60%]">
                <h3 className="text-[#0f1f3a] font-bold text-sm sm:text-lg md:text-xl leading-snug mb-4 sm:mb-6 md:mb-12">
                  Wireless <br /> Headphone
                </h3>
                <p className="text-[#7f8697] text-xs font-medium mb-1">limited time offer</p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#e02b1d] font-bold text-sm sm:text-base md:text-lg">$699</span>
                  <span className="text-[#7f8697] line-through text-xs">$999</span>
                </div>
              </div>
              <img
                src="/images/hero00.jpg"
                alt="Wireless headphones front view"
                className="w-16 sm:w-20 md:w-24 lg:w-37 h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-6 sm:mt-8 md:mt-12 rounded-xl p-2 sm:p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-[#0f1f3a]">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-3"
            >
              <img src="/images/icon-01.svg" alt="Free Shipping" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <div className="font-medium text-sm sm:text-base md:text-lg text-dark">Free Shipping</div>
                <div className="text-[#7f8697] text-xs sm:text-sm">For all orders $200</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-3"
            >
              <img src="/images/icon-02.svg" alt="Returns" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <div className="font-medium text-sm sm:text-base md:text-lg text-dark">1 & 1 Returns</div>
                <div className="text-[#7f8697] text-xs sm:text-sm">Cancellation after 1 day</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-3"
            >
              <img src="/images/icon-03.svg" alt="Secure Payments" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <div className="font-medium text-sm sm:text-base md:text-lg text-dark">100% Secure Payments</div>
                <div className="text-[#7f8697] text-xs sm:text-sm">Guarantee secure payments</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-3"
            >
              <img src="/images/icon-04.svg" alt="24/7 Support" className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <div className="font-medium text-sm sm:text-base md:text-lg text-dark">24/7 Dedicated Support</div>
                <div className="text-[#7f8697] text-xs sm:text-sm">Anywhere & anytime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;


