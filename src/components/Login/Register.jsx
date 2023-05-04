import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Register = () => {
   const { createUser } = useContext(AuthContext);

   const [acceptConditions, setConditions] = useState(false);
   const [showPass, setShowPass] = useState(false);

   const [email, setEmail] = useState("");
   const [emailErr, setEmailErr] = useState("");

   const [password, setPassword] = useState("");
   const [passwordErr, setPasswordErr] = useState("");


   const [success, setSuccess] = useState('');
   const [error, setError] = useState('');

   const from = location.state?.from?.pathname || '/';

   /// ======================handle email=====================//

   const handleEmail = (event) => {
      const email = event.target.value;
      setEmail(email);
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
         setEmailErr("Please provide a valid email");
      } else {
         setEmailErr("");
      }
   };


   //========================handle password ===================//

   const handlePassword = (event) => {
      const passwordInput = event.target.value;
      setPassword(passwordInput);
      if (passwordInput.length < 6) {
         setPasswordErr("Password must be at least 6 characters long");
      } else if (!/(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$)/.test(passwordInput)) {
         setPasswordErr("Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character.");
      } else {
         setPasswordErr("");
      }
   };




   //==============================Handle Register ===================//
   const handleRegister = (event) => {
      event.preventDefault();

      setSuccess('');
      setError('');

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      if (emailErr) {
         form.email.focus();
         return;
      } else if (passwordErr) {
         form.password.focus();
         return;
      }
      console.log(name, email, password);

      form.reset("");
      createUser(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast("Successfully Registered.");
         })
         .catch(err => {
            console.log(err.message);
            toast(err.message);
         });

   };


   //=======================Handle Terms & Conditions ====================//
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
                        <input value={email} onChange={handleEmail} type="email" name="email" placeholder="Enter your valid email" className={`input input-bordered ${email
                           ? emailErr
                              ? "border-red-500"
                              : "border-green-500"
                           : "border-gray-300 focus:border-blue-600"
                           }`} required />
                        {emailErr && <span className="error">{emailErr}</span>}
                     </div>



                     <div className="form-control relative">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input value={password} onChange={handlePassword} type={showPass ? "text" : "password"} name='password' placeholder="Enter your Password" className={`
                           input input-bordered ${password
                              ? passwordErr
                                 ? "border-red-500"
                                 : "border-green-500"
                              : "border-gray-300 focus:border-blue-600"
                           }
                        `} required />

                        {/* ==================Show password toggle==================  */}
                        <span className='absolute right-5 top-12' onClick={() => setShowPass(!showPass)}>
                           <small>
                              {
                                 showPass
                                    ? <FaEye className='text-2xl text-red-900' />
                                    : <FaEyeSlash className='text-2xl text-red-700 ' />
                              }
                           </small>
                        </span>
                        {passwordErr && <span className="error">{passwordErr}</span>}
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

                     {/* <p className="text-green-700">
                        {success}
                     </p>
                     <p className="text-red-700">
                        {error}
                     </p> */}
                  </div>
               </form>


            </div>
         </div>
      </section>
   );
};

export default Register;