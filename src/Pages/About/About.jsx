import React from 'react';

export default function About() {
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1622329915089-ea1c29cee209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                alt="image"
                loading="lazy"
                width=""
                height=""
                className="rounded-lg"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Our mission is to be the smartest and most helpful food platform
                in existence
              </h2>
              <p className="mt-6 text-gray-600">
                We're fulfilling this mission by improving life in the kitchen
                for millions of home cooks around the world.
              </p>
              <p className="mt-4 text-gray-600">
                We are building big data for food
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
