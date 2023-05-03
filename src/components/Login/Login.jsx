import { FaGoogle, FaGithub } from "react-icons/fa";
import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <section className='min-h-[calc(100vh-200px)]'>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold mb-5">Login now!</h1>
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



                     <div className="form-control mt-2">
                        <button className="btn btn-secondary">Login</button>
                     </div>

                     <button className="btn btn-outline btn-secondary capitalize text-lg mt-5">
                        <FaGoogle className="mr-3 text-2xl" />
                        Login with google
                     </button>
                     <button className="btn btn-outline btn-active capitalize text-lg ">
                        <FaGithub className="mr-3 text-2xl" />
                        Login with github
                     </button>
                     <p><small>Don&apos;t have an account ? <Link to="/register" className="text-red-600 font-medium">Please Register.</Link></small></p>
                  </div>
               </form>


            </div>
         </div>
      </section>
   );
};

export default Login;