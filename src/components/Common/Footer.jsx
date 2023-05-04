import React from 'react';
import userLogo from "../../assets/logo/logo-text.png";
import treadLogo from "../../assets/logo/logo.png";

const Footer = () => {
   return (
      <footer className="bg-gray-200 uniqueH pt-7 ">
         <div className='grid text-center lg:grid-cols-2 py-4 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='columns-1'>
               <img className='lg:w-72 w-48 mx-auto mb-5 mt-10' src={userLogo} alt="" />
               <button className='border-2 hover:none border-amber-700 py-3 px-10 mb-3'>Send Letter favorite</button>
            </div>
            <div className=' grid lg:grid-cols-3 columns-3 text-amber-800 '>
               <ul>
                  <li>DINNERS</li>
                  <li>MEALS</li>
                  <li>INGREDIENTS</li>
                  <li>OCCASIONS</li>
                  <li>CUISINES</li>
                  <li>KITCHEN TIPS</li>
                  <li>NEWS</li>
                  <li>FEATURES</li>
               </ul>
               <ul>
                  <li>About Us</li>
                  <li> Editorial Process</li>
                  <li>Anti-Racism Pledge</li>
                  <li>Privacy Policy</li>
                  <li>Product Vetting</li>

               </ul>
               <ul>
                  <li>Advertise</li>
                  <li>Careers</li>
                  <li> Contact</li>
               </ul>
            </div>
         </div>
         <div className="container px-4 flex items-center justify-center py-10">
            <img className='w-8 mr-3' src={treadLogo} alt="Logo" />
            <p className="text-center text-amber-900">
               All rights reserved &copy; || 2023|| Khadok Chottola.
            </p>
         </div>
      </footer>
   );
};

export default Footer;