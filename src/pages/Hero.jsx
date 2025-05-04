import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <main className="pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:pb-20 xl:pb-1">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">

        {/* Main Promo Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            className="mb-10 md:mb-0 md:col-span-2 bg-white rounded-xl p-1 flex flex-col md:flex-row items-center md:items-start relative overflow-hidden"
          >
            <SwiperSlide>
              <div className="md:col-span-2 bg-white rounded-xl flex flex-col md:flex-row items-center md:items-start relative overflow-hidden">
                <div className="md:w-1/2 my-8 mx-10 flex flex-col justify-center  md:pr-6">
                  <div className="flex items-center space-x-2 mt-5 md:mt-0">
                    <span className="text-[60px] font-bold text-[#2e44c2] leading-none">30%</span>
                    <div className="text-lg font-medium text-[#1a2a4a] leading-tight">
                      <div>Sale</div>
                      <div>Off</div>
                    </div>
                  </div>

                  <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-tight mt-8">
                    True Wireless Noise <br /> Cancelling Headphone
                  </h2>

                  <p className="text-[#7f8697] text-sm sm:text-base mb-4 max-w-md">
                    Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum nec suscipit.
                  </p>
                  <button
                    type="button"
                    className="bg-[#0f1f3a] text-white hover:bg-blue-800 text-sm font-semibold rounded-md cursor-pointer mt-8 px-7 py-3 w-max"
                  >
                    Shop Now
                  </button>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center md:justify-end relative">
                  <img
                  src="public\images\hero-01.jpg"
                  alt="Blue wireless noise cancelling headphones"
                  className="w-82 h-auto my-6 object-contain"
                  width={320}
                  height={320}
                  />
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="md:col-span-2 bg-white rounded-xl p-1 flex flex-col md:flex-row items-center md:items-start relative overflow-hidden">
                <div className="md:w-1/2 my-7 mx-10 flex flex-col justify-center md:pr-6">
                  <div className="flex items-center space-x-2 mt-5 md:mt-0">
                    <span className="text-[60px] font-bold text-[#2e44c2] leading-none">30%</span>
                    <div className="text-lg font-medium text-[#1a2a4a] leading-tight">
                      <div>Sale</div>
                      <div>Off</div>
                    </div>
                  </div>

                  <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-tight mt-8">
                    True Wireless Noise <br /> Cancelling Headphone
                  </h2>

                  <p className="text-[#7f8697] text-sm sm:text-base mb-4 max-w-md">
                    Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum nec suscipit.
                  </p>
                  <button
                    type="button"
                    className="bg-[#0f1f3a] text-white hover:bg-blue-800 text-sm font-semibold rounded-md cursor-pointer mt-8 px-7 py-3 w-max"
                  >
                    Shop Now
                  </button>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center md:justify-end relative">
                  <img
                  src="public\images\hero-01.jpg"
                  alt="Blue wireless noise cancelling headphones"
                  className="w-82 h-auto my-6 object-contain"
                  width={320}
                  height={320}
                  />
                </div>

              </div>
            </SwiperSlide>
          </Swiper>


          {/* Right Small Promos */}
          <div className="space-y-4">
            {/* First small card */}
            <div className="bg-white rounded-xl p-5.5 flex items-center justify-between">
              <div className="max-w-[60%]">
                <h3 className="text-[#0f1f3a] font-bold text-xl leading-snug mb-12">
                  iPhone 14 Plus & <br /> 14 Pro Max
                </h3>
                <p className="text-[#7f8697] text-[14px] font-medium mb-1">limited time offer</p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#e02b1d] font-bold text-lg">$699</span>
                  <span className="text-[#7f8697] line-through text-sm">$999</span>
                </div>
              </div>
              <img
                  src="public\images\hero-02.jpg"
                  alt="iPhone 14 Plus and 14 Pro Max"
                  className="w-30 h-auto object-contain"
                  width={80}
                  height={100}
              />
            </div>

            {/* Second small card */}
            <div className="bg-white rounded-xl p-5.5 flex items-center justify-between">
              <div className="max-w-[60%]">
                <h3 className="text-[#0f1f3a] font-bold text-xl leading-snug mb-12">
                  Wireless <br /> Headphone
                </h3>
                <p className="text-[#7f8697] text-[14px] font-medium mb-1">limited time offer</p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#e02b1d] font-bold text-lg">$699</span>
                  <span className="text-[#7f8697] line-through text-sm">$999</span>
                </div>
              </div>
              <img
                  src="public\images\hero-01.jpg"
                  alt="Wireless headphones front view"
                  className="w-30 h-auto object-contain"
                  width={80}
                  height={100}
              />
            </div>
          </div>

        </div>

        {/* Features Section */}
        <div className=" rounded-xl p-3 flex flex-col sm:flex-row justify-between text-[#0f1f3a] text-sm sm:text-base">
          {/* Feature 1 */}
          <div className="flex items-center gap-3 sm:mb-0 sm:w-1/4">
            <img src="src\assets\icon-01.svg" alt="" />
            <div>
              <div className="font-medium text-xl text-dark">Free Shipping</div>
              <div className="text-[#7f8697] text-xs sm:text-sm">For all orders $200</div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3 sm:mb-0 sm:w-1/4">
            <img src="src\assets\icon-02.svg" alt="" />
            <div>
              <div className="font-medium text-xl text-dark">1 & 1 Returns</div>
              <div className="text-[#7f8697] text-xs sm:text-sm">Cancellation after 1 day</div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3 sm:mb-0 sm:w-1/4">
            <img src="src\assets\icon-03.svg" alt="" />
            <div>
              <div className="font-medium text-xl text-dark">100% Secure Payments</div>
              <div className="text-[#7f8697] text-xs sm:text-sm">Guarantee secure payments</div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-3 sm:w-1/4">
            <img src="src\assets\icon-04.svg" alt="" />
            <div>
              <div className="font-medium text-xl text-dark">24/7 Dedicated Support</div>
              <div className="text-[#7f8697] text-xs sm:text-sm">Anywhere & anytime</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Hero;





