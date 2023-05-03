import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {

   const { signIn } = useContext(AuthContext);
   const [showPass, setShowPass] = useState(false);
   const [success, setSuccess] = useState('');
   const [error, setError] = useState('');



   const handleSignIn = (event) => {
      event.preventDefault();
      setSuccess('');
      setError('');
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      if (password !== confirm) {
         setError("your password didn't match.");
      }
      else if (password.length < 6) {
         setError("password must be 6 character or above.");
      }

      console.log(email, password);

      signIn(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast("Successfully Login.");
         })
         .catch(err => {
            toast(err.message);
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


                     <div className="form-control relative">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type={showPass ? "text" : "password"} name='password' placeholder="Enter your Password" className="input input-bordered" required />

                        {/* ==================Show password toggle==================  */}
                        <button className='absolute right-5 top-12' onClick={() => setShowPass(!showPass)}>
                           <small>
                              {
                                 showPass
                                    ? <FaEye className='text-2xl text-red-900' />
                                    : <FaEyeSlash className='text-2xl text-red-700 ' />
                              }
                           </small>
                        </button>

                        {/* =================Forgot Password================== */}
                        <label className="label">
                           <p className=" text-lg">
                              <small>
                                 Forgot Password ?
                                 <button className=" btn  ml-2 p-0 btn-link capitalize">Reset password</button>
                              </small>
                           </p>
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

                     <p className="text-green-700">
                        {success}
                     </p>
                     <p className="text-red-700">
                        {error}

                     </p>
                  </div>
               </form>


            </div>
         </div>
      </section>
   );
};

export default Login;