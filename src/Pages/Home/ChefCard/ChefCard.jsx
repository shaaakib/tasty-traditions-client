import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
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
  } = chef;
  return (
    <div>
      <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 w-full h-full mb-6 shadow-lg rounded-xl ">
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
                  <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
