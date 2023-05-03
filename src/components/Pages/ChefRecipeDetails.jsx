import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipeDetails = () => {


   const recipes = useLoaderData();
   const { _id, chef_name, chef_thumb, chef_picture, years_of_experience, number_of_recipes, likes, details } = recipes;
   console.log(recipes);
   return (
      <section className="px-4  max-w-7xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24">
         <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Shoes" /></figure>
            <div className="card-body">
               <h2 className="card-title">{chef_name}</h2>
               <p>{details}</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ChefRecipeDetails;