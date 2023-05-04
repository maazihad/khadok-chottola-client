import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Chef from '../Components/ChefBanner';
import Chefs from '../Components/Chefs';
import LoadingSpinner from '../Components/LoadingSpinner';
import Dishes from '../Components/Dishes';
import ImageCarousel from '../Components/ImageCarousel';

const Home = () => {

   // =============Loading....................
   const navigation = useNavigation();
   if (navigation.state === 'loading') {
      return <LoadingSpinner />;
   }

   return (
      <>
         <section className="hero min-h-screen"
            style={{ backgroundImage: `url("https://media-cdn2.greatbritishchefs.com/media/x1ifrwul/img81389.whqc_1426x713q90.webp")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="w-5/6">
                  <h1 className="mb-5 text-7xl font-extrabold uniqueH">
                     Indulge in the rich taste of tradition at <br />
                  </h1>
                  <h1 className="mb-5 text-7xl font-extrabold lg:uniqueH md:uniqueH ">
                     <span className='lg:bg-purple-700 uniqueH lg:p-2 lg:px-5'>Khadok </span>
                     <span className='lg:bg-amber-700 uniqueH lg:p-2 lg:px-5'>Chottola</span>
                  </h1>
                  <p className="mb-5 text-lg">
                     Welcome to <Link to="/">Khadok Chottola</Link>, your go-to destination for authentic Bangladeshi cuisine. Our dishes are made with fresh and locally sourced ingredients, cooked to perfection with aromatic spices and traditional recipes.

                  </p>

               </div>
            </div>
         </section>

         <section>
            <Chef />
         </section>

         <section>
            <Chefs />
         </section>

         <section className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <h2 className="bg-white mb-4 uniqueH shadow-md  py-5 text-6xl font-bold text-center text-amber-700">Bengali family&apos;s favorite dishes.</h2>
            <Dishes />
         </section>

         <section className='my-20'>
            <ImageCarousel />
         </section>
      </>
   );
};

export default Home;;