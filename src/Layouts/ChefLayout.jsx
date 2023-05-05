import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Pages/Loading/Loading';
import { Suspense } from 'react';
const Footer = lazy(() => import('../Pages/Shared/Footer/Footer'));
const Header = lazy(() => import('../Pages/Shared/Header/Header'));
export default function ChefLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="">
        <Header />

        <div className="md:min-h-[calc(100vh-30px)]">
          <Outlet />
          <ToastContainer />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}
