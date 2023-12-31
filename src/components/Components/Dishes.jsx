import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';

const Dishes = () => {

   const [dishes, setDishes] = useState([]);

   useEffect(() => {
      fetch('https://b7a10-chef-recipe-hunter-server-side-maazihad-maazihad.vercel.app/dishes')
         .then(res => res.json())
         .then(data => setDishes(data))
         .catch(error => console.error(error));
   }, []);

   return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3">
         {
            dishes.map(dish => <div
               key={dish.id}
            >
               <div className='rounded-0 shadow-xl'>
                  <LazyLoad threshold={1} offset={255}>
                     <img className='w-full lg:h-48 md:h-48 ' src={dish.dish_img} />
                  </LazyLoad>
               </div>
               <p className="mt-2 mb-4 text-center font-bold text-amber-900">{dish.dish_name}</p>
            </div>)
         }
      </div>
   );
};

export default Dishes;