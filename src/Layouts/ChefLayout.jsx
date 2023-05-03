import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Main() {
  return (
    <div>
      <Header />

      <div className="">
        <Outlet />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}
