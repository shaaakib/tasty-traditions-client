import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

export default function Chefs() {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <div>
      <h2>chefData: {chefData.length}</h2>
      <div className="grid md:grid-cols-2  lg:grid-cols-3  lg:px-48 md:px-20 gap-y-20 gap-x-8  justify-center ">
        {chefData.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
}
