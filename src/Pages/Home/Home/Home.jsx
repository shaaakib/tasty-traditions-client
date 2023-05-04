import React, { Suspense, lazy } from 'react';
// import Chefs from '../Chefs/Chefs';
// import TopChefs from '../TopChefs/TopChefs';
// import Reviews from '../Reviews/Reviews';
// import Banner from '../../Shared/Banner/Banner';
// import ImageBanner from '../../Shared/ImageBanner/ImageBanner';
import Loading from '../../Loading/Loading';

const ImageBanner = lazy(() => import('../../Shared/ImageBanner/ImageBanner'));

const Banner = lazy(() => import('../../Shared/Banner/Banner'));
const TopChefs = lazy(() => import('../TopChefs/TopChefs'));
const Chefs = lazy(() => import('../Chefs/Chefs'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100">
        <ImageBanner />
        <Banner />
        <div className="mb-20">
          <TopChefs />
        </div>
        <Chefs />
        <Reviews />
      </div>
    </Suspense>
  );
}
