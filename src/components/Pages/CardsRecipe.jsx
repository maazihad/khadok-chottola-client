import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Rating } from '@smastrom/react-rating';
import { toast } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
const CardsRecipe = () => {

   const [isFavorite, setIsFavorite] = useState(false);

   const recipes = useLoaderData();
   const { recipe_info } = recipes;

   const handleClick = () => {
      setIsFavorite(true);
      toast('Recipe is added to favorites!');
   };

   useEffect(() => {

   }, []);
   return (
      <section>
         <h2 className="text-center text-4xl text-amber-900 mt-10">Recipes</h2>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-1 my-5">
            {
               recipe_info.map(
                  (singleRecipe, index) => <div
                     key={index}
                  >
                     <div className="card rounded-none card-compact w-full min-h-[500px] bg-base-100 shadow-xl">
                        <figure>
                           <LazyLoad threshold={.88} offset={300}>
                              <img className='w-96 h-64' src={singleRecipe?.recipe_img} />
                           </LazyLoad>
                        </figure>
                        <div className="card-body">
                           <h2 className="card-title text-amber-800">{singleRecipe?.recipe_name}</h2>
                           <p className='text-md'>cooking method : {singleRecipe.cooking_method.slice(0, 300)} ...
                           </p>
                           <div>
                              <h4 className='text-lg font-bold text-amber-800'>Ingredients : </h4>
                              {
                                 singleRecipe.ingredients.slice(0, 7).map((ing, indx) => <ul
                                    key={indx}
                                 >
                                    <li>{ing}</li>
                                 </ul>)
                              }
                           </div>


                           <div className="flex items-center m-0 p-0 bg-amber-300">
                              <div className='flex text-lg align-items-center grow'>
                                 <Rating
                                    style={{ maxWidth: 100 }}
                                    value={Math.round(singleRecipe?.rating || 0)}
                                    readOnly
                                 />
                                 <span className='ms-2'>
                                    Rating : {
                                       singleRecipe?.rating
                                    }
                                 </span>
                              </div>
                              <div className='flex justify-end m-5'>
                                 <button
                                    onClick={handleClick}
                                    disabled={isFavorite}
                                 >
                                    {isFavorite
                                       ? <MdFavorite className='text-2xl text-red-900' />
                                       : <MdFavoriteBorder className='text-2xl text-red-700 ' />}
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               )

            }

         </div>

      </section>
   );
};

export default CardsRecipe;




{/* <div className='flex justify-end m-5'>
   <button
      onClick={handleClick}
      disabled={isFavorite}
   >
      {isFavorite
         ? <MdFavorite className='text-2xl text-red-900' />
         : <MdFavoriteBorder className='text-2xl text-red-700 ' />}
   </button>
</div>; */}