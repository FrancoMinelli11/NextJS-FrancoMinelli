'use client'
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
      const [logged, setLogged] = useState(false)
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                console.log(user)
            })
        },[])
        const handleLogin = async () => {
            if(logged) {
                signOut(auth)
                setLogged(false)
            }else{
                const resultado = await signInWithEmailAndPassword(auth, 'tuki@tukiti.com' , '123456')
                console.log(resultado)
                setLogged(true)
            }
        }
    return (
        <AuthContext.Provider value={{logged, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
