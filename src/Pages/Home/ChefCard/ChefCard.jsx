import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaThumbsUp } from 'react-icons/fa';
export default function ChefCard({ chef }) {
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
