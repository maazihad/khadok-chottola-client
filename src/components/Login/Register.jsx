import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

   const { createUser } = useContext(AuthContext);
   const [acceptConditions, setConditions] = useState(false);
   const [showPass, setShowPass] = useState(false);

   const handleRegister = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      form.reset("");
      console.log(name, email, password);

      createUser(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch(err => {
            console.log(err.message);
         });
   };

   const handleConditions = (event) => {
      setConditions(event.target.checked);
   };

   return (
      <section className='min-h-[calc(100vh-200px)]'>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <form onSubmit={handleRegister} className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-96">
                  <div className="card-body">
                     <div className="text-center lg:text-left m-5">
                        <h1 className="text-3xl font-bold text-center">Register Now!!!</h1>
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
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
                                    ? <FaEyeSlash className='text-2xl text-red-700 ' />
                                    : <FaEye className='text-2xl text-red-900' />
                              }
                           </small>
                        </button>
                     </div>



                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='url' placeholder="Photo URL" className="input input-bordered" />
                     </div>


                     <div className="form-control">
                        <label className="flex cursor-pointer items-center">
                           <input onClick={handleConditions} type="checkbox" className="checkbox checkbox-xs" />
                           <span className="label-text ml-3">Accept <Link to="/terms" className='text-red-700 underline'>Terms & Conditions</Link></span>
                        </label>
                     </div>

                     <div className="form-control mt-2">
                        <button className="btn btn-active" disabled={!acceptConditions}>Register</button>
                     </div>


                     <p className='text-center'><small>Already have an account ? <Link to="/login" className="text-red-600 font-medium">Please Login.</Link></small></p>
                  </div>
               </form>


            </div>
         </div>
      </section>
   );
};

export default Register;