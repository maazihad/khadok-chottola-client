import React from 'react';
import Navbar from '../Common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import { Toaster } from 'react-hot-toast';

const RecipesLayout = () => {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
         <Toaster />
      </>
   );
};

export default RecipesLayout;