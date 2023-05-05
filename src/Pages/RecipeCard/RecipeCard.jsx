import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function RecipeCard({ recipe }) {
  const [disabled, setDisabled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, image, ingredients, cookingMethod, rating } = recipe;

  const notify = () => toast('Added to favorite');

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    setDisabled(true);
    notify();
  };

  return (
    <div>
      <Link
        href="#"
        class="group relative block bg-black h-[25rem] lg:h-[28rem] "
      >
        <img
          alt="Developer"
          src={image}
          class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div class="relative p-4 sm:p-6 lg:p-8">
          <p class="text-xl font-bold text-white sm:text-2xl">{name}</p>

          <div class="mt-20 sm:mt-14 lg:mt-24">
            <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-white dark:text-gray-100 text-sm mb-3">
                <p className="text-xl font-serif ">Ingredient:</p>
                <ul className="text-[18px] font-medium mt-2 list-disc pl-5">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </p>
              <p class="text-sm text-white">{cookingMethod}</p>

              <div className="flex mt-5 items-center justify-between text-gray-800">
                <div className="flex gap-2 items-center">
                  <Rating style={{ maxWidth: 130 }} value={4.5} readOnly />{' '}
                  <span className="text-white"> {rating}</span>
                </div>

                <div>
                  <button
                    className="bg-gray-500 py-2 px-3 rounded-lg text-white"
                    disabled={disabled}
                    onClick={handleClick}
                  >
                    {isFavorite ? (
                      <FaHeart className="text-red-500 w-6 h-6" />
                    ) : (
                      <FaRegHeart className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
