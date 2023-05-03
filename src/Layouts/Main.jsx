import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Banner from '../Pages/Shared/Banner/Banner';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
