import React, { Suspense, lazy } from 'react';
import Loading from '../../Loading/Loading';

const ImageBanner = lazy(() => import('../../Shared/ImageBanner/ImageBanner'));

const Banner = lazy(() => import('../../Shared/Banner/Banner'));
const TopChefs = lazy(() => import('../TopChefs/TopChefs'));
const Chefs = lazy(() => import('../Chefs/Chefs'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="">
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
