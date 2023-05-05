import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../Pages/Loading/Loading';
import { lazy } from 'react';
const Header = lazy(() => import('../Pages/Shared/Header/Header'));
const Footer = lazy(() => import('../Pages/Shared/Footer/Footer'));

export default function Main() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100">
        <Header />

        <div className="md:min-h-[calc(100vh-341px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}
