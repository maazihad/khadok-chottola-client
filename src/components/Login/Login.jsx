import { FaGoogle, FaGithub } from "react-icons/fa";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

   const { signIn } = useContext(AuthContext);

   const handleSignIn = (event) => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log(email, password);

      signIn(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch(err => {
            console.log(err.message);
         });

   };


   return (
      <section className='min-h-[calc(100vh-200px)]'>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <form onSubmit={handleSignIn} className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-96">
                  <div className="card-body">
                     <div className="text-center lg:text-left m-5">
                        <h1 className="text-3xl font-bold text-center">Login Now!</h1>
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your valid email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your Password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>



                     <div className="form-control mt-2">
                        <button className="btn btn-secondary">Login</button>
                     </div>

                     <button className="btn btn-outline btn-secondary capitalize text-md mt-5">
                        <FaGoogle className="mr-3 text-2xl" />
                        Login with google
                     </button>
                     <button className="btn btn-outline btn-active capitalize text-md ">
                        <FaGithub className="mr-3 text-2xl" />
                        Login with github
                     </button>
                     <p className="text-center"><small>Don&apos;t have an account ? <Link to="/register" className="text-red-600 font-medium">Please Register.</Link></small></p>
                  </div>
               </form>


            </div>
         </div>
      </section>
   );
};

export default Login;