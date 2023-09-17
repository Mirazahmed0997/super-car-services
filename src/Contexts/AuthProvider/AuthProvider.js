import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext=createContext()
const auth=getAuth(app)

 const AuthProvider = ({children}) => {

    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>
    {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login=(email,password)=>
    {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>
    {
        return signOut(auth);
    }

    const GoogleSignIn=(provider)=>
    {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const varifyEmail=()=>
    {
        return sendEmailVerification(auth.currentUser)
    }
  useEffect(()=>
  {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>
        {
            
                setUser(currentUser)
                setLoading(false)

        });
        return()=>
        {
            return unsubscribe();
        }
  },[])
  


    const authInfo={
        user,
        loading,
        createUser,
        login,
        loading,
        logout,
        GoogleSignIn,
        setLoading,
        varifyEmail

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;