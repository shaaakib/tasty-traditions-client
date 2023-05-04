import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
      <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div className="flex flex-col md:flex-row items-strech justify-between bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
          <div className="flex flex-col justify-center md:w-1/2 ">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              Special Food Every Time For You and The Fastest Delivery in Your
              City
            </h1>
            <p className="text-base lg:text-xl text-gray-800 mt-2">
              Be the fastest in delivering your healthy food and with us order
              your best food anytime and anywhere
            </p>
            <div className="flex gap-3 mt-3">
              <button className="py-2 px-3 text-white text-xl font-serif rounded-lg bg-gray-700">
                Get started
              </button>
              <button className="py-2 px-3 text-gray-800 text-xl font-serif rounded-lg bg-white">
                Order process
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              className="w-96 md:h-80 xl:h-full"
              src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&uid=R101371339&ga=GA1.2.705039982.1683036399&semt=robertav1_2_sidr"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-5/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12  py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
          <div className="flex justify-end  md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?size=626&ext=jpg&uid=R101371339&ga=GA1.2.705039982.1683036399&semt=robertav1_2_sidr"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
