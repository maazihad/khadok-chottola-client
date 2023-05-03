import React from 'react';

const SingleChef = ({ singleChef }) => {

   const { chef_name, chef_thumb } = singleChef;


   return (
      <div className="">
         <div className=" card w-full bg-base-100 shadow-xl lg:grid">
            <figure><img className="w-96 h-96" src={chef_thumb} alt="Shoes" /></figure>
            <div className="card-body pt-3 ">
               <h2 className="card-title text-center text-amber-800">{chef_name}</h2>

               <div className="card-actions justify-end">
                  <button className="btn btn-sm capitalize bg-amber-700 border-0 hover:bg-amber-900">View Recipes</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleChef;