import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

export default function Chefs() {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch(
      `https://tasty-traditions-server-shakibhossainmuhammad.vercel.app/chef`
    )
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold mb-3">Special Chef Menu</h2>
        <p className="text-3xl">
          Browse our traditional menus or let us create something new for you.
        </p>
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-2  xl:grid-cols-3 lg:px-48 md:px-20 gap-y-20 gap-x-8  justify-center ">
        {chef.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
}
