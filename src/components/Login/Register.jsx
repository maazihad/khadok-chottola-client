import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <section className='min-h-[calc(100vh-200px)]'>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold mb-5">Please Register Now!!!</h1>
               </div>
               <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-96">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>


                     <div className="form-control">
                        <label className="flex cursor-pointer items-center">
                           <input type="checkbox" className="checkbox checkbox-xs" />
                           <span className="label-text ml-3">Accept <Link to="/terms" className='text-red-700 underline'>Terms & Conditions</Link></span>
                        </label>
                     </div>

                     <div className="form-control mt-2">
                        <button className="btn btn-active">Register</button>
                     </div>


                     <p className='text-center'><small>Already have an account ? <Link to="/register" className="text-red-600 font-medium">Please Login.</Link></small></p>
                  </div>
               </form>


            </div>
         </div>
      </section>
   );
};

export default Register;