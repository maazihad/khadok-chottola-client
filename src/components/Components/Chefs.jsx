import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from './ChefBanner';
import SingleChef from './SingleChef';

const Chefs = () => {

   const [chefs, setChefs] = useState([]);

   useEffect(() => {
      fetch('https://b7a10-chef-recipe-hunter-server-side-maazihad-maazihad.vercel.app/chefs')
         .then(res => res.json())
         .then(data => setChefs(data))
         .catch(error => console.error(error));
   }, []);

   return (
      <div className="px-4  max-w-7xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24 ">

         <h2 className=" mb-4 shadow-md rounded-full lg:py-6 py-4 lg:text-6xl text-4xl font-bold text-center text-amber-700 bg-purple-100 "> <span className="lg:bg-green-700 lg:shadow-lg lg:shadow-purple-500 lg:rounded-2xl py-2 lg:text-white px-3">Bengali</span> Famous Chefs!!!</h2>
         <div className='grid lg:grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
               chefs.map(chef => <SingleChef
                  key={chef._id}
                  singleChef={chef}
               ></SingleChef>)
            }
         </div>
      </div>
   );
};

export default Chefs;   