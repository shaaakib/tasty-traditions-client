import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full h-full mb-6 shadow-lg rounded-xl ">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                <img
                  src={picture}
                  class="shadow-xl  rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div class="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {yearsOfExperience}
                  </span>
                  <span class="text-sm text-slate-400">Year Exerience</span>
                </div>
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {numberOfRecipes}
                  </span>
                  <span class="text-sm text-slate-400">Recipes</span>
                </div>

                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {likes}
                  </span>
                  <span class="text-sm text-slate-400">Likes</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {name}
            </h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {place}
            </div>
          </div>
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4">
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
              <button
                href="javascript:;"
                class="font-normal py-2 px-3 mt-5 rounded-lg text-white bg-gray-600"
              >
                <Link to={`/chefdetails/${id}`}>View More Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
