import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChefLayout() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100">
      <Header />

      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}
