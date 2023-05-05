import React from 'react';
import LazyLoad from 'react-lazy-load';
export default function ImageBanner() {
  return (
    <div>
      <LazyLoad>
        <section className="relative bg-[url(https://images.pexels.com/photos/9661073/pexels-photo-9661073.jpeg)] bg-cover bg-center bg-no-repeat ">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-5xl font-extrabold sm:text-6xl">
                Cook Anything With The Expert
                <span className="block font-extrabold text-rose-700"></span>
              </h1>

              <p className="mt-4 text-gray-950 max-w-lg sm:text-2xl/relaxed">
                Get ready to virtually join Chef Tasty Traditions for an
                unforgettable authentic tapas experience
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <button className="py-4 px-3 text-white text-2xl font-serif rounded-lg bg-gray-700">
                  Get started
                </button>

                <button className="py-3 px-3 text-gray-800 text-2xl font-serif rounded-lg bg-white">
                  Order process
                </button>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
    </div>
  );
}
