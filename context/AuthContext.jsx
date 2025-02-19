'use client'
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
      const [logged, setLogged] = useState(false)
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLogged(true)
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Bienvenido',
                        text: user.email,
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    setLogged(false)
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Sesión Cerrada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        },[])
        const handleLogin = async (email,password) => {
            if(logged) {
                signOut(auth)
                setLogged(false)
            }else{
                const resultado = await signInWithEmailAndPassword(auth, email , password)
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
