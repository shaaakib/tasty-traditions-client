import React from 'react';

export default function TopChefs() {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Senior Chef Category</h1>
        <p className="text-[18px] mt-5 mb-5">
          A person, who is trained in all aspects of food <br />
          preparation, often having expertise in particular cooking or <br />{' '}
          cuisine type, is known as a chef.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="#f3c06b"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="#f3c06b"
            ></rect>
          </svg>
          <div className="relative flex items-center justify-center px-10 pt-10">
            <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
            <img
              src="https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india1.jpg"
              alt=""
            />
          </div>
          <div className="relative px-6 pb-6 mt-6 text-white">
            <span className="block -mb-1 opacity-75">Senior Chef</span>
            <div className="flex justify-between">
              <span className="block text-xl font-semibold">
                Sanjeev Kapoor
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-blue-500 rounded-lg shadow-lg sm:mb-0">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="#6da3fb"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="#6da3fb"
            ></rect>
          </svg>
          <div className="relative flex items-center justify-center px-10 pt-10">
            <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
            <img
              className="relative w-40"
              src="https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india6.jpg"
              alt="shopping"
            />
          </div>
          <div className="relative px-6 pb-6 mt-6 text-white">
            <span className="block -mb-1 opacity-75">Senior Chef</span>
            <div className="flex justify-between">
              <span className="block text-xl font-semibold">Hari Nayak</span>
            </div>
          </div>
        </div>
        <div className="relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="#a17cf3"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="#a17cf3"
            ></rect>
          </svg>
          <div className="relative flex items-center justify-center px-10 pt-10">
            <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
            <img
              className="relative w-40"
              src="https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india9.jpg"
              alt="shopping"
            />
          </div>
          <div className="relative px-6 pb-6 mt-6 text-white">
            <span className="block -mb-1 opacity-75">Senior Chef</span>
            <div className="flex justify-between">
              <span className="block text-xl font-semibold">Saransh Goila</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
