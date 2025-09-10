import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);

        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signoutUser=()=>{
        setLoading(false)
        return signOut(auth);
    }

    const userInfo={
        createUser,
        updateUser,
        signoutUser,
        user,
        loginUser,
        loading

    }
    return (
        <div>
            
            <AuthContext.Provider value={userInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;