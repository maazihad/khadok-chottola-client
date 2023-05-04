import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoText from "../../assets/logo/logo-text.png";
import userLogo from "../../assets/logo/user-logo.jpg";
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';



const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);


   const handleLogOut = () => {
      logOut()
         .then()
         .catch((err) => {
            console.log(err.message);
         });
   };

   return (
      <header className=" z-50 drop-shadow-md bg-white">
         <div className="  px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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

                  <li className='flex items-center'>
                     {user
                        ? <NavLink className='' onClick={handleLogOut} >Logout</NavLink>
                        : <NavLink
                           to="/login"
                           className={({ isActive }) => isActive ? "active hover:text-amber-400" : "default hover:text-amber-400"}
                        >
                           Login
                        </NavLink>
                     }
                     {user &&
                        <label tabIndex={0} className="btn btn-ghost btn-circle ml-5 avatar">
                           <div className="w-10 rounded-full">
                              <img src={userLogo} />
                           </div>
                        </label>}
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Navbar;