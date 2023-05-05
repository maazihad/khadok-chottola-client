/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import LazyLoad from 'react-lazy-load';

const SingleRecipe = ({ singleRecipe }) => {
   const [isFavorite, setIsFavorite] = useState(false);
   const { recipe_img, recipe_name, cooking_method, ingredients, rating } = singleRecipe;

   const handleClick = () => {
      setIsFavorite(true);
      toast('Recipe is added to favorites!');
   };
   // console.log(singleRecipe);
   return (
      <div className="card mt-3 rounded-none card-compact w-full min-h-[500px] bg-base-100 shadow-xl">
         <figure>
            <LazyLoad threshold={.88} offset={300}>
               <img className='w-96 h-64' src={recipe_img} />
            </LazyLoad>
         </figure>
         <div className="card-body">
            <h2 className="card-title text-amber-800">{recipe_name}</h2>
            <p className='text-lg'>cooking method : {cooking_method.slice(0, 300)} ...
            </p>
            <div>
               <h4 className='text-lg font-bold text-amber-800'>Ingredients : </h4>
               <span className='text-lg'>
                  {ingredients.slice(0, 7).map((ing, indx) => <ul
                     key={indx}
                  >
                     <li>{ing}</li>
                  </ul>)}
               </span>
            </div>

            <div className="flex items-center m-0 p-0 ">
               <div className=" flex grow items-center">
                  <div className="rating rating-sm rating-half">
                     <input type="radio" name={Math.round(rating)} className="rating-hidden" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-1" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-2" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-1" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-2" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-1" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-2" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-1" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-2" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-1" />
                     <input type="radio" name={Math.round(rating)} className="bg-green-500 mask mask-star-2 mask-half-2" />
                  </div>
                  <span className='ms-2 font-bold'>
                     {rating}
                  </span>
               </div>

               <div className='flex justify-end m-5'>
                  <button onClick={handleClick} disabled={isFavorite} >
                     {isFavorite
                        ? <MdFavorite className='text-2xl text-red-900' />
                        : <MdFavoriteBorder className='text-2xl text-red-700 ' />}
                  </button>
               </div>
            </div>
         </div>

      </div>

   );
};

export default SingleRecipe;