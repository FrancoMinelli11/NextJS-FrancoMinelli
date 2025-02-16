'use client'
import { Button } from "@/components/button/Button";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
export default function Page() {
    const {logged, handleLogin} = useContext(AuthContext)
    return (
        <div>
            <h1>Admin</h1>
            <Button onClick={handleLogin} text={logged ? 'Logout' : 'Login'}/>
        </div>
    );
}