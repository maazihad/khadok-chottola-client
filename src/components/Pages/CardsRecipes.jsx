import React from 'react';
import { useLoaderData } from 'react-router-dom';;
import SingleRecipe from '../Components/SingleRecipe';

const CardsRecipe = () => {
   const recipes = useLoaderData();
   const { recipe_info } = recipes;
   return (
      <section>
         <h2 className="text-center text-4xl text-amber-900 mt-10">Recipes</h2>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 my-5">
            {
               recipe_info.map((singleRecipe, index) => <SingleRecipe
                  key={index}
                  singleRecipe={singleRecipe}
               >
               </SingleRecipe>)
            }
         </div>
      </section>
   );
};

export default CardsRecipe;