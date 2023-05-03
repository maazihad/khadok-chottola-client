import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleChef = ({ singleChef }) => {

   const { _id, chef_name, chef_thumb, years_of_experience, number_of_recipes, likes } = singleChef;


   return (
      <div className="">
         <div className=" card w-full bg-base-100 shadow-xl lg:grid">
            <figure><img className="w-96 h-96" src={chef_thumb} alt="Shoes" /></figure>
            <div className="card-body pt-3 ">
               <h2 className="card-title text-center text-amber-800">{chef_name}</h2>
               <div className="flex justify-between ">
                  <div>
                     <p className='text-amber-900'>Years of experience :{years_of_experience}</p>
                     <p className='text-amber-900'>Numbers of recipes : {number_of_recipes}</p>
                     <p className='flex mt-3 text-amber-900 items-center '> <FaThumbsUp className="mr-2" /> : {likes}</p>
                  </div>
                  <div className="card-actions justify-end self-end">
                     <button className="btn btn-sm capitalize bg-amber-700 border-0 hover:bg-amber-900">
                        <Link to={`/chefs/${_id}`}>View Recipes</Link>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleChef;