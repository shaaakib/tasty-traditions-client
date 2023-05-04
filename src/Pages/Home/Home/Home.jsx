import React from 'react';
import Chefs from '../Chefs/Chefs';
import TopChefs from '../TopChefs/TopChefs';
import Reviews from '../Reviews/Reviews';
import Banner from '../../Shared/Banner/Banner';
import ImageBanner from '../../Shared/ImageBanner/imageBanner';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100">
      <ImageBanner />
      <Banner />
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
