import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from './ChefBanner';
import SingleChef from './SingleChef';


const Chefs = () => {

   const [chefs, setChefs] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/chefs')
         .then(res => res.json())
         .then(data => setChefs(data))
         .catch(error => console.error(error));
   }, []);

   return (

      <div className="px-4  max-w-7xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24  min-h-[calc(100vh-80px)]">

         <h2 className="bg-white mb-4  shadow-md rounded-full py-5 text-6xl font-bold text-center text-amber-700">Bengali Famous Chefs!!!</h2>
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