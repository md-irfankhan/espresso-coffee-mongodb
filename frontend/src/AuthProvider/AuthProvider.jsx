import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)

        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const signoutUser=()=>{
        return signOut(auth)
    }

    const userInfo={
        createUser,
        updateUser,
        signoutUser,
        user

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