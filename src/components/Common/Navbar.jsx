import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoText from "../../assets/logo/logo-text.png";
import userLogo from "../../assets/logo/user-logo.jpg";
const Navbar = () => {
   return (
      <header className="drop-shadow-md bg-white">
         <div className="  px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <nav className='relative flex items-center justify-between'>
               <Link to="/">
                  <img className='w-64' src={logoText} alt="" />
               </Link>

               <ul className='items-center hidden space-x-8 lg:flex font-bold text-lg'>
                  <li>
                     <NavLink
                        to="/"
                        className={
                           ({ isActive }) => isActive ? "active hover:text-amber-500" : "default hover:text-amber-400"
                        }
                     >
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/blog"
                        className={({ isActive }) => isActive ? "active hover:text-amber-400" : "default hover:text-amber-400"}
                     >
                        Blog
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/login"
                        className={({ isActive }) => isActive ? "active hover:text-amber-400" : "default hover:text-amber-400"}
                     >
                        Login
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/"
                     >
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                              <img src={userLogo} />
                           </div>
                        </label>
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Navbar;