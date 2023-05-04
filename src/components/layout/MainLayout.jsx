import React from 'react';
import Navbar from '../Common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import { Toaster } from 'react-hot-toast';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFfile from '../Components/PDFfile';



const MainLayout = () => {
   return (
      <div className="">


         <Navbar />
         <Outlet />
         <Footer />
         <Toaster />

         {/* <PDFDownloadLink document={<PDFfile />} fileName="FORM">
            {
               ({ loading }) => (
                  loading
                     ? <button>Loading Document .... </button>
                     : <button>Download</button>
               )
            }
         </PDFDownloadLink> */}
      </div>
   );
};

export default MainLayout;