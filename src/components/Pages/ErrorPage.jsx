import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import notFound from "../../assets/404.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> <Lottie animationData={notFound} />

          </h2>
          <p className='text-2xl text-amber-900 font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
          >
            <button className='btn text-amber-100 bg-amber-900 py-2 px-4 rounded-3xl hover:bg-amber-700 duration-300 font-medium'>
              <ArrowUturnLeftIcon className="h-5 w-5 text-gray-100 mr-2" />
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
