import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const resetEmail = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
   };
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const googlePopUp = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const githubPopUp = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };

   useEffect(() => {
      const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unSubscriber;
      };
   }, []);


   const AuthInfo = {
      user,
      loading,
      createUser,
      signIn,
      resetEmail,
      googlePopUp,
      githubPopUp,
      logOut,


   };
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;