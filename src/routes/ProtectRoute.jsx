import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/Components/LoadingSpinner';

const ProtectRoute = ({ children }) => {

   const { user, loading } = useContext(AuthContext);

   const location = useLocation();
   console.log(location);

   if (loading) {
      return <>
         <LoadingSpinner />
      </>;
   }

   if (user) {
      return children;
   }

   return <Navigate to='/login' state={{ from: location }} replace />;
};

export default ProtectRoute;;