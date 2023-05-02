import React from 'react';
import Chefs from '../Chefs/Chefs';
import TopChefs from '../TopChefs/TopChefs';
import Reviews from '../Reviews/Reviews';

export default function Home() {
  return (
    <div>
      <div className="mb-20">
        <TopChefs />
      </div>
      <div>
        <Chefs />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
}
