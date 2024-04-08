"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            router.push('/');
        } catch (error: any) {
            console.log("Login failed", error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
            <h1 className="text-3xl">{loading ? "Processing" : "Login"}</h1>
            <hr />

            <label htmlFor="email">email</label>
            <input
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
                className="text-black"
            />
            <label htmlFor="password">password</label>
            <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="text-black"
            />
            <button onClick={onLogin} className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 my-2">Login</button>
            <Link href="/signup" className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 mb-2">No account? Sign up here!</Link>
            <Link href="/reset-password" className="underline">Forgot your password? Click here to reset!</Link>
        </div>
    )
}

export default LoginPage;