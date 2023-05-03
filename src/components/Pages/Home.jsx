import React from 'react';
import { Link } from 'react-router-dom';
import Chef from '../Components/ChefBanner';
import Chefs from '../Components/Chefs';

const Home = () => {
   return (
      <>
         <section className="hero min-h-screen"
            style={{ backgroundImage: `url("https://media-cdn2.greatbritishchefs.com/media/x1ifrwul/img81389.whqc_1426x713q90.webp")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="w-5/6">
                  <h1 className="mb-5 text-7xl font-extrabold">
                     Indulge in the rich taste of tradition at <br />
                  </h1>
                  <h1 className="mb-5 text-7xl font-extrabold">Khadok Chottola</h1>
                  <p className="mb-5 text-lg">
                     Welcome to <Link to="/">Khadok Chottola</Link>, your go-to destination for authentic Bangladeshi cuisine. Our dishes are made with fresh and locally sourced ingredients, cooked to perfection with aromatic spices and traditional recipes.

                  </p>

               </div>
            </div>
         </section>
         <section>
            <Chef />
            <Chefs />
         </section>


      </>
   );
};

export default Home;