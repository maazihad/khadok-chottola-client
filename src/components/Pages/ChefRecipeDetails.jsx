import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import CardsRecipes from './CardsRecipes';
import LoadingSpinner from '../Components/LoadingSpinner';
import LazyLoad from 'react-lazy-load';

const ChefRecipeDetails = () => {

   const cuisines = useLoaderData();
   const { chef_name, chef_picture, years_of_experience, number_of_recipes, likes, details } = cuisines;

   // =============Loading....................
   const navigation = useNavigation();
   if (navigation.state === 'loading') {
      return <LoadingSpinner />;
   }
   return (
      <section className="px-4  max-w-7xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24 mt-5">
         <div className="card w-full bg-base-100 shadow-xl">
            <figure>
               <LazyLoad threshold={0.40} offset={500}>
                  <img src={chef_picture} alt="Shoes" />
               </LazyLoad>
            </figure>
            <div className="card-body pt-3">
               <h2 className="card-title block text-center">{chef_name}</h2>
               <p className='text-gray-700 text-lg text-justify'>{details}</p>
               <div>
                  <p className='text-gray-600'>Years of experience :{years_of_experience}</p>
                  <p className='text-gray-600'>Numbers of recipes : {number_of_recipes}</p>
                  <p className='flex mt-3 text-gray-600 items-center '> <FaThumbsUp className="mr-2" /> : {likes}</p>
               </div>

               <div className="card-actions  justify-end">
                  <Link
                     to='/'
                  >
                     <button className='btn border-0 text-amber-100 bg-amber-900 py-2 px-4 rounded-3xl hover:bg-amber-700 duration-300 font-medium'>
                        <ArrowUturnLeftIcon className="h-5 w-5 text-gray-100 mr-2" />
                        Back to homepage
                     </button>
                  </Link>
               </div>
            </div>
         </div>
         <div>
            <CardsRecipes />
         </div>
      </section>
   );
};

export default ChefRecipeDetails;