import React from 'react';
import LazyLoad from 'react-lazy-load';

const Chef = () => {

   return (
      <section className="max-w-7xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24 my-container  min-h-[calc(100vh-80px)] my-10">
         <h2 className='uniqueH shadow-md rounded-lg shadow-amber-700 py-5 bg-amber-100 text-5xl text-center font-bold text-amber-700 leading-[4rem]'>Embark on a culinary journey with our <br /> Bengali cuisine specialists.</h2>
         <figure className='mt-3'>
            <LazyLoad threshold={1} offset={255}>
               <img className='w-full' src={`https://d1oh9y2nmj4y5b.cloudfront.net/uploads/photo/filename/574/7_Nahid_foodResizedForWeb.jpg`} alt="" />
            </LazyLoad>
            <figcaption className='text-center'>This is famous Cuisine <b>Nahid Osman</b> </figcaption>
         </figure>
      </section>
   );
};

export default Chef;