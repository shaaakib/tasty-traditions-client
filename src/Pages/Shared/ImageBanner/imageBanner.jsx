import React from 'react';
// import backgroundImg from '../../../assets/img-3.jpg';

export default function ImageBanner() {
  return (
    <div>
      <header>
        <div
          className="w-full mb-20  bg-cover bg-center"
          style={{
            height: '40rem',
            backgroundImage: `url(https://img.freepik.com/free-vector/different-foods-set-white-background_1308-104236.jpg?w=1380&t=st=1683166629~exp=1683167229~hmac=c2cb08d3c2120a01a02eec44b33bef2ea975daf4b326f994052b3fbbdcdb3bca)`,
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                Cook Anything With{' '}
                <span className="underline text-blue-400">The Expert</span>
              </h1>
              <p className="mt-4   text-white text-sm uppercase font-medium rounded  focus:outline-none focus:bg-blue-500">
                Get ready to virtually join Chef Vindes Lee for an unforgettable
                authentic tapas experience
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
