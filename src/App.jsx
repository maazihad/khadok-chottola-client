import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default App;