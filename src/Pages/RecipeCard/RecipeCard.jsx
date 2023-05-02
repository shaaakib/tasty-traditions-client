import React from 'react';

export default function RecipeCard({ recipe }) {
  const { name, ingredients, cookingMethod, rating, favorite } = recipe;
  console.log(recipe);

  return (
    <div></div>
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
