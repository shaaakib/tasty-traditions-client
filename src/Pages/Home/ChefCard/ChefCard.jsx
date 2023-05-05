import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaThumbsUp } from 'react-icons/fa';
export default function ChefCard({ chef }) {
  const [fold, setFold] = useState(true);
  const {
    id,
    picture,
    name,
    place,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    bio,
    viewRecipes,
  } = chef;
  return (
    <div>
      {/* <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 w-full h-full mb-6 shadow-lg rounded-xl ">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={picture}
                  className="shadow-xl  rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-2xl font-bold block uppercase tracking-wide text-slate-700">
                    {yearsOfExperience}
                  </span>
                  <span className="text-xl font-serif text-slate-400">
                    Year Exerience
                  </span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-2xl font-bold block uppercase tracking-wide text-slate-700">
                    {numberOfRecipes}
                  </span>
                  <span className="text-xl font-serif text-slate-400">
                    Recipes
                  </span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-2xl font-bold block uppercase tracking-wide text-slate-700">
                    {likes}K
                  </span>
                  <span className="text-xl font-serif text-slate-400">
                    <FaThumbsUp className="w-10 h-6" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {name}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {place}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                {fold ? (
                  <>
                    <span className=" text-gray-500">
                      {bio.substring(0, 100)}.....
                    </span>
                    <span
                      className="cursor-pointer text-blue-600 "
                      onClick={() => setFold(!fold)}
                    >
                      Read More
                    </span>
                  </>
                ) : (
                  <>
                    <span className=" text-gray-900">{bio}.....</span>
                    <span
                      className="cursor-pointer text-blue-600 "
                      onClick={() => setFold(!fold)}
                    >
                      Read Less
                    </span>
                  </>
                )}
              </div>
              <Link to={`/chefdetails/${id}`}>
                <button className="group rounded-2xl h-12 w-48 bg-orange-500 font-bold text-lg text-white relative overflow-hidden mt-5">
                  View More Details
                  <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <Link to="/" className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <img className="w-44 rounded-full" src={picture} alt="" />
            <h2 className="mt-4 text-2xl font-serif sm:text-4xl">{name}</h2>

            <div className="flex items-center gap-4">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">{place}</h2>
              <h2 className="mt-4 flex items-center gap-x-3 ms-6 text-2xl font-semibold sm:text-2xl">
                {' '}
                <FaEye className="w-8 h-8" /> {viewRecipes}k
              </h2>
              <h2 className="mt-4 flex items-center gap-x-3 ms-6 text-2xl font-semibold sm:text-2xl">
                {' '}
                <FaThumbsUp className="w-10 h-10 py-2 px-2 rounded-full bg-blue-400 text-white" />
                {likes}
              </h2>
            </div>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-3xl">
              Years Experience: {yearsOfExperience} years
            </h3>
            <h3 className="mt-4 text-xl font-medium sm:text-3xl">
              Recipes: {numberOfRecipes}
            </h3>

            <p className="mt-4 text-sm sm:text-xl"> {bio.substring(0, 200)}</p>

            <Link to={`/chefdetails/${id}`}>
              <button className="mt-8 font-bold">View Recipe</button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
