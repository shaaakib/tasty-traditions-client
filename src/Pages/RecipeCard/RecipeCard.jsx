import React, { useState } from 'react';

export default function RecipeCard({ recipe }) {
  const [fold, setFold] = useState(true);
  const { name, image, ingredients, cookingMethod, rating, favorite } = recipe;
  console.log(recipe);

  return (
    <div>
      <div className="flex  items-center container mx-auto dark:bg-gray-900 py-2 px-6  justify-center ">
        <div className="h-full w-96 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <div>
              <img src={image} alt="" />
            </div>
            <h4 className="text-gray-800 text-3xl mt-3 dark:text-gray-100 font-bold mb-3">
              {name}
            </h4>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              <p className="text-xl font-serif ">Ingredient:</p>
              <ul className="text-[18px] font-medium mt-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </p>
            <div class="w-full px-4 mt-2">
              <p className="text-xl font-serif mb-1 ">Cooking Method:</p>
              {fold ? (
                <>
                  <span className=" text-gray-600">
                    {cookingMethod.substring(0, 100)}.....
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
                  <span className=" text-gray-900">{cookingMethod}.....</span>
                  <span
                    className="cursor-pointer text-blue-600 "
                    onClick={() => setFold(!fold)}
                  >
                    Read Less
                  </span>
                </>
              )}
            </div>
            {/* <p>{cookingMethod}</p> */}
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p>Rating: {rating}</p>
              <div>
                <p>Favorite: {favorite ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-red-500">
    //   <div className="recipe-card">
    //     <h2>{name}</h2>
    //     <ul>
    //       {ingredients.map((ingredient, index) => (
    //         <li key={index}>{ingredient}</li>
    //       ))}
    //     </ul>
    //     <p>{cookingMethod}</p>
    //     <p>Rating: {rating}</p>
    //     <p>Favorite: {favorite ? 'Yes' : 'No'}</p>
    //   </div>
    // </div>
  );
}
