import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {

   const { signIn, resetEmail, googlePopUp, githubPopUp } = useContext(AuthContext);
   const [showPass, setShowPass] = useState(false);

   const navigate = useNavigate();
   const location = useLocation();

   const [email, setEmail] = useState("");
   const [emailErr, setEmailErr] = useState("");

   const [password, setPassword] = useState("");
   const [passwordErr, setPasswordErr] = useState("");

   const [success, setSuccess] = useState('');
   const [error, setError] = useState('');
   const emailRef = useRef();

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

   // =========================Handle Sign In ===================//
   const handleSignIn = (event) => {
      event.preventDefault();

      setSuccess('');
      setError('');

      const form = event.target;
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
      signIn(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast("Successfully Login.");
            navigate(from, { replace: true });
         })
         .catch(err => {
            toast(err.message);
         });

   };

   // =======================handle reset email================//
   const handleResetPassword = () => {
      const email = emailRef.current.value;
      if (!email) {
         toast("Please Provide your email address to reset.");
      }

      resetEmail(email)
         .then(() => {
            toast("Please check your email.");
         })
         .catch((err) => {
            toast(err.message);
         });
   };

   // ===========================Handle Google Login =========================///
   const handleGoogleLogIn = () => {
      googlePopUp()
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast("Successfully login with Google.");
            navigate(from, { replace: true });
         })
         .catch(err => {
            toast(err.message);
         });
   };



   // =========================Handle Github Login ========================//
   const handleGithubLogIn = () => {
      githubPopUp()
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast("Successfully login with Github.");
            navigate(from, { replace: true });
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


                        {/* =================Forgot Password================== */}
                        <label className="label">
                           <p className=" text-lg">
                              <small>
                                 Forgot Password ?
                                 <button onClick={handleResetPassword} className=" btn  ml-2 p-0 btn-link capitalize">Reset password</button>
                              </small>
                           </p>
                        </label>
                     </div>


                     <div className="form-control mt-2">
                        <button className="btn btn-secondary">Login</button>
                     </div>

                     <button onClick={handleGoogleLogIn} className="btn btn-outline btn-secondary capitalize text-md mt-5">
                        <FaGoogle className="mr-3 text-2xl" />
                        Login with google
                     </button>
                     <button onClick={handleGithubLogIn} className="btn btn-outline btn-active capitalize text-md ">
                        <FaGithub className="mr-3 text-2xl" />
                        Login with github
                     </button>
                     <p className="text-center"><small>Don&apos;t have an account ? <Link to="/register" className="text-red-600 font-medium">Please Register.</Link></small></p>

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

export default Login;