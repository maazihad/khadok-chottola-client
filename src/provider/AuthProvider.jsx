import React, { createContext, useEffect } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
      return () => {
         return unSubscriber;
      };
   }, []);


   const AuthInfo = {
      user,
      createUser,
      signIn,
      logOut

   };
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;